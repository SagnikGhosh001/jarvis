import { completeTask } from "./completeTask.js";
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
  {
    type: "function",
    function: {
      name: "complete_task",
      description: "Mark a task as completed using its ID.",
      parameters: {
        type: "object",
        properties: {
          id: {
            type: "integer",
            description: "The ID of the task to complete",
          },
        },
        required: ["id"],
      },
    },
  },
];

export const toolHandlers = {
  create_task: { fn: createTask, approval: true },
  list_tasks: { fn: listTasks, approval: false },
  complete_task: { fn: completeTask, approval: true },
};

export const executeTool = (name, args) => {
  const handler = toolHandlers[name].fn;

  if (!handler) {
    throw new Error(`Unknown tool: ${name}`);
  }

  return handler(args);
};
