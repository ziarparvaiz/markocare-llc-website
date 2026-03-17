'use client';

import { useState } from 'react';
import Link from 'next/link';
import { ChevronDown, Phone, ArrowRight } from 'lucide-react';
import { brand } from '@/config/brand';
import { cn } from '@/lib/utils';
import { getGlobalFaqConfig, getFaqItemsByIds } from '@/lib/faq-data';

const config = getGlobalFaqConfig();
const faqs = getFaqItemsByIds(config.selectedIds);

export default function HomeFAQSection() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section className="py-20 md:py-28 bg-mc-sage border-y border-mc-stone">
      <div className="container-pad">

        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="eyebrow mb-3 block">{config.label}</span>
          <h2 className="heading-display text-3xl md:text-4xl mb-4">
            {config.title}
          </h2>
          <p className="text-gray-600 leading-relaxed">
            {config.description}
          </p>
        </div>

        {/* Accordion */}
        <div className="max-w-3xl mx-auto space-y-3">
          {faqs.map((faq, i) => {
            const isOpen = open === i;
            return (
              <div
                key={faq.id}
                className={cn(
                  'rounded-2xl border overflow-hidden transition-all duration-200',
                  isOpen
                    ? 'bg-white border-mc-leaf-200 shadow-premium-lg'
                    : 'bg-white border-mc-stone shadow-premium hover:border-mc-leaf-100 hover:shadow-float',
                )}
              >
                <button
                  className="w-full flex items-center gap-4 px-6 py-5 text-left"
                  onClick={() => setOpen(isOpen ? null : i)}
                  aria-expanded={isOpen}
                >
                  {/* Numbered index pill */}
                  <span
                    className={cn(
                      'flex-none w-7 h-7 rounded-full flex items-center justify-center text-[11px] font-bold transition-colors duration-200',
                      isOpen
                        ? 'bg-mc-leaf-400 text-white'
                        : 'bg-mc-leaf-50 text-mc-leaf-600',
                    )}
                  >
                    {i + 1}
                  </span>

                  {/* Question text */}
                  <span
                    className={cn(
                      'flex-1 font-semibold text-sm leading-snug transition-colors duration-200',
                      isOpen ? 'text-mc-forest' : 'text-gray-800',
                    )}
                  >
                    {faq.question}
                  </span>

                  {/* Chevron pill */}
                  <span
                    className={cn(
                      'flex-none w-7 h-7 rounded-full flex items-center justify-center transition-all duration-300',
                      isOpen ? 'bg-mc-leaf-50 rotate-180' : 'bg-mc-stone/60',
                    )}
                  >
                    <ChevronDown
                      className={cn(
                        'h-3.5 w-3.5 transition-colors duration-200',
                        isOpen ? 'text-mc-leaf-600' : 'text-gray-400',
                      )}
                    />
                  </span>
                </button>

                {/* Expandable answer */}
                <div
                  className={cn(
                    'overflow-hidden transition-all duration-300 ease-in-out',
                    isOpen ? 'max-h-80' : 'max-h-0',
                  )}
                >
                  <div className="px-6 pb-6">
                    <div className="h-px bg-gradient-to-r from-mc-leaf-200 via-mc-leaf-100 to-transparent mb-4" />
                    <p className="text-[0.9375rem] text-gray-600 leading-[1.75]">{faq.answer}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA row */}
        <div className="text-center mt-10">
          <p className="text-sm text-gray-500 mb-4">Still have questions? We are here to help.</p>
          <div className="flex items-center justify-center gap-3 flex-wrap">
            <a href={`tel:${brand.phone}`} className="btn-mc-outline gap-2">
              <Phone className="h-4 w-4" />
              Call {brand.phoneDisplay}
            </a>
            <Link href="/service-areas#assessment" className="btn-mc-primary gap-2">
              Request Free Assessment
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>

      </div>
    </section>
  );
}
