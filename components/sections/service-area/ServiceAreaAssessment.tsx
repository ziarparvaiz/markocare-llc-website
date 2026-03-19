import { Phone } from 'lucide-react';
import AssessmentForm from '@/components/forms/AssessmentForm';
import { brand } from '@/config/brand';

type Props = { county: string };

export default function ServiceAreaAssessment({ county }: Props) {
  return (
    <section id="assessment" className="py-16 md:py-24 bg-mc-forest text-white relative overflow-hidden">
      <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-mc-leaf-400/10 blur-[120px] pointer-events-none" />

      <div className="container-pad relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 xl:gap-20 items-start">
          <div className="pt-2">
            <span className="eyebrow text-mc-leaf-400 mb-5 block">Free Consultation</span>
            <h2 className="font-serif font-bold text-white text-3xl md:text-4xl leading-[1.1] mb-6">
              Request a Free Care Assessment in {county}
            </h2>
            <p className="text-white/70 leading-relaxed mb-8 max-w-[400px]">
              A dedicated care coordinator will reach out within one business day to discuss your family&apos;s needs. No obligation — just a real conversation.
            </p>
            <div className="rounded-2xl bg-white/[0.07] border border-white/10 px-5 py-4 flex items-center gap-4">
              <div className="w-10 h-10 rounded-xl bg-mc-leaf-400/20 border border-mc-leaf-400/30 flex items-center justify-center shrink-0">
                <Phone className="h-[18px] w-[18px] text-mc-leaf-300" />
              </div>
              <div>
                <p className="text-white/50 text-[10px] uppercase tracking-widest font-semibold mb-0.5">
                  Prefer to call?
                </p>
                <a href={`tel:${brand.phone}`} className="text-white font-bold text-base hover:text-mc-leaf-300 transition-colors">
                  {brand.phoneDisplay}
                </a>
              </div>
            </div>
          </div>

          <div className="rounded-3xl bg-white shadow-premium-xl border border-mc-stone p-8 md:p-10">
            <div className="mb-7">
              <h3 className="text-xl font-bold text-mc-forest mb-1.5">Tell Us About Your Needs</h3>
              <p className="text-sm text-gray-500 leading-relaxed">
                Complete the form and a care coordinator will contact you within one business day.
              </p>
            </div>
            <AssessmentForm />
          </div>
        </div>
      </div>
    </section>
  );
}
