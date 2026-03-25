'use server';

import { Resend } from 'resend';
import type { AssessmentFormData } from '@/lib/validations';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function submitAssessmentForm(
  data: AssessmentFormData
): Promise<{ success: boolean; message: string }> {
  const portalId = process.env.HUBSPOT_PORTAL_ID;
  const formGuid = process.env.HUBSPOT_FORM_GUID;

  if (!portalId || !formGuid) {
    return { success: false, message: 'Server configuration error. Please call us directly.' };
  }

  // Submit to HubSpot
  const hubspotRes = await fetch(
    `https://api.hsforms.com/submissions/v3/integration/submit/${portalId}/${formGuid}`,
    {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        fields: [
          { name: 'firstname', value: data.firstName },
          { name: 'lastname', value: data.lastName },
          { name: 'phone', value: data.phone },
          { name: 'email', value: data.email },
          { name: 'relationship_to_care_recipient', value: data.relationship },
          { name: 'county', value: data.county },
          { name: 'briefly_describe_care_needs', value: data.careNeeds },
          { name: 'preferred_contact_method', value: data.preferredContact ?? 'either' },
          { name: 'how_did_you_hear_about_us', value: data.howHeard ?? '' },
        ],
        context: {
          pageUri: 'https://markocare.com/contact',
          pageName: 'Request a Free In-Home Assessment',
        },
      }),
    }
  );

  if (!hubspotRes.ok) {
    return {
      success: false,
      message: 'We could not process your request right now. Please call us directly.',
    };
  }

  // Send thank-you email via Resend
  const fromEmail = process.env.RESEND_CONTACT_FROM_EMAIL ?? 'info@markocare.com';
  const preferredContactLabel =
    data.preferredContact === 'phone'
      ? 'phone'
      : data.preferredContact === 'email'
        ? 'email'
        : 'phone or email';

  await resend.emails.send({
    from: `MarkoCare <${fromEmail}>`,
    to: data.email,
    subject: 'We received your request — MarkoCare',
    html: `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
</head>
<body style="margin:0;padding:0;background:#f5f5f5;font-family:Arial,sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background:#f5f5f5;padding:40px 0;">
    <tr>
      <td align="center">
        <table width="600" cellpadding="0" cellspacing="0" style="background:#ffffff;border-radius:8px;overflow:hidden;max-width:600px;width:100%;">

          <!-- Header -->
          <tr>
            <td style="background:#1e6fa5;padding:32px 40px;">
              <h1 style="margin:0;color:#ffffff;font-size:22px;font-weight:700;letter-spacing:-0.3px;">MarkoCare</h1>
              <p style="margin:6px 0 0;color:rgba(255,255,255,0.8);font-size:13px;">In-Home Care Services</p>
            </td>
          </tr>

          <!-- Body -->
          <tr>
            <td style="padding:40px 40px 32px;">
              <h2 style="margin:0 0 16px;color:#1e6fa5;font-size:20px;font-weight:700;">
                Hi ${data.firstName}, we received your request!
              </h2>
              <p style="margin:0 0 16px;color:#444;font-size:15px;line-height:1.6;">
                Thank you for reaching out to MarkoCare. A dedicated care coordinator will contact you within <strong>one business day</strong> to discuss your family's needs.
              </p>
              <p style="margin:0 0 16px;color:#444;font-size:15px;line-height:1.6;">
                We'll reach out to you by <strong>${preferredContactLabel}</strong>, as you requested.
              </p>
              <p style="margin:0 0 24px;color:#444;font-size:15px;line-height:1.6;">
                In the meantime, if you have any urgent questions, please don't hesitate to call us directly.
              </p>

              <!-- Divider -->
              <hr style="border:none;border-top:1px solid #e8e8e8;margin:0 0 24px;" />

              <p style="margin:0;color:#888;font-size:13px;line-height:1.6;">
                Warm regards,<br />
                <strong style="color:#1e6fa5;">The MarkoCare Team</strong><br />
                <a href="https://markocare.com" style="color:#1e6fa5;text-decoration:none;">markocare.com</a>
              </p>
            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="background:#f9f9f9;padding:20px 40px;border-top:1px solid #e8e8e8;">
              <p style="margin:0;color:#aaa;font-size:11px;text-align:center;line-height:1.6;">
                You are receiving this email because you submitted a care assessment request on
                <a href="https://markocare.com" style="color:#1e6fa5;text-decoration:none;">markocare.com</a>.
                We will never share your information.
              </p>
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>
</body>
</html>
    `.trim(),
  });

  return {
    success: true,
    message: 'Thank you! A care coordinator will contact you within one business day.',
  };
}
