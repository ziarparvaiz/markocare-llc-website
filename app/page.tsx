import type { Metadata } from "next";
import Link from "next/link";
import {
  Phone,
  ArrowRight,
  MapPin,
  CheckCircle,
  Clock,
  Hospital,
  ShieldCheck,
  UserCheck,
  Stethoscope,
  Heart,
  Users,
  Brain,
  RefreshCw,
  Ribbon,
  Star,
  Award,
} from "lucide-react";
import { brand } from "@/config/brand";
import LocalBusinessSchema from "@/components/seo/LocalBusinessSchema";
import HomeFAQSection from "@/components/sections/HomeFAQSection";
import Testimonials from "@/components/sections/Testimonials";

export const metadata: Metadata = {
  title: "Home Care Agency Maryland | MarkoCare",
  description:
    "Maryland's RSA-licensed home care agency. Compassionate in-home care across Howard, Anne Arundel, Carroll & Frederick Counties. Call for a free consultation.",
  keywords: [
    "home care agency Maryland",
    "senior home care Maryland",
    "in-home care Maryland",
    "RSA licensed home care agency",
  ],
  alternates: {
    canonical: brand.siteUrl,
  },
  openGraph: {
    title: "Home Care Agency Maryland | MarkoCare",
    description:
      "Maryland's RSA-licensed home care agency. Compassionate in-home care across Howard, Anne Arundel, Carroll & Frederick Counties. Call for a free consultation.",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630, alt: "MarkoCare caregiver assisting a senior at home in Maryland" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Home Care Agency Maryland | MarkoCare",
    description:
      "Maryland's RSA-licensed home care agency. Compassionate in-home care across Howard, Anne Arundel, Carroll & Frederick Counties.",
  },
  robots: { index: true, follow: true },
};

/* ─── Static data ──────────────────────────────────────────────────────────── */

const trustMetrics = [
  {
    icon: Stethoscope,
    title: "RN Supervised Care",
    desc: "Every care plan developed and monitored by a Registered Nurse",
  },
  {
    icon: UserCheck,
    title: "W2 Employee Model",
    desc: "All caregivers are direct employees — never independent contractors",
  },
  {
    icon: ShieldCheck,
    title: "Fully Insured & Bonded",
    desc: "Comprehensive liability coverage protecting your family",
  },
  {
    icon: Clock,
    title: "24/7 On-Call Support",
    desc: "Around-the-clock availability for urgent care needs",
  },
];

const services = [
  {
    icon: Heart,
    name: "Personal Care",
    slug: "personal-care",
    desc: "Bathing, dressing, grooming, mobility assistance — our caregivers deliver every service with the respect and sensitivity your loved one deserves.",
  },
  {
    icon: Brain,
    name: "Dementia Care",
    slug: "dementia-care",
    desc: "Our specially trained caregivers create safe, structured routines that reduce anxiety, support memory, and bring peace of mind to families navigating Alzheimer's or other forms of dementia.",
  },
  {
    icon: Hospital,
    name: "Post-Hospital Support",
    slug: "post-hospital-support",
    desc: "Recovery at home is possible with the right support. We provide medication management, wound care assistance, and accompaniment to therapy so your loved one heals safely.",
  },
  {
    icon: Ribbon,
    name: "Cancer Care Support",
    slug: "cancer-care-support",
    desc: "We walk alongside clients through every stage of treatment and recovery — helping manage fatigue, tracking medications, and providing the emotional encouragement that makes a real difference.",
  },
  {
    icon: RefreshCw,
    name: "Respite Care",
    slug: "respite-care",
    desc: "Family caregivers need rest too. Our respite services give you a break — hourly, daily, or weekly — while your loved one remains in caring, capable hands.",
  },
  {
    icon: Users,
    name: "Companion Care",
    slug: "companion-care",
    desc: "Loneliness diminishes quality of life. Our caregivers engage clients in meaningful conversation, activities, and outings so every day feels purposeful and connected.",
  },
];

