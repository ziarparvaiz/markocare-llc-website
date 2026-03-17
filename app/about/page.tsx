import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import {
  CheckCircle,
  Shield,
  Heart,
  Award,
  Stethoscope,
  UserCheck,
  ClipboardList,
  MapPin,
  Phone,
  Mail,
  ArrowRight,
  Building2,
  Star,
  Activity,
  BadgeCheck,
  ShieldCheck,
  Lock,
  Clock,
  ChevronRight,
} from 'lucide-react';
import { brand } from '@/config/brand';
import Testimonials from '@/components/sections/Testimonials';

export const metadata: Metadata = {
  title: 'Licensed Home Care Agency Maryland | MarkoCare',
  description:
    'MarkoCare is a Maryland RSA-licensed home care agency (COMAR 10.07.05). Learn about our mission, values, and commitment to dignified senior care across 4 counties.',
  keywords: [
    'Maryland RSA licensed home care agency',
    'about MarkoCare Maryland',
    'licensed home care agency background MD',
    'Maryland OHCQ home care agency',
  ],
  alternates: { canonical: `${brand.siteUrl}/about` },
  openGraph: {
    title: 'Licensed Home Care Agency Maryland | MarkoCare',
    description:
      "Learn about MarkoCare — Maryland's RSA-licensed home care agency. Our mission, caregivers, and commitment to dignified senior care across 4 counties.",
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: "MarkoCare team members representing the Maryland home care agency's caregiving mission",
      },
    ],
  },
  robots: { index: true, follow: true },
};

/* ─── Static data ──────────────────────────────────────────────────────────── */

const HERO_TRUST_PILLS = [
  { icon: ShieldCheck, label: 'Maryland RSA Licensed' },
  { icon: Stethoscope, label: 'RN-Supervised Care' },
  { icon: UserCheck, label: 'W2 Employee Model' },
  { icon: Lock, label: 'Licensed & Insured' },
];

const trustMetrics = [
  {
    icon: Stethoscope,
    title: 'RN-Supervised Care',
    desc: 'Every care plan developed, implemented, and monitored by a Registered Nurse',
  },
  {
    icon: UserCheck,
    title: 'W2 Employee Model',
    desc: 'All caregivers are direct employees — fully insured and accountable',
  },
  {
    icon: ShieldCheck,
    title: 'Fully Insured & Bonded',
    desc: "Comprehensive liability and workers\u2019 compensation coverage",
  },
  {
    icon: Clock,
    title: '24/7 On-Call Support',
    desc: 'Around-the-clock availability for urgent care needs',
  },
];

const approachPillars = [
  {
    icon: Stethoscope,
    title: 'RN-Supervised Care',
    desc: 'Every care plan is created, implemented, and monitored by a Registered Nurse — not a coordinator without clinical credentials. This clinical backbone is non-negotiable.',
  },
  {
    icon: UserCheck,
    title: 'W2 Employee Model',
    desc: 'Our caregivers are employees, not independent contractors. This means full insurance coverage, consistent accountability, and caregivers trained to MarkoCare standards.',
  },
  {
    icon: Heart,
    title: 'Compassion-First Culture',
    desc: 'We hire for heart and train for excellence. We recruit caregivers who treat clients as family — and reinforce that standard through ongoing education, supervision, and recognition.',
  },
];

const rnSteps = [
  {
    icon: ClipboardList,
    title: 'Initial RN Assessment',
    desc: 'Our RN conducts a thorough in-home assessment to identify care needs, safety risks, and goals before services begin.',
  },
  {
    icon: Shield,
    title: 'Individualized Care Plan',
    desc: 'A written care plan developed by the RN and shared with the client, family, and assigned caregiver.',
  },
  {
    icon: CheckCircle,
    title: 'Supervisory Home Visits',
    desc: 'The RN conducts regular supervisory visits to evaluate quality, update plans, and address emerging needs.',
  },
];

