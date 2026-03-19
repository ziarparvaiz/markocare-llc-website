import Link from 'next/link';
import { MapPin, ArrowRight, Building2, Phone, Mail } from 'lucide-react';
import { brand } from '@/config/brand';

type Props = { lead: string };

export default function LocalPresenceSection({ lead }: Props) {
  return (
    <section className="py-24 md:py-32 bg-mc-sage">
      <div className="container-pad">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 xl:gap-20 items-center">
          <div>
            <span className="eyebrow mb-4 block">Local Presence</span>
            <h2 className="text-3xl md:text-4xl font-bold text-mc-forest mb-5">
              Serving Families Across Maryland
            </h2>
            <p className="text-gray-600 leading-relaxed mb-8 text-lg">{lead}</p>
            <div className="grid grid-cols-2 gap-3">
              {brand.countyPages.map((county) => (
                <Link key={county.slug} href={`/service-areas/${county.slug}`}
                  className="group flex items-center gap-2.5 rounded-xl bg-white border border-mc-stone px-4 py-3.5 shadow-premium hover:border-mc-leaf-300 hover:shadow-premium-lg transition-all duration-200"
                >
                  <MapPin className="h-4 w-4 text-mc-leaf-500 shrink-0" />
                  <span className="text-sm font-medium text-mc-forest group-hover:text-mc-leaf-600 transition-colors">{county.name}</span>
                  <ArrowRight className="h-3.5 w-3.5 text-mc-leaf-400 ml-auto opacity-0 group-hover:opacity-100 group-hover:translate-x-0.5 transition-all" />
                </Link>
              ))}
            </div>
          </div>

          {/* Office card */}
          <div className="rounded-[24px] bg-white border border-mc-stone shadow-premium-lg overflow-hidden">
            <div className="h-36 bg-mc-leaf-50 relative flex items-center justify-center border-b border-mc-stone overflow-hidden">
              {[
                { top: '20%', left: '15%', size: 8 },
                { top: '50%', left: '35%', size: 6 },
                { top: '30%', right: '20%', size: 8 },
                { bottom: '20%', right: '35%', size: 6 },
                { bottom: '30%', left: '25%', size: 5 },
                { top: '70%', left: '60%', size: 7 },
              ].map((dot, i) => (
                <div key={i} className="absolute rounded-full bg-mc-leaf-300 opacity-30"
                  style={{ width: dot.size, height: dot.size,
                    top: dot.top, left: (dot as Record<string, unknown>).left as string,
                    right: (dot as Record<string, unknown>).right as string, bottom: dot.bottom }}
                />
              ))}
              <div className="relative flex items-center gap-3 bg-white/80 backdrop-blur-sm rounded-2xl px-5 py-3 shadow-premium border border-mc-stone">
                <div className="w-10 h-10 rounded-full bg-mc-leaf-500 flex items-center justify-center shadow-float">
                  <MapPin className="h-5 w-5 text-white" />
                </div>
                <div>
                  <p className="font-bold text-mc-forest text-sm">Columbia, Maryland</p>
                  <p className="text-xs text-gray-500">MarkoCare Headquarters</p>
                </div>
              </div>
            </div>
            <div className="p-7 space-y-5">
              <div className="flex items-start gap-3">
                <Building2 className="h-4 w-4 text-mc-leaf-500 shrink-0 mt-0.5" />
                <div>
                  <p className="text-xs font-bold text-mc-leaf-600 uppercase tracking-wide mb-1">Address</p>
                  <p className="text-sm text-gray-700 leading-relaxed">{brand.address}</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Phone className="h-4 w-4 text-mc-leaf-500 shrink-0 mt-0.5" />
                <div>
                  <p className="text-xs font-bold text-mc-leaf-600 uppercase tracking-wide mb-1">Phone</p>
                  <a href={`tel:${brand.phone}`} className="text-sm text-gray-700 hover:text-mc-leaf-600 font-medium transition-colors">
                    {brand.phoneDisplay}
                  </a>
                  <p className="text-xs text-gray-500 mt-1">{brand.officeHours}</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Mail className="h-4 w-4 text-mc-leaf-500 shrink-0 mt-0.5" />
                <div>
                  <p className="text-xs font-bold text-mc-leaf-600 uppercase tracking-wide mb-1">Email</p>
                  <a href={`mailto:${brand.email}`} className="text-sm text-gray-700 hover:text-mc-leaf-600 font-medium transition-colors">
                    {brand.email}
                  </a>
                  <p className="text-xs text-mc-leaf-600 font-medium mt-1">{brand.emergencyLine}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
