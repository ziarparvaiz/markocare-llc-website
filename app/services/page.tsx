import type { Metadata } from 'next';
import Link from 'next/link';
import {
  Heart, Users, Brain, RefreshCw, Hospital, Ribbon, ArrowRight, Activity
} from 'lucide-react';
import { brand } from '@/config/brand';
import CTABanner from '@/components/sections/CTABanner';
import SectionHeader from '@/components/ui/SectionHeader';

export const metadata: Metadata = {
  title: 'Home Care Services | MarkoCare Maryland',
  description:
    'MarkoCare offers personal care, companion care, dementia care, respite care, post-hospital support, cancer care, and IPOP transitional care across Maryland.',
  alternates: { canonical: `${brand.siteUrl}/services` },
};

const services = [
  {
    icon: Heart,
    name: 'Personal Care',
    slug: 'personal-care',
    desc: 'Dignified, hands-on assistance with ADLs including bathing, grooming, dressing, toileting, and mobility support.',
    forWho: 'Seniors, adults with disabilities, or anyone needing daily living support.',
    color: 'text-rose-600 bg-rose-50',
  },
  {
    icon: Users,
    name: 'Companion Care',
    slug: 'companion-care',
    desc: 'Meaningful companionship, light housekeeping, meal preparation, errands, and transportation.',
    forWho: 'Seniors experiencing isolation, or those needing non-medical daily support.',
    color: 'text-mc-leaf-700 bg-mc-leaf-50',
  },
  {
    icon: Brain,
    name: 'Dementia Care',
    slug: 'dementia-care',
    desc: "Structured, compassionate care for clients with Alzheimer's and dementia, following cognitive safety protocols.",
    forWho: "Clients with memory loss, Alzheimer's disease, or related dementias.",
    color: 'text-purple-600 bg-purple-50',
  },
  {
    icon: RefreshCw,
    name: 'Respite Care',
    slug: 'respite-care',
    desc: 'Temporary relief for family caregivers — from a few hours to extended coverage — ensuring continuity of care.',
    forWho: 'Family members who are primary caregivers in need of a break.',
    color: 'text-sky-600 bg-sky-50',
  },
  {
    icon: Hospital,
    name: 'Post-Hospital Support',
    slug: 'post-hospital-support',
    desc: 'RN-coordinated care plans to safely transition patients from hospital to home and reduce readmission risk.',
    forWho: 'Patients discharged after surgery, illness, or acute hospitalization.',
    color: 'text-mc-leaf-600 bg-mc-sage',
  },
  {
    icon: Ribbon,
    name: 'Cancer Care Support',
    slug: 'cancer-care-support',
    desc: 'Compassionate support for cancer patients managing fatigue, treatment schedules, and comfort needs at home.',
    forWho: 'Cancer patients undergoing treatment or in recovery at home.',
    color: 'text-amber-600 bg-amber-50',
  },
  {
    icon: Activity,
    name: 'IPOP Transitional Care',
    slug: 'ipop-transitional-care',
    desc: 'Specialized transitional care supporting Johns Hopkins IPOP patients with structured home-based recovery.',
    forWho: 'Johns Hopkins IPOP patients and complex post-hospital care needs.',
    color: 'text-teal-600 bg-teal-50',
  },
];

export default function ServicesPage() {
  return (
    <>
      {/* ── Hero ─────────────────────────────────────────────── */}
      <section className="bg-mc-forest text-white py-16 md:py-24">
        <div className="container-pad max-w-3xl">
          <span className="mc-badge-dark mb-4 inline-flex">Our Services</span>
          <h1 className="text-4xl md:text-5xl font-bold mb-5 leading-tight">
            Comprehensive Home Care Services
          </h1>
          <p className="text-lg text-white/80 leading-relaxed">
            From personal assistance to specialized post-hospital transitions, MarkoCare offers
            a full continuum of in-home care delivered by W2 employees under RN supervision.
          </p>
        </div>
      </section>

      {/* ── Services grid ─────────────────────────────────────── */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container-pad">
          <SectionHeader
            badge="All Services"
            title="What We Offer"
            subtitle="Every service is delivered by trained, background-checked W2 caregivers following RN-supervised care plans."
          />
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service) => {
              const Icon = service.icon;
              return (
                <Link
                  key={service.slug}
                  href={`/services/${service.slug}`}
                  className="mc-card-hover group flex flex-col gap-4"
                >
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${service.color}`}>
                    <Icon className="h-6 w-6" />
                  </div>
                  <div className="flex-1">
                    <h2 className="font-bold text-mc-forest mb-2 group-hover:text-mc-leaf-600 transition-colors">
                      {service.name}
                    </h2>
                    <p className="text-sm text-gray-600 leading-relaxed mb-3">{service.desc}</p>
                    <p className="text-xs font-medium text-gray-500">
                      <span className="font-semibold">For:</span> {service.forWho}
                    </p>
                  </div>
                  <div className="flex items-center gap-1 text-sm font-semibold text-mc-leaf-600 group-hover:gap-2 transition-all">
                    Learn More <ArrowRight className="h-4 w-4" />
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      <CTABanner
        title="Not Sure Which Service Is Right?"
        subtitle="Our care coordinators will help you find the right fit. Request a free assessment today."
        variant="green"
      />
    </>
  );
}
