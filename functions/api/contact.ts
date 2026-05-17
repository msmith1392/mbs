interface ContactFormData {
  name: string;
  email: string;
  projectType: string;
  message: string;
  website?: string;
  time?: string;
}

interface Env {
  RESEND_API_KEY: string;
}

const corsHeaders = {
  'Access-Control-Allow-Origin': 'https://matthewbsmith.com',
  'Content-Type': 'application/json',
};

function buildEmailHtml(
  name: string,
  email: string,
  projectType: string,
  time: string,
  message: string
): string {
  return `<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
</head>
<body style="margin:0;padding:0;background:#111111;font-family:Arial,sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background:#111111;padding:32px 0;">
    <tr>
      <td align="center">
        <table width="600" cellpadding="0" cellspacing="0" style="background:#1c1c1c;border-radius:8px;overflow:hidden;">

          <!-- Header -->
          <tr>
            <td style="background:#111111;padding:20px 32px;border-bottom:1px solid #27272a;">
              <p style="margin:0;color:#f8fafc;font-size:16px;font-weight:bold;">Matthew B. Smith</p>
              <p style="margin:4px 0 0;color:#3b82f6;font-size:12px;">matthewbsmith.com</p>
            </td>
          </tr>

          <!-- Body -->
          <tr>
            <td style="padding:32px;">
              <p style="margin:0 0 16px;color:#f8fafc;font-size:16px;">Hi ${name},</p>
              <p style="margin:0 0 24px;color:#a1a1aa;font-size:14px;line-height:1.6;">
                Thank you for reaching out. I will follow up with you shortly.
              </p>

              <!-- Submission box -->
              <table width="100%" cellpadding="0" cellspacing="0" style="background:#111111;border-radius:6px;border-left:4px solid #3b82f6;margin-bottom:24px;">
                <tr>
                  <td style="padding:20px 24px;">
                    <p style="margin:0 0 12px;color:#f8fafc;font-size:13px;font-weight:bold;text-transform:uppercase;letter-spacing:0.05em;">Your Submission</p>
                    <table width="100%" cellpadding="0" cellspacing="0">
                      <tr>
                        <td style="padding:4px 0;color:#71717a;font-size:13px;width:120px;">Name</td>
                        <td style="padding:4px 0;color:#f8fafc;font-size:13px;font-weight:bold;">${name}</td>
                      </tr>
                      <tr>
                        <td style="padding:4px 0;color:#71717a;font-size:13px;">Email</td>
                        <td style="padding:4px 0;color:#f8fafc;font-size:13px;font-weight:bold;">${email}</td>
                      </tr>
                      <tr>
                        <td style="padding:4px 0;color:#71717a;font-size:13px;">Project Type</td>
                        <td style="padding:4px 0;color:#f8fafc;font-size:13px;font-weight:bold;">${projectType}</td>
                      </tr>
                      <tr>
                        <td style="padding:4px 0;color:#71717a;font-size:13px;">Submitted</td>
                        <td style="padding:4px 0;color:#f8fafc;font-size:13px;">${time}</td>
                      </tr>
                    </table>
                    <hr style="border:none;border-top:1px solid #27272a;margin:16px 0;" />
                    <p style="margin:0 0 8px;color:#71717a;font-size:13px;">Message</p>
                    <p style="margin:0;color:#f8fafc;font-size:14px;line-height:1.6;white-space:pre-wrap;">${message}</p>
                  </td>
                </tr>
              </table>

              <p style="margin:0 0 8px;color:#a1a1aa;font-size:14px;line-height:1.6;">
                If you have additional details, files, or questions, just reply to this email.
              </p>
              <p style="margin:0;color:#a1a1aa;font-size:14px;line-height:1.6;">
                I will get back to you as soon as possible.
              </p>
            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="background:#0a0a0a;padding:16px 32px;border-top:1px solid #27272a;">
              <p style="margin:0;color:#71717a;font-size:12px;">Matthew B. Smith &bull; matthewbsmith.com</p>
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>
</body>
</html>`;
}

export default {
  async fetch(request: Request, env: Env): Promise<Response> {
    if (request.method === 'OPTIONS') {
      return new Response(null, { headers: corsHeaders });
    }

    if (request.method !== 'POST') {
      return new Response(JSON.stringify({ error: 'Method not allowed' }), {
        status: 405,
        headers: corsHeaders,
      });
    }

    try {
      const body = (await request.json()) as ContactFormData;

      // Honeypot check
      if (body.website) {
        return new Response(JSON.stringify({ success: true }), {
          headers: corsHeaders,
        });
      }

      if (!body.name || !body.email || !body.message) {
        return new Response(JSON.stringify({ success: false, error: 'Missing required fields.' }), {
          status: 400,
          headers: corsHeaders,
        });
      }

      const time = body.time ?? 'unknown';

      const confirmRes = await fetch('https://api.resend.com/emails', {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${env.RESEND_API_KEY}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          from: 'Matthew Smith <matt@matthewbsmith.com>',
          to: body.email,
          reply_to: 'matt@matthewbsmith.com',
          bcc: ['matt@matthewbsmith.com'],
          subject: 'Thanks for reaching out',
          html: buildEmailHtml(body.name, body.email, body.projectType, time, body.message),
        }),
      });

      if (!confirmRes.ok) {
        const error = await confirmRes.text();
        console.error('Resend confirmation error:', error);
      }

      return new Response(JSON.stringify({ success: true }), {
        headers: corsHeaders,
      });
    } catch (err) {
      console.error('Contact function error:', err);
      return new Response(JSON.stringify({ success: false, error: 'Server error.' }), {
        status: 500,
        headers: corsHeaders,
      });
    }
  },
};
