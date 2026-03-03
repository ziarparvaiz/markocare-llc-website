import Link from 'next/link';
import { MapPin, CheckCircle, ArrowRight, Phone, Building2 } from 'lucide-react';
import { brand } from '@/config/brand';
import AssessmentForm from '@/components/forms/AssessmentForm';
import CTABanner from '@/components/sections/CTABanner';
import Script from 'next/script';

interface CountyPageProps {
  county: string;
  slug: string;
  intro: string;
  paragraph2: string;
  commonNeeds: string[];
  localFacts: string[];
}

export default function CountyPageLayout({
  county,
  slug,
  intro,
  paragraph2,
  commonNeeds,
  localFacts,
}: CountyPageProps) {
  const localBusinessSchema = {
    '@context': 'https://schema.org',
    '@type': 'HomeAndConstructionBusiness',
    name: `${brand.brandName} – ${county}`,
    description: `${brand.brandName} provides professional home care services in ${county}, Maryland including personal care, companion care, and post-hospital support.`,
    url: `${brand.siteUrl}/service-areas/${slug}`,
    telephone: brand.phone,
    email: brand.email,
    address: {
      '@type': 'PostalAddress',
      streetAddress: '10490 Little Patuxent Pkwy #600',
      addressLocality: 'Columbia',
      addressRegion: 'MD',
      postalCode: '21044',
      addressCountry: 'US',
    },
    areaServed: {
      '@type': 'AdministrativeArea',
      name: county,
    },
    serviceType: brand.services.map((s) => s.name),
    priceRange: '$$',
  };

  return (
    <>
      <Script
        id={`local-business-${slug}`}
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />

      {/* ── Hero ─────────────────────────────────────────────── */}
      <section className="bg-mc-sage border-b border-mc-stone py-16 md:py-20">
        <div className="container-pad max-w-4xl">
          <div className="flex items-center gap-2 mb-4">
            <MapPin className="h-4 w-4 text-mc-leaf-500" />
            <span className="mc-badge">Service Area</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-mc-forest mb-5 leading-tight">
            Home Care in {county}, Maryland
          </h1>
          <p className="text-lg text-gray-600 leading-relaxed max-w-2xl">{intro}</p>
        </div>
      </section>

      {/* ── Content + Form ────────────────────────────────────── */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container-pad">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">

            <div className="lg:col-span-2 space-y-10">

              {/* Local context */}
              <div>
                <h2 className="text-2xl font-bold text-mc-forest mb-4">
                  Serving {county} Families
                </h2>
                <p className="text-gray-600 leading-relaxed mb-5">{paragraph2}</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 rounded-2xl bg-mc-sage border border-mc-stone p-5">
                  {localFacts.map((fact) => (
                    <div key={fact} className="flex items-start gap-2.5 text-sm text-gray-700">
                      <CheckCircle className="h-4 w-4 text-mc-leaf-500 shrink-0 mt-0.5" />
                      {fact}
                    </div>
                  ))}
                </div>
              </div>

              {/* Common needs */}
              <div>
                <h2 className="text-2xl font-bold text-mc-forest mb-4">
                  Common Senior Care Needs in {county}
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {commonNeeds.map((need) => (
                    <div
                      key={need}
                      className="rounded-xl border border-mc-stone bg-mc-cream px-4 py-3"
                    >
                      <p className="text-sm text-gray-700 font-medium">{need}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Services we offer */}
              <div>
                <h2 className="text-2xl font-bold text-mc-forest mb-4">
                  Our Services in {county}
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {brand.services.map((service) => (
                    <Link
                      key={service.slug}
                      href={`/services/${service.slug}`}
                      className="flex items-center justify-between rounded-xl border border-mc-leaf-100 bg-mc-leaf-50 px-4 py-3 hover:bg-mc-leaf-100 transition-colors group"
                    >
                      <span className="text-sm font-medium text-mc-forest group-hover:text-mc-leaf-700 transition-colors">
                        {service.name}
                      </span>
                      <ArrowRight className="h-4 w-4 text-mc-leaf-500" />
                    </Link>
                  ))}
                </div>
              </div>

              {/* Contact card */}
              <div className="rounded-2xl bg-mc-sage border border-mc-stone p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-9 h-9 rounded-xl bg-mc-leaf-100 flex items-center justify-center">
                    <Building2 className="h-4 w-4 text-mc-leaf-600" />
                  </div>
                  <h3 className="font-semibold text-mc-forest">
                    Reach Our {county} Care Team
                  </h3>
                </div>
                <div className="space-y-2">
                  <a
                    href={`tel:${brand.phone}`}
                    className="flex items-center gap-3 text-sm text-mc-forest hover:text-mc-leaf-600 transition-colors font-medium"
                  >
                    <Phone className="h-4 w-4 text-mc-leaf-500" />
                    {brand.phoneDisplay}
                  </a>
                  <p className="text-xs text-gray-500 pl-7">{brand.officeHours}</p>
                  <p className="text-xs text-mc-leaf-600 font-medium pl-7">
                    {brand.emergencyLine}
                  </p>
                </div>
              </div>
            </div>

            {/* Sticky Form */}
            <div>
              <div className="sticky top-24">
                <div className="rounded-3xl border border-mc-leaf-100 bg-mc-sage p-6 shadow-premium">
                  <h3 className="text-lg font-bold text-mc-forest mb-1">
                    Free Assessment in {county}
                  </h3>
                  <p className="text-sm text-gray-500 mb-5">
                    Get started with a no-obligation in-home assessment.
                  </p>
                  <AssessmentForm />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTABanner
        title={`Quality Home Care in ${county}`}
        subtitle={`MarkoCare is ready to serve ${county} families with professional, RN-supervised home care.`}
        variant="green"
      />
    </>
  );
}
