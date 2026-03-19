import {
  DollarSign, Shield, Award, Heart, Clock, CheckCircle,
  type LucideIcon,
} from 'lucide-react';
import SectionHeader from '@/components/ui/SectionHeader';

const ICON_MAP: Record<string, LucideIcon> = {
  DollarSign, Shield, Award, Heart, Clock, CheckCircle,
};

type Benefit = { icon: string; title: string; desc: string };

type Props = { benefits: Benefit[] };

export default function CareersBenefits({ benefits }: Props) {
  const resolved = benefits.map((b) => ({ ...b, icon: ICON_MAP[b.icon] ?? Heart }));
  return (
    <section className="section-pad bg-white">
      <div className="container-pad">
        <SectionHeader
          badge="Why Work With Us"
          title="Why Caregivers Choose MarkoCare"
          subtitle="We believe that caring for our clients starts with caring for our team. That means fair pay, ongoing training, flexible scheduling, and a culture where every team member feels genuinely valued."
        />
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {resolved.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="mc-card-hover">
              <div className="inline-flex items-center justify-center w-10 h-10 rounded-xl bg-mc-sage mb-4">
                <Icon className="h-5 w-5 text-mc-leaf-500" />
              </div>
              <h3 className="font-semibold text-mc-forest mb-2">{title}</h3>
              <p className="text-sm text-gray-600 leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
