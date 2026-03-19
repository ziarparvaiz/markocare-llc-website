import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

type Props = { services: Array<{ name: string; slug: string }> };

export default function ServiceRelatedServices({ services }: Props) {
  if (!services.length) return null;
  return (
    <div>
      <span className="eyebrow">Explore More</span>
      <h2 className="text-xl font-bold text-mc-forest mt-1 mb-5">Related Services</h2>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        {services.map((s) => (
          <Link
            key={s.slug}
            href={`/services/${s.slug}`}
            className="group flex flex-col gap-2 rounded-xl border border-mc-stone bg-mc-sage p-4 hover:border-mc-leaf-300 hover:bg-mc-leaf-50 transition-all"
          >
            <span className="text-sm font-semibold text-mc-forest group-hover:text-mc-leaf-700 transition-colors">
              {s.name}
            </span>
            <span className="flex items-center gap-1 text-xs text-mc-leaf-600 font-medium">
              Learn more{' '}
              <ArrowRight className="h-3 w-3 group-hover:translate-x-0.5 transition-transform" aria-hidden="true" />
            </span>
          </Link>
        ))}
      </div>
    </div>
  );
}
