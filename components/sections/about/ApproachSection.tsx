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

type Pillar = { icon: string; title: string; desc: string };

type Props = {
  subtitle: string;
  pillars: Pillar[];
};

export default function ApproachSection({ subtitle, pillars }: Props) {
  const resolved = pillars.map((p) => ({ ...p, icon: ICON_MAP[p.icon] ?? Heart }));
  return (
    <section className="py-24 md:py-32 bg-mc-sage">
      <div className="container-pad">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="eyebrow mb-4 block">How We Work</span>
          <h2 className="text-3xl md:text-4xl font-bold text-mc-forest">Our Approach</h2>
          <p className="mt-4 text-gray-600 leading-relaxed">{subtitle}</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {resolved.map(({ icon: Icon, title, desc }) => (
            <div key={title}
              className="group rounded-[20px] bg-white p-8 shadow-premium border border-mc-stone transition-all duration-300 hover:shadow-premium-lg hover:border-mc-leaf-200 hover:-translate-y-1"
            >
              <div className="w-16 h-16 rounded-2xl bg-mc-leaf-50 border border-mc-leaf-100 flex items-center justify-center mb-6 transition-all duration-300 group-hover:bg-mc-leaf-500 group-hover:border-mc-leaf-500">
                <Icon className="h-8 w-8 text-mc-leaf-600 transition-colors duration-300 group-hover:text-white" />
              </div>
              <h3 className="font-bold text-mc-forest mb-3 text-xl">{title}</h3>
              <p className="text-gray-600 leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
