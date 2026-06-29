const { app } = require("@azure/functions");

app.http("contact", {
  methods: ["POST"],
  authLevel: "anonymous",
  handler: async (request) => {
    const body = await request.json();

    return {
      jsonBody: {
        success: true,
        message: "Contact form received",
        data: {
          name: body.name,
          email: body.email,
          message: body.message,
        },
      },
    };
  },
});
