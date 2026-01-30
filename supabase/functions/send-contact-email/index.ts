// Supabase Edge Function: send-contact-email
// Handles: contact, collaterals, job-application, test
// Set secrets in Supabase Dashboard: SENDGRID_API_KEY, FROM_EMAIL, FROM_NAME, ADMIN_EMAIL, COLLATERALS_ADMIN_EMAIL, JOB_APPLICATION_ADMIN_EMAIL

/// <reference types="deno" />

// @ts-ignore - Deno requires .ts extension in imports
import { corsHeaders, corsHeadersForRequest } from '../_shared/cors.ts'

const SENDGRID_URL = 'https://api.sendgrid.com/v3/mail/send'

function escapeHtml(text: string): string {
  if (!text) return ''
  return text
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;')
}

function getConfig() {
  const apiKey = Deno.env.get('SENDGRID_API_KEY') ?? ''
  const fromEmail = Deno.env.get('FROM_EMAIL') ?? 'noreply@rheincs.com'
  const fromName = Deno.env.get('FROM_NAME') ?? 'RheinBrücke'
  const adminEmail = Deno.env.get('ADMIN_EMAIL') ?? 'marketing@rheincs.com'
  const collateralsAdmin = Deno.env.get('COLLATERALS_ADMIN_EMAIL') ?? adminEmail
  const jobAdmin = Deno.env.get('JOB_APPLICATION_ADMIN_EMAIL') ?? 'careers@rheincs.com'
  return { apiKey, fromEmail, fromName, adminEmail, collateralsAdmin, jobAdmin }
}

async function sendSendGrid(apiKey: string, payload: unknown): Promise<{ ok: boolean; error?: string }> {
  if (!apiKey?.trim()) return { ok: false, error: 'SendGrid API key not configured' }
  const res = await fetch(SENDGRID_URL, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${apiKey}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  })
  const text = await res.text()
  let err: { message?: string; errors?: Array<{ message?: string }> } = {}
  try {
    err = JSON.parse(text)
  } catch {
    err = { message: text }
  }
  if (!res.ok) {
    const msg = (Array.isArray(err.errors) && err.errors[0]?.message) || err.message || `HTTP ${res.status}`
    return { ok: false, error: msg }
  }
  return { ok: true }
}

// ——— Contact ———
function buildContactUserPayload(body: Record<string, unknown>, config: ReturnType<typeof getConfig>) {
  const fullName = String(body.fullName ?? '')
  const email = String(body.email ?? '').trim()
  const fullPhone = body.countryCode ? `${body.countryCode} ${body.phone}` : String(body.phone ?? '')
  const companyName = String(body.companyName ?? '')
  const selection = body.selection ? String(body.selection) : ''
  const message = body.message ? String(body.message).replace(/\n/g, '<br>') : ''
  const safeFullName = escapeHtml(fullName)
  const safeEmail = escapeHtml(email)
  const safePhone = escapeHtml(fullPhone)
  const safeCompanyName = escapeHtml(companyName)
  const safeSelection = selection ? escapeHtml(selection) : ''
  const safeMessage = message ? escapeHtml(String(body.message ?? '')).replace(/\n/g, '<br>') : ''
  const year = new Date().getFullYear()

  return {
    personalizations: [{ to: [{ email, name: fullName }], subject: 'Thank you for contacting RheinBrücke' }],
    content: [
      { type: 'text/plain', value: `Thank you for contacting RheinBrücke!\n\nDear ${safeFullName},\n\nThank you for reaching out. We have received your inquiry and our team will get back to you shortly.\n\nYour Inquiry Details:\nName: ${safeFullName}\nEmail: ${safeEmail}\nPhone: ${safePhone}\nCompany: ${safeCompanyName}\n${selection ? `Interest: ${safeSelection}\n` : ''}${body.message ? `Message: ${body.message}\n` : ''}\nWe typically respond within 24-48 hours.\n\nBest regards,\nThe RheinBrücke Team\n© ${year} RheinBrücke. All rights reserved.` },
      { type: 'text/html', value: `<!DOCTYPE html><html><head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"></head><body style="font-family: Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; padding: 20px;"><div style="background: linear-gradient(135deg, #48bb78 0%, #38a169 100%); padding: 30px; text-align: center; border-radius: 8px 8px 0 0;"><h1 style="color: #fff; margin: 0; font-size: 28px;">Thank You for Contacting Us!</h1></div><div style="background: #f9fafb; padding: 30px; border-radius: 0 0 8px 8px;"><p style="font-size: 16px;">Dear ${safeFullName},</p><p>Thank you for reaching out to RheinBrücke. We have received your inquiry and our team will get back to you shortly.</p><div style="background: #fff; padding: 20px; border-radius: 6px; margin: 20px 0; border-left: 4px solid #48bb78;"><h3 style="margin-top: 0;">Your Inquiry Details:</h3><p><strong>Name:</strong> ${safeFullName}</p><p><strong>Email:</strong> ${safeEmail}</p><p><strong>Phone:</strong> ${safePhone}</p><p><strong>Company:</strong> ${safeCompanyName}</p>${safeSelection ? `<p><strong>Interest:</strong> ${safeSelection}</p>` : ''}${safeMessage ? `<p><strong>Message:</strong><br>${safeMessage}</p>` : ''}</div><p>We typically respond within 24-48 hours.</p><p>Best regards,<br><strong>The RheinBrücke Team</strong></p></div><div style="text-align: center; margin-top: 20px; padding: 20px; color: #6b7280; font-size: 12px;"><p>&copy; ${year} RheinBrücke. All rights reserved.</p></div></body></html>` },
    ],
    from: { email: config.fromEmail, name: config.fromName },
    reply_to: { email: config.adminEmail, name: config.fromName },
  }
}

