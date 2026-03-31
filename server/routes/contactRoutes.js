const express = require("express");
const router = express.Router();
const { sendMessage } = require("../controllers/contactController");

router.options("/add", (req, res) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "POST, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");
  res.sendStatus(204);
});

router.post("/add", sendMessage);

module.exports = router;
