import { ShieldCheck, UserCheck, Stethoscope, Clock, CreditCard, Award } from 'lucide-react';
import { brand } from '@/config/brand';

const badges = [
  {
    icon: UserCheck,
    title: 'W2 Employees',
    desc: 'All caregivers are direct W2 employees — never contractors.',
  },
  {
    icon: Stethoscope,
    title: 'RN Supervision',
    desc: 'Care plans developed and overseen by a Registered Nurse.',
  },
  {
    icon: ShieldCheck,
    title: 'Background Checked',
    desc: 'Every caregiver undergoes thorough state and federal screening.',
  },
  {
    icon: CreditCard,
    title: 'Insured & Bonded',
    desc: 'Fully insured agency with liability and bonding coverage.',
  },
  {
    icon: Clock,
    title: '24/7 On-Call',
    desc: 'Round-the-clock support for families and emergency needs.',
  },
  {
    icon: Award,
    title: 'Private Pay & Medicaid Ready',
    desc: 'Accepting private pay with Medicaid readiness positioning.',
  },
];

export default function TrustBadges() {
  return (
    <section className="section-pad bg-brand-slate">
      <div className="container-pad">
        <div className="text-center mb-12">
          <span className="badge-green mb-3 inline-flex">Why Choose MarkoCare</span>
          <h2 className="section-heading">Built on Trust, Built for Maryland Families</h2>
          <p className="section-subheading max-w-2xl mx-auto">
            Every element of our model — from our hiring standards to our clinical oversight —
            is designed to give you peace of mind.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {badges.map((badge) => {
            const Icon = badge.icon;
            return (
              <div key={badge.title} className="card-hover group">
                <div className="flex items-start gap-4">
                  <div className="w-11 h-11 rounded-xl bg-brand-green-100 flex items-center justify-center shrink-0 group-hover:bg-brand-green-200 transition-colors">
                    <Icon className="h-5 w-5 text-brand-green-700" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-mc-forest mb-1">{badge.title}</h3>
                    <p className="text-sm text-gray-600 leading-relaxed">{badge.desc}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
