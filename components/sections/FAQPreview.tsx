'use client';

import { useState } from 'react';
import Link from 'next/link';
import { ChevronDown } from 'lucide-react';
import SectionHeader from '@/components/ui/SectionHeader';
import { cn } from '@/lib/utils';
import { getGlobalFaqConfig, getFaqItemsByIds } from '@/lib/faq-data';

const config = getGlobalFaqConfig();
const faqs = getFaqItemsByIds(config.selectedIds);

export default function FAQPreview() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="section-pad bg-brand-slate">
      <div className="container-pad">
        <SectionHeader
          badge={config.label}
          title={config.title}
          subtitle={config.description}
        />

        <div className="mt-10 max-w-3xl mx-auto space-y-3">
          {faqs.map((faq, i) => (
            <div
              key={faq.id}
              className="rounded-2xl bg-white border border-gray-100 shadow-sm overflow-hidden"
            >
              <button
                className="w-full flex items-center justify-between gap-4 px-6 py-4 text-left"
                onClick={() => setOpen(open === i ? null : i)}
                aria-expanded={open === i}
              >
                <span className="font-semibold text-mc-forest text-sm">{faq.question}</span>
                <ChevronDown
                  className={cn(
                    'h-4 w-4 text-brand-green-600 shrink-0 transition-transform duration-200',
                    open === i && 'rotate-180'
                  )}
                />
              </button>
              {open === i && (
                <div className="px-6 pb-5">
                  <p className="text-sm text-gray-700 leading-relaxed">{faq.answer}</p>
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
