const express = require("express");
const { addContact } = require("../controllers/contactController");

const router = express.Router();

// POST /api/contacts/add
router.post("/add", addContact);

module.exports = router;