function buildContactAdminPayload(body: Record<string, unknown>, config: ReturnType<typeof getConfig>) {
  const fullName = String(body.fullName ?? '')
  const email = String(body.email ?? '').trim()
  const fullPhone = body.countryCode ? `${body.countryCode} ${body.phone}` : String(body.phone ?? '')
  const companyName = String(body.companyName ?? '')
  const selection = body.selection ? String(body.selection) : ''
  const message = body.message ? String(body.message) : ''
  const safeFullName = escapeHtml(fullName)
  const safeEmail = escapeHtml(email)
  const safePhone = escapeHtml(fullPhone)
  const safeCompanyName = escapeHtml(companyName)
  const safeSelection = selection ? escapeHtml(selection) : ''
  const safeMessage = message ? escapeHtml(message).replace(/\n/g, '<br>') : ''
  const submittedAt = new Date().toLocaleString('en-US', { timeZone: 'UTC' })

  return {
    personalizations: [{ to: [{ email: config.adminEmail, name: 'RheinBrücke Team' }], subject: `New Contact Form Submission from ${safeFullName}` }],
    content: [
      { type: 'text/plain', value: `New Contact Form Submission\n\nContact Details:\nName: ${safeFullName}\nEmail: ${email}\nPhone: ${fullPhone}\nCompany: ${safeCompanyName}\n${selection ? `Interest: ${safeSelection}\n` : ''}${message ? `Message: ${message}\n` : ''}\nAction Required: Please respond within 24-48 hours.\nSubmitted on: ${submittedAt} UTC` },
      { type: 'text/html', value: `<!DOCTYPE html><html><head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"></head><body style="font-family: Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; padding: 20px;"><div style="background: linear-gradient(135deg, #667eea 0%, #5568d3 100%); padding: 30px; text-align: center; border-radius: 8px 8px 0 0;"><h1 style="color: #fff; margin: 0; font-size: 28px;">New Contact Form Submission</h1></div><div style="background: #f9fafb; padding: 30px; border-radius: 0 0 8px 8px;"><p>You have received a new contact form submission:</p><div style="background: #fff; padding: 20px; border-radius: 6px; margin: 20px 0; border-left: 4px solid #667eea;"><h3 style="margin-top: 0;">Contact Details:</h3><p><strong>Name:</strong> ${safeFullName}</p><p><strong>Email:</strong> <a href="mailto:${email}">${safeEmail}</a></p><p><strong>Phone:</strong> <a href="tel:${fullPhone.replace(/\s/g, '')}">${safePhone}</a></p><p><strong>Company:</strong> ${safeCompanyName}</p>${safeSelection ? `<p><strong>Interest:</strong> ${safeSelection}</p>` : ''}${safeMessage ? `<p><strong>Message:</strong><br><div style="background: #f3f4f6; padding: 15px; border-radius: 4px;">${safeMessage}</div></p>` : ''}</div><p style="font-size: 14px; color: #0369a1;"><strong>Action Required:</strong> Please respond within 24-48 hours.</p></div><div style="text-align: center; margin-top: 20px; padding: 20px; color: #6b7280; font-size: 12px;"><p>Submitted on: ${submittedAt} UTC</p></div></body></html>` },
    ],
    from: { email: config.fromEmail, name: config.fromName },
    reply_to: { email, name: fullName },
  }
}

