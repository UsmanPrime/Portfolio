import { Resend } from 'resend';
import type { VercelRequest, VercelResponse } from '@vercel/node';

interface ContactRequest {
  name: string;
  email: string;
  subject: string;
  message: string;
}

interface ValidationError {
  field: string;
  message: string;
}

function validateContactForm(data: Record<string, unknown>): ValidationError[] {
  const errors: ValidationError[] = [];

  for (const field of ['name', 'email', 'subject', 'message'] as const) {
    if (typeof data[field] !== 'string') {
      errors.push({ field, message: `${field.charAt(0).toUpperCase() + field.slice(1)} must be a string` });
    }
  }
  if (errors.length) return errors;
  // All four fields have passed runtime type validation before string operations.
  const fields = data as unknown as ContactRequest;

  if (!fields.name || fields.name.trim() === '') {
    errors.push({ field: 'name', message: 'Name is required' });
  } else if (fields.name.trim().length < 2) {
    errors.push({ field: 'name', message: 'Name must be at least 2 characters' });
  } else if (fields.name.trim().length > 100) {
    errors.push({ field: 'name', message: 'Name must not exceed 100 characters' });
  }

  if (!fields.email || fields.email.trim() === '') {
    errors.push({ field: 'email', message: 'Email is required' });
  } else if (fields.email.trim().length > 254 || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(fields.email.trim())) {
    errors.push({ field: 'email', message: 'Invalid email format' });
  }

  if (!fields.subject || fields.subject.trim() === '') {
    errors.push({ field: 'subject', message: 'Subject is required' });
  } else if (fields.subject.trim().length < 3) {
    errors.push({ field: 'subject', message: 'Subject must be at least 3 characters' });
  } else if (fields.subject.trim().length > 200) {
    errors.push({ field: 'subject', message: 'Subject must not exceed 200 characters' });
  }

  if (!fields.message || fields.message.trim() === '') {
    errors.push({ field: 'message', message: 'Message is required' });
  } else if (fields.message.trim().length < 10) {
    errors.push({ field: 'message', message: 'Message must be at least 10 characters' });
  } else if (fields.message.trim().length > 5000) {
    errors.push({ field: 'message', message: 'Message must not exceed 5000 characters' });
  }

  return errors;
}

// Simple in-memory rate limiter to prevent spam abuse
// Note: In serverless environments, this state resets on cold starts, but it effectively 
// mitigates rapid-fire scripting attacks on warm instances.
const rateLimitMap = new Map<string, { count: number; timestamp: number }>();

function checkRateLimit(ip: string): boolean {
  const now = Date.now();
  const windowMs = 60 * 1000; // 1 minute window
  const maxRequests = 3; // Max 3 requests per minute per IP

  const record = rateLimitMap.get(ip);
  if (!record) {
    rateLimitMap.set(ip, { count: 1, timestamp: now });
    return true;
  }

  if (now - record.timestamp > windowMs) {
    rateLimitMap.set(ip, { count: 1, timestamp: now });
    return true;
  }

  if (record.count >= maxRequests) {
    return false;
  }

  record.count += 1;
  return true;
}

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  // Rate Limiting Check
  // Note: Vercel functions scale concurrently, so this in-memory map is scoped per-container.
  // For true global rate-limiting, a shared store like Upstash Redis / Vercel KV is required.
  const forwardedFor = req.headers['x-forwarded-for'];
  let clientIp = 'unknown';
  if (typeof forwardedFor === 'string') {
    clientIp = forwardedFor.split(',')[0].trim();
  } else if (req.socket?.remoteAddress) {
    clientIp = req.socket.remoteAddress;
  }
  
  if (!checkRateLimit(clientIp)) {
    console.warn(`Rate limit exceeded for IP: ${clientIp}`);
    return res.status(429).json({ error: 'Too many requests. Please try again later.' });
  }

  let parsedBody: unknown;
  try {
    parsedBody = typeof req.body === 'string' ? JSON.parse(req.body) : req.body;
  } catch {
    return res.status(400).json({ error: 'Request body must contain valid JSON' });
  }
  if (!parsedBody || typeof parsedBody !== 'object' || Array.isArray(parsedBody)) {
    return res.status(400).json({ error: 'Request body must be a JSON object' });
  }
  const validationErrors = validateContactForm(parsedBody as Record<string, unknown>);
  if (validationErrors.length) {
    return res.status(400).json({ error: 'Validation failed', details: validationErrors });
  }

  const apiKey = process.env.RESEND_API_KEY?.trim();
  if (!apiKey) {
    console.error('Contact email service is not configured');
    return res.status(503).json({ error: 'Email service is temporarily unavailable. Please use the email link to contact me.' });
  }

  try {
    const resend = new Resend(apiKey);
    const validated = parsedBody as ContactRequest;
    const name = validated.name.trim();
    const email = validated.email.trim();
    const subject = validated.subject.trim();
    const message = validated.message.trim();

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
      replyTo: email,
      subject: `New Message: ${subject}`,
      text: emailContent,
    });

    if (result.error) {
      console.error('Resend error:', result.error);
      return res.status(502).json({ error: 'Email delivery failed. Please try again or use the email link.' });
    }

    return res.status(200).json({ 
      success: true, 
      message: 'Email sent successfully',
      id: result.data?.id 
    });
  } catch (error) {
    console.error('Contact form error:', error);
    return res.status(500).json({ error: 'Unable to send your message. Please try again or use the email link.' });
  }
}
