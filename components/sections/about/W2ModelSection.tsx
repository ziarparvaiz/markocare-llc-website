import { CheckCircle, Award } from 'lucide-react';
import { brand } from '@/config/brand';

type Props = {
  lead: string;
  benefits: string[];
  complianceCard: { title: string; body1: string; body2: string };
};

export default function W2ModelSection({ lead, benefits, complianceCard }: Props) {
  return (
    <section className="py-24 md:py-32 bg-mc-sage">
      <div className="container-pad">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
          <div>
            <span className="eyebrow mb-3 block">The W2 Difference</span>
            <h2 className="text-3xl md:text-4xl font-bold text-mc-forest mb-5">
              Why We Hire W2 Employees — Not Contractors
            </h2>
            <p className="text-gray-600 leading-relaxed mb-8">{lead}</p>
            <ul className="space-y-4">
              {benefits.map((b) => (
                <li key={b} className="flex items-start gap-3 text-gray-700">
                  <div className="w-5 h-5 rounded-full bg-mc-leaf-100 flex items-center justify-center shrink-0 mt-0.5">
                    <CheckCircle className="h-3.5 w-3.5 text-mc-leaf-600" />
                  </div>
                  <span className="text-sm leading-relaxed">{b}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-[24px] bg-mc-forest text-white p-8 md:p-10 shadow-premium-xl relative overflow-hidden">
            <div className="absolute inset-0 pointer-events-none"
              style={{ background: 'radial-gradient(ellipse at 80% 10%, rgba(82,184,72,0.12) 0%, transparent 60%)' }}
            />
            <div className="relative">
              <div className="w-12 h-12 rounded-2xl bg-white/10 border border-white/20 flex items-center justify-center mb-5">
                <Award className="h-6 w-6 text-mc-leaf-400" />
              </div>
              <p className="text-xs font-bold uppercase tracking-widest text-mc-leaf-400 mb-2">Compliance Document</p>
              <h3 className="text-2xl font-bold text-white mb-4">{complianceCard.title}</h3>
              <div className="h-px bg-white/10 mb-5" />
              <p className="text-white/75 leading-relaxed mb-4 text-sm">{complianceCard.body1}</p>
              <p className="text-white/75 leading-relaxed text-sm">{complianceCard.body2}</p>
              <div className="mt-6 pt-5 border-t border-white/10 flex flex-col gap-2">
                <a href={`mailto:${brand.email}`} className="text-mc-leaf-300 hover:text-mc-leaf-200 text-sm font-medium transition-colors">
                  {brand.email}
                </a>
                <a href={`tel:${brand.phone}`} className="text-mc-leaf-300 hover:text-mc-leaf-200 text-sm font-medium transition-colors">
                  {brand.phoneDisplay}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
