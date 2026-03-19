import {
  Stethoscope,
  UserCheck,
  ShieldCheck,
  Clock,
  Heart,
  ClipboardList,
  Shield,
  CheckCircle,
  type LucideIcon,
} from 'lucide-react';

const ICON_MAP: Record<string, LucideIcon> = {
  Stethoscope, UserCheck, ShieldCheck, Clock, Heart, ClipboardList, Shield, CheckCircle,
};

type RnStep = { icon: string; title: string; desc: string };

type Props = {
  subtitle: string;
  steps: RnStep[];
};

export default function RnSupervisionSection({ subtitle, steps }: Props) {
  const resolved = steps.map((s) => ({ ...s, icon: ICON_MAP[s.icon] ?? ClipboardList }));
  return (
    <section className="py-24 md:py-32 bg-white">
      <div className="container-pad">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="w-14 h-14 rounded-2xl bg-mc-leaf-50 border border-mc-leaf-100 flex items-center justify-center mx-auto mb-5">
            <Stethoscope className="h-7 w-7 text-mc-leaf-600" />
          </div>
          <span className="eyebrow mb-3 block">Clinical Oversight</span>
          <h2 className="text-3xl md:text-4xl font-bold text-mc-forest">Our RN Supervision Model</h2>
          <p className="mt-4 text-gray-600 leading-relaxed">{subtitle}</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {resolved.map(({ icon: Icon, title, desc }, i) => (
            <div key={title}
              className="relative rounded-[20px] bg-mc-sage border border-mc-stone p-8 transition-all duration-200 hover:border-mc-leaf-200 hover:shadow-premium"
            >
              <div className="absolute top-5 right-6 text-5xl font-bold text-mc-leaf-100 font-serif select-none leading-none">
                {String(i + 1).padStart(2, '0')}
              </div>
              <div className="relative">
                <div className="w-14 h-14 rounded-2xl bg-white border border-mc-stone flex items-center justify-center mb-5 shadow-premium">
                  <Icon className="h-7 w-7 text-mc-leaf-600" />
                </div>
                <h3 className="font-bold text-mc-forest mb-3 text-lg">{title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
