// Supabase Edge Function: send-contact-email
// Handles: contact, collaterals, job-application, test
// Sends email via Microsoft Graph with certificate auth (same flow as Node MSAL:
//   ConfidentialClientApplication with clientCertificate -> acquireTokenByClientCredential -> users/{sender}/sendMail).
// Set secrets in Supabase: CLIENT_ID, TENANT_ID, CERT_THUMBPRINT, PRIVATE_KEY (PEM),
//   FROM_USER, FROM_NAME, ADMIN_EMAIL, COLLATERALS_ADMIN_EMAIL, JOB_APPLICATION_ADMIN_EMAIL, DEFTECH_ADMIN_EMAIL, IMPRESS_ADMIN_EMAIL

/// <reference types="deno" />

// @ts-ignore - Deno requires .ts extension for local imports
import { corsHeadersForRequest } from '../_shared/cors.ts'
// @ts-ignore - Deno npm specifier
import { SignJWT, importPKCS8 } from 'npm:jose@5.2.0'

// Mailbox to send as (must have SendAs permission in Exchange). Default: noreply@rheincs.com
const FROM_USER = Deno.env.get('FROM_USER') ?? 'noreply@rheincs.com'
const GRAPH_SCOPE = 'https://graph.microsoft.com/.default'

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
  const clientId = Deno.env.get('CLIENT_ID') ?? 'fd935dfb-6d1a-4568-8f2d-c50375c930a4'
  const tenantId = Deno.env.get('TENANT_ID') ?? 'f45c3768-a091-47aa-a5c4-28f9d04ce0df'
  const thumbprint = (Deno.env.get('CERT_THUMBPRINT') ?? 'AE4FBD29AE91BFCFEEF61181E9EB506E4E7391F9').replace(/\s/g, '')
  const privateKeyRaw = Deno.env.get('PRIVATE_KEY') ?? `MIIEvwIBADANBgkqhkiG9w0BAQEFAASCBKkwggSlAgEAAoIBAQC6vnKV81rxkexb
VwwmK6hLh+nkWtca+zTxVPeJThaut4gkuyMXS4gdpo+6HzFMqKP4XHXj92sC36LI
1CQL8cMfVKpDozYjgUZaE0wcfC7sjZdFE6jhgEq40K11f/WPvc5IZrZqK0F6s6e3
8p0Ip+iFOjjNMZKTchfun1QChMiSU0A1m2wZlckurbPGQ7rebXTyb0pGiE/fhKgY
QruJngXqwVZQSC1ITi3yfRBMNmkjmEMVHaiIT75pwU59Ivy3yjKm9gETMHAA9SQi
IP4rGrOiI6kWAFhjUxtNWEEGZzkx+eFpzcAijsHMJC+gFNJ9jYLKR8WRJGMn6vJj
FZBlgYIxAgMBAAECggEBAKPyyeTOFzzYkPqMDLWCRKmzNGvwOMOOYieyIfSg4xcX
OGaPCTrNbD4j2jFca0rTD8nfWvz+XivSrTbF0LPP2C+shCMHqmM3fs1b/clQWV4C
3RifLvhzSqbBRlhPNAaza+RykJnbSgxwp8G+NZHA4En/GJlFeVsLoukzZm0jqHeV
MS1pxI+vv/Ze656njJuW68Gwiv8huzBw4bYXnJ/dA5wGo1IDqfW63Q9wzKvfnSU6
qPGzTwVP4xexJMm3N7aReYjWXZwzXKukobIiVI09WxDDYsiC5XWh+m61+c2Ccvn2
nwLZNJDkxUw2WR8rcTkqKLm6XSbcsAVaSApgglnWAvUCgYEA4vKgc/jDhyLP8vKl
NuwPNzuTo7uIiMrNr1wAXbSE4eVVsjowX6nXCSA4fQ0iJZfwj/r/U2Nxclcuk40+
/SgJpFomhcCxXGI4XmXFzh9/vJlg86M7JEtTqdn6ljIk/i0mm1/0mvbUj6ptBw1l
g9jXuoy5IvkEu46Lar20SkYbCXMCgYEA0qZKCb7WU4OJEKmahfGhszIUkUpBBDfX
e2hFyhBx2VW5mIYqr6ocK3HtdQl7Qsfr/uqrf0NMLzdYfbXyfN90z3IJzkXOnPPV
ZLTL9PS5EnWRBDXiB9xcnIe/Eb+ZdQXOUTH8B8hdIzxIq/V2IJqKrYFLB0SNjsEF
BlHFQW557MsCgYAgkYsfOXrt4LwQ9GtrR1MjrQQSAi6k2t3LpZtT1z0eoee7bQhW
Iix+3cXdhE37MSPPtciAcgvsycAgYqvAbsd7c4iFt1J8nIfUXCyX2QNe0HAOZsVs
/vZhsKt6dHXEmDwrHgkfV/7HI0EEOxLvaeYDmoBTGYNpWxp81f6Sjh8BKwKBgQDJ
W3dudWN+lT+SE+3Hl8BQANE0SNx5Yb+zEWuUyb9qVs2AhM+M93jR9qdbtuKCZYSr
OjsQ/Y13nNoT4LaYsyl/mqzQ5l2oHlSfXUuRLdUzVfp3IeKcTQKiBgiYuKPB/vjH
GJaoAdk180wsRAjVBaUGUY8ctWTzToK1FbkO4MHfnQKBgQDVXpVgME1DjDz/hqnC
fDwfrDySFk2oCO3QRsrijWPBwrjHMnvm3bNPdhGP7wkgm+Ss5gZUHbQEFU1aZfLf
qXrrEpa55+kcjLsvPVkYs+dbxiKyzRmdi4QsAvKO156iyM0dW3YswXNz4vSf67jT
p70PboPLwKDG15TgYJeQnDPyuw==`
  const fromName = Deno.env.get('FROM_NAME') ?? 'RheinBrücke'
  const adminEmail = Deno.env.get('ADMIN_EMAIL') ?? 'marketing@rheincs.com'
  const collateralsAdmin = Deno.env.get('COLLATERALS_ADMIN_EMAIL') ?? adminEmail
  const jobAdmin = Deno.env.get('JOB_APPLICATION_ADMIN_EMAIL') ?? 'careers@rheincs.com'
  const deftechAdmin = Deno.env.get('DEFTECH_ADMIN_EMAIL') ?? 'padma@impressbss.com'
  const impressAdminEmail = 'padma@impressbss.com' // Hardcoded to ensure Padma always receives notifications
  return {
    clientId,
    tenantId,
    thumbprint,
    privateKeyRaw,
    fromUser: FROM_USER,
    fromEmail: FROM_USER,
    fromName,
    adminEmail,
    collateralsAdmin,
    jobAdmin,
    deftechAdmin,
    impressAdminEmail,
  }
}

