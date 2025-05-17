const express = require("express");
const { addContact} = require("../controllers/contactController");

const router = express.Router();
router.post("/add", addContact);


module.exports = router;
