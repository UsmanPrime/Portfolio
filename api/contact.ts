import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

interface ContactRequest {
  name?: string;
  email?: string;
  subject?: string;
  message?: string;
}

interface ValidationError {
  field: string;
  message: string;
}

function validateContactForm(data: ContactRequest): ValidationError[] {
  const errors: ValidationError[] = [];

  if (!data.name || data.name.trim() === '') {
    errors.push({ field: 'name', message: 'Name is required' });
  } else if (data.name.trim().length < 2) {
    errors.push({ field: 'name', message: 'Name must be at least 2 characters' });
  } else if (data.name.trim().length > 100) {
    errors.push({ field: 'name', message: 'Name must not exceed 100 characters' });
  }

  if (!data.email || data.email.trim() === '') {
    errors.push({ field: 'email', message: 'Email is required' });
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email.trim())) {
    errors.push({ field: 'email', message: 'Invalid email format' });
  }

  if (!data.subject || data.subject.trim() === '') {
    errors.push({ field: 'subject', message: 'Subject is required' });
  } else if (data.subject.trim().length < 3) {
    errors.push({ field: 'subject', message: 'Subject must be at least 3 characters' });
  } else if (data.subject.trim().length > 200) {
    errors.push({ field: 'subject', message: 'Subject must not exceed 200 characters' });
  }

  if (!data.message || data.message.trim() === '') {
    errors.push({ field: 'message', message: 'Message is required' });
  } else if (data.message.trim().length < 10) {
    errors.push({ field: 'message', message: 'Message must be at least 10 characters' });
  } else if (data.message.trim().length > 5000) {
    errors.push({ field: 'message', message: 'Message must not exceed 5000 characters' });
  }

  return errors;
}

export default async function handler(req: any, res: any) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  // Check if API key is set
  if (!process.env.RESEND_API_KEY) {
    console.error('RESEND_API_KEY environment variable is not set');
    return res.status(500).json({ error: 'Email service is not configured' });
  }

  try {
    const { name, email, subject, message } = req.body as ContactRequest;

    // Server-side validation
    const validationErrors = validateContactForm({ name, email, subject, message });
    if (validationErrors.length > 0) {
      return res.status(400).json({ 
        error: 'Validation failed', 
        details: validationErrors 
      });
    }

    // Format email content
    const emailContent = `New Contact Form Submission
---------------------------
Name    : ${name}
Email   : ${email}
Subject : ${subject}

Message :
${message}

---------------------------
Sent from portfolio website`;

    // Send email using Resend
    const result = await resend.emails.send({
      from: 'Contact Form <onboarding@resend.dev>',
      to: 'i242038@isb.nu.edu.pk',
      replyTo: email!,
      subject: `New Message: ${subject}`,
      text: emailContent,
    });

    if (result.error) {
      console.error('Resend error:', result.error);
      return res.status(500).json({ error: 'Failed to send email', details: result.error });
    }

    return res.status(200).json({ 
      success: true, 
      message: 'Email sent successfully',
      id: result.data?.id 
    });
  } catch (error) {
    console.error('Contact form error:', error);
    return res.status(500).json({ error: 'Internal server error', details: String(error) });
  }
}
