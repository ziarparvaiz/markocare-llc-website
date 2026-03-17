'use client';

import Link from 'next/link';
import {
  MapPin,
  ArrowRight,
  CheckCircle,
  Heart,
  Shield,
  Phone,
  Clock,
  Users,
  Building2,
} from 'lucide-react';
import { brand } from '@/config/brand';
import CTABanner from '@/components/sections/CTABanner';
import AssessmentForm from '@/components/forms/AssessmentForm';
import HomeFAQSection from '@/components/sections/HomeFAQSection';
import Testimonials from '@/components/sections/Testimonials';

// ─── County coverage data ────────────────────────────────────────────────────

const countyDetails = [
  {
    name: 'Howard County',
    cities: ['Columbia', 'Ellicott City', 'Laurel', 'Elkridge'],
    highlight: 'Our primary operations hub',
  },
  {
    name: 'Carroll County',
    cities: ['Westminster', 'Eldersburg', 'Sykesville', 'Taneytown'],
    highlight: 'Rural & suburban families',
  },
  {
    name: 'Anne Arundel County',
    cities: ['Annapolis', 'Glen Burnie', 'Severna Park', 'Pasadena'],
    highlight: 'Coastal Maryland communities',
  },
  {
    name: 'Frederick County',
    cities: ['Frederick City', 'Thurmont', 'Brunswick', 'Middletown'],
    highlight: 'Western Maryland families',
  },
];

const localAdvantages = [
  { icon: Building2, text: 'Established relationships with county discharge coordinators and hospital networks' },
  { icon: Users,     text: 'Connected to local senior resource networks and Area Agencies on Aging' },
  { icon: Clock,     text: 'Rapid intake for urgent post-hospital discharge placements' },
  { icon: Heart,     text: 'W2 caregivers who live in the communities they serve' },
  { icon: Shield,    text: 'RN clinical oversight maintained across all four counties' },
];

// ─── Page ────────────────────────────────────────────────────────────────────

