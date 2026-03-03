'use client';

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { caregiverSchema, type CaregiverFormData } from '@/lib/validations';
import { Toast, useToast } from '@/components/ui/Toast';
import { Loader2, Send } from 'lucide-react';

const availabilityOptions = [
  'Monday – Friday Days',
  'Monday – Friday Evenings',
  'Weekends',
  'Overnight Shifts',
  'Live-In',
  'Flexible',
];

export default function CaregiverForm() {
  const { toast, showToast, clearToast } = useToast();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<CaregiverFormData>({
    resolver: zodResolver(caregiverSchema),
    defaultValues: {
      hasCPR: false,
      hasCNA: false,
      hasDriversLicense: false,
      hasReliableTransport: false,
      availability: [],
    },
  });

  const onSubmit = async (data: CaregiverFormData) => {
    try {
      // TODO: Replace with ATS/CRM integration
      const response = await fetch('/api/leads/caregiver', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...data, submittedAt: new Date().toISOString(), type: 'caregiver' }),
      });

      if (!response.ok) throw new Error('Submission failed');

      showToast(
        'Application received! Our HR team will contact you within 2 business days.',
        'success'
      );
      reset();
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
