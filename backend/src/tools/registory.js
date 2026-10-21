import { createTask } from "./createTask.js";

export const tools = [
  {
    type: "function",
    function: {
      name: "create_task",
      description: "Create a task with the specified title.",
      parameters: {
        type: "object",
        properties: {
          title: {
            type: "string",
            description: "The title of the task to create.",
          },
        },
        required: ["title"],
      },
    },
  },
];

const toolHandlers = {
  create_task: createTask,
};

export const executeTool = (name, args) => {
  const handler = toolHandlers[name];

  if (!handler) {
    throw new Error(`Unknown tool: ${name}`);
  }

  return handler(args.title);
};
