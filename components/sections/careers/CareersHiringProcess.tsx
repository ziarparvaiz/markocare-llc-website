import {
  Search, FileText, UserCheck, CalendarCheck, Heart,
  type LucideIcon,
} from 'lucide-react';
import SectionHeader from '@/components/ui/SectionHeader';

const ICON_MAP: Record<string, LucideIcon> = {
  Search, FileText, UserCheck, CalendarCheck, Heart,
};

type HiringStep = { icon: string; step: string; title: string; desc: string };

type Props = { steps: HiringStep[] };

export default function CareersHiringProcess({ steps }: Props) {
  const resolved = steps.map((s) => ({ ...s, icon: ICON_MAP[s.icon] ?? Search }));
  return (
    <section className="section-pad bg-white">
      <div className="container-pad">
        <SectionHeader
          badge="Hiring Process"
          title="What to Expect"
          subtitle="Our hiring process is straightforward and respectful of your time. Here is how it works."
        />
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-5xl mx-auto">
          {resolved.map(({ icon: Icon, step, title, desc }) => (
            <div key={step} className="flex flex-col items-start">
              <div className="flex items-center gap-3 mb-4">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-2xl bg-mc-sage border border-mc-stone shrink-0">
                  <Icon className="h-5 w-5 text-mc-leaf-500" />
                </div>
                <span className="font-serif text-3xl font-bold text-mc-stone select-none">{step}</span>
              </div>
              <h3 className="font-semibold text-mc-forest mb-2">{title}</h3>
              <p className="text-sm text-gray-600 leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
