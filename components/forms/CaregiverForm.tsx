'use client';

import { useState, useRef } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { caregiverSchema, type CaregiverFormData } from '@/lib/validations';
import { Toast, useToast } from '@/components/ui/Toast';
import { Loader2, Send, Paperclip, X } from 'lucide-react';

const POSITION_LABELS: Record<string, string> = {
  caregiver: 'Caregiver',
  cna: 'Certified Nursing Assistant (CNA)',
  companion: 'Companion / Homemaker',
  lpn: 'Licensed Practical Nurse (LPN)',
  rn: 'Registered Nurse (RN)',
};

const EXPERIENCE_YEARS: Record<string, number> = {
  less1: 0,
  '1to3': 1,
  '3to5': 3,
  '5plus': 5,
};

const availabilityOptions = [
  'Monday – Friday Days',
  'Monday – Friday Evenings',
  'Weekends',
  'Overnight Shifts',
  'Live-In',
  'Flexible',
];

type Props = {
  /** Pre-selects the position dropdown. Must match the caregiverSchema position enum. */
  defaultPosition?: 'caregiver' | 'cna' | 'rn' | 'lpn' | 'companion';
};

export default function CaregiverForm({ defaultPosition }: Props) {
  const { toast, showToast, clearToast } = useToast();
  const [cvFile, setCvFile] = useState<File | null>(null);
  const [cvError, setCvError] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<CaregiverFormData>({
    resolver: zodResolver(caregiverSchema),
    defaultValues: {
      ...(defaultPosition ? { position: defaultPosition } : {}),
      hasCPR: false,
      hasCNA: false,
      hasDriversLicense: false,
      hasReliableTransport: false,
      availability: [],
    },
  });

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] ?? null;
    setCvError(null);
    if (!file) { setCvFile(null); return; }
    if (file.type !== 'application/pdf') {
      setCvError('Please upload a PDF file.');
      setCvFile(null);
      e.target.value = '';
      return;
    }
    if (file.size > 10 * 1024 * 1024) {
      setCvError('File must be 10 MB or smaller.');
      setCvFile(null);
      e.target.value = '';
      return;
    }
    setCvFile(file);
  };

  const clearFile = () => {
    setCvFile(null);
    setCvError(null);
    if (fileInputRef.current) fileInputRef.current.value = '';
  };

  const onSubmit = async (data: CaregiverFormData) => {
    if (!cvFile) {
      setCvError('Please attach your CV or resume (PDF).');
      return;
    }

    // Build certifications string from boolean checkboxes
    const certs = [
      data.hasCPR && 'CPR Certified',
      data.hasCNA && 'CNA Certified',
      data.hasDriversLicense && "Driver's License",
      data.hasReliableTransport && 'Reliable Transport',
    ].filter(Boolean);

    const formData = new FormData();
    formData.append('firstName', data.firstName);
    formData.append('lastName', data.lastName);
    formData.append('phone', data.phone);
    formData.append('email', data.email);
    formData.append('positionApplyingFor', POSITION_LABELS[data.position] ?? data.position);
    formData.append('preferredServiceCounty', data.county);
    formData.append('yearsOfExperience', String(EXPERIENCE_YEARS[data.experience] ?? 0));
    formData.append('certificationsAndQualifications', certs.length ? certs.join(', ') : 'None listed');
    formData.append('availability', data.availability.join(', '));
    formData.append('additionalInformation', data.additionalInfo ?? '');
    formData.append('backgroundCheckConsent', 'true');
    formData.append('equalOpportunityAcknowledgment', 'true');
    formData.append('cv', cvFile);

    try {
      const response = await fetch('/api/careers', { method: 'POST', body: formData });
      const result = await response.json();

      if (!response.ok) {
        const firstError = result.errors
          ? Object.values(result.errors as Record<string, string>)[0]
          : 'Submission failed. Please try again.';
        showToast(firstError, 'error');
        return;
      }

      showToast(
        'Application received! Our HR team will contact you within 2 business days.',
        'success'
      );
      reset();
      clearFile();
    } catch {
      showToast('Something went wrong. Please try again or email us directly.', 'error');
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-5" noValidate>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="form-label" htmlFor="cgFirstName">First Name *</label>
            <input
              id="cgFirstName"
              type="text"
              className={`form-input ${errors.firstName ? 'form-input-error' : ''}`}
              placeholder="First name"
              {...register('firstName')}
            />
            {errors.firstName && <p className="form-error">{errors.firstName.message}</p>}
          </div>
          <div>
            <label className="form-label" htmlFor="cgLastName">Last Name *</label>
            <input
              id="cgLastName"
              type="text"
              className={`form-input ${errors.lastName ? 'form-input-error' : ''}`}
              placeholder="Last name"
              {...register('lastName')}
            />
            {errors.lastName && <p className="form-error">{errors.lastName.message}</p>}
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="form-label" htmlFor="cgPhone">Phone *</label>
            <input
              id="cgPhone"
              type="tel"
              className={`form-input ${errors.phone ? 'form-input-error' : ''}`}
              placeholder="(240) 555-0100"
              {...register('phone')}
            />
            {errors.phone && <p className="form-error">{errors.phone.message}</p>}
          </div>
          <div>
            <label className="form-label" htmlFor="cgEmail">Email *</label>
            <input
              id="cgEmail"
              type="email"
              className={`form-input ${errors.email ? 'form-input-error' : ''}`}
              placeholder="you@email.com"
              {...register('email')}
            />
            {errors.email && <p className="form-error">{errors.email.message}</p>}
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="form-label" htmlFor="position">Position Applying For *</label>
            <select
              id="position"
              className={`form-input ${errors.position ? 'form-input-error' : ''}`}
              {...register('position')}
              defaultValue=""
            >
              <option value="" disabled>Select position…</option>
              <option value="caregiver">Home Care Aide / Caregiver</option>
              <option value="cna">Certified Nursing Assistant (CNA)</option>
              <option value="companion">Companion Care Worker</option>
              <option value="lpn">Licensed Practical Nurse (LPN)</option>
              <option value="rn">Registered Nurse (RN)</option>
            </select>
            {errors.position && <p className="form-error">{errors.position.message}</p>}
          </div>
          <div>
            <label className="form-label" htmlFor="cgCounty">Preferred Service County *</label>
            <select
              id="cgCounty"
              className={`form-input ${errors.county ? 'form-input-error' : ''}`}
              {...register('county')}
              defaultValue=""
            >
              <option value="" disabled>Select county…</option>
              {['Howard County', 'Carroll County', 'Anne Arundel County', 'Frederick County', 'Multiple'].map(
                (c) => <option key={c} value={c}>{c}</option>
              )}
            </select>
            {errors.county && <p className="form-error">{errors.county.message}</p>}
          </div>
        </div>

        <div>
          <label className="form-label" htmlFor="experience">Years of Experience *</label>
          <select
            id="experience"
            className={`form-input ${errors.experience ? 'form-input-error' : ''}`}
            {...register('experience')}
            defaultValue=""
          >
            <option value="" disabled>Select experience…</option>
            <option value="less1">Less than 1 year</option>
            <option value="1to3">1–3 years</option>
            <option value="3to5">3–5 years</option>
            <option value="5plus">5+ years</option>
          </select>
          {errors.experience && <p className="form-error">{errors.experience.message}</p>}
        </div>

        {/* Certifications */}
        <div>
          <p className="form-label mb-2">Certifications & Qualifications</p>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {[
              { key: 'hasCPR', label: 'CPR Certified' },
              { key: 'hasCNA', label: 'CNA Certified' },
              { key: 'hasDriversLicense', label: "Driver's License" },
              { key: 'hasReliableTransport', label: 'Reliable Transport' },
            ].map(({ key, label }) => (
              <label key={key} className="flex items-center gap-2 text-sm text-gray-700 cursor-pointer">
                <input
                  type="checkbox"
                  className="accent-brand-green-600 h-4 w-4"
                  {...register(key as keyof CaregiverFormData)}
                />
                {label}
              </label>
            ))}
          </div>
        </div>

        {/* Availability */}
        <div>
          <p className={`form-label mb-2 ${errors.availability ? 'text-red-600' : ''}`}>
            Availability * (select all that apply)
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
            {availabilityOptions.map((opt) => (
              <label key={opt} className="flex items-center gap-2 text-sm text-gray-700 cursor-pointer">
                <input
                  type="checkbox"
                  value={opt}
                  className="accent-brand-green-600 h-4 w-4"
                  {...register('availability')}
                />
                {opt}
              </label>
            ))}
          </div>
          {errors.availability && <p className="form-error">{errors.availability.message}</p>}
        </div>

        {/* Additional info */}
        <div>
          <label className="form-label" htmlFor="additionalInfo">
            Additional Information or Specializations
          </label>
          <textarea
            id="additionalInfo"
            rows={3}
            className="form-input resize-none"
            placeholder="Special care experience, languages, certifications not listed above…"
            {...register('additionalInfo')}
          />
        </div>

        {/* CV Upload */}
        <div>
          <label className="form-label" htmlFor="cvUpload">
            CV / Resume * <span className="text-gray-400 font-normal">(PDF only, max 10 MB)</span>
          </label>
          {cvFile ? (
            <div className="flex items-center gap-3 rounded-lg border border-brand-green-300 bg-brand-green-50 px-4 py-3">
              <Paperclip className="h-4 w-4 text-brand-green-600 shrink-0" />
              <span className="text-sm text-gray-700 truncate flex-1">{cvFile.name}</span>
              <button
                type="button"
                onClick={clearFile}
                className="text-gray-400 hover:text-red-500 transition-colors shrink-0"
                aria-label="Remove file"
              >
                <X className="h-4 w-4" />
              </button>
            </div>
          ) : (
            <label
              htmlFor="cvUpload"
              className={`flex cursor-pointer flex-col items-center justify-center gap-2 rounded-lg border-2 border-dashed px-4 py-6 transition-colors ${
                cvError
                  ? 'border-red-400 bg-red-50'
                  : 'border-gray-300 bg-gray-50 hover:border-brand-green-400 hover:bg-brand-green-50'
              }`}
            >
              <Paperclip className="h-6 w-6 text-gray-400" />
              <span className="text-sm text-gray-600">
                <span className="font-medium text-brand-green-600">Click to upload</span> or drag and drop
              </span>
              <span className="text-xs text-gray-400">PDF · Max 10 MB</span>
            </label>
          )}
          <input
            id="cvUpload"
            ref={fileInputRef}
            type="file"
            accept="application/pdf"
            className="sr-only"
            onChange={handleFileChange}
          />
          {cvError && <p className="form-error">{cvError}</p>}
        </div>

        {/* Consents */}
        <div className="space-y-3 rounded-xl border border-gray-200 bg-gray-50 p-4">
          <label className="flex items-start gap-3 cursor-pointer">
            <input
              type="checkbox"
              className="mt-1 accent-brand-green-600 h-4 w-4"
              {...register('backgroundConsent')}
            />
            <span className="text-xs text-gray-600 leading-relaxed">
              <strong className="text-gray-800">Background Check Consent (Required):</strong> I
              consent to MarkoCare conducting a comprehensive state and federal background check as
              part of the hiring process.
            </span>
          </label>
          {errors.backgroundConsent && (
            <p className="form-error">{errors.backgroundConsent.message}</p>
          )}

          <label className="flex items-start gap-3 cursor-pointer">
            <input
              type="checkbox"
              className="mt-1 accent-brand-green-600 h-4 w-4"
              {...register('eeoConsent')}
            />
            <span className="text-xs text-gray-600 leading-relaxed">
              <strong className="text-gray-800">Equal Opportunity Acknowledgment (Required):</strong>{' '}
              I understand that MarkoCare is an Equal Opportunity Employer (EOE) and does not
              discriminate on the basis of race, color, religion, sex, national origin, age,
              disability, or any other protected characteristic.
            </span>
          </label>
          {errors.eeoConsent && (
            <p className="form-error">{errors.eeoConsent.message}</p>
          )}
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="btn-primary w-full justify-center text-base py-3"
        >
          {isSubmitting ? (
            <><Loader2 className="h-4 w-4 animate-spin" /> Submitting…</>
          ) : (
            <><Send className="h-4 w-4" /> Submit Application</>
          )}
        </button>
      </form>

      {toast && (
        <Toast message={toast.message} type={toast.type} onClose={clearToast} />
      )}
    </>
  );
}
