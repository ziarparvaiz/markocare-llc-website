import Link from 'next/link';
import { Phone, Mail, MapPin, Clock, Shield } from 'lucide-react';
import { brand } from '@/config/brand';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-mc-forest text-white">
      {/* Main footer */}
      <div className="container-pad py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand column */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2.5 mb-5">
              <div className="w-9 h-9 rounded-xl bg-mc-leaf-400 flex items-center justify-center">
                <span className="text-white font-serif font-bold text-base leading-none">M</span>
              </div>
              <div>
                <span className="block text-[1.05rem] font-serif font-bold leading-tight">{brand.brandName}</span>
                <span className="block text-[9px] font-semibold uppercase tracking-widest text-white/40 leading-tight">Home Care Agency</span>
              </div>
            </div>
            <p className="text-sm text-brand-navy-200 leading-relaxed mb-5">
              {brand.tagline}. Serving Maryland families with professional,
              compassionate home care.
            </p>
            {/* License badge */}
            <div className="inline-flex items-center gap-2 rounded-xl bg-white/10 border border-white/15 px-3 py-2 text-xs text-white/60">
              <Shield className="h-3.5 w-3.5 text-mc-leaf-400 shrink-0" />
              {brand.isLicensed ? 'Licensed RSA – Maryland' : 'RSA Licensure in Progress – Maryland'}
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-[11px] font-bold text-white uppercase tracking-widest mb-5">
              Our Services
            </h3>
            <ul className="space-y-3">
              {brand.services.map((service) => (
                <li key={service.slug}>
                  <Link
                    href={`/services/${service.slug}`}
                    className="text-sm text-white/50 hover:text-white transition-colors"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Service Areas */}
          <div>
            <h3 className="text-[11px] font-bold text-white uppercase tracking-widest mb-5">
              Service Areas
            </h3>
            <ul className="space-y-3 mb-7">
              {brand.countyPages.map((county) => (
                <li key={county.slug}>
                  <Link
                    href={`/service-areas/${county.slug}`}
                    className="text-sm text-white/50 hover:text-white transition-colors"
                  >
                    {county.name}
                  </Link>
                </li>
              ))}
            </ul>
            <h3 className="text-[11px] font-bold text-white uppercase tracking-widest mb-5">
              Company
            </h3>
            <ul className="space-y-3">
              {[
                { label: 'About Us', href: '/about' },
                { label: 'Referral Partners', href: '/referral-partners' },
                { label: 'Careers', href: '/careers' },
                { label: 'Resources', href: '/resources' },
                { label: 'FAQ', href: '/faq' },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/50 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-[11px] font-bold text-white uppercase tracking-widest mb-5">
              Contact Us
            </h3>
            <ul className="space-y-4">
              <li>
                <a
                  href={`tel:${brand.phone}`}
                  className="flex items-start gap-3 text-sm text-white/50 hover:text-white transition-colors"
                >
                  <Phone className="h-4 w-4 text-mc-leaf-400 mt-0.5 shrink-0" />
                  <span>
                    <span className="block font-semibold text-white">{brand.phoneDisplay}</span>
                    <span className="text-xs">{brand.emergencyLine}</span>
                  </span>
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${brand.email}`}
                  className="flex items-center gap-3 text-sm text-white/50 hover:text-white transition-colors"
                >
                  <Mail className="h-4 w-4 text-mc-leaf-400 shrink-0" />
                  {brand.email}
                </a>
              </li>
              <li>
                <a
                  href={brand.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-3 text-sm text-white/50 hover:text-white transition-colors"
                >
                  <MapPin className="h-4 w-4 text-mc-leaf-400 mt-0.5 shrink-0" />
                  <span>{brand.address}</span>
                </a>
              </li>
              <li className="flex items-start gap-3 text-sm text-white/50">
                <Clock className="h-4 w-4 text-mc-leaf-400 mt-0.5 shrink-0" />
                <span>{brand.officeHours}</span>
              </li>
            </ul>

            <div className="mt-7">
              <Link href="/contact" className="btn-mc-primary text-sm py-2.5 px-5 w-full justify-center">
                Request Free Assessment
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="container-pad py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-white/30">
            © {year} {brand.brandName}. All rights reserved. &nbsp;·&nbsp;
            {brand.caregiverModel} · RN Supervised · Background Checked · Insured
          </p>
          <div className="flex items-center gap-5 text-xs text-white/30">
            <Link href="/legal/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="/legal/terms" className="hover:text-white transition-colors">Terms of Service</Link>
            <Link href="/legal/compliance" className="hover:text-white transition-colors">Compliance</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
