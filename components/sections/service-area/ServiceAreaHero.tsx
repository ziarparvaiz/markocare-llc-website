import Link from 'next/link';
import { ArrowRight, Phone, ChevronRight } from 'lucide-react';
import { brand } from '@/config/brand';

type Props = {
  county: string;
  hero: { eyebrow: string; title: string; description: string };
};

export default function ServiceAreaHero({ county, hero }: Props) {
  return (
    <section className="bg-mc-forest text-white py-20 md:py-28 relative overflow-hidden">
      <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-white/[0.03] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-64 h-64 rounded-full bg-white/[0.02] pointer-events-none" />

      <div className="container-pad relative">
        <nav className="flex items-center gap-1.5 text-[11px] text-white/40 mb-8 tracking-wide" aria-label="Breadcrumb">
          <Link href="/" className="hover:text-white/65 transition-colors">Home</Link>
          <ChevronRight className="h-2.5 w-2.5 opacity-50" aria-hidden="true" />
          <Link href="/service-areas" className="hover:text-white/65 transition-colors">Service Areas</Link>
          <ChevronRight className="h-2.5 w-2.5 opacity-50" aria-hidden="true" />
          <span className="text-white/55">{county}</span>
        </nav>

        <div className="max-w-3xl">
          <span className="mc-badge-dark mb-5 inline-flex">{hero.eyebrow}</span>
          <h1 className="heading-display text-4xl md:text-5xl lg:text-6xl text-white mb-6">
            {hero.title}
          </h1>
          <p className="text-lg md:text-xl text-white/75 leading-relaxed max-w-2xl mb-8">
            {hero.description}
          </p>
          <div className="flex flex-wrap gap-3">
            <a href="#assessment" className="btn-mc-primary">
              Request Free Assessment
              <ArrowRight className="h-4 w-4" />
            </a>
            <a href={`tel:${brand.phone}`} className="btn-outline-white">
              <Phone className="h-4 w-4" />
              {brand.phoneDisplay}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
