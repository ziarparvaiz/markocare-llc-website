import type { Metadata } from 'next';
import { CheckCircle, Heart, Shield, DollarSign, Award, Clock } from 'lucide-react';
import { brand } from '@/config/brand';
import CaregiverForm from '@/components/forms/CaregiverForm';
import SectionHeader from '@/components/ui/SectionHeader';

export const metadata: Metadata = {
  title: 'Caregiver Jobs Maryland | MarkoCare',
  description:
    'MarkoCare is hiring compassionate caregivers in Maryland. Competitive pay, flexible schedules & RN support. Join our team serving 4 counties. Apply today.',
  keywords: [
    'caregiver jobs Maryland',
    'home care jobs Maryland',
    'CNA jobs Maryland home care',
    'personal care aide jobs MD',
  ],
  alternates: { canonical: `${brand.siteUrl}/careers` },
  openGraph: {
    title: 'Caregiver Jobs Maryland | MarkoCare',
    description: "Join MarkoCare — Maryland's RSA-licensed home care agency. Competitive pay, flexible schedules & RN support for caregivers across 4 counties. Apply now.",
    images: [{ url: '/og-image.jpg', width: 1200, height: 630, alt: 'MarkoCare caregiver team member working in a Maryland senior\'s home' }],
  },
  robots: { index: true, follow: true },
};

const benefits = [
  {
    icon: DollarSign,
    title: 'Meaningful Work Every Day',
    desc: 'You will end each shift knowing you made a real difference to a real person. That kind of work is rare, and we do not take it for granted.',
  },
  {
    icon: Shield,
    title: 'Competitive W2 Compensation',
    desc: 'Fair hourly wages that recognize the skill and dedication our work requires, with regular performance reviews and clear advancement opportunities.',
  },
  {
    icon: Award,
    title: 'Ongoing Training & Development',
    desc: 'From initial orientation through specialized training in dementia care, cancer support, and post-hospital transitions — we invest in your growth at no cost to you.',
  },
  {
    icon: Heart,
    title: 'Supportive Team Culture',
    desc: 'You are never alone at MarkoCare. Our care coordinators and registered nurses back you up, answer your questions, and make sure you feel valued every day.',
  },
  {
    icon: Clock,
    title: 'Flexible Scheduling',
    desc: 'Part-time, full-time, and flexible shifts built around your life — whether you need a specific shift pattern or want to grow your hours over time.',
  },
  {
    icon: CheckCircle,
    title: 'RN Supervision & Support',
    desc: 'Our supervising RN is available for clinical guidance on every assignment — so you always have the professional backup you need to provide excellent care.',
  },
];

const openPositions = [
  {
    title: 'Home Care Aide / Caregiver',
    type: 'Part-Time & Full-Time',
    requirements: [
      'High school diploma or GED',
      'Minimum 1 year caregiving experience preferred',
      'CPR certification (or willingness to obtain)',
      'Valid driver\'s license and reliable transportation',
      'Ability to pass state and federal background check',
      'Compassionate, dependable, professional',
    ],
  },
  {
    title: 'Certified Nursing Assistant (CNA)',
    type: 'Part-Time & Full-Time',
    requirements: [
      'Active Maryland CNA certification',
      'CPR certification',
      'Experience in home care or facility setting',
      'Strong communication skills',
      'Ability to pass comprehensive background check',
      'Current TB test',
    ],
  },
  {
    title: 'Registered Nurse (RN) – Supervisory Role',
    type: 'Part-Time',
    requirements: [
      'Active Maryland RN license in good standing',
      'Minimum 2 years clinical experience',
      'Home health or community nursing experience preferred',
      'Ability to conduct home assessments and develop care plans',
      'Strong documentation and communication skills',
      'Valid driver\'s license and reliable transportation',
    ],
  },
];

