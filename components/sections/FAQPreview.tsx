'use client';

import { useState } from 'react';
import Link from 'next/link';
import { ChevronDown } from 'lucide-react';
import SectionHeader from '@/components/ui/SectionHeader';
import { cn } from '@/lib/utils';

const faqs = [
  {
    q: 'Is MarkoCare a licensed home care agency in Maryland?',
    a: 'MarkoCare is actively pursuing licensure as a Residential Service Agency (RSA) with the Maryland Department of Health. We are in the pre-launch phase and will begin accepting clients upon license approval. All operations will be fully compliant with Maryland RSA regulations.',
  },
  {
    q: 'Do you accept Medicaid?',
    a: 'We are positioning for Medicaid acceptance and working through the credentialing process. Currently we are focused on private-pay clients. Please contact us for the most up-to-date insurance information.',
  },
  {
    q: 'Are your caregivers W2 employees or independent contractors?',
    a: 'All MarkoCare caregivers are W2 employees. This means they are fully vetted, insured through our agency, and benefit from our structured training program and RN supervision — unlike agencies that use independent contractors.',
  },
  {
    q: 'What counties do you serve?',
    a: 'We serve Howard County, Carroll County, Anne Arundel County, and Frederick County in Maryland. Contact us if you are in a nearby area — we may be able to accommodate your needs.',
  },
  {
    q: 'How quickly can you start care?',
    a: 'For non-emergency placements, we typically aim for a care start within 48–72 hours of assessment. For urgent post-hospital discharges, we offer expedited placement. Contact our intake line for time-sensitive needs.',
  },
];

export default function FAQPreview() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="section-pad bg-brand-slate">
      <div className="container-pad">
        <SectionHeader
          badge="Common Questions"
          title="Frequently Asked Questions"
          subtitle="Clear answers to help you make confident care decisions."
        />

        <div className="mt-10 max-w-3xl mx-auto space-y-3">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className="rounded-2xl bg-white border border-gray-100 shadow-sm overflow-hidden"
            >
              <button
                className="w-full flex items-center justify-between gap-4 px-6 py-4 text-left"
                onClick={() => setOpen(open === i ? null : i)}
                aria-expanded={open === i}
              >
                <span className="font-semibold text-mc-forest text-sm">{faq.q}</span>
                <ChevronDown
                  className={cn(
                    'h-4 w-4 text-brand-green-600 shrink-0 transition-transform duration-200',
                    open === i && 'rotate-180'
                  )}
                />
              </button>
              {open === i && (
                <div className="px-6 pb-5">
                  <p className="text-sm text-gray-700 leading-relaxed">{faq.a}</p>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-8 text-center">
          <Link href="/faq" className="btn-outline">
            View All FAQs
          </Link>
        </div>
      </div>
    </section>
  );
}
