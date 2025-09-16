const express = require("express");
require("dotenv").config();
require("./config/dbConnect");
const cors = require("cors");
const contactRoutes = require("./routes/contactRoutes");

const app = express();

// Middleware
app.use(express.json());

// CORS configuration
app.use(
  cors({
    origin: process.env.FRONTEND_URL|| "https://krishna-portfolio-fbv8.vercel.app",
     credentials: true, // allow cookies/auth if needed
  })
);

// Routes
app.use("/api/contacts", contactRoutes);

// Server listener
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
