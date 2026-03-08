import type { Metadata } from 'next';
import { Shield, Info, CheckCircle, AlertCircle } from 'lucide-react';
import { brand } from '@/config/brand';
import LicenseBanner from '@/components/ui/LicenseBanner';

export const metadata: Metadata = {
  title: 'Compliance | MarkoCare',
  description:
    'MarkoCare\'s compliance page covering Maryland RSA licensure under COMAR 10.07.05, OHCQ oversight, and our commitment to regulatory standards in home care.',
  alternates: { canonical: `${brand.siteUrl}/legal/compliance` },
  openGraph: {
    title: 'Compliance | MarkoCare',
    description: 'MarkoCare\'s Maryland RSA compliance information — COMAR 10.07.05 licensure, OHCQ oversight, and client rights.',
  },
  robots: { index: false, follow: false },
};

const clientRights = [
  'To be treated with courtesy, respect, and dignity at all times.',
  'To receive care that is free from abuse, neglect, and exploitation.',
  'To be informed of the scope and limitations of services before care begins.',
  'To participate in developing and modifying your care plan.',
  'To refuse any service or treatment at any time.',
  'To have your personal information kept confidential.',
  'To be informed of any changes to your care team or schedule in advance.',
  'To voice concerns or complaints without fear of retaliation.',
  'To have complaints reviewed and resolved in a timely manner.',
  'To be informed of applicable costs and billing practices.',
];

export default function CompliancePage() {
  return (
    <>
      <section className="bg-mc-forest text-white py-16">
        <div className="container-pad max-w-3xl">
          <Shield className="h-10 w-10 text-brand-green-400 mb-4" />
          <h1 className="text-4xl font-bold mb-4">Compliance & Client Rights</h1>
          <p className="text-lg text-white/80">
            MarkoCare is committed to operating with full transparency, regulatory compliance,
            and the highest ethical standards — in every interaction, in every home, every day.
          </p>
        </div>
      </section>

      <section className="section-pad bg-white">
        <div className="container-pad max-w-4xl">
          <div className="space-y-10">

            {/* License status — dynamic */}
            <div>
              <h2 className="text-2xl font-bold text-brand-navy-800 mb-4 flex items-center gap-2">
                <Info className="h-6 w-6 text-brand-navy-600" /> License Status
              </h2>
              <LicenseBanner />
              {!brand.isLicensed && (
                <div className="mt-4 rounded-xl border border-gray-200 bg-gray-50 p-5">
                  <p className="text-sm text-gray-700 leading-relaxed">
                    MarkoCare is currently in the licensure process as a Residential Service
                    Agency (RSA) under the Maryland Department of Health, pursuant to COMAR 10.07.14.
                    We will not represent ourselves as licensed until licensure is officially granted.
                    All pre-launch operations are conducted in compliance with applicable law.
                  </p>
                </div>
              )}
            </div>

            {/* Client Rights */}
            <div>
              <h2 className="text-2xl font-bold text-brand-navy-800 mb-4 flex items-center gap-2">
                <CheckCircle className="h-6 w-6 text-brand-green-600" /> Client Bill of Rights
              </h2>
              <p className="text-gray-600 mb-5 text-sm leading-relaxed">
                Every client receiving services from MarkoCare has the following rights,
                consistent with Maryland RSA regulations and applicable federal law:
              </p>
              <ul className="space-y-3">
                {clientRights.map((right, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-gray-700">
                    <CheckCircle className="h-4 w-4 text-brand-green-600 shrink-0 mt-0.5" />
                    {right}
                  </li>
                ))}
              </ul>
            </div>

            {/* Non-discrimination */}
            <div>
              <h2 className="text-2xl font-bold text-brand-navy-800 mb-4">
                Non-Discrimination Policy
              </h2>
              <div className="rounded-2xl border border-brand-green-100 bg-brand-green-50 p-6">
                <p className="text-sm text-gray-700 leading-relaxed mb-3">
                  MarkoCare does not discriminate in the provision of services or in employment
                  practices on the basis of race, color, religion, national origin, sex, age,
                  disability, sexual orientation, gender identity, marital status, or any other
                  characteristic protected by federal, state, or local law. This commitment applies
                  equally to client intake, caregiver assignment, scheduling, and all business operations.
                </p>
                <p className="text-sm text-gray-700 leading-relaxed">
                  MarkoCare is committed to providing equitable, dignified care to every individual
                  we serve — and to building a workforce that reflects the diversity of the communities
                  we are privileged to serve. We treat every client and every team member with respect,
                  always.
                </p>
              </div>
            </div>

            {/* Insurance statement */}
            <div>
              <h2 className="text-2xl font-bold text-brand-navy-800 mb-4">Insurance Statement</h2>
              <p className="text-sm text-gray-700 leading-relaxed mb-3">
                MarkoCare carries general liability insurance and workers&apos; compensation
                coverage for all W2 employees. Clients can request proof of insurance upon request.
              </p>
              <p className="text-sm text-gray-700 leading-relaxed">
                For insurance verification questions, contact us at{' '}
                <a href={`mailto:${brand.email}`} className="text-brand-green-700 underline">
                  {brand.email}
                </a>.
              </p>
            </div>

            {/* Complaint process */}
            <div>
              <h2 className="text-2xl font-bold text-brand-navy-800 mb-4 flex items-center gap-2">
                <AlertCircle className="h-6 w-6 text-amber-600" /> Complaint Process
              </h2>
              <p className="text-sm text-gray-700 leading-relaxed mb-5">
                MarkoCare takes all client concerns and complaints seriously. We are committed to
                resolving issues promptly and transparently.
              </p>
              <div className="space-y-4">
                {[
                  {
                    step: '1',
                    title: 'Contact Our Care Coordinator',
                    desc: `Call ${brand.phoneDisplay} or email ${brand.email} to report your concern. All complaints are documented.`,
                  },
                  {
                    step: '2',
                    title: 'Complaint Review',
                    desc: 'A supervisor or administrator will review your complaint within 2 business days and contact you to discuss resolution.',
                  },
                  {
                    step: '3',
                    title: 'Resolution & Follow-Up',
                    desc: 'We will work to resolve the complaint and provide a written summary of findings and actions taken within 10 business days.',
                  },
                  {
                    step: '4',
                    title: 'External Reporting',
                    desc: 'Clients also have the right to file complaints with the Maryland Department of Health Office of Health Care Quality at any time.',
                  },
                ].map((item) => (
                  <div key={item.step} className="flex items-start gap-4 rounded-xl border border-gray-100 bg-gray-50 p-4">
                    <div className="w-8 h-8 rounded-lg bg-amber-100 text-amber-700 text-sm font-bold flex items-center justify-center shrink-0">
                      {item.step}
                    </div>
                    <div>
                      <p className="font-semibold text-gray-800 text-sm">{item.title}</p>
                      <p className="text-xs text-gray-600 mt-0.5 leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Last updated */}
            <p className="text-xs text-gray-400 border-t border-gray-100 pt-5">
              Last updated: January 2025. This page reflects MarkoCare&apos;s current operational
              policies and will be updated as our licensing status changes.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
