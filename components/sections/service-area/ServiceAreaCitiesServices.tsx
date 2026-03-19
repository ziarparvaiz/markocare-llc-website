import Link from 'next/link';
import { MapPin, ArrowRight, CheckCircle } from 'lucide-react';
import { brand } from '@/config/brand';

type Props = {
  county: string;
  cities: string[];
  localNote?: string;
};

export default function ServiceAreaCitiesServices({ county, cities, localNote }: Props) {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container-pad">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 xl:gap-16 items-start">
          {/* Left: cities */}
          <div>
            <span className="eyebrow">Where We Serve</span>
            <h2 className="text-2xl md:text-3xl font-bold text-mc-forest mt-1 mb-2">
              Communities in {county}
            </h2>
            <p className="text-gray-500 mb-6">
              Our caregivers serve families throughout {county}, including:
            </p>
            <div className="grid grid-cols-2 gap-3">
              {cities.map((city) => (
                <div
                  key={city}
                  className="flex items-center gap-3 rounded-xl border border-mc-stone bg-mc-sage px-4 py-3"
                >
                  <MapPin className="h-4 w-4 text-mc-leaf-500 shrink-0" aria-hidden="true" />
                  <span className="text-sm text-gray-700 font-medium">{city}</span>
                </div>
              ))}
            </div>
            {localNote && (
              <p className="mt-6 text-sm text-gray-600 leading-relaxed border-l-4 border-mc-leaf-200 pl-4">
                {localNote}
              </p>
            )}
          </div>

          {/* Right: services available */}
          <div>
            <span className="eyebrow">Available Services</span>
            <h2 className="text-2xl md:text-3xl font-bold text-mc-forest mt-1 mb-6">
              Home Care Services in {county}
            </h2>
            <div className="space-y-3">
              {brand.services.map((service) => (
                <Link
                  key={service.slug}
                  href={`/services/${service.slug}`}
                  className="group flex items-center justify-between rounded-xl border border-mc-stone bg-white px-5 py-4 shadow-premium hover:border-mc-leaf-300 hover:bg-mc-leaf-50 transition-all"
                >
                  <div className="flex items-center gap-3">
                    <CheckCircle className="h-4 w-4 text-mc-leaf-500 shrink-0" aria-hidden="true" />
                    <span className="text-sm font-semibold text-mc-forest group-hover:text-mc-leaf-700 transition-colors">
                      {service.name}
                    </span>
                  </div>
                  <ArrowRight className="h-4 w-4 text-mc-leaf-400 opacity-0 group-hover:opacity-100 group-hover:translate-x-0.5 transition-all" aria-hidden="true" />
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
