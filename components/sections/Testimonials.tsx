import { Star, Quote } from 'lucide-react';
import SectionHeader from '@/components/ui/SectionHeader';

const testimonials = [
  {
    name: 'Patricia M.',
    relation: 'Daughter of a Howard County client',
    county: 'Howard County',
    stars: 5,
    text:
      'The team at MarkoCare truly understands what it means to care. My mother\'s caregiver was not only professional but genuinely warm. The RN check-ins gave us real peace of mind during a difficult time.',
  },
  {
    name: 'Robert T.',
    relation: 'Post-surgical recovery client',
    county: 'Anne Arundel County',
    stars: 5,
    text:
      'After my hip replacement, I wasn\'t sure how I\'d manage at home. MarkoCare\'s caregiver arrived the day of discharge and handled everything. The coordination with my discharge planner was seamless.',
  },
  {
    name: 'Sandra K.',
    relation: 'Family caregiver – Respite client',
    county: 'Carroll County',
    stars: 5,
    text:
      'Caring for my husband with dementia was overwhelming. MarkoCare\'s respite service gave me the break I desperately needed. They knew exactly how to work with him — patient, calm, and knowledgeable.',
  },
];

export default function Testimonials() {
  return (
    <section className="section-pad bg-white">
      <div className="container-pad">
        <SectionHeader
          badge="What Families Say"
          title="Trusted by Maryland Families"
          subtitle="Our clients and their families speak to the quality, professionalism, and warmth that defines MarkoCare."
        />

        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <div key={t.name} className="card-hover relative">
              <Quote className="absolute top-4 right-4 h-8 w-8 text-brand-green-100" />
              <div className="flex gap-0.5 mb-4">
                {Array.from({ length: t.stars }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-amber-400 text-amber-400" />
                ))}
              </div>
              <p className="text-sm text-gray-700 leading-relaxed mb-5 italic">
                &ldquo;{t.text}&rdquo;
              </p>
              <div className="border-t border-gray-100 pt-4">
                <p className="font-semibold text-mc-forest text-sm">{t.name}</p>
                <p className="text-xs text-gray-500 mt-0.5">{t.relation}</p>
                <span className="badge-green mt-2 inline-flex">{t.county}</span>
              </div>
            </div>
          ))}
        </div>

        <p className="text-center text-xs text-gray-400 mt-6">
          * Testimonials represent the experiences of real clients. Individual outcomes may vary.
        </p>
      </div>
    </section>
  );
}
