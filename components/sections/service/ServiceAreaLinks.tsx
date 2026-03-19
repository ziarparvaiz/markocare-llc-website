import Link from 'next/link';
import { MapPin, ArrowRight } from 'lucide-react';
import { brand } from '@/config/brand';

type Props = { serviceName: string };

export default function ServiceAreaLinks({ serviceName }: Props) {
  return (
    <section className="py-16 bg-white">
      <div className="container-pad">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <span className="eyebrow">Where We Serve</span>
          <h2 className="text-2xl md:text-3xl font-bold text-mc-forest mt-2">
            {serviceName} Across Maryland
          </h2>
          <p className="text-gray-600 mt-3">
            We proudly serve families across four Maryland counties. Click your county to learn more about local care options.
          </p>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {brand.countyPages.map((county) => (
            <Link
              key={county.slug}
              href={`/service-areas/${county.slug}`}
              className="group flex flex-col items-center gap-3 rounded-2xl border border-mc-stone bg-mc-sage p-6 text-center hover:border-mc-leaf-300 hover:bg-mc-leaf-50 transition-all"
            >
              <div className="w-10 h-10 rounded-xl bg-mc-forest flex items-center justify-center group-hover:bg-mc-leaf-600 transition-colors">
                <MapPin className="h-5 w-5 text-white" aria-hidden="true" />
              </div>
              <div>
                <p className="font-semibold text-mc-forest text-sm">{county.name}</p>
                <span className="flex items-center gap-1 text-xs text-mc-leaf-600 font-medium justify-center mt-1">
                  View details{' '}
                  <ArrowRight className="h-3 w-3 group-hover:translate-x-0.5 transition-transform" aria-hidden="true" />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