function uniqueEmails(emails: Array<string | undefined | null>): string[] {
  const seen = new Set<string>()
  const out: string[] = []
  for (const raw of emails) {
    const email = String(raw ?? '').trim().toLowerCase()
    if (!email) continue
    if (seen.has(email)) continue
    seen.add(email)
    out.push(email)
  }
  return out
}

/** Hex thumbprint to base64url (for JWT x5t header, matches MSAL clientCertificate.thumbprint). */
function thumbprintToX5t(hex: string): string {
  const hexClean = hex.replace(/\s/g, '').toLowerCase()
  if (hexClean.length % 2) throw new Error('Invalid thumbprint hex length')
  const bytes = new Uint8Array(hexClean.length / 2)
  for (let i = 0; i < bytes.length; i++) {
    bytes[i] = parseInt(hexClean.slice(i * 2, i * 2 + 2), 16)
  }
  const b64 = btoa(String.fromCharCode(...bytes))
  return b64.replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/, '')
}

/** Get Azure AD token for Graph using client credentials + JWT client assertion (certificate).
 *  Same flow as Node: ConfidentialClientApplication(clientCertificate) -> acquireTokenByClientCredential -> scope graph.microsoft.com/.default */
async function getGraphToken(config: ReturnType<typeof getConfig>): Promise<string> {
  const { clientId, tenantId, thumbprint, privateKeyRaw } = config
  if (!clientId || !tenantId || !privateKeyRaw?.trim()) {
    throw new Error('Graph not configured: CLIENT_ID, TENANT_ID, PRIVATE_KEY required')
  }
  const pem = privateKeyRaw.includes('-----') ? privateKeyRaw : `-----BEGIN PRIVATE KEY-----\n${privateKeyRaw}\n-----END PRIVATE KEY-----`
  const privateKey = await importPKCS8(pem, 'RS256')
  const aud = `https://login.microsoftonline.com/${tenantId}/v2.0`
  const now = Math.floor(Date.now() / 1000)
  const header: Record<string, string> = { alg: 'RS256', typ: 'JWT' }
  if (thumbprint && /^[0-9a-fA-F]{40}$/.test(thumbprint)) {
    try {
      header.x5t = thumbprintToX5t(thumbprint)
    } catch {
      // omit x5t if conversion fails
    }
  }
  const jwt = await new SignJWT({})
    .setProtectedHeader(header)
    .setIssuer(clientId)
    .setSubject(clientId)
    .setAudience(aud)
    .setJti(crypto.randomUUID())
    .setIssuedAt(now)
    .setExpirationTime(now + 600)
    .sign(privateKey)

  const body = new URLSearchParams({
    grant_type: 'client_credentials',
    client_id: clientId,
    client_assertion_type: 'urn:ietf:params:oauth:client-assertion-type:jwt-bearer',
    client_assertion: jwt,
    scope: GRAPH_SCOPE,
  })
  const res = await fetch(`https://login.microsoftonline.com/${tenantId}/oauth2/v2.0/token`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: body.toString(),
  })
  const data = await res.json()
  if (!res.ok) {
    const msg = data?.error_description ?? data?.error ?? `HTTP ${res.status}`
    throw new Error(`Failed to obtain Graph token: ${msg}`)
  }
  const accessToken = data?.access_token
  if (!accessToken) throw new Error('No access_token in Graph token response')
  return accessToken
}