/* ─── Component ────────────────────────────────────────────────────────────── */

export default function HomePage() {
  return (
    <>
      <LocalBusinessSchema />

      {/* ════════════════════════════════════════════════════════════════════════
          §1  HERO — Split layout, clean white/cream, serif headline
      ════════════════════════════════════════════════════════════════════════ */}
      <section className="relative overflow-hidden bg-mc-cream">
        {/* Soft sage panel on the right half — only on large screens */}
        <div className="absolute inset-y-0 right-0 w-[50%] bg-mc-sage hidden lg:block" />

        <div className="container-pad relative py-20 md:py-28 lg:py-32">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            {/* LEFT — Copy */}
            <div className="lg:pr-6 xl:pr-12">
              {/* RSA status pill */}
              <div className="mc-status-pill mb-7 w-fit">
                <span className="w-2 h-2 rounded-full bg-mc-leaf-400 shrink-0" />
                <span className="text-xs font-semibold text-mc-leaf-600 tracking-wide">
                  {brand.licenseStatusLabel}
                </span>
              </div>

              {/* Headline */}
              <h1 className="heading-display text-4xl sm:text-5xl lg:text-[3.4rem] leading-[1.08] mb-6">
                Trusted Home Care
                <br />
                <span className="text-mc-leaf-400">for Maryland</span> Families
              </h1>

              {/* Lead */}
              <p className="text-lg text-gray-600 leading-relaxed mb-8 max-w-[520px]">
                MarkoCare provides trusted in-home care for seniors and adults
                across Maryland — delivered by compassionate caregivers and
                clinically supervised by registered nurses.
              </p>

              {/* Trust bullets */}
              <ul className="space-y-3.5 mb-9">
                {[
                  {
                    label: "RN Supervision",
                    desc: "All care plans clinically overseen",
                  },
                  {
                    label: "W2 Caregivers",
                    desc: "Direct employees, never contractors",
                  },
                  {
                    label: "24/7 Support",
                    desc: "Around-the-clock on-call availability",
                  },
                ].map((item) => (
                  <li key={item.label} className="flex items-center gap-3">
                    <div className="w-6 h-6 rounded-full bg-mc-leaf-100 flex items-center justify-center shrink-0">
                      <CheckCircle className="h-3.5 w-3.5 text-mc-leaf-500" />
                    </div>
                    <span className="text-sm text-gray-700">
                      <strong className="font-semibold text-mc-forest">
                        {item.label}:
                      </strong>{" "}
                      {item.desc}
                    </span>
                  </li>
                ))}
              </ul>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mb-8">
                <Link
                  href="/contact"
                  className="btn-mc-primary text-[0.9rem] px-8 py-4"
                >
                  Request Free In-Home Assessment
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <Link
                  href="/referral-partners"
                  className="flex items-center gap-2 text-sm font-semibold text-mc-forest hover:text-mc-leaf-500 transition-colors py-2"
                >
                  For Referral Partners
                  <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </div>

              {/* Phone row */}
              <div className="flex items-center gap-3 pt-2 border-t border-mc-stone">
                <div className="w-9 h-9 rounded-xl bg-mc-leaf-50 border border-mc-leaf-100 flex items-center justify-center">
                  <Phone className="h-4 w-4 text-mc-leaf-500" />
                </div>
                <div>
                  <p className="text-[11px] text-gray-400 uppercase tracking-wide">
                    Call anytime
                  </p>
                  <a
                    href={`tel:${brand.phone}`}
                    className="text-sm font-bold text-mc-forest hover:text-mc-leaf-500 transition-colors"
                  >
                    {brand.phoneDisplay}
                  </a>
                </div>
                <span className="text-gray-300 mx-2">|</span>
                <p className="text-xs text-gray-500">{brand.emergencyLine}</p>
              </div>
            </div>

            {/* RIGHT — Image area */}
            <div className="relative lg:h-[580px]">
              {/* Main image placeholder card */}
              <div className="relative h-full min-h-[420px] rounded-3xl overflow-hidden bg-gradient-to-br from-mc-leaf-100 via-mc-leaf-50 to-mc-sage">
                {/* Decorative circles */}
                <div className="absolute -top-12 -right-12 w-64 h-64 rounded-full bg-mc-leaf-200/40" />
                <div className="absolute -bottom-16 -left-8 w-48 h-48 rounded-full bg-mc-leaf-100/60" />

                {/* Hero image — public/HeroSectionImage/heroimage.png served from root */}
                <img
                  src="/HeroSectionImage/heroimage.png"
                  alt="MarkoCare — compassionate home care for Maryland families"
                  className="absolute inset-0 w-full h-full object-cover"
                />

                {/* Bottom gradient for badge legibility */}
                <div className="absolute bottom-0 left-0 right-0 h-36 bg-gradient-to-t from-white/70 to-transparent" />

                {/* Floating trust card */}
                <div className="absolute bottom-5 left-5 right-5 bg-white rounded-2xl p-4 shadow-premium-xl border border-mc-stone/60">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-mc-leaf-50 border border-mc-leaf-100 flex items-center justify-center shrink-0">
                      <ShieldCheck className="h-5 w-5 text-mc-leaf-500" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-xs font-bold text-mc-forest leading-tight">
                        Maryland Residential Service Agency
                      </p>
                      <p className="text-[11px] text-gray-400 mt-0.5">
                        Licensure In Progress
                      </p>
                    </div>
                    <div className="flex gap-0.5 shrink-0">
                      {[1, 2, 3, 4, 5].map((i) => (
                        <Star
                          key={i}
                          className="h-3 w-3 fill-amber-400 text-amber-400"
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating counties stat */}
              <div className="absolute -top-5 -right-5 bg-white rounded-2xl p-4 shadow-premium-xl border border-mc-stone hidden sm:block">
                <p className="text-3xl font-serif font-bold text-mc-leaf-400 leading-none">
                  4+
                </p>
                <p className="text-[11px] text-gray-500 mt-1 leading-tight">
                  Maryland
                  <br />
                  Counties
                </p>
              </div>

              {/* Floating IPOP badge */}
              <div className="absolute top-1/2 -left-6 -translate-y-1/2 bg-mc-forest rounded-2xl p-3.5 shadow-premium-xl hidden lg:block">
                <div className="flex items-center gap-2.5">
                  <Hospital className="h-4 w-4 text-mc-leaf-300 shrink-0" />
                  <div>
                    <p className="text-[10px] font-bold text-white leading-tight">
                      IPOP Ready
                    </p>
                    <p className="text-[9px] text-white/50 mt-0.5">
                      Post-Hospital Care
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════════════════
          §2  TRUST METRICS STRIP — Dark forest background, 4 pillars
      ════════════════════════════════════════════════════════════════════════ */}
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
                  <p className="text-xs text-white/50 mt-1 leading-relaxed">
                    {desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════════════════
          §3  ABOUT — Two-column, image left, copy right
      ════════════════════════════════════════════════════════════════════════ */}
      <section className="section-pad bg-white">
        <div className="container-pad">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 xl:gap-20 items-center">
            {/* Image column */}
            <div className="relative max-w-md mx-auto lg:mx-0 w-full">
              {/* Dot-grid decoration */}
              <div
                className="absolute -top-7 -left-7 w-28 h-28 opacity-20 pointer-events-none"
                style={{
                  backgroundImage:
                    "radial-gradient(circle, #52b848 1.5px, transparent 1.5px)",
                  backgroundSize: "10px 10px",
                }}
              />

              {/* Image area */}
              <div className="relative aspect-[4/5] rounded-3xl overflow-hidden bg-gradient-to-br from-mc-sage to-mc-leaf-100">
                <img
                  src="/TeamCaregiverPhoto/caregiverphoto.png"
                  alt="MarkoCare team and caregivers — professional, compassionate home care"
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </div>

              {/* Floating 25+ stat */}
              <div className="absolute -right-6 bottom-14 bg-white rounded-2xl p-5 shadow-premium-xl border border-mc-stone">
                <p className="text-4xl font-serif font-bold text-mc-leaf-400 leading-none">
                  25+
                </p>
                <p className="text-xs text-gray-500 mt-2 leading-tight">
                  Years Combined
                  <br />
                  Experience
                </p>
              </div>

              {/* Accent rectangle */}
              <div className="absolute -bottom-4 -left-4 w-24 h-24 rounded-2xl bg-mc-leaf-50 border border-mc-leaf-100 -z-10" />
            </div>

            {/* Copy column */}
            <div>
              <span className="eyebrow">About MarkoCare</span>
              <h2 className="heading-display text-3xl md:text-4xl mt-3 mb-5">
                Where Professional Care
                <br />
                Feels Like Family
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                MarkoCare was founded on a straightforward conviction: families
                navigating illness, aging, or recovery deserve a care partner
                who shows up — reliably, compassionately, and professionally. We
                combine rigorous clinical oversight with the kind of
                relationship-centered approach that truly transforms a client's
                daily life.
              </p>
              <p className="text-gray-600 leading-relaxed mb-8">
                Today we serve families across Howard, Carroll, Anne Arundel,
                and Frederick Counties — each client receiving individualized
                attention from a team that genuinely treats them like family.
                Every caregiver is a background-checked, trained W2 employee,
                held to the highest professional standards.
              </p>

              {/* Feature list */}
              <ul className="space-y-3.5 mb-9">
                {[
                  "RN-supervised care plans for every client",
                  "W2 employees with full background verification",
                  "Private pay and Medicaid-ready placement",
                  "Dedicated care coordinator for every family",
                ].map((item) => (
                  <li
                    key={item}
                    className="flex items-center gap-3 text-sm text-gray-700"
                  >
                    <CheckCircle className="h-4 w-4 text-mc-leaf-400 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>

              {/* Stat row */}
              <div className="flex items-center gap-8 mb-9 py-5 border-y border-mc-stone">
                {[
                  { value: "4+", label: "Maryland Counties" },
                  { value: "RN", label: "Supervised Care" },
                  { value: "W2", label: "Employee Model" },
                  { value: "24/7", label: "On-Call Support" },
                ].map((s) => (
                  <div key={s.label} className="text-center">
                    <p className="text-2xl font-serif font-bold text-mc-leaf-400">
                      {s.value}
                    </p>
                    <p className="text-[11px] text-gray-400 mt-0.5 leading-tight">
                      {s.label}
                    </p>
                  </div>
                ))}
              </div>

              <Link href="/about" className="btn-mc-primary">
                Our Story & Mission
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════════════════
          §4  SERVICES GRID — 6 cards on sage background
      ════════════════════════════════════════════════════════════════════════ */}
      <section className="section-pad bg-mc-sage">
        <div className="container-pad">
          {/* Header */}
          <div className="text-center mb-14 max-w-2xl mx-auto">
            <span className="eyebrow">Our Services</span>
            <h2 className="heading-display text-3xl md:text-4xl mt-3 mb-4">
              Comprehensive Care for Every Stage of Life
            </h2>
            <p className="text-gray-600 leading-relaxed">
              From daily personal care to specialized support, we meet your
              family where you are — with a personalized plan and a caregiver
              who genuinely cares.
            </p>
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {services.map(({ icon: Icon, name, slug, desc }) => (
              <Link
                key={slug}
                href={`/services/${slug}`}
                className="mc-card-hover group flex flex-col gap-5"
              >
                <div className="w-12 h-12 rounded-2xl bg-mc-leaf-50 border border-mc-leaf-100 flex items-center justify-center group-hover:bg-mc-leaf-100 transition-colors">
                  <Icon className="h-5 w-5 text-mc-leaf-500" />
                </div>
                <div className="flex-1">
                  <h3 className="font-serif font-semibold text-lg text-mc-forest mb-2 group-hover:text-mc-leaf-500 transition-colors leading-snug">
                    {name}
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    {desc}
                  </p>
                </div>
                <div className="flex items-center gap-1.5 text-sm font-semibold text-mc-leaf-500 group-hover:gap-3 transition-all duration-200 mt-auto">
                  Learn More <ArrowRight className="h-3.5 w-3.5" />
                </div>
              </Link>
            ))}
          </div>

          {/* CTA */}
          <div className="mt-11 text-center">
            <Link href="/services" className="btn-mc-outline">
              View All Services
            </Link>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════════════════
          §5  REFERRAL / HOSPITAL BLOCK — Dark forest, professional tone
      ════════════════════════════════════════════════════════════════════════ */}
      <section className="section-pad bg-mc-forest relative overflow-hidden">
        {/* Subtle dot grid texture */}
        <div
          className="absolute inset-0 opacity-[0.035] pointer-events-none"
          style={{
            backgroundImage:
              "radial-gradient(circle at 1px 1px, white 1px, transparent 0)",
            backgroundSize: "24px 24px",
          }}
        />

        <div className="container-pad relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 xl:gap-16 items-center">
            {/* Copy */}
            <div>
              <span className="inline-block text-xs font-bold uppercase tracking-widest text-mc-leaf-300 mb-5">
                For Healthcare Professionals
              </span>
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-white mb-5 leading-tight">
                A Trusted Partner for
                <br />
                Discharge Planners
              </h2>
              <p className="text-white/65 leading-relaxed mb-5 text-[0.95rem]">
                We understand the urgency and complexity of post-hospital
                placements. MarkoCare provides 24-hour intake response,
                RN-supervised care plans, and direct coordination with your
                discharge team to ensure safe, seamless transitions from
                hospital to home.
              </p>

              {/* 24-hr highlight chip */}
              <div className="inline-flex items-center gap-3 rounded-2xl bg-mc-leaf-400/20 border border-mc-leaf-400/30 px-5 py-3 mb-8">
                <Clock className="h-4 w-4 text-mc-leaf-300 shrink-0" />
                <span className="text-sm font-semibold text-mc-leaf-200">
                  24-Hour Intake Response Guaranteed
                </span>
              </div>

              <div className="flex flex-col sm:flex-row gap-3.5">
                <Link href="/referral-partners" className="btn-mc-primary">
                  Become a Referral Partner
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <a href={`tel:${brand.phone}`} className="btn-mc-white">
                  <Phone className="h-4 w-4" />
                  {brand.phoneDisplay}
                </a>
              </div>
            </div>

            {/* Feature card grid */}
            <div className="grid grid-cols-2 gap-4">
              {[
                {
                  icon: Hospital,
                  title: "Discharge Coordination",
                  desc: "24-hour placement readiness for urgent discharges",
                },
                {
                  icon: Stethoscope,
                  title: "RN Care Oversight",
                  desc: "Clinical transition plans developed by our Registered Nurse",
                },
                {
                  icon: ShieldCheck,
                  title: "Insurance Verified",
                  desc: "We verify coverage before every placement",
                },
                {
                  icon: Award,
                  title: "Dedicated Intake Line",
                  desc: "Priority access and direct line for referral partners",
                },
              ].map(({ icon: Icon, title, desc }) => (
                <div
                  key={title}
                  className="rounded-2xl bg-white/[0.06] border border-white/10 p-5 transition-colors hover:bg-white/10"
                >
                  <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center mb-4">
                    <Icon className="h-5 w-5 text-mc-leaf-300" />
                  </div>
                  <h3 className="text-sm font-semibold text-white mb-1.5">
                    {title}
                  </h3>
                  <p className="text-xs text-white/50 leading-relaxed">
                    {desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════════════════
          §6  TESTIMONIALS
      ════════════════════════════════════════════════════════════════════════ */}
      <Testimonials />

      {/* ════════════════════════════════════════════════════════════════════════
          §7  SERVICE AREAS — County links on sage background
      ════════════════════════════════════════════════════════════════════════ */}
      <section className="section-pad bg-mc-sage">
        <div className="container-pad">
          <div className="text-center mb-11">
            <span className="eyebrow">Service Areas</span>
            <h2 className="heading-display text-3xl md:text-4xl mt-3">
              Serving Maryland Families
              <br />
              Across Four Counties
            </h2>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-5">
            {brand.countyPages.map((county) => (
              <Link
                key={county.slug}
                href="/service-areas"
                className="mc-card-hover group flex flex-col items-center text-center py-8 gap-4"
              >
                <div className="w-12 h-12 rounded-2xl bg-mc-leaf-50 border border-mc-leaf-100 flex items-center justify-center group-hover:bg-mc-leaf-100 transition-colors">
                  <MapPin className="h-5 w-5 text-mc-leaf-500" />
                </div>
                <div>
                  <h3 className="font-serif font-semibold text-mc-forest group-hover:text-mc-leaf-500 transition-colors text-[0.95rem]">
                    {county.name}
                  </h3>
                  <p className="text-[11px] text-gray-400 mt-0.5">Maryland</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════════════════
          §8  FAQ
      ════════════════════════════════════════════════════════════════════════ */}
      <HomeFAQSection />

      {/* ════════════════════════════════════════════════════════════════════════
          §9  FINAL CTA — Logo green background, centered, strong contrast
      ════════════════════════════════════════════════════════════════════════ */}
      <section className="section-pad bg-mc-leaf-400 relative overflow-hidden">
        {/* Subtle dot texture */}
        <div
          className="absolute inset-0 opacity-10 pointer-events-none"
          style={{
            backgroundImage:
              "radial-gradient(circle at 1px 1px, white 1px, transparent 0)",
            backgroundSize: "28px 28px",
          }}
        />
        {/* Decorative circles */}
        <div className="absolute -top-24 -left-24 w-72 h-72 rounded-full bg-white/10 pointer-events-none" />
        <div className="absolute -bottom-16 -right-16 w-56 h-56 rounded-full bg-white/10 pointer-events-none" />

        <div className="container-pad relative text-center">
          <span className="inline-block text-xs font-bold uppercase tracking-widest text-white/70 mb-5">
            Start Your Care Journey
          </span>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-5 leading-tight max-w-2xl mx-auto">
            Your Family Deserves Professional,
            <br className="hidden md:block" /> Compassionate Care
          </h2>
          <p className="text-white/80 text-[1.05rem] max-w-xl mx-auto mb-9 leading-relaxed">
            A conversation costs nothing. Our care coordinators are standing by
            to listen, answer your questions, and help you build a plan that is
            right for your family — with no obligation to proceed.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/contact"
              className="btn-mc-white text-[0.9rem] px-8 py-4"
            >
              Request Free In-Home Assessment
              <ArrowRight className="h-4 w-4" />
            </Link>
            <a
              href={`tel:${brand.phone}`}
              className="flex items-center gap-2.5 text-white font-semibold hover:text-white/80 transition-colors py-3"
            >
              <Phone className="h-4 w-4" />
              {brand.phoneDisplay}
            </a>
          </div>

          {/* Trust micro-row */}
          <div className="mt-10 flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
            {[
              "W2 Employees",
              "RN Supervised",
              "Background Checked",
              "Fully Insured",
              "24/7 Support",
            ].map((label) => (
              <div
                key={label}
                className="flex items-center gap-1.5 text-white/70 text-xs font-medium"
              >
                <CheckCircle className="h-3.5 w-3.5 text-white/60 shrink-0" />
                {label}
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
