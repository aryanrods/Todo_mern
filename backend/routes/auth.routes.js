const router = require("express").Router();
const User = require("../models/user.models"); // Follow naming convention for models
const bcrypt = require("bcrypt");

// Register a new user
router.post("/register", async (req, res) => {
  try {
    const { email, username, password } = req.body;

    // Validate required fields
    if (!email || !username || !password) {
      return res.status(400).json({ message: "All fields are required" });
    }

    // Hash the password
    const hashedPassword = bcrypt.hashSync(password, 10); // 10 is the salt rounds

    // Create a new user instance
    const newUser = new User({ email, username, password: hashedPassword });

    // Save the user to the database
    await newUser.save();

    // Respond with the created user (excluding the password)
    res.status(201).json({
      user: {
        email: newUser.email,
        username: newUser.username,
        id: newUser._id,
      },
    });
  } catch (error) {
    // Check for validation errors or duplication
    if (error.code === 11000) {
      // MongoDB duplicate key error code
      res.status(400).json({ message: "User already exists" });
    } else {
      console.error("Error registering user:", error);
      res.status(500).json({ message: "Internal server error", error });
    }
  }
});

// Sign in a user
router.post("/signin", async (req, res) => {
  try {
    const { email, password } = req.body;

    // Validate required fields
    if (!email || !password) {
      return res
        .status(400)
        .json({ message: "Email and password are required" });
    }

    // Find the user by email
    const user = await User.findOne({ email });
    if (!user) {
      return res
        .status(400)
        .json({ message: "User not found. Please sign up first." });
    }

    // Compare the provided password with the hashed password in the database
    const isPasswordCorrect = bcrypt.compareSync(password, user.password);
    if (!isPasswordCorrect) {
      return res.status(400).json({ message: "Invalid email or password" });
    }

    // Exclude the password from the response
    const { password: _, ...userWithoutPassword } = user._doc;

    // Respond with the user details
    res.status(200).json({
      message: "Sign in successful",
      user: userWithoutPassword,
    });
  } catch (error) {
    console.error("Error signing in:", error);
    res.status(500).json({ message: "Internal server error", error });
  }
});

module.exports = router;
