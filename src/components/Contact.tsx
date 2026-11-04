import { useState, type FormEvent } from "react";

const email = "hasifbakar@gmail.com";
const phone = "+65 8129 6162";
const phoneHref = "tel:+6581296162";

// Formspree form endpoint. Create a form at https://formspree.io and paste its
// ID here (the part after /f/). The ID is public by design, so it is safe to commit.
const FORMSPREE_FORM_ID = "xkjjkzdw";
const formEndpoint = `https://formspree.io/f/${FORMSPREE_FORM_ID}`;
const fallbackMessage = `Sorry, the message could not be sent. Please email me at ${email}.`;

type FormspreeResponse = {
  ok?: boolean;
  errors?: Array<{ message?: string }>;
};

const Contact = () => {
  const [copyState, setCopyState] = useState("Copy email");
  const [status, setStatus] = useState("");
  const [isSending, setIsSending] = useState(false);

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setCopyState("Copied");
      window.setTimeout(() => setCopyState("Copy email"), 1800);
    } catch {
      setCopyState("Copy failed");
      window.setTimeout(() => setCopyState("Copy email"), 1800);
    }
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (isSending) return;

    const form = event.currentTarget;
    const formData = new FormData(form);

    setIsSending(true);
    setStatus("Sending...");

    try {
      const response = await fetch(formEndpoint, {
        method: "POST",
        headers: {
          Accept: "application/json",
        },
        body: formData,
      });

      const result: FormspreeResponse = await response.json().catch(() => ({}));

      if (!response.ok) {
        const reason = result.errors?.map((error) => error.message).filter(Boolean).join(" ");
        setStatus(reason ? `${reason} You can also email me at ${email}.` : fallbackMessage);
        return;
      }

      setStatus("Thanks! Your message has been sent. I will reply by email.");
      form.reset();
    } catch {
      setStatus(fallbackMessage);
    } finally {
      setIsSending(false);
    }
  };

  return (
    <div className="contact-panel mt-8">
      <div className="section-heading">
        <p className="eyebrow">Contact</p>
        <div className="section-title-row">
          <h2>Let us build something useful.</h2>
          <p>
            I am open to software engineering, frontend development, UI/UX, and
            rail digitalisation opportunities.
          </p>
        </div>
      </div>

      <div className="mt-8 grid gap-6 lg:grid-cols-[0.85fr_1.15fr]">
        <div className="flex flex-wrap content-start gap-3">
          <a href={`mailto:${email}`} className="primary-button">
            Email me
          </a>
          <a href={phoneHref} className="secondary-button">
            {phone}
          </a>
          <span className="flex items-center px-1 text-sm font-medium text-[var(--muted)]">
            Singapore
          </span>
          <button type="button" onClick={handleCopyEmail} className="secondary-button">
            {copyState}
          </button>
          <a
            href="https://www.linkedin.com/in/abuhasif"
            target="_blank"
            rel="noreferrer"
            className="secondary-button"
          >
            LinkedIn
          </a>
          <a
            href="https://www.instagram.com/burnt.shots/"
            target="_blank"
            rel="noreferrer"
            className="secondary-button"
          >
            Instagram
          </a>
          <a
            href="https://github.com/abuhasif"
            target="_blank"
            rel="noreferrer"
            className="secondary-button"
          >
            GitHub
          </a>
        </div>

        <form onSubmit={handleSubmit} className="relative grid gap-3">
          <div className="grid gap-3 sm:grid-cols-2">
            <label className="grid gap-2 text-sm font-semibold text-[var(--text)]">
              Name
              <input
                name="name"
                required
                maxLength={100}
                autoComplete="name"
                className="rounded-lg border border-[var(--border)] bg-[var(--section)] px-4 py-3 text-sm font-medium text-[var(--text)] outline-none transition focus:border-[var(--primary)]"
                placeholder="Your name"
              />
            </label>

            <label className="grid gap-2 text-sm font-semibold text-[var(--text)]">
              Email
              <input
                name="email"
                type="email"
                required
                maxLength={254}
                autoComplete="email"
                className="rounded-lg border border-[var(--border)] bg-[var(--section)] px-4 py-3 text-sm font-medium text-[var(--text)] outline-none transition focus:border-[var(--primary)]"
                placeholder="you@example.com"
              />
            </label>
          </div>

          <label className="grid gap-2 text-sm font-semibold text-[var(--text)]">
            Message
            <textarea
              name="message"
              required
              maxLength={5000}
              rows={5}
              className="resize-none rounded-lg border border-[var(--border)] bg-[var(--section)] px-4 py-3 text-sm font-medium text-[var(--text)] outline-none transition focus:border-[var(--primary)]"
              placeholder="Tell me about the opportunity or project."
            />
          </label>

          <input type="hidden" name="_subject" value="New message from your portfolio" />

          {/* Honeypot: hidden from people. Formspree silently drops submissions that fill "_gotcha". */}
          <div aria-hidden="true" className="absolute -left-[9999px] h-0 w-0 overflow-hidden">
            <label>
              Leave this field empty
              <input name="_gotcha" type="text" tabIndex={-1} autoComplete="off" />
            </label>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <button
              type="submit"
              className="primary-button disabled:cursor-not-allowed disabled:opacity-60"
              disabled={isSending}
            >
              {isSending ? "Sending..." : "Send message"}
            </button>
            <p role="status" aria-live="polite" className="text-sm font-medium text-[var(--muted)]">
              {status}
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
