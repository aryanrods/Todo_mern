const express = require("express");
const connectToDB = require("./conn/conn");
const auth = require("./routes/auth");

const app = express();

// Connect to the database
connectToDB();

// Middleware
app.use(express.json());

app.use("/api/v1", auth);

// Routes
app.get("/", (req, res) => {
  res.send("Hello World");
});

// Start the server
app.listen(5001, () => {
  console.log("Server started on port 5001");
});
