import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

type Stat = { value: string; label: string };

type Props = {
  mission: { blockquote: string; lead: string };
  missionStats: Stat[];
  teamImage: string;
};

export default function MissionSection({ mission, missionStats, teamImage }: Props) {
  return (
    <section id="our-mission" className="py-24 md:py-32 bg-white">
      <div className="container-pad">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 xl:gap-24 items-center max-w-6xl mx-auto">
          <div>
            <span className="eyebrow mb-4 block">Our Mission</span>
            <blockquote className="text-2xl md:text-3xl font-serif font-semibold text-mc-forest leading-relaxed mb-7 border-l-4 border-mc-leaf-400 pl-6">
              &ldquo;{mission.blockquote}&rdquo;
            </blockquote>
            <p className="text-gray-600 leading-relaxed text-lg mb-10">{mission.lead}</p>
            <Link href="/contact" className="btn-mc-primary inline-flex">
              Get Started Today <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="space-y-6">
            <div className="grid grid-cols-2 gap-4">
              {missionStats.map((s) => (
                <div key={s.label} className="rounded-2xl border border-mc-stone bg-mc-sage p-5 text-center shadow-premium">
                  <p className="text-3xl font-serif font-bold text-mc-leaf-500 leading-none mb-2">{s.value}</p>
                  <p className="text-xs text-gray-500 leading-tight">{s.label}</p>
                </div>
              ))}
            </div>
            <div className="relative rounded-[20px] overflow-hidden shadow-premium-lg w-full" style={{ aspectRatio: '16/9' }}>
              <Image
                src={teamImage}
                alt="MarkoCare caregiver assisting an elderly client at home in Maryland"
                fill className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
