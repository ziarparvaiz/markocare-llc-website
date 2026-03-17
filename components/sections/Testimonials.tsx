'use client';

import { useState } from 'react';
import { Star, MapPin, ChevronDown } from 'lucide-react';
import SectionHeader from '@/components/ui/SectionHeader';
import { getTestimonialData } from '@/lib/testimonial-data';

interface TestimonialsProps {
  /** 'light' = white background (default); 'sage' = mc-sage background with border */
  variant?: 'light' | 'sage';
}

const INITIAL_VISIBLE = 6;

const data = getTestimonialData();

export default function Testimonials({ variant = 'light' }: TestimonialsProps) {
  const [showAll, setShowAll] = useState(false);

  const sectionClass =
    variant === 'sage'
      ? 'py-16 md:py-24 bg-mc-sage border-y border-mc-stone'
      : 'section-pad bg-white';

  const visibleItems = showAll ? data.items : data.items.slice(0, INITIAL_VISIBLE);
  const hasMore = data.items.length > INITIAL_VISIBLE;

  return (
    <section className={sectionClass}>
      <div className="container-pad">
        <SectionHeader
          badge={data.label}
          title={data.title}
          subtitle={data.description}
        />

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {visibleItems.map((t) => (
            <TestimonialCard key={t.id} t={t} />
          ))}
        </div>

        {hasMore && (
          <div className="mt-10 flex justify-center">
            <button
              onClick={() => setShowAll((prev) => !prev)}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-mc-forest text-mc-forest text-sm font-semibold hover:bg-mc-forest hover:text-white transition-colors duration-200"
            >
              {showAll ? 'Show Fewer' : 'Show More Testimonials'}
              <ChevronDown
                className={`h-4 w-4 transition-transform duration-200 ${showAll ? 'rotate-180' : ''}`}
              />
            </button>
          </div>
        )}

        <p className="text-center text-xs text-gray-400 mt-8">
          * Testimonials represent the experiences of real clients. Individual outcomes may vary.
        </p>
      </div>
    </section>
  );
}

interface Item {
  id: number;
  name: string;
  relation: string;
  county: string;
  stars: number;
  quote: string;
}

function TestimonialCard({ t }: { t: Item }) {
  const initials = t.name
    .split(' ')
    .map((w) => w[0])
    .join('')
    .toUpperCase()
    .slice(0, 2);

  return (
    <div className="relative flex flex-col bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow duration-300 overflow-hidden">
      {/* Top accent bar */}
      <div className="h-1 w-full bg-gradient-to-r from-mc-forest to-mc-leaf-600" />

      <div className="flex flex-col flex-1 p-6">
        {/* Stars */}
        <div className="flex gap-0.5 mb-4">
          {Array.from({ length: t.stars }).map((_, i) => (
            <Star key={i} className="h-4 w-4 fill-amber-400 text-amber-400" />
          ))}
        </div>

        {/* Quote mark */}
        <span className="text-5xl leading-none font-serif text-mc-forest/10 select-none mb-1">
          &ldquo;
        </span>

        {/* Quote text */}
        <p className="text-gray-700 text-sm leading-relaxed flex-1">
          {t.quote}
        </p>

        {/* Divider */}
        <div className="border-t border-gray-100 mt-6 pt-5 flex items-center justify-between gap-3">
          {/* Avatar + name */}
          <div className="flex items-center gap-3 min-w-0">
            <div className="shrink-0 h-9 w-9 rounded-full bg-mc-forest flex items-center justify-center">
              <span className="text-white text-xs font-bold tracking-wide">{initials}</span>
            </div>
            <div className="min-w-0">
              <p className="font-semibold text-mc-forest text-sm leading-tight truncate">{t.name}</p>
              <p className="text-xs text-gray-500 mt-0.5 leading-tight truncate">{t.relation}</p>
            </div>
          </div>

          {/* County badge */}
          <span className="inline-flex items-center gap-1 shrink-0 text-xs font-medium text-mc-leaf-700 bg-mc-leaf-50 border border-mc-leaf-100 rounded-full px-2.5 py-1">
            <MapPin className="h-3 w-3" />
            {t.county}
          </span>
        </div>
      </div>
    </div>
  );
}
