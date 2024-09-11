// Connect to MongoDB
const mongoose = require("mongoose");

const connection = () =>
  mongoose
    .connect("mongodb://127.0.0.1:27017/zithasTaskManagementApp")
    .then(() => console.log("MongoDB connected"))
    .catch((err) => console.error("Error Connecting with MongoDB:", err));

module.exports = { connection };
