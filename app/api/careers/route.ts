import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';
import { UTApi } from 'uploadthing/server';
import { submitCareerApplication } from '@/lib/airtable';
import { getApplicantConfirmationEmail, getInternalNotificationEmail } from '@/lib/careers-email';
import type { CareerApplication } from '@/types/careers';
import positionsData from '@/data/positions.json';

const resend = new Resend(process.env.RESEND_API_KEY);
const utapi = new UTApi();

const VALID_POSITIONS = positionsData.positions.map((p) => p.title);
const VALID_COUNTIES = positionsData.serviceCounties;
const US_PHONE_RE = /^\+?1?\s*[-.]?\s*\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/;
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const MAX_CV_SIZE = 10 * 1024 * 1024; // 10 MB

export async function POST(req: NextRequest) {
  // ── 1. Parse multipart form data ──────────────────────────────────────
  let formData: FormData;
  try {
    formData = await req.formData();
  } catch {
    return NextResponse.json(
      { success: false, errors: { form: 'Invalid multipart form data' } },
      { status: 400 }
    );
  }

  const get = (key: string) => (formData.get(key) as string | null)?.trim() ?? '';

  // ── 2. Collect fields ─────────────────────────────────────────────────
  const firstName                    = get('firstName');
  const lastName                     = get('lastName');
  const phone                        = get('phone');
  const email                        = get('email');
  const positionApplyingFor          = get('positionApplyingFor');
  const preferredServiceCounty       = get('preferredServiceCounty');
  const yearsOfExperienceRaw         = get('yearsOfExperience');
  const certificationsAndQualifications = get('certificationsAndQualifications');
  const availability                 = get('availability');
  const additionalInformation        = get('additionalInformation') || undefined;
  const backgroundCheckConsent       = get('backgroundCheckConsent') === 'true';
  const equalOpportunityAcknowledgment = get('equalOpportunityAcknowledgment') === 'true';
  const cvFile                       = formData.get('cv') as File | null;

  // ── 3. Validate ───────────────────────────────────────────────────────
  const errors: Record<string, string> = {};

  if (!firstName || firstName.length > 50)
    errors.firstName = 'First name is required and must be 50 characters or fewer.';
  if (!lastName || lastName.length > 50)
    errors.lastName = 'Last name is required and must be 50 characters or fewer.';
  if (!phone || !US_PHONE_RE.test(phone))
    errors.phone = 'A valid US phone number is required.';
  if (!email || !EMAIL_RE.test(email))
    errors.email = 'A valid email address is required.';
  if (!positionApplyingFor || !VALID_POSITIONS.includes(positionApplyingFor))
    errors.positionApplyingFor = 'Please select a valid position.';
  if (!preferredServiceCounty || !VALID_COUNTIES.includes(preferredServiceCounty))
    errors.preferredServiceCounty = 'Please select a valid service county.';

  const yearsOfExperience = parseInt(yearsOfExperienceRaw, 10);
  if (isNaN(yearsOfExperience) || yearsOfExperience < 0 || yearsOfExperience > 50)
    errors.yearsOfExperience = 'Years of experience must be a number between 0 and 50.';

  if (!certificationsAndQualifications || certificationsAndQualifications.length > 500)
    errors.certificationsAndQualifications =
      'Certifications & qualifications are required and must be 500 characters or fewer.';
  if (!availability)
    errors.availability = 'Availability is required.';
  if (additionalInformation && additionalInformation.length > 1000)
    errors.additionalInformation = 'Additional information must be 1000 characters or fewer.';
  if (!backgroundCheckConsent)
    errors.backgroundCheckConsent = 'You must consent to a background check.';
  if (!equalOpportunityAcknowledgment)
    errors.equalOpportunityAcknowledgment = 'You must acknowledge the equal opportunity statement.';
  if (!cvFile)
    errors.cv = 'A CV/resume file is required.';
  else if (cvFile.type !== 'application/pdf')
    errors.cv = 'CV must be a PDF file.';
  else if (cvFile.size > MAX_CV_SIZE)
    errors.cv = 'CV file must be 10 MB or smaller.';

  if (Object.keys(errors).length > 0) {
    return NextResponse.json({ success: false, errors }, { status: 400 });
  }

  // ── 5. Upload CV to UploadThing ───────────────────────────────────────
  let cvUrl: string;
  let cvFileName: string;
  try {
    const arrayBuffer = await cvFile!.arrayBuffer();
    const uploadFile = new File([arrayBuffer], cvFile!.name, { type: 'application/pdf' });
    const uploadResult = await utapi.uploadFiles(uploadFile);

    if (uploadResult.error || !uploadResult.data?.ufsUrl) {
      console.error('[Careers API] UploadThing error:', uploadResult.error);
      return NextResponse.json(
        { success: false, errors: { cv: 'Failed to upload CV. Please try again.' } },
        { status: 500 }
      );
    }

    cvUrl = uploadResult.data.ufsUrl;
    cvFileName = cvFile!.name;
  } catch (err) {
    console.error('[Careers API] UploadThing exception:', err);
    return NextResponse.json(
      { success: false, errors: { cv: 'Failed to upload CV. Please try again.' } },
      { status: 500 }
    );
  }

  // ── 6. Build CareerApplication object ────────────────────────────────
  const application: CareerApplication = {
    firstName,
    lastName,
    phone,
    email,
    positionApplyingFor,
    preferredServiceCounty,
    yearsOfExperience,
    certificationsAndQualifications,
    availability,
    additionalInformation,
    cvUrl,
    cvFileName,
    backgroundCheckConsent,
    equalOpportunityAcknowledgment,
    submittedAt: new Date().toISOString(),
  };

  // ── 7. Submit to Airtable ─────────────────────────────────────────────
  try {
    await submitCareerApplication(application);
  } catch (err) {
    console.error('[Careers API] Airtable error:', err);
    return NextResponse.json(
      { success: false, errors: { form: 'Failed to save application. Please try again.' } },
      { status: 500 }
    );
  }

  // ── 8 & 9. Send emails (non-blocking) ────────────────────────────────
  const fromEmail = process.env.RESEND_CAREERS_FROM_EMAIL!;
  const internalTo = process.env.RESEND_CAREERS_APPLICATION_EMAIL!;

  const applicantEmail = getApplicantConfirmationEmail(application);
  const internalEmail = getInternalNotificationEmail(application);

  try {
    await resend.emails.send({
      from: fromEmail,
      to: application.email,
      subject: applicantEmail.subject,
      html: applicantEmail.html,
    });
  } catch (err) {
    console.error('[Careers API] Resend confirmation email failed:', err);
    // Non-blocking — application is already saved
  }

  try {
    await resend.emails.send({
      from: fromEmail,
      to: internalTo,
      subject: internalEmail.subject,
      html: internalEmail.html,
    });
  } catch (err) {
    console.error('[Careers API] Resend internal notification failed:', err);
    // Non-blocking — application is already saved
  }

  // ── 10. Success ───────────────────────────────────────────────────────
  return NextResponse.json(
    { success: true, message: 'Application submitted successfully' },
    { status: 200 }
  );
}
