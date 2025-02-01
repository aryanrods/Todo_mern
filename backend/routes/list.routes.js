const router = require("express").Router();
const User = require("../models/user.models");
const List = require("../models/list.models");

// Add Task
router.post("/addTask", async (req, res) => {
  try {
    const { title, body, email } = req.body;

    // Validate required fields
    if (!title || !body || !email) {
      return res.status(400).json({ message: "All fields are required" });
    }

    // Find the user by email
    const existingUser = await User.findOne({ email });

    if (!existingUser) {
      return res.status(404).json({ message: "User not found" });
    }

    // Create and save the task
    const list = new List({ title, body, user: existingUser._id });
    await list.save();

    // Add the task ID to the user's list array
    existingUser.list.push(list._id);
    await existingUser.save();

    return res.status(201).json({ message: "Task added successfully", list });
  } catch (error) {
    console.error("Error adding task:", error);
    return res.status(500).json({ message: "Internal server error", error });
  }
});

// Update Task
router.put("/updateTask/:id", async (req, res) => {
  try {
    const { title, body, email } = req.body;

    // Validate required fields
    if (!title || !body || !email) {
      return res.status(400).json({ message: "All fields are required" });
    }

    // Find the user by email
    const existingUser = await User.findOne({ email });

    if (!existingUser) {
      return res.status(404).json({ message: "User not found" });
    }

    // Update the task
    const updatedList = await List.findByIdAndUpdate(
      req.params.id,
      { title, body },
      { new: true }
    );

    if (!updatedList) {
      return res.status(404).json({ message: "Task not found" });
    }

    return res
      .status(200)
      .json({ message: "Task updated successfully", list: updatedList });
  } catch (error) {
    console.error("Error updating task:", error);
    return res.status(500).json({ message: "Internal server error", error });
  }
});

// Delete Task
router.delete("/deleteTask/:id", async (req, res) => {
  try {
    const { email } = req.body;

    // Validate required fields
    if (!email) {
      return res.status(400).json({ message: "Email is required" });
    }

    // Find the user by email
    const existingUser = await User.findOne({ email });

    if (!existingUser) {
      return res.status(404).json({ message: "User not found" });
    }

    // Find and delete the task
    const deletedList = await List.findByIdAndDelete(req.params.id);

    if (!deletedList) {
      return res.status(404).json({ message: "Task not found" });
    }

    // Remove the task ID from the user's list array
    existingUser.list = existingUser.list.filter(
      (taskId) => taskId.toString() !== req.params.id
    );
    await existingUser.save();

    return res.status(200).json({ message: "Task deleted successfully" });
  } catch (error) {
    console.error("Error deleting task:", error);
    return res.status(500).json({ message: "Internal server error", error });
  }
});

//get tasks

router.get("/getTasks/:userId", async (req, res) => {
  try {
    s;
    const { userId } = req.params;

    // Fetch tasks for the given user ID
    const list = await List.find({ user: userId }).sort({
      createdAt: -1, // Sort by creation date in descending order
    });

    if (list.length === 0) {
      return res.status(200).json({ message: "No tasks found" });
    }

    return res.status(200).json({ list });
  } catch (error) {
    console.error("Error retrieving tasks:", error);
    return res.status(500).json({ message: "Internal server error", error });
  }
});

module.exports = router;
