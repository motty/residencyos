import type { VercelRequest, VercelResponse } from '@vercel/node';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);
const AUDIENCE_ID = process.env.RESEND_AUDIENCE_ID;

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

  try {
    const { email } = req.body;

    if (!email || !isValidEmail(email)) {
      return res.status(400).json({ error: 'Valid email required' });
    }

    if (!AUDIENCE_ID) {
      console.error('RESEND_AUDIENCE_ID not configured');
      return res.status(500).json({ error: 'Server configuration error' });
    }

    await resend.contacts.create({
      email,
      audienceId: AUDIENCE_ID,
      unsubscribed: false,
    });

    return res.status(200).json({ success: true });
  } catch (error) {
    console.error('Waitlist error:', error);

    if (error instanceof Error && error.message.includes('already exists')) {
      return res.status(200).json({ success: true, message: 'Already registered' });
    }

    return res.status(500).json({ error: 'Failed to join waitlist' });
  }
}
