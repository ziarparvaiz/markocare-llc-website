import { CareerApplication } from '@/types/careers';

export function getApplicantConfirmationEmail(data: CareerApplication): {
  subject: string;
  html: string;
} {
  return {
    subject: "Thank You for Applying to MarkoCare — We've Received Your Application",
    html: `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Application Received — MarkoCare</title>
</head>
<body style="margin:0;padding:0;background-color:#f4f7f9;font-family:Arial,sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background-color:#f4f7f9;padding:40px 0;">
    <tr>
      <td align="center">
        <table width="600" cellpadding="0" cellspacing="0" style="background-color:#ffffff;border-radius:8px;overflow:hidden;box-shadow:0 2px 8px rgba(0,0,0,0.08);">

          <!-- Header -->
          <tr>
            <td style="background-color:#1a3a5c;padding:32px 40px;text-align:center;">
              <h1 style="margin:0;color:#ffffff;font-size:24px;font-weight:700;letter-spacing:0.5px;">MarkoCare LLC</h1>
              <p style="margin:6px 0 0;color:#7ecac3;font-size:14px;">Maryland Home Care Agency</p>
            </td>
          </tr>

          <!-- Body -->
          <tr>
            <td style="padding:40px 40px 32px;">
              <h2 style="margin:0 0 16px;color:#1a3a5c;font-size:20px;">We've Received Your Application</h2>
              <p style="margin:0 0 16px;color:#444;font-size:15px;line-height:1.6;">
                Dear ${data.firstName} ${data.lastName},
              </p>
              <p style="margin:0 0 16px;color:#444;font-size:15px;line-height:1.6;">
                Thank you for your interest in joining the MarkoCare team. We have successfully received your application for the following position:
              </p>

              <!-- Position Box -->
              <table width="100%" cellpadding="0" cellspacing="0" style="margin:0 0 24px;">
                <tr>
                  <td style="background-color:#f0f8f7;border-left:4px solid #2aa89a;padding:16px 20px;border-radius:4px;">
                    <p style="margin:0;color:#1a3a5c;font-size:15px;font-weight:600;">${data.positionApplyingFor}</p>
                    <p style="margin:4px 0 0;color:#666;font-size:13px;">Preferred County: ${data.preferredServiceCounty}</p>
                  </td>
                </tr>
              </table>

              <p style="margin:0 0 16px;color:#444;font-size:15px;line-height:1.6;">
                Our HR team will carefully review your qualifications and experience. If your profile aligns with our current needs, a member of our team will reach out to you within <strong>5–7 business days</strong> to discuss next steps.
              </p>
              <p style="margin:0 0 16px;color:#444;font-size:15px;line-height:1.6;">
                In the meantime, if you have any questions, please don't hesitate to contact us at
                <a href="mailto:info@markocare.com" style="color:#2aa89a;text-decoration:none;">info@markocare.com</a>.
              </p>
              <p style="margin:0;color:#444;font-size:15px;line-height:1.6;">
                We appreciate your time and look forward to learning more about you.
              </p>
            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="background-color:#f4f7f9;padding:24px 40px;text-align:center;border-top:1px solid #e8ecef;">
              <p style="margin:0 0 4px;color:#888;font-size:12px;">MarkoCare LLC — Maryland Home Care Agency</p>
              <p style="margin:0;color:#888;font-size:12px;">
                <a href="mailto:info@markocare.com" style="color:#2aa89a;text-decoration:none;">info@markocare.com</a>
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
  };
}

export function getInternalNotificationEmail(data: CareerApplication): {
  subject: string;
  html: string;
} {
  return {
    subject: `[New Application] ${data.positionApplyingFor} — ${data.firstName} ${data.lastName}`,
    html: `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>New Career Application</title>
</head>
<body style="margin:0;padding:0;background-color:#f4f7f9;font-family:Arial,sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background-color:#f4f7f9;padding:40px 0;">
    <tr>
      <td align="center">
        <table width="640" cellpadding="0" cellspacing="0" style="background-color:#ffffff;border-radius:8px;overflow:hidden;box-shadow:0 2px 8px rgba(0,0,0,0.08);">

          <!-- Header -->
          <tr>
            <td style="background-color:#1a3a5c;padding:28px 40px;">
              <h1 style="margin:0;color:#ffffff;font-size:20px;font-weight:700;">New Career Application</h1>
              <p style="margin:6px 0 0;color:#7ecac3;font-size:13px;">Submitted: ${new Date(data.submittedAt).toLocaleString('en-US', { timeZone: 'America/New_York', dateStyle: 'full', timeStyle: 'short' })}</p>
            </td>
          </tr>

          <!-- Summary Banner -->
          <tr>
            <td style="background-color:#f0f8f7;padding:16px 40px;border-bottom:1px solid #d9ecea;">
              <p style="margin:0;color:#1a3a5c;font-size:16px;font-weight:700;">${data.firstName} ${data.lastName}</p>
              <p style="margin:4px 0 0;color:#2aa89a;font-size:14px;font-weight:600;">${data.positionApplyingFor}</p>
            </td>
          </tr>

          <!-- Application Details Table -->
          <tr>
            <td style="padding:32px 40px;">
              <h3 style="margin:0 0 16px;color:#1a3a5c;font-size:15px;text-transform:uppercase;letter-spacing:0.5px;border-bottom:2px solid #e8ecef;padding-bottom:8px;">Applicant Details</h3>
              <table width="100%" cellpadding="0" cellspacing="0">
                ${row('First Name', data.firstName)}
                ${row('Last Name', data.lastName)}
                ${row('Email', `<a href="mailto:${data.email}" style="color:#2aa89a;text-decoration:none;">${data.email}</a>`)}
                ${row('Phone', data.phone)}
                ${row('Position Applied For', data.positionApplyingFor)}
                ${row('Preferred Service County', data.preferredServiceCounty)}
                ${row('Years of Experience', String(data.yearsOfExperience))}
                ${row('Certifications & Qualifications', data.certificationsAndQualifications)}
                ${row('Availability', data.availability)}
                ${row('Additional Information', data.additionalInformation || '<em style="color:#999;">None provided</em>')}
                ${row('Background Check Consent', data.backgroundCheckConsent ? '✅ Yes' : '❌ No')}
                ${row('Equal Opportunity Acknowledgment', data.equalOpportunityAcknowledgment ? '✅ Yes' : '❌ No')}
              </table>

              <!-- CV Link -->
              <h3 style="margin:28px 0 12px;color:#1a3a5c;font-size:15px;text-transform:uppercase;letter-spacing:0.5px;border-bottom:2px solid #e8ecef;padding-bottom:8px;">CV / Resume</h3>
              <table width="100%" cellpadding="0" cellspacing="0">
                <tr>
                  <td style="padding:8px 0;border-bottom:1px solid #f0f0f0;">
                    <span style="color:#666;font-size:13px;font-weight:600;width:200px;display:inline-block;">File Name</span>
                    <span style="color:#333;font-size:13px;">${data.cvFileName}</span>
                  </td>
                </tr>
                <tr>
                  <td style="padding:8px 0;">
                    <span style="color:#666;font-size:13px;font-weight:600;width:200px;display:inline-block;">Download Link</span>
                    <a href="${data.cvUrl}" style="color:#2aa89a;font-size:13px;text-decoration:none;word-break:break-all;">${data.cvUrl}</a>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="background-color:#f4f7f9;padding:20px 40px;text-align:center;border-top:1px solid #e8ecef;">
              <p style="margin:0;color:#888;font-size:12px;">MarkoCare LLC — Internal HR Notification · <a href="mailto:info@markocare.com" style="color:#2aa89a;text-decoration:none;">info@markocare.com</a></p>
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>
</body>
</html>
    `.trim(),
  };
}

function row(label: string, value: string): string {
  return `
    <tr>
      <td style="padding:8px 0;border-bottom:1px solid #f0f0f0;vertical-align:top;">
        <span style="color:#666;font-size:13px;font-weight:600;width:220px;display:inline-block;">${label}</span>
        <span style="color:#333;font-size:13px;">${value}</span>
      </td>
    </tr>
  `;
}
