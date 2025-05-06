const nodemailer = require("nodemailer");
require("dotenv").config();

// Create transporter using Gmail SMTP
const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST || "smtp.gmail.com",
  port: process.env.SMTP_PORT || 587,
  secure: false,
  auth: {
    user: process.env.NODE_CODE_SENDING_EMAIL_ADDRESS,
    pass: process.env.NODE_CODE_SENDING_EMAIL_PASSWORD,
  },
  tls: {
    rejectUnauthorized: false,
  },
});

// Verify SMTP connection
transporter.verify((error, success) => {
  if (error) {
    console.error("❌ SMTP Connection Error:", error);
  } else {
    console.log("✅ SMTP Server is ready to send emails.");
  }
});

// Function to send email
const sendMail = async (to, subject, text, html) => {
  try {
    const info = await transporter.sendMail({
      from: `"Portfolio contact" <${process.env.NODE_CODE_SENDING_EMAIL_ADDRESS}>`,
      to,
      subject,
      text,
      html,
    });
    console.log("📩 Email sent successfully:", info.messageId);
  } catch (error) {
    console.error("❌ Email failed to send:", error.message);
  }
};

module.exports = sendMail;
