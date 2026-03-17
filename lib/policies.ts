import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const POLICIES_DIR = path.join(process.cwd(), 'data', 'policies');

export type PolicyFrontmatter = {
  title: string;
  description: string;
  slug: string;
  lastUpdated: string;
  seoTitle: string;
  seoDescription: string;
};

export type PolicyPage = PolicyFrontmatter & {
  content: string;
};

/** Frontmatter only — safe to pass to Client Components. */
export type PolicyPageMeta = Omit<PolicyPage, 'content'>;

function parsePolicyFile(filename: string): PolicyPage {
  const filePath = path.join(POLICIES_DIR, filename);
  const raw = fs.readFileSync(filePath, 'utf-8');
  const { data, content } = matter(raw);

  return {
    title: data.title ?? '',
    description: data.description ?? '',
    slug: data.slug ?? filename.replace(/\.mdx?$/, ''),
    lastUpdated: data.lastUpdated ?? '',
    seoTitle: data.seoTitle ?? data.title ?? '',
    seoDescription: data.seoDescription ?? data.description ?? '',
    content,
  };
}

/** Returns all policy pages. */
export function getAllPolicies(): PolicyPage[] {
  if (!fs.existsSync(POLICIES_DIR)) return [];
  const files = fs.readdirSync(POLICIES_DIR).filter((f) => /\.mdx?$/.test(f));
  return files.map(parsePolicyFile);
}

/** Returns all policy metadata (no MDX content) — for index pages. */
export function getAllPoliciesMeta(): PolicyPageMeta[] {
  return getAllPolicies().map(({ content: _content, ...meta }) => meta);
}

/** Returns a single policy page by slug, or null. */
export function getPolicyBySlug(slug: string): PolicyPage | null {
  if (!fs.existsSync(POLICIES_DIR)) return null;
  const files = fs.readdirSync(POLICIES_DIR).filter((f) => /\.mdx?$/.test(f));
  const match = files.find((f) => f.replace(/\.mdx?$/, '') === slug);
  if (!match) return null;
  return parsePolicyFile(match);
}

/** All policy slugs — used for generateStaticParams. */
export function getAllPolicySlugs(): string[] {
  if (!fs.existsSync(POLICIES_DIR)) return [];
  return fs
    .readdirSync(POLICIES_DIR)
    .filter((f) => /\.mdx?$/.test(f))
    .map((f) => f.replace(/\.mdx?$/, ''));
}

/** Format a YYYY-MM-DD date string to "March 16, 2026". */
export function formatPolicyDate(dateStr: string): string {
  const d = new Date(dateStr + 'T12:00:00');
  return d.toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' });
}
