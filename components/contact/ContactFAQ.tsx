'use client';

import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { cn } from '@/lib/utils';

const faqs = [
  {
    q: 'How quickly can care begin?',
    a: 'For planned care, we typically begin within 48–72 hours of the in-home assessment. For urgent post-hospital discharges, we offer expedited placement — often same-day or next-day. Call us directly for time-sensitive situations.',
  },
  {
    q: 'Do you offer free consultations?',
    a: 'Yes. Our free in-home assessment is a no-pressure conversation where our care coordinator listens to your situation, answers all your questions honestly, and helps you understand what care options are available — with no obligation to proceed.',
  },
  {
    q: 'What areas do you serve?',
    a: 'We serve families across Howard County, Carroll County, Anne Arundel County, and Frederick County in Maryland. If you are in an adjacent area, please contact us to discuss whether we can accommodate your needs.',
  },
  {
    q: 'What types of care services do you provide?',
    a: 'We offer personal care, companion care, dementia and memory care, respite care, post-hospital support, cancer care support, and IPOP transitional care. All services are delivered by W2 employee caregivers under RN supervision.',
  },
  {
    q: 'Are your caregivers background-checked and insured?',
    a: 'Every MarkoCare caregiver undergoes a comprehensive state and federal criminal background check, sex offender registry review, and OIG exclusion screening. As W2 employees, they are fully covered by our general liability and workers\u2019 compensation insurance.',
  },
];

function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);

  return (
    <div
      className={cn(
        'rounded-2xl border bg-white overflow-hidden transition-all duration-200',
        open ? 'border-mc-leaf-200 shadow-premium' : 'border-mc-stone'
      )}
    >
      <button
        className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left"
        onClick={() => setOpen(!open)}
        aria-expanded={open}
      >
        <span className="font-semibold text-mc-forest text-sm leading-relaxed">{q}</span>
        <div
          className={cn(
            'w-7 h-7 rounded-full flex items-center justify-center shrink-0 transition-all duration-200',
            open ? 'bg-mc-leaf-500 text-white' : 'bg-mc-sage text-mc-forest'
          )}
        >
          <ChevronDown
            className={cn(
              'h-4 w-4 transition-transform duration-200',
              open && 'rotate-180'
            )}
          />
        </div>
      </button>
      {open && (
        <div className="px-6 pb-5">
          <p className="text-sm text-gray-600 leading-relaxed">{a}</p>
        </div>
      )}
    </div>
  );
}

export default function ContactFAQ() {
  return (
    <div className="space-y-3">
      {faqs.map((faq) => (
        <FAQItem key={faq.q} q={faq.q} a={faq.a} />
      ))}
    </div>
  );
}
