const Message = require("../model/Contact");
const sendEmail = require("../utils/SendEmail");

exports.sendMessage = async (req, res) => {
  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ success: false, error: "All fields are required" });
  }

  try {
    // 1️⃣ Save to DB
    const newMessage = new Message({ name, email, message });
    await newMessage.save();

    // 2️⃣ Send Email
    const emailBody = `
      You have a new message from your portfolio contact form:

      Name: ${name}
      Email: ${email}
      Message: ${message}
    `;

    await sendEmail(process.env.EMAIL_USER, `New Message from ${name}`, emailBody);

    res.status(200).json({ success: true, message: "Message sent and saved successfully!" });
  } catch (error) {
    console.error("❌ Error in sendMessage:", error.message);
    res.status(500).json({ success: false, error: "Server Error" });
  }
};
