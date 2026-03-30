const Message = require("../model/Contact");
const sendEmail = require("../utils/SendEmail");

exports.sendMessage = async (req, res) => {
  try {
    console.log("Received request body:", req.body);
    const { name, email, message } = req.body;

    if (!name || !email || !message) {
      return res.status(400).json({ success: false, error: "All fields are required" });
    }

    const newMessage = new Message({ name, email, message });
    await newMessage.save();
    console.log("Message saved to DB");

    try {
      const emailBody = `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <title>New Message</title>
</head>
<body style="margin: 0; padding: 20px; background: #f0f2f5; font-family: Arial, sans-serif;">
  <div style="max-width: 480px; margin: 0 auto; background: #fff; border-radius: 8px; overflow: hidden; box-shadow: 0 1px 3px rgba(0,0,0,0.1);">
    <div style="background: #2563eb; padding: 25px; text-align: center;">
      <h1 style="color: #fff; font-size: 22px; margin: 0;">New Message</h1>
    </div>
    <div style="padding: 25px;">
      <h3 style="color: #333; margin: 0 0 15px; font-size: 16px;">From: ${name}</h3>
      <p style="color: #666; margin: 0 0 5px; font-size: 14px;">Email: <a href="mailto:${email}" style="color: #2563eb;">${email}</a></p>
      <p style="color: #999; margin: 0 0 20px; font-size: 12px;">${new Date().toLocaleDateString()}</p>
      <div style="background: #f8f9fa; padding: 15px; border-radius: 6px; border-left: 3px solid #2563eb;">
        <p style="color: #444; margin: 0; font-size: 14px; line-height: 1.6; white-space: pre-wrap;">${message}</p>
      </div>
    </div>
  </div>
</body>
</html>`;

      await sendEmail(process.env.EMAIL_USER, `New Message from ${name}`, emailBody);
      console.log("Email sent successfully");
    } catch (emailError) {
      console.warn("Email failed but continuing:", emailError.message);
    }

    res.status(200).json({ success: true, message: "Message sent successfully!" });
  } catch (error) {
    console.error("❌ Error in sendMessage:", error.message);
    res.status(500).json({ success: false, error: error.message });
  }
};
