import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

/* ─── Paths ──────────────────────────────────────────────────────────────── */

const PAGES_JSON_DIR = path.join(process.cwd(), 'data', 'pages-json');
const PAGES_MDX_DIR = path.join(process.cwd(), 'data', 'pages-mdx');

/* ─── Types ──────────────────────────────────────────────────────────────── */

export type ServiceFaq = { q: string; a: string };
export type RelatedService = { name: string; slug: string };

export type ServicePageData = {
  slug: string;
  name: string;
  icon: string;
  accentColor: string;
  seo: {
    title: string;
    description: string;
    canonical: string;
    ogTitle: string;
    ogDescription: string;
    ogImageAlt: string;
  };
  hero: {
    tagline: string;
    description: string;
  };
  whoIsItFor: string;
  included: string[];
  safety: string[];
  faqs: ServiceFaq[];
  relatedServices: RelatedService[];
};

export type ServiceAreaData = {
  slug: string;
  county: string;
  state: string;
  seo: {
    title: string;
    description: string;
    canonical: string;
    ogTitle: string;
    ogDescription: string;
    ogImageAlt: string;
  };
  hero: {
    eyebrow: string;
    title: string;
    description: string;
  };
  highlight: string;
  cities: string[];
  nearbyAreas: string[];
  localNote: string;
};

export type PageData = {
  slug: string;
  title: string;
  template: string;
  seo: {
    title: string;
    description: string;
    canonical: string;
    ogTitle: string;
    ogDescription: string;
    ogImageAlt: string;
  };
  hero: Record<string, string>;
  [key: string]: unknown;
};

export type MdxPageContent = {
  content: string;
  frontmatter: Record<string, unknown>;
};

/* ─── JSON Loaders ───────────────────────────────────────────────────────── */

/** Returns the JSON config for a service page by slug. Returns null if not found. */
export function getServicePageData(slug: string): ServicePageData | null {
  const filePath = path.join(PAGES_JSON_DIR, 'services', `${slug}.json`);
  if (!fs.existsSync(filePath)) return null;
  const raw = fs.readFileSync(filePath, 'utf-8');
  return JSON.parse(raw) as ServicePageData;
}

/** Returns all service page slugs (for generateStaticParams). */
export function getAllServiceSlugs(): string[] {
  const dir = path.join(PAGES_JSON_DIR, 'services');
  if (!fs.existsSync(dir)) return [];
  return fs
    .readdirSync(dir)
    .filter((f) => f.endsWith('.json'))
    .map((f) => f.replace(/\.json$/, ''));
}

/** Returns the JSON config for a service-area page by slug. Returns null if not found. */
export function getServiceAreaData(slug: string): ServiceAreaData | null {
  const filePath = path.join(PAGES_JSON_DIR, 'service-areas', `${slug}.json`);
  if (!fs.existsSync(filePath)) return null;
  const raw = fs.readFileSync(filePath, 'utf-8');
  return JSON.parse(raw) as ServiceAreaData;
}

/** Returns all service-area slugs (for generateStaticParams). */
export function getAllServiceAreaSlugs(): string[] {
  const dir = path.join(PAGES_JSON_DIR, 'service-areas');
  if (!fs.existsSync(dir)) return [];
  return fs
    .readdirSync(dir)
    .filter((f) => f.endsWith('.json'))
    .map((f) => f.replace(/\.json$/, ''));
}

/** Returns the JSON config for a named page (about, careers, contact, referral-partners). */
export function getPageData(name: string): PageData | null {
  const filePath = path.join(PAGES_JSON_DIR, 'pages', `${name}.json`);
  if (!fs.existsSync(filePath)) return null;
  const raw = fs.readFileSync(filePath, 'utf-8');
  return JSON.parse(raw) as PageData;
}

/* ─── MDX Loader ─────────────────────────────────────────────────────────── */

/**
 * Loads an MDX file from /data/pages-mdx/[dir]/[slug].mdx.
 * Returns { content, frontmatter } or null if not found.
 *
 * dir examples: 'services', 'service-areas', 'pages'
 */
export function getPageMdxContent(dir: string, slug: string): MdxPageContent | null {
  const filePath = path.join(PAGES_MDX_DIR, dir, `${slug}.mdx`);
  if (!fs.existsSync(filePath)) return null;
  const raw = fs.readFileSync(filePath, 'utf-8');
  const { data, content } = matter(raw);
  return { content, frontmatter: data };
}
