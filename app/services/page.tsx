import type { Metadata } from 'next';
import Link from 'next/link';
import {
  Heart, Users, Brain, RefreshCw, Hospital, Ribbon, ArrowRight, Activity
} from 'lucide-react';
import { brand } from '@/config/brand';
import CTABanner from '@/components/sections/CTABanner';
import SectionHeader from '@/components/ui/SectionHeader';

export const metadata: Metadata = {
  title: 'Home Care Services Maryland | MarkoCare',
  description:
    'Explore MarkoCare\'s full range of in-home care services in Maryland. RSA-licensed, RN-supervised care tailored to seniors in 4 counties. Learn more or call today.',
  keywords: [
    'home care services Maryland',
    'in-home senior care services MD',
    'personal care services Maryland',
    'licensed home care services Maryland',
  ],
  alternates: { canonical: `${brand.siteUrl}/services` },
  openGraph: {
    title: 'Home Care Services Maryland | MarkoCare',
    description: 'Explore MarkoCare\'s full range of RSA-licensed in-home care services in Maryland. Personalized care plans for seniors across 4 counties.',
    images: [{ url: '/og-image.jpg', width: 1200, height: 630, alt: 'MarkoCare caregiver reviewing care plan with senior client in Maryland home' }],
  },
  robots: { index: true, follow: true },
};

const services = [
  {
    icon: Heart,
    name: 'Personal Care',
    slug: 'personal-care',
    desc: 'Bathing, dressing, grooming, mobility assistance — our caregivers deliver every activity of daily living with the respect and sensitivity your loved one deserves.',
    forWho: 'Seniors, adults with chronic illness, post-surgical patients, or anyone needing dignified daily living support at home.',
    color: 'text-rose-600 bg-rose-50',
  },
  {
    icon: Users,
    name: 'Companion Care',
    slug: 'companion-care',
    desc: 'Loneliness diminishes quality of life. Our caregivers provide meaningful conversation, engaging activities, light housekeeping, errands, and transportation — so every day feels purposeful.',
    forWho: 'Seniors experiencing isolation, or anyone who benefits from consistent, friendly support and non-medical daily assistance.',
    color: 'text-mc-leaf-700 bg-mc-leaf-50',
  },
  {
    icon: Brain,
    name: 'Dementia Care',
    slug: 'dementia-care',
    desc: "Our specially trained caregivers create safe, structured routines that reduce anxiety, support memory, and bring peace of mind to families navigating Alzheimer's or other forms of dementia.",
    forWho: "Clients with Alzheimer's disease, vascular dementia, Lewy body dementia, or any form of memory impairment who wish to remain safely at home.",
    color: 'text-purple-600 bg-purple-50',
  },
  {
    icon: RefreshCw,
    name: 'Respite Care',
    slug: 'respite-care',
    desc: 'Family caregivers need rest too. Our respite services give you a break — hourly, daily, or weekly — while your loved one remains in safe, caring, professional hands.',
    forWho: 'Family members who serve as primary caregivers and need planned or emergency relief to recharge.',
    color: 'text-sky-600 bg-sky-50',
  },
  {
    icon: Hospital,
    name: 'Post-Hospital Support',
    slug: 'post-hospital-support',
    desc: 'Recovery at home is possible with the right support. Our RN-coordinated care plans address medication management, wound care monitoring, therapy reinforcement, and readmission prevention.',
    forWho: 'Patients discharged after surgery, acute illness, fall recovery, cardiac events, or any hospitalization resulting in functional limitations.',
    color: 'text-mc-leaf-600 bg-mc-sage',
  },
  {
    icon: Ribbon,
    name: 'Cancer Care Support',
    slug: 'cancer-care-support',
    desc: 'We walk alongside clients through every stage of treatment and recovery — managing fatigue, tracking medications, providing transportation to appointments, and offering steady emotional encouragement.',
    forWho: 'Cancer patients undergoing chemotherapy, radiation, or surgical recovery, as well as those in remission managing ongoing side effects.',
    color: 'text-amber-600 bg-amber-50',
  },
  {
    icon: Activity,
    name: 'IPOP Transitional Care',
    slug: 'ipop-transitional-care',
    desc: 'Going home after a hospital stay should feel like relief, not risk. Our iPOP program bridges the gap between discharge and full recovery with structured, high-acuity home-based support.',
    forWho: 'Complex post-hospital patients — including Johns Hopkins IPOP program participants — requiring intensive transitional care at home.',
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
            No two people age, heal, or need support in exactly the same way. That is why
            MarkoCare offers a full spectrum of in-home care — each service delivered according
            to a personalized plan developed with your family and supervised by a Registered Nurse.
          </p>
        </div>
      </section>

      {/* ── Services grid ─────────────────────────────────────── */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container-pad">
          <SectionHeader
            badge="All Services"
            title="What We Offer"
            subtitle="Whether your loved one needs a little help around the house, specialized dementia support, or intensive post-hospital care, our trained W2 caregivers are ready — following RN-supervised care plans built around the person, not just the condition."
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
        title="Not Sure Which Service Is Right for You?"
        subtitle="Our care coordinators are trained to help you navigate your options. A brief conversation is all it takes to identify the right level and type of care for your loved one."
        variant="green"
      />
    </>
  );
}
