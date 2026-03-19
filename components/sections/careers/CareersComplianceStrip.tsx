import {
  Shield, CheckCircle, Clock, Heart,
  type LucideIcon,
} from 'lucide-react';

const ICON_MAP: Record<string, LucideIcon> = {
  Shield, CheckCircle, Clock, Heart,
};

type ComplianceCard = { variant: 'warning' | 'neutral'; icon: string; title: string; desc: string };

type Props = { cards: ComplianceCard[] };

export default function CareersComplianceStrip({ cards }: Props) {
  return (
    <section className="py-10 bg-mc-sage border-y border-mc-stone">
      <div className="container-pad max-w-3xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {cards.map(({ variant, icon, title, desc }) => {
            const Icon = ICON_MAP[icon] ?? Shield;
            const isWarning = variant === 'warning';
            return (
              <div key={title}
                className={`rounded-2xl p-5 ${isWarning
                  ? 'border border-amber-200 bg-amber-50'
                  : 'rounded-2xl border border-mc-stone bg-white'}`}
              >
                <Icon className={`h-5 w-5 mb-2 ${isWarning ? 'text-amber-600' : 'text-mc-leaf-500'}`} />
                <h3 className={`font-semibold mb-1.5 text-sm ${isWarning ? 'text-amber-800' : 'text-mc-forest'}`}>
                  {title}
                </h3>
                <p className={`text-xs leading-relaxed ${isWarning ? 'text-amber-700' : 'text-gray-600'}`}>
                  {desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
