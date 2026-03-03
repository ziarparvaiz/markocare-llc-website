import Link from 'next/link';
import {
  Heart, Users, Brain, RefreshCw, Hospital, Ribbon, ArrowRight
} from 'lucide-react';
import SectionHeader from '@/components/ui/SectionHeader';

const services = [
  {
    icon: Heart,
    name: 'Personal Care',
    slug: 'personal-care',
    desc: 'Dignified assistance with bathing, grooming, dressing, and daily activities — tailored to each client.',
    color: 'text-rose-600 bg-rose-50',
  },
  {
    icon: Users,
    name: 'Companion Care',
    slug: 'companion-care',
    desc: 'Meaningful social engagement, light housekeeping, errands, and transportation to reduce isolation.',
    color: 'text-brand-green-700 bg-brand-green-50',
  },
  {
    icon: Brain,
    name: 'Dementia Care',
    slug: 'dementia-care',
    desc: 'Specialized memory care with trained caregivers following structured cognitive safety protocols.',
    color: 'text-purple-600 bg-purple-50',
  },
  {
    icon: RefreshCw,
    name: 'Respite Care',
    slug: 'respite-care',
    desc: 'Relief for family caregivers — from a few hours to extended support — so you can recharge.',
    color: 'text-sky-600 bg-sky-50',
  },
  {
    icon: Hospital,
    name: 'Post-Hospital Support',
    slug: 'post-hospital-support',
    desc: 'Safe transitions from hospital to home, reducing readmission risk with RN-supervised care plans.',
    color: 'text-mc-leaf-600 bg-mc-sage',
  },
  {
    icon: Ribbon,
    name: 'Cancer Care Support',
    slug: 'cancer-care-support',
    desc: 'Compassionate assistance for cancer patients — managing fatigue, treatment schedules, and comfort.',
    color: 'text-amber-600 bg-amber-50',
  },
];

export default function ServiceHighlights() {
  return (
    <section className="section-pad bg-white">
      <div className="container-pad">
        <SectionHeader
          badge="Our Services"
          title="Comprehensive Home Care for Every Need"
          subtitle="From personal assistance to post-hospital recovery, our W2 caregivers are trained, supervised, and ready to serve your family."
        />

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <Link
                key={service.slug}
                href={`/services/${service.slug}`}
                className="card-hover group flex flex-col gap-4"
              >
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${service.color}`}>
                  <Icon className="h-6 w-6" />
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-mc-forest mb-2 group-hover:text-mc-leaf-600 transition-colors">
                    {service.name}
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed">{service.desc}</p>
                </div>
                <div className="flex items-center gap-1 text-sm font-semibold text-brand-green-600 group-hover:gap-2 transition-all">
                  Learn More <ArrowRight className="h-4 w-4" />
                </div>
              </Link>
            );
          })}
        </div>

        <div className="mt-10 text-center">
          <Link href="/services" className="btn-outline">
            View All Services
          </Link>
        </div>
      </div>
    </section>
  );
}
