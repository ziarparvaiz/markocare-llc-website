import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Stethoscope, Star, ShieldCheck, type LucideIcon } from 'lucide-react';

const HERO_BADGE_ICON_MAP: Record<string, LucideIcon> = {
  Stethoscope, Star, ShieldCheck,
};

type Stat = { value: string; label: string };
type HeroBadge = { icon: string; label: string; sublabel?: string };

type Props = {
  hero: {
    eyebrow: string;
    titleLight: string;
    titleBold: string;
    titleAccent: string;
    lead: string;
    badges: HeroBadge[];
    images: { hero: string; team: string };
    cta: {
      primary: { label: string; href: string };
      secondary: { label: string; href: string };
    };
  };
  stats: Stat[];
};

export default function AboutHero({ hero, stats }: Props) {
  return (
    <section className="relative bg-mc-cream overflow-hidden min-h-screen flex items-center">
      <div className="absolute -top-32 -right-32 w-[560px] h-[560px] rounded-full bg-mc-leaf-100/50 pointer-events-none" aria-hidden="true" />
      <div className="absolute -bottom-40 -left-20 w-[400px] h-[400px] rounded-full bg-mc-sage/80 pointer-events-none" aria-hidden="true" />
      <div className="container-pad relative w-full py-28 lg:py-36">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_420px] xl:grid-cols-[1fr_480px] gap-14 xl:gap-20 items-center">

          {/* LEFT: Typography block */}
          <div>
            <div className="flex items-center gap-3 mb-8">
              <div className="w-10 h-[2px] rounded-full bg-mc-leaf-500" aria-hidden="true" />
              <span className="text-[11px] font-bold uppercase tracking-[0.22em] text-mc-leaf-600">
                {hero.eyebrow}
              </span>
            </div>
            <h1 className="mb-8 leading-[1.08]">
              <span className="block font-serif text-[46px] sm:text-[58px] xl:text-[68px] font-light text-mc-forest/60 tracking-[-0.02em]">
                {hero.titleLight}
              </span>
              <span className="block font-serif text-[46px] sm:text-[58px] xl:text-[68px] font-bold text-mc-forest tracking-[-0.03em]">
                {hero.titleBold}
              </span>
              <span className="block font-serif text-[46px] sm:text-[58px] xl:text-[68px] font-bold text-mc-leaf-500 tracking-[-0.03em] italic">
                {hero.titleAccent}
              </span>
            </h1>
            <p className="text-gray-600 text-[16px] md:text-[17px] leading-[1.8] mb-10 max-w-[520px]">
              {hero.lead}
            </p>
            <div className="flex flex-wrap items-center gap-x-8 gap-y-4 mb-10 pb-10 border-b border-mc-stone">
              {stats.map((s) => (
                <div key={s.label}>
                  <p className="text-[28px] font-serif font-bold text-mc-leaf-500 leading-none">{s.value}</p>
                  <p className="text-[11px] text-gray-400 mt-1 font-medium tracking-wide">{s.label}</p>
                </div>
              ))}
            </div>
            <div className="flex flex-col sm:flex-row gap-3">
              <Link href={hero.cta.primary.href}
                className="btn-mc-primary inline-flex items-center gap-2 group h-[52px] px-8 rounded-xl text-[14px] font-semibold"
              >
                {hero.cta.primary.label}
                <ArrowRight className="h-4 w-4 group-hover:translate-x-0.5 transition-transform" aria-hidden="true" />
              </Link>
              <Link href={hero.cta.secondary.href}
                className="inline-flex items-center gap-2 h-[52px] px-7 rounded-xl border-2 border-mc-stone text-[14px] font-semibold text-mc-forest hover:border-mc-leaf-300 hover:text-mc-leaf-700 transition-all duration-200"
              >
                {hero.cta.secondary.label}
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
            </div>
          </div>

          {/* RIGHT: Capsule image + floating badges */}
          <div className="relative flex justify-center lg:justify-end">
            <div className="absolute -top-6 -left-6 w-36 h-36 opacity-30 pointer-events-none"
              style={{ backgroundImage: 'radial-gradient(circle, #52b848 1.5px, transparent 1.5px)', backgroundSize: '10px 10px' }}
              aria-hidden="true"
            />
            <div className="relative w-full max-w-[380px] xl:max-w-[440px] shadow-premium-xl"
              style={{ borderRadius: '200px 200px 160px 160px', aspectRatio: '3/4', overflow: 'hidden' }}
            >
              <Image
                src={hero.images.hero}
                alt="MarkoCare caregiver providing compassionate home care to an elderly client in Maryland"
                fill className="object-cover object-top"
                sizes="(max-width: 1024px) 380px, 440px" priority
              />
              <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-mc-forest/30 to-transparent" aria-hidden="true" />
            </div>

            {/* Badge 0 — top left */}
            {hero.badges[0] && (() => {
              const Icon = HERO_BADGE_ICON_MAP[hero.badges[0].icon] ?? Stethoscope;
              return (
                <div className="absolute top-8 -left-6 xl:-left-10 flex items-center gap-3 bg-white rounded-2xl px-4 py-3 shadow-premium-lg border border-mc-stone">
                  <div className="w-9 h-9 rounded-xl bg-mc-leaf-50 flex items-center justify-center shrink-0">
                    <Icon className="h-4 w-4 text-mc-leaf-600" />
                  </div>
                  <div>
                    <p className="text-[11px] font-bold text-mc-forest leading-tight">{hero.badges[0].label}</p>
                    {hero.badges[0].sublabel && <p className="text-[10px] text-gray-400 mt-0.5">{hero.badges[0].sublabel}</p>}
                  </div>
                </div>
              );
            })()}

            {/* Badge 1 — bottom right */}
            {hero.badges[1] && (() => {
              const Icon = HERO_BADGE_ICON_MAP[hero.badges[1].icon] ?? Star;
              return (
                <div className="absolute bottom-10 -right-4 xl:-right-8 flex items-center gap-3 bg-mc-forest text-white rounded-2xl px-4 py-3 shadow-premium-lg">
                  <div className="w-9 h-9 rounded-xl bg-amber-400/20 flex items-center justify-center shrink-0">
                    <Icon className="h-4 w-4 text-amber-300 fill-amber-300" />
                  </div>
                  <div>
                    <p className="text-[11px] font-bold leading-tight">{hero.badges[1].label}</p>
                    {hero.badges[1].sublabel && <p className="text-[10px] text-white/55 mt-0.5">{hero.badges[1].sublabel}</p>}
                  </div>
                </div>
              );
            })()}

            {/* Badge 2 — bottom left */}
            {hero.badges[2] && (() => {
              const Icon = HERO_BADGE_ICON_MAP[hero.badges[2].icon] ?? ShieldCheck;
              return (
                <div className="absolute bottom-28 -left-4 xl:-left-8 flex items-center gap-2.5 bg-white rounded-xl px-3.5 py-2.5 shadow-premium border border-mc-stone">
                  <div className="w-7 h-7 rounded-lg bg-mc-leaf-50 flex items-center justify-center shrink-0">
                    <Icon className="h-3.5 w-3.5 text-mc-leaf-600" />
                  </div>
                  <p className="text-[11px] font-bold text-mc-forest">{hero.badges[2].label}</p>
                </div>
              );
            })()}
          </div>
        </div>
      </div>
    </section>
  );
}
