import Airtable from 'airtable';
import { CareerApplication } from '@/types/careers';

const base = new Airtable({ apiKey: process.env.AIRTABLE_API_KEY }).base(
  process.env.AIRTABLE_BASE_ID!
);

export async function submitCareerApplication(data: CareerApplication): Promise<void> {
  const tableName = process.env.AIRTABLE_CAREERS_TABLE_NAME!;

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const fields: Record<string, any> = {
    'First Name': data.firstName,
    'Last Name': data.lastName,
    'Phone Number': data.phone,
    'Email Address': data.email,
    'Position Applying For': [data.positionApplyingFor],
    'Preferred Service County': [data.preferredServiceCounty],
    'Years of Experience': data.yearsOfExperience,
    'Certifications & Qualifications': data.certificationsAndQualifications.split(', ').filter(Boolean),
    'Availability': data.availability.split(', ').filter(Boolean),
    'Additional Information': data.additionalInformation ?? '',
    'CV Attachment': [{ url: data.cvUrl, filename: data.cvFileName }],
    'Background Check Consent': data.backgroundCheckConsent,
    'Equal Opportunity Acknowledgment': data.equalOpportunityAcknowledgment,
    'Submitted At': data.submittedAt,
  };

  console.log('[Airtable] Submitting fields:', JSON.stringify(fields, null, 2));

  try {
    await base(tableName).create([{ fields }], { typecast: true });
  } catch (err: unknown) {
    const atErr = err as { error?: string; message?: string; statusCode?: number };
    console.error(
      '[Airtable] Submission failed.\n' +
      `  Error:   ${atErr.error}\n` +
      `  Message: ${atErr.message}\n` +
      `  Status:  ${atErr.statusCode}\n` +
      '  Fields sent (check which value mismatches your Airtable options):\n' +
      JSON.stringify(fields, null, 4)
    );
    throw err;
  }
}
