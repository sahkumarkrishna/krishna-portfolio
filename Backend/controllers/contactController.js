const Contact = require("../model/Contact");
const sendMail = require("../utils/mailer");

exports.addContact = async (req, res) => {
  try {
    const { name, email, description } = req.body;

    // Check if email already exists
    const existingContact = await Contact.findOne({ email });
    if (existingContact) {
      return res
        .status(400)
        .json({ message: "Email has already been used to contact." });
    }

    const contact = new Contact({ name, email, description });
    await contact.save();

    // Send confirmation email
    await sendMail(
      email,
      "Portfolio Contact",
      `Hello ${name}, thank you for contacting us.`,
      `<html>
        <body style="font-family: Arial, sans-serif; color: #333; line-height: 1.6;">
          <div style="max-width: 600px; margin: auto; padding: 20px; border: 1px solid #ddd; border-radius: 8px; background-color: #fff;">
            <p style="font-size: 18px;">Hello <b style="color: #4CAF50;">${name}</b>,</p>
            <p style="font-size: 16px;">Thank you for reaching out. We will get back to you soon.</p>
            <footer style="margin-top: 30px; font-size: 14px; color: #777;">
              <p>Best regards,</p>
              <p>Your Portfolio Team</p>
            </footer>
          </div>
        </body>
      </html>`
    );

    res.status(201).json({ message: "Contact added & email sent", contact });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
