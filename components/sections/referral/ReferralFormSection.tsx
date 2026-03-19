import { Phone, CheckCircle, type LucideIcon } from 'lucide-react';
import {
  Clock, UserCheck, Stethoscope, ClipboardList,
  Shield, ShieldCheck, Lock, BadgeCheck, Activity, Calendar,
} from 'lucide-react';
import { brand } from '@/config/brand';
import ReferralForm from '@/components/forms/ReferralForm';

const ICON_MAP: Record<string, LucideIcon> = {
  Clock, UserCheck, Stethoscope, ClipboardList, CheckCircle, Phone,
  Shield, ShieldCheck, Lock, BadgeCheck, Activity, Calendar,
};

type TrustIndicator = { icon: string; label: string };

type Props = {
  trustIndicators: TrustIndicator[];
  urgentBox: { title: string; desc: string; note: string };
};

export default function ReferralFormSection({ trustIndicators, urgentBox }: Props) {
  return (
    <section className="section-pad bg-white" id="referral-form">
      <div className="container-pad">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div className="lg:sticky lg:top-8">
            <span className="eyebrow mb-3 block">Submit a Referral</span>
            <h2 className="section-heading mb-3">Fast, Secure Referral Intake</h2>
            <p className="text-gray-600 leading-relaxed mb-8">
              Complete the form to refer a patient to MarkoCare. Our dedicated intake
              coordinator reviews every submission and responds within 2 business hours.
              For urgent discharge placements, use the direct line below.
            </p>
            <div className="space-y-3 mb-8">
              {trustIndicators.map(({ icon, label }) => {
                const Icon = ICON_MAP[icon] ?? CheckCircle;
                return (
                  <div key={label} className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-xl bg-mc-sage border border-mc-stone flex items-center justify-center shrink-0">
                      <Icon className="h-4 w-4 text-mc-leaf-600" />
                    </div>
                    <span className="text-sm font-medium text-mc-forest">{label}</span>
                  </div>
                );
              })}
            </div>
            <div className="rounded-2xl border border-mc-leaf-200 bg-mc-leaf-50 p-5">
              <div className="flex items-start gap-3 mb-3">
                <div className="w-8 h-8 rounded-lg bg-mc-leaf-400 flex items-center justify-center shrink-0">
                  <Phone className="h-4 w-4 text-white" />
                </div>
                <div>
                  <p className="font-semibold text-mc-forest text-sm">{urgentBox.title}</p>
                  <p className="text-xs text-gray-600 mt-0.5">{urgentBox.desc}</p>
                </div>
              </div>
              <a href={`tel:${brand.phone}`} className="btn-mc-primary w-full justify-center text-sm py-3">
                <Phone className="h-4 w-4" />
                Call {brand.phoneDisplay}
              </a>
              <p className="text-[11px] text-gray-500 text-center mt-2">{urgentBox.note}</p>
            </div>
          </div>
          <div className="rounded-3xl border border-mc-stone bg-mc-sage p-7 shadow-premium">
            <ReferralForm />
          </div>
        </div>
      </div>
    </section>
  );
}
