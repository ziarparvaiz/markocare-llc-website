import { ChevronDown } from 'lucide-react';
import { brand } from '@/config/brand';
import SectionHeader from '@/components/ui/SectionHeader';

type Faq = { q: string; a: string };

type Props = { faqs: Faq[] };

export default function ReferralFAQSection({ faqs }: Props) {
  return (
    <section className="section-pad bg-white">
      <div className="container-pad">
        <div className="max-w-3xl mx-auto">
          <SectionHeader
            badge="FAQ"
            title="Common Questions from Referral Partners"
            subtitle="Everything clinical teams ask before establishing a referral relationship with MarkoCare."
          />
          <div className="mt-10 space-y-3">
            {faqs.map(({ q, a }) => (
              <details key={q} className="group rounded-2xl border border-mc-stone bg-white shadow-premium overflow-hidden">
                <summary className="flex items-center justify-between gap-4 px-6 py-5 cursor-pointer select-none list-none">
                  <span className="font-semibold text-mc-forest text-[15px] leading-snug">{q}</span>
                  <ChevronDown className="h-4 w-4 text-mc-leaf-500 shrink-0 transition-transform duration-200 group-open:rotate-180" />
                </summary>
                <div className="px-6 pb-5 text-sm text-gray-600 leading-relaxed border-t border-mc-stone pt-4">{a}</div>
              </details>
            ))}
          </div>
          <p className="mt-8 text-center text-sm text-gray-500">
            Have a question not covered here?{' '}
            <a href={`tel:${brand.phone}`} className="text-mc-leaf-600 font-semibold hover:underline">
              Call our intake coordinator
            </a>{' '}
            or{' '}
            <a href="/contact" className="text-mc-leaf-600 font-semibold hover:underline">
              send us a message
            </a>.
          </p>
        </div>
      </div>
    </section>
  );
}
