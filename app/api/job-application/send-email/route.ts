import { NextRequest, NextResponse } from 'next/server';

// SendGrid configuration
// For production, set these in your environment variables (.env.local)
const SENDGRID_API_KEY = process.env.SENDGRID_API_KEY;
const ADMIN_EMAIL = process.env.JOB_APPLICATION_ADMIN_EMAIL || process.env.ADMIN_EMAIL || 'careers@rheincs.com';
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
      jobTitle, 
      resumeUrl, 
      coveringLetter 
    } = body;

    // Validate required fields
    if (!fullName || !email || !phone || !jobTitle) {
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
    const safeJobTitle = escapeHtml(jobTitle);
    const safeCoveringLetter = coveringLetter ? escapeHtml(coveringLetter).replace(/\n/g, '<br>') : '';

    // Send acknowledgment email to applicant
    const applicantEmailPayload = {
      personalizations: [
        {
          to: [
            {
              email: email.trim(),
              name: fullName.trim()
            }
          ],
          subject: `Application Received - ${safeJobTitle}`
        }
      ],
      content: [
        {
          type: 'text/plain',
          value: `Thank you for your job application!

Dear ${safeFullName},

Thank you for your interest in joining RheinBrücke. We have received your application for the position of ${safeJobTitle}.

Your Application Details:
Name: ${safeFullName}
Email: ${safeEmail}
Phone: ${fullPhone}
Position Applied: ${safeJobTitle}
${safeCoveringLetter ? `Covering Letter: ${coveringLetter}\n` : ''}

Our recruitment team will review your application and get back to you within 5-7 business days. If your profile matches our requirements, we will contact you for the next steps.

We appreciate your interest in RheinBrücke and wish you the best of luck!

Best regards,
The RheinBrücke Recruitment Team

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
                  <h1 style="color: #fff; margin: 0; font-size: 28px;">Application Received!</h1>
                </div>
                <div style="background: #f9fafb; padding: 30px; border-radius: 0 0 8px 8px;">
                  <p style="font-size: 16px; margin-bottom: 20px;">Dear ${safeFullName},</p>
                  <p style="font-size: 16px; margin-bottom: 20px;">
                    Thank you for your interest in joining RheinBrücke. We have received your application for the position of <strong>${safeJobTitle}</strong>.
                  </p>
                  <div style="background: #fff; padding: 20px; border-radius: 6px; margin: 20px 0; border-left: 4px solid #48bb78;">
                    <h3 style="margin-top: 0; color: #1a202c;">Your Application Details:</h3>
                    <p style="margin: 8px 0;"><strong>Name:</strong> ${safeFullName}</p>
                    <p style="margin: 8px 0;"><strong>Email:</strong> ${safeEmail}</p>
                    <p style="margin: 8px 0;"><strong>Phone:</strong> ${safePhone}</p>
                    <p style="margin: 8px 0;"><strong>Position Applied:</strong> ${safeJobTitle}</p>
                    ${safeCoveringLetter ? `<p style="margin: 8px 0;"><strong>Covering Letter:</strong><br>${safeCoveringLetter}</p>` : ''}
                  </div>
                  <p style="font-size: 16px; margin-top: 30px;">
                    Our recruitment team will review your application and get back to you within <strong>5-7 business days</strong>. If your profile matches our requirements, we will contact you for the next steps.
                  </p>
                  <p style="font-size: 16px; margin-top: 20px;">
                    We appreciate your interest in RheinBrücke and wish you the best of luck!
                  </p>
                  <p style="font-size: 16px; margin-top: 20px;">
                    Best regards,<br>
                    <strong>The RheinBrücke Recruitment Team</strong>
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
              name: 'RheinBrücke Recruitment Team'
            }
          ],
          subject: `New Job Application: ${safeJobTitle} - ${safeFullName}`
        }
      ],
      content: [
        {
          type: 'text/plain',
          value: `New Job Application Received

You have received a new job application:

Application Details:
Name: ${safeFullName}
Email: ${email.trim()}
Phone: ${fullPhone}
Position: ${safeJobTitle}
${safeCoveringLetter ? `Covering Letter: ${coveringLetter}\n` : ''}
${resumeUrl ? `Resume: ${resumeUrl}\n` : ''}

Action Required: Please review this application and respond within 5-7 business days.

This is an automated notification from the RheinBrücke job application system.
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
                  <h1 style="color: #fff; margin: 0; font-size: 28px;">New Job Application</h1>
                </div>
                <div style="background: #f9fafb; padding: 30px; border-radius: 0 0 8px 8px;">
                  <p style="font-size: 16px; margin-bottom: 20px;">You have received a new job application:</p>
                  <div style="background: #fff; padding: 20px; border-radius: 6px; margin: 20px 0; border-left: 4px solid #667eea;">
                    <h3 style="margin-top: 0; color: #1a202c;">Application Details:</h3>
                    <p style="margin: 8px 0;"><strong>Name:</strong> ${safeFullName}</p>
                    <p style="margin: 8px 0;"><strong>Email:</strong> <a href="mailto:${email.trim()}">${safeEmail}</a></p>
                    <p style="margin: 8px 0;"><strong>Phone:</strong> <a href="tel:${fullPhone.replace(/\s/g, '')}">${safePhone}</a></p>
                    <p style="margin: 8px 0;"><strong>Position:</strong> ${safeJobTitle}</p>
                    ${safeCoveringLetter ? `<p style="margin: 8px 0;"><strong>Covering Letter:</strong><br><div style="background: #f3f4f6; padding: 15px; border-radius: 4px; margin-top: 10px;">${safeCoveringLetter}</div></p>` : ''}
                    ${resumeUrl ? `<p style="margin: 8px 0;"><strong>Resume:</strong> <a href="${resumeUrl}" target="_blank" style="color: #667eea; text-decoration: underline;">Download Resume</a></p>` : ''}
                  </div>
                  <div style="margin-top: 30px; padding: 15px; background: #e0f2fe; border-radius: 6px;">
                    <p style="margin: 0; font-size: 14px; color: #0369a1;">
                      <strong>Action Required:</strong> Please review this application and respond within 5-7 business days.
                    </p>
                  </div>
                </div>
                <div style="text-align: center; margin-top: 20px; padding: 20px; color: #6b7280; font-size: 12px;">
                  <p>This is an automated notification from the RheinBrücke job application system.</p>
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
    let applicantEmailSent = false;
    let adminEmailSent = false;
    let errorDetails: any = {};

    try {
      // Send applicant acknowledgment email
      const applicantEmailResponse = await fetch('https://api.sendgrid.com/v3/mail/send', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${SENDGRID_API_KEY}`,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(applicantEmailPayload)
      });

      if (applicantEmailResponse.ok) {
        applicantEmailSent = true;
      } else {
        const applicantErrorText = await applicantEmailResponse.text();
        let applicantErrorJson;
        try {
          applicantErrorJson = JSON.parse(applicantErrorText);
        } catch {
          applicantErrorJson = { message: applicantErrorText };
        }
        errorDetails.applicantEmail = {
          status: applicantEmailResponse.status,
          statusText: applicantEmailResponse.statusText,
          error: applicantErrorJson
        };
        console.error('SendGrid error - Applicant email:', {
          status: applicantEmailResponse.status,
          error: applicantErrorJson
        });
      }
    } catch (applicantEmailError: any) {
      errorDetails.applicantEmail = {
        error: applicantEmailError.message || 'Network error'
      };
      console.error('SendGrid network error - Applicant email:', applicantEmailError);
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
    if (applicantEmailSent && adminEmailSent) {
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
          message: 'Application submitted successfully, but email notification failed',
          emailSent: false,
          errors: errorDetails,
          applicantEmailSent,
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
