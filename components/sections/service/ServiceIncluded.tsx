import { CheckCircle } from 'lucide-react';
import Link from 'next/link';

type Props = { included: string[] };

export default function ServiceIncluded({ included }: Props) {
  return (
    <div>
      <span className="eyebrow">What&apos;s Covered</span>
      <h2 className="text-2xl md:text-3xl font-bold text-mc-forest mt-1 mb-2">
        Care Activities Included
      </h2>
      <p className="text-gray-500 mb-6">
        Every visit follows your loved one&apos;s personalized care plan and includes:
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        {included.map((item) => (
          <div
            key={item}
            className="flex items-start gap-3 rounded-xl border border-mc-stone bg-mc-sage px-4 py-3.5 transition-colors hover:bg-mc-leaf-50 hover:border-mc-leaf-200"
          >
            <CheckCircle className="h-4 w-4 text-mc-leaf-500 shrink-0 mt-0.5" aria-hidden="true" />
            <span className="text-sm text-gray-700 leading-snug">{item}</span>
          </div>
        ))}
      </div>
      {/* Mobile CTA */}
      <div className="lg:hidden mt-6 rounded-2xl bg-mc-forest text-white p-6">
        <h3 className="text-lg font-bold mb-2">Ready to get started?</h3>
        <p className="text-sm text-white/70 mb-4">
          Request a free, no-obligation in-home assessment today.
        </p>
        <Link href="/contact" className="btn-mc-primary w-full justify-center block text-center">
          Request Free Assessment
        </Link>
      </div>
    </div>
  );
}
