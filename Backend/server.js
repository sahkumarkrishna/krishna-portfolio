const express = require("express");
require("dotenv").config(); // Load environment variables from .env file
require("./config/dbConnect"); // Connect to MongoDB using dbConnect.js
const cors = require("cors"); // Import CORS
const contactRoutes = require("./routes/contactRoutes"); // Import the contact routes

const app = express();

// Middleware
app.use(express.json()); // Parse incoming requests with JSON payloads

// Enable CORS for all routes and specify the frontend URL
app.use(
  cors({
    origin: process.env.FRONTEND_URL || "http://localhost:5173", // Allow requests from the frontend URL
  })
);

// Mount contact routes
app.use("/api/contacts", contactRoutes);

// Set the server to listen on the specified port
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
