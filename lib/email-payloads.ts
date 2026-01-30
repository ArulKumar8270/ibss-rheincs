/**
 * Build SendGrid v3 mail/send payloads. Used by client-side SendGrid sender (static export).
 * Pure functions — no fetch, no env — safe to run in the browser.
 */

export type EmailConfig = {
  fromEmail: string;
  fromName: string;
  adminEmail: string;
};

export type SendGridPayload = {
  personalizations: Array<{
    to: Array<{ email: string; name?: string }>;
    subject: string;
  }>;
  content: Array<{ type: string; value: string }>;
  from: { email: string; name: string };
  reply_to?: { email: string; name: string };
};

function escapeHtml(text: string): string {
  if (!text) return '';
  return text
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

// ——— Contact form ———
export type ContactFormData = {
  fullName: string;
  email: string;
  phone: string;
  countryCode?: string;
  companyName: string;
  selection?: string | null;
  message?: string | null;
};

export function buildContactUserPayload(data: ContactFormData, config: EmailConfig): SendGridPayload {
  const fullPhone = data.countryCode ? `${data.countryCode} ${data.phone}` : data.phone;
  const safeFullName = escapeHtml(data.fullName);
  const safeEmail = escapeHtml(data.email);
  const safePhone = escapeHtml(fullPhone);
  const safeCompanyName = escapeHtml(data.companyName);
  const safeSelection = data.selection ? escapeHtml(data.selection) : '';
  const safeMessage = data.message ? escapeHtml(data.message).replace(/\n/g, '<br>') : '';
  const year = new Date().getFullYear();

  return {
    personalizations: [
      { to: [{ email: data.email.trim(), name: data.fullName.trim() }], subject: 'Thank you for contacting RheinBrücke' },
    ],
    content: [
      {
        type: 'text/plain',
        value: `Thank you for contacting RheinBrücke!\n\nDear ${safeFullName},\n\nThank you for reaching out to RheinBrücke. We have received your inquiry and our team will get back to you shortly.\n\nYour Inquiry Details:\nName: ${safeFullName}\nEmail: ${safeEmail}\nPhone: ${safePhone}\nCompany: ${safeCompanyName}\n${safeSelection ? `Interest: ${safeSelection}\n` : ''}${data.message ? `Message: ${data.message}\n` : ''}\nWe typically respond within 24-48 hours.\n\nBest regards,\nThe RheinBrücke Team\n© ${year} RheinBrücke. All rights reserved.`,
      },
      {
        type: 'text/html',
        value: `<!DOCTYPE html><html><head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"></head><body style="font-family: Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; padding: 20px;"><div style="background: linear-gradient(135deg, #48bb78 0%, #38a169 100%); padding: 30px; text-align: center; border-radius: 8px 8px 0 0;"><h1 style="color: #fff; margin: 0; font-size: 28px;">Thank You for Contacting Us!</h1></div><div style="background: #f9fafb; padding: 30px; border-radius: 0 0 8px 8px;"><p style="font-size: 16px; margin-bottom: 20px;">Dear ${safeFullName},</p><p style="font-size: 16px; margin-bottom: 20px;">Thank you for reaching out to RheinBrücke. We have received your inquiry and our team will get back to you shortly.</p><div style="background: #fff; padding: 20px; border-radius: 6px; margin: 20px 0; border-left: 4px solid #48bb78;"><h3 style="margin-top: 0; color: #1a202c;">Your Inquiry Details:</h3><p style="margin: 8px 0;"><strong>Name:</strong> ${safeFullName}</p><p style="margin: 8px 0;"><strong>Email:</strong> ${safeEmail}</p><p style="margin: 8px 0;"><strong>Phone:</strong> ${safePhone}</p><p style="margin: 8px 0;"><strong>Company:</strong> ${safeCompanyName}</p>${safeSelection ? `<p style="margin: 8px 0;"><strong>Interest:</strong> ${safeSelection}</p>` : ''}${safeMessage ? `<p style="margin: 8px 0;"><strong>Message:</strong><br>${safeMessage}</p>` : ''}</div><p style="font-size: 16px; margin-top: 30px;">We typically respond within 24-48 hours.</p><p style="font-size: 16px; margin-top: 20px;">Best regards,<br><strong>The RheinBrücke Team</strong></p></div><div style="text-align: center; margin-top: 20px; padding: 20px; color: #6b7280; font-size: 12px;"><p>&copy; ${year} RheinBrücke. All rights reserved.</p></div></body></html>`,
      },
    ],
    from: { email: config.fromEmail, name: config.fromName },
    reply_to: { email: config.adminEmail, name: config.fromName },
  };
}

export function buildContactAdminPayload(data: ContactFormData, config: EmailConfig): SendGridPayload {
  const fullPhone = data.countryCode ? `${data.countryCode} ${data.phone}` : data.phone;
  const safeFullName = escapeHtml(data.fullName);
  const safeEmail = escapeHtml(data.email);
  const safePhone = escapeHtml(fullPhone);
  const safeCompanyName = escapeHtml(data.companyName);
  const safeSelection = data.selection ? escapeHtml(data.selection) : '';
  const safeMessage = data.message ? escapeHtml(data.message).replace(/\n/g, '<br>') : '';
  const submittedAt = new Date().toLocaleString('en-US', { timeZone: 'UTC' });

  return {
    personalizations: [
      { to: [{ email: config.adminEmail, name: 'RheinBrücke Team' }], subject: `New Contact Form Submission from ${safeFullName}` },
    ],
    content: [
      {
        type: 'text/plain',
        value: `New Contact Form Submission\n\nYou have received a new contact form submission.\n\nContact Details:\nName: ${safeFullName}\nEmail: ${data.email.trim()}\nPhone: ${fullPhone}\nCompany: ${safeCompanyName}\n${safeSelection ? `Interest: ${safeSelection}\n` : ''}${data.message ? `Message: ${data.message}\n` : ''}\nAction Required: Please respond within 24-48 hours.\nSubmitted on: ${submittedAt} UTC`,
      },
      {
        type: 'text/html',
        value: `<!DOCTYPE html><html><head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"></head><body style="font-family: Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; padding: 20px;"><div style="background: linear-gradient(135deg, #667eea 0%, #5568d3 100%); padding: 30px; text-align: center; border-radius: 8px 8px 0 0;"><h1 style="color: #fff; margin: 0; font-size: 28px;">New Contact Form Submission</h1></div><div style="background: #f9fafb; padding: 30px; border-radius: 0 0 8px 8px;"><p style="font-size: 16px; margin-bottom: 20px;">You have received a new contact form submission:</p><div style="background: #fff; padding: 20px; border-radius: 6px; margin: 20px 0; border-left: 4px solid #667eea;"><h3 style="margin-top: 0; color: #1a202c;">Contact Details:</h3><p style="margin: 8px 0;"><strong>Name:</strong> ${safeFullName}</p><p style="margin: 8px 0;"><strong>Email:</strong> <a href="mailto:${data.email.trim()}">${safeEmail}</a></p><p style="margin: 8px 0;"><strong>Phone:</strong> <a href="tel:${fullPhone.replace(/\s/g, '')}">${safePhone}</a></p><p style="margin: 8px 0;"><strong>Company:</strong> ${safeCompanyName}</p>${safeSelection ? `<p style="margin: 8px 0;"><strong>Interest:</strong> ${safeSelection}</p>` : ''}${safeMessage ? `<p style="margin: 8px 0;"><strong>Message:</strong><br><div style="background: #f3f4f6; padding: 15px; border-radius: 4px; margin-top: 10px;">${safeMessage}</div></p>` : ''}</div><p style="margin: 0; font-size: 14px; color: #0369a1;"><strong>Action Required:</strong> Please respond within 24-48 hours.</p></div><div style="text-align: center; margin-top: 20px; padding: 20px; color: #6b7280; font-size: 12px;"><p>Submitted on: ${submittedAt} UTC</p></div></body></html>`,
      },
    ],
    from: { email: config.fromEmail, name: config.fromName },
    reply_to: { email: data.email.trim(), name: data.fullName.trim() },
  };
}

// ——— Collaterals form (same shape as contact) ———
export function buildCollateralsUserPayload(data: ContactFormData, config: EmailConfig): SendGridPayload {
  const fullPhone = data.countryCode ? `${data.countryCode} ${data.phone}` : data.phone;
  const safeFullName = escapeHtml(data.fullName);
  const safeEmail = escapeHtml(data.email);
  const safePhone = escapeHtml(fullPhone);
  const safeCompanyName = escapeHtml(data.companyName);
  const safeSelection = data.selection ? escapeHtml(data.selection) : '';
  const safeMessage = data.message ? escapeHtml(data.message).replace(/\n/g, '<br>') : '';
  const year = new Date().getFullYear();

  return {
    personalizations: [
      { to: [{ email: data.email.trim(), name: data.fullName.trim() }], subject: 'Thank you for your interest in RheinBrücke Collaterals' },
    ],
    content: [
      {
        type: 'text/plain',
        value: `Thank you for your interest in RheinBrücke Collaterals!\n\nDear ${safeFullName},\n\nThank you for requesting our collaterals. We have received your request and our team will get back to you shortly.\n\nYour Request Details:\nName: ${safeFullName}\nEmail: ${safeEmail}\nPhone: ${safePhone}\nCompany: ${safeCompanyName}\n${safeSelection ? `Interest: ${safeSelection}\n` : ''}\nWe typically respond within 24-48 hours.\n\nBest regards,\nThe RheinBrücke Marketing Team\n© ${year} RheinBrücke. All rights reserved.`,
      },
      {
        type: 'text/html',
        value: `<!DOCTYPE html><html><head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"></head><body style="font-family: Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; padding: 20px;"><div style="background: linear-gradient(135deg, #48bb78 0%, #38a169 100%); padding: 30px; text-align: center; border-radius: 8px 8px 0 0;"><h1 style="color: #fff; margin: 0; font-size: 28px;">Thank You for Your Interest!</h1></div><div style="background: #f9fafb; padding: 30px; border-radius: 0 0 8px 8px;"><p style="font-size: 16px; margin-bottom: 20px;">Dear ${safeFullName},</p><p style="font-size: 16px; margin-bottom: 20px;">Thank you for requesting our collaterals. We have received your request and our team will get back to you shortly.</p><div style="background: #fff; padding: 20px; border-radius: 6px; margin: 20px 0; border-left: 4px solid #48bb78;"><h3 style="margin-top: 0; color: #1a202c;">Your Request Details:</h3><p style="margin: 8px 0;"><strong>Name:</strong> ${safeFullName}</p><p style="margin: 8px 0;"><strong>Email:</strong> ${safeEmail}</p><p style="margin: 8px 0;"><strong>Phone:</strong> ${safePhone}</p><p style="margin: 8px 0;"><strong>Company:</strong> ${safeCompanyName}</p>${safeSelection ? `<p style="margin: 8px 0;"><strong>Interest:</strong> ${safeSelection}</p>` : ''}${safeMessage ? `<p style="margin: 8px 0;"><strong>Message:</strong><br>${safeMessage}</p>` : ''}</div><p style="font-size: 16px; margin-top: 30px;">We typically respond within 24-48 hours.</p><p style="font-size: 16px; margin-top: 20px;">Best regards,<br><strong>The RheinBrücke Marketing Team</strong></p></div><div style="text-align: center; margin-top: 20px; padding: 20px; color: #6b7280; font-size: 12px;"><p>&copy; ${year} RheinBrücke. All rights reserved.</p></div></body></html>`,
      },
    ],
    from: { email: config.fromEmail, name: config.fromName },
    reply_to: { email: config.adminEmail, name: config.fromName },
  };
}

export function buildCollateralsAdminPayload(data: ContactFormData, config: EmailConfig): SendGridPayload {
  const fullPhone = data.countryCode ? `${data.countryCode} ${data.phone}` : data.phone;
  const safeFullName = escapeHtml(data.fullName);
  const safeEmail = escapeHtml(data.email);
  const safePhone = escapeHtml(fullPhone);
  const safeCompanyName = escapeHtml(data.companyName);
  const safeSelection = data.selection ? escapeHtml(data.selection) : '';
  const safeMessage = data.message ? escapeHtml(data.message).replace(/\n/g, '<br>') : '';
  const submittedAt = new Date().toLocaleString('en-US', { timeZone: 'UTC' });

  return {
    personalizations: [
      { to: [{ email: config.adminEmail, name: 'RheinBrücke Marketing Team' }], subject: `New Collaterals Request from ${safeFullName}` },
    ],
    content: [
      {
        type: 'text/plain',
        value: `New Collaterals Request\n\nYou have received a new collaterals request.\n\nContact Details:\nName: ${safeFullName}\nEmail: ${data.email.trim()}\nPhone: ${fullPhone}\nCompany: ${safeCompanyName}\n${safeSelection ? `Interest: ${safeSelection}\n` : ''}${data.message ? `Message: ${data.message}\n` : ''}\nAction Required: Please respond within 24-48 hours.\nSubmitted on: ${submittedAt} UTC`,
      },
      {
        type: 'text/html',
        value: `<!DOCTYPE html><html><head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"></head><body style="font-family: Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; padding: 20px;"><div style="background: linear-gradient(135deg, #667eea 0%, #5568d3 100%); padding: 30px; text-align: center; border-radius: 8px 8px 0 0;"><h1 style="color: #fff; margin: 0; font-size: 28px;">New Collaterals Request</h1></div><div style="background: #f9fafb; padding: 30px; border-radius: 0 0 8px 8px;"><p style="font-size: 16px; margin-bottom: 20px;">You have received a new collaterals request:</p><div style="background: #fff; padding: 20px; border-radius: 6px; margin: 20px 0; border-left: 4px solid #667eea;"><h3 style="margin-top: 0; color: #1a202c;">Contact Details:</h3><p style="margin: 8px 0;"><strong>Name:</strong> ${safeFullName}</p><p style="margin: 8px 0;"><strong>Email:</strong> <a href="mailto:${data.email.trim()}">${safeEmail}</a></p><p style="margin: 8px 0;"><strong>Phone:</strong> <a href="tel:${fullPhone.replace(/\s/g, '')}">${safePhone}</a></p><p style="margin: 8px 0;"><strong>Company:</strong> ${safeCompanyName}</p>${safeSelection ? `<p style="margin: 8px 0;"><strong>Interest:</strong> ${safeSelection}</p>` : ''}${safeMessage ? `<p style="margin: 8px 0;"><strong>Message:</strong><br><div style="background: #f3f4f6; padding: 15px; border-radius: 4px; margin-top: 10px;">${safeMessage}</div></p>` : ''}</div><p style="margin: 0; font-size: 14px; color: #0369a1;"><strong>Action Required:</strong> Please respond within 24-48 hours.</p></div><div style="text-align: center; margin-top: 20px; padding: 20px; color: #6b7280; font-size: 12px;"><p>Submitted on: ${submittedAt} UTC</p></div></body></html>`,
      },
    ],
    from: { email: config.fromEmail, name: config.fromName },
    reply_to: { email: data.email.trim(), name: data.fullName.trim() },
  };
}

// ——— Job application ———
export type JobApplicationFormData = {
  fullName: string;
  email: string;
  phone: string;
  countryCode?: string;
  jobTitle: string;
  resumeUrl?: string | null;
  coveringLetter?: string | null;
};

export function buildJobApplicantPayload(data: JobApplicationFormData, config: EmailConfig): SendGridPayload {
  const fullPhone = data.countryCode ? `${data.countryCode} ${data.phone}` : data.phone;
  const safeFullName = escapeHtml(data.fullName);
  const safeEmail = escapeHtml(data.email);
  const safePhone = escapeHtml(fullPhone);
  const safeJobTitle = escapeHtml(data.jobTitle);
  const safeCoveringLetter = data.coveringLetter ? escapeHtml(data.coveringLetter).replace(/\n/g, '<br>') : '';
  const year = new Date().getFullYear();

  return {
    personalizations: [
      { to: [{ email: data.email.trim(), name: data.fullName.trim() }], subject: `Application Received - ${safeJobTitle}` },
    ],
    content: [
      {
        type: 'text/plain',
        value: `Thank you for your job application!\n\nDear ${safeFullName},\n\nThank you for your interest in joining RheinBrücke. We have received your application for the position of ${safeJobTitle}.\n\nYour Application Details:\nName: ${safeFullName}\nEmail: ${safeEmail}\nPhone: ${fullPhone}\nPosition Applied: ${safeJobTitle}\n${data.coveringLetter ? `Covering Letter: ${data.coveringLetter}\n` : ''}\nOur recruitment team will review your application and get back to you within 5-7 business days.\n\nBest regards,\nThe RheinBrücke Recruitment Team\n© ${year} RheinBrücke. All rights reserved.`,
      },
      {
        type: 'text/html',
        value: `<!DOCTYPE html><html><head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"></head><body style="font-family: Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; padding: 20px;"><div style="background: linear-gradient(135deg, #48bb78 0%, #38a169 100%); padding: 30px; text-align: center; border-radius: 8px 8px 0 0;"><h1 style="color: #fff; margin: 0; font-size: 28px;">Application Received!</h1></div><div style="background: #f9fafb; padding: 30px; border-radius: 0 0 8px 8px;"><p style="font-size: 16px; margin-bottom: 20px;">Dear ${safeFullName},</p><p style="font-size: 16px; margin-bottom: 20px;">Thank you for your interest in joining RheinBrücke. We have received your application for the position of <strong>${safeJobTitle}</strong>.</p><div style="background: #fff; padding: 20px; border-radius: 6px; margin: 20px 0; border-left: 4px solid #48bb78;"><h3 style="margin-top: 0; color: #1a202c;">Your Application Details:</h3><p style="margin: 8px 0;"><strong>Name:</strong> ${safeFullName}</p><p style="margin: 8px 0;"><strong>Email:</strong> ${safeEmail}</p><p style="margin: 8px 0;"><strong>Phone:</strong> ${safePhone}</p><p style="margin: 8px 0;"><strong>Position Applied:</strong> ${safeJobTitle}</p>${safeCoveringLetter ? `<p style="margin: 8px 0;"><strong>Covering Letter:</strong><br>${safeCoveringLetter}</p>` : ''}</div><p style="font-size: 16px; margin-top: 30px;">Our recruitment team will review your application and get back to you within <strong>5-7 business days</strong>.</p><p style="font-size: 16px; margin-top: 20px;">Best regards,<br><strong>The RheinBrücke Recruitment Team</strong></p></div><div style="text-align: center; margin-top: 20px; padding: 20px; color: #6b7280; font-size: 12px;"><p>&copy; ${year} RheinBrücke. All rights reserved.</p></div></body></html>`,
      },
    ],
    from: { email: config.fromEmail, name: config.fromName },
    reply_to: { email: config.adminEmail, name: config.fromName },
  };
}

export function buildJobAdminPayload(data: JobApplicationFormData, config: EmailConfig): SendGridPayload {
  const fullPhone = data.countryCode ? `${data.countryCode} ${data.phone}` : data.phone;
  const safeFullName = escapeHtml(data.fullName);
  const safeEmail = escapeHtml(data.email);
  const safePhone = escapeHtml(fullPhone);
  const safeJobTitle = escapeHtml(data.jobTitle);
  const safeCoveringLetter = data.coveringLetter ? escapeHtml(data.coveringLetter).replace(/\n/g, '<br>') : '';
  const submittedAt = new Date().toLocaleString('en-US', { timeZone: 'UTC' });
  const resumeLink = data.resumeUrl ? `<a href="${data.resumeUrl}" target="_blank" style="color: #667eea; text-decoration: underline;">Download Resume</a>` : '';

  return {
    personalizations: [
      { to: [{ email: config.adminEmail, name: 'RheinBrücke Recruitment Team' }], subject: `New Job Application: ${safeJobTitle} - ${safeFullName}` },
    ],
    content: [
      {
        type: 'text/plain',
        value: `New Job Application Received\n\nYou have received a new job application.\n\nApplication Details:\nName: ${safeFullName}\nEmail: ${data.email.trim()}\nPhone: ${fullPhone}\nPosition: ${safeJobTitle}\n${data.coveringLetter ? `Covering Letter: ${data.coveringLetter}\n` : ''}${data.resumeUrl ? `Resume: ${data.resumeUrl}\n` : ''}\nAction Required: Please review and respond within 5-7 business days.\nSubmitted on: ${submittedAt} UTC`,
      },
      {
        type: 'text/html',
        value: `<!DOCTYPE html><html><head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"></head><body style="font-family: Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; padding: 20px;"><div style="background: linear-gradient(135deg, #667eea 0%, #5568d3 100%); padding: 30px; text-align: center; border-radius: 8px 8px 0 0;"><h1 style="color: #fff; margin: 0; font-size: 28px;">New Job Application</h1></div><div style="background: #f9fafb; padding: 30px; border-radius: 0 0 8px 8px;"><p style="font-size: 16px; margin-bottom: 20px;">You have received a new job application:</p><div style="background: #fff; padding: 20px; border-radius: 6px; margin: 20px 0; border-left: 4px solid #667eea;"><h3 style="margin-top: 0; color: #1a202c;">Application Details:</h3><p style="margin: 8px 0;"><strong>Name:</strong> ${safeFullName}</p><p style="margin: 8px 0;"><strong>Email:</strong> <a href="mailto:${data.email.trim()}">${safeEmail}</a></p><p style="margin: 8px 0;"><strong>Phone:</strong> <a href="tel:${fullPhone.replace(/\s/g, '')}">${safePhone}</a></p><p style="margin: 8px 0;"><strong>Position:</strong> ${safeJobTitle}</p>${safeCoveringLetter ? `<p style="margin: 8px 0;"><strong>Covering Letter:</strong><br><div style="background: #f3f4f6; padding: 15px; border-radius: 4px; margin-top: 10px;">${safeCoveringLetter}</div></p>` : ''}${data.resumeUrl ? `<p style="margin: 8px 0;"><strong>Resume:</strong> ${resumeLink}</p>` : ''}</div><p style="margin: 0; font-size: 14px; color: #0369a1;"><strong>Action Required:</strong> Please review and respond within 5-7 business days.</p></div><div style="text-align: center; margin-top: 20px; padding: 20px; color: #6b7280; font-size: 12px;"><p>Submitted on: ${submittedAt} UTC</p></div></body></html>`,
      },
    ],
    from: { email: config.fromEmail, name: config.fromName },
    reply_to: { email: data.email.trim(), name: data.fullName.trim() },
  };
}
