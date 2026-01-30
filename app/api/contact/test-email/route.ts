import { NextRequest, NextResponse } from 'next/server';

const SENDGRID_API_KEY = process.env.SENDGRID_API_KEY;
const ADMIN_EMAIL = process.env.ADMIN_EMAIL || 'marketing@rheincs.com';
const FROM_EMAIL = process.env.FROM_EMAIL || 'noreply@rheincs.com';
const FROM_NAME = process.env.FROM_NAME || 'RheinBrücke';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { testEmail } = body;

    if (!testEmail) {
      return NextResponse.json(
        { error: 'testEmail is required' },
        { status: 400 }
      );
    }

    // Simple test email
    const testPayload = {
      personalizations: [
        {
          to: [
            {
              email: testEmail,
              name: 'Test User'
            }
          ],
          subject: 'Test Email from RheinBrücke'
        }
      ],
      content: [
        {
          type: 'text/plain',
          value: 'This is a test email from RheinBrücke contact form system.'
        },
        {
          type: 'text/html',
          value: '<html><body><h1>Test Email</h1><p>This is a test email from RheinBrücke contact form system.</p></body></html>'
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

    const response = await fetch('https://api.sendgrid.com/v3/mail/send', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${SENDGRID_API_KEY}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(testPayload)
    });

    const responseText = await response.text();
    let responseJson;
    try {
      responseJson = JSON.parse(responseText);
    } catch {
      responseJson = { message: responseText };
    }

    if (!response.ok) {
      return NextResponse.json(
        {
          success: false,
          status: response.status,
          error: responseJson,
          message: 'Failed to send test email. Check if FROM_EMAIL is verified in SendGrid.'
        },
        { status: response.status }
      );
    }

    return NextResponse.json(
      {
        success: true,
        message: 'Test email sent successfully!',
        details: {
          from: FROM_EMAIL,
          to: testEmail,
          apiKeyConfigured: !!SENDGRID_API_KEY
        }
      },
      { status: 200 }
    );

  } catch (error: any) {
    console.error('Test email error:', error);
    return NextResponse.json(
      {
        success: false,
        error: error.message || 'Failed to send test email'
      },
      { status: 500 }
    );
  }
}
