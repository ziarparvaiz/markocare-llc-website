'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {
  Phone,
  Menu,
  X,
  ChevronDown,
  Shield,
  Heart,
  Users,
  Brain,
  Clock,
  Building2,
  HeartPulse,
  Layers,
  MapPin,
  type LucideIcon,
} from 'lucide-react';
import { brand } from '@/config/brand';
import { cn } from '@/lib/utils';

// ─── Types ──────────────────────────────────────────────────────────────────

type Icon = LucideIcon;

interface NavChild {
  label: string;
  href: string;
  icon?: Icon;
  desc?: string;
}

interface NavItem {
  label: string;
  href: string;
  children?: NavChild[];
}

// ─── Service metadata map ───────────────────────────────────────────────────

const SERVICE_META: Record<string, { icon: Icon; desc: string }> = {
  'personal-care':         { icon: Heart,      desc: 'Daily living assistance'            },
  'companion-care':        { icon: Users,      desc: 'Social engagement & companionship'  },
  'dementia-care':         { icon: Brain,      desc: 'Specialized memory care'            },
  'respite-care':          { icon: Clock,      desc: 'Relief for family caregivers'       },
  'post-hospital-support': { icon: Building2,  desc: 'Safe recovery at home'              },
  'cancer-care-support':   { icon: HeartPulse, desc: 'Compassionate oncology support'     },
  'ipop-transitional-care':{ icon: Layers,     desc: 'Integrated care transitions'        },
};

// ─── Nav items ──────────────────────────────────────────────────────────────

const navItems: NavItem[] = [
  { label: 'Home', href: '/' },
  {
    label: 'Services',
    href: '/services',
    children: brand.services.map((s) => ({
      label: s.name,
      href: `/services/${s.slug}`,
      ...(SERVICE_META[s.slug] ?? {}),
    })),
  },
  {
    label: 'Service Areas',
    href: '/service-areas',
    children: brand.countyPages.map((c) => ({
      label: c.name,
      href: `/service-areas/${c.slug}`,
      icon: MapPin,
      desc: 'Maryland',
    })),
  },
  { label: 'About', href: '/about' },
  { label: 'Referral Partners', href: '/referral-partners' },
  { label: 'Careers', href: '/careers' },
  { label: 'Contact', href: '/contact' },
];

// ─── Component ──────────────────────────────────────────────────────────────

