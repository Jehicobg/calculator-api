import express from "express";
import indexRoutes from "./routes/index.routes";

export function createServer() {
  const server = express();

  //Settings
  server.use(express.json());

  //Routes
  server.use("/", indexRoutes);

  return server;
}
