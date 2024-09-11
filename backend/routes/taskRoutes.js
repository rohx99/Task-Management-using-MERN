const express = require("express");
const router = express.Router();

const {
  getAllTask,
  addTask,
  updateTask,
  deleteTask,
} = require("../controllers/taskHandler");

// Get all tasks
router.get("/tasks", getAllTask);

// Add a new task
router.post("/tasks", addTask);

// Update a task
router.put("/tasks/:id", updateTask);

// Delete a task
router.delete("/tasks/:id", deleteTask);

module.exports = router;
