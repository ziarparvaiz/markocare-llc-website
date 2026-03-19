import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

type Props = {
  badge: string;
  title: string;
  description: string;
};

export default function CareersHero({ badge, title, description }: Props) {
  return (
    <section className="bg-mc-forest text-white py-20 md:py-28 relative overflow-hidden">
      <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-white/[0.03] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-64 h-64 rounded-full bg-white/[0.02] pointer-events-none" />
      <div className="container-pad max-w-3xl relative">
        <span className="mc-badge-dark mb-5 inline-flex">{badge}</span>
        <h1 className="heading-display text-white text-4xl md:text-5xl lg:text-6xl mb-6">
          {title}
        </h1>
        <p className="text-lg md:text-xl text-white/75 leading-relaxed max-w-2xl">
          {description}
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <Link href="#open-positions" className="btn-mc-primary">
            View Open Positions
            <ArrowRight className="h-4 w-4" />
          </Link>
          <Link href="/careers/apply" className="btn-outline-white">
            Apply Now
          </Link>
        </div>
      </div>
    </section>
  );
}
