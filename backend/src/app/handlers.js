import { questionGraph } from "../graph/questionGraph.js";

export const healthHandler = (c) =>
  c.json({
    status: "ok",
    application: "jarvis-backend",
  });

export const questionHandler = async (c) => {
  try {
    const body = await c.req.json();
    const { question } = body;

    if (typeof question !== "string" || !question.trim()) {
      return c.json(
        {
          status: "error",
          message: "A non-empty question is required.",
        },
        400,
      );
    }

    const result = await questionGraph
      .invoke({ question: question.trim() });

    const answer = result.answer;

    return c.json({
      status: "ok",
      answer,
    });
  } catch (error) {
    console.error("Failed to process question:", error);

    return c.json(
      {
        status: "error",
        message: "Failed to generate an answer.",
      },
      500,
    );
  }
};
