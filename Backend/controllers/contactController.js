import nodemailer from "nodemailer";
import dotenv from "dotenv";

dotenv.config();

export const sendContactEmail = async (req, res) => {
  const { name, email, description } = req.body;

  if (!name || !email || !description) {
    return res.status(400).json({ message: "All fields are required" });
  }

  try {
    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 587, // Use 587 for STARTTLS
      secure: false, // TLS
      auth: {
        user: process.env.NODE_CODE_SENDING_EMAIL_ADDRESS,
        pass: process.env.NODE_CODE_SENDING_EMAIL_PASSWORD,
      },
      tls: {
        rejectUnauthorized: false, // Allow self-signed certificates
      },
    });

    await transporter.verify((error, success) => {
      if (error) {
        console.error("Transporter Error:", error);
        return res
          .status(500)
          .json({ message: "SMTP Connection Failed", error });
      } else {
        console.log("✅ Server Ready to Send Emails!");
      }
    });

    await transporter.sendMail({
      from: process.env.NODE_CODE_SENDING_EMAIL_ADDRESS,
      to: process.env.NODE_CODE_SENDING_EMAIL_ADDRESS,
      subject: `New Contact Form Submission from ${name}`,
      text: `Name: ${name}\nEmail: ${email}\nMessage: ${description}`,
    });

    res.status(200).json({ message: "✅ Email sent successfully!" });
  } catch (error) {
    console.error("Email Sending Error:", error);
    res
      .status(500)
      .json({ message: "❌ Error sending email", error: error.message });
  }
};
