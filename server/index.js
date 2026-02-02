const express = require("express");
require("dotenv").config();
require("./config/dbConnect");
const cors = require("cors");
const contactRoutes = require("./routes/contactRoutes");

const app = express();

// Middleware
app.use(express.json());

// ✅ CORS setup - Allow all origins for now
app.use(
  cors({
    origin: true,
    credentials: true,
  })
);

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
