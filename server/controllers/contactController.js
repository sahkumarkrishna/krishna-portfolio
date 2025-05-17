const Contact = require("../model/Contact"); // Make sure to import your Contact model

exports.addContact = async (req, res) => {
  try {
    const { name, email, message } = req.body;  // use "message" for consistency

    // Check if email already exists
    const existingContact = await Contact.findOne({ email });
    if (existingContact) {
      return res
        .status(400)
        .json({ message: "Email has already been used to contact." });
    }

    const contact = new Contact({ name, email, message });
    await contact.save();

    res.status(201).json({ message: "Contact added successfully", contact });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
