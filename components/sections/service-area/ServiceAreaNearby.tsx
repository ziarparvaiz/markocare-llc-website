import Link from 'next/link';
import { MapPin } from 'lucide-react';
import { brand } from '@/config/brand';

type Props = { nearbyAreas: string[] };

export default function ServiceAreaNearby({ nearbyAreas }: Props) {
  if (!nearbyAreas.length) return null;
  return (
    <section className="py-14 bg-white border-b border-mc-stone">
      <div className="container-pad">
        <p className="text-sm text-gray-500 mb-4 font-medium">Also serving nearby:</p>
        <div className="flex flex-wrap gap-3">
          {nearbyAreas.map((area) => {
            const countyPage = brand.countyPages.find((c) => c.name === area);
            return countyPage ? (
              <Link
                key={area}
                href={`/service-areas/${countyPage.slug}`}
                className="flex items-center gap-2 rounded-full border border-mc-stone bg-mc-sage px-4 py-2 text-sm font-medium text-mc-forest hover:border-mc-leaf-300 hover:bg-mc-leaf-50 transition-all"
              >
                <MapPin className="h-3.5 w-3.5 text-mc-leaf-500" aria-hidden="true" />
                {area}
              </Link>
            ) : (
              <span
                key={area}
                className="flex items-center gap-2 rounded-full border border-mc-stone bg-mc-sage px-4 py-2 text-sm font-medium text-mc-forest"
              >
                <MapPin className="h-3.5 w-3.5 text-mc-leaf-500" aria-hidden="true" />
                {area}
              </span>
            );
          })}
        </div>
      </div>
    </section>
  );
}
