import { db } from "../db/database.js";

export const listTasks = () => {
  const tasks = db.prepare(`
    SELECT id, title, status, created_at
    FROM tasks
    ORDER BY id ASC
  `).all();

  return tasks;
};
