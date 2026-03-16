import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowLeft, Shield, Award, Clock } from 'lucide-react';
import { brand } from '@/config/brand';
import CaregiverForm from '@/components/forms/CaregiverForm';

export const metadata: Metadata = {
  title: 'Apply for a Caregiver Position | MarkoCare',
  description:
    'Submit your application to join the MarkoCare team. We are hiring compassionate caregivers, CNAs, and RNs in Maryland. Our HR team responds within 2 business days.',
  alternates: { canonical: `${brand.siteUrl}/careers/apply` },
  robots: { index: true, follow: true },
};

const trustItems = [
  {
    icon: Clock,
    label: '2 Business Day Response',
    desc: 'Our HR team reviews every application promptly.',
  },
  {
    icon: Shield,
    label: 'Background Check Conducted',
    desc: 'All hires complete a comprehensive state & federal check.',
  },
  {
    icon: Award,
    label: 'Equal Opportunity Employer',
    desc: 'We do not discriminate on any protected characteristic.',
  },
];

export default function CareersApplyPage() {
  return (
    <>
      {/* ── Header strip ── */}
      <section className="bg-mc-forest text-white py-14 md:py-20 relative overflow-hidden">
        <div className="absolute -top-20 -right-20 w-72 h-72 rounded-full bg-white/[0.03] pointer-events-none" />

        <div className="container-pad relative">
          <Link
            href="/careers"
            className="inline-flex items-center gap-2 text-white/60 hover:text-white text-sm font-medium transition-colors mb-6"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Careers
          </Link>

          <div className="max-w-2xl">
            <span className="mc-badge-dark mb-4 inline-flex">Join Our Team</span>
            <h1 className="heading-display text-white text-3xl md:text-4xl lg:text-5xl mb-4">
              Submit Your Application
            </h1>
            <p className="text-white/70 text-lg leading-relaxed">
              We are glad you are here. Fill out the form below and our HR team will be
              in touch within 2 business days.
            </p>
          </div>
        </div>
      </section>

      {/* ── Trust strip ── */}
      <div className="bg-mc-sage border-b border-mc-stone">
        <div className="container-pad py-5">
          <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-8">
            {trustItems.map(({ icon: Icon, label, desc }) => (
              <div key={label} className="flex items-center gap-3">
                <div className="inline-flex items-center justify-center w-9 h-9 rounded-xl bg-white border border-mc-stone shrink-0">
                  <Icon className="h-4 w-4 text-mc-leaf-500" />
                </div>
                <div>
                  <p className="text-xs font-semibold text-mc-forest">{label}</p>
                  <p className="text-xs text-gray-500 hidden sm:block">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── Application form ── */}
      <section className="section-pad bg-white">
        <div className="container-pad">
          <div className="max-w-3xl mx-auto">
            <div className="rounded-3xl bg-white border border-mc-stone shadow-premium-lg p-8 md:p-10">
              <div className="mb-8 pb-6 border-b border-mc-stone">
                <h2 className="text-xl font-bold text-mc-forest mb-1">Application Form</h2>
                <p className="text-sm text-gray-500">
                  All fields marked with * are required. This takes about 5 minutes to complete.
                </p>
              </div>
              <CaregiverForm />
            </div>

            {/* Footer note */}
            <p className="text-center text-xs text-gray-400 mt-6 leading-relaxed">
              By submitting this form, you consent to MarkoCare contacting you regarding your
              application. Your information is kept confidential and used solely for hiring purposes.
              Questions? Email{' '}
              <a
                href={`mailto:${brand.email}`}
                className="text-mc-leaf-500 hover:underline"
              >
                {brand.email}
              </a>
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
