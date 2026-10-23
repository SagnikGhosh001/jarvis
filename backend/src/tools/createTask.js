import { db } from "../db/database.js";

export const createTask = ({ title }) => {
  if (typeof title !== "string" || !title.trim()) {
    throw new Error("Task title is required");
  }

  const task = {
    title: title.trim(),
    status: "pending",
    created_at: new Date().toISOString(),
  };

  const result = db.prepare(`
    INSERT INTO tasks (title, status, created_at)
    VALUES (?, ?, ?)
  `).run(task.title, task.status, task.created_at);

  return {
    id: Number(result.lastInsertRowid),
    ...task,
  };
};
