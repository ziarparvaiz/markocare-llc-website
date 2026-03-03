'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Phone, Menu, X, ChevronDown } from 'lucide-react';
import { brand } from '@/config/brand';
import { cn } from '@/lib/utils';

const navItems = [
  { label: 'Home', href: '/' },
  {
    label: 'Services',
    href: '/services',
    children: brand.services.map((s) => ({
      label: s.name,
      href: `/services/${s.slug}`,
    })),
  },
  {
    label: 'Service Areas',
    href: '/service-areas',
    children: brand.countyPages.map((c) => ({
      label: c.name,
      href: `/service-areas/${c.slug}`,
    })),
  },
  { label: 'About', href: '/about' },
  { label: 'Referral Partners', href: '/referral-partners' },
  { label: 'Careers', href: '/careers' },
  { label: 'Contact', href: '/contact' },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-mc-stone shadow-float">
      {/* Top bar */}
      <div className="bg-mc-forest text-white text-xs py-1.5 px-4 text-center">
        <span className="font-medium">{brand.licenseStatusLabel}</span>
        <span className="mx-3 opacity-40">|</span>
        <a href={`tel:${brand.phone}`} className="hover:underline font-semibold">
          {brand.phoneDisplay}
        </a>
        <span className="mx-3 opacity-40">|</span>
        <span>{brand.emergencyLine}</span>
      </div>

      {/* Main nav */}
      <nav className="container-pad flex items-center justify-between h-16">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 shrink-0">
          <Image
            src="/markocare-logo.svg"
            alt={brand.brandName}
            width={44}
            height={44}
            className="shrink-0 w-11 h-11 object-contain"
          />
          <div>
            <span className="block text-[1.1rem] font-serif font-bold text-mc-forest leading-tight">
              {brand.brandName}
            </span>
            <span className="block text-[9px] font-semibold uppercase tracking-widest text-gray-400 leading-tight">
              Home Care Agency
            </span>
          </div>
        </Link>

        {/* Desktop nav */}
        <ul className="hidden lg:flex items-center gap-1">
          {navItems.map((item) => (
            <li key={item.label} className="relative group">
              {item.children ? (
                <>
                  <button
                    className="flex items-center gap-1 px-3 py-2 text-sm font-medium text-gray-700 rounded-lg hover:bg-brand-green-50 hover:text-brand-green-700 transition-colors"
                    onMouseEnter={() => setOpenDropdown(item.label)}
                    onMouseLeave={() => setOpenDropdown(null)}
                  >
                    {item.label}
                    <ChevronDown className="h-3.5 w-3.5 opacity-60" />
                  </button>
                  <div
                    className={cn(
                      'absolute left-0 top-full mt-1 w-56 rounded-2xl bg-white shadow-lg border border-gray-100 py-2 z-50 transition-all duration-150',
                      openDropdown === item.label
                        ? 'opacity-100 visible translate-y-0'
                        : 'opacity-0 invisible -translate-y-1'
                    )}
                    onMouseEnter={() => setOpenDropdown(item.label)}
                    onMouseLeave={() => setOpenDropdown(null)}
                  >
                    <Link
                      href={item.href}
                      className="block px-4 py-2 text-xs font-semibold text-brand-navy-600 uppercase tracking-wide border-b border-gray-100 mb-1"
                    >
                      All {item.label}
                    </Link>
                    {item.children.map((child) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-brand-green-50 hover:text-brand-green-700 transition-colors"
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                </>
              ) : (
                <Link
                  href={item.href}
                  className="block px-3 py-2 text-sm font-medium text-gray-700 rounded-lg hover:bg-brand-green-50 hover:text-brand-green-700 transition-colors"
                >
                  {item.label}
                </Link>
              )}
            </li>
          ))}
        </ul>

        {/* CTA */}
        <div className="hidden lg:flex items-center gap-3">
          <a
            href={`tel:${brand.phone}`}
            className="flex items-center gap-2 text-sm font-semibold text-brand-green-700 hover:text-brand-green-800 transition-colors"
          >
            <Phone className="h-4 w-4" />
            {brand.phoneDisplay}
          </a>
          <Link href="/contact" className="btn-mc-primary text-sm py-2 px-5">
            Free Assessment
          </Link>
        </div>

        {/* Mobile toggle */}
        <button
          className="lg:hidden p-2 rounded-lg text-gray-700 hover:bg-gray-100"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="lg:hidden border-t border-gray-100 bg-white">
          <div className="container-pad py-4 space-y-1">
            {navItems.map((item) => (
              <div key={item.label}>
                <Link
                  href={item.href}
                  className="block px-3 py-2.5 text-sm font-medium text-gray-800 rounded-lg hover:bg-brand-green-50 hover:text-brand-green-700"
                  onClick={() => setMobileOpen(false)}
                >
                  {item.label}
                </Link>
                {item.children && (
                  <div className="ml-4 mt-1 space-y-1 border-l-2 border-brand-green-100 pl-3">
                    {item.children.map((child) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        className="block py-1.5 text-sm text-gray-600 hover:text-brand-green-700"
                        onClick={() => setMobileOpen(false)}
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <div className="pt-3 border-t border-gray-100 flex flex-col gap-2">
              <a
                href={`tel:${brand.phone}`}
                className="btn-outline w-full justify-center"
              >
                <Phone className="h-4 w-4" />
                Call {brand.phoneDisplay}
              </a>
              <Link
                href="/contact"
                className="btn-primary w-full justify-center"
                onClick={() => setMobileOpen(false)}
              >
                Free Assessment
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
