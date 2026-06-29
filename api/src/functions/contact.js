const { app } = require("@azure/functions");

app.http("contact", {
  methods: ["POST"],
  authLevel: "anonymous",
  handler: async (request) => {
    const payload = await request.json().catch(() => null);

    if (!payload?.name || !payload?.email || !payload?.message) {
      return {
        status: 400,
        jsonBody: {
          success: false,
          message: "Please complete every field.",
        },
      };
    }

    return {
      status: 200,
      jsonBody: {
        success: true,
        message: "Message received.",
      },
    };
  },
});
