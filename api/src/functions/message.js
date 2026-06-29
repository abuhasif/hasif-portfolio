const { app } = require("@azure/functions");

app.http("message", {
  methods: ["GET", "POST"],
  authLevel: "anonymous",
  handler: async () => {
    return {
      body: JSON.stringify({
        text: "Hello from Azure Functions!",
      }),
      headers: {
        "Content-Type": "application/json",
      },
    };
  },
});
