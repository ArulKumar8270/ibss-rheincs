/**
 * Client-side SendGrid integration for static export.
 * Sends email directly from the browser via SendGrid API — no Node/API routes needed.
 *
 * SECURITY: The API key is in the browser (NEXT_PUBLIC_SENDGRID_API_KEY).
 * Use a SendGrid "Restricted" API key with only "Mail Send" permission to limit blast if leaked.
 *
 * Env vars (all NEXT_PUBLIC_* so they're available at build time for static export):
 * - NEXT_PUBLIC_SENDGRID_API_KEY (required)
 * - NEXT_PUBLIC_FROM_EMAIL (default: noreply@rheincs.com)
 * - NEXT_PUBLIC_FROM_NAME (default: RheinBrücke)
 * - NEXT_PUBLIC_ADMIN_EMAIL (default: marketing@rheincs.com)
 * - NEXT_PUBLIC_COLLATERALS_ADMIN_EMAIL (optional, falls back to ADMIN_EMAIL)
 * - NEXT_PUBLIC_JOB_ADMIN_EMAIL (optional, falls back to ADMIN_EMAIL)
 */

import type { SendGridPayload } from './email-payloads';
import type { ContactFormData, JobApplicationFormData } from './email-payloads';
import {
  buildContactUserPayload,
  buildContactAdminPayload,
  buildCollateralsUserPayload,
  buildCollateralsAdminPayload,
  buildJobApplicantPayload,
  buildJobAdminPayload,
  type EmailConfig,
} from './email-payloads';

const SENDGRID_URL = 'https://api.sendgrid.com/v3/mail/send';

function getConfig(): EmailConfig & { apiKey: string } {
  const apiKey = process.env.NEXT_PUBLIC_SENDGRID_API_KEY ?? '';
  return {
    apiKey,
    fromEmail: process.env.NEXT_PUBLIC_FROM_EMAIL ?? 'noreply@rheincs.com',
    fromName: process.env.NEXT_PUBLIC_FROM_NAME ?? 'RheinBrücke',
    adminEmail: process.env.NEXT_PUBLIC_ADMIN_EMAIL ?? 'marketing@rheincs.com',
  };
}

function getCollateralsAdminEmail(): string {
  return process.env.NEXT_PUBLIC_COLLATERALS_ADMIN_EMAIL ?? process.env.NEXT_PUBLIC_ADMIN_EMAIL ?? 'marketing@rheincs.com';
}

function getJobAdminEmail(): string {
  return process.env.NEXT_PUBLIC_JOB_ADMIN_EMAIL ?? process.env.NEXT_PUBLIC_ADMIN_EMAIL ?? 'careers@rheincs.com';
}

async function sendPayload(apiKey: string, payload: SendGridPayload): Promise<{ success: boolean; error?: string }> {
  if (!apiKey.trim()) {
    return { success: false, error: 'SendGrid API key not configured' };
  }
  const res = await fetch(SENDGRID_URL, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${apiKey}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  });
  const text = await res.text();
  let parsed: { message?: string; errors?: Array<{ message?: string }> } = {};
  try {
    parsed = JSON.parse(text);
  } catch {
    parsed = { message: text };
  }
  if (!res.ok) {
    const errMsg =
      (Array.isArray(parsed.errors) && parsed.errors[0]?.message) ||
      (parsed as { message?: string }).message ||
      `HTTP ${res.status}`;
    return { success: false, error: errMsg };
  }
  return { success: true };
}

export type SendContactResult = { success: boolean; userEmailSent?: boolean; adminEmailSent?: boolean; error?: string };

export async function sendContactEmails(data: ContactFormData): Promise<SendContactResult> {
  const { apiKey, ...config } = getConfig();
  if (!apiKey.trim()) {
    return { success: false, error: 'Email not configured. Set NEXT_PUBLIC_SENDGRID_API_KEY.' };
  }
  const userPayload = buildContactUserPayload(data, config);
  const adminPayload = buildContactAdminPayload(data, config);
  const [userResult, adminResult] = await Promise.all([
    sendPayload(apiKey, userPayload),
    sendPayload(apiKey, adminPayload),
  ]);
  return {
    success: userResult.success || adminResult.success,
    userEmailSent: userResult.success,
    adminEmailSent: adminResult.success,
    error: !userResult.success && !adminResult.success ? userResult.error ?? adminResult.error : undefined,
  };
}

export async function sendCollateralsEmails(data: ContactFormData): Promise<SendContactResult> {
  const { apiKey, ...baseConfig } = getConfig();
  const config: EmailConfig = { ...baseConfig, adminEmail: getCollateralsAdminEmail() };
  if (!apiKey.trim()) {
    return { success: false, error: 'Email not configured. Set NEXT_PUBLIC_SENDGRID_API_KEY.' };
  }
  const userPayload = buildCollateralsUserPayload(data, config);
  const adminPayload = buildCollateralsAdminPayload(data, config);
  const [userResult, adminResult] = await Promise.all([
    sendPayload(apiKey, userPayload),
    sendPayload(apiKey, adminPayload),
  ]);
  return {
    success: userResult.success || adminResult.success,
    userEmailSent: userResult.success,
    adminEmailSent: adminResult.success,
    error: !userResult.success && !adminResult.success ? userResult.error ?? adminResult.error : undefined,
  };
}

export async function sendJobApplicationEmails(data: JobApplicationFormData): Promise<SendContactResult> {
  const { apiKey, ...baseConfig } = getConfig();
  const config: EmailConfig = { ...baseConfig, adminEmail: getJobAdminEmail() };
  if (!apiKey.trim()) {
    return { success: false, error: 'Email not configured. Set NEXT_PUBLIC_SENDGRID_API_KEY.' };
  }
  const applicantPayload = buildJobApplicantPayload(data, config);
  const adminPayload = buildJobAdminPayload(data, config);
  const [applicantResult, adminResult] = await Promise.all([
    sendPayload(apiKey, applicantPayload),
    sendPayload(apiKey, adminPayload),
  ]);
  return {
    success: applicantResult.success || adminResult.success,
    userEmailSent: applicantResult.success,
    adminEmailSent: adminResult.success,
    error: !applicantResult.success && !adminResult.success ? applicantResult.error ?? adminResult.error : undefined,
  };
}
