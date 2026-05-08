import nodemailer from "nodemailer";
import { NextResponse } from "next/server";

export const runtime = "nodejs";

type Body = {
  fullName?: string;
  email?: string;
  companyName?: string;
  phone?: string;
  selection?: string;
  message?: string;
  pageUrl?: string;
};

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function requiredEnv(name: string) {
  const value = process.env[name];
  if (!value) throw new Error(`Missing env var: ${name}`);
  return value;
}

export async function POST(req: Request) {
  let body: Body;
  try {
    body = (await req.json()) as Body;
  } catch {
    return NextResponse.json({ ok: false, error: "Invalid JSON" }, { status: 400 });
  }

  const fullName = String(body.fullName ?? "").trim();
  const email = String(body.email ?? "").trim();
  const companyName = String(body.companyName ?? "").trim();
  const phone = String(body.phone ?? "").trim();
  const selection = String(body.selection ?? "").trim();
  const message = String(body.message ?? "").trim();
  const pageUrl = String(body.pageUrl ?? "").trim();

  if (!fullName || !email || !companyName) {
    return NextResponse.json(
      { ok: false, error: "Missing required fields: fullName, email, companyName" },
      { status: 400 },
    );
  }
  if (!emailRegex.test(email)) {
    return NextResponse.json({ ok: false, error: "Invalid email" }, { status: 400 });
  }

  try {
    const host = requiredEnv("SMTP_HOST");
    const port = Number(process.env.SMTP_PORT ?? "587");
    const user = requiredEnv("SMTP_USER");
    const pass = requiredEnv("SMTP_PASS");
    const secure = String(process.env.SMTP_SECURE ?? "false").toLowerCase() === "true";
    const from = process.env.SMTP_FROM ?? user;
    const to = process.env.ENQUIRY_TO ?? "padma@impressbss.com";

    console.log("Attempting to send email via SMTP:", {
      host,
      port,
      user,
      from,
      to,
    });

    const transporter = nodemailer.createTransport({
      host,
      port,
      secure,
      auth: { user, pass },
      debug: true, // Enable debug output
      logger: true, // Log to console
    });

    const subject = `New enquiry${selection ? `: ${selection}` : ""} - ${fullName}`;
    const text = [
      "New enquiry received",
      "",
      `Name: ${fullName}`,
      `Email: ${email}`,
      `Company: ${companyName}`,
      phone ? `Phone: ${phone}` : undefined,
      selection ? `Selection: ${selection}` : undefined,
      pageUrl ? `Page URL: ${pageUrl}` : undefined,
      message ? `Message: ${message}` : undefined,
    ]
      .filter(Boolean)
      .join("\n");

    const html = `
      <div style="font-family: Arial, sans-serif; line-height: 1.6; color:#111;">
        <h2 style="margin:0 0 12px;">New enquiry received</h2>
        <table style="border-collapse:collapse;">
          <tr><td style="padding:6px 10px;"><b>Name</b></td><td style="padding:6px 10px;">${escapeHtml(fullName)}</td></tr>
          <tr><td style="padding:6px 10px;"><b>Email</b></td><td style="padding:6px 10px;"><a href="mailto:${escapeHtml(email)}">${escapeHtml(email)}</a></td></tr>
          <tr><td style="padding:6px 10px;"><b>Company</b></td><td style="padding:6px 10px;">${escapeHtml(companyName)}</td></tr>
          ${phone ? `<tr><td style="padding:6px 10px;"><b>Phone</b></td><td style="padding:6px 10px;">${escapeHtml(phone)}</td></tr>` : ""}
          ${selection ? `<tr><td style="padding:6px 10px;"><b>Selection</b></td><td style="padding:6px 10px;">${escapeHtml(selection)}</td></tr>` : ""}
          ${pageUrl ? `<tr><td style="padding:6px 10px;"><b>Page URL</b></td><td style="padding:6px 10px;"><a href="${escapeHtml(pageUrl)}">${escapeHtml(pageUrl)}</a></td></tr>` : ""}
        </table>
        ${message ? `<p style="margin-top:12px;"><b>Message</b><br/>${escapeHtml(message).replace(/\n/g, "<br/>")}</p>` : ""}
      </div>
    `;

    await transporter.sendMail({ from, to, subject, text, html, replyTo: email });

    return NextResponse.json({ ok: true });
  } catch (err) {
    const message = err instanceof Error ? err.message : String(err);
    return NextResponse.json({ ok: false, error: message }, { status: 500 });
  }
}

function escapeHtml(text: string): string {
  return text
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

