import {
  Clock, UserCheck, Stethoscope, ClipboardList, CheckCircle, Phone,
  Shield, ShieldCheck, Lock, BadgeCheck, Activity, Calendar,
  type LucideIcon,
} from 'lucide-react';
import SectionHeader from '@/components/ui/SectionHeader';

const ICON_MAP: Record<string, LucideIcon> = {
  Clock, UserCheck, Stethoscope, ClipboardList, CheckCircle, Phone,
  Shield, ShieldCheck, Lock, BadgeCheck, Activity, Calendar,
};

type AdvantageCard = { icon: string; title: string; desc: string };

type Props = { advantages: AdvantageCard[] };

export default function ReferralAdvantages({ advantages }: Props) {
  return (
    <section className="section-pad bg-white">
      <div className="container-pad">
        <SectionHeader
          badge="Why Partner With Us"
          title="What Our Referral Partners Can Expect"
          subtitle="Built from the ground up to support Maryland's clinical referral community — with the reliability, clinical coordination, and transparent communication your patients deserve."
        />
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {advantages.map(({ icon, title, desc }) => {
            const Icon = ICON_MAP[icon] ?? CheckCircle;
            return (
              <div key={title} className="mc-card-hover group">
                <div className="w-11 h-11 rounded-xl bg-mc-leaf-50 border border-mc-leaf-100 flex items-center justify-center mb-5 transition-colors group-hover:bg-mc-leaf-100">
                  <Icon className="h-5 w-5 text-mc-leaf-600" />
                </div>
                <h3 className="font-semibold text-mc-forest text-[15px] mb-2">{title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
