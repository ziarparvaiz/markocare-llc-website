import Link from 'next/link';
import { ArrowRight, Phone, Clock } from 'lucide-react';
import { brand } from '@/config/brand';

type Props = {
  cta: { badge: string; title: string; lead: string; trustItems: string[] };
};

export default function AboutCTASection({ cta }: Props) {
  return (
    <section className="py-24 md:py-32 bg-mc-forest text-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-[0.035] pointer-events-none"
        style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)', backgroundSize: '24px 24px' }}
      />
      <div className="container-pad relative">
        <div className="max-w-2xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-4 py-1.5 text-xs font-semibold text-white/90 mb-6">
            <Clock className="h-3.5 w-3.5 text-mc-leaf-300" aria-hidden="true" />
            {cta.badge}
          </div>
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-white mb-5">{cta.title}</h2>
          <p className="text-white/70 mb-10 leading-relaxed text-lg">{cta.lead}</p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/contact" className="btn-mc-primary px-8 py-3.5 text-base">
              Request Free Assessment <ArrowRight className="h-4 w-4" />
            </Link>
            <a href={`tel:${brand.phone}`} className="flex items-center gap-2 text-white/80 hover:text-white font-semibold transition-colors">
              <Phone className="h-4 w-4" />
              {brand.phoneDisplay}
            </a>
          </div>
          <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 mt-8 text-xs text-white/50">
            {cta.trustItems.map((item) => (
              <span key={item}>✓ {item}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
