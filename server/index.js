const express = require("express");
require("dotenv").config();
require("./config/dbConnect");
const cors = require("cors");
const contactRoutes = require("./routes/contactRoutes");

const app = express();

// Middleware
app.use(express.json());

app.use(
  cors({
    origin: process.env.FRONTEND_URL,
  })
);

// Mount contact routes
app.use("/api/contacts", contactRoutes);

// Set the server to listen on the specified port
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
