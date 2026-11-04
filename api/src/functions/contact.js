const { app } = require("@azure/functions");
const { CosmosClient } = require("@azure/cosmos");
const crypto = require("crypto");

// ---- Limits -----------------------------------------------------------------
const MAX_BODY_BYTES = 10 * 1024; // 10 KB is plenty for name + email + message
const MAX_NAME = 100;
const MAX_EMAIL = 254;
const MAX_MESSAGE = 5000;

// Rate limit: at most RATE_LIMIT_MAX submissions per IP per window.
// This is in-memory, so it is per function instance (best effort). It stops
// simple floods and accidental double-submits; for stronger protection put the
// API behind Azure Front Door / API Management rate limiting.
const RATE_LIMIT_MAX = 5;
const RATE_LIMIT_WINDOW_MS = 10 * 60 * 1000;
const submissionsByIp = new Map();

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
// Strip control characters except tab and newline.
const CONTROL_CHARS = /[\u0000-\u0008\u000B\u000C\u000E-\u001F\u007F]/g;

const SECURITY_HEADERS = {
  "Content-Type": "application/json; charset=utf-8",
  "Cache-Control": "no-store",
  "X-Content-Type-Options": "nosniff",
};

// ---- Database (created lazily so a missing setting fails one request, not the whole app)
let container;
const getContainer = () => {
  if (container) return container;

  const connectionString = process.env.COSMOS_CONNECTION_STRING;
  if (!connectionString) {
    throw new Error("COSMOS_CONNECTION_STRING is not configured.");
  }

  const client = new CosmosClient(connectionString);
  container = client
    .database(process.env.COSMOS_DATABASE_NAME || "portfolio-db")
    .container(process.env.COSMOS_CONTAINER_NAME || "messages");
  return container;
};

// ---- Helpers ----------------------------------------------------------------
const respond = (status, success, message, extra = {}) => ({
  status,
  headers: SECURITY_HEADERS,
  jsonBody: { success, message, ...extra },
});

const getClientIp = (request) => {
  const forwarded =
    request.headers.get("x-azure-clientip") ||
    request.headers.get("x-forwarded-for") ||
    "";
  return forwarded.split(",")[0].trim() || "unknown";
};

const isRateLimited = (ip) => {
  const now = Date.now();
  const recent = (submissionsByIp.get(ip) || []).filter(
    (time) => now - time < RATE_LIMIT_WINDOW_MS
  );

  if (recent.length >= RATE_LIMIT_MAX) {
    submissionsByIp.set(ip, recent);
    return true;
  }

  recent.push(now);
  submissionsByIp.set(ip, recent);

  // Keep the map from growing forever.
  if (submissionsByIp.size > 5000) {
    for (const [key, times] of submissionsByIp) {
      if (times.every((time) => now - time >= RATE_LIMIT_WINDOW_MS)) {
        submissionsByIp.delete(key);
      }
    }
  }

  return false;
};

const cleanText = (value, maxLength) => {
  if (typeof value !== "string") return "";
  const cleaned = value.replace(CONTROL_CHARS, "").trim();
  return cleaned.length > maxLength ? null : cleaned;
};

// ---- Handler ----------------------------------------------------------------
app.http("contact", {
  methods: ["POST"],
  authLevel: "anonymous",
  handler: async (request, context) => {
    const contentType = request.headers.get("content-type") || "";
    if (!contentType.toLowerCase().startsWith("application/json")) {
      return respond(415, false, "Unsupported content type.");
    }

    const declaredLength = Number(request.headers.get("content-length") || 0);
    if (declaredLength > MAX_BODY_BYTES) {
      return respond(413, false, "Message is too large.");
    }

    if (isRateLimited(getClientIp(request))) {
      return {
        ...respond(429, false, "Too many messages. Please try again later or email me directly."),
        headers: { ...SECURITY_HEADERS, "Retry-After": String(RATE_LIMIT_WINDOW_MS / 1000) },
      };
    }

    let body;
    try {
      const raw = await request.text();
      if (Buffer.byteLength(raw, "utf8") > MAX_BODY_BYTES) {
        return respond(413, false, "Message is too large.");
      }
      body = JSON.parse(raw);
    } catch {
      return respond(400, false, "Invalid request.");
    }

    if (!body || typeof body !== "object" || Array.isArray(body)) {
      return respond(400, false, "Invalid request.");
    }

    // Honeypot: real visitors never see or fill the "website" field.
    // Pretend success so bots don't learn they were filtered.
    if (typeof body.website === "string" && body.website.trim() !== "") {
      return respond(200, true, "Message saved successfully.");
    }

    const name = cleanText(body.name, MAX_NAME);
    const email = cleanText(body.email, MAX_EMAIL);
    const message = cleanText(body.message, MAX_MESSAGE);

    if (name === null || email === null || message === null) {
      return respond(400, false, "One of the fields is too long.");
    }

    if (!name || !email || !message) {
      return respond(400, false, "Name, email, and message are required.");
    }

    if (!EMAIL_PATTERN.test(email)) {
      return respond(400, false, "Please enter a valid email address.");
    }

    const contactMessage = {
      id: crypto.randomUUID(),
      type: "contact",
      name,
      email,
      message,
      createdAt: new Date().toISOString(),
    };

    try {
      await getContainer().items.create(contactMessage);
    } catch (error) {
      // Log the real reason server-side only; never send internals to the browser.
      context.error("Failed to save contact message", error);
      return respond(500, false, "Failed to save message. Please email me directly.");
    }

    return respond(200, true, "Message saved successfully.");
  },
});