// ——— Collaterals ———
function buildCollateralsUserPayload(body: Record<string, unknown>, config: ReturnType<typeof getConfig>) {
  const fullName = String(body.fullName ?? '')
  const email = String(body.email ?? '').trim()
  const fullPhone = body.countryCode ? `${body.countryCode} ${body.phone}` : String(body.phone ?? '')
  const companyName = String(body.companyName ?? '')
  const selection = body.selection ? String(body.selection) : ''
  const message = body.message ? String(body.message).replace(/\n/g, '<br>') : ''
  const safeFullName = escapeHtml(fullName)
  const safeEmail = escapeHtml(email)
  const safePhone = escapeHtml(fullPhone)
  const safeCompanyName = escapeHtml(companyName)
  const safeSelection = selection ? escapeHtml(selection) : ''
  const safeMessage = message ? escapeHtml(String(body.message ?? '')).replace(/\n/g, '<br>') : ''
  const year = new Date().getFullYear()

  return {
    personalizations: [{ to: [{ email, name: fullName }], subject: 'Thank you for your interest in RheinBrücke Collaterals' }],
    content: [
      { type: 'text/plain', value: `Thank you for your interest in RheinBrücke Collaterals!\n\nDear ${safeFullName},\n\nThank you for requesting our collaterals. We have received your request and our team will get back to you shortly.\n\nYour Request Details:\nName: ${safeFullName}\nEmail: ${safeEmail}\nPhone: ${safePhone}\nCompany: ${safeCompanyName}\n${selection ? `Interest: ${safeSelection}\n` : ''}\nWe typically respond within 24-48 hours.\n\nBest regards,\nThe RheinBrücke Marketing Team\n© ${year} RheinBrücke. All rights reserved.` },
      { type: 'text/html', value: `<!DOCTYPE html><html><head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"></head><body style="font-family: Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; padding: 20px;"><div style="background: linear-gradient(135deg, #48bb78 0%, #38a169 100%); padding: 30px; text-align: center; border-radius: 8px 8px 0 0;"><h1 style="color: #fff; margin: 0; font-size: 28px;">Thank You for Your Interest!</h1></div><div style="background: #f9fafb; padding: 30px; border-radius: 0 0 8px 8px;"><p>Dear ${safeFullName},</p><p>Thank you for requesting our collaterals. We have received your request and our team will get back to you shortly.</p><div style="background: #fff; padding: 20px; border-radius: 6px; margin: 20px 0; border-left: 4px solid #48bb78;"><h3 style="margin-top: 0;">Your Request Details:</h3><p><strong>Name:</strong> ${safeFullName}</p><p><strong>Email:</strong> ${safeEmail}</p><p><strong>Phone:</strong> ${safePhone}</p><p><strong>Company:</strong> ${safeCompanyName}</p>${safeSelection ? `<p><strong>Interest:</strong> ${safeSelection}</p>` : ''}${safeMessage ? `<p><strong>Message:</strong><br>${safeMessage}</p>` : ''}</div><p>We typically respond within 24-48 hours.</p><p>Best regards,<br><strong>The RheinBrücke Marketing Team</strong></p></div><div style="text-align: center; margin-top: 20px; padding: 20px; color: #6b7280; font-size: 12px;"><p>&copy; ${year} RheinBrücke. All rights reserved.</p></div></body></html>` },
    ],
    from: { email: config.fromEmail, name: config.fromName },
    reply_to: { email: config.collateralsAdmin, name: config.fromName },
  }
}

