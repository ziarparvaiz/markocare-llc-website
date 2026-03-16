import type { Metadata } from 'next';
import Link from 'next/link';
import {
  CheckCircle,
  Heart,
  Shield,
  DollarSign,
  Award,
  Clock,
  ArrowRight,
  MapPin,
  Briefcase,
  Search,
  FileText,
  UserCheck,
  CalendarCheck,
} from 'lucide-react';
import { brand } from '@/config/brand';
import SectionHeader from '@/components/ui/SectionHeader';
import { getAllCareers } from '@/lib/careers';

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
    description:
      "Join MarkoCare — Maryland's RSA-licensed home care agency. Competitive pay, flexible schedules & RN support for caregivers across 4 counties. Apply now.",
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: "MarkoCare caregiver team member working in a Maryland senior's home",
      },
    ],
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

const hiringSteps = [
  {
    icon: Search,
    step: '01',
    title: 'Browse Open Roles',
    desc: 'Review our current openings and find the position that matches your experience and availability.',
  },
  {
    icon: FileText,
    step: '02',
    title: 'Submit Your Application',
    desc: 'Complete our straightforward application form. It takes about 5 minutes and we review every submission.',
  },
  {
    icon: UserCheck,
    step: '03',
    title: 'HR Review',
    desc: 'Our team reviews your application within 2 business days and reaches out to qualified candidates.',
  },
  {
    icon: CalendarCheck,
    step: '04',
    title: 'Interview & Onboarding',
    desc: 'We schedule a brief interview, complete background checks, and get you ready to start serving clients.',
  },
];

