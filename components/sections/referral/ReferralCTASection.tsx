import { Phone, FileText, CheckCircle } from 'lucide-react';
import { brand } from '@/config/brand';

type Props = {
  cta: {
    eyebrow: string;
    title: string;
    lead: string;
    primaryCta: string;
    secondaryCta: string;
    trustStrip: string[];
  };
};

export default function ReferralCTASection({ cta }: Props) {
  return (
    <section className="bg-mc-forest text-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-[0.04]"
        style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)', backgroundSize: '28px 28px' }}
      />
      <div className="container-pad relative py-20 text-center">
        <span className="eyebrow mb-4 block" style={{ color: '#7ccc72' }}>{cta.eyebrow}</span>
        <h2 className="font-serif text-[36px] md:text-[46px] font-bold text-white mb-5 leading-tight">
          {cta.title}
        </h2>
        <p className="text-white/65 text-lg mb-10 max-w-xl mx-auto leading-relaxed">{cta.lead}</p>
        <div className="flex flex-wrap justify-center gap-4">
          <a href="#referral-form" className="btn-mc-white">
            <FileText className="h-4 w-4" />
            {cta.primaryCta}
          </a>
          <a href={`tel:${brand.phone}`} className="btn-mc-ghost border border-white/20 text-white hover:bg-white/10">
            <Phone className="h-4 w-4" />
            {cta.secondaryCta}
          </a>
        </div>
        <div className="mt-12 flex flex-wrap justify-center gap-x-8 gap-y-3">
          {cta.trustStrip.map((item) => (
            <div key={item} className="flex items-center gap-2 text-sm text-white/50">
              <CheckCircle className="h-3.5 w-3.5 text-mc-leaf-400 shrink-0" />
              {item}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
