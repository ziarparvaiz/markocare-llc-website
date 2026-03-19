import { Phone, FileText, HeartPulse, CheckCircle, Activity, type LucideIcon } from 'lucide-react';
import { brand } from '@/config/brand';

const ICON_MAP: Record<string, LucideIcon> = {
  Activity, CheckCircle, Phone, HeartPulse,
};

type HeroBadge = { icon: string; label: string };
type HeroStat = { label: string; value: string };

type Props = {
  hero: {
    eyebrow: string;
    title: string;
    description: string;
    stats: HeroStat[];
    badges: HeroBadge[];
    primaryCta: string;
    secondaryCta: string;
  };
};

export default function ReferralHero({ hero }: Props) {
  return (
    <section className="bg-mc-forest text-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-[0.04]"
        style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)', backgroundSize: '28px 28px' }}
      />
      <div className="container-pad relative py-20 md:py-28">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
          {/* Left — copy */}
          <div>
            <span className="eyebrow mb-4 block" style={{ color: '#7ccc72' }}>
              {hero.eyebrow}
            </span>
            <h1 className="font-serif text-[38px] sm:text-[48px] xl:text-[56px] font-bold leading-[1.1] tracking-tight text-white mb-6">
              {hero.title.split('for Your Patients').length > 1 ? (
                <>{hero.title.replace(' for Your Patients', '')}<br className="hidden sm:block" />
                  <span className="text-mc-leaf-300"> for Your Patients</span></>
              ) : (
                <span dangerouslySetInnerHTML={{ __html: hero.title }} />
              )}
            </h1>
            <p className="text-white/75 text-lg leading-[1.8] mb-8 max-w-xl">
              {hero.description}
            </p>
            <div className="flex flex-wrap gap-3">
              <a href="#referral-form" className="btn-mc-white">
                <FileText className="h-4 w-4" />
                {hero.primaryCta}
              </a>
              <a href={`tel:${brand.phone}`} className="btn-mc-ghost border border-white/20 text-white hover:bg-white/10">
                <Phone className="h-4 w-4" />
                {hero.secondaryCta}
              </a>
            </div>
          </div>

          {/* Right — stats card */}
          <div className="relative flex justify-center lg:justify-end">
            <div className="relative w-full max-w-sm rounded-3xl border border-white/10 bg-white/8 backdrop-blur-sm p-8"
              style={{ backgroundColor: 'rgba(255,255,255,0.07)' }}
            >
              <div className="flex items-center gap-3 mb-6 pb-5 border-b border-white/10">
                <div className="w-9 h-9 rounded-xl bg-mc-leaf-400/20 flex items-center justify-center">
                  <HeartPulse className="h-5 w-5 text-mc-leaf-300" />
                </div>
                <div>
                  <p className="text-xs text-white/50 uppercase tracking-widest font-semibold">MarkoCare</p>
                  <p className="text-sm font-semibold text-white">Care Coordination Hub</p>
                </div>
                <span className="ml-auto inline-flex items-center gap-1.5 rounded-full bg-mc-leaf-400/20 border border-mc-leaf-400/30 px-3 py-1 text-[11px] font-semibold text-mc-leaf-300">
                  <span className="w-1.5 h-1.5 rounded-full bg-mc-leaf-400 animate-pulse" />
                  Active
                </span>
              </div>

              <div className="grid grid-cols-3 gap-3 mb-6">
                {hero.stats.map(({ label, value }) => (
                  <div key={label} className="rounded-xl bg-white/5 border border-white/8 p-3 text-center"
                    style={{ borderColor: 'rgba(255,255,255,0.08)' }}
                  >
                    <p className="text-lg font-bold text-white">{value}</p>
                    <p className="text-[10px] text-white/50 leading-tight mt-0.5">{label}</p>
                  </div>
                ))}
              </div>

              <div className="flex flex-col gap-3">
                {hero.badges.map(({ icon, label }) => {
                  const Icon = ICON_MAP[icon] ?? Activity;
                  return (
                    <div key={label}
                      className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-4 py-3"
                      style={{ backgroundColor: 'rgba(255,255,255,0.05)' }}
                    >
                      <div className="w-8 h-8 rounded-lg bg-mc-leaf-400/20 flex items-center justify-center shrink-0">
                        <Icon className="h-4 w-4 text-mc-leaf-300" />
                      </div>
                      <span className="text-sm font-medium text-white/90">{label}</span>
                      <CheckCircle className="h-4 w-4 text-mc-leaf-400 ml-auto shrink-0" />
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
