import ollama from "ollama";
import { MODEL } from "../utils/constants.js";
import { executeTool, tools } from "../tools/registory.js";
import { interrupt } from "@langchain/langgraph/web";

export const callModel = async (state) => {
  const response = await ollama.chat({
    model: MODEL,
    messages: state.messages,
    stream: false,
    tools: tools,
  });

  return {
    messages: [...state.messages, response.message],
    answer: response.message.content ?? "",
  };
};

export const executeTools = (state) => {
  const lastMessage = state.messages.at(-1);
  const toolCalls = lastMessage?.tool_calls ?? [];
  const toolMessages = [];

  for (const toolCall of toolCalls) {
    const { name, arguments: args } = toolCall.function;

    // Pause execution and ask the user for approval.
    const approval = interrupt({
      type: "tool_approval",
      message: `JARVIS wants to execute the "${name}" tool.`,
      tool: name,
      arguments: args,
      question: "Do you approve this action?",
    });

    if (approval?.approved !== true) {
      toolMessages.push({
        role: "tool",
        tool_name: name,
        content: JSON.stringify({
          success: false,
          message: "The user rejected this tool execution.",
        }),
      });

      continue;
    }

    // Execute only after approval.
    const result = executeTool(name, args);

    toolMessages.push({
      role: "tool",
      tool_name: name,
      content: JSON.stringify(result),
    });
  }

  return {
    messages: [...state.messages, ...toolMessages],
  };
};
