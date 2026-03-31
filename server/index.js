const express = require("express");
require("dotenv").config();
require("./config/dbConnect");
const cors = require("cors");
const contactRoutes = require("./routes/contactRoutes");

const app = express();

// CORS middleware - handle preflight
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
  res.header("Access-Control-Allow-Headers", "Content-Type, Authorization");
  if (req.method === "OPTIONS") {
    return res.sendStatus(200);
  }
  next();
});

// Middleware
app.use(express.json());

// Health check route
app.get("/", (req, res) => {
  res.json({ message: "Portfolio API is running!" });
});

// Routes
app.use("/api/contacts", contactRoutes);

// Error handling middleware
app.use((err, req, res, next) => {
  console.error("Error:", err.message);
  res.status(500).json({ success: false, error: err.message });
});

// Server listener
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
