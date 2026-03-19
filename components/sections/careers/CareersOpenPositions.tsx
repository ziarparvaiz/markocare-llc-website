import Link from 'next/link';
import { ArrowRight, Briefcase, CheckCircle, MapPin } from 'lucide-react';
import SectionHeader from '@/components/ui/SectionHeader';
import type { CareerPost } from '@/lib/careers';

type Props = { positions: CareerPost[] };

export default function CareersOpenPositions({ positions }: Props) {
  return (
    <section className="section-pad bg-mc-sage" id="open-positions">
      <div className="container-pad">
        <SectionHeader
          badge="Open Positions"
          title="Current Openings"
          subtitle="We are actively filling the following positions across our Maryland service area. Find the role that fits you best."
        />
        <div className="mt-12 space-y-6 max-w-4xl mx-auto">
          {positions.map((position) => (
            <article key={position.slug}
              className="mc-card group hover:shadow-premium-lg hover:border-mc-leaf-200 hover:-translate-y-0.5 transition-all duration-200"
            >
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-5">
                <div className="flex-1">
                  <div className="flex flex-wrap items-center gap-2 mb-2">
                    <span className="mc-badge">
                      <Briefcase className="h-3 w-3" />
                      {position.employmentType}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-mc-forest">{position.title}</h3>
                </div>
                <div className="hidden sm:flex items-center gap-2 shrink-0">
                  <Link href={`/careers/${position.slug}`} className="btn-mc-outline text-sm py-2.5 px-5">
                    View Details
                  </Link>
                  <Link href={`/careers/${position.slug}#apply`} className="btn-mc-primary text-sm py-2.5 px-5">
                    Apply Now
                    <ArrowRight className="h-3.5 w-3.5" />
                  </Link>
                </div>
              </div>
              <p className="text-gray-600 text-sm leading-relaxed mb-5">{position.summary}</p>
              <div className="mb-5">
                <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-3">Key Requirements</p>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {position.requirements.map((req: string) => (
                    <li key={req} className="flex items-start gap-2 text-sm text-gray-700">
                      <CheckCircle className="h-4 w-4 text-mc-leaf-500 shrink-0 mt-0.5" />
                      {req}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 pt-4 border-t border-mc-stone">
                <div className="flex items-center gap-1.5 text-xs text-gray-500">
                  <MapPin className="h-3.5 w-3.5 text-mc-leaf-400 shrink-0" />
                  <span>{position.counties}</span>
                </div>
                <div className="sm:hidden flex gap-2">
                  <Link href={`/careers/${position.slug}`} className="btn-mc-outline text-sm py-2 px-4 flex-1 justify-center">View Details</Link>
                  <Link href={`/careers/${position.slug}#apply`} className="btn-mc-primary text-sm py-2 px-4 flex-1 justify-center">Apply Now</Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
