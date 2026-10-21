import { createTask } from "./createTask.js";
import { listTasks } from "./listTask.js";

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
  {
    type: "function",
    function: {
      name: "list_tasks",
      description: "Retrieve all tasks stored in the task manager.",
      parameters: {
        type: "object",
        properties: {},
        required: [],
      },
    },
  },
];

const toolHandlers = {
  create_task: createTask,
  list_tasks: listTasks,
};

export const executeTool = (name, args) => {
  const handler = toolHandlers[name];

  if (!handler) {
    throw new Error(`Unknown tool: ${name}`);
  }

  return handler(args.title);
};
