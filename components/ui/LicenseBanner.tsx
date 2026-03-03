import { Shield, Info } from 'lucide-react';
import { brand } from '@/config/brand';

export default function LicenseBanner() {
  if (brand.isLicensed) return null;

  return (
    <div className="rounded-2xl border border-amber-200 bg-amber-50 px-5 py-4 flex items-start gap-3">
      <Info className="h-5 w-5 text-amber-600 shrink-0 mt-0.5" />
      <div>
        <p className="text-sm font-semibold text-amber-800 mb-0.5">
          {brand.licenseStatusLabel}
        </p>
        <p className="text-xs text-amber-700 leading-relaxed">
          {brand.licenseNote}
        </p>
      </div>
    </div>
  );
}

export function LicenseBadge({ className }: { className?: string }) {
  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-full border px-3 py-1 text-xs font-semibold ${
        brand.isLicensed
          ? 'border-brand-green-300 bg-brand-green-100 text-brand-green-800'
          : 'border-amber-300 bg-amber-100 text-amber-800'
      } ${className ?? ''}`}
    >
      <Shield className="h-3 w-3" />
      {brand.isLicensed ? 'Licensed RSA' : 'RSA Licensure in Progress'}
    </span>
  );
}
