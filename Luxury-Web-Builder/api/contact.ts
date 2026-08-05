import type { VercelRequest, VercelResponse } from "@vercel/node";
import nodemailer from "nodemailer";
import { z } from "zod";

const SubmitContactBody = z.object({
  name: z.string().min(1),
  phone: z.string().min(1),
  message: z.string().min(1),
});

export default async function handler(
  req: VercelRequest,
  res: VercelResponse,
): Promise<void> {
  if (req.method !== "POST") {
    res.status(405).json({ error: "Method not allowed" });
    return;
  }

  const parsed = SubmitContactBody.safeParse(req.body);
  if (!parsed.success) {
    res.status(400).json({ error: parsed.error.message });
    return;
  }

  const { name, phone, message } = parsed.data;

  const emailUser = process.env.EMAIL_USER;
  const emailPass = process.env.EMAIL_PASS;

  if (!emailUser || !emailPass) {
    console.warn(
      "EMAIL_USER and EMAIL_PASS are not set. " +
        "Set them in the Vercel project's environment variables to enable real email delivery. " +
        "Contact form submission received but not emailed.",
    );
    res.status(200).json({ success: true });
    return;
  }

  try {
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

    res.status(200).json({ success: true });
  } catch (err) {
    console.error("Failed to send contact form email", err);
    res.status(500).json({ error: "Failed to send message. Please try again." });
  }
}
