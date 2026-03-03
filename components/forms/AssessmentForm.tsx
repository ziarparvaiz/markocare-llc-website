'use client';

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { assessmentSchema, type AssessmentFormData } from '@/lib/validations';
import { Toast, useToast } from '@/components/ui/Toast';
import { Loader2, Send } from 'lucide-react';

const counties = [
  'Howard County',
  'Carroll County',
  'Anne Arundel County',
  'Frederick County',
  'Other',
];

const relationships = [
  { value: 'self', label: 'Myself' },
  { value: 'spouse', label: 'Spouse / Partner' },
  { value: 'parent', label: 'Parent' },
  { value: 'child', label: 'Adult Child' },
  { value: 'sibling', label: 'Sibling' },
  { value: 'other', label: 'Other' },
];

export default function AssessmentForm() {
  const { toast, showToast, clearToast } = useToast();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<AssessmentFormData>({
    resolver: zodResolver(assessmentSchema),
  });

  const onSubmit = async (data: AssessmentFormData) => {
    try {
      // TODO: Replace with CRM integration (Sanity, HubSpot, etc.)
      const response = await fetch('/api/leads/assessment', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...data, submittedAt: new Date().toISOString(), type: 'assessment' }),
      });

      if (!response.ok) throw new Error('Submission failed');

      showToast(
        'Thank you! A care coordinator will contact you within one business day.',
        'success'
      );
      reset();
    } catch {
      showToast(
        'Something went wrong. Please call us directly or try again.',
        'error'
      );
    }
  };

  return (
    <>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="space-y-5"
        noValidate
      >
        {/* Name row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="form-label" htmlFor="firstName">First Name *</label>
            <input
              id="firstName"
              type="text"
              autoComplete="given-name"
              className={`form-input ${errors.firstName ? 'form-input-error' : ''}`}
              placeholder="Jane"
              {...register('firstName')}
            />
            {errors.firstName && <p className="form-error">{errors.firstName.message}</p>}
          </div>
          <div>
            <label className="form-label" htmlFor="lastName">Last Name *</label>
            <input
              id="lastName"
              type="text"
              autoComplete="family-name"
              className={`form-input ${errors.lastName ? 'form-input-error' : ''}`}
              placeholder="Smith"
              {...register('lastName')}
            />
            {errors.lastName && <p className="form-error">{errors.lastName.message}</p>}
          </div>
        </div>

        {/* Contact row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="form-label" htmlFor="phone">Phone Number *</label>
            <input
              id="phone"
              type="tel"
              autoComplete="tel"
              className={`form-input ${errors.phone ? 'form-input-error' : ''}`}
              placeholder="(240) 555-0100"
              {...register('phone')}
            />
            {errors.phone && <p className="form-error">{errors.phone.message}</p>}
          </div>
          <div>
            <label className="form-label" htmlFor="email">Email Address *</label>
            <input
              id="email"
              type="email"
              autoComplete="email"
              className={`form-input ${errors.email ? 'form-input-error' : ''}`}
              placeholder="jane@example.com"
              {...register('email')}
            />
            {errors.email && <p className="form-error">{errors.email.message}</p>}
          </div>
        </div>

        {/* Relationship & County */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="form-label" htmlFor="relationship">
              Relationship to Care Recipient *
            </label>
            <select
              id="relationship"
              className={`form-input ${errors.relationship ? 'form-input-error' : ''}`}
              {...register('relationship')}
              defaultValue=""
            >
              <option value="" disabled>Select relationship…</option>
              {relationships.map((r) => (
                <option key={r.value} value={r.value}>{r.label}</option>
              ))}
            </select>
            {errors.relationship && (
              <p className="form-error">{errors.relationship.message}</p>
            )}
          </div>
          <div>
            <label className="form-label" htmlFor="county">County *</label>
            <select
              id="county"
              className={`form-input ${errors.county ? 'form-input-error' : ''}`}
              {...register('county')}
              defaultValue=""
            >
              <option value="" disabled>Select county…</option>
              {counties.map((c) => (
                <option key={c} value={c}>{c}</option>
              ))}
            </select>
            {errors.county && <p className="form-error">{errors.county.message}</p>}
          </div>
        </div>

        {/* Care needs */}
        <div>
          <label className="form-label" htmlFor="careNeeds">
            Briefly Describe Care Needs *
          </label>
          <textarea
            id="careNeeds"
            rows={3}
            className={`form-input resize-none ${errors.careNeeds ? 'form-input-error' : ''}`}
            placeholder="e.g., My mother needs help with bathing, medication reminders, and meal preparation…"
            {...register('careNeeds')}
          />
          {errors.careNeeds && <p className="form-error">{errors.careNeeds.message}</p>}
        </div>

        {/* Preferred contact */}
        <div>
          <label className="form-label">Preferred Contact Method</label>
          <div className="flex gap-4 flex-wrap">
            {[
              { value: 'phone', label: 'Phone' },
              { value: 'email', label: 'Email' },
              { value: 'either', label: 'Either' },
            ].map((opt) => (
              <label key={opt.value} className="flex items-center gap-2 text-sm text-gray-700 cursor-pointer">
                <input
                  type="radio"
                  value={opt.value}
                  className="accent-brand-green-600"
                  {...register('preferredContact')}
                  defaultChecked={opt.value === 'either'}
                />
                {opt.label}
              </label>
            ))}
          </div>
        </div>

        {/* How heard */}
        <div>
          <label className="form-label" htmlFor="howHeard">How did you hear about us?</label>
          <input
            id="howHeard"
            type="text"
            className="form-input"
            placeholder="Google, doctor referral, friend…"
            {...register('howHeard')}
          />
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="btn-primary w-full justify-center text-base py-3"
        >
          {isSubmitting ? (
            <>
              <Loader2 className="h-4 w-4 animate-spin" />
              Sending…
            </>
          ) : (
            <>
              <Send className="h-4 w-4" />
              Request Free Assessment
            </>
          )}
        </button>

        <p className="text-xs text-gray-400 text-center">
          By submitting, you agree to our{' '}
          <a href="/legal/privacy" className="underline hover:text-gray-600">Privacy Policy</a>.
          We will never share your information.
        </p>
      </form>

      {toast && (
        <Toast message={toast.message} type={toast.type} onClose={clearToast} />
      )}
    </>
  );
}
