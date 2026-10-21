import ollama from "ollama";
import { MODEL } from "../utils/constants.js";
import { executeTool, tools } from "../tools/registory.js";

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
