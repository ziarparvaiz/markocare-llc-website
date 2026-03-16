import Link from "next/link";
import Image from "next/image";
import {
  CheckCircle,
  ShieldCheck,
  ArrowRight,
  Star,
  Quote,
  MapPin,
  Phone,
  ClipboardList,
  UserCheck,
  Calendar,
  HeartHandshake,
  BadgeCheck,
  Users,
  Stethoscope,
  Lock,
  Clock,
  ChevronRight,
  type LucideIcon,
} from "lucide-react";
import AssessmentForm from "@/components/forms/AssessmentForm";
import CTABanner from "@/components/sections/CTABanner";
import { brand } from "@/config/brand";

/* ─── Types ─────────────────────────────────────────────────────────────── */

interface FAQ {
  q: string;
  a: string;
}

interface ServicePageProps {
  name: string;
  tagline: string;
  heroDesc: string;
  whoIsItFor: string;
  included: string[];
  safety: string[];
  faqs: FAQ[];
  icon: LucideIcon;
  relatedServices?: Array<{ name: string; slug: string }>;
  accentColor?: string;
}

/* ─── Static data (universal across all services) ────────────────────────── */

const HOW_CARE_WORKS = [
  {
    step: "01",
    title: "Free In-Home Assessment",
    desc: "A care coordinator meets with your family at no charge to understand your loved one's needs, daily routines, and personal goals.",
  },
  {
    step: "02",
    title: "RN-Designed Care Plan",
    desc: "Our Registered Nurse creates a personalized, medically-informed care plan built around your loved one's specific health needs and preferences.",
  },
  {
    step: "03",
    title: "Caregiver Matching",
    desc: "We carefully match your loved one with a background-checked, trained caregiver based on skills, personality, and schedule compatibility.",
  },
  {
    step: "04",
    title: "Ongoing Supervision & Support",
    desc: "Our RN conducts regular supervisory visits and our team remains available 24/7 to address questions or adjust the care plan as needs evolve.",
  },
];

const WHY_CHOOSE_US = [
  {
    icon: Stethoscope,
    title: "RN-Supervised Care",
    desc: "A Registered Nurse oversees every client's care plan and conducts regular supervisory visits — a clinical standard most home care agencies don't meet.",
  },
  {
    icon: BadgeCheck,
    title: "Verified Caregivers",
    desc: "All caregivers undergo state and federal background checks, reference verification, and competency testing before their very first visit.",
  },
  {
    icon: Lock,
    title: "Licensed & Insured",
    desc: "MarkoCare carries full liability insurance and workers' compensation coverage, protecting your family from any financial risk.",
  },
  {
    icon: UserCheck,
    title: "W2 Employee Caregivers",
    desc: "Our caregivers are W2 employees — not independent contractors — meaning they are accountable, trained, and fully supported by our agency.",
  },
  {
    icon: ClipboardList,
    title: "Personalized Care Plans",
    desc: "No two clients are alike. Every care plan is custom-built around your loved one's specific medical needs, schedule, and lifestyle.",
  },
  {
    icon: HeartHandshake,
    title: "Local Maryland Team",
    desc: "We are a Maryland-based agency with deep roots in the communities we serve. Our team is nearby and personally invested in your family's wellbeing.",
  },
];

const TESTIMONIALS = [
  {
    name: "Patricia M.",
    relation: "Daughter of a Howard County client",
    county: "Howard County",
    stars: 5,
    text: "The team at MarkoCare truly understands what it means to care. My mother's caregiver was not only professional but genuinely warm. The RN check-ins gave us real peace of mind during a difficult time.",
  },
  {
    name: "Robert T.",
    relation: "Post-surgical recovery client",
    county: "Anne Arundel County",
    stars: 5,
    text: "After my hip replacement, I wasn't sure how I'd manage at home. MarkoCare's caregiver arrived the day of discharge and handled everything. The coordination with my discharge planner was seamless.",
  },
  {
    name: "Sandra K.",
    relation: "Family caregiver – Respite client",
    county: "Carroll County",
    stars: 5,
    text: "Caring for my husband with dementia was overwhelming. MarkoCare's respite service gave me the break I desperately needed. They knew exactly how to work with him — patient, calm, and knowledgeable.",
  },
];

