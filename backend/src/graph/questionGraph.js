import { END, START, StateGraph, StateSchema } from "@langchain/langgraph";
import * as z from "zod";

import { callModel, executeTools } from "../llm/ollama.js";

const QuestionState = new StateSchema({
  messages: z.array(z.any()).default([]),
  answer: z.string().default(""),
});

const routeAfterModel = (state) => {
  const lastMessage = state.messages.at(-1);

  if (lastMessage?.tool_calls?.length) {
    return "execute_tools";
  }

  return END;
};

const graph = new StateGraph(QuestionState)
  .addNode("call_model", callModel)
  .addNode("execute_tools", executeTools)
  .addEdge(START, "call_model")
  .addConditionalEdges("call_model", routeAfterModel)
  .addEdge("execute_tools", "call_model");

export const questionGraph = graph.compile();
