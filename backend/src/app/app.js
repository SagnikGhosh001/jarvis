import { Hono } from "@hono/hono";
import {
  approvalHandler,
  getApprovalsHandler,
  healthHandler,
  questionHandler,
} from "./handlers.js";

export const createApp = () => {
  const app = new Hono();

  app.get("/health", healthHandler);
  app.post("/ask", questionHandler);
  app.post("/approve", approvalHandler);
  app.get("/approvals", getApprovalsHandler);

  return app;
};
