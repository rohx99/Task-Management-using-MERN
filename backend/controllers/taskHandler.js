const Task = require("../models/Task");

// Find all task

async function getAllTask(req, res) {
  try {
    const tasks = await Task.find();
    res.json(tasks);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

// Add a new task

async function addTask(req, res) {
  const { title, description } = req.body;
  const newTask = new Task({ title, description });
  try {
    await newTask.save();
    res.status(201).json(newTask);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
}

// Update a existing task using id

async function updateTask(req, res) {
  try {
    const { title, description, status } = req.body;
    const task = await Task.findByIdAndUpdate(
      req.params.id,
      { title, description, status },
      { new: true }
    );
    res.json(task);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
}

// Delete a Task

async function deleteTask(req, res) {
  try {
    await Task.findByIdAndDelete(req.params.id);
    res.json({ message: "Task deleted" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

module.exports = { getAllTask, addTask, updateTask, deleteTask };