const hiringSteps = [
  {
    step: '01',
    title: 'Initial Screening',
    desc: 'Structured phone interview assessing experience, attitude, and availability.',
  },
  {
    step: '02',
    title: 'Background Check',
    desc: 'State and federal criminal history, sex offender registry, and OIG exclusion list screening.',
  },
  {
    step: '03',
    title: 'Reference Verification',
    desc: 'Prior employer and personal reference contacts to validate work history and character.',
  },
  {
    step: '04',
    title: 'Orientation & Training',
    desc: 'Mandatory orientation covering client safety, infection control, and documentation.',
  },
  {
    step: '05',
    title: 'RN Competency Evaluation',
    desc: 'Supervising RN evaluates caregiver competencies before their first client assignment.',
  },
  {
    step: '06',
    title: 'Ongoing Supervision',
    desc: 'Regular RN supervisory visits and performance reviews ensure consistent quality of care.',
  },
];

const w2Benefits = [
  'Fully covered by our general liability and workers\u2019 compensation insurance',
  'Consistent wages, schedules, and performance standards',
  'No client exposure to independent-contractor liability gaps',
  'Background-checked and trained to MarkoCare standards — not self-reported',
  'Supervision and accountability built into every assignment',
];

/* ─── Component ────────────────────────────────────────────────────────────── */

