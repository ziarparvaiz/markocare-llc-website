import {
  Shield, ShieldCheck, Lock, BadgeCheck, Activity, CheckCircle,
  Clock, UserCheck, Stethoscope, ClipboardList,
  type LucideIcon,
} from 'lucide-react';

const ICON_MAP: Record<string, LucideIcon> = {
  Clock, UserCheck, Stethoscope, ClipboardList, CheckCircle,
  Shield, ShieldCheck, Lock, BadgeCheck, Activity,
};

type ReliabilityCard = { icon: string; title: string; desc: string };
type ComplianceBadge = { icon: string; label: string };

type Props = {
  subtitle: string;
  cards: ReliabilityCard[];
  complianceStrip: ComplianceBadge[];
};

export default function ClinicalReliabilitySection({ subtitle, cards, complianceStrip }: Props) {
  return (
    <section className="section-pad bg-mc-forest text-white">
      <div className="container-pad">
        <div className="text-center mb-12">
          <span className="eyebrow mb-3 block" style={{ color: '#7ccc72' }}>Clinical Reliability</span>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-white mb-4">
            Built for the Clinical Standard
          </h2>
          <p className="text-white/65 text-lg max-w-2xl mx-auto leading-relaxed">
            {subtitle}
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {cards.map(({ icon, title, desc }) => {
            const Icon = ICON_MAP[icon] ?? Shield;
            return (
              <div key={title}
                className="rounded-2xl border border-white/10 p-6 transition-all duration-200 hover:border-mc-leaf-400/30 hover:bg-white/5"
                style={{ backgroundColor: 'rgba(255,255,255,0.04)' }}
              >
                <div className="w-11 h-11 rounded-xl bg-mc-leaf-400/15 border border-mc-leaf-400/20 flex items-center justify-center mb-5">
                  <Icon className="h-5 w-5 text-mc-leaf-300" />
                </div>
                <h3 className="font-semibold text-white text-[15px] mb-2">{title}</h3>
                <p className="text-sm text-white/60 leading-relaxed">{desc}</p>
              </div>
            );
          })}
        </div>
        <div className="mt-10 rounded-2xl border border-white/10 bg-white/[0.03] px-6 py-5 flex flex-wrap items-center gap-x-8 gap-y-3">
          {complianceStrip.map(({ icon, label }) => {
            const Icon = ICON_MAP[icon] ?? Shield;
            return (
              <div key={label} className="flex items-center gap-2 text-sm text-white/60">
                <Icon className="h-4 w-4 text-mc-leaf-400 shrink-0" />
                {label}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
