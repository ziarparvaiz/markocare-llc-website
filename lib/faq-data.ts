import faqJson from '@/data/faq/faq.json';
import globalFaqJson from '@/data/global-components/faq/faq.json';
import type { FaqData, FaqItem, GlobalFaqConfig } from '@/types/global-components';

export function getFaqData(): FaqData {
  return faqJson as FaqData;
}

export function getGlobalFaqConfig(): GlobalFaqConfig {
  return globalFaqJson as GlobalFaqConfig;
}

/** Flattens all FAQ items across all categories into a single array. */
export function getAllFaqItems(): FaqItem[] {
  return (faqJson as FaqData).categories.flatMap((cat) => cat.items);
}

/**
 * Returns FAQ items matching the provided numeric IDs, in the order given.
 * Silently skips any IDs that do not exist in the dataset.
 */
export function getFaqItemsByIds(ids: number[]): FaqItem[] {
  const all = getAllFaqItems();
  return ids
    .map((id) => all.find((item) => item.id === id))
    .filter((item): item is FaqItem => item !== undefined);
}

/**
 * Convenience: returns the items selected by the global FAQ component config.
 */
export function getGlobalFaqItems(): FaqItem[] {
  return getFaqItemsByIds(globalFaqJson.selectedIds);
}
