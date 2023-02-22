export const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Calculator API",
      version: "1.0.0",
      description:
        "Rest API for calculate math expression without external package or JS function.",
    },
    servers: [
      {
        url: "http://localhost:3000",
      },
    ],
  },
  apis: ["./src/services/calculator/routes/*.ts"],
};
