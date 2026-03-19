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

type TrustMetric = { icon: string; title: string; desc: string };

type Props = { metrics: TrustMetric[] };

export default function TrustMetricsSection({ metrics }: Props) {
  const resolved = metrics.map((m) => ({ ...m, icon: ICON_MAP[m.icon] ?? Stethoscope }));
  return (
    <section className="bg-mc-forest py-14">
      <div className="container-pad">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-y-8 gap-x-6 lg:gap-10">
          {resolved.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="flex flex-col sm:flex-row items-center sm:items-start gap-4 text-center sm:text-left">
              <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center shrink-0">
                <Icon className="h-5 w-5 text-mc-leaf-300" />
              </div>
              <div>
                <p className="text-sm font-semibold text-white">{title}</p>
                <p className="text-xs text-white/50 mt-1 leading-relaxed">{desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
