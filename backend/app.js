const express = require("express");
const connectToDB = require("./conn/conn");
const auth = require("./routes/auth.routes");
const List = require("./routes/list.routes");

const app = express();

// Connect to the database
connectToDB();

// Middleware
app.use(express.json());

app.use("/api/v1", auth);
app.use("/api/v2", List);

// Routes
app.get("/", (req, res) => {
  res.send("Hello World");
});

// Start the server
app.listen(5001, () => {
  console.log("Server started on port 5001");
});
