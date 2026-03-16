import type { Metadata } from 'next';
import {
  CheckCircle,
  Clock,
  Phone,
  UserCheck,
  Stethoscope,
  Shield,
  ShieldCheck,
  ClipboardList,
  Activity,
  BadgeCheck,
  Lock,
  ArrowRight,
  Calendar,
  FileText,
  ChevronDown,
  HeartPulse,
  Building2,
} from 'lucide-react';
import { brand } from '@/config/brand';
import ReferralForm from '@/components/forms/ReferralForm';
import SectionHeader from '@/components/ui/SectionHeader';

/* ─── Metadata ──────────────────────────────────────────────────────────────── */

export const metadata: Metadata = {
  title: 'Home Care Referral Partners Maryland | MarkoCare',
  description:
    'MarkoCare partners with Maryland discharge planners, social workers & case managers. Refer patients to our RSA-licensed, RN-supervised home care team. Fast response, W2 caregivers, 4-county coverage.',
  keywords: [
    'home care referral partners Maryland',
    'hospital discharge planner home care Maryland',
    'social worker home care referral MD',
    'case manager home care partner Maryland',
    'RN supervised home care Maryland',
    'HIPAA referral form home care',
  ],
  alternates: { canonical: `${brand.siteUrl}/referral-partners` },
  openGraph: {
    title: 'Home Care Referral Partners Maryland | MarkoCare',
    description:
      "Maryland discharge planners and social workers — refer patients to MarkoCare's RSA-licensed, RN-supervised home care team. 24-hour response, 4-county coverage.",
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Maryland hospital discharge planner collaborating with MarkoCare care coordinator on a patient referral',
      },
    ],
  },
  robots: { index: true, follow: true },
};

/* ─── Static data ────────────────────────────────────────────────────────────── */

const advantages = [
  {
    icon: Clock,
    title: 'Prompt Response',
    desc: 'We respond to referrals quickly — often within hours. For urgent discharge situations, we arrange care within 24 hours so your patient is never left without support.',
  },
  {
    icon: UserCheck,
    title: 'W2 Employee Model',
    desc: 'All caregivers are W2 employees — fully vetted, insured, and accountable to MarkoCare standards. No independent contractor gaps or staffing agency uncertainty.',
  },
  {
    icon: Stethoscope,
    title: 'RN-Led Care',
    desc: 'Every client receives an in-home assessment and individualized care plan from a Registered Nurse. Clinical communication with your team is standard, not an exception.',
  },
  {
    icon: ClipboardList,
    title: 'Clear Documentation',
    desc: 'Our care records are detailed and organized — supporting continuity of care, coordination with medical teams, and insurance providers throughout the care relationship.',
  },
  {
    icon: CheckCircle,
    title: 'Reliable Follow-Through',
    desc: 'When we commit to a care start date, we honor it. Your patients will not face gaps in care due to staffing issues or scheduling failures on our end.',
  },
  {
    icon: Phone,
    title: 'Dedicated Intake Line',
    desc: 'Referral partners reach a live care coordinator — not a voicemail — for time-sensitive placements. Priority access is a standard part of our partner relationship.',
  },
];

const supportedPrograms = [
  'Johns Hopkins IPOP (Intensive Patient Outreach Program)',
  'Hospital discharge planning teams',
  'Social workers and case managers',
  'Primary care physician offices',
  'Rehabilitation centers and SNFs',
  'Oncology care teams',
  'Palliative care programs',
  'ACO and value-based care networks',
];

const intakeSteps = [
  {
    step: '01',
    title: 'Submit Referral',
    desc: 'Use the secure form or call our dedicated intake line directly.',
  },
  {
    step: '02',
    title: 'Insurance Verification',
    desc: 'We verify coverage within 2 hours during business hours.',
  },
  {
    step: '03',
    title: 'Caregiver Match',
    desc: "We identify and confirm the best caregiver for the patient's needs.",
  },
  {
    step: '04',
    title: 'RN Assessment',
    desc: 'Our RN conducts an intake assessment and develops the care plan.',
  },
  {
    step: '05',
    title: 'Care Begins',
    desc: "Caregiver reports to the patient's home — often within 24 hours.",
  },
];

const trustIndicators = [
  { icon: Lock, label: 'HIPAA Compliant Intake' },
  { icon: UserCheck, label: 'Dedicated Intake Coordinator' },
  { icon: Clock, label: 'Response Within 2 Hours' },
];

