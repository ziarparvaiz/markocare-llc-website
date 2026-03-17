'use client';

import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { cn } from '@/lib/utils';
import { getGlobalFaqConfig, getFaqItemsByIds } from '@/lib/faq-data';

const config = getGlobalFaqConfig();
const faqs = getFaqItemsByIds(config.selectedIds);

function FAQItem({ question, answer }: { question: string; answer: string }) {
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
        <span className="font-semibold text-mc-forest text-sm leading-relaxed">{question}</span>
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
          <p className="text-sm text-gray-600 leading-relaxed">{answer}</p>
        </div>
      )}
    </div>
  );
}

export default function ContactFAQ() {
  return (
    <div className="space-y-3">
      {faqs.map((faq) => (
        <FAQItem key={faq.id} question={faq.question} answer={faq.answer} />
      ))}
    </div>
  );
}
