import { Command } from "@langchain/langgraph/web";
import { questionGraph } from "../graph/questionGraph.js";

export const healthHandler = (c) =>
  c.json({
    status: "ok",
    application: "jarvis-backend",
  });

export const questionHandler = async (c) => {
  try {
    const body = await c.req.json();
    const { question, threadId } = body;

    if (typeof question !== "string" || !question.trim()) {
      return c.json(
        {
          status: "error",
          message: "A non-empty question is required.",
        },
        400,
      );
    }

    const currentThreadId = threadId ?? crypto.randomUUID();

    const config = {
      configurable: {
        thread_id: currentThreadId,
      },
    };

    const result = await questionGraph.invoke({
      messages: [
        {
          role: "user",
          content: question.trim(),
        },
      ],
    }, config);

    const snapshot = await questionGraph.getState(config);

    const approvals = snapshot.tasks
      .flatMap((task) => task.interrupts ?? [])
      .map((item) => item.value);

    if (approvals.length > 0) {
      return c.json({
        status: "approval_required",
        threadId: currentThreadId,
        approvals,
      });
    }

    return c.json({
      status: "ok",
      message: result.answer,
      threadId: currentThreadId,
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

export const approvalHandler = async (c) => {
  try {
    const { threadId, approved } = await c.req.json();

    if (!threadId || typeof approved !== "boolean") {
      return c.json(
        {
          status: "error",
          message: "threadId and a boolean approved value are required",
        },
        400,
      );
    }

    const config = {
      configurable: {
        thread_id: threadId,
      },
    };

    const result = await questionGraph.invoke(
      new Command({
        resume: { approved },
      }),
      config,
    );

    const snapshot = await questionGraph.getState(config);

    const approvals = snapshot.tasks
      .flatMap((task) => task.interrupts ?? [])
      .map((item) => item.value);

    if (approvals.length > 0) {
      return c.json({
        status: "approval_required",
        threadId,
        approvals,
      });
    }

    return c.json({
      status: "ok",
      message: result.answer,
      threadId,
    });
  } catch (error) {
    console.error("Approval failed:", error);

    return c.json(
      {
        status: "error",
        message: error.message,
      },
      500,
    );
  }
};

export const getApprovalsHandler = async (c) => {
  try {
    const threadId = c.req.query("threadId");

    if (!threadId) {
      return c.json(
        {
          status: "error",
          message: "threadId query parameter is required",
        },
        400,
      );
    }

    const config = {
      configurable: {
        thread_id: threadId,
      },
    };

    const snapshot = await questionGraph.getState(config);

    const approvals = snapshot.tasks
      .flatMap((task) => task.interrupts ?? [])
      .map((item) => item.value);

    return c.json({
      status: "ok",
      threadId,
      approvals,
      count: approvals.length,
    });
  } catch (error) {
    console.error("Failed to retrieve approvals:", error);

    return c.json(
      {
        status: "error",
        message: error.message,
      },
      500,
    );
  }
};
