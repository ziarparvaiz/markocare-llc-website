import headerJson from '@/data/header/header.json';
import { brand } from '@/config/brand';
import type { HeaderData, NavItem, RawNavItem, MobileCtaConfig } from '@/types/global-components';

/**
 * Loads header.json and merges in brand-level data (services, etc.).
 * Icons are NOT injected here — they are a UI concern handled by the Header
 * component via SERVICE_META.
 */
export function getHeaderData(): HeaderData {
  const navigation: NavItem[] = (headerJson.navigation as RawNavItem[]).map(
    (item): NavItem => {
      if (item.brandChildrenKey === 'services') {
        return {
          label: item.label,
          href: item.href,
          children: brand.services.map((s) => ({
            label: s.name,
            href: `/services/${s.slug}`,
          })),
        };
      }
      return { label: item.label, href: item.href };
    },
  );

  return {
    announcementBar: headerJson.announcementBar,
    navigation,
    cta: headerJson.cta,
    mobileCta: (headerJson as { mobileCta?: MobileCtaConfig }).mobileCta,
  };
}
