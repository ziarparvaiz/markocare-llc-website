import type { Metadata } from 'next';
import Link from 'next/link';
import { MapPin, ArrowRight, CheckCircle } from 'lucide-react';
import { brand } from '@/config/brand';
import CTABanner from '@/components/sections/CTABanner';

export const metadata: Metadata = {
  title: 'Maryland Home Care Service Areas | MarkoCare',
  description:
    'MarkoCare provides home care across Howard, Carroll, Anne Arundel, and Frederick Counties in Maryland. Find care near you.',
  alternates: { canonical: `${brand.siteUrl}/service-areas` },
};

const countyDescriptions: Record<string, string> = {
  'howard-county': 'Serving Columbia, Ellicott City, Laurel, and surrounding Howard County communities.',
  'carroll-county': 'Serving Westminster, Eldersburg, Sykesville, and Carroll County communities.',
  'anne-arundel-county': 'Serving Annapolis, Glen Burnie, Severna Park, and Anne Arundel County communities.',
  'frederick-county': 'Serving Frederick City, Germantown, and Frederick County communities.',
};

const whyLocal = [
  'Familiarity with county-level discharge coordinators and hospital networks',
  'Knowledge of local senior resource networks and Area Agencies on Aging',
  'Rapid intake response for urgent post-hospital discharge needs',
  'W2 caregivers who live and work in the communities they serve',
];

export default function ServiceAreasPage() {
  return (
    <>
      {/* ── Hero — light, informational ─────────────────────────── */}
      <section className="bg-mc-sage border-b border-mc-stone py-16 md:py-20">
        <div className="container-pad max-w-3xl">
          <div className="flex items-center gap-2 mb-4">
            <MapPin className="h-4 w-4 text-mc-leaf-500" />
            <span className="mc-badge">Service Areas</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-mc-forest mb-5 leading-tight">
            {brand.serviceAreaHeadline}
          </h1>
          <p className="text-lg text-gray-600 leading-relaxed">
            MarkoCare provides professional, RN-supervised home care services across four key
            Maryland counties — bringing consistent, clinically overseen care directly to
            your family.
          </p>
        </div>
      </section>

      {/* ── County cards ──────────────────────────────────────────── */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container-pad">
          <div className="max-w-2xl mb-10">
            <span className="eyebrow mb-3 block">Maryland Counties</span>
            <h2 className="text-3xl font-bold text-mc-forest">Find Care in Your County</h2>
            <p className="mt-3 text-gray-600 leading-relaxed">
              Click your county to learn about available services, local resources, and how to get started.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {brand.countyPages.map((county) => (
              <Link
                key={county.slug}
                href={`/service-areas/${county.slug}`}
                className="mc-card-hover group flex items-start gap-5"
              >
                <div className="w-12 h-12 rounded-xl bg-mc-leaf-50 border border-mc-leaf-100 flex items-center justify-center shrink-0 group-hover:bg-mc-leaf-100 transition-colors">
                  <MapPin className="h-6 w-6 text-mc-leaf-600" />
                </div>
                <div className="flex-1">
                  <h2 className="text-lg font-bold text-mc-forest group-hover:text-mc-leaf-600 transition-colors mb-1">
                    {county.name}
                  </h2>
                  <p className="text-sm text-gray-600">
                    {countyDescriptions[county.slug]}
                  </p>
                  <div className="flex items-center gap-1 mt-3 text-sm font-semibold text-mc-leaf-600 group-hover:gap-2 transition-all">
                    View Services <ArrowRight className="h-4 w-4" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── Why local matters ─────────────────────────────────────── */}
      <section className="py-16 md:py-20 bg-mc-sage border-y border-mc-stone">
        <div className="container-pad">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-5xl mx-auto">
            <div>
              <span className="eyebrow mb-3 block">Local Presence</span>
              <h2 className="text-3xl font-bold text-mc-forest mb-5">
                Local Knowledge, Clinical Standards
              </h2>
              <p className="text-gray-600 leading-relaxed">
                Our Columbia, Maryland office serves as the operational hub for all four counties.
                We maintain close relationships with local hospitals, discharge planners, and county
                senior services — so care transitions happen faster and more smoothly for your family.
              </p>
            </div>
            <ul className="space-y-3">
              {whyLocal.map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm text-gray-700">
                  <CheckCircle className="h-4 w-4 text-mc-leaf-500 shrink-0 mt-0.5" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <CTABanner
        title="Don't See Your Area?"
        subtitle="Contact us — we may be able to accommodate your location. Our service area is growing."
        variant="green"
      />
    </>
  );
}
