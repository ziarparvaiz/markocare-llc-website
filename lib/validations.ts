import { z } from 'zod';

// --- Free Assessment Form ---
export const assessmentSchema = z.object({
  firstName: z.string().min(2, 'First name must be at least 2 characters'),
  lastName: z.string().min(2, 'Last name must be at least 2 characters'),
  phone: z
    .string()
    .min(10, 'Please enter a valid phone number')
    .regex(/^[\d\s\-\(\)\+]+$/, 'Please enter a valid phone number'),
  email: z.string().email('Please enter a valid email address'),
  relationship: z.enum([
    'self',
    'spouse',
    'parent',
    'sibling',
    'child',
    'other',
  ], { errorMap: () => ({ message: 'Please select your relationship' }) }),
  county: z.enum([
    'Howard County',
    'Carroll County',
    'Anne Arundel County',
    'Frederick County',
    'Other',
  ], { errorMap: () => ({ message: 'Please select a county' }) }),
  careNeeds: z.string().min(10, 'Please briefly describe the care needs (at least 10 characters)'),
  preferredContact: z.enum(['phone', 'email', 'either']).default('either'),
  bestTime: z.string().optional(),
  howHeard: z.string().optional(),
});

export type AssessmentFormData = z.infer<typeof assessmentSchema>;

// --- Referral Intake Form ---
export const referralSchema = z.object({
  referrerName: z.string().min(2, 'Please enter your name'),
  referrerTitle: z.string().min(2, 'Please enter your title'),
  organization: z.string().min(2, 'Please enter your organization name'),
  phone: z
    .string()
    .min(10, 'Please enter a valid phone number')
    .regex(/^[\d\s\-\(\)\+]+$/, 'Invalid phone number'),
  email: z.string().email('Please enter a valid email address'),
  patientFirstName: z.string().min(2, 'Please enter patient first name'),
  patientLastName: z.string().min(2, 'Please enter patient last name'),
  patientDOB: z.string().min(1, 'Please enter patient date of birth'),
  dischargeDate: z.string().optional(),
  county: z.enum([
    'Howard County',
    'Carroll County',
    'Anne Arundel County',
    'Frederick County',
    'Other',
  ], { errorMap: () => ({ message: 'Please select a county' }) }),
  insuranceType: z.enum([
    'Medicaid',
    'Medicare',
    'Private Insurance',
    'Private Pay',
    'Unknown',
  ], { errorMap: () => ({ message: 'Please select insurance type' }) }),
  careLevel: z.enum([
    'Companion/Homemaker',
    'Personal Care',
    'Skilled Nursing Support',
    'Dementia Care',
    'Post-Surgical',
    'Other',
  ], { errorMap: () => ({ message: 'Please select care level' }) }),
  urgency: z.enum(['immediate', 'within48h', 'within1week', 'planning'], {
    errorMap: () => ({ message: 'Please select urgency' }),
  }),
  additionalNotes: z.string().optional(),
  hipaaConsent: z.literal(true, {
    errorMap: () => ({ message: 'HIPAA acknowledgment is required' }),
  }),
});

export type ReferralFormData = z.infer<typeof referralSchema>;

// --- Caregiver Application Form ---
export const caregiverSchema = z.object({
  firstName: z.string().min(2, 'First name is required'),
  lastName: z.string().min(2, 'Last name is required'),
  phone: z
    .string()
    .min(10, 'Please enter a valid phone number')
    .regex(/^[\d\s\-\(\)\+]+$/, 'Invalid phone number'),
  email: z.string().email('Please enter a valid email address'),
  position: z.enum(['caregiver', 'cna', 'rn', 'lpn', 'companion'], {
    errorMap: () => ({ message: 'Please select a position' }),
  }),
  county: z.enum([
    'Howard County',
    'Carroll County',
    'Anne Arundel County',
    'Frederick County',
    'Multiple',
  ], { errorMap: () => ({ message: 'Please select a county' }) }),
  experience: z.enum([
    'less1',
    '1to3',
    '3to5',
    '5plus',
  ], { errorMap: () => ({ message: 'Please select experience level' }) }),
  hasCPR: z.boolean().default(false),
  hasCNA: z.boolean().default(false),
  hasDriversLicense: z.boolean().default(false),
  hasReliableTransport: z.boolean().default(false),
  availability: z.array(z.string()).min(1, 'Please select at least one availability'),
  additionalInfo: z.string().optional(),
  backgroundConsent: z.literal(true, {
    errorMap: () => ({ message: 'You must consent to a background check' }),
  }),
  eeoConsent: z.literal(true, {
    errorMap: () => ({ message: 'You must acknowledge the EEO statement' }),
  }),
});

export type CaregiverFormData = z.infer<typeof caregiverSchema>;