function buildCollateralsAdminPayload(body: Record<string, unknown>, config: ReturnType<typeof getConfig>) {
  const fullName = String(body.fullName ?? '')
  const email = String(body.email ?? '').trim()
  const fullPhone = body.countryCode ? `${body.countryCode} ${body.phone}` : String(body.phone ?? '')
  const companyName = String(body.companyName ?? '')
  const selection = body.selection ? String(body.selection) : ''
  const message = body.message ? String(body.message) : ''
  const safeFullName = escapeHtml(fullName)
  const safeEmail = escapeHtml(email)
  const safePhone = escapeHtml(fullPhone)
  const safeCompanyName = escapeHtml(companyName)
  const safeSelection = selection ? escapeHtml(selection) : ''
  const safeMessage = message ? escapeHtml(message).replace(/\n/g, '<br>') : ''
  const submittedAt = new Date().toLocaleString('en-US', { timeZone: 'UTC' })

  return {
    personalizations: [{ to: [{ email: config.collateralsAdmin, name: 'RheinBrücke Marketing Team' }], subject: `New Collaterals Request from ${safeFullName}` }],
    content: [
      { type: 'text/plain', value: `New Collaterals Request\n\nContact Details:\nName: ${safeFullName}\nEmail: ${email}\nPhone: ${fullPhone}\nCompany: ${safeCompanyName}\n${selection ? `Interest: ${safeSelection}\n` : ''}${message ? `Message: ${message}\n` : ''}\nAction Required: Please respond within 24-48 hours.\nSubmitted on: ${submittedAt} UTC` },
      { type: 'text/html', value: `<!DOCTYPE html><html><head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"></head><body style="font-family: Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; padding: 20px;"><div style="background: linear-gradient(135deg, #667eea 0%, #5568d3 100%); padding: 30px; text-align: center; border-radius: 8px 8px 0 0;"><h1 style="color: #fff; margin: 0; font-size: 28px;">New Collaterals Request</h1></div><div style="background: #f9fafb; padding: 30px; border-radius: 0 0 8px 8px;"><p>You have received a new collaterals request:</p><div style="background: #fff; padding: 20px; border-radius: 6px; margin: 20px 0; border-left: 4px solid #667eea;"><h3 style="margin-top: 0;">Contact Details:</h3><p><strong>Name:</strong> ${safeFullName}</p><p><strong>Email:</strong> <a href="mailto:${email}">${safeEmail}</a></p><p><strong>Phone:</strong> <a href="tel:${fullPhone.replace(/\s/g, '')}">${safePhone}</a></p><p><strong>Company:</strong> ${safeCompanyName}</p>${safeSelection ? `<p><strong>Interest:</strong> ${safeSelection}</p>` : ''}${safeMessage ? `<p><strong>Message:</strong><br><div style="background: #f3f4f6; padding: 15px; border-radius: 4px;">${safeMessage}</div></p>` : ''}</div><p style="font-size: 14px; color: #0369a1;"><strong>Action Required:</strong> Please respond within 24-48 hours.</p></div><div style="text-align: center; margin-top: 20px; padding: 20px; color: #6b7280; font-size: 12px;"><p>Submitted on: ${submittedAt} UTC</p></div></body></html>` },
    ],
    from: { email: config.fromEmail, name: config.fromName },
    reply_to: { email, name: fullName },
  }
}

