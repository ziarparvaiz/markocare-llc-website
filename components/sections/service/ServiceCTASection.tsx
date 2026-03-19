import Link from 'next/link';
import { Phone, Clock } from 'lucide-react';
import { brand } from '@/config/brand';
import CTABanner from '@/components/sections/CTABanner';

type Props = { serviceName: string };

export default function ServiceCTASection({ serviceName }: Props) {
  return (
    <>
      <section className="py-16 md:py-24 bg-mc-forest text-white">
        <div className="container-pad">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-4 py-1.5 text-xs font-semibold text-white/90 mb-6">
              <Clock className="h-3.5 w-3.5 text-mc-leaf-300" aria-hidden="true" />
              Free, No-Obligation Assessment
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Start {serviceName}?
            </h2>
            <p className="text-white/75 text-lg leading-relaxed mb-8 max-w-xl mx-auto">
              Our local Maryland care team is standing by. Let us create a personalized care plan for your loved one — with no pressure and no obligation.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/contact" className="btn-mc-primary px-8 py-3.5 text-base">
                Request Free Assessment
              </Link>
              <a href={`tel:${brand.phone}`} className="flex items-center gap-2 text-white/90 hover:text-white font-semibold transition-colors">
                <Phone className="h-4 w-4" aria-hidden="true" />
                {brand.phoneDisplay}
              </a>
            </div>
            <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 mt-8 text-xs text-white/60">
              <span>✓ No contracts required</span>
              <span>✓ Care starts when you&apos;re ready</span>
              <span>✓ Speaks with a real coordinator</span>
            </div>
          </div>
        </div>
      </section>
      <CTABanner
        title={`Quality ${serviceName} in Maryland`}
        subtitle="MarkoCare delivers professional, RN-supervised home care to families across Howard, Carroll, Anne Arundel, and Frederick Counties."
        variant="green"
      />
    </>
  );
}
