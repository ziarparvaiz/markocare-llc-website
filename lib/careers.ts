import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const CAREERS_DIR = path.join(process.cwd(), 'data', 'careers');

export type CareerFrontmatter = {
  title: string;
  slug: string;
  employmentType: string;
  location: string;
  summary: string;
  counties: string;
  /** Matches the position enum in caregiverSchema: caregiver | cna | rn | lpn | companion */
  positionValue: string;
  requirements: string[];
  order?: number;
};

export type CareerPost = CareerFrontmatter & {
  content: string;
};

function parseCareerFile(filename: string): CareerPost {
  const filePath = path.join(CAREERS_DIR, filename);
  const raw = fs.readFileSync(filePath, 'utf-8');
  const { data, content } = matter(raw);

  return {
    title: data.title ?? '',
    slug: data.slug ?? filename.replace(/\.mdx?$/, ''),
    employmentType: data.employmentType ?? '',
    location: data.location ?? '',
    summary: data.summary ?? '',
    counties: data.counties ?? '',
    positionValue: data.positionValue ?? '',
    requirements: Array.isArray(data.requirements) ? data.requirements : [],
    order: data.order,
    content,
  };
}

/** Returns all career posts sorted by the `order` frontmatter field. */
export function getAllCareers(): CareerPost[] {
  const files = fs.readdirSync(CAREERS_DIR).filter((f) => /\.mdx?$/.test(f));
  return files
    .map(parseCareerFile)
    .sort((a, b) => (a.order ?? 99) - (b.order ?? 99));
}

/** Returns a single career post by slug, or null if not found. */
export function getCareerBySlug(slug: string): CareerPost | null {
  const files = fs.readdirSync(CAREERS_DIR).filter((f) => /\.mdx?$/.test(f));
  const match = files.find((f) => {
    const name = f.replace(/\.mdx?$/, '');
    return name === slug;
  });
  if (!match) return null;
  return parseCareerFile(match);
}

/** Returns all slugs — used for generateStaticParams. */
export function getAllCareerSlugs(): string[] {
  return fs
    .readdirSync(CAREERS_DIR)
    .filter((f) => /\.mdx?$/.test(f))
    .map((f) => f.replace(/\.mdx?$/, ''));
}