const HERO_TRUST_PILLS = [
  { icon: ShieldCheck, label: "RN-Supervised Care" },
  { icon: BadgeCheck, label: "Background-Checked Staff" },
  { icon: Lock, label: "Licensed & Insured" },
  { icon: Users, label: "Local Maryland Team" },
];

const SIDEBAR_COMMITMENTS = [
  "RN-supervised, individualized care plans",
  "State & federal background-checked caregivers",
  "Fully licensed and insured agency",
  "Consistent caregiver scheduling",
];

/* ─── Component ──────────────────────────────────────────────────────────── */

export default function ServicePageLayout({
  name,
  tagline,
  heroDesc,
  whoIsItFor,
  included,
  safety,
  faqs,
  icon: Icon,
  relatedServices = [],
  accentColor = "text-mc-leaf-600 bg-mc-leaf-50",
}: ServicePageProps) {
  return (
    <>
      {/* ══════════════════════════════════════════════════════════════════
          1. HERO — cinematic full-bleed background image
      ══════════════════════════════════════════════════════════════════ */}
      <section className="relative overflow-hidden text-white min-h-[80vh] md:h-screen">
        {/* ── Background image (fills entire section) ── */}
        <Image
          src="/ServicesHeroImage/servicesheroimage.jpg"
          alt=""
          fill
          className="object-cover object-center"
          sizes="100vw"
          priority
        />

        {/* ── Overlay layer 1: base darkness for readability ── */}
        <div className="absolute inset-0 bg-black/60" aria-hidden="true" />

        {/* ── Overlay layer 2: brand-tinted gradient — top warm, bottom deep ── */}
        <div
          className="absolute inset-0 bg-[linear-gradient(180deg,rgba(26,58,40,0.30)_0%,rgba(10,28,18,0.72)_100%)]"
          aria-hidden="true"
        />

        {/* ── Overlay layer 3: bottom fade into next section ── */}
        <div
          className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-mc-forest/80 to-transparent"
          aria-hidden="true"
        />

        {/* ── Radial glow anchored behind the title zone ── */}
        <div
          className="pointer-events-none absolute z-[9] top-[42%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-[560px] h-[340px] rounded-full bg-mc-leaf-400/[0.14] blur-[72px]"
          aria-hidden="true"
        />

        {/* ── Content ── */}
        <div className="absolute inset-0 z-10 flex flex-col items-center justify-center px-5 pt-[80px] pb-[40px] text-center">
          <div className="w-full max-w-[760px] mx-auto">
            {/* ① Breadcrumb */}
            <nav
              className="flex items-center justify-center gap-1.5 text-[11px] text-white/40 mb-9 tracking-wide"
              aria-label="Breadcrumb"
            >
              <Link href="/" className="hover:text-white/65 transition-colors">
                Home
              </Link>
              <ChevronRight
                className="h-2.5 w-2.5 opacity-50"
                aria-hidden="true"
              />
              <Link
                href="/services"
                className="hover:text-white/65 transition-colors"
              >
                Services
              </Link>
              <ChevronRight
                className="h-2.5 w-2.5 opacity-50"
                aria-hidden="true"
              />
              <span className="text-white/55">{name}</span>
            </nav>

            {/* ② Service icon — frosted glass badge */}
            <div className="flex justify-center mb-7">
              <div className="inline-flex items-center justify-center w-[62px] h-[62px] rounded-[16px] bg-white/[0.09] border border-white/[0.16] backdrop-blur-sm shadow-premium-lg">
                <Icon
                  className="h-[28px] w-[28px] text-white"
                  aria-hidden="true"
                />
              </div>
            </div>

            {/* ③ H1 — visual anchor */}
            <h1 className="text-[48px] sm:text-[56px] md:text-[64px] font-bold leading-[1.04] tracking-[-0.025em] text-white mb-6">
              {name}
            </h1>

            {/* ④ Tagline — green highlight pill */}
            <div className="flex justify-center mb-8">
              <span className="inline-flex items-center gap-2 rounded-full bg-[rgba(124,204,114,0.13)] border border-[rgba(124,204,114,0.32)] px-5 py-[9px] text-[14px] font-medium text-mc-leaf-300 leading-snug max-w-[580px] text-center">
                {tagline}
              </span>
            </div>

            {/* ⑤ Description */}
            <p className="text-[15px] md:text-[16px] text-white/80 leading-[1.78] mb-10 max-w-[640px] mx-auto">
              {heroDesc}
            </p>

            {/* ⑥ CTA buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-11">
              <Link
                href="/contact"
                className="btn-mc-primary inline-flex items-center gap-2.5 group h-[54px] px-8 rounded-xl text-[15px] font-semibold shadow-[0_8px_28px_rgba(82,184,72,0.35)] hover:shadow-[0_12px_36px_rgba(82,184,72,0.50)] transition-shadow"
              >
                Request Free Assessment
                <ArrowRight
                  className="h-4 w-4 group-hover:translate-x-0.5 transition-transform"
                  aria-hidden="true"
                />
              </Link>
              <a
                href={`tel:${brand.phone}`}
                className="inline-flex items-center gap-2.5 h-[54px] px-8 rounded-xl border border-white/[0.28] bg-white/[0.06] hover:bg-white/[0.13] hover:border-white/[0.45] text-[15px] font-semibold text-white transition-all duration-200"
              >
                <Phone
                  className="h-4 w-4 text-mc-leaf-300 shrink-0"
                  aria-hidden="true"
                />
                {brand.phoneDisplay}
              </a>
            </div>

            {/* ⑦ Trust badge row */}
            <div className="flex flex-wrap items-center justify-center gap-3">
              {HERO_TRUST_PILLS.map(({ icon: PillIcon, label }) => (
                <div
                  key={label}
                  className="flex items-center gap-2 rounded-full bg-white/[0.08] border border-white/[0.20] backdrop-blur-sm px-[18px] py-[10px] text-[11px] font-semibold text-white/75 tracking-wide hover:bg-white/[0.13] hover:text-white/95 transition-all duration-200"
                >
                  <PillIcon
                    className="h-3.5 w-3.5 text-mc-leaf-300 shrink-0"
                    aria-hidden="true"
                  />
                  {label}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════
          2–6. MAIN CONTENT  +  STICKY SIDEBAR FORM
      ══════════════════════════════════════════════════════════════════ */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container-pad">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 xl:gap-16">
            {/* ── Left: scrolling detail content (2/3) ── */}
            <div className="lg:col-span-2 space-y-14">
              {/* ── 2. Care Activities Included ── */}
              <div>
                <span className="eyebrow">What&apos;s Covered</span>
                <h2 className="text-2xl md:text-3xl font-bold text-mc-forest mt-1 mb-2">
                  Care Activities Included
                </h2>
                <p className="text-gray-500 mb-6">
                  Every visit follows your loved one&apos;s personalized care
                  plan and includes:
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {included.map((item) => (
                    <div
                      key={item}
                      className="flex items-start gap-3 rounded-xl border border-mc-stone bg-mc-sage px-4 py-3.5 transition-colors hover:bg-mc-leaf-50 hover:border-mc-leaf-200"
                    >
                      <CheckCircle
                        className="h-4 w-4 text-mc-leaf-500 shrink-0 mt-0.5"
                        aria-hidden="true"
                      />
                      <span className="text-sm text-gray-700 leading-snug">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Mobile CTA — assessment (hidden on desktop) */}
              <div className="lg:hidden rounded-2xl bg-mc-forest text-white p-6">
                <h3 className="text-lg font-bold mb-2">
                  Ready to get started?
                </h3>
                <p className="text-sm text-white/70 mb-4">
                  Request a free, no-obligation in-home assessment today.
                </p>
                <Link
                  href="/contact"
                  className="btn-mc-primary w-full justify-center block text-center"
                >
                  Request Free Assessment
                </Link>
              </div>

              {/* ── 3. Who This Is For ── */}
              <div className="rounded-2xl border border-mc-stone bg-mc-cream p-7">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-9 h-9 rounded-xl bg-mc-leaf-100 flex items-center justify-center shrink-0">
                    <Users
                      className="h-4 w-4 text-mc-leaf-600"
                      aria-hidden="true"
                    />
                  </div>
                  <div>
                    <span className="eyebrow text-xs">Best Suited For</span>
                    <h2 className="text-xl font-bold text-mc-forest leading-tight">
                      Who Is This Service For?
                    </h2>
                  </div>
                </div>
                <p className="text-gray-600 leading-relaxed">{whoIsItFor}</p>
              </div>

              {/* ── 4. How Care Works — step timeline ── */}
              <div>
                <span className="eyebrow">Simple Process</span>
                <h2 className="text-2xl md:text-3xl font-bold text-mc-forest mt-1 mb-2">
                  How Care Works
                </h2>
                <p className="text-gray-500 mb-8">
                  Getting started is straightforward. Here&apos;s what to expect
                  from day one:
                </p>

                <div className="space-y-0">
                  {HOW_CARE_WORKS.map((step, idx) => (
                    <div key={step.step} className="flex gap-5 relative">
                      {/* Vertical connector line */}
                      {idx < HOW_CARE_WORKS.length - 1 && (
                        <div
                          className="absolute left-6 top-14 w-px h-full bg-mc-stone"
                          aria-hidden="true"
                        />
                      )}
                      {/* Step circle */}
                      <div className="shrink-0 w-12 h-12 rounded-2xl bg-mc-forest text-white flex items-center justify-center text-sm font-bold z-10 shadow-premium">
                        {step.step}
                      </div>
                      <div className="pb-8 pt-1">
                        <h3 className="text-base font-bold text-mc-forest mb-1">
                          {step.title}
                        </h3>
                        <p className="text-sm text-gray-600 leading-relaxed">
                          {step.desc}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* ── 5. Safety & RN Oversight ── */}
              <div className="rounded-2xl bg-mc-forest text-white p-7">
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-10 h-10 rounded-xl bg-mc-leaf-400/20 flex items-center justify-center shrink-0">
                    <ShieldCheck
                      className="h-5 w-5 text-mc-leaf-300"
                      aria-hidden="true"
                    />
                  </div>
                  <div>
                    <p className="text-xs text-mc-leaf-400 font-semibold uppercase tracking-wide">
                      Your Family&apos;s Security
                    </p>
                    <h2 className="text-xl font-bold">
                      Safety &amp; RN Oversight
                    </h2>
                  </div>
                </div>
                <ul className="space-y-3">
                  {safety.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-3 text-sm text-white/85"
                    >
                      <CheckCircle
                        className="h-4 w-4 text-mc-leaf-400 shrink-0 mt-0.5"
                        aria-hidden="true"
                      />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Mobile CTA — phone (hidden on desktop) */}
              <div className="lg:hidden rounded-2xl border border-mc-leaf-200 bg-mc-leaf-50 p-6">
                <p className="text-sm font-semibold text-mc-forest mb-1">
                  Questions about {name}?
                </p>
                <a
                  href={`tel:${brand.phone}`}
                  className="flex items-center gap-2 text-mc-leaf-700 font-bold text-xl"
                >
                  <Phone className="h-5 w-5" aria-hidden="true" />
                  {brand.phoneDisplay}
                </a>
                <p className="text-xs text-gray-500 mt-1">
                  Mon–Fri 8 am–6 pm · 24/7 on-call support
                </p>
              </div>

              {/* ── 6. FAQ ── */}
              {faqs.length > 0 && (
                <div>
                  <span className="eyebrow">Common Questions</span>
                  <h2 className="text-2xl md:text-3xl font-bold text-mc-forest mt-1 mb-6">
                    Frequently Asked Questions
                  </h2>
                  <div className="space-y-4">
                    {faqs.map((faq) => (
                      <div
                        key={faq.q}
                        className="rounded-2xl border border-mc-stone bg-white p-5 shadow-premium"
                      >
                        <h3 className="font-semibold text-mc-forest mb-2">
                          {faq.q}
                        </h3>
                        <p className="text-sm text-gray-600 leading-relaxed">
                          {faq.a}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* ── 7. Related Services ── */}
              {relatedServices.length > 0 && (
                <div>
                  <span className="eyebrow">Explore More</span>
                  <h2 className="text-xl font-bold text-mc-forest mt-1 mb-5">
                    Related Services
                  </h2>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    {relatedServices.map((s) => (
                      <Link
                        key={s.slug}
                        href={`/services/${s.slug}`}
                        className="group flex flex-col gap-2 rounded-xl border border-mc-stone bg-mc-sage p-4 hover:border-mc-leaf-300 hover:bg-mc-leaf-50 transition-all"
                      >
                        <span className="text-sm font-semibold text-mc-forest group-hover:text-mc-leaf-700 transition-colors">
                          {s.name}
                        </span>
                        <span className="flex items-center gap-1 text-xs text-mc-leaf-600 font-medium">
                          Learn more{" "}
                          <ArrowRight
                            className="h-3 w-3 group-hover:translate-x-0.5 transition-transform"
                            aria-hidden="true"
                          />
                        </span>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* ── Right: Sticky sidebar form (desktop only) ── */}
            <div className="hidden lg:block">
              <div className="sticky top-24 space-y-5">
                {/* Assessment form card */}
                <div className="rounded-3xl border border-mc-leaf-100 bg-mc-sage p-6 shadow-premium">
                  <div className="flex items-center gap-2 mb-1">
                    <Calendar
                      className="h-4 w-4 text-mc-leaf-600"
                      aria-hidden="true"
                    />
                    <h3 className="text-base font-bold text-mc-forest">
                      Request a Free Assessment
                    </h3>
                  </div>
                  <p className="text-xs text-gray-500 mb-5">
                    No obligation. A care coordinator will contact you within 1
                    business day.
                  </p>
                  <AssessmentForm />
                </div>

                {/* Phone card */}
                <div className="rounded-2xl border border-mc-stone bg-white p-5">
                  <p className="text-xs font-semibold text-gray-400 uppercase tracking-wide mb-3">
                    Prefer to call?
                  </p>
                  <a
                    href={`tel:${brand.phone}`}
                    className="flex items-center gap-2 text-mc-forest font-bold text-xl hover:text-mc-leaf-700 transition-colors"
                  >
                    <Phone
                      className="h-5 w-5 text-mc-leaf-600"
                      aria-hidden="true"
                    />
                    {brand.phoneDisplay}
                  </a>
                  <p className="text-xs text-gray-500 mt-1">
                    {brand.officeHours}
                  </p>
                  <p className="text-xs text-mc-leaf-600 font-medium mt-0.5">
                    {brand.emergencyLine}
                  </p>
                </div>

                {/* Mini commitments card */}
                <div className="rounded-2xl border border-mc-stone bg-mc-cream p-5">
                  <p className="text-xs font-semibold text-gray-400 uppercase tracking-wide mb-3">
                    Our commitments
                  </p>
                  <ul className="space-y-2.5">
                    {SIDEBAR_COMMITMENTS.map((item) => (
                      <li
                        key={item}
                        className="flex items-start gap-2 text-xs text-gray-700"
                      >
                        <CheckCircle
                          className="h-3.5 w-3.5 text-mc-leaf-500 shrink-0 mt-0.5"
                          aria-hidden="true"
                        />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════
          8. WHY FAMILIES CHOOSE MARKOCARE — full-width trust feature grid
      ══════════════════════════════════════════════════════════════════ */}
      <section className="py-16 md:py-24 bg-mc-sage border-y border-mc-stone">
        <div className="container-pad">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="eyebrow">Our Difference</span>
            <h2 className="text-2xl md:text-3xl font-bold text-mc-forest mt-2">
              Why Families Choose MarkoCare
            </h2>
            <p className="text-gray-600 mt-3 leading-relaxed">
              We combine clinical expertise with genuine compassion — giving
              families the confidence that their loved one is in safe, capable
              hands.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {WHY_CHOOSE_US.map(({ icon: FeatureIcon, title, desc }) => (
              <div
                key={title}
                className="rounded-2xl bg-white border border-mc-stone p-6 shadow-premium"
              >
                <div className="w-10 h-10 rounded-xl bg-mc-leaf-50 border border-mc-leaf-100 flex items-center justify-center mb-4">
                  <FeatureIcon
                    className="h-5 w-5 text-mc-leaf-600"
                    aria-hidden="true"
                  />
                </div>
                <h3 className="font-bold text-mc-forest mb-2">{title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════
          9. SERVICE AREAS — county cards
      ══════════════════════════════════════════════════════════════════ */}
      <section className="py-16 bg-white">
        <div className="container-pad">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="eyebrow">Where We Serve</span>
            <h2 className="text-2xl md:text-3xl font-bold text-mc-forest mt-2">
              {name} Across Maryland
            </h2>
            <p className="text-gray-600 mt-3">
              We proudly serve families across four Maryland counties. Click
              your county to learn more about local care options.
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {brand.countyPages.map((county) => (
              <Link
                key={county.slug}
                href="/service-areas"
                className="group flex flex-col items-center gap-3 rounded-2xl border border-mc-stone bg-mc-sage p-6 text-center hover:border-mc-leaf-300 hover:bg-mc-leaf-50 transition-all"
              >
                <div className="w-10 h-10 rounded-xl bg-mc-forest flex items-center justify-center group-hover:bg-mc-leaf-600 transition-colors">
                  <MapPin className="h-5 w-5 text-white" aria-hidden="true" />
                </div>
                <div>
                  <p className="font-semibold text-mc-forest text-sm">
                    {county.name}
                  </p>
                  <span className="flex items-center gap-1 text-xs text-mc-leaf-600 font-medium justify-center mt-1">
                    View details{" "}
                    <ArrowRight
                      className="h-3 w-3 group-hover:translate-x-0.5 transition-transform"
                      aria-hidden="true"
                    />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════
          10. TESTIMONIALS — social proof
      ══════════════════════════════════════════════════════════════════ */}
      <section className="py-16 md:py-24 bg-mc-sage border-y border-mc-stone">
        <div className="container-pad">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="eyebrow">What Families Say</span>
            <h2 className="text-2xl md:text-3xl font-bold text-mc-forest mt-2">
              Trusted by Maryland Families
            </h2>
            <p className="text-gray-600 mt-3">
              Real families share their experiences with MarkoCare&apos;s
              compassionate care team.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {TESTIMONIALS.map((t) => (
              <div
                key={t.name}
                className="relative bg-white rounded-2xl border border-mc-stone p-6 shadow-premium"
              >
                <Quote
                  className="absolute top-4 right-4 h-8 w-8 text-mc-leaf-100"
                  aria-hidden="true"
                />
                <div className="flex gap-0.5 mb-4">
                  {Array.from({ length: t.stars }).map((_, i) => (
                    <Star
                      key={i}
                      className="h-4 w-4 fill-amber-400 text-amber-400"
                      aria-hidden="true"
                    />
                  ))}
                </div>
                <p className="text-sm text-gray-700 leading-relaxed mb-5 italic">
                  &ldquo;{t.text}&rdquo;
                </p>
                <div className="border-t border-mc-stone pt-4">
                  <p className="font-semibold text-mc-forest text-sm">
                    {t.name}
                  </p>
                  <p className="text-xs text-gray-500 mt-0.5">{t.relation}</p>
                  <span className="inline-flex items-center gap-1 mt-2 text-xs font-semibold text-mc-leaf-700 bg-mc-leaf-50 border border-mc-leaf-100 rounded-full px-2.5 py-0.5">
                    <MapPin className="h-3 w-3" aria-hidden="true" />
                    {t.county}
                  </span>
                </div>
              </div>
            ))}
          </div>

          <p className="text-center text-xs text-gray-400 mt-6">
            * Testimonials represent the experiences of real clients. Individual
            outcomes may vary.
          </p>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════
          11. CONVERSION CTA — dark forest, high-contrast close
      ══════════════════════════════════════════════════════════════════ */}
      <section className="py-16 md:py-24 bg-mc-forest text-white">
        <div className="container-pad">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-4 py-1.5 text-xs font-semibold text-white/90 mb-6">
              <Clock
                className="h-3.5 w-3.5 text-mc-leaf-300"
                aria-hidden="true"
              />
              Free, No-Obligation Assessment
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Start {name}?
            </h2>
            <p className="text-white/75 text-lg leading-relaxed mb-8 max-w-xl mx-auto">
              Our local Maryland care team is standing by. Let us create a
              personalized care plan for your loved one — with no pressure and
              no obligation.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/contact"
                className="btn-mc-primary px-8 py-3.5 text-base"
              >
                Request Free Assessment
              </Link>
              <a
                href={`tel:${brand.phone}`}
                className="flex items-center gap-2 text-white/90 hover:text-white font-semibold transition-colors"
              >
                <Phone className="h-4 w-4" aria-hidden="true" />
                {brand.phoneDisplay}
              </a>
            </div>

            {/* Reassurance row */}
            <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 mt-8 text-xs text-white/60">
              <span>✓ No contracts required</span>
              <span>✓ Care starts when you're ready</span>
              <span>✓ Speaks with a real coordinator</span>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════
          12. CTABANNER — site-wide footer CTA strip
      ══════════════════════════════════════════════════════════════════ */}
      <CTABanner
        title={`Quality ${name} in Maryland`}
        subtitle="MarkoCare delivers professional, RN-supervised home care to families across Howard, Carroll, Anne Arundel, and Frederick Counties."
        variant="green"
      />
    </>
  );
}
