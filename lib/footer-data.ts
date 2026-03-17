import footerJson from '@/data/footer/footer.json';
import type { FooterData } from '@/types/global-components';

/**
 * Loads footer.json and returns typed footer content.
 * Brand-level data (contact info, services, counties) is read directly from
 * /config/brand.ts inside the Footer component — not duplicated here.
 */
export function getFooterData(): FooterData {
  return footerJson as FooterData;
}