export default function AboutPage() {
  return (
    <>
      {/* ══════════════════════════════════════════════════════════════════════
          §1  HERO — Light editorial: expressive typography + capsule image
      ══════════════════════════════════════════════════════════════════════ */}
      <section className="relative bg-mc-cream overflow-hidden min-h-screen flex items-center">

        {/* Decorative large circle — background depth */}
        <div
          className="absolute -top-32 -right-32 w-[560px] h-[560px] rounded-full bg-mc-leaf-100/50 pointer-events-none"
          aria-hidden="true"
        />
        <div
          className="absolute -bottom-40 -left-20 w-[400px] h-[400px] rounded-full bg-mc-sage/80 pointer-events-none"
          aria-hidden="true"
        />

        <div className="container-pad relative w-full py-28 lg:py-36">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_420px] xl:grid-cols-[1fr_480px] gap-14 xl:gap-20 items-center">

            {/* ── LEFT: Typography block ── */}
            <div>

              {/* Eyebrow */}
              <div className="flex items-center gap-3 mb-8">
                <div className="w-10 h-[2px] rounded-full bg-mc-leaf-500" aria-hidden="true" />
                <span className="text-[11px] font-bold uppercase tracking-[0.22em] text-mc-leaf-600">
                  About MarkoCare
                </span>
              </div>

              {/* Expressive H1 — mixed weights create rhythm */}
              <h1 className="mb-8 leading-[1.08]">
                <span className="block font-serif text-[46px] sm:text-[58px] xl:text-[68px] font-light text-mc-forest/60 tracking-[-0.02em]">
                  Where professional
                </span>
                <span className="block font-serif text-[46px] sm:text-[58px] xl:text-[68px] font-bold text-mc-forest tracking-[-0.03em]">
                  care feels like
                </span>
                <span className="block font-serif text-[46px] sm:text-[58px] xl:text-[68px] font-bold text-mc-leaf-500 tracking-[-0.03em] italic">
                  family.
                </span>
              </h1>

              {/* Lead */}
              <p className="text-gray-600 text-[16px] md:text-[17px] leading-[1.8] mb-10 max-w-[520px]">
                MarkoCare is a Maryland Residential Service Agency built around one conviction:
                every family deserves home care they can genuinely trust — clinically supervised
                by a Registered Nurse and delivered by W2 employee caregivers.
              </p>

              {/* Inline stats row */}
              <div className="flex flex-wrap items-center gap-x-8 gap-y-4 mb-10 pb-10 border-b border-mc-stone">
                {[
                  { value: '4+', label: 'Counties Served' },
                  { value: 'RN', label: 'Supervised Care' },
                  { value: 'W2', label: 'Employee Model' },
                  { value: '24/7', label: 'On-Call Support' },
                ].map((s) => (
                  <div key={s.label}>
                    <p className="text-[28px] font-serif font-bold text-mc-leaf-500 leading-none">{s.value}</p>
                    <p className="text-[11px] text-gray-400 mt-1 font-medium tracking-wide">{s.label}</p>
                  </div>
                ))}
              </div>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row gap-3">
                <Link
                  href="/contact"
                  className="btn-mc-primary inline-flex items-center gap-2 group h-[52px] px-8 rounded-xl text-[14px] font-semibold"
                >
                  Request Free Assessment
                  <ArrowRight className="h-4 w-4 group-hover:translate-x-0.5 transition-transform" aria-hidden="true" />
                </Link>
                <Link
                  href="#our-mission"
                  className="inline-flex items-center gap-2 h-[52px] px-7 rounded-xl border-2 border-mc-stone text-[14px] font-semibold text-mc-forest hover:border-mc-leaf-300 hover:text-mc-leaf-700 transition-all duration-200"
                >
                  Our Story & Mission
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </Link>
              </div>
            </div>

            {/* ── RIGHT: Capsule image + floating badges ── */}
            <div className="relative flex justify-center lg:justify-end">

              {/* Decorative dot grid behind image */}
              <div
                className="absolute -top-6 -left-6 w-36 h-36 opacity-30 pointer-events-none"
                style={{
                  backgroundImage: 'radial-gradient(circle, #52b848 1.5px, transparent 1.5px)',
                  backgroundSize: '10px 10px',
                }}
                aria-hidden="true"
              />

              {/* Capsule / pill-shaped image container */}
              <div
                className="relative w-full max-w-[380px] xl:max-w-[440px] shadow-premium-xl"
                style={{ borderRadius: '200px 200px 160px 160px', aspectRatio: '3/4', overflow: 'hidden' }}
              >
                <Image
                  src="/HeroSectionImage/heroimage.png"
                  alt="MarkoCare caregiver providing compassionate home care to an elderly client in Maryland"
                  fill
                  className="object-cover object-top"
                  sizes="(max-width: 1024px) 380px, 440px"
                  priority
                />
                {/* Subtle bottom gradient */}
                <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-mc-forest/30 to-transparent" aria-hidden="true" />
              </div>

              {/* Floating badge — top left: RN Supervised */}
              <div className="absolute top-8 -left-6 xl:-left-10 flex items-center gap-3 bg-white rounded-2xl px-4 py-3 shadow-premium-lg border border-mc-stone">
                <div className="w-9 h-9 rounded-xl bg-mc-leaf-50 flex items-center justify-center shrink-0">
                  <Stethoscope className="h-4 w-4 text-mc-leaf-600" />
                </div>
                <div>
                  <p className="text-[11px] font-bold text-mc-forest leading-tight">RN Supervised</p>
                  <p className="text-[10px] text-gray-400 mt-0.5">Every Care Plan</p>
                </div>
              </div>

              {/* Floating badge — bottom right: 5-Star */}
              <div className="absolute bottom-10 -right-4 xl:-right-8 flex items-center gap-3 bg-mc-forest text-white rounded-2xl px-4 py-3 shadow-premium-lg">
                <div className="w-9 h-9 rounded-xl bg-amber-400/20 flex items-center justify-center shrink-0">
                  <Star className="h-4 w-4 text-amber-300 fill-amber-300" />
                </div>
                <div>
                  <p className="text-[11px] font-bold leading-tight">5-Star Rated</p>
                  <p className="text-[10px] text-white/55 mt-0.5">Client Satisfaction</p>
                </div>
              </div>

              {/* Floating badge — bottom left: W2 Employees */}
              <div className="absolute bottom-28 -left-4 xl:-left-8 flex items-center gap-2.5 bg-white rounded-xl px-3.5 py-2.5 shadow-premium border border-mc-stone">
                <div className="w-7 h-7 rounded-lg bg-mc-leaf-50 flex items-center justify-center shrink-0">
                  <ShieldCheck className="h-3.5 w-3.5 text-mc-leaf-600" />
                </div>
                <p className="text-[11px] font-bold text-mc-forest">W2 Employees</p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════════
          §2  TRUST METRICS STRIP — Dark forest background
      ══════════════════════════════════════════════════════════════════════ */}
      <section className="bg-mc-forest py-14">
        <div className="container-pad">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-y-8 gap-x-6 lg:gap-10">
            {trustMetrics.map(({ icon: Icon, title, desc }) => (
              <div
                key={title}
                className="flex flex-col sm:flex-row items-center sm:items-start gap-4 text-center sm:text-left"
              >
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

      {/* ══════════════════════════════════════════════════════════════════════
          §3  MISSION STATEMENT — Split layout
      ══════════════════════════════════════════════════════════════════════ */}
      <section id="our-mission" className="py-24 md:py-32 bg-white">
        <div className="container-pad">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 xl:gap-24 items-center max-w-6xl mx-auto">

            {/* LEFT: Mission text */}
            <div>
              <span className="eyebrow mb-4 block">Our Mission</span>
              <blockquote className="text-2xl md:text-3xl font-serif font-semibold text-mc-forest leading-relaxed mb-7 border-l-4 border-mc-leaf-400 pl-6">
                &ldquo;To enhance the quality of life for every client we serve by providing
                compassionate, dignified and skilled home care — empowering individuals to live
                safely and independently in the comfort of their own homes.&rdquo;
              </blockquote>
              <p className="text-gray-600 leading-relaxed text-lg mb-10">
                We witnessed firsthand how difficult it is to find home care that is both
                clinically sound and genuinely warm. MarkoCare was created to close that gap —
                with RN oversight, W2 employees, and a compassion-first culture that shows in
                every visit.
              </p>
              <Link href="/contact" className="btn-mc-primary inline-flex">
                Get Started Today <ArrowRight className="h-4 w-4" />
              </Link>
            </div>

            {/* RIGHT: Stats + image */}
            <div className="space-y-6">
              {/* Stats row */}
              <div className="grid grid-cols-2 gap-4">
                {[
                  { value: '4+', label: 'Maryland Counties Served' },
                  { value: 'RN', label: 'Supervised Every Care Plan' },
                  { value: 'W2', label: 'Employee Caregivers Only' },
                  { value: '24/7', label: 'On-Call Support Available' },
                ].map((s) => (
                  <div
                    key={s.label}
                    className="rounded-2xl border border-mc-stone bg-mc-sage p-5 text-center shadow-premium"
                  >
                    <p className="text-3xl font-serif font-bold text-mc-leaf-500 leading-none mb-2">
                      {s.value}
                    </p>
                    <p className="text-xs text-gray-500 leading-tight">{s.label}</p>
                  </div>
                ))}
              </div>

              {/* Caregiver photo */}
              <div
                className="relative rounded-[20px] overflow-hidden shadow-premium-lg w-full"
                style={{ aspectRatio: '16/9' }}
              >
                <Image
                  src="/TeamCaregiverPhoto/caregiverphoto.png"
                  alt="MarkoCare caregiver assisting an elderly client at home in Maryland"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════════
          §4  OUR APPROACH — 3 premium pillars
      ══════════════════════════════════════════════════════════════════════ */}
      <section className="py-24 md:py-32 bg-mc-sage">
        <div className="container-pad">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="eyebrow mb-4 block">How We Work</span>
            <h2 className="text-3xl md:text-4xl font-bold text-mc-forest">Our Approach</h2>
            <p className="mt-4 text-gray-600 leading-relaxed">
              Three pillars drive everything we do — and everything that sets MarkoCare apart
              from agencies that treat care as a commodity.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {approachPillars.map(({ icon: Icon, title, desc }) => (
              <div
                key={title}
                className="group rounded-[20px] bg-white p-8 shadow-premium border border-mc-stone
                           transition-all duration-300
                           hover:shadow-premium-lg hover:border-mc-leaf-200 hover:-translate-y-1"
              >
                <div
                  className="w-16 h-16 rounded-2xl bg-mc-leaf-50 border border-mc-leaf-100
                              flex items-center justify-center mb-6
                              transition-all duration-300
                              group-hover:bg-mc-leaf-500 group-hover:border-mc-leaf-500"
                >
                  <Icon className="h-8 w-8 text-mc-leaf-600 transition-colors duration-300 group-hover:text-white" />
                </div>
                <h3 className="font-bold text-mc-forest mb-3 text-xl">{title}</h3>
                <p className="text-gray-600 leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════════
          §5  CLINICAL OVERSIGHT — RN Supervision Model
      ══════════════════════════════════════════════════════════════════════ */}
      <section className="py-24 md:py-32 bg-white">
        <div className="container-pad">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <div className="w-14 h-14 rounded-2xl bg-mc-leaf-50 border border-mc-leaf-100 flex items-center justify-center mx-auto mb-5">
              <Stethoscope className="h-7 w-7 text-mc-leaf-600" />
            </div>
            <span className="eyebrow mb-3 block">Clinical Oversight</span>
            <h2 className="text-3xl md:text-4xl font-bold text-mc-forest">
              Our RN Supervision Model
            </h2>
            <p className="mt-4 text-gray-600 leading-relaxed">
              Every client care plan is developed, implemented, and monitored by a Registered
              Nurse. This clinical backbone is non-negotiable.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {rnSteps.map(({ icon: Icon, title, desc }, i) => (
              <div
                key={title}
                className="relative rounded-[20px] bg-mc-sage border border-mc-stone p-8
                           transition-all duration-200
                           hover:border-mc-leaf-200 hover:shadow-premium"
              >
                <div className="absolute top-5 right-6 text-5xl font-bold text-mc-leaf-100 font-serif select-none leading-none">
                  {String(i + 1).padStart(2, '0')}
                </div>
                <div className="relative">
                  <div className="w-14 h-14 rounded-2xl bg-white border border-mc-stone flex items-center justify-center mb-5 shadow-premium">
                    <Icon className="h-7 w-7 text-mc-leaf-600" />
                  </div>
                  <h3 className="font-bold text-mc-forest mb-3 text-lg">{title}</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════════
          §6  W2 EMPLOYMENT MODEL — Split layout
      ══════════════════════════════════════════════════════════════════════ */}
      <section className="py-24 md:py-32 bg-mc-sage">
        <div className="container-pad">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">

            {/* LEFT: Text + bullet points */}
            <div>
              <span className="eyebrow mb-3 block">The W2 Difference</span>
              <h2 className="text-3xl md:text-4xl font-bold text-mc-forest mb-5">
                Why We Hire W2 Employees — Not Contractors
              </h2>
              <p className="text-gray-600 leading-relaxed mb-8">
                Many home care agencies classify caregivers as independent contractors to
                reduce their own costs. We chose a different path — because caring for our
                clients starts with caring for our team. Every MarkoCare caregiver is a W2
                employee, because it protects you, your family, and the caregivers who
                dedicate themselves to your loved one&rsquo;s wellbeing.
              </p>
              <ul className="space-y-4">
                {w2Benefits.map((b) => (
                  <li key={b} className="flex items-start gap-3 text-gray-700">
                    <div className="w-5 h-5 rounded-full bg-mc-leaf-100 flex items-center justify-center shrink-0 mt-0.5">
                      <CheckCircle className="h-3.5 w-3.5 text-mc-leaf-600" />
                    </div>
                    <span className="text-sm leading-relaxed">{b}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* RIGHT: Compliance card */}
            <div className="rounded-[24px] bg-mc-forest text-white p-8 md:p-10 shadow-premium-xl relative overflow-hidden">
              <div
                className="absolute inset-0 pointer-events-none"
                style={{
                  background:
                    'radial-gradient(ellipse at 80% 10%, rgba(82,184,72,0.12) 0%, transparent 60%)',
                }}
              />
              <div className="relative">
                <div className="w-12 h-12 rounded-2xl bg-white/10 border border-white/20 flex items-center justify-center mb-5">
                  <Award className="h-6 w-6 text-mc-leaf-400" />
                </div>
                <p className="text-xs font-bold uppercase tracking-widest text-mc-leaf-400 mb-2">
                  Compliance Document
                </p>
                <h3 className="text-2xl font-bold text-white mb-4">
                  Insurance &amp; Coverage Statement
                </h3>
                <div className="h-px bg-white/10 mb-5" />
                <p className="text-white/75 leading-relaxed mb-4 text-sm">
                  MarkoCare carries comprehensive general liability insurance and workers&rsquo;
                  compensation coverage for all W2 employees. Because our caregivers are
                  employees — not independent contractors — our agency assumes full employer
                  responsibility during all client assignments.
                </p>
                <p className="text-white/75 leading-relaxed text-sm">
                  We are actively working toward Medicaid provider enrollment with the Maryland
                  Department of Health. In the meantime, we serve private-pay clients and assist
                  families in exploring all available funding options including long-term care
                  insurance.
                </p>
                <div className="mt-6 pt-5 border-t border-white/10 flex flex-col gap-2">
                  <a
                    href={`mailto:${brand.email}`}
                    className="text-mc-leaf-300 hover:text-mc-leaf-200 text-sm font-medium transition-colors"
                  >
                    {brand.email}
                  </a>
                  <a
                    href={`tel:${brand.phone}`}
                    className="text-mc-leaf-300 hover:text-mc-leaf-200 text-sm font-medium transition-colors"
                  >
                    {brand.phoneDisplay}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════════
          §7  HIRING PROCESS — Timeline
      ══════════════════════════════════════════════════════════════════════ */}
      <section className="py-24 md:py-32 bg-white">
        <div className="container-pad">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="eyebrow mb-3 block">Hiring Standards</span>
            <h2 className="text-3xl md:text-4xl font-bold text-mc-forest">
              How We Hire Our Caregivers
            </h2>
            <p className="mt-4 text-gray-600 leading-relaxed">
              Our multi-step vetting process ensures every caregiver who enters a client&rsquo;s
              home meets our high standards of professionalism, skill, and character.
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            <div className="relative">
              {/* Vertical connector line */}
              <div className="absolute left-7 top-7 bottom-7 w-px bg-mc-stone" />

              <div className="space-y-5">
                {hiringSteps.map((step, i) => (
                  <div key={step.step} className="relative flex gap-6 items-start">
                    <div className="relative z-10 shrink-0">
                      <div
                        className={`w-14 h-14 rounded-2xl flex items-center justify-center font-bold text-sm transition-all ${
                          i === 0
                            ? 'bg-mc-leaf-500 text-white shadow-float'
                            : 'bg-white border-2 border-mc-stone text-mc-forest'
                        }`}
                      >
                        {step.step}
                      </div>
                    </div>
                    <div className="rounded-2xl border border-mc-stone bg-white p-5 shadow-premium flex-1 hover:border-mc-leaf-200 hover:shadow-premium-lg transition-all duration-200">
                      <h3 className="font-bold text-mc-forest mb-1.5">{step.title}</h3>
                      <p className="text-sm text-gray-600 leading-relaxed">{step.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════════
          §8  LOCAL PRESENCE — Counties + office card
      ══════════════════════════════════════════════════════════════════════ */}
      <section className="py-24 md:py-32 bg-mc-sage">
        <div className="container-pad">
          <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 xl:gap-20 items-center">

            {/* LEFT: Text + county badges */}
            <div>
              <span className="eyebrow mb-4 block">Local Presence</span>
              <h2 className="text-3xl md:text-4xl font-bold text-mc-forest mb-5">
                Serving Families Across Maryland
              </h2>
              <p className="text-gray-600 leading-relaxed mb-8 text-lg">
                Locally based in Columbia, MD, MarkoCare supports families across multiple
                counties — close enough to respond quickly, local enough to truly understand
                the communities we serve.
              </p>
              <div className="grid grid-cols-2 gap-3">
                {brand.countyPages.map((county) => (
                  <Link
                    key={county.slug}
                    href={`/service-areas/${county.slug}`}
                    className="group flex items-center gap-2.5 rounded-xl bg-white border border-mc-stone px-4 py-3.5 shadow-premium hover:border-mc-leaf-300 hover:shadow-premium-lg transition-all duration-200"
                  >
                    <MapPin className="h-4 w-4 text-mc-leaf-500 shrink-0" />
                    <span className="text-sm font-medium text-mc-forest group-hover:text-mc-leaf-600 transition-colors">{county.name}</span>
                    <ArrowRight className="h-3.5 w-3.5 text-mc-leaf-400 ml-auto opacity-0 group-hover:opacity-100 group-hover:translate-x-0.5 transition-all" />
                  </Link>
                ))}
              </div>
            </div>

            {/* RIGHT: Office card */}
            <div className="rounded-[24px] bg-white border border-mc-stone shadow-premium-lg overflow-hidden">
              {/* Map header */}
              <div className="h-36 bg-mc-leaf-50 relative flex items-center justify-center border-b border-mc-stone overflow-hidden">
                {[
                  { top: '20%', left: '15%', size: 8 },
                  { top: '50%', left: '35%', size: 6 },
                  { top: '30%', right: '20%', size: 8 },
                  { bottom: '20%', right: '35%', size: 6 },
                  { bottom: '30%', left: '25%', size: 5 },
                  { top: '70%', left: '60%', size: 7 },
                ].map((dot, i) => (
                  <div
                    key={i}
                    className="absolute rounded-full bg-mc-leaf-300 opacity-30"
                    style={{
                      width: dot.size,
                      height: dot.size,
                      top: dot.top,
                      left: (dot as any).left,
                      right: (dot as any).right,
                      bottom: dot.bottom,
                    }}
                  />
                ))}
                <div className="relative flex items-center gap-3 bg-white/80 backdrop-blur-sm rounded-2xl px-5 py-3 shadow-premium border border-mc-stone">
                  <div className="w-10 h-10 rounded-full bg-mc-leaf-500 flex items-center justify-center shadow-float">
                    <MapPin className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <p className="font-bold text-mc-forest text-sm">Columbia, Maryland</p>
                    <p className="text-xs text-gray-500">MarkoCare Headquarters</p>
                  </div>
                </div>
              </div>

              {/* Contact info */}
              <div className="p-7 space-y-5">
                <div className="flex items-start gap-3">
                  <Building2 className="h-4 w-4 text-mc-leaf-500 shrink-0 mt-0.5" />
                  <div>
                    <p className="text-xs font-bold text-mc-leaf-600 uppercase tracking-wide mb-1">Address</p>
                    <p className="text-sm text-gray-700 leading-relaxed">{brand.address}</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Phone className="h-4 w-4 text-mc-leaf-500 shrink-0 mt-0.5" />
                  <div>
                    <p className="text-xs font-bold text-mc-leaf-600 uppercase tracking-wide mb-1">Phone</p>
                    <a
                      href={`tel:${brand.phone}`}
                      className="text-sm text-gray-700 hover:text-mc-leaf-600 font-medium transition-colors"
                    >
                      {brand.phoneDisplay}
                    </a>
                    <p className="text-xs text-gray-500 mt-1">{brand.officeHours}</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Mail className="h-4 w-4 text-mc-leaf-500 shrink-0 mt-0.5" />
                  <div>
                    <p className="text-xs font-bold text-mc-leaf-600 uppercase tracking-wide mb-1">Email</p>
                    <a
                      href={`mailto:${brand.email}`}
                      className="text-sm text-gray-700 hover:text-mc-leaf-600 font-medium transition-colors"
                    >
                      {brand.email}
                    </a>
                    <p className="text-xs text-mc-leaf-600 font-medium mt-1">{brand.emergencyLine}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════════
          §9  TESTIMONIALS — Social proof
      ══════════════════════════════════════════════════════════════════════ */}
      <Testimonials />

      {/* ══════════════════════════════════════════════════════════════════════
          §10  CTA — Dark forest, high-contrast close
      ══════════════════════════════════════════════════════════════════════ */}
      <section className="py-24 md:py-32 bg-mc-forest text-white relative overflow-hidden">
        {/* Subtle dot grid texture */}
        <div
          className="absolute inset-0 opacity-[0.035] pointer-events-none"
          style={{
            backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)',
            backgroundSize: '24px 24px',
          }}
        />
        <div className="container-pad relative">
          <div className="max-w-2xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-4 py-1.5 text-xs font-semibold text-white/90 mb-6">
              <Clock className="h-3.5 w-3.5 text-mc-leaf-300" aria-hidden="true" />
              Free, No-Obligation Assessment
            </div>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-white mb-5">
              Ready to Start Your Care Journey?
            </h2>
            <p className="text-white/70 mb-10 leading-relaxed text-lg">
              Get to know us the way we hope to know you — through an honest conversation
              about your loved one&rsquo;s needs. No pressure, no obligation, just real answers
              from people who genuinely want to help.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/contact" className="btn-mc-primary px-8 py-3.5 text-base">
                Request Free Assessment <ArrowRight className="h-4 w-4" />
              </Link>
              <a
                href={`tel:${brand.phone}`}
                className="flex items-center gap-2 text-white/80 hover:text-white font-semibold transition-colors"
              >
                <Phone className="h-4 w-4" />
                {brand.phoneDisplay}
              </a>
            </div>
            <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 mt-8 text-xs text-white/50">
              <span>✓ No contracts required</span>
              <span>✓ Care starts when you&apos;re ready</span>
              <span>✓ Speak with a real coordinator</span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
