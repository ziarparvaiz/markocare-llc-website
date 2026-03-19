import Link from 'next/link';
import Image from 'next/image';
import {
  ArrowRight, Phone, ShieldCheck, BadgeCheck, Lock, Users, ChevronRight,
  type LucideIcon,
} from 'lucide-react';
import { brand } from '@/config/brand';

const HERO_TRUST_PILLS = [
  { icon: ShieldCheck, label: 'RN-Supervised Care' },
  { icon: BadgeCheck, label: 'Background-Checked Staff' },
  { icon: Lock, label: 'Licensed & Insured' },
  { icon: Users, label: 'Local Maryland Team' },
];

type Props = {
  name: string;
  tagline: string;
  heroDesc: string;
  icon: LucideIcon;
};

export default function ServiceHero({ name, tagline, heroDesc, icon: Icon }: Props) {
  return (
    <section className="relative overflow-hidden text-white min-h-[80vh] md:h-screen">
      <Image
        src="/ServicesHeroImage/servicesheroimage.jpg"
        alt=""
        fill
        className="object-cover object-center"
        sizes="100vw"
        priority
      />
      <div className="absolute inset-0 bg-black/60" aria-hidden="true" />
      <div
        className="absolute inset-0 bg-[linear-gradient(180deg,rgba(26,58,40,0.30)_0%,rgba(10,28,18,0.72)_100%)]"
        aria-hidden="true"
      />
      <div
        className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-mc-forest/80 to-transparent"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute z-[9] top-[42%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-[560px] h-[340px] rounded-full bg-mc-leaf-400/[0.14] blur-[72px]"
        aria-hidden="true"
      />

      <div className="absolute inset-0 z-10 flex flex-col items-center justify-center px-5 pt-[80px] pb-[40px] text-center">
        <div className="w-full max-w-[760px] mx-auto">
          <nav
            className="flex items-center justify-center gap-1.5 text-[11px] text-white/40 mb-9 tracking-wide"
            aria-label="Breadcrumb"
          >
            <Link href="/" className="hover:text-white/65 transition-colors">Home</Link>
            <ChevronRight className="h-2.5 w-2.5 opacity-50" aria-hidden="true" />
            <Link href="/services" className="hover:text-white/65 transition-colors">Services</Link>
            <ChevronRight className="h-2.5 w-2.5 opacity-50" aria-hidden="true" />
            <span className="text-white/55">{name}</span>
          </nav>

          <div className="flex justify-center mb-7">
            <div className="inline-flex items-center justify-center w-[62px] h-[62px] rounded-[16px] bg-white/[0.09] border border-white/[0.16] backdrop-blur-sm shadow-premium-lg">
              <Icon className="h-[28px] w-[28px] text-white" aria-hidden="true" />
            </div>
          </div>

          <h1 className="text-[48px] sm:text-[56px] md:text-[64px] font-bold leading-[1.04] tracking-[-0.025em] text-white mb-6">
            {name}
          </h1>

          <div className="flex justify-center mb-8">
            <span className="inline-flex items-center gap-2 rounded-full bg-[rgba(124,204,114,0.13)] border border-[rgba(124,204,114,0.32)] px-5 py-[9px] text-[14px] font-medium text-mc-leaf-300 leading-snug max-w-[580px] text-center">
              {tagline}
            </span>
          </div>

          <p className="text-[15px] md:text-[16px] text-white/80 leading-[1.78] mb-10 max-w-[640px] mx-auto">
            {heroDesc}
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-11">
            <Link
              href="/contact"
              className="btn-mc-primary inline-flex items-center gap-2.5 group h-[54px] px-8 rounded-xl text-[15px] font-semibold shadow-[0_8px_28px_rgba(82,184,72,0.35)] hover:shadow-[0_12px_36px_rgba(82,184,72,0.50)] transition-shadow"
            >
              Request Free Assessment
              <ArrowRight className="h-4 w-4 group-hover:translate-x-0.5 transition-transform" aria-hidden="true" />
            </Link>
            <a
              href={`tel:${brand.phone}`}
              className="inline-flex items-center gap-2.5 h-[54px] px-8 rounded-xl border border-white/[0.28] bg-white/[0.06] hover:bg-white/[0.13] hover:border-white/[0.45] text-[15px] font-semibold text-white transition-all duration-200"
            >
              <Phone className="h-4 w-4 text-mc-leaf-300 shrink-0" aria-hidden="true" />
              {brand.phoneDisplay}
            </a>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3">
            {HERO_TRUST_PILLS.map(({ icon: PillIcon, label }) => (
              <div
                key={label}
                className="flex items-center gap-2 rounded-full bg-white/[0.08] border border-white/[0.20] backdrop-blur-sm px-[18px] py-[10px] text-[11px] font-semibold text-white/75 tracking-wide hover:bg-white/[0.13] hover:text-white/95 transition-all duration-200"
              >
                <PillIcon className="h-3.5 w-3.5 text-mc-leaf-300 shrink-0" aria-hidden="true" />
                {label}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
