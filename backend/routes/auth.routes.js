const router = require("express").Router();
const User = require("../models/user.models"); // Follow naming convention for models
const bcrypt = require("bcrypt");

router.post("/register", async (req, res) => {
  try {
    const { email, username, password } = req.body;

    if (!email || !username || !password) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const existingUser = await User.findOne({ email });

    if (existingUser) {
      return res.status(400).json({ message: "user already exists" });
    }

    const hashedPassword = bcrypt.hashSync(password, 10);

    const newUser = new User({ email, username, password: hashedPassword });

    await newUser.save();

    res.status(201).json({
      message: "User created successfullly",
    });
  } catch (error) {
    if (error.code === 11000) {
      res.status(400).json({ message: "User already exists" });
    } else {
      console.error("Error registering user:", error);
      res.status(500).json({ message: "Internal server error", error });
    }
  }
});

router.post("/signin", async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res
        .status(400)
        .json({ message: "Email and password are required" });
    }

    const user = await User.findOne({ email });
    if (!user) {
      return res
        .status(400)
        .json({ message: "User not found. Please sign up first." });
    }

    const isPasswordCorrect = bcrypt.compareSync(password, user.password);
    if (!isPasswordCorrect) {
      return res.status(400).json({ message: "Invalid email or password" });
    }

    const { password: _, ...userWithoutPassword } = user._doc;

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
