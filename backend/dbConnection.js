// Connect to MongoDB
const mongoose = require("mongoose");

const connection = () =>
  mongoose
    .connect(process.env.MONGODB_URI)
    .then(() => console.log("MongoDB connected"))
    .catch((err) => console.error("Error Connecting with MongoDB:", err));

module.exports = { connection };
