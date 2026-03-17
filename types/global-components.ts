// ─── Shared primitives ──────────────────────────────────────────────────────

export interface NavLink {
  label: string;
  href: string;
}

// ─── Header types ────────────────────────────────────────────────────────────

/** A nav child item (e.g. individual service under the Services dropdown). */
export interface NavChildItem extends NavLink {
  /** Short description shown in the desktop dropdown. */
  desc?: string;
}

/** A top-level navigation item, optionally with a dropdown. */
export interface NavItem extends NavLink {
  children?: NavChildItem[];
}

/** Raw nav item as stored in header.json before brand data is merged in. */
export interface RawNavItem extends NavLink {
  /**
   * When present, the children for this item are populated from the matching
   * brand array (e.g. "services" → brand.services).  The loading utility
   * resolves this before returning HeaderData.
   */
  brandChildrenKey?: string;
}

export interface AnnouncementBarConfig {
  enabled: boolean;
  /** Desktop left-side text. Falls back to brand.licenseStatusLabel if omitted. */
  label?: string;
  /** Right-side badge text (e.g. "24/7 On-Call Support Available"). Falls back to brand.emergencyLine if omitted. */
  badge?: string;
}

export interface CtaConfig {
  label: string;
  href: string;
}

export interface MobileCtaConfig {
  /** Short trust signal shown above the phone/CTA buttons on mobile. */
  trustLine?: string;
}

/** Fully resolved header data ready for the Header component to consume. */
export interface HeaderData {
  announcementBar: AnnouncementBarConfig;
  navigation: NavItem[];
  cta: CtaConfig;
  mobileCta?: MobileCtaConfig;
}

// ─── Footer types ────────────────────────────────────────────────────────────

/** Fully resolved footer data ready for the Footer component to consume. */
export interface FooterData {
  /** Short tagline shown below the brand logo in the footer brand column. */
  description: string;
  /** "Company" column links. */
  companyLinks: NavLink[];
  /** Bottom-bar legal/policy links. */
  legalLinks: NavLink[];
  cta: CtaConfig;
}
