import React from 'react';
import Link from 'next/link';
import { Phone, Calendar, CheckCircle } from 'lucide-react';
import AssessmentForm from '@/components/forms/AssessmentForm';
import { brand } from '@/config/brand';

const SIDEBAR_COMMITMENTS = [
  'RN-supervised, individualized care plans',
  'State & federal background-checked caregivers',
  'Fully licensed and insured agency',
  'Consistent caregiver scheduling',
];

type Props = {
  serviceName: string;
  children: React.ReactNode;
};

export default function ServiceContentLayout({ serviceName, children }: Props) {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container-pad">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 xl:gap-16">
          {/* Left: main content */}
          <div className="lg:col-span-2 space-y-14">
            {children}
          </div>

          {/* Right: sticky sidebar (desktop only) */}
          <div className="hidden lg:block">
            <div className="sticky top-24 space-y-5">
              <div className="rounded-3xl border border-mc-leaf-100 bg-mc-sage p-6 shadow-premium">
                <div className="flex items-center gap-2 mb-1">
                  <Calendar className="h-4 w-4 text-mc-leaf-600" aria-hidden="true" />
                  <h3 className="text-base font-bold text-mc-forest">
                    Request a Free Assessment
                  </h3>
                </div>
                <p className="text-xs text-gray-500 mb-5">
                  No obligation. A care coordinator will contact you within 1 business day.
                </p>
                <AssessmentForm />
              </div>

              <div className="rounded-2xl border border-mc-stone bg-white p-5">
                <p className="text-xs font-semibold text-gray-400 uppercase tracking-wide mb-3">
                  Prefer to call?
                </p>
                <a
                  href={`tel:${brand.phone}`}
                  className="flex items-center gap-2 text-mc-forest font-bold text-xl hover:text-mc-leaf-700 transition-colors"
                >
                  <Phone className="h-5 w-5 text-mc-leaf-600" aria-hidden="true" />
                  {brand.phoneDisplay}
                </a>
                <p className="text-xs text-gray-500 mt-1">{brand.officeHours}</p>
                <p className="text-xs text-mc-leaf-600 font-medium mt-0.5">{brand.emergencyLine}</p>
              </div>

              <div className="rounded-2xl border border-mc-stone bg-mc-cream p-5">
                <p className="text-xs font-semibold text-gray-400 uppercase tracking-wide mb-3">
                  Our commitments
                </p>
                <ul className="space-y-2.5">
                  {SIDEBAR_COMMITMENTS.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-xs text-gray-700">
                      <CheckCircle className="h-3.5 w-3.5 text-mc-leaf-500 shrink-0 mt-0.5" aria-hidden="true" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
