import ollama from "ollama";
import { MODEL } from "../utils/constants.js";
import { executeTool, toolHandlers, tools } from "../tools/registory.js";
import { interrupt } from "@langchain/langgraph/web";
import { SYSTEM_PROMPT } from "./prompt.js";

export const callModel = async (state) => {
  const systemMessage = { message: SYSTEM_PROMPT, role: "system" };

  const response = await ollama.chat({
    model: MODEL,
    messages: [systemMessage, ...state.messages],
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

    if (toolHandlers[name].approval) {
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
