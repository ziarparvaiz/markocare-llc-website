import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, BookOpen, Calendar, Clock } from 'lucide-react';
import { brand } from '@/config/brand';
import CTABanner from '@/components/sections/CTABanner';
import BlogIndexClient from '@/components/blog/BlogIndexClient';
import { getAllPostsMeta, getFeaturedPost, formatBlogDate } from '@/lib/blog';

export const metadata: Metadata = {
  title: 'Home Care Resources for Maryland Families | MarkoCare',
  description:
    "Educational guides and resources from MarkoCare — helping Maryland families understand home care options, navigate hospital discharge, manage dementia care, and access local senior services.",
  keywords: [
    'home care resources Maryland families',
    'senior care guides Maryland',
    'Maryland home care education',
    'aging in place resources MD',
    'dementia care tips Maryland',
    'hospital discharge planning home care',
  ],
  alternates: { canonical: `${brand.siteUrl}/resources` },
  openGraph: {
    title: 'Home Care Guides & Resources | MarkoCare',
    description:
      'Educational articles and guides to help Maryland families make confident decisions about home care. From the team at MarkoCare.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'MarkoCare home care educational resources for Maryland families',
      },
    ],
  },
  robots: { index: true, follow: true },
};

export default function ResourcesPage() {
  const allPosts = getAllPostsMeta();
  const featured = getFeaturedPost();
  const gridPosts = allPosts.filter((p) => p.slug !== featured?.slug);
  const totalCategories = new Set(allPosts.map((p) => p.category)).size;

  return (
    <>
      {/* ── Hero ── */}
      <section className="bg-mc-forest text-white py-16 md:py-20">
        <div className="container-pad max-w-4xl">
          <span className="mc-badge-dark mb-5 inline-flex">Resources</span>
          <h1 className="heading-display text-white text-4xl md:text-5xl mb-5">
            Home Care Guides & Resources
          </h1>
          <p className="text-lg text-white/75 leading-relaxed max-w-2xl">
            MarkoCare publishes educational guides to help Maryland families understand their care
            options, make informed decisions, and feel confident at every step of the journey.
          </p>

          {/* Stats strip */}
          <div className="mt-8 flex flex-wrap gap-6">
            <div className="flex items-center gap-2 text-white/60 text-sm">
              <BookOpen className="h-4 w-4 text-mc-leaf-400" />
              <span>{allPosts.length} Guides</span>
            </div>
            <span className="text-white/20">·</span>
            <div className="flex items-center gap-2 text-white/60 text-sm">
              <span>{totalCategories} Topics</span>
            </div>
            <span className="text-white/20">·</span>
            <div className="flex items-center gap-2 text-white/60 text-sm">
              <span>Free to Read</span>
            </div>
          </div>
        </div>
      </section>

      <section className="section-pad bg-white">
        <div className="container-pad">

          {/* ── Featured Article ── */}
          {featured && (
            <div className="mb-16">
              <p className="text-xs font-semibold text-mc-leaf-700 uppercase tracking-widest mb-4">
                Featured Guide
              </p>
              <div className="rounded-2xl border border-mc-stone overflow-hidden grid grid-cols-1 lg:grid-cols-2 group hover:shadow-md transition-shadow">
                {/* Visual panel */}
                <div className="h-56 lg:h-auto bg-gradient-to-br from-mc-forest via-mc-forest to-mc-leaf-700 relative flex items-end p-8 min-h-[14rem]">
                  <div className="absolute inset-0 opacity-10">
                    <div className="absolute top-6 left-6 w-24 h-24 rounded-full border border-white" />
                    <div className="absolute bottom-8 right-8 w-40 h-40 rounded-full border border-white" />
                    <div className="absolute top-1/2 left-1/3 w-16 h-16 rounded-full border border-white" />
                  </div>
                  <span className="relative text-white/30 font-serif text-7xl font-bold leading-none select-none">
                    MC
                  </span>
                </div>

                {/* Content panel */}
                <div className="p-8 md:p-10 flex flex-col justify-center">
                  <span className="badge-green text-xs mb-4 self-start">{featured.category}</span>
                  <h2 className="heading-display text-2xl md:text-3xl mb-4 group-hover:text-mc-leaf-700 transition-colors">
                    {featured.title}
                  </h2>
                  <p className="text-gray-600 leading-relaxed mb-6 text-sm md:text-base">
                    {featured.description}
                  </p>
                  <div className="flex items-center gap-4 text-xs text-gray-400 mb-6">
                    <span className="flex items-center gap-1.5">
                      <Calendar className="h-3.5 w-3.5" />
                      {formatBlogDate(featured.date)}
                    </span>
                    <span>·</span>
                    <span className="flex items-center gap-1.5">
                      <Clock className="h-3.5 w-3.5" />
                      {featured.readingTime}
                    </span>
                  </div>
                  <Link
                    href={`/resources/${featured.slug}`}
                    className="btn-mc-primary self-start"
                  >
                    Read Article
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>
            </div>
          )}

          {/* ── All Articles: filter + grid ── */}
          <div>
            <p className="text-xs font-semibold text-mc-leaf-700 uppercase tracking-widest mb-6">
              All Guides
            </p>
            <BlogIndexClient posts={allPosts} />
          </div>

        </div>
      </section>

      <CTABanner
        title="Ready to Talk to a Care Expert?"
        subtitle="Our care coordinators are available to answer your questions, discuss your family's situation, and help you explore your options — at no cost."
      />
    </>
  );
}
