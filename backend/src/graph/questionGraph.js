import { END, START, StateGraph, StateSchema } from "@langchain/langgraph";
import * as z from "zod";

import { generateResponse } from "../llm/ollama.js";

const QuestionState = new StateSchema({
  question: z.string(),
  answer: z.string().default(""),
});

const answerQuestion = async (state) => {
  const answer = await generateResponse(state.question);

  return { answer };
};

const graph = new StateGraph(QuestionState)
  .addNode("answer_question", answerQuestion)
  .addEdge(START, "answer_question")
  .addEdge("answer_question", END);

export const questionGraph = graph.compile();