// ——— Job application ———
function buildJobApplicantPayload(body: Record<string, unknown>, config: ReturnType<typeof getConfig>) {
  const fullName = String(body.fullName ?? '')
  const email = String(body.email ?? '').trim()
  const fullPhone = body.countryCode ? `${body.countryCode} ${body.phone}` : String(body.phone ?? '')
  const jobTitle = String(body.jobTitle ?? '')
  const coveringLetter = body.coveringLetter ? String(body.coveringLetter) : ''
  const safeFullName = escapeHtml(fullName)
  const safeEmail = escapeHtml(email)
  const safePhone = escapeHtml(fullPhone)
  const safeJobTitle = escapeHtml(jobTitle)
  const safeCoveringLetter = coveringLetter ? escapeHtml(coveringLetter).replace(/\n/g, '<br>') : ''
  const year = new Date().getFullYear()

  return {
    personalizations: [{ to: [{ email, name: fullName }], subject: `Application Received - ${safeJobTitle}` }],
    content: [
      { type: 'text/plain', value: `Thank you for your job application!\n\nDear ${safeFullName},\n\nThank you for your interest in joining RheinBrücke. We have received your application for the position of ${safeJobTitle}.\n\nYour Application Details:\nName: ${safeFullName}\nEmail: ${safeEmail}\nPhone: ${fullPhone}\nPosition Applied: ${safeJobTitle}\n${coveringLetter ? `Covering Letter: ${coveringLetter}\n` : ''}\nOur recruitment team will review your application and get back to you within 5-7 business days.\n\nBest regards,\nThe RheinBrücke Recruitment Team\n© ${year} RheinBrücke. All rights reserved.` },
      { type: 'text/html', value: `<!DOCTYPE html><html><head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"></head><body style="font-family: Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; padding: 20px;"><div style="background: linear-gradient(135deg, #48bb78 0%, #38a169 100%); padding: 30px; text-align: center; border-radius: 8px 8px 0 0;"><h1 style="color: #fff; margin: 0; font-size: 28px;">Application Received!</h1></div><div style="background: #f9fafb; padding: 30px; border-radius: 0 0 8px 8px;"><p>Dear ${safeFullName},</p><p>Thank you for your interest in joining RheinBrücke. We have received your application for the position of <strong>${safeJobTitle}</strong>.</p><div style="background: #fff; padding: 20px; border-radius: 6px; margin: 20px 0; border-left: 4px solid #48bb78;"><h3 style="margin-top: 0;">Your Application Details:</h3><p><strong>Name:</strong> ${safeFullName}</p><p><strong>Email:</strong> ${safeEmail}</p><p><strong>Phone:</strong> ${safePhone}</p><p><strong>Position Applied:</strong> ${safeJobTitle}</p>${safeCoveringLetter ? `<p><strong>Covering Letter:</strong><br>${safeCoveringLetter}</p>` : ''}</div><p>Our recruitment team will review your application and get back to you within <strong>5-7 business days</strong>.</p><p>Best regards,<br><strong>The RheinBrücke Recruitment Team</strong></p></div><div style="text-align: center; margin-top: 20px; padding: 20px; color: #6b7280; font-size: 12px;"><p>&copy; ${year} RheinBrücke. All rights reserved.</p></div></body></html>` },
    ],
    from: { email: config.fromEmail, name: config.fromName },
    reply_to: { email: config.jobAdmin, name: config.fromName },
  }
}

