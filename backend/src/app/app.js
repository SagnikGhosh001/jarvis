import { Hono } from "@hono/hono";
import { healthHandler, questionHandler } from "./handlers.js";

export const createApp = () => {
  const app = new Hono();

  app.get("/health", healthHandler);
  app.post("/ask", questionHandler);

  return app;
};
