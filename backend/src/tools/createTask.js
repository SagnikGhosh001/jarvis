export const createTask = (title) => {
  if (typeof title !== "string" || !title.trim()) {
    throw new Error("Task title is required");
  }

  return {
    id: crypto.randomUUID(),
    title: title.trim(),
    status: "pending",
    createdAt: new Date().toISOString(),
  };
};
