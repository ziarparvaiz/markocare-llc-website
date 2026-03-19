'use client';

import React from 'react';
import Link from 'next/link';
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  AlertCircle,
  Heart,
  Shield,
  MessageCircle,
  Users,
  ArrowRight,
  CheckCircle,
  type LucideIcon,
} from 'lucide-react';
import { brand } from '@/config/brand';
import AssessmentForm from '@/components/forms/AssessmentForm';
import ContactFAQ from '@/components/contact/ContactFAQ';

/* ─── Icon map ────────────────────────────────────────────────────────────── */

const ICON_MAP: Record<string, LucideIcon> = {
  Heart, Shield, MapPin, MessageCircle, Clock, Phone, Mail,
};

/* ─── Types ───────────────────────────────────────────────────────────────── */

type ReassuranceCard = { icon: string; title: string; desc: string };

export type ContactPageData = {
  hero: {
    eyebrow: string;
    title: string;
    description: string;
  };
  reassuranceCards: ReassuranceCard[];
  trustStrip: string[];
  cta: {
    badge: string;
    title: string;
    lead: string;
    trustItems: string[];
  };
};

interface Props {
  data: ContactPageData;
}

export default function ContactPageLayout({ data }: Props) {
  const { hero, reassuranceCards, trustStrip, cta } = data;

  return (
    <>
      {/* ══ §1 HERO ══════════════════════════════════════════════════════════ */}
      <section className="bg-mc-forest text-white py-20 md:py-28 relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-[0.04] pointer-events-none"
          style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)', backgroundSize: '24px 24px' }}
          aria-hidden="true"
        />
        <div
          className="absolute top-0 right-0 w-[480px] h-[480px] rounded-full pointer-events-none opacity-10"
          style={{ background: 'radial-gradient(circle, #52b848 0%, transparent 70%)' }}
          aria-hidden="true"
        />
        <div className="container-pad relative max-w-3xl">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-[2px] rounded-full bg-mc-leaf-400" aria-hidden="true" />
            <span className="text-[11px] font-bold uppercase tracking-[0.22em] text-mc-leaf-300">
              {hero.eyebrow}
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-white leading-tight mb-5">
            {hero.title.includes('—') ? (
              <>
                {hero.title.split('—')[0].trim()} —{' '}
                <span className="text-mc-leaf-300 italic">{hero.title.split('—')[1].trim()}</span>
              </>
            ) : (
              hero.title
            )}
          </h1>
          <p className="text-lg text-white/75 leading-relaxed max-w-xl mb-10">
            {hero.description}
          </p>
          <div className="flex flex-col sm:flex-row gap-3">
            <Link href="#assessment-form"
              className="btn-mc-primary inline-flex items-center gap-2 group h-[52px] px-8 rounded-xl text-[14px] font-semibold"
            >
              Request Free Assessment
              <ArrowRight className="h-4 w-4 group-hover:translate-x-0.5 transition-transform" aria-hidden="true" />
            </Link>
            <a href={`tel:${brand.phone}`}
              className="inline-flex items-center gap-2 h-[52px] px-7 rounded-xl border-2 border-white/30 text-[14px] font-semibold text-white hover:border-white/70 hover:bg-white/5 transition-all duration-200"
            >
              <Phone className="h-4 w-4" aria-hidden="true" />
              Call {brand.phoneDisplay}
            </a>
          </div>
        </div>
      </section>

      {/* ══ §2 CONTACT OPTIONS ═══════════════════════════════════════════════ */}
      <section className="py-16 md:py-20 bg-white border-b border-mc-stone">
        <div className="container-pad">
          <div className="text-center max-w-xl mx-auto mb-12">
            <span className="eyebrow mb-3 block">Get in Touch</span>
            <h2 className="text-3xl font-bold text-mc-forest">How to Reach Us</h2>
            <p className="mt-3 text-gray-500 text-sm leading-relaxed">
              We are available by phone, email, and in person. Reach out in whatever way feels
              most comfortable for you.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-5xl mx-auto">
            {/* Phone */}
            <div className="rounded-2xl border-2 border-mc-leaf-200 bg-mc-leaf-50 p-6 flex flex-col gap-3 shadow-premium hover:shadow-premium-lg hover:border-mc-leaf-300 transition-all duration-200">
              <div className="w-12 h-12 rounded-2xl bg-mc-leaf-500 flex items-center justify-center">
                <Phone className="h-5 w-5 text-white" aria-hidden="true" />
              </div>
              <div>
                <p className="text-[10px] font-bold uppercase tracking-widest text-mc-leaf-600 mb-1">Phone — Priority</p>
                <a href={`tel:${brand.phone}`} className="text-xl font-bold text-mc-forest hover:text-mc-leaf-600 transition-colors block">
                  {brand.phoneDisplay}
                </a>
                <p className="text-xs text-gray-500 mt-1">{brand.officeHours}</p>
              </div>
            </div>
            {/* 24/7 On-Call */}
            <div className="rounded-2xl border border-amber-200 bg-amber-50 p-6 flex flex-col gap-3 shadow-premium hover:shadow-premium-lg hover:border-amber-300 transition-all duration-200">
              <div className="w-12 h-12 rounded-2xl bg-amber-400 flex items-center justify-center">
                <AlertCircle className="h-5 w-5 text-white" aria-hidden="true" />
              </div>
              <div>
                <p className="text-[10px] font-bold uppercase tracking-widest text-amber-700 mb-1">24/7 On-Call Support</p>
                <p className="text-sm font-semibold text-gray-800 leading-relaxed">
                  For urgent care needs outside office hours, call our main line — we maintain around-the-clock on-call support.
                </p>
              </div>
            </div>
            {/* Email */}
            <div className="rounded-2xl border border-mc-stone bg-white p-6 flex flex-col gap-3 shadow-premium hover:shadow-premium-lg hover:border-mc-leaf-200 transition-all duration-200">
              <div className="w-12 h-12 rounded-2xl bg-mc-sage border border-mc-stone flex items-center justify-center">
                <Mail className="h-5 w-5 text-mc-forest" aria-hidden="true" />
              </div>
              <div>
                <p className="text-[10px] font-bold uppercase tracking-widest text-gray-400 mb-1">Email</p>
                <a href={`mailto:${brand.email}`} className="text-sm font-semibold text-mc-forest hover:text-mc-leaf-600 transition-colors break-all">
                  {brand.email}
                </a>
                <p className="text-xs text-gray-400 mt-1">We respond within one business day.</p>
              </div>
            </div>
            {/* Office Address */}
            <div className="rounded-2xl border border-mc-stone bg-white p-6 flex flex-col gap-3 shadow-premium hover:shadow-premium-lg hover:border-mc-leaf-200 transition-all duration-200">
              <div className="w-12 h-12 rounded-2xl bg-mc-sage border border-mc-stone flex items-center justify-center">
                <MapPin className="h-5 w-5 text-mc-forest" aria-hidden="true" />
              </div>
              <div>
                <p className="text-[10px] font-bold uppercase tracking-widest text-gray-400 mb-1">Office Address</p>
                <a href={brand.googleMapsUrl} target="_blank" rel="noopener noreferrer"
                  className="text-sm text-mc-forest hover:text-mc-leaf-600 transition-colors leading-relaxed font-medium"
                >
                  {brand.address}
                </a>
              </div>
            </div>
            {/* Office Hours */}
            <div className="rounded-2xl border border-mc-stone bg-white p-6 flex flex-col gap-3 shadow-premium hover:shadow-premium-lg hover:border-mc-leaf-200 transition-all duration-200 sm:col-span-2 lg:col-span-1">
              <div className="w-12 h-12 rounded-2xl bg-mc-sage border border-mc-stone flex items-center justify-center">
                <Clock className="h-5 w-5 text-mc-forest" aria-hidden="true" />
              </div>
              <div>
                <p className="text-[10px] font-bold uppercase tracking-widest text-gray-400 mb-1">Office Hours</p>
                <p className="text-sm font-semibold text-mc-forest">{brand.officeHours}</p>
                <p className="text-xs text-mc-leaf-600 font-medium mt-1">{brand.emergencyLine}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══ §3 ASSESSMENT FORM ═══════════════════════════════════════════════ */}
      <section id="assessment-form" className="py-20 md:py-28 bg-mc-sage">
        <div className="container-pad">
          <div className="grid grid-cols-1 lg:grid-cols-[380px_1fr] xl:grid-cols-[420px_1fr] gap-12 xl:gap-16 max-w-6xl mx-auto items-start">
            {/* LEFT: Contact summary */}
            <div className="space-y-5">
              <div>
                <span className="eyebrow mb-2 block">Ready to Talk?</span>
                <h2 className="text-2xl font-bold text-mc-forest leading-snug">Contact Our Care Team</h2>
                <p className="text-sm text-gray-500 mt-2 leading-relaxed">
                  We are available Monday through Friday and maintain on-call support around the clock for urgent needs.
                </p>
              </div>
              <div className="space-y-3">
                <a href={`tel:${brand.phone}`}
                  className="flex items-center gap-4 rounded-2xl border border-mc-stone bg-white p-4 shadow-premium hover:border-mc-leaf-200 hover:shadow-premium-lg transition-all duration-200 group"
                >
                  <div className="w-10 h-10 rounded-xl bg-mc-leaf-50 flex items-center justify-center shrink-0 group-hover:bg-mc-leaf-500 transition-colors duration-200">
                    <Phone className="h-4 w-4 text-mc-leaf-600 group-hover:text-white transition-colors duration-200" aria-hidden="true" />
                  </div>
                  <div className="min-w-0">
                    <p className="text-[10px] font-bold uppercase tracking-widest text-gray-400 mb-0.5">Phone</p>
                    <p className="text-sm font-bold text-mc-forest">{brand.phoneDisplay}</p>
                  </div>
                </a>
                <a href={`mailto:${brand.email}`}
                  className="flex items-center gap-4 rounded-2xl border border-mc-stone bg-white p-4 shadow-premium hover:border-mc-leaf-200 hover:shadow-premium-lg transition-all duration-200 group"
                >
                  <div className="w-10 h-10 rounded-xl bg-mc-leaf-50 flex items-center justify-center shrink-0 group-hover:bg-mc-leaf-500 transition-colors duration-200">
                    <Mail className="h-4 w-4 text-mc-leaf-600 group-hover:text-white transition-colors duration-200" aria-hidden="true" />
                  </div>
                  <div className="min-w-0">
                    <p className="text-[10px] font-bold uppercase tracking-widest text-gray-400 mb-0.5">Email</p>
                    <p className="text-sm font-bold text-mc-forest truncate">{brand.email}</p>
                  </div>
                </a>
                <div className="flex items-center gap-4 rounded-2xl border border-mc-stone bg-white p-4 shadow-premium">
                  <div className="w-10 h-10 rounded-xl bg-mc-leaf-50 flex items-center justify-center shrink-0">
                    <Clock className="h-4 w-4 text-mc-leaf-600" aria-hidden="true" />
                  </div>
                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-widest text-gray-400 mb-0.5">Office Hours</p>
                    <p className="text-sm font-bold text-mc-forest">{brand.officeHours}</p>
                    <p className="text-[11px] text-mc-leaf-600 font-semibold mt-0.5">{brand.emergencyLine}</p>
                  </div>
                </div>
                <a href={brand.googleMapsUrl} target="_blank" rel="noopener noreferrer"
                  className="flex items-center gap-4 rounded-2xl border border-mc-stone bg-white p-4 shadow-premium hover:border-mc-leaf-200 hover:shadow-premium-lg transition-all duration-200 group"
                >
                  <div className="w-10 h-10 rounded-xl bg-mc-leaf-50 flex items-center justify-center shrink-0 group-hover:bg-mc-leaf-500 transition-colors duration-200">
                    <MapPin className="h-4 w-4 text-mc-leaf-600 group-hover:text-white transition-colors duration-200" aria-hidden="true" />
                  </div>
                  <div className="min-w-0">
                    <p className="text-[10px] font-bold uppercase tracking-widest text-gray-400 mb-0.5">Office</p>
                    <p className="text-sm font-medium text-mc-forest leading-snug">{brand.addressShort}</p>
                    <p className="text-[11px] text-mc-leaf-600 font-semibold mt-0.5">Open in Google Maps ↗</p>
                  </div>
                </a>
              </div>
              {/* Map placeholder */}
              <div className="rounded-2xl border border-mc-stone bg-white overflow-hidden shadow-premium">
                <div className="h-40 bg-mc-leaf-50 flex items-center justify-center relative">
                  {[
                    { top: '20%', left: '15%', size: 8 },
                    { top: '55%', left: '38%', size: 6 },
                    { top: '25%', right: '18%', size: 7 },
                    { bottom: '22%', right: '32%', size: 5 },
                    { bottom: '35%', left: '22%', size: 6 },
                  ].map((dot, i) => (
                    <div key={i} className="absolute rounded-full bg-mc-leaf-300 opacity-40"
                      style={{ width: dot.size, height: dot.size, top: dot.top,
                        left: (dot as Record<string, unknown>).left as string,
                        right: (dot as Record<string, unknown>).right as string,
                        bottom: dot.bottom }}
                      aria-hidden="true"
                    />
                  ))}
                  <div className="relative flex items-center gap-3 bg-white/90 backdrop-blur-sm rounded-2xl px-4 py-2.5 shadow-premium border border-mc-stone">
                    <div className="w-8 h-8 rounded-full bg-mc-leaf-500 flex items-center justify-center shadow-float">
                      <MapPin className="h-4 w-4 text-white" aria-hidden="true" />
                    </div>
                    <div>
                      <p className="font-bold text-mc-forest text-xs">Columbia, Maryland</p>
                      <p className="text-[10px] text-gray-400">MarkoCare Headquarters</p>
                    </div>
                  </div>
                </div>
                <div className="px-4 py-3 flex items-center justify-between">
                  <p className="text-xs text-gray-500">{brand.addressShort}</p>
                  <a href={brand.googleMapsUrl} target="_blank" rel="noopener noreferrer"
                    className="text-xs font-semibold text-mc-leaf-600 hover:text-mc-leaf-700 transition-colors"
                  >Open Maps ↗</a>
                </div>
              </div>
            </div>

            {/* RIGHT: Assessment form */}
            <div>
              <div className="mb-7">
                <span className="eyebrow mb-2 block">Free Consultation</span>
                <h2 className="text-2xl md:text-3xl font-bold text-mc-forest mb-3">
                  Request a Free In-Home Assessment
                </h2>
                <p className="text-gray-500 text-sm leading-relaxed">
                  Our free consultation is a no-pressure conversation where we listen to your
                  situation, answer your questions honestly, and help you understand what care
                  options are available — with no obligation to proceed.
                </p>
              </div>
              <div className="rounded-3xl border border-mc-stone bg-white shadow-premium-lg p-7 md:p-8">
                <AssessmentForm />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══ §4 REASSURANCE CARDS ═════════════════════════════════════════════ */}
      <section className="py-20 md:py-28 bg-white">
        <div className="container-pad">
          <div className="text-center max-w-xl mx-auto mb-12">
            <span className="eyebrow mb-3 block">Why Families Trust Us</span>
            <h2 className="text-3xl font-bold text-mc-forest">Care You Can Count On</h2>
            <p className="mt-3 text-gray-500 text-sm leading-relaxed">
              From the first phone call to every scheduled visit, we are committed to making this experience feel supported and clear.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {reassuranceCards.map(({ icon, title, desc }) => {
              const Icon = ICON_MAP[icon] ?? Heart;
              return (
                <div key={title}
                  className="group rounded-2xl border border-mc-stone bg-white p-7 shadow-premium hover:shadow-premium-lg hover:border-mc-leaf-200 hover:-translate-y-0.5 transition-all duration-200"
                >
                  <div className="w-12 h-12 rounded-2xl bg-mc-leaf-50 border border-mc-leaf-100 flex items-center justify-center mb-5 group-hover:bg-mc-leaf-500 group-hover:border-mc-leaf-500 transition-all duration-200">
                    <Icon className="h-5 w-5 text-mc-leaf-600 group-hover:text-white transition-colors duration-200" aria-hidden="true" />
                  </div>
                  <h3 className="font-bold text-mc-forest mb-2 text-sm">{title}</h3>
                  <p className="text-sm text-gray-500 leading-relaxed">{desc}</p>
                </div>
              );
            })}
          </div>
          <div className="mt-12 flex flex-wrap justify-center gap-x-8 gap-y-3 text-xs text-gray-400">
            {trustStrip.map((item) => (
              <span key={item} className="flex items-center gap-1.5">
                <CheckCircle className="h-3.5 w-3.5 text-mc-leaf-400" aria-hidden="true" />
                {item}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ══ §5 FAQ ════════════════════════════════════════════════════════════ */}
      <section className="py-20 md:py-28 bg-mc-sage">
        <div className="container-pad">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <span className="eyebrow mb-3 block">Common Questions</span>
              <h2 className="text-3xl font-bold text-mc-forest">Frequently Asked Questions</h2>
              <p className="mt-3 text-gray-500 text-sm leading-relaxed">
                Answers to the questions families ask most when considering home care.
              </p>
            </div>
            <ContactFAQ />
            <div className="mt-8 text-center">
              <p className="text-sm text-gray-500 mb-4">Have a question we didn&apos;t answer?</p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
                <Link href="/faq" className="btn-mc-outline text-sm">View Full FAQ</Link>
                <a href={`tel:${brand.phone}`} className="btn-mc-primary text-sm inline-flex items-center gap-2">
                  <Phone className="h-4 w-4" aria-hidden="true" />
                  Call Us Now
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══ §6 FINAL CTA ══════════════════════════════════════════════════════ */}
      <section className="py-24 md:py-32 bg-mc-forest text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.035] pointer-events-none"
          style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)', backgroundSize: '24px 24px' }}
          aria-hidden="true"
        />
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] pointer-events-none opacity-10"
          style={{ background: 'radial-gradient(ellipse, #52b848 0%, transparent 70%)' }}
          aria-hidden="true"
        />
        <div className="container-pad relative">
          <div className="max-w-2xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-4 py-1.5 text-xs font-semibold text-white/90 mb-7">
              <Users className="h-3.5 w-3.5 text-mc-leaf-300" aria-hidden="true" />
              {cta.badge}
            </div>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-white mb-5">{cta.title}</h2>
            <p className="text-white/70 leading-relaxed text-[16px] mb-10 max-w-lg mx-auto">{cta.lead}</p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="#assessment-form"
                className="btn-mc-primary inline-flex items-center gap-2 h-[52px] px-8 rounded-xl text-[14px] font-semibold group"
              >
                Request Free Assessment
                <ArrowRight className="h-4 w-4 group-hover:translate-x-0.5 transition-transform" aria-hidden="true" />
              </Link>
              <a href={`tel:${brand.phone}`}
                className="inline-flex items-center gap-2 h-[52px] px-7 rounded-xl border-2 border-white/30 text-[14px] font-semibold text-white hover:border-white/70 hover:bg-white/5 transition-all duration-200"
              >
                <Phone className="h-4 w-4" aria-hidden="true" />
                Call Now
              </a>
            </div>
            <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 mt-9 text-xs text-white/40">
              {cta.trustItems.map((item) => (
                <span key={item}>✓ {item}</span>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
