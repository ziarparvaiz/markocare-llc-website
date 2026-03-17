import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const BLOG_DIR = path.join(process.cwd(), 'data', 'blog');

export type BlogFrontmatter = {
  title: string;
  description: string;
  date: string;
  category: string;
  author: string;
  readingTime: string;
  featured: boolean;
  image?: string;
  slug: string;
};

export type BlogPost = BlogFrontmatter & {
  content: string;
};

/** Frontmatter only — no MDX content. Safe to pass to Client Components. */
export type BlogPostMeta = Omit<BlogPost, 'content'>;

function parseBlogFile(filename: string): BlogPost {
  const filePath = path.join(BLOG_DIR, filename);
  const raw = fs.readFileSync(filePath, 'utf-8');
  const { data, content } = matter(raw);

  return {
    title: data.title ?? '',
    description: data.description ?? '',
    date: data.date ?? '',
    category: data.category ?? '',
    author: data.author ?? 'MarkoCare Team',
    readingTime: data.readingTime ?? '5 min read',
    featured: data.featured ?? false,
    image: data.image,
    slug: data.slug ?? filename.replace(/\.mdx?$/, ''),
    content,
  };
}

/** Returns all posts sorted newest-first. */
export function getAllPosts(): BlogPost[] {
  if (!fs.existsSync(BLOG_DIR)) return [];
  const files = fs.readdirSync(BLOG_DIR).filter((f) => /\.mdx?$/.test(f));
  return files
    .map(parseBlogFile)
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

/** Returns all post metadata (no MDX content) — for index pages. */
export function getAllPostsMeta(): BlogPostMeta[] {
  return getAllPosts().map(({ content: _content, ...meta }) => meta);
}

/** Returns a single post by slug, or null. */
export function getPostBySlug(slug: string): BlogPost | null {
  if (!fs.existsSync(BLOG_DIR)) return null;
  const files = fs.readdirSync(BLOG_DIR).filter((f) => /\.mdx?$/.test(f));
  const match = files.find((f) => f.replace(/\.mdx?$/, '') === slug);
  if (!match) return null;
  return parseBlogFile(match);
}

/** All slugs — used for generateStaticParams. */
export function getAllBlogSlugs(): string[] {
  if (!fs.existsSync(BLOG_DIR)) return [];
  return fs
    .readdirSync(BLOG_DIR)
    .filter((f) => /\.mdx?$/.test(f))
    .map((f) => f.replace(/\.mdx?$/, ''));
}

/** The featured post, or the most recent post as a fallback. */
export function getFeaturedPost(): BlogPostMeta | null {
  const posts = getAllPostsMeta();
  return posts.find((p) => p.featured) ?? posts[0] ?? null;
}

/** Related posts in the same category, excluding the current post. */
export function getRelatedPosts(slug: string, category: string, limit = 3): BlogPostMeta[] {
  return getAllPostsMeta()
    .filter((p) => p.slug !== slug && p.category === category)
    .slice(0, limit);
}

/** Format a YYYY-MM-DD date string to "January 2025". */
export function formatBlogDate(dateStr: string): string {
  const d = new Date(dateStr + 'T12:00:00');
  return d.toLocaleDateString('en-US', { month: 'long', year: 'numeric' });
}
