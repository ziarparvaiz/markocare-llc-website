import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { MDXRemote } from 'next-mdx-remote/rsc';
import { ArrowLeft, ArrowRight, Calendar, Clock, User } from 'lucide-react';
import { brand } from '@/config/brand';
import {
  getAllBlogSlugs,
  getPostBySlug,
  getRelatedPosts,
  formatBlogDate,
} from '@/lib/blog';

type Params = { slug: string };

export async function generateStaticParams(): Promise<Params[]> {
  return getAllBlogSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Params }): Promise<Metadata> {
  const post = getPostBySlug(params.slug);
  if (!post) return {};

  return {
    title: `${post.title} | MarkoCare Resources`,
    description: post.description,
    authors: [{ name: post.author }],
    alternates: { canonical: `${brand.siteUrl}/resources/${post.slug}` },
    openGraph: {
      title: post.title,
      description: post.description,
      type: 'article',
      publishedTime: post.date,
      authors: [post.author],
      images: post.image
        ? [{ url: post.image, width: 1200, height: 630, alt: post.title }]
        : [{ url: '/og-image.jpg', width: 1200, height: 630, alt: post.title }],
    },
    robots: { index: true, follow: true },
  };
}

export default function ArticlePage({ params }: { params: Params }) {
  const post = getPostBySlug(params.slug);
  if (!post) notFound();

  const related = getRelatedPosts(post.slug, post.category, 3);

  // JSON-LD structured data
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: post.title,
    description: post.description,
    datePublished: post.date,
    author: { '@type': 'Organization', name: post.author },
    publisher: {
      '@type': 'Organization',
      name: 'MarkoCare',
      url: brand.siteUrl,
    },
    url: `${brand.siteUrl}/resources/${post.slug}`,
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* ── Hero ── */}
      <section className="bg-mc-forest text-white py-14 md:py-18 relative overflow-hidden">
        <div className="absolute -top-20 -right-20 w-72 h-72 rounded-full bg-white/[0.03] pointer-events-none" />

        <div className="container-pad max-w-3xl relative">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-sm text-white/50 mb-6">
            <Link href="/resources" className="hover:text-white/80 transition-colors">
              Resources
            </Link>
            <span>/</span>
            <span className="text-mc-leaf-300">{post.category}</span>
          </nav>

          {/* Back link + category badge */}
          <div className="flex items-center gap-4 mb-5">
            <Link
              href="/resources"
              className="inline-flex items-center gap-2 text-white/60 hover:text-white text-sm font-medium transition-colors"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to Resources
            </Link>

            <span className="badge-green inline-flex">{post.category}</span>
          </div>

          <h1 className="heading-display text-white text-3xl md:text-4xl lg:text-[2.6rem] leading-tight mb-5">
            {post.title}
          </h1>

          <p className="text-white/70 text-base md:text-lg leading-relaxed mb-6">
            {post.description}
          </p>

          {/* Meta row */}
          <div className="flex flex-wrap items-center gap-5 text-sm text-white/50">
            <span className="flex items-center gap-1.5">
              <User className="h-3.5 w-3.5 text-mc-leaf-400" />
              {post.author}
            </span>
            <span className="text-white/20">·</span>
            <span className="flex items-center gap-1.5">
              <Calendar className="h-3.5 w-3.5 text-mc-leaf-400" />
              {formatBlogDate(post.date)}
            </span>
            <span className="text-white/20">·</span>
            <span className="flex items-center gap-1.5">
              <Clock className="h-3.5 w-3.5 text-mc-leaf-400" />
              {post.readingTime}
            </span>
          </div>
        </div>
      </section>

      {/* ── Article Body ── */}
      <section className="section-pad bg-white">
        <div className="container-pad max-w-3xl">
          <div className="prose-care">
            <MDXRemote source={post.content} />
          </div>
        </div>
      </section>

      {/* ── Related Articles ── */}
      {related.length > 0 && (
        <section className="py-14 md:py-18 bg-mc-sage border-t border-mc-stone">
          <div className="container-pad">
            <p className="text-xs font-semibold text-mc-leaf-700 uppercase tracking-widest mb-2">
              Continue Reading
            </p>
            <h2 className="heading-display text-2xl md:text-3xl mb-8">
              More on {post.category}
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {related.map((article) => (
                <article key={article.slug} className="card-hover group flex flex-col h-full">
                  <span className="badge-green text-xs mb-3 self-start">{article.category}</span>
                  <h3 className="font-bold text-mc-forest text-base leading-snug mb-3 group-hover:text-mc-leaf-700 transition-colors flex-1">
                    {article.title}
                  </h3>
                  <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                    <span className="text-xs text-gray-400 flex items-center gap-1.5">
                      <Clock className="h-3 w-3" />
                      {article.readingTime}
                    </span>
                    <Link
                      href={`/resources/${article.slug}`}
                      className="text-sm font-semibold text-mc-leaf-600 flex items-center gap-1 group-hover:gap-2 transition-all hover:text-mc-leaf-700"
                    >
                      Read <ArrowRight className="h-3.5 w-3.5" />
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ── CTA ── */}
      <section className="py-16 md:py-20 bg-mc-forest text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-80 h-80 rounded-full bg-white/[0.03] -translate-y-1/2 translate-x-1/2 pointer-events-none" />

        <div className="container-pad max-w-2xl text-center relative">
          <span className="mc-badge-dark mb-5 inline-flex mx-auto">Talk to Our Team</span>
          <h2 className="heading-display text-white text-3xl md:text-4xl mb-5">
            Ready to Talk to a Care Expert?
          </h2>
          <p className="text-white/70 text-lg leading-relaxed mb-8">
            Our care coordinators are available to answer your questions and help your family explore
            options — at no cost and no obligation.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link href="/contact" className="btn-mc-white">
              Request Free Assessment
              <ArrowRight className="h-4 w-4" />
            </Link>
            <a href={`tel:${brand.phone}`} className="btn-outline-white">
              Call Us Now
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