const reliabilityCards = [
  {
    icon: Stethoscope,
    title: 'RN Supervision',
    desc: 'Every care relationship begins with a Registered Nurse assessment. RNs develop, monitor, and update care plans throughout the engagement.',
  },
  {
    icon: ShieldCheck,
    title: 'W2 Caregiver Model',
    desc: 'No independent contractors. Every caregiver is a direct W2 employee — background checked, insured, bonded, and accountable to our internal standards.',
  },
  {
    icon: ClipboardList,
    title: 'Care Coordination',
    desc: 'We communicate proactively with your clinical team — sharing updates, documentation, and status as care progresses.',
  },
  {
    icon: Calendar,
    title: 'Reliable Scheduling',
    desc: 'Consistent caregivers, no gaps in coverage. If a scheduled caregiver is unavailable, we resolve it before it affects your patient.',
  },
];

const faqs = [
  {
    q: 'How quickly can you begin care after a referral is submitted?',
    a: 'In most cases, we can arrange care to begin within 24 hours of receiving a completed referral during business hours. For urgent discharge situations, call our intake line directly — we maintain capacity specifically for time-sensitive placements.',
  },
  {
    q: 'What insurance types do you accept?',
    a: 'We work with Medicaid, Medicare, private insurance plans, and private pay arrangements. Our intake team verifies insurance coverage within 2 hours of referral receipt so you know quickly what the patient qualifies for.',
  },
  {
    q: 'Are your caregivers employees or independent contractors?',
    a: 'All caregivers are W2 employees of MarkoCare. They are fully insured, background checked, and held to our internal training and conduct standards. We do not use independent contractors or staffing agency placements.',
  },
  {
    q: 'Can we communicate directly with your clinical team?',
    a: 'Yes. Your referring professional will have access to a named intake coordinator and can reach our RN team directly for clinical questions. We treat communication with your team as an essential part of care coordination, not an exception.',
  },
  {
    q: 'Which counties do you currently serve?',
    a: 'We serve Howard County, Carroll County, Anne Arundel County, and Frederick County in Maryland. If your patient is in a neighboring area, contact us to discuss coverage.',
  },
  {
    q: 'Is your referral intake form HIPAA compliant?',
    a: 'Yes. Our intake process is designed to comply with HIPAA Treatment, Payment, and Operations (TPO) provisions. Referrers are required to affirm HIPAA authorization before submitting protected health information.',
  },
];

/* ─── Page component ─────────────────────────────────────────────────────────── */

