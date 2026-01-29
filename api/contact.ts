import type { VercelRequest, VercelResponse } from '@vercel/node';

// In-memory submissions array for demo (replace with DB in production)
const submissions: any[] = [];

export default function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method === 'GET') {
    // TODO: Add authentication
    return res.status(200).json(submissions);
  }
  if (req.method === 'POST') {
    const { name, email, company, message } = req.body;
    if (!name || !email || !message) {
      return res.status(400).json({ error: 'All fields are required.' });
    }
    const submission = {
      id: submissions.length + 1,
      name,
      email,
      company: company || '',
      message,
      timestamp: new Date().toISOString(),
    };
    submissions.unshift(submission);
    return res.status(200).json({ success: true, id: submission.id });
  }
  return res.status(405).json({ error: 'Method not allowed' });
}
