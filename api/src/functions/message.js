const { app } = require("@azure/functions");

app.http("message", {
  methods: ["GET"],
  authLevel: "anonymous",
  handler: async () => {
    return {
      jsonBody: {
        text: "Hello from Azure Functions!",
      },
    };
  },
});