export default function ReferralPartnersPage() {
  return (
    <>
      {/* ══════════════════════════════════════════════════════════
          SECTION 1 — HERO
      ══════════════════════════════════════════════════════════ */}
      <section className="bg-mc-forest text-white relative overflow-hidden">
        {/* Subtle background texture */}
        <div className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)',
            backgroundSize: '28px 28px',
          }}
        />

        <div className="container-pad relative py-20 md:py-28">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">

            {/* Left — copy */}
            <div>
              <span className="eyebrow mb-4 block" style={{ color: '#7ccc72' }}>
                Healthcare Referral Partnerships
              </span>

              <h1 className="font-serif text-[38px] sm:text-[48px] xl:text-[56px] font-bold leading-[1.1] tracking-tight text-white mb-6">
                Reliable Home Care Support<br className="hidden sm:block" />
                <span className="text-mc-leaf-300"> for Your Patients</span>
              </h1>

              <p className="text-white/75 text-lg leading-[1.8] mb-8 max-w-xl">
                MarkoCare partners with hospitals, discharge planning teams, and care
                coordinators across Maryland to provide seamless transitions to home care.
                When you refer a patient, you get a named intake coordinator, RN-supervised
                care, and direct access to a clinical team that communicates proactively.
              </p>

              <div className="flex flex-wrap gap-3">
                <a
                  href="#referral-form"
                  className="btn-mc-white"
                >
                  <FileText className="h-4 w-4" />
                  Submit Referral
                </a>
                <a
                  href={`tel:${brand.phone}`}
                  className="btn-mc-ghost border border-white/20 text-white hover:bg-white/10"
                >
                  <Phone className="h-4 w-4" />
                  Call Intake Line
                </a>
              </div>
            </div>

            {/* Right — healthcare visual with floating badges */}
            <div className="relative flex justify-center lg:justify-end">
              {/* Main card */}
              <div className="relative w-full max-w-sm rounded-3xl border border-white/10 bg-white/8 backdrop-blur-sm p-8"
                style={{ backgroundColor: 'rgba(255,255,255,0.07)' }}
              >
                {/* Header line */}
                <div className="flex items-center gap-3 mb-6 pb-5 border-b border-white/10">
                  <div className="w-9 h-9 rounded-xl bg-mc-leaf-400/20 flex items-center justify-center">
                    <HeartPulse className="h-5 w-5 text-mc-leaf-300" />
                  </div>
                  <div>
                    <p className="text-xs text-white/50 uppercase tracking-widest font-semibold">MarkoCare</p>
                    <p className="text-sm font-semibold text-white">Care Coordination Hub</p>
                  </div>
                  <span className="ml-auto inline-flex items-center gap-1.5 rounded-full bg-mc-leaf-400/20 border border-mc-leaf-400/30 px-3 py-1 text-[11px] font-semibold text-mc-leaf-300">
                    <span className="w-1.5 h-1.5 rounded-full bg-mc-leaf-400 animate-pulse" />
                    Active
                  </span>
                </div>

                {/* Stats row */}
                <div className="grid grid-cols-3 gap-3 mb-6">
                  {[
                    { label: 'Response Time', value: '< 2 hrs' },
                    { label: 'Counties Served', value: '4' },
                    { label: 'Care Hours/Wk', value: '168+' },
                  ].map(({ label, value }) => (
                    <div key={label} className="rounded-xl bg-white/5 border border-white/8 p-3 text-center"
                      style={{ borderColor: 'rgba(255,255,255,0.08)' }}
                    >
                      <p className="text-lg font-bold text-white">{value}</p>
                      <p className="text-[10px] text-white/50 leading-tight mt-0.5">{label}</p>
                    </div>
                  ))}
                </div>

                {/* Floating badge: RN-Supervised Care */}
                <div className="flex flex-col gap-3">
                  {[
                    { icon: Stethoscope, label: 'RN-Supervised Care' },
                    { icon: Clock, label: '24/7 On-Call Support' },
                    { icon: Activity, label: 'Fast Referral Response' },
                  ].map(({ icon: Icon, label }) => (
                    <div key={label}
                      className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-4 py-3"
                      style={{ backgroundColor: 'rgba(255,255,255,0.05)' }}
                    >
                      <div className="w-8 h-8 rounded-lg bg-mc-leaf-400/20 flex items-center justify-center shrink-0">
                        <Icon className="h-4 w-4 text-mc-leaf-300" />
                      </div>
                      <span className="text-sm font-medium text-white/90">{label}</span>
                      <CheckCircle className="h-4 w-4 text-mc-leaf-400 ml-auto shrink-0" />
                    </div>
                  ))}
                </div>
              </div>
    
              {/* Floating accent — bottom left */}
              <div className="absolute -bottom-4 -left-4 w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center hidden lg:flex">
                <Building2 className="h-5 w-5 text-white/40" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════
          SECTION 2 — WHY PARTNER WITH US
      ══════════════════════════════════════════════════════════ */}
      <section className="section-pad bg-white">
        <div className="container-pad">
          <SectionHeader
            badge="Why Partner With Us"
            title="What Our Referral Partners Can Expect"
            subtitle="Built from the ground up to support Maryland's clinical referral community — with the reliability, clinical coordination, and transparent communication your patients deserve."
          />

          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {advantages.map(({ icon: Icon, title, desc }) => (
              <div key={title} className="mc-card-hover group">
                <div className="w-11 h-11 rounded-xl bg-mc-leaf-50 border border-mc-leaf-100 flex items-center justify-center mb-5 transition-colors group-hover:bg-mc-leaf-100">
                  <Icon className="h-5 w-5 text-mc-leaf-600" />
                </div>
                <h3 className="font-semibold text-mc-forest text-[15px] mb-2">{title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════
          SECTION 3 — PROGRAMS WE SUPPORT
      ══════════════════════════════════════════════════════════ */}
      <section className="section-pad bg-mc-sage">
        <div className="container-pad">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

            {/* Left — Programs list */}
            <div>
              <span className="eyebrow mb-3 block">Programs We Support</span>
              <h2 className="section-heading mb-4">
                Supporting Maryland&apos;s Clinical Community
              </h2>
              <p className="text-gray-600 leading-relaxed mb-8">
                We work with a broad range of clinical and care coordination teams across
                Maryland to ensure every patient receives a seamless, safe, well-supported
                transition to home — with no gaps, no surprises, and no dropped handoffs.
              </p>

              <ul className="space-y-3">
                {supportedPrograms.map((program) => (
                  <li key={program} className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-mc-leaf-100 border border-mc-leaf-200 flex items-center justify-center shrink-0 mt-0.5">
                      <CheckCircle className="h-3 w-3 text-mc-leaf-600" />
                    </div>
                    <span className="text-sm text-gray-700 leading-relaxed">{program}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Right — Intake Process timeline */}
            <div>
              <div className="mc-card p-8">
                <h3 className="font-semibold text-mc-forest text-lg mb-7 pb-5 border-b border-mc-stone">
                  Referral Intake Process
                </h3>

                <div className="space-y-0">
                  {intakeSteps.map((item, idx) => (
                    <div key={item.step} className="relative flex items-start gap-5">
                      {/* Connector line */}
                      {idx < intakeSteps.length - 1 && (
                        <div className="absolute left-[19px] top-10 bottom-0 w-px bg-mc-stone" />
                      )}

                      {/* Step circle */}
                      <div className="w-10 h-10 rounded-full bg-mc-leaf-400 text-white text-xs font-bold flex items-center justify-center shrink-0 shadow-float z-10">
                        {item.step}
                      </div>

                      {/* Content */}
                      <div className="pb-7">
                        <p className="font-semibold text-mc-forest text-sm">{item.title}</p>
                        <p className="text-xs text-gray-500 mt-0.5 leading-relaxed">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════
          SECTION 4 — FAST REFERRAL INTAKE
      ══════════════════════════════════════════════════════════ */}
      <section className="section-pad bg-white" id="referral-form">
        <div className="container-pad">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">

            {/* Left — info + trust indicators */}
            <div className="lg:sticky lg:top-8">
              <span className="eyebrow mb-3 block">Submit a Referral</span>
              <h2 className="section-heading mb-3">
                Fast, Secure Referral Intake
              </h2>
              <p className="text-gray-600 leading-relaxed mb-8">
                Complete the form to refer a patient to MarkoCare. Our dedicated intake
                coordinator reviews every submission and responds within 2 business hours.
                For urgent discharge placements, use the direct line below.
              </p>

              {/* Trust indicators */}
              <div className="space-y-3 mb-8">
                {trustIndicators.map(({ icon: Icon, label }) => (
                  <div key={label} className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-xl bg-mc-sage border border-mc-stone flex items-center justify-center shrink-0">
                      <Icon className="h-4 w-4 text-mc-leaf-600" />
                    </div>
                    <span className="text-sm font-medium text-mc-forest">{label}</span>
                  </div>
                ))}
              </div>

              {/* Urgent placement box */}
              <div className="rounded-2xl border border-mc-leaf-200 bg-mc-leaf-50 p-5">
                <div className="flex items-start gap-3 mb-3">
                  <div className="w-8 h-8 rounded-lg bg-mc-leaf-400 flex items-center justify-center shrink-0">
                    <Phone className="h-4 w-4 text-white" />
                  </div>
                  <div>
                    <p className="font-semibold text-mc-forest text-sm">Urgent Placement?</p>
                    <p className="text-xs text-gray-600 mt-0.5">
                      For immediate discharge placements, call our intake coordinator directly.
                    </p>
                  </div>
                </div>
                <a
                  href={`tel:${brand.phone}`}
                  className="btn-mc-primary w-full justify-center text-sm py-3"
                >
                  <Phone className="h-4 w-4" />
                  Call {brand.phoneDisplay}
                </a>
                <p className="text-[11px] text-gray-500 text-center mt-2">
                  Live coordinator available Mon–Fri 8 AM–6 PM · 24/7 on-call for existing clients
                </p>
              </div>
            </div>

            {/* Right — Referral form */}
            <div className="rounded-3xl border border-mc-stone bg-mc-sage p-7 shadow-premium">
              <ReferralForm />
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════
          SECTION 5 — CLINICAL RELIABILITY
      ══════════════════════════════════════════════════════════ */}
      <section className="section-pad bg-mc-forest text-white">
        <div className="container-pad">
          <div className="text-center mb-12">
            <span className="eyebrow mb-3 block" style={{ color: '#7ccc72' }}>
              Clinical Reliability
            </span>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-white mb-4">
              Built for the Clinical Standard
            </h2>
            <p className="text-white/65 text-lg max-w-2xl mx-auto leading-relaxed">
              Every process at MarkoCare is designed to meet the standards that hospitals,
              case managers, and care coordinators depend on.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {reliabilityCards.map(({ icon: Icon, title, desc }) => (
              <div
                key={title}
                className="rounded-2xl border border-white/10 p-6 transition-all duration-200 hover:border-mc-leaf-400/30 hover:bg-white/5"
                style={{ backgroundColor: 'rgba(255,255,255,0.04)' }}
              >
                <div className="w-11 h-11 rounded-xl bg-mc-leaf-400/15 border border-mc-leaf-400/20 flex items-center justify-center mb-5">
                  <Icon className="h-5 w-5 text-mc-leaf-300" />
                </div>
                <h3 className="font-semibold text-white text-[15px] mb-2">{title}</h3>
                <p className="text-sm text-white/60 leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>

          {/* Compliance strip */}
          <div className="mt-10 rounded-2xl border border-white/10 bg-white/[0.03] px-6 py-5 flex flex-wrap items-center gap-x-8 gap-y-3">
            {[
              { icon: Shield, label: 'Maryland RSA Licensed (COMAR 10.07.05)' },
              { icon: Lock, label: 'HIPAA Compliant Operations' },
              { icon: ShieldCheck, label: 'Fully Insured & Bonded' },
              { icon: BadgeCheck, label: 'Background Checked Staff' },
            ].map(({ icon: Icon, label }) => (
              <div key={label} className="flex items-center gap-2 text-sm text-white/60">
                <Icon className="h-4 w-4 text-mc-leaf-400 shrink-0" />
                {label}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════
          SECTION 6 — FAQ FOR REFERRAL PARTNERS
      ══════════════════════════════════════════════════════════ */}
      <section className="section-pad bg-white">
        <div className="container-pad">
          <div className="max-w-3xl mx-auto">
            <SectionHeader
              badge="FAQ"
              title="Common Questions from Referral Partners"
              subtitle="Everything clinical teams ask before establishing a referral relationship with MarkoCare."
            />

            <div className="mt-10 space-y-3">
              {faqs.map(({ q, a }) => (
                <details
                  key={q}
                  className="group rounded-2xl border border-mc-stone bg-white shadow-premium overflow-hidden"
                >
                  <summary className="flex items-center justify-between gap-4 px-6 py-5 cursor-pointer select-none list-none">
                    <span className="font-semibold text-mc-forest text-[15px] leading-snug">{q}</span>
                    <ChevronDown className="h-4 w-4 text-mc-leaf-500 shrink-0 transition-transform duration-200 group-open:rotate-180" />
                  </summary>
                  <div className="px-6 pb-5 text-sm text-gray-600 leading-relaxed border-t border-mc-stone pt-4">
                    {a}
                  </div>
                </details>
              ))}
            </div>

            <p className="mt-8 text-center text-sm text-gray-500">
              Have a question not covered here?{' '}
              <a href={`tel:${brand.phone}`} className="text-mc-leaf-600 font-semibold hover:underline">
                Call our intake coordinator
              </a>{' '}
              or{' '}
              <a href="/contact" className="text-mc-leaf-600 font-semibold hover:underline">
                send us a message
              </a>.
            </p>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════
          SECTION 7 — FINAL CTA
      ══════════════════════════════════════════════════════════ */}
      <section className="bg-mc-forest text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)',
            backgroundSize: '28px 28px',
          }}
        />
        <div className="container-pad relative py-20 text-center">
          <span className="eyebrow mb-4 block" style={{ color: '#7ccc72' }}>
            Start the Conversation
          </span>
          <h2 className="font-serif text-[36px] md:text-[46px] font-bold text-white mb-5 leading-tight">
            Partner With a Home Care Team<br className="hidden sm:block" />
            You Can Trust
          </h2>
          <p className="text-white/65 text-lg mb-10 max-w-xl mx-auto leading-relaxed">
            Maryland's discharge planners and care coordinators rely on MarkoCare for prompt
            response, RN-supervised care, and reliable follow-through — every time.
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <a href="#referral-form" className="btn-mc-white">
              <FileText className="h-4 w-4" />
              Submit Referral
            </a>
            <a href={`tel:${brand.phone}`} className="btn-mc-ghost border border-white/20 text-white hover:bg-white/10">
              <Phone className="h-4 w-4" />
              Call Intake Line
            </a>
          </div>

          {/* Quick trust strip */}
          <div className="mt-12 flex flex-wrap justify-center gap-x-8 gap-y-3">
            {[
              '24-Hour Placement Available',
              'W2 Caregivers Only',
              'RN Supervised',
              '4-County Maryland Coverage',
            ].map((item) => (
              <div key={item} className="flex items-center gap-2 text-sm text-white/50">
                <CheckCircle className="h-3.5 w-3.5 text-mc-leaf-400 shrink-0" />
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