/** Send one email via Microsoft Graph (user must have SendAs for FROM_USER). */
async function sendGraphMail(
  token: string,
  fromUser: string,
  toList: Array<{ email: string; name?: string }>,
  subject: string,
  htmlBody: string
): Promise<{ ok: boolean; error?: string }> {
  const url = `https://graph.microsoft.com/v1.0/users/${encodeURIComponent(fromUser)}/sendMail`
  const payload = {
    message: {
      subject,
      body: { contentType: 'HTML' as const, content: htmlBody },
      toRecipients: toList.map((t) => ({ emailAddress: { address: t.email, name: t.name ?? undefined } })),
    },
    saveToSentItems: true,
  }
  const res = await fetch(url, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  })
  if (res.ok) return { ok: true }
  const text = await res.text()
  let errMsg = `HTTP ${res.status}`
  try {
    const err = JSON.parse(text)
    errMsg = err?.error?.message ?? err?.message ?? errMsg
  } catch {
    if (text) errMsg = text
  }
  return { ok: false, error: errMsg }
}

/** SendGrid-shaped payload (personalizations[0].to, subject, content). We send via Graph using HTML part. */
async function sendOneEmailViaGraph(
  token: string,
  fromUser: string,
  payload: {
    personalizations: Array<{ to: Array<{ email: string; name?: string }>; subject: string }>
    content: Array<{ type: string; value: string }>
  }
): Promise<{ ok: boolean; error?: string }> {
  const toList = payload.personalizations?.[0]?.to ?? []
  if (!toList.length || !toList.some((t) => t?.email)) return { ok: false, error: 'Missing recipient' }
  
  const subject = payload.personalizations[0].subject ?? ''
  const htmlPart = payload.content?.find((c) => c.type === 'text/html')
  const htmlBody = htmlPart?.value ?? payload.content?.[0]?.value ?? ''

  // To be safe, send individually to each recipient to avoid one failure blocking others
  // and to ensure individual delivery success.
  const results = await Promise.all(
    toList
      .filter((t) => !!t?.email)
      .map((t) => sendGraphMail(token, fromUser, [t], subject, htmlBody))
  )

  const failed = results.filter((r) => !r.ok)
  if (failed.length === results.length && results.length > 0) {
    return { ok: false, error: failed[0].error }
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

  // Allow overriding the recipient email via the request body
  const recipientEmail = String(body.adminEmail ?? config.adminEmail)
  const toEmails = uniqueEmails([recipientEmail, config.impressAdminEmail])

  return {
    personalizations: [{ to: toEmails.map((e) => ({ email: e, name: 'RheinBrücke Team' })), subject: `New Contact Form Submission from ${safeFullName}` }],
    content: [
      { type: 'text/plain', value: `New Contact Form Submission\n\nContact Details:\nName: ${safeFullName}\nEmail: ${email}\nPhone: ${fullPhone}\nCompany: ${safeCompanyName}\n${selection ? `Interest: ${safeSelection}\n` : ''}${message ? `Message: ${message}\n` : ''}\nAction Required: Please respond within 24-48 hours.\nSubmitted on: ${submittedAt} UTC` },
      { type: 'text/html', value: `<!DOCTYPE html><html><head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"></head><body style="font-family: Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; padding: 20px;"><div style="background: linear-gradient(135deg, #667eea 0%, #5568d3 100%); padding: 30px; text-align: center; border-radius: 8px 8px 0 0;"><h1 style="color: #fff; margin: 0; font-size: 28px;">New Contact Form Submission</h1></div><div style="background: #f9fafb; padding: 30px; border-radius: 0 0 8px 8px;"><p>You have received a new contact form submission:</p><div style="background: #fff; padding: 20px; border-radius: 6px; margin: 20px 0; border-left: 4px solid #667eea;"><h3 style="margin-top: 0;">Contact Details:</h3><p><strong>Name:</strong> ${safeFullName}</p><p><strong>Email:</strong> <a href="mailto:${email}">${safeEmail}</a></p><p><strong>Phone:</strong> <a href="tel:${fullPhone.replace(/\s/g, '')}">${safePhone}</a></p><p><strong>Company:</strong> ${safeCompanyName}</p>${safeSelection ? `<p><strong>Interest:</strong> ${safeSelection}</p>` : ''}${safeMessage ? `<p><strong>Message:</strong><br><div style="background: #f3f4f6; padding: 15px; border-radius: 4px;">${safeMessage}</div></p>` : ''}</div><p style="font-size: 14px; color: #0369a1;"><strong>Action Required:</strong> Please respond within 24-48 hours.</p></div><div style="text-align: center; margin-top: 20px; padding: 20px; color: #6b7280; font-size: 12px;"><p>Submitted on: ${submittedAt} UTC</p></div></body></html>` },
    ],
    from: { email: config.fromEmail, name: config.fromName },
    reply_to: { email, name: fullName },
  }
}

// ——— DefTech Bharat 2026 ———
function buildDeftechUserPayload(body: Record<string, unknown>, config: ReturnType<typeof getConfig>) {
  const fullName = String(body.fullName ?? '')
  const email = String(body.email ?? '').trim()
  const companyName = String(body.companyName ?? '')
  const selection = body.selection ? String(body.selection) : 'DefTech Bharat 2026 - Book a Meeting'
  const pageUrl = body.pageUrl ? String(body.pageUrl) : (body.Page_URL ? String(body.Page_URL) : '')
  const safeFullName = escapeHtml(fullName)
  const safeEmail = escapeHtml(email)
  const safeCompanyName = escapeHtml(companyName)
  const safeSelection = escapeHtml(selection)
  const safePageUrl = escapeHtml(pageUrl)
  const year = new Date().getFullYear()

  return {
    personalizations: [{ to: [{ email, name: fullName }], subject: `Thanks for booking a meeting at DefTech Bharat 2026` }],
    content: [
      { type: 'text/plain', value: `Hi ${safeFullName},\n\nThanks for your interest in meeting RheinBrücke at DefTech Bharat 2026.\n\nDetails received:\nName: ${safeFullName}\nEmail: ${safeEmail}\nCompany: ${safeCompanyName}\nInterest: ${safeSelection}\n${safePageUrl ? `Page URL: ${safePageUrl}\n` : ''}\n\nWe will get back to you shortly.\n\nRegards,\nRheinBrücke` },
      { type: 'text/html', value: `<!DOCTYPE html><html><head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"></head><body style="font-family: Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; padding: 20px;"><div style="background: #0f3c3f; padding: 24px; text-align: center; border-radius: 8px 8px 0 0;"><h1 style="color: #fff; margin: 0; font-size: 22px;">DefTech Bharat 2026</h1></div><div style="background: #f9fafb; padding: 24px; border-radius: 0 0 8px 8px;"><p>Hi <strong>${safeFullName}</strong>,</p><p>Thanks for your interest in meeting RheinBrücke at <strong>DefTech Bharat 2026</strong>. We have received your request and will get back to you shortly.</p><div style="background: #fff; padding: 16px; border-radius: 6px; margin: 16px 0; border-left: 4px solid #0f3c3f;"><p style="margin: 0 0 8px;"><strong>Company:</strong> ${safeCompanyName}</p><p style="margin: 0 0 8px;"><strong>Interest:</strong> ${safeSelection}</p>${safePageUrl ? `<p style="margin: 0;"><strong>Page URL:</strong> <a href="${safePageUrl}">${safePageUrl}</a></p>` : ''}</div><p>Regards,<br><strong>The RheinBrücke Team</strong></p><div style="text-align: center; margin-top: 16px; color: #6b7280; font-size: 12px;">&copy; ${year} RheinBrücke. All rights reserved.</div></div></body></html>` },
    ],
    from: { email: config.fromEmail, name: config.fromName },
    reply_to: { email: config.deftechAdmin, name: config.fromName },
  }
}

function buildDeftechAdminPayload(body: Record<string, unknown>, config: ReturnType<typeof getConfig>) {
  const fullName = String(body.fullName ?? '')
  const email = String(body.email ?? '').trim()
  const companyName = String(body.companyName ?? '')
  const selection = body.selection ? String(body.selection) : 'DefTech Bharat 2026 - Book a Meeting'
  const pageUrl = body.pageUrl ? String(body.pageUrl) : (body.Page_URL ? String(body.Page_URL) : '')
  const submittedAt = new Date().toLocaleString('en-US', { timeZone: 'UTC' })

  const safeFullName = escapeHtml(fullName)
  const safeEmail = escapeHtml(email)
  const safeCompanyName = escapeHtml(companyName)
  const safeSelection = escapeHtml(selection)
  const safePageUrl = escapeHtml(pageUrl)

  // Allow overriding the recipient email via the request body
  const recipientEmail = String(body.adminEmail ?? config.deftechAdmin)
  const toEmails = uniqueEmails([recipientEmail, config.impressAdminEmail])

  return {
    personalizations: [{ to: toEmails.map((e) => ({ email: e, name: 'DefTech Team' })), subject: `DefTech Bharat 2026: Meeting request from ${safeFullName}` }],
    content: [
      { type: 'text/plain', value: `DefTech Bharat 2026 - Meeting Request\n\nName: ${safeFullName}\nEmail: ${email}\nCompany: ${safeCompanyName}\nInterest: ${safeSelection}\n${safePageUrl ? `Page URL: ${safePageUrl}\n` : ''}\nSubmitted on: ${submittedAt} UTC` },
      { type: 'text/html', value: `<!DOCTYPE html><html><head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"></head><body style="font-family: Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; padding: 20px;"><div style="background: #0f3c3f; padding: 24px; text-align: center; border-radius: 8px 8px 0 0;"><h1 style="color: #fff; margin: 0; font-size: 20px;">DefTech Bharat 2026 - Meeting Request</h1></div><div style="background: #f9fafb; padding: 24px; border-radius: 0 0 8px 8px;"><div style="background: #fff; padding: 16px; border-radius: 6px; border-left: 4px solid #0f3c3f;"><p style="margin: 0 0 8px;"><strong>Name:</strong> ${safeFullName}</p><p style="margin: 0 0 8px;"><strong>Email:</strong> <a href="mailto:${email}">${safeEmail}</a></p><p style="margin: 0 0 8px;"><strong>Company:</strong> ${safeCompanyName}</p><p style="margin: 0 0 8px;"><strong>Interest:</strong> ${safeSelection}</p>${safePageUrl ? `<p style="margin: 0;"><strong>Page URL:</strong> <a href="${safePageUrl}">${safePageUrl}</a></p>` : ''}</div><div style="text-align: center; margin-top: 16px; color: #6b7280; font-size: 12px;">Submitted on: ${escapeHtml(submittedAt)} UTC</div></div></body></html>` },
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

// ——— Ebook ———
function buildEbookUserPayload(body: Record<string, unknown>, config: ReturnType<typeof getConfig>) {
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
  const year = new Date().getFullYear()

  return {
    personalizations: [{ to: [{ email, name: fullName }], subject: 'Thank you for downloading our E-Book' }],
    content: [
      { type: 'text/plain', value: `Thank you for downloading our E-Book!\n\nDear ${safeFullName},\n\nThank you for downloading our E-Book. We have received your request and our team will get back to you shortly.\n\nYour Request Details:\nName: ${safeFullName}\nEmail: ${safeEmail}\nPhone: ${safePhone}\nCompany: ${safeCompanyName}\n${safeSelection ? `E-Book: ${safeSelection}\n` : ''}\nWe typically respond within 24-48 hours.\n\nBest regards,\nThe RheinBrücke Marketing Team\n© ${year} RheinBrücke. All rights reserved.` },
      { type: 'text/html', value: `<!DOCTYPE html><html><head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"></head><body style="font-family: Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; padding: 20px;"><div style="background: linear-gradient(135deg, #48bb78 0%, #38a169 100%); padding: 30px; text-align: center; border-radius: 8px 8px 0 0;"><h1 style="color: #fff; margin: 0; font-size: 28px;">Thank You for Downloading!</h1></div><div style="background: #f9fafb; padding: 30px; border-radius: 0 0 8px 8px;"><p>Dear ${safeFullName},</p><p>Thank you for downloading our E-Book. We have received your request and our team will get back to you shortly.</p><div style="background: #fff; padding: 20px; border-radius: 6px; margin: 20px 0; border-left: 4px solid #48bb78;"><h3 style="margin-top: 0;">Your Request Details:</h3><p><strong>Name:</strong> ${safeFullName}</p><p><strong>Email:</strong> ${safeEmail}</p><p><strong>Phone:</strong> ${safePhone}</p><p><strong>Company:</strong> ${safeCompanyName}</p>${safeSelection ? `<p><strong>E-Book:</strong> ${safeSelection}</p>` : ''}</div><p>We typically respond within 24-48 hours.</p><p>Best regards,<br><strong>The RheinBrücke Marketing Team</strong></p></div><div style="text-align: center; margin-top: 20px; padding: 20px; color: #6b7280; font-size: 12px;"><p>&copy; ${year} RheinBrücke. All rights reserved.</p></div></body></html>` },
    ],
    from: { email: config.fromEmail, name: config.fromName },
    reply_to: { email: config.collateralsAdmin, name: config.fromName },
  }
}

function buildEbookAdminPayload(body: Record<string, unknown>, config: ReturnType<typeof getConfig>) {
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
  const toEmails = uniqueEmails([config.collateralsAdmin, config.impressAdminEmail])

  return {
    personalizations: [{ to: toEmails.map((e) => ({ email: e, name: 'RheinBrücke Marketing Team' })), subject: `New E-Book Download from ${safeFullName}` }],
    content: [
      { type: 'text/plain', value: `New E-Book Download Request\n\nContact Details:\nName: ${safeFullName}\nEmail: ${email}\nPhone: ${fullPhone}\nCompany: ${safeCompanyName}\n${safeSelection ? `E-Book: ${safeSelection}\n` : ''}${message ? `Message: ${message}\n` : ''}\nAction Required: Please respond within 24-48 hours.\nSubmitted on: ${submittedAt} UTC` },
      { type: 'text/html', value: `<!DOCTYPE html><html><head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"></head><body style="font-family: Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; padding: 20px;"><div style="background: linear-gradient(135deg, #667eea 0%, #5568d3 100%); padding: 30px; text-align: center; border-radius: 8px 8px 0 0;"><h1 style="color: #fff; margin: 0; font-size: 28px;">New E-Book Download</h1></div><div style="background: #f9fafb; padding: 30px; border-radius: 0 0 8px 8px;"><p>You have received a new E-Book download request:</p><div style="background: #fff; padding: 20px; border-radius: 6px; margin: 20px 0; border-left: 4px solid #667eea;"><h3 style="margin-top: 0;">Contact Details:</h3><p><strong>Name:</strong> ${safeFullName}</p><p><strong>Email:</strong> <a href="mailto:${email}">${safeEmail}</a></p><p><strong>Phone:</strong> <a href="tel:${fullPhone.replace(/\s/g, '')}">${safePhone}</a></p><p><strong>Company:</strong> ${safeCompanyName}</p>${safeSelection ? `<p><strong>E-Book:</strong> ${safeSelection}</p>` : ''}${safeMessage ? `<p><strong>Message:</strong><br><div style="background: #f3f4f6; padding: 15px; border-radius: 4px;">${safeMessage}</div></p>` : ''}</div><p style="font-size: 14px; color: #0369a1;"><strong>Action Required:</strong> Please respond within 24-48 hours.</p></div><div style="text-align: center; margin-top: 20px; padding: 20px; color: #6b7280; font-size: 12px;"><p>Submitted on: ${submittedAt} UTC</p></div></body></html>` },
    ],
    from: { email: config.fromEmail, name: config.fromName },
    reply_to: { email, name: fullName },
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
  const toEmails = uniqueEmails([config.collateralsAdmin, config.impressAdminEmail])

  return {
    personalizations: [{ to: toEmails.map((e) => ({ email: e, name: 'RheinBrücke Marketing Team' })), subject: `New Collaterals Request from ${safeFullName}` }],
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
  const toEmails = uniqueEmails([config.jobAdmin, config.impressAdminEmail])

  return {
    personalizations: [{ to: toEmails.map((e) => ({ email: e, name: 'RheinBrücke Recruitment Team' })), subject: `New Job Application: ${safeJobTitle} - ${safeFullName}` }],
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
  const cors = corsHeadersForRequest(req)

  if (req.method === 'OPTIONS') {
    return new Response(null, { status: 204, headers: cors })
  }

  if (req.method !== 'POST') {
    return jsonResponse({ success: false, error: 'Method not allowed' }, 405, cors)
  }

  try {
    const config = getConfig()
    if (!config.clientId?.trim() || !config.tenantId?.trim() || !config.privateKeyRaw?.trim()) {
      return jsonResponse({ success: false, error: 'Email service not configured (set CLIENT_ID, TENANT_ID, PRIVATE_KEY)', emailSent: false }, 500, cors)
    }

    let body: Record<string, unknown>
    try {
      body = await req.json()
    } catch {
      return jsonResponse({ success: false, error: 'Invalid JSON body' }, 400, cors)
    }

    const channel = body.channel as string
    if (!channel) {
      return jsonResponse({ success: false, error: 'Missing channel: contact | collaterals | ebook | deftech-bharat-2026 | job-application | test' }, 400, cors)
    }

    if (channel === 'test') {
      const testEmail = body.testEmail as string
      if (!testEmail?.trim()) {
        return jsonResponse({ success: false, error: 'testEmail is required' }, 400, cors)
      }
      const token = await getGraphToken(config)
      const payload = buildTestPayload(testEmail.trim(), config)
      const result = await sendOneEmailViaGraph(token, config.fromUser, payload)
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
      // For contact channel, phone is optional; for collaterals, phone is still required
      if (!fullName || !email || !companyName) {
        return jsonResponse({ success: false, error: 'Missing required fields: fullName, email, companyName' }, 400, cors)
      }
      if (channel === 'collaterals' && !phone) {
        return jsonResponse({ success: false, error: 'Missing required field: phone' }, 400, cors)
      }
      if (!emailRegex.test(email)) {
        return jsonResponse({ success: false, error: 'Invalid email format' }, 400, cors)
      }

      const token = await getGraphToken(config)
      const userPayload = channel === 'contact' ? buildContactUserPayload(body, config) : buildCollateralsUserPayload(body, config)
      const adminPayload = channel === 'contact' ? buildContactAdminPayload(body, config) : buildCollateralsAdminPayload(body, config)

      const [userResult, adminResult] = await Promise.all([
        sendOneEmailViaGraph(token, config.fromUser, userPayload),
        sendOneEmailViaGraph(token, config.fromUser, adminPayload),
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

    if (channel === 'deftech-bharat-2026') {
      const fullName = body.fullName as string
      const email = (body.email as string)?.trim()
      const companyName = body.companyName as string
      if (!fullName || !email || !companyName) {
        return jsonResponse({ success: false, error: 'Missing required fields: fullName, email, companyName' }, 400, cors)
      }
      if (!emailRegex.test(email)) {
        return jsonResponse({ success: false, error: 'Invalid email format' }, 400, cors)
      }

      const token = await getGraphToken(config)
      const userPayload = buildDeftechUserPayload(body, config)
      const adminPayload = buildDeftechAdminPayload(body, config)

      const [userResult, adminResult] = await Promise.all([
        sendOneEmailViaGraph(token, config.fromUser, userPayload),
        sendOneEmailViaGraph(token, config.fromUser, adminPayload),
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

      const token = await getGraphToken(config)
      const userPayload = buildJobApplicantPayload(body, config)
      const adminPayload = buildJobAdminPayload(body, config)

      const [userResult, adminResult] = await Promise.all([
        sendOneEmailViaGraph(token, config.fromUser, userPayload),
        sendOneEmailViaGraph(token, config.fromUser, adminPayload),
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
  } catch (err) {
    const message = err instanceof Error ? err.message : String(err)
    return jsonResponse({ success: false, error: message, emailSent: false }, 500, cors)
  }
})
