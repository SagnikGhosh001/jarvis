import { db } from "../db/database.js";

export const completeTask = ({ id }) => {
  if (!Number.isInteger(id) || id <= 0) {
    throw new Error("A valid task ID is required");
  }

  const result = db.prepare(`
    UPDATE tasks
    SET status = 'completed'
    WHERE id = ?
  `).run(id);

  if (result.changes === 0) {
    return {
      success: false,
      message: `Task with ID ${id} was not found`,
    };
  }

  return {
    success: true,
    message: `Task ${id} marked as completed`,
  };
};