function buildJobAdminPayload(body: Record<string, unknown>, config: ReturnType<typeof getConfig>) {
  const fullName = String(body.fullName ?? '')
  const email = String(body.email ?? '').trim()
  const fullPhone = body.countryCode ? `${body.countryCode} ${body.phone}` : String(body.phone ?? '')
  const jobTitle = String(body.jobTitle ?? '')
  const coveringLetter = body.coveringLetter ? String(body.coveringLetter) : ''
  const resumeUrl = body.resumeUrl ? String(body.resumeUrl) : ''
  const safeFullName = escapeHtml(fullName)
  const safeEmail = escapeHtml(email)
  const safePhone = escapeHtml(fullPhone)
  const safeJobTitle = escapeHtml(jobTitle)
  const safeCoveringLetter = coveringLetter ? escapeHtml(coveringLetter).replace(/\n/g, '<br>') : ''
  const submittedAt = new Date().toLocaleString('en-US', { timeZone: 'UTC' })
  const resumeLink = resumeUrl ? `<a href="${resumeUrl}" target="_blank" style="color: #667eea; text-decoration: underline;">Download Resume</a>` : ''

  return {
    personalizations: [{ to: [{ email: config.jobAdmin, name: 'RheinBrücke Recruitment Team' }], subject: `New Job Application: ${safeJobTitle} - ${safeFullName}` }],
    content: [
      { type: 'text/plain', value: `New Job Application Received\n\nApplication Details:\nName: ${safeFullName}\nEmail: ${email}\nPhone: ${fullPhone}\nPosition: ${safeJobTitle}\n${coveringLetter ? `Covering Letter: ${coveringLetter}\n` : ''}${resumeUrl ? `Resume: ${resumeUrl}\n` : ''}\nAction Required: Please review and respond within 5-7 business days.\nSubmitted on: ${submittedAt} UTC` },
      { type: 'text/html', value: `<!DOCTYPE html><html><head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"></head><body style="font-family: Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; padding: 20px;"><div style="background: linear-gradient(135deg, #667eea 0%, #5568d3 100%); padding: 30px; text-align: center; border-radius: 8px 8px 0 0;"><h1 style="color: #fff; margin: 0; font-size: 28px;">New Job Application</h1></div><div style="background: #f9fafb; padding: 30px; border-radius: 0 0 8px 8px;"><p>You have received a new job application:</p><div style="background: #fff; padding: 20px; border-radius: 6px; margin: 20px 0; border-left: 4px solid #667eea;"><h3 style="margin-top: 0;">Application Details:</h3><p><strong>Name:</strong> ${safeFullName}</p><p><strong>Email:</strong> <a href="mailto:${email}">${safeEmail}</a></p><p><strong>Phone:</strong> <a href="tel:${fullPhone.replace(/\s/g, '')}">${safePhone}</a></p><p><strong>Position:</strong> ${safeJobTitle}</p>${safeCoveringLetter ? `<p><strong>Covering Letter:</strong><br><div style="background: #f3f4f6; padding: 15px; border-radius: 4px;">${safeCoveringLetter}</div></p>` : ''}${resumeUrl ? `<p><strong>Resume:</strong> ${resumeLink}</p>` : ''}</div><p style="font-size: 14px; color: #0369a1;"><strong>Action Required:</strong> Please review and respond within 5-7 business days.</p></div><div style="text-align: center; margin-top: 20px; padding: 20px; color: #6b7280; font-size: 12px;"><p>Submitted on: ${submittedAt} UTC</p></div></body></html>` },
    ],
    from: { email: config.fromEmail, name: config.fromName },
    reply_to: { email, name: fullName },
  }
}

// ——— Test email ———
function buildTestPayload(testEmail: string, config: ReturnType<typeof getConfig>) {
  return {
    personalizations: [{ to: [{ email: testEmail, name: 'Test User' }], subject: 'Test Email from RheinBrücke' }],
    content: [
      { type: 'text/plain', value: 'This is a test email from RheinBrücke contact form system.' },
      { type: 'text/html', value: '<html><body><h1>Test Email</h1><p>This is a test email from RheinBrücke contact form system.</p></body></html>' },
    ],
    from: { email: config.fromEmail, name: config.fromName },
    reply_to: { email: config.adminEmail, name: config.fromName },
  }
}

function jsonResponse(data: object, status: number, headers: Record<string, string>) {
  return new Response(JSON.stringify(data), {
    status,
    headers: { ...headers, 'Content-Type': 'application/json' },
  })
}

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

