import Link from 'next/link';
import { CheckCircle, ShieldCheck, ArrowRight, type LucideIcon } from 'lucide-react';
import AssessmentForm from '@/components/forms/AssessmentForm';
import CTABanner from '@/components/sections/CTABanner';
import { brand } from '@/config/brand';

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
  accentColor = 'text-mc-leaf-600 bg-mc-leaf-50',
}: ServicePageProps) {
  return (
    <>
      {/* ── Hero ─────────────────────────────────────────────────────── */}
      <section className="bg-mc-forest text-white py-16 md:py-24">
        <div className="container-pad">
          <div className="max-w-3xl">
            <div className={`inline-flex items-center justify-center w-14 h-14 rounded-2xl mb-6 ${accentColor}`}>
              <Icon className="h-7 w-7" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">{name}</h1>
            <p className="text-xl text-mc-leaf-300 font-medium mb-4">{tagline}</p>
            <p className="text-lg text-white/80 leading-relaxed max-w-2xl">{heroDesc}</p>
          </div>
        </div>
      </section>

      {/* ── Main content + sticky form ──────────────────────────────── */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container-pad">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">

            {/* Left: Details */}
            <div className="lg:col-span-2 space-y-12">

              {/* 1. What's Included */}
              <div>
                <h2 className="text-2xl font-bold text-mc-forest mb-2">What&apos;s Included</h2>
                <p className="text-gray-500 text-sm mb-5">Every visit covers the following care activities:</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {included.map((item) => (
                    <div
                      key={item}
                      className="flex items-start gap-3 rounded-xl border border-mc-stone bg-mc-sage px-4 py-3"
                    >
                      <CheckCircle className="h-4 w-4 text-mc-leaf-500 shrink-0 mt-0.5" />
                      <span className="text-sm text-gray-700">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* 2. Who It's For */}
              <div className="rounded-2xl border border-mc-stone bg-mc-cream p-6">
                <h2 className="text-2xl font-bold text-mc-forest mb-3">Who Is This For?</h2>
                <p className="text-gray-600 leading-relaxed">{whoIsItFor}</p>
              </div>

              {/* 3. Safety & RN Oversight */}
              <div className="rounded-2xl bg-mc-forest text-white p-7">
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-10 h-10 rounded-xl bg-mc-leaf-400/20 flex items-center justify-center">
                    <ShieldCheck className="h-5 w-5 text-mc-leaf-300" />
                  </div>
                  <h2 className="text-xl font-bold">Safety &amp; RN Oversight</h2>
                </div>
                <ul className="space-y-3">
                  {safety.map((item) => (
                    <li key={item} className="flex items-start gap-3 text-sm text-white/85">
                      <CheckCircle className="h-4 w-4 text-mc-leaf-400 shrink-0 mt-0.5" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* 4. FAQ */}
              {faqs.length > 0 && (
                <div>
                  <h2 className="text-2xl font-bold text-mc-forest mb-5">
                    Frequently Asked Questions
                  </h2>
                  <div className="space-y-4">
                    {faqs.map((faq) => (
                      <div
                        key={faq.q}
                        className="rounded-2xl border border-mc-stone bg-white p-5 shadow-premium"
                      >
                        <h3 className="font-semibold text-mc-forest mb-2 text-sm">{faq.q}</h3>
                        <p className="text-sm text-gray-600 leading-relaxed">{faq.a}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* 5. Related Services */}
              {relatedServices.length > 0 && (
                <div>
                  <h2 className="text-2xl font-bold text-mc-forest mb-4">Related Services</h2>
                  <div className="flex flex-wrap gap-3">
                    {relatedServices.map((s) => (
                      <Link
                        key={s.slug}
                        href={`/services/${s.slug}`}
                        className="flex items-center gap-2 rounded-xl border border-mc-leaf-200 bg-mc-leaf-50 px-4 py-2 text-sm font-medium text-mc-leaf-700 hover:bg-mc-leaf-100 transition-colors"
                      >
                        {s.name} <ArrowRight className="h-3.5 w-3.5" />
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Right: Sticky Form */}
            <div>
              <div className="sticky top-24">
                <div className="rounded-3xl border border-mc-leaf-100 bg-mc-sage p-6 shadow-premium">
                  <h3 className="text-lg font-bold text-mc-forest mb-1">
                    Request a Free Assessment
                  </h3>
                  <p className="text-sm text-gray-500 mb-5">
                    Let&apos;s discuss your {name.toLowerCase()} needs. No obligation.
                  </p>
                  <AssessmentForm />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── In-page soft-green CTA ──────────────────────────────────── */}
      <section className="py-16 bg-mc-sage border-y border-mc-stone">
        <div className="container-pad text-center max-w-2xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-mc-forest mb-3">
            Ready to Start {name}?
          </h2>
          <p className="text-gray-600 leading-relaxed mb-7">
            Our care team is ready to help. Request a free, no-obligation in-home assessment today.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/contact" className="btn-mc-primary">
              Request Free Assessment
            </Link>
            <a
              href={`tel:${brand.phone}`}
              className="text-sm font-semibold text-mc-forest hover:text-mc-leaf-600 transition-colors"
            >
              Or call {brand.phoneDisplay}
            </a>
          </div>
        </div>
      </section>

      <CTABanner
        title={`Quality ${name} in Maryland`}
        subtitle="MarkoCare delivers professional, RN-supervised home care to families across Howard, Carroll, Anne Arundel, and Frederick Counties."
        variant="green"
      />
    </>
  );
}
