const { app } = require("@azure/functions");
const { CosmosClient } = require("@azure/cosmos");
const crypto = require("crypto");

const client = new CosmosClient(process.env.COSMOS_CONNECTION_STRING);

const database = client.database(
  process.env.COSMOS_DATABASE_NAME || "portfolio-db"
);

const container = database.container(
  process.env.COSMOS_CONTAINER_NAME || "messages"
);

app.http("contact", {
  methods: ["POST"],
  authLevel: "anonymous",
  handler: async (request) => {
    try {
      const body = await request.json();

      const name = body.name?.toString().trim();
      const email = body.email?.toString().trim();
      const message = body.message?.toString().trim();

      if (!name || !email || !message) {
        return {
          status: 400,
          jsonBody: {
            success: false,
            message: "Name, email, and message are required.",
          },
        };
      }

      const contactMessage = {
        id: crypto.randomUUID(),
        type: "contact",
        name,
        email,
        message,
        createdAt: new Date().toISOString(),
      };

      await container.items.create(contactMessage);

      return {
        status: 200,
        jsonBody: {
          success: true,
          message: "Message saved successfully.",
          id: contactMessage.id,
        },
      };
    } catch (error) {
      return {
        status: 500,
        jsonBody: {
          success: false,
          message: "Failed to save message.",
          error: error.message,
        },
      };
    }
  },
});