export default function ServiceAreasPage() {
  return (
    <>
      {/* ══════════════════════════════════════════════════════════════════════
          §1  PREMIUM HERO
      ══════════════════════════════════════════════════════════════════════ */}
      <section className="relative overflow-hidden bg-mc-cream">

        {/* Ambient background layers */}
        <div className="absolute inset-0 pointer-events-none select-none" aria-hidden="true">
          <div className="absolute -top-40 -left-40 w-[640px] h-[640px] rounded-full bg-mc-leaf-100/50 blur-[140px]" />
          <div className="absolute -bottom-24 right-0 w-[560px] h-[560px] rounded-full bg-mc-sage/90 blur-[110px]" />
          <div className="absolute top-1/2 left-[40%] w-[380px] h-[280px] -translate-y-1/2 rounded-full bg-mc-leaf-50/70 blur-[90px]" />
          <div
            className="absolute inset-0 opacity-[0.022]"
            style={{
              backgroundImage: 'radial-gradient(circle, #1a3a28 1px, transparent 1px)',
              backgroundSize: '28px 28px',
            }}
          />
          <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-mc-stone to-transparent" />
        </div>

        <div className="container-pad relative z-10 py-24 md:py-32 lg:py-36">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_480px] gap-16 xl:gap-20 items-center">

            {/* Left: Content */}
            <div className="max-w-[540px]">
              <div className="flex items-center gap-3 mb-7">
                <div className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-mc-leaf-400 block" />
                  <span className="w-1 h-1 rounded-full bg-mc-leaf-300 block" />
                </div>
                <span className="eyebrow">Serving Maryland Families</span>
                <div className="h-px w-10 bg-mc-stone" />
              </div>

              <h1 className="heading-display text-[2.6rem] sm:text-5xl md:text-[3.25rem] mb-7 leading-[1.07]">
                Compassionate Home Care{' '}
                <span className="relative whitespace-nowrap">
                  <span className="relative z-10 text-mc-leaf-500">Across Maryland</span>
                  <span
                    className="absolute bottom-[6px] left-0 right-0 h-[10px] rounded-full bg-mc-leaf-100 -z-0"
                    aria-hidden="true"
                  />
                </span>
              </h1>

              <p className="text-[1.0625rem] text-gray-600 leading-[1.75] mb-10 max-w-[460px]">
                MarkoCare brings professional, RN-supervised care directly to families across
                Howard, Carroll, Anne Arundel, and Frederick counties. Our W2 caregivers live
                in the communities they serve — providing dependable, personalized support with
                genuine compassion and clinical oversight your family can trust.
              </p>

              <div className="flex flex-wrap gap-3 mb-10">
                <a href="#assessment" className="btn-mc-primary gap-2">
                  Schedule a Consultation
                  <ArrowRight className="h-4 w-4" />
                </a>
                <Link href="/services" className="btn-mc-outline">
                  View Services
                </Link>
              </div>

              <div className="pt-7 border-t border-mc-stone">
                <div className="flex flex-wrap gap-x-7 gap-y-3">
                  {[
                    { icon: CheckCircle, label: 'Personalized Care Plans' },
                    { icon: Shield,      label: 'RN-Supervised' },
                    { icon: Heart,       label: 'W2 Caregivers' },
                    { icon: MapPin,      label: '4 Maryland Counties' },
                    { icon: Phone,       label: '24/7 On-Call Support' },
                  ].map(({ icon: Icon, label }) => (
                    <div key={label} className="flex items-center gap-2 text-sm text-gray-600">
                      <Icon className="h-[15px] w-[15px] text-mc-leaf-500 shrink-0" />
                      <span className="font-medium">{label}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right: Visual composition */}
            <div className="relative hidden lg:block h-[540px]">
              <div
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 rounded-full bg-mc-leaf-200/40 blur-[70px] pointer-events-none"
                aria-hidden="true"
              />

              {/* Main dark card */}
              <div className="absolute inset-x-6 top-6 bottom-6 rounded-4xl bg-gradient-to-br from-mc-forest via-[#20473a] to-[#162e20] shadow-premium-xl overflow-hidden">
                <div
                  className="absolute inset-0 opacity-[0.055]"
                  style={{
                    backgroundImage: 'radial-gradient(circle, #ffffff 1px, transparent 1px)',
                    backgroundSize: '22px 22px',
                  }}
                  aria-hidden="true"
                />
                <div className="absolute -top-16 -right-16 w-64 h-64 rounded-full bg-mc-leaf-400/25 blur-[60px] pointer-events-none" aria-hidden="true" />
                <div className="absolute -bottom-10 -left-10 w-48 h-48 rounded-full bg-mc-leaf-700/30 blur-[50px] pointer-events-none" aria-hidden="true" />

                <div className="relative z-10 h-full flex flex-col justify-between p-8">
                  <div>
                    <div className="flex items-center gap-2.5 mb-7">
                      <div className="w-10 h-10 rounded-2xl bg-white/10 border border-white/15 flex items-center justify-center backdrop-blur-sm shrink-0">
                        <MapPin className="h-[18px] w-[18px] text-mc-leaf-300" />
                      </div>
                      <div>
                        <p className="text-white/50 text-[10px] uppercase tracking-widest font-semibold leading-none mb-0.5">Service Coverage</p>
                        <p className="text-white/80 text-xs font-medium">Maryland</p>
                      </div>
                    </div>
                    <h2 className="text-white font-bold text-[1.4rem] leading-[1.25] mb-3">
                      Maryland's Most<br />Trusted Home Care
                    </h2>
                    <p className="text-white/50 text-sm leading-relaxed max-w-[260px]">
                      Serving families across 4 counties with clinically overseen, compassionate in-home support.
                    </p>
                  </div>
                  <div className="grid grid-cols-2 gap-2.5">
                    {brand.countyPages.map((c) => (
                      <div key={c.slug} className="rounded-2xl bg-white/[0.07] border border-white/10 px-4 py-3">
                        <p className="text-white text-sm font-semibold leading-none mb-1">{c.name}</p>
                        <div className="flex items-center gap-1.5">
                          <span className="w-1.5 h-1.5 rounded-full bg-mc-leaf-400 block" />
                          <p className="text-white/40 text-[10px]">Active Coverage</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Stat badge — counties */}
              <div className="absolute -right-3 top-[88px] rounded-2xl bg-mc-forest shadow-premium-xl px-5 py-3.5 text-white">
                <p className="text-3xl font-bold leading-none tracking-tight">4</p>
                <p className="text-[10px] text-white/50 mt-1.5 uppercase tracking-widest font-semibold">Counties Served</p>
              </div>

              {/* 24/7 status badge — anchored lower-right, slightly inset */}
              <div className="absolute right-2 bottom-3 rounded-2xl bg-white border border-mc-stone shadow-premium-lg px-4 py-3 flex items-center gap-2.5">
                <span className="w-2 h-2 rounded-full bg-mc-leaf-400 block shrink-0 animate-pulse" />
                <p className="text-xs font-semibold text-mc-forest">24/7 On-Call Support</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════════
          §2  SERVICE COVERAGE
      ══════════════════════════════════════════════════════════════════════ */}
      <section className="py-20 md:py-28 bg-white">
        <div className="container-pad">

          {/* Section header */}
          <div className="max-w-2xl mb-14">
            <span className="eyebrow mb-3 block">Maryland Service Coverage</span>
            <h2 className="heading-display text-3xl md:text-4xl mb-5">
              Care Across Four Maryland Counties
            </h2>
            <p className="text-gray-600 leading-relaxed text-[1.0625rem]">
              We are not a distant corporate agency — we are your neighbors. Our caregivers,
              coordinators, and registered nurses live and work in these counties, bringing
              professional, clinically overseen care directly to your family.
            </p>
          </div>

          {/* County cards — 2×2 grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-5 mb-14">
            {countyDetails.map((county) => (
              <div
                key={county.name}
                className="rounded-3xl border border-mc-stone bg-mc-cream p-6 shadow-premium hover:shadow-premium-lg hover:border-mc-leaf-200 transition-all duration-200"
              >
                {/* Icon + county name */}
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-10 h-10 rounded-2xl bg-mc-leaf-50 border border-mc-leaf-100 flex items-center justify-center shrink-0">
                    <MapPin className="h-[18px] w-[18px] text-mc-leaf-500" />
                  </div>
                  <div>
                    <p className="font-bold text-mc-forest text-sm leading-snug">{county.name}</p>
                    <div className="flex items-center gap-1.5 mt-0.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-mc-leaf-400 block" />
                      <p className="text-[10px] text-mc-leaf-600 font-semibold uppercase tracking-wider">Active Coverage</p>
                    </div>
                  </div>
                </div>

                {/* Tagline */}
                <p className="text-xs text-gray-500 mb-4 font-medium">{county.highlight}</p>

                {/* Cities list */}
                <div className="space-y-1.5">
                  {county.cities.map((city) => (
                    <div key={city} className="flex items-center gap-2">
                      <CheckCircle className="h-3.5 w-3.5 text-mc-leaf-400 shrink-0" />
                      <span className="text-sm text-gray-700">{city}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Local advantage strip */}
          <div className="rounded-3xl bg-mc-sage border border-mc-stone p-8 md:p-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
              <div>
                <span className="eyebrow mb-3 block">Local Presence</span>
                <h3 className="text-2xl font-bold text-mc-forest mb-4 leading-snug">
                  Local Knowledge, Clinical Standards
                </h3>
                <p className="text-gray-600 leading-relaxed text-[0.9375rem]">
                  Our Columbia, Maryland office serves as the operational hub for all four counties.
                  We maintain close relationships with local hospitals, discharge planners, and
                  county senior services — so care transitions happen faster, more smoothly, and
                  with fewer gaps for your family.
                </p>
              </div>
              <ul className="space-y-4">
                {localAdvantages.map(({ icon: Icon, text }) => (
                  <li key={text} className="flex items-start gap-3.5">
                    <div className="w-8 h-8 rounded-xl bg-mc-leaf-100 flex items-center justify-center shrink-0 mt-0.5">
                      <Icon className="h-4 w-4 text-mc-leaf-600" />
                    </div>
                    <p className="text-sm text-gray-700 leading-relaxed">{text}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════════
          §3  REQUEST FREE ASSESSMENT FORM
      ══════════════════════════════════════════════════════════════════════ */}
      <section id="assessment" className="relative overflow-hidden py-20 md:py-28 bg-mc-forest">

        {/* Background glows */}
        <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
          <div className="absolute -top-32 -right-32 w-[520px] h-[520px] rounded-full bg-mc-leaf-400/10 blur-[120px]" />
          <div className="absolute -bottom-24 -left-24 w-[400px] h-[400px] rounded-full bg-mc-leaf-700/20 blur-[100px]" />
          <div
            className="absolute inset-0 opacity-[0.04]"
            style={{
              backgroundImage: 'radial-gradient(circle, #ffffff 1px, transparent 1px)',
              backgroundSize: '30px 30px',
            }}
          />
        </div>

        <div className="container-pad relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 xl:gap-20 items-start">

            {/* Left: editorial content */}
            <div className="pt-2">
              <span className="eyebrow text-mc-leaf-400 mb-5 block">Free Consultation</span>
              <h2 className="font-serif font-bold text-white text-3xl md:text-4xl leading-[1.1] mb-6">
                Request a Free<br />Care Assessment
              </h2>
              <p className="text-white/70 leading-relaxed mb-10 text-[1.0rem] max-w-[400px]">
                Tell us about your family's needs and a dedicated care coordinator will reach out
                within one business day. There is no obligation — just a warm conversation about
                how we can help.
              </p>

              <ul className="space-y-5 mb-10">
                {[
                  { icon: CheckCircle, title: 'No obligation', desc: 'A free, pressure-free conversation with a care coordinator.' },
                  { icon: Users,       title: 'Tailored care plan', desc: 'We design care around your loved one\'s exact needs.' },
                  { icon: Clock,       title: 'Fast response', desc: 'We contact you within one business day of your request.' },
                  { icon: Shield,      title: 'RN-supervised', desc: 'All care is clinically overseen by a registered nurse.' },
                ].map(({ icon: Icon, title, desc }) => (
                  <li key={title} className="flex items-start gap-4">
                    <div className="w-9 h-9 rounded-xl bg-white/10 border border-white/15 flex items-center justify-center shrink-0 mt-0.5">
                      <Icon className="h-4 w-4 text-mc-leaf-300" />
                    </div>
                    <div>
                      <p className="text-white font-semibold text-sm leading-none mb-1">{title}</p>
                      <p className="text-white/55 text-sm leading-relaxed">{desc}</p>
                    </div>
                  </li>
                ))}
              </ul>

              {/* Phone CTA */}
              <div className="rounded-2xl bg-white/[0.07] border border-white/10 px-5 py-4 flex items-center gap-4">
                <div className="w-10 h-10 rounded-xl bg-mc-leaf-400/20 border border-mc-leaf-400/30 flex items-center justify-center shrink-0">
                  <Phone className="h-[18px] w-[18px] text-mc-leaf-300" />
                </div>
                <div>
                  <p className="text-white/50 text-[10px] uppercase tracking-widest font-semibold mb-0.5">Prefer to call?</p>
                  <a
                    href={`tel:${brand.phone}`}
                    className="text-white font-bold text-base hover:text-mc-leaf-300 transition-colors"
                  >
                    {brand.phoneDisplay}
                  </a>
                </div>
              </div>
            </div>

            {/* Right: form card */}
            <div className="rounded-3xl bg-white shadow-premium-xl border border-mc-stone p-8 md:p-10">
              <div className="mb-7">
                <h3 className="text-xl font-bold text-mc-forest mb-1.5">
                  Tell Us About Your Needs
                </h3>
                <p className="text-sm text-gray-500 leading-relaxed">
                  Complete the form below and a care coordinator will contact you within one business day.
                </p>
              </div>
              <AssessmentForm />
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════════
          §4  TESTIMONIALS
      ══════════════════════════════════════════════════════════════════════ */}
      <Testimonials />

      {/* ══════════════════════════════════════════════════════════════════════
          §5  FAQ
      ══════════════════════════════════════════════════════════════════════ */}
      <HomeFAQSection />

      {/* ══════════════════════════════════════════════════════════════════════
          CTABanner
      ══════════════════════════════════════════════════════════════════════ */}
      <CTABanner
        title="Ready to Find Care in Your Area?"
        subtitle="Contact us today — a MarkoCare coordinator will walk you through your options with no pressure and no obligation."
        variant="green"
      />
    </>
  );
}