export default function Header() {
  const [mobileOpen, setMobileOpen]       = useState(false);
  const [openDropdown, setOpenDropdown]   = useState<string | null>(null);
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null);
  const [scrolled, setScrolled]           = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 6);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const closeAll = () => {
    setMobileOpen(false);
    setMobileExpanded(null);
  };

  return (
    <header
      className={cn(
        'sticky top-0 z-50 bg-white transition-shadow duration-300',
        scrolled ? 'shadow-float' : 'border-b border-mc-stone',
      )}
    >
      {/* ── Top bar ─────────────────────────────────────────────────────── */}
      <div className="bg-mc-forest text-white text-[11.5px]">
        <div className="container-pad flex items-center justify-center gap-6 py-[7px]">
          {/* License label — hidden on smallest screens */}
          <span className="hidden md:block font-medium opacity-85 truncate max-w-xs lg:max-w-none">
            {brand.licenseStatusLabel}
          </span>

          {/* Phone + 24/7 — centred on mobile */}
          <div className="flex items-center gap-3 w-full md:w-auto justify-center md:justify-end">
            <a
              href={`tel:${brand.phone}`}
              className="flex items-center gap-1.5 font-semibold hover:opacity-75 transition-opacity"
            >
              <Phone className="h-2.5 w-2.5" />
              {brand.phoneDisplay}
            </a>
            <span className="opacity-25 select-none">|</span>
            <span className="opacity-80">{brand.emergencyLine}</span>
          </div>
        </div>
      </div>

      {/* ── Main nav ────────────────────────────────────────────────────── */}
      <nav className="container-pad flex items-center justify-between h-[70px]">

        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 shrink-0 group" aria-label="MarkoCare home">
          <Image
            src="/markocare-logo.svg"
            alt={brand.brandName}
            width={48}
            height={48}
            className="w-[46px] h-[46px] object-contain transition-transform duration-200 group-hover:scale-[1.04]"
            priority
          />
          <div className="leading-none">
            <span className="block text-[1.1rem] font-serif font-bold text-mc-forest tracking-tight">
              {brand.brandName}
            </span>
            <span className="block text-[9px] font-semibold uppercase tracking-[0.14em] text-gray-400 mt-[3px]">
              Home Care Agency
            </span>
          </div>
        </Link>

        {/* ── Desktop navigation ──────────────────────────────────────── */}
        <ul className="hidden lg:flex items-center gap-0.5">
          {navItems.map((item) =>
            item.children ? (
              /* Dropdown item */
              <li
                key={item.label}
                className="relative"
                onMouseEnter={() => setOpenDropdown(item.label)}
                onMouseLeave={() => setOpenDropdown(null)}
              >
                <button
                  className="flex items-center gap-1 px-3.5 py-2 text-[13.5px] font-medium text-gray-600 rounded-lg hover:text-mc-forest hover:bg-mc-sage transition-colors duration-150 focus:outline-none"
                  aria-expanded={openDropdown === item.label}
                  aria-haspopup="true"
                >
                  {item.label}
                  <ChevronDown
                    className={cn(
                      'h-3.5 w-3.5 opacity-50 transition-transform duration-200',
                      openDropdown === item.label ? 'rotate-180 opacity-70' : '',
                    )}
                    strokeWidth={2.2}
                  />
                </button>

                {/* Dropdown panel */}
                <div
                  className={cn(
                    'absolute left-0 top-full pt-2 z-50 transition-all duration-200 origin-top-left',
                    openDropdown === item.label
                      ? 'opacity-100 visible translate-y-0 scale-100'
                      : 'opacity-0 invisible -translate-y-1 scale-[0.97]',
                  )}
                  role="menu"
                >
                  <div className="bg-white rounded-2xl shadow-premium-lg border border-mc-stone/70 py-2 min-w-[256px] overflow-hidden">
                    {/* "View all" header link */}
                    <Link
                      href={item.href}
                      className="flex items-center justify-between px-4 py-2.5 text-[10.5px] font-bold uppercase tracking-widest text-mc-forest border-b border-mc-stone mb-1.5 hover:text-mc-leaf-600 transition-colors"
                      role="menuitem"
                    >
                      <span>All {item.label}</span>
                      <ChevronDown className="h-3 w-3 -rotate-90 opacity-40" />
                    </Link>

                    {/* Children */}
                    {item.children.map((child) => {
                      const Icon = child.icon;
                      return (
                        <Link
                          key={child.href}
                          href={child.href}
                          className="flex items-center gap-3 px-4 py-2.5 hover:bg-mc-sage transition-colors duration-100 group/item"
                          role="menuitem"
                        >
                          {Icon && (
                            <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-md bg-mc-leaf-50 text-mc-leaf-600 group-hover/item:bg-mc-leaf-100 transition-colors">
                              <Icon className="h-3.5 w-3.5" />
                            </span>
                          )}
                          <span className="min-w-0">
                            <span className="block text-[13px] font-medium text-gray-800 group-hover/item:text-mc-forest leading-snug">
                              {child.label}
                            </span>
                            {child.desc && (
                              <span className="block text-[11px] text-gray-400 leading-snug mt-0.5">
                                {child.desc}
                              </span>
                            )}
                          </span>
                        </Link>
                      );
                    })}
                  </div>
                </div>
              </li>
            ) : (
              /* Regular nav link with animated underline */
              <li key={item.label}>
                <Link
                  href={item.href}
                  className="relative block px-3.5 py-2 text-[13.5px] font-medium text-gray-600 rounded-lg hover:text-mc-forest hover:bg-mc-sage transition-colors duration-150 group/link"
                >
                  {item.label}
                  {/* Animated underline */}
                  <span
                    className="absolute bottom-[5px] left-3.5 right-3.5 h-[1.5px] bg-mc-leaf-400 scale-x-0 group-hover/link:scale-x-100 origin-left transition-transform duration-200 rounded-full"
                    aria-hidden="true"
                  />
                </Link>
              </li>
            ),
          )}
        </ul>

        {/* ── Desktop right cluster ────────────────────────────────────── */}
        <div className="hidden lg:flex items-center gap-3.5">
          {/* CTA — pill with glow */}
          <Link
            href="/contact"
            className={cn(
              'inline-flex items-center rounded-full px-5 py-2.5',
              'bg-mc-leaf-400 text-white text-[13px] font-semibold whitespace-nowrap',
              'shadow-[0_4px_18px_rgba(82,184,72,0.38)]',
              'hover:bg-mc-leaf-500 hover:shadow-[0_6px_28px_rgba(82,184,72,0.52)]',
              'transition-all duration-200 active:scale-[0.98]',
              'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-mc-leaf-400 focus-visible:ring-offset-2',
            )}
          >
            Request Free Assessment
          </Link>
        </div>

        {/* ── Mobile hamburger ─────────────────────────────────────────── */}
        <button
          className="lg:hidden flex items-center justify-center p-2 rounded-xl text-mc-forest hover:bg-mc-sage transition-colors"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label={mobileOpen ? 'Close navigation menu' : 'Open navigation menu'}
          aria-expanded={mobileOpen}
        >
          {mobileOpen
            ? <X className="h-5 w-5" strokeWidth={2.2} />
            : <Menu className="h-5 w-5" strokeWidth={2.2} />}
        </button>
      </nav>

      {/* ── Mobile drawer ───────────────────────────────────────────────── */}
      <div
        className={cn(
          'lg:hidden overflow-hidden transition-all duration-300 ease-in-out',
          mobileOpen ? 'max-h-[640px] opacity-100' : 'max-h-0 opacity-0',
        )}
        aria-hidden={!mobileOpen}
      >
        <div className="border-t border-mc-stone bg-white">
          <div className="container-pad py-3 space-y-0.5">
            {navItems.map((item) =>
              item.children ? (
                /* Accordion item */
                <div key={item.label}>
                  <button
                    className="w-full flex items-center justify-between px-3 py-2.5 text-sm font-semibold text-gray-800 rounded-xl hover:bg-mc-sage transition-colors"
                    onClick={() =>
                      setMobileExpanded(mobileExpanded === item.label ? null : item.label)
                    }
                    aria-expanded={mobileExpanded === item.label}
                  >
                    {item.label}
                    <ChevronDown
                      className={cn(
                        'h-4 w-4 text-gray-400 transition-transform duration-200',
                        mobileExpanded === item.label ? 'rotate-180' : '',
                      )}
                      strokeWidth={2.2}
                    />
                  </button>

                  <div
                    className={cn(
                      'overflow-hidden transition-all duration-250 ease-in-out',
                      mobileExpanded === item.label ? 'max-h-80' : 'max-h-0',
                    )}
                  >
                    <div className="ml-4 mt-1 mb-2 border-l-2 border-mc-leaf-200 pl-3 space-y-0.5">
                      <Link
                        href={item.href}
                        className="block py-1.5 text-[11px] font-bold uppercase tracking-widest text-mc-forest"
                        onClick={closeAll}
                      >
                        All {item.label}
                      </Link>
                      {item.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          className="block py-2 text-sm text-gray-600 hover:text-mc-forest transition-colors"
                          onClick={closeAll}
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              ) : (
                /* Simple link */
                <Link
                  key={item.label}
                  href={item.href}
                  className="block px-3 py-2.5 text-sm font-medium text-gray-700 rounded-xl hover:bg-mc-sage hover:text-mc-forest transition-colors"
                  onClick={closeAll}
                >
                  {item.label}
                </Link>
              ),
            )}
          </div>

          {/* Mobile bottom CTA strip */}
          <div className="container-pad pb-5 pt-3 border-t border-mc-stone space-y-2.5">
            {/* Trust line */}
            {brand.hasRNSupervision && (
              <div className="flex items-center justify-center gap-1.5 text-[11px] font-semibold text-gray-500 py-0.5">
                <Shield className="h-3 w-3 text-mc-leaf-500 shrink-0" strokeWidth={2.5} />
                RN Supervised Care · Maryland
              </div>
            )}

            {/* Phone button */}
            <a
              href={`tel:${brand.phone}`}
              className="flex items-center justify-center gap-2 rounded-xl border border-mc-stone bg-mc-sage py-3 text-sm font-semibold text-mc-forest hover:bg-mc-stone transition-colors"
            >
              <Phone className="h-4 w-4" strokeWidth={2.2} />
              Call {brand.phoneDisplay}
            </a>

            {/* CTA button */}
            <Link
              href="/contact"
              className={cn(
                'flex items-center justify-center rounded-full py-3',
                'bg-mc-leaf-400 text-white text-sm font-semibold',
                'shadow-[0_4px_18px_rgba(82,184,72,0.38)]',
                'hover:bg-mc-leaf-500 transition-all duration-200',
              )}
              onClick={closeAll}
            >
              Request Free Assessment
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
