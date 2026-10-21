import { Hono } from "@hono/hono";

export const createApp = () => {
  const app = new Hono();

  app.get("/health", (c) => {
    return c.json({
      status: "ok",
      application: "jarvis-backend",
    });
  });

  return app;
};
