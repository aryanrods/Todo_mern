const router = require("express").Router();
const user = require("../models/user");

router.post("/register", async (req, res) => {
  try {
    const { email, username, password } = req.body;
    const user = new User({ email, username, password });
    await user.save().then(() => {
      res.status(400).json({ user: user });
    });
  } catch (error) {
    res.status(400).json({ message: "user already exists" });
  }
});

module.exports = router;
