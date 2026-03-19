import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { brand } from '@/config/brand';

type Props = {
  badge: string;
  title: string;
  lead: string;
};

export default function CareersCTASection({ badge, title, lead }: Props) {
  return (
    <section className="section-pad bg-mc-forest text-white relative overflow-hidden">
      <div className="absolute top-0 right-0 w-80 h-80 rounded-full bg-white/[0.03] -translate-y-1/2 translate-x-1/2 pointer-events-none" />
      <div className="container-pad max-w-2xl text-center relative">
        <span className="mc-badge-dark mb-5 inline-flex">{badge}</span>
        <h2 className="heading-display text-white text-3xl md:text-4xl mb-5">{title}</h2>
        <p className="text-white/75 text-lg leading-relaxed mb-8">{lead}</p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Link href="/careers/apply" className="btn-mc-white">
            Submit Application
            <ArrowRight className="h-4 w-4" />
          </Link>
          <Link href="#open-positions" className="btn-outline-white">View Open Positions</Link>
        </div>
        <p className="mt-6 text-white/50 text-sm">
          Questions? Email us at{' '}
          <a href={`mailto:${brand.email}`} className="text-white/75 underline underline-offset-2 hover:text-white transition-colors">
            {brand.email}
          </a>
        </p>
      </div>
    </section>
  );
}
