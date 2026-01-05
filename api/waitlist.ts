import type { VercelRequest, VercelResponse } from '@vercel/node';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

function isValidEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

export default async function handler(
  req: VercelRequest,
  res: VercelResponse
) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { email } = req.body;

  if (!email || !isValidEmail(email)) {
    return res.status(400).json({ error: 'Valid email required' });
  }

  try {
    // 1. Send confirmation email to the subscriber
    await resend.emails.send({
      from: process.env.EMAIL_FROM || 'ResidencyOS <noreply@residencyos.com>',
      to: email,
      subject: "You're on the Waitlist — ResidencyOS",
      html: `
        <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; max-width: 600px; margin: 0 auto; padding: 40px 20px;">
          <h1 style="color: #0f172a; font-size: 28px; margin-bottom: 20px;">Welcome to the Waitlist</h1>
          <p style="color: #475569; font-size: 16px; line-height: 1.7;">
            Thank you for your interest in ResidencyOS. Your place on our waiting list has been secured.
          </p>
          <p style="color: #475569; font-size: 16px; line-height: 1.7;">
            We're experiencing high demand and are onboarding users in waves. We'll reach out soon with access details and next steps.
          </p>
          <p style="color: #0f172a; font-size: 16px; margin-top: 40px;">
            — The ResidencyOS Team<br/>
            <a href="https://residencyos.com" style="color: #3b82f6; text-decoration: none;">residencyos.com</a>
          </p>
        </div>
      `,
    });

    // 2. Send notification to admin (optional)
    if (process.env.ADMIN_EMAIL) {
      await resend.emails.send({
        from: process.env.EMAIL_FROM || 'ResidencyOS <noreply@residencyos.com>',
        to: process.env.ADMIN_EMAIL,
        subject: `New Waitlist Signup: ${email}`,
        html: `
          <div style="font-family: sans-serif; padding: 20px;">
            <h2>New Waitlist Signup</h2>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Time:</strong> ${new Date().toISOString()}</p>
          </div>
        `,
      });
    }

    return res.status(200).json({ success: true });
  } catch (error) {
    console.error('Waitlist signup error:', error);
    return res.status(500).json({ error: 'Failed to process signup' });
  }
}
