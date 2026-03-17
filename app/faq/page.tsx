'use client';

import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { cn } from '@/lib/utils';
import CTABanner from '@/components/sections/CTABanner';
import { getFaqData } from '@/lib/faq-data';

const faqData = getFaqData();

function FAQItem({ question, answer }: { question: string; answer: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="rounded-2xl border border-gray-100 bg-white overflow-hidden">
      <button
        className="w-full flex items-center justify-between gap-4 px-6 py-4 text-left"
        onClick={() => setOpen(!open)}
        aria-expanded={open}
      >
        <span className="font-semibold text-brand-navy-800 text-sm">{question}</span>
        <ChevronDown
          className={cn(
            'h-4 w-4 text-brand-green-600 shrink-0 transition-transform duration-200',
            open && 'rotate-180'
          )}
        />
      </button>
      {open && (
        <div className="px-6 pb-5">
          <p className="text-sm text-gray-600 leading-relaxed">{answer}</p>
        </div>
      )}
    </div>
  );
}

export default function FAQPage() {
  return (
    <>
      <section className="bg-mc-forest text-white py-16 md:py-20">
        <div className="container-pad max-w-3xl">
          <span className="badge-green mb-4 inline-flex">FAQ</span>
          <h1 className="text-4xl md:text-5xl font-bold mb-5">
            Frequently Asked Questions
          </h1>
          <p className="text-lg text-white/80 leading-relaxed">
            We know choosing home care raises a lot of questions. Here are honest, straightforward
            answers to the ones we hear most often — so your family can make confident, informed decisions.
          </p>
        </div>
      </section>

      <section className="section-pad bg-brand-slate">
        <div className="container-pad max-w-4xl">
          <div className="space-y-12">
            {faqData.categories.map((cat) => (
              <div key={cat.slug}>
                <h2 className="text-xl font-bold text-brand-navy-800 mb-5 pb-2 border-b border-gray-200">
                  {cat.title}
                </h2>
                <div className="space-y-3">
                  {cat.items.map((item) => (
                    <FAQItem key={item.id} question={item.question} answer={item.answer} />
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 rounded-3xl bg-brand-navy-50 border border-brand-navy-100 p-8 text-center">
            <h3 className="text-xl font-bold text-brand-navy-800 mb-3">
              Have a Question We Didn&apos;t Answer?
            </h3>
            <p className="text-gray-600 mb-5">
              Our care coordinators are happy to answer any questions you have.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <a href="tel:+12404324374" className="btn-primary">
                Call (240) 432-4374
              </a>
              <a href="mailto:hello@markocare.com" className="btn-outline">
                Email Us
              </a>
            </div>
          </div>
        </div>
      </section>

      <CTABanner title="Ready to Start Care?" subtitle="Request a free in-home assessment today and let us answer your questions in person." />
    </>
  );
}
