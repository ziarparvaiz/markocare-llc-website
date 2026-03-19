import { CheckCircle, ShieldCheck, Phone } from 'lucide-react';
import { brand } from '@/config/brand';

type Props = {
  safety: string[];
  serviceName: string;
};

export default function ServiceSafety({ safety, serviceName }: Props) {
  return (
    <>
      <div className="rounded-2xl bg-mc-forest text-white p-7">
        <div className="flex items-center gap-3 mb-5">
          <div className="w-10 h-10 rounded-xl bg-mc-leaf-400/20 flex items-center justify-center shrink-0">
            <ShieldCheck className="h-5 w-5 text-mc-leaf-300" aria-hidden="true" />
          </div>
          <div>
            <p className="text-xs text-mc-leaf-400 font-semibold uppercase tracking-wide">
              Your Family&apos;s Security
            </p>
            <h2 className="text-xl font-bold">Safety &amp; RN Oversight</h2>
          </div>
        </div>
        <ul className="space-y-3">
          {safety.map((item) => (
            <li key={item} className="flex items-start gap-3 text-sm text-white/85">
              <CheckCircle className="h-4 w-4 text-mc-leaf-400 shrink-0 mt-0.5" aria-hidden="true" />
              {item}
            </li>
          ))}
        </ul>
      </div>

      {/* Mobile phone CTA */}
      <div className="lg:hidden rounded-2xl border border-mc-leaf-200 bg-mc-leaf-50 p-6">
        <p className="text-sm font-semibold text-mc-forest mb-1">
          Questions about {serviceName}?
        </p>
        <a href={`tel:${brand.phone}`} className="flex items-center gap-2 text-mc-leaf-700 font-bold text-xl">
          <Phone className="h-5 w-5" aria-hidden="true" />
          {brand.phoneDisplay}
        </a>
        <p className="text-xs text-gray-500 mt-1">Mon–Fri 8 am–6 pm · 24/7 on-call support</p>
      </div>
    </>
  );
}
