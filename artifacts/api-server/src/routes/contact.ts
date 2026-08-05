import { Router, type IRouter } from "express";
import nodemailer from "nodemailer";
import { SubmitContactBody } from "@workspace/api-zod";
import { logger } from "../lib/logger";

const router: IRouter = Router();

// Contact form email route
// To enable actual email sending, set these secrets in the Replit "Secrets" panel:
//   EMAIL_USER — your Gmail address (e.g. youraddress@gmail.com)
//   EMAIL_PASS — your Gmail App Password (generate at https://myaccount.google.com/apppasswords)
//               NOTE: You must enable 2-Step Verification on the Gmail account first
// The contact form will send submissions to Solisticedesigns@gmail.com.

router.post("/contact", async (req, res): Promise<void> => {
  const parsed = SubmitContactBody.safeParse(req.body);
  if (!parsed.success) {
    res.status(400).json({ error: parsed.error.message });
    return;
  }

  const { name, phone, message } = parsed.data;

  // Check if email credentials are configured
  const emailUser = process.env.EMAIL_USER;
  const emailPass = process.env.EMAIL_PASS;

  if (!emailUser || !emailPass) {
    // Log a warning so the developer knows credentials are missing, but
    // still return success so the form doesn't break during development.
    logger.warn(
      { name, phone },
      "EMAIL_USER and EMAIL_PASS secrets are not set. " +
        "Set them in the Replit Secrets panel to enable real email delivery. " +
        "Contact form submission received but not emailed."
    );
    // Return success so the user sees the thank-you message
    res.json({ success: true });
    return;
  }

  try {
    // Create a Gmail SMTP transporter using the Replit Secrets
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: emailUser,
        pass: emailPass,
      },
    });

    await transporter.sendMail({
      from: `"Solstice Design Studio Contact Form" <${emailUser}>`,
      to: "Solisticedesigns@gmail.com",
      subject: `New enquiry from ${name}`,
      html: `
        <div style="font-family: Georgia, serif; max-width: 600px; margin: 0 auto; color: #1A1A1A;">
          <h2 style="color: #C6A15B; font-size: 24px; margin-bottom: 8px;">New enquiry via Solstice Design Studio</h2>
          <hr style="border: 1px solid #C9A87C; margin-bottom: 24px;" />
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Phone:</strong> ${phone}</p>
          <p><strong>Message:</strong></p>
          <p style="background: #F5F0EA; padding: 16px; border-left: 3px solid #C6A15B;">${message.replace(/\n/g, "<br/>")}</p>
          <hr style="border: 1px solid #C9A87C; margin-top: 24px;" />
          <p style="color: #6E7075; font-size: 12px;">Sent from the Solstice Design Studio website contact form.</p>
        </div>
      `,
      text: `New enquiry from ${name}\n\nPhone: ${phone}\n\nMessage:\n${message}`,
    });

    req.log.info({ name }, "Contact form email sent successfully");
    res.json({ success: true });
  } catch (err) {
    req.log.error({ err }, "Failed to send contact form email");
    res.status(500).json({ error: "Failed to send message. Please try again." });
  }
});

export default router;