Deno.serve(async (req) => {
  // Handle CORS preflight first - browser blocks actual request until OPTIONS succeeds
  const cors = corsHeadersForRequest(req)
  if (req.method === 'OPTIONS') {
    return new Response('ok', { status: 200, headers: cors })
  }

  if (req.method !== 'POST') {
    return jsonResponse({ success: false, error: 'Method not allowed' }, 405, cors)
  }

  const config = getConfig()
  if (!config.apiKey?.trim()) {
    return jsonResponse({ success: false, error: 'Email service not configured', emailSent: false }, 500, cors)
  }

  let body: Record<string, unknown>
  try {
    body = await req.json()
  } catch {
    return jsonResponse({ success: false, error: 'Invalid JSON body' }, 400, cors)
  }

  const channel = body.channel as string
  if (!channel) {
    return jsonResponse({ success: false, error: 'Missing channel: contact | collaterals | job-application | test' }, 400, cors)
  }

  if (channel === 'test') {
    const testEmail = body.testEmail as string
    if (!testEmail?.trim()) {
      return jsonResponse({ success: false, error: 'testEmail is required' }, 400, cors)
    }
    const payload = buildTestPayload(testEmail.trim(), config)
    const result = await sendSendGrid(config.apiKey, payload)
    if (!result.ok) {
      return jsonResponse({ success: false, error: result.error, emailSent: false }, 500, cors)
    }
    return jsonResponse({ success: true, message: 'Test email sent successfully!', emailSent: true }, 200, cors)
  }

  if (channel === 'contact' || channel === 'collaterals') {
    const fullName = body.fullName as string
    const email = (body.email as string)?.trim()
    const phone = body.phone
    const companyName = body.companyName as string
    if (!fullName || !email || !phone || !companyName) {
      return jsonResponse({ success: false, error: 'Missing required fields: fullName, email, phone, companyName' }, 400, cors)
    }
    if (!emailRegex.test(email)) {
      return jsonResponse({ success: false, error: 'Invalid email format' }, 400, cors)
    }

    const userPayload = channel === 'contact' ? buildContactUserPayload(body, config) : buildCollateralsUserPayload(body, config)
    const adminPayload = channel === 'contact' ? buildContactAdminPayload(body, config) : buildCollateralsAdminPayload(body, config)

    const [userResult, adminResult] = await Promise.all([
      sendSendGrid(config.apiKey, userPayload),
      sendSendGrid(config.apiKey, adminPayload),
    ])

    const userEmailSent = userResult.ok
    const adminEmailSent = adminResult.ok
    const success = userEmailSent || adminEmailSent
    return jsonResponse({
      success: true,
      message: success ? 'Emails sent successfully' : 'Form submitted but email notification failed',
      emailSent: userEmailSent && adminEmailSent,
      userEmailSent,
      adminEmailSent,
      error: !success ? (userResult.error ?? adminResult.error) : undefined,
    }, 200, cors)
  }

  if (channel === 'job-application') {
    const fullName = body.fullName as string
    const email = (body.email as string)?.trim()
    const phone = body.phone
    const jobTitle = body.jobTitle as string
    if (!fullName || !email || !phone || !jobTitle) {
      return jsonResponse({ success: false, error: 'Missing required fields: fullName, email, phone, jobTitle' }, 400, cors)
    }
    if (!emailRegex.test(email)) {
      return jsonResponse({ success: false, error: 'Invalid email format' }, 400, cors)
    }

    const userPayload = buildJobApplicantPayload(body, config)
    const adminPayload = buildJobAdminPayload(body, config)

    const [userResult, adminResult] = await Promise.all([
      sendSendGrid(config.apiKey, userPayload),
      sendSendGrid(config.apiKey, adminPayload),
    ])

    const applicantEmailSent = userResult.ok
    const adminEmailSent = adminResult.ok
    const success = applicantEmailSent || adminEmailSent
    return jsonResponse({
      success: true,
      message: success ? 'Emails sent successfully' : 'Application submitted but email notification failed',
      emailSent: applicantEmailSent && adminEmailSent,
      userEmailSent: applicantEmailSent,
      adminEmailSent,
      error: !success ? (userResult.error ?? adminResult.error) : undefined,
    }, 200, cors)
  }

  return jsonResponse({ success: false, error: `Unknown channel: ${channel}` }, 400, cors)
})