export default function CareersPage() {
  const openPositions = getAllCareers();

  return (
    <>
      {/* ── Hero ── */}
      <section className="bg-mc-forest text-white py-20 md:py-28 relative overflow-hidden">
        <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-white/[0.03] pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-64 h-64 rounded-full bg-white/[0.02] pointer-events-none" />

        <div className="container-pad max-w-3xl relative">
          <span className="mc-badge-dark mb-5 inline-flex">We&apos;re Hiring</span>
          <h1 className="heading-display text-white text-4xl md:text-5xl lg:text-6xl mb-6">
            Join the MarkoCare Family
          </h1>
          <p className="text-lg md:text-xl text-white/75 leading-relaxed max-w-2xl">
            Our caregivers are the heart of everything we do. If you are compassionate,
            dedicated, and want to make a real difference every single day — we want to
            hear from you.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link href="#open-positions" className="btn-mc-primary">
              View Open Positions
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link href="/careers/apply" className="btn-outline-white">
              Apply Now
            </Link>
          </div>
        </div>
      </section>

      {/* ── Why Caregivers Choose MarkoCare ── */}
      <section className="section-pad bg-white">
        <div className="container-pad">
          <SectionHeader
            badge="Why Work With Us"
            title="Why Caregivers Choose MarkoCare"
            subtitle="We believe that caring for our clients starts with caring for our team. That means fair pay, ongoing training, flexible scheduling, and a culture where every team member feels genuinely valued."
          />
          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {benefits.map(({ icon: Icon, title, desc }) => (
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

      {/* ── Open Positions ── */}
      <section className="section-pad bg-mc-sage" id="open-positions">
        <div className="container-pad">
          <SectionHeader
            badge="Open Positions"
            title="Current Openings"
            subtitle="We are actively filling the following positions across our Maryland service area. Find the role that fits you best."
          />

          <div className="mt-12 space-y-6 max-w-4xl mx-auto">
            {openPositions.map((position) => (
              <article
                key={position.slug}
                className="mc-card group hover:shadow-premium-lg hover:border-mc-leaf-200 hover:-translate-y-0.5 transition-all duration-200"
              >
                {/* Card header */}
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-5">
                  <div className="flex-1">
                    <div className="flex flex-wrap items-center gap-2 mb-2">
                      <span className="mc-badge">
                        <Briefcase className="h-3 w-3" />
                        {position.employmentType}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold text-mc-forest">{position.title}</h3>
                  </div>
                  {/* Desktop CTAs */}
                  <div className="hidden sm:flex items-center gap-2 shrink-0">
                    <Link
                      href={`/careers/${position.slug}`}
                      className="btn-mc-outline text-sm py-2.5 px-5"
                    >
                      View Details
                    </Link>
                    <Link
                      href={`/careers/${position.slug}#apply`}
                      className="btn-mc-primary text-sm py-2.5 px-5"
                    >
                      Apply Now
                      <ArrowRight className="h-3.5 w-3.5" />
                    </Link>
                  </div>
                </div>

                {/* Summary */}
                <p className="text-gray-600 text-sm leading-relaxed mb-5">{position.summary}</p>

                {/* Requirements preview */}
                <div className="mb-5">
                  <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-3">
                    Key Requirements
                  </p>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {position.requirements.map((req) => (
                      <li key={req} className="flex items-start gap-2 text-sm text-gray-700">
                        <CheckCircle className="h-4 w-4 text-mc-leaf-500 shrink-0 mt-0.5" />
                        {req}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Footer: county + mobile CTAs */}
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 pt-4 border-t border-mc-stone">
                  <div className="flex items-center gap-1.5 text-xs text-gray-500">
                    <MapPin className="h-3.5 w-3.5 text-mc-leaf-400 shrink-0" />
                    <span>{position.counties}</span>
                  </div>
                  {/* Mobile CTAs */}
                  <div className="sm:hidden flex gap-2">
                    <Link
                      href={`/careers/${position.slug}`}
                      className="btn-mc-outline text-sm py-2 px-4 flex-1 justify-center"
                    >
                      View Details
                    </Link>
                    <Link
                      href={`/careers/${position.slug}#apply`}
                      className="btn-mc-primary text-sm py-2 px-4 flex-1 justify-center"
                    >
                      Apply Now
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ── How to Apply ── */}
      <section className="section-pad bg-white">
        <div className="container-pad">
          <SectionHeader
            badge="Hiring Process"
            title="What to Expect"
            subtitle="Our hiring process is straightforward and respectful of your time. Here is how it works."
          />

          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-5xl mx-auto">
            {hiringSteps.map(({ icon: Icon, step, title, desc }) => (
              <div key={step} className="flex flex-col items-start">
                <div className="flex items-center gap-3 mb-4">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-2xl bg-mc-sage border border-mc-stone shrink-0">
                    <Icon className="h-5 w-5 text-mc-leaf-500" />
                  </div>
                  <span className="font-serif text-3xl font-bold text-mc-stone select-none">
                    {step}
                  </span>
                </div>
                <h3 className="font-semibold text-mc-forest mb-2">{title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Compliance strip ── */}
      <section className="py-10 bg-mc-sage border-y border-mc-stone">
        <div className="container-pad max-w-3xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="rounded-2xl border border-amber-200 bg-amber-50 p-5">
              <Shield className="h-5 w-5 text-amber-600 mb-2" />
              <h3 className="font-semibold text-amber-800 mb-1.5 text-sm">
                Background Check Required
              </h3>
              <p className="text-xs text-amber-700 leading-relaxed">
                All candidates are subject to a comprehensive state and federal criminal background
                check, sex offender registry check, and OIG exclusion list review as a condition
                of employment.
              </p>
            </div>
            <div className="rounded-2xl border border-mc-stone bg-white p-5">
              <Award className="h-5 w-5 text-mc-leaf-500 mb-2" />
              <h3 className="font-semibold text-mc-forest mb-1.5 text-sm">
                Equal Opportunity Employer
              </h3>
              <p className="text-xs text-gray-600 leading-relaxed">
                MarkoCare is an Equal Opportunity Employer (EOE). We do not discriminate on the
                basis of race, color, religion, sex, national origin, age, disability, or any
                other characteristic protected by law.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Application CTA ── */}
      <section className="section-pad bg-mc-forest text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-80 h-80 rounded-full bg-white/[0.03] -translate-y-1/2 translate-x-1/2 pointer-events-none" />

        <div className="container-pad max-w-2xl text-center relative">
          <span className="mc-badge-dark mb-5 inline-flex">Ready to Join Us?</span>
          <h2 className="heading-display text-white text-3xl md:text-4xl mb-5">
            Start Your Application Today
          </h2>
          <p className="text-white/75 text-lg leading-relaxed mb-8">
            Interested in joining the MarkoCare team? Our HR team reviews every application
            and responds within 2 business days. We would love to hear from you.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link href="/careers/apply" className="btn-mc-white">
              Submit Application
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link href="#open-positions" className="btn-outline-white">
              View Open Positions
            </Link>
          </div>
          <p className="mt-6 text-white/50 text-sm">
            Questions? Email us at{' '}
            <a
              href={`mailto:${brand.email}`}
              className="text-white/75 underline underline-offset-2 hover:text-white transition-colors"
            >
              {brand.email}
            </a>
          </p>
        </div>
      </section>
    </>
  );
}
