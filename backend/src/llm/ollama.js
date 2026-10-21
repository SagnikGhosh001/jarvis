import ollama from "ollama";
import { MODEL } from "../utils/constants.js";

export const generateResponse = async (message) => {
  const response = await ollama.chat({
    model: MODEL,
    messages: [
      {
        role: "user",
        content: message,
      },
    ],
    stream: false,
  });

  return response.message.content;
};