export default function CareersPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-mc-forest text-white py-16 md:py-20">
        <div className="container-pad max-w-3xl">
          <span className="badge-green mb-4 inline-flex">We&apos;re Hiring</span>
          <h1 className="text-4xl md:text-5xl font-bold mb-5">
            Join the MarkoCare Family
          </h1>
          <p className="text-lg text-white/80 leading-relaxed">
            At MarkoCare, our caregivers are not just employees — they are the heart of
            everything we do. If you are a compassionate, dedicated person who wants to
            make a real difference in people's lives, every single day, we want to hear from you.
          </p>
        </div>
      </section>

      {/* Benefits */}
      <section className="section-pad bg-white">
        <div className="container-pad">
          <SectionHeader
            badge="Why Work With Us"
            title="Why Caregivers Choose MarkoCare"
            subtitle="We believe that caring for our clients starts with caring for our team. That means fair pay, ongoing training, flexible scheduling, and a culture where every team member feels genuinely valued."
          />
          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {benefits.map(({ icon: Icon, title, desc }) => (
              <div key={title} className="card-hover">
                <Icon className="h-7 w-7 text-brand-green-600 mb-3" />
                <h3 className="font-semibold text-brand-navy-800 mb-2">{title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Open positions */}
      <section className="section-pad bg-brand-slate">
        <div className="container-pad">
          <SectionHeader
            badge="Open Positions"
            title="Current Openings"
            subtitle="We are actively filling the following positions across our Maryland service area."
          />
          <div className="mt-10 space-y-5 max-w-4xl mx-auto">
            {openPositions.map((position) => (
              <div key={position.title} className="card-hover">
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-4">
                  <div>
                    <h3 className="text-lg font-bold text-brand-navy-800">{position.title}</h3>
                    <span className="badge-navy mt-1 inline-flex">{position.type}</span>
                  </div>
                  <a href="#application-form" className="btn-primary text-sm py-2 px-5 shrink-0">
                    Apply Now
                  </a>
                </div>
                <h4 className="text-sm font-semibold text-gray-700 mb-2">Requirements:</h4>
                <ul className="space-y-1.5">
                  {position.requirements.map((req) => (
                    <li key={req} className="flex items-start gap-2 text-sm text-gray-600">
                      <CheckCircle className="h-3.5 w-3.5 text-brand-green-600 shrink-0 mt-0.5" />
                      {req}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Background check & EOE notice */}
      <section className="py-10 bg-white">
        <div className="container-pad max-w-3xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div className="rounded-2xl border border-amber-200 bg-amber-50 p-5">
              <Shield className="h-6 w-6 text-amber-600 mb-2" />
              <h3 className="font-semibold text-amber-800 mb-2 text-sm">Background Check Required</h3>
              <p className="text-xs text-amber-700 leading-relaxed">
                All candidates are subject to a comprehensive state and federal criminal background
                check, sex offender registry check, and OIG exclusion list review as a condition
                of employment.
              </p>
            </div>
            <div className="rounded-2xl border border-brand-green-200 bg-brand-green-50 p-5">
              <Award className="h-6 w-6 text-brand-green-600 mb-2" />
              <h3 className="font-semibold text-brand-navy-800 mb-2 text-sm">Equal Opportunity Employer</h3>
              <p className="text-xs text-gray-600 leading-relaxed">
                MarkoCare is an Equal Opportunity Employer (EOE). We do not discriminate on the
                basis of race, color, religion, sex, national origin, age, disability, sexual
                orientation, or any other characteristic protected by law.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Application form */}
      <section className="section-pad bg-brand-slate" id="application-form">
        <div className="container-pad">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-8">
              <span className="badge-navy mb-3 inline-flex">Apply Now</span>
              <h2 className="section-heading">Submit Your Application</h2>
              <p className="section-subheading max-w-xl mx-auto">
                Our HR team reviews all applications and responds within 2 business days.
              </p>
            </div>
            <div className="rounded-3xl bg-white border border-gray-100 shadow-card p-8">
              <CaregiverForm />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
