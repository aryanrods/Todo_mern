const mongoose = require("mongoose");

const connectToDB = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://todouser:todouserpassword@todo1.u5vxm.mongodb.net/?retryWrites=true&w=majority&appName=todo1"
    );
    console.log("Database connected");
  } catch (error) {
    console.error("Database connection failed:", error.message);
    process.exit(1); // Exit the process on failure
  }
};

module.exports = connectToDB;
