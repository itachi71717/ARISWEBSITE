import type { VercelRequest, VercelResponse } from "@vercel/node";
import { Resend } from "resend";
import { z } from "zod";

const SubmitContactBody = z.object({
  name: z.string().min(1),
  phone: z.string().min(1),
  message: z.string().min(1),
});

const HTML_ESCAPES: Record<string, string> = {
  "&": "&amp;",
  "<": "&lt;",
  ">": "&gt;",
  '"': "&quot;",
  "'": "&#39;",
};

const escapeHtml = (value: string) =>
  value.replace(/[&<>"']/g, (character) => HTML_ESCAPES[character]);

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

  const resendApiKey = process.env.RESEND_API_KEY;

  if (!resendApiKey) {
    console.error("Contact form email delivery is not configured: RESEND_API_KEY is missing.");
    res.status(503).json({ error: "Email delivery is temporarily unavailable." });
    return;
  }

  try {
    const safeName = escapeHtml(name);
    const safePhone = escapeHtml(phone);
    const safeMessage = escapeHtml(message).replace(/\r?\n/g, "<br/>");
    const subjectName = name.replace(/[\r\n]+/g, " ");
    const resend = new Resend(resendApiKey);

    const { data, error } = await resend.emails.send({
      from: "Solstice Design Studio <onboarding@resend.dev>",
      to: "ariella@solsticedesigns.co.za",
      subject: `New enquiry from ${subjectName}`,
      html: `
        <div style="font-family: Georgia, serif; max-width: 600px; margin: 0 auto; color: #1A1A1A;">
          <h2 style="color: #C6A15B; font-size: 24px; margin-bottom: 8px;">New enquiry via Solstice Design Studio</h2>
          <hr style="border: 1px solid #C9A87C; margin-bottom: 24px;" />
          <p><strong>Name:</strong> ${safeName}</p>
          <p><strong>Phone:</strong> ${safePhone}</p>
          <p><strong>Message:</strong></p>
          <p style="background: #F5F0EA; padding: 16px; border-left: 3px solid #C6A15B;">${safeMessage}</p>
          <hr style="border: 1px solid #C9A87C; margin-top: 24px;" />
          <p style="color: #6E7075; font-size: 12px;">Sent from the Solstice Design Studio website contact form.</p>
        </div>
      `,
      text: `New enquiry from ${name}\n\nPhone: ${phone}\n\nMessage:\n${message}`,
    });

    if (error) {
      console.error("Resend rejected email", error);
      res.status(500).json({ error: "Failed to send message. Please try again." });
      return;
    }

    console.log("Email queued by Resend, id:", data?.id);
    res.status(200).json({ success: true });
  } catch (err) {
    console.error("Failed to send contact form email", err);
    res.status(500).json({ error: "Failed to send message. Please try again." });
  }
}
