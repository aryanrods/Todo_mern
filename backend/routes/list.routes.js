const router = require("express").Router();
const User = require("../models/user.models");
const List = require("../models/list.models");

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

    // Create a new task and save it
    const list = new List({ title, body, user: existingUser._id });
    await list.save();

    // Respond with the created task
    return res.status(201).json({ message: "Task added successfully", list });
  } catch (error) {
    console.error("Error adding task:", error);
    return res.status(500).json({ message: "Internal server error", error });
  }
});

module.exports = router;
