const Contact = require("../model/Contact"); // Make sure this path is correct

const addContact = async (req, res) => {
  try {
    const { name, email, message } = req.body;

    if (!name || !email || !message) {
      return res.status(400).json({ error: "All fields are required." });
    }

    const newContact = new Contact({ name, email, message });
    await newContact.save();

    res.status(201).json({ message: "Contact added successfully." });
  } catch (error) {
    console.error("Error in addContact:", error); // This will show in Vercel logs
    res.status(500).json({ error: "Server error." });
  }
};

module.exports = { addContact };
