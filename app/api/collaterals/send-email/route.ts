import { NextRequest, NextResponse } from 'next/server';

// SendGrid configuration
// For production, set these in your environment variables (.env.local)
const SENDGRID_API_KEY = process.env.SENDGRID_API_KEY;
const ADMIN_EMAIL = process.env.COLLATERALS_ADMIN_EMAIL || process.env.ADMIN_EMAIL || 'marketing@rheincs.com';
const FROM_EMAIL = process.env.FROM_EMAIL || 'noreply@rheincs.com';
const FROM_NAME = process.env.FROM_NAME || 'RheinBrücke';

export async function POST(request: NextRequest) {
  try {
    // Validate API key is set
    if (!SENDGRID_API_KEY || SENDGRID_API_KEY === '') {
      console.error('SendGrid API key is not configured');
      return NextResponse.json(
        { 
          success: false, 
          error: 'Email service not configured',
          emailSent: false
        },
        { status: 500 }
      );
    }

    const body = await request.json();
    const { 
      fullName, 
      email, 
      phone, 
      countryCode, 
      companyName, 
      selection, 
      message 
    } = body;

    // Validate required fields
    if (!fullName || !email || !phone || !companyName) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Format phone number
    const fullPhone = countryCode ? `${countryCode} ${phone}` : phone;

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Invalid email format' },
        { status: 400 }
      );
    }

    // Escape HTML in user input to prevent XSS
    const escapeHtml = (text: string) => {
      if (!text) return '';
      return text
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&#039;');
    };

    const safeFullName = escapeHtml(fullName);
    const safeEmail = escapeHtml(email);
    const safePhone = escapeHtml(fullPhone);
    const safeCompanyName = escapeHtml(companyName);
    const safeSelection = selection ? escapeHtml(selection) : '';
    const safeMessage = message ? escapeHtml(message).replace(/\n/g, '<br>') : '';

    // Send acknowledgment email to user
    const userEmailPayload = {
      personalizations: [
        {
          to: [
            {
              email: email.trim(),
              name: fullName.trim()
            }
          ],
          subject: 'Thank you for your interest in RheinBrücke Collaterals'
        }
      ],
      content: [
        {
          type: 'text/plain',
          value: `Thank you for your interest in RheinBrücke Collaterals!

Dear ${safeFullName},

Thank you for requesting our collaterals. We have received your request and our team will get back to you shortly.

Your Request Details:
Name: ${safeFullName}
Email: ${safeEmail}
Phone: ${safePhone}
Company: ${safeCompanyName}
${safeSelection ? `Interest: ${safeSelection}\n` : ''}

We typically respond within 24-48 hours. If you have any urgent questions, please feel free to call us directly.

Best regards,
The RheinBrücke Marketing Team

This is an automated message. Please do not reply to this email.
© ${new Date().getFullYear()} RheinBrücke. All rights reserved.`
        },
        {
          type: 'text/html',
          value: `
            <!DOCTYPE html>
            <html>
              <head>
                <meta charset="utf-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
              </head>
              <body style="font-family: Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; padding: 20px;">
                <div style="background: linear-gradient(135deg, #48bb78 0%, #38a169 100%); padding: 30px; text-align: center; border-radius: 8px 8px 0 0;">
                  <h1 style="color: #fff; margin: 0; font-size: 28px;">Thank You for Your Interest!</h1>
                </div>
                <div style="background: #f9fafb; padding: 30px; border-radius: 0 0 8px 8px;">
                  <p style="font-size: 16px; margin-bottom: 20px;">Dear ${safeFullName},</p>
                  <p style="font-size: 16px; margin-bottom: 20px;">
                    Thank you for requesting our collaterals. We have received your request and our team will get back to you shortly.
                  </p>
                  <div style="background: #fff; padding: 20px; border-radius: 6px; margin: 20px 0; border-left: 4px solid #48bb78;">
                    <h3 style="margin-top: 0; color: #1a202c;">Your Request Details:</h3>
                    <p style="margin: 8px 0;"><strong>Name:</strong> ${safeFullName}</p>
                    <p style="margin: 8px 0;"><strong>Email:</strong> ${safeEmail}</p>
                    <p style="margin: 8px 0;"><strong>Phone:</strong> ${safePhone}</p>
                    <p style="margin: 8px 0;"><strong>Company:</strong> ${safeCompanyName}</p>
                    ${safeSelection ? `<p style="margin: 8px 0;"><strong>Interest:</strong> ${safeSelection}</p>` : ''}
                    ${safeMessage ? `<p style="margin: 8px 0;"><strong>Message:</strong><br>${safeMessage}</p>` : ''}
                  </div>
                  <p style="font-size: 16px; margin-top: 30px;">
                    We typically respond within 24-48 hours. If you have any urgent questions, please feel free to call us directly.
                  </p>
                  <p style="font-size: 16px; margin-top: 20px;">
                    Best regards,<br>
                    <strong>The RheinBrücke Marketing Team</strong>
                  </p>
                </div>
                <div style="text-align: center; margin-top: 20px; padding: 20px; color: #6b7280; font-size: 12px;">
                  <p>This is an automated message. Please do not reply to this email.</p>
                  <p>&copy; ${new Date().getFullYear()} RheinBrücke. All rights reserved.</p>
                </div>
              </body>
            </html>
          `
        }
      ],
      from: {
        email: FROM_EMAIL,
        name: FROM_NAME
      },
      reply_to: {
        email: ADMIN_EMAIL,
        name: FROM_NAME
      }
    };

    // Send notification email to admin
    const adminEmailPayload = {
      personalizations: [
        {
          to: [
            {
              email: ADMIN_EMAIL,
              name: 'RheinBrücke Marketing Team'
            }
          ],
          subject: `New Collaterals Request from ${safeFullName}`
        }
      ],
      content: [
        {
          type: 'text/plain',
          value: `New Collaterals Request

You have received a new collaterals request:

Contact Details:
Name: ${safeFullName}
Email: ${email.trim()}
Phone: ${fullPhone}
Company: ${safeCompanyName}
${safeSelection ? `Interest: ${safeSelection}\n` : ''}
${safeMessage ? `Message: ${message}\n` : ''}

Action Required: Please respond to this request within 24-48 hours.

This is an automated notification from the RheinBrücke collaterals form.
Submitted on: ${new Date().toLocaleString('en-US', { timeZone: 'UTC' })} UTC`
        },
        {
          type: 'text/html',
          value: `
            <!DOCTYPE html>
            <html>
              <head>
                <meta charset="utf-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
              </head>
              <body style="font-family: Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; padding: 20px;">
                <div style="background: linear-gradient(135deg, #667eea 0%, #5568d3 100%); padding: 30px; text-align: center; border-radius: 8px 8px 0 0;">
                  <h1 style="color: #fff; margin: 0; font-size: 28px;">New Collaterals Request</h1>
                </div>
                <div style="background: #f9fafb; padding: 30px; border-radius: 0 0 8px 8px;">
                  <p style="font-size: 16px; margin-bottom: 20px;">You have received a new collaterals request:</p>
                  <div style="background: #fff; padding: 20px; border-radius: 6px; margin: 20px 0; border-left: 4px solid #667eea;">
                    <h3 style="margin-top: 0; color: #1a202c;">Contact Details:</h3>
                    <p style="margin: 8px 0;"><strong>Name:</strong> ${safeFullName}</p>
                    <p style="margin: 8px 0;"><strong>Email:</strong> <a href="mailto:${email.trim()}">${safeEmail}</a></p>
                    <p style="margin: 8px 0;"><strong>Phone:</strong> <a href="tel:${fullPhone.replace(/\s/g, '')}">${safePhone}</a></p>
                    <p style="margin: 8px 0;"><strong>Company:</strong> ${safeCompanyName}</p>
                    ${safeSelection ? `<p style="margin: 8px 0;"><strong>Interest:</strong> ${safeSelection}</p>` : ''}
                    ${safeMessage ? `<p style="margin: 8px 0;"><strong>Message:</strong><br><div style="background: #f3f4f6; padding: 15px; border-radius: 4px; margin-top: 10px;">${safeMessage}</div></p>` : ''}
                  </div>
                  <div style="margin-top: 30px; padding: 15px; background: #e0f2fe; border-radius: 6px;">
                    <p style="margin: 0; font-size: 14px; color: #0369a1;">
                      <strong>Action Required:</strong> Please respond to this request within 24-48 hours.
                    </p>
                  </div>
                </div>
                <div style="text-align: center; margin-top: 20px; padding: 20px; color: #6b7280; font-size: 12px;">
                  <p>This is an automated notification from the RheinBrücke collaterals form.</p>
                  <p>Submitted on: ${new Date().toLocaleString('en-US', { timeZone: 'UTC' })} UTC</p>
                </div>
              </body>
            </html>
          `
        }
      ],
      from: {
        email: FROM_EMAIL,
        name: FROM_NAME
      },
      reply_to: {
        email: email.trim(),
        name: fullName.trim()
      }
    };

    // Send both emails
    let userEmailSent = false;
    let adminEmailSent = false;
    let errorDetails: any = {};

    try {
      // Send user acknowledgment email
      const userEmailResponse = await fetch('https://api.sendgrid.com/v3/mail/send', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${SENDGRID_API_KEY}`,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(userEmailPayload)
      });

      if (userEmailResponse.ok) {
        userEmailSent = true;
      } else {
        const userErrorText = await userEmailResponse.text();
        let userErrorJson;
        try {
          userErrorJson = JSON.parse(userErrorText);
        } catch {
          userErrorJson = { message: userErrorText };
        }
        errorDetails.userEmail = {
          status: userEmailResponse.status,
          statusText: userEmailResponse.statusText,
          error: userErrorJson
        };
        console.error('SendGrid error - User email:', {
          status: userEmailResponse.status,
          error: userErrorJson
        });
      }
    } catch (userEmailError: any) {
      errorDetails.userEmail = {
        error: userEmailError.message || 'Network error'
      };
      console.error('SendGrid network error - User email:', userEmailError);
    }

    try {
      // Send admin notification email
      const adminEmailResponse = await fetch('https://api.sendgrid.com/v3/mail/send', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${SENDGRID_API_KEY}`,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(adminEmailPayload)
      });

      if (adminEmailResponse.ok) {
        adminEmailSent = true;
      } else {
        const adminErrorText = await adminEmailResponse.text();
        let adminErrorJson;
        try {
          adminErrorJson = JSON.parse(adminErrorText);
        } catch {
          adminErrorJson = { message: adminErrorText };
        }
        errorDetails.adminEmail = {
          status: adminEmailResponse.status,
          statusText: adminEmailResponse.statusText,
          error: adminErrorJson
        };
        console.error('SendGrid error - Admin email:', {
          status: adminEmailResponse.status,
          error: adminErrorJson
        });
      }
    } catch (adminEmailError: any) {
      errorDetails.adminEmail = {
        error: adminEmailError.message || 'Network error'
      };
      console.error('SendGrid network error - Admin email:', adminEmailError);
    }

    // Return response based on email sending results
    if (userEmailSent && adminEmailSent) {
      return NextResponse.json(
        { 
          success: true, 
          message: 'Emails sent successfully',
          emailSent: true
        },
        { status: 200 }
      );
    } else {
      // Still return success if database save worked, but include error details
      return NextResponse.json(
        { 
          success: true, 
          message: 'Form submitted successfully, but email notification failed',
          emailSent: false,
          errors: errorDetails,
          userEmailSent,
          adminEmailSent
        },
        { status: 200 }
      );
    }

  } catch (error: any) {
    console.error('SendGrid API error:', error);
    return NextResponse.json(
      { 
        success: false, 
        error: error.message || 'Failed to send email',
        emailSent: false
      },
      { status: 500 }
    );
  }
}
