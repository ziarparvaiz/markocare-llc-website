import Link from 'next/link';
import { Phone, ArrowRight } from 'lucide-react';
import { brand } from '@/config/brand';

interface CTABannerProps {
  title?: string;
  subtitle?: string;
  primaryLabel?: string;
  primaryHref?: string;
  secondaryLabel?: string;
  secondaryHref?: string;
  variant?: 'green' | 'navy';
}

export default function CTABanner({
  title = 'Ready to Get Started?',
  subtitle = 'Request a free in-home assessment today. Our care coordinator will call you within one business day.',
  primaryLabel = 'Request Free Assessment',
  primaryHref = '/contact',
  secondaryLabel = 'Call Us Now',
  secondaryHref = undefined,
  variant = 'navy',
}: CTABannerProps) {
  return (
    <section
      className={`section-pad ${
        variant === 'navy'
          ? 'bg-mc-forest'
          : 'bg-mc-leaf-600'
      }`}
    >
      <div className="container-pad text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">{title}</h2>
        <p className="text-lg text-white/80 max-w-2xl mx-auto mb-8 leading-relaxed">
          {subtitle}
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link href={primaryHref} className="btn-outline-white text-base px-8 py-3">
            {primaryLabel}
            <ArrowRight className="h-4 w-4" />
          </Link>
          <a
            href={secondaryHref ?? `tel:${brand.phone}`}
            className="flex items-center gap-2 text-white/90 font-semibold hover:text-white transition-colors"
          >
            <Phone className="h-4 w-4" />
            {secondaryLabel ?? `Call ${brand.phoneDisplay}`}
          </a>
        </div>
      </div>
    </section>
  );
}
