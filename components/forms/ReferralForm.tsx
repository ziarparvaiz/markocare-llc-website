'use client';

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { referralSchema, type ReferralFormData } from '@/lib/validations';
import { Toast, useToast } from '@/components/ui/Toast';
import { Loader2, Send } from 'lucide-react';

const counties = [
  'Howard County',
  'Carroll County',
  'Anne Arundel County',
  'Frederick County',
  'Other',
];

export default function ReferralForm() {
  const { toast, showToast, clearToast } = useToast();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ReferralFormData>({
    resolver: zodResolver(referralSchema),
  });

  const onSubmit = async (data: ReferralFormData) => {
    try {
      // TODO: Replace with CRM integration
      const response = await fetch('/api/leads/referral', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...data, submittedAt: new Date().toISOString(), type: 'referral' }),
      });

      if (!response.ok) throw new Error('Submission failed');

      showToast(
        'Referral received. Our intake coordinator will respond within 2 hours during business hours.',
        'success'
      );
      reset();
    } catch {
      showToast(
        'Submission error. For urgent placements, please call us directly.',
        'error'
      );
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-5" noValidate>
        <h3 className="text-sm font-semibold text-brand-navy-700 uppercase tracking-wide border-b border-gray-100 pb-2">
          Referring Professional
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="form-label" htmlFor="referrerName">Your Full Name *</label>
            <input
              id="referrerName"
              type="text"
              className={`form-input ${errors.referrerName ? 'form-input-error' : ''}`}
              placeholder="Dr. Jane Smith"
              {...register('referrerName')}
            />
            {errors.referrerName && <p className="form-error">{errors.referrerName.message}</p>}
          </div>
          <div>
            <label className="form-label" htmlFor="referrerTitle">Title / Role *</label>
            <input
              id="referrerTitle"
              type="text"
              className={`form-input ${errors.referrerTitle ? 'form-input-error' : ''}`}
              placeholder="Discharge Planner, Case Manager…"
              {...register('referrerTitle')}
            />
            {errors.referrerTitle && <p className="form-error">{errors.referrerTitle.message}</p>}
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="form-label" htmlFor="organization">Organization / Hospital *</label>
            <input
              id="organization"
              type="text"
              className={`form-input ${errors.organization ? 'form-input-error' : ''}`}
              placeholder="Howard County General Hospital"
              {...register('organization')}
            />
            {errors.organization && <p className="form-error">{errors.organization.message}</p>}
          </div>
          <div>
            <label className="form-label" htmlFor="refPhone">Your Direct Phone *</label>
            <input
              id="refPhone"
              type="tel"
              className={`form-input ${errors.phone ? 'form-input-error' : ''}`}
              placeholder="(240) 555-0100"
              {...register('phone')}
            />
            {errors.phone && <p className="form-error">{errors.phone.message}</p>}
          </div>
        </div>

        <div>
          <label className="form-label" htmlFor="refEmail">Your Email Address *</label>
          <input
            id="refEmail"
            type="email"
            className={`form-input ${errors.email ? 'form-input-error' : ''}`}
            placeholder="jsmith@hospital.org"
            {...register('email')}
          />
          {errors.email && <p className="form-error">{errors.email.message}</p>}
        </div>

        <h3 className="text-sm font-semibold text-brand-navy-700 uppercase tracking-wide border-b border-gray-100 pb-2 pt-2">
          Patient Information
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="form-label" htmlFor="patientFirstName">Patient First Name *</label>
            <input
              id="patientFirstName"
              type="text"
              className={`form-input ${errors.patientFirstName ? 'form-input-error' : ''}`}
              placeholder="First name"
              {...register('patientFirstName')}
            />
            {errors.patientFirstName && <p className="form-error">{errors.patientFirstName.message}</p>}
          </div>
          <div>
            <label className="form-label" htmlFor="patientLastName">Patient Last Name *</label>
            <input
              id="patientLastName"
              type="text"
              className={`form-input ${errors.patientLastName ? 'form-input-error' : ''}`}
              placeholder="Last name"
              {...register('patientLastName')}
            />
            {errors.patientLastName && <p className="form-error">{errors.patientLastName.message}</p>}
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="form-label" htmlFor="patientDOB">Date of Birth *</label>
            <input
              id="patientDOB"
              type="date"
              className={`form-input ${errors.patientDOB ? 'form-input-error' : ''}`}
              {...register('patientDOB')}
            />
            {errors.patientDOB && <p className="form-error">{errors.patientDOB.message}</p>}
          </div>
          <div>
            <label className="form-label" htmlFor="dischargeDate">
              Anticipated Discharge Date
            </label>
            <input
              id="dischargeDate"
              type="date"
              className="form-input"
              {...register('dischargeDate')}
            />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="form-label" htmlFor="refCounty">Patient County *</label>
            <select
              id="refCounty"
              className={`form-input ${errors.county ? 'form-input-error' : ''}`}
              {...register('county')}
              defaultValue=""
            >
              <option value="" disabled>Select county…</option>
              {counties.map((c) => <option key={c} value={c}>{c}</option>)}
            </select>
            {errors.county && <p className="form-error">{errors.county.message}</p>}
          </div>
          <div>
            <label className="form-label" htmlFor="insuranceType">Insurance / Payer *</label>
            <select
              id="insuranceType"
              className={`form-input ${errors.insuranceType ? 'form-input-error' : ''}`}
              {...register('insuranceType')}
              defaultValue=""
            >
              <option value="" disabled>Select payer…</option>
              {['Medicaid', 'Medicare', 'Private Insurance', 'Private Pay', 'Unknown'].map(
                (p) => <option key={p} value={p}>{p}</option>
              )}
            </select>
            {errors.insuranceType && <p className="form-error">{errors.insuranceType.message}</p>}
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="form-label" htmlFor="careLevel">Care Level Needed *</label>
            <select
              id="careLevel"
              className={`form-input ${errors.careLevel ? 'form-input-error' : ''}`}
              {...register('careLevel')}
              defaultValue=""
            >
              <option value="" disabled>Select care level…</option>
              {[
                'Companion/Homemaker',
                'Personal Care',
                'Skilled Nursing Support',
                'Dementia Care',
                'Post-Surgical',
                'Other',
              ].map((l) => <option key={l} value={l}>{l}</option>)}
            </select>
            {errors.careLevel && <p className="form-error">{errors.careLevel.message}</p>}
          </div>
          <div>
            <label className="form-label" htmlFor="urgency">Urgency *</label>
            <select
              id="urgency"
              className={`form-input ${errors.urgency ? 'form-input-error' : ''}`}
              {...register('urgency')}
              defaultValue=""
            >
              <option value="" disabled>Select urgency…</option>
              <option value="immediate">Immediate (today)</option>
              <option value="within48h">Within 48 hours</option>
              <option value="within1week">Within 1 week</option>
              <option value="planning">Planning ahead</option>
            </select>
            {errors.urgency && <p className="form-error">{errors.urgency.message}</p>}
          </div>
        </div>

        <div>
          <label className="form-label" htmlFor="additionalNotes">
            Additional Clinical Notes
          </label>
          <textarea
            id="additionalNotes"
            rows={3}
            className="form-input resize-none"
            placeholder="Diagnoses, mobility limitations, care goals, family contacts…"
            {...register('additionalNotes')}
          />
        </div>

        {/* HIPAA consent */}
        <div className="rounded-xl border border-gray-200 bg-gray-50 p-4">
          <label className="flex items-start gap-3 cursor-pointer">
            <input
              type="checkbox"
              className="mt-1 accent-brand-green-600 h-4 w-4"
              {...register('hipaaConsent')}
            />
            <span className="text-xs text-gray-600 leading-relaxed">
              <strong className="text-gray-800">HIPAA Acknowledgment (Required):</strong> I am
              authorized to disclose this patient&apos;s protected health information (PHI) to MarkoCare
              for the purpose of care coordination, consistent with HIPAA TPO (Treatment, Payment,
              and Operations) provisions.
            </span>
          </label>
          {errors.hipaaConsent && (
            <p className="form-error mt-2">{errors.hipaaConsent.message}</p>
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
            <><Send className="h-4 w-4" /> Submit Referral</>
          )}
        </button>

        <p className="text-xs text-gray-400 text-center">
          Urgent referrals: Call <a href="tel:+12404324374" className="underline font-semibold">(240) 432-4374</a> directly.
          We respond to referrals within 2 business hours.
        </p>
      </form>

      {toast && (
        <Toast message={toast.message} type={toast.type} onClose={clearToast} />
      )}
    </>
  );
}
