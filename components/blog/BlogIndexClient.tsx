'use client';

import { useState } from 'react';
import Link from 'next/link';
import { ArrowRight, Calendar, Clock } from 'lucide-react';
import type { BlogPostMeta } from '@/lib/blog';

type Props = {
  posts: BlogPostMeta[];
};

export default function BlogIndexClient({ posts }: Props) {
  const categories = ['All', ...Array.from(new Set(posts.map((p) => p.category)))];
  const [active, setActive] = useState('All');

  const filtered = active === 'All' ? posts : posts.filter((p) => p.category === active);

  return (
    <>
      {/* ── Category Filter ── */}
      <div className="flex flex-wrap gap-2 mb-10">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActive(cat)}
            className={
              active === cat
                ? 'px-4 py-2 rounded-full text-sm font-semibold bg-mc-forest text-white transition-colors'
                : 'px-4 py-2 rounded-full text-sm font-medium bg-white border border-mc-stone text-gray-600 hover:border-mc-forest hover:text-mc-forest transition-colors'
            }
          >
            {cat}
          </button>
        ))}
      </div>

      {/* ── Article Grid ── */}
      {filtered.length === 0 ? (
        <p className="text-gray-500 text-sm text-center py-12">No articles found in this category.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((article) => (
            <article key={article.slug} className="card-hover group flex flex-col h-full">
              <div className="flex items-center justify-between mb-3">
                <span className="badge-green text-xs">{article.category}</span>
                <span className="text-xs text-gray-400 flex items-center gap-1">
                  <Clock className="h-3 w-3" />
                  {article.readingTime}
                </span>
              </div>
              <h3 className="font-bold text-mc-forest text-base leading-snug mb-3 group-hover:text-mc-leaf-700 transition-colors">
                {article.title}
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed flex-1 mb-4 line-clamp-3">
                {article.description}
              </p>
              <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                <span className="text-xs text-gray-400 flex items-center gap-1.5">
                  <Calendar className="h-3 w-3" />
                  {new Date(article.date + 'T12:00:00').toLocaleDateString('en-US', {
                    month: 'long',
                    year: 'numeric',
                  })}
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
      )}

      {/* ── Suggest a Topic ── */}
      <div className="mt-16 rounded-3xl bg-mc-sage border border-mc-stone p-8 md:p-10 text-center max-w-2xl mx-auto">
        <span className="text-xs font-semibold text-mc-leaf-700 uppercase tracking-wider">Community</span>
        <h3 className="text-xl font-bold text-mc-forest mt-2 mb-3">
          Have a Topic You&apos;d Like Us to Cover?
        </h3>
        <p className="text-gray-600 text-sm leading-relaxed mb-6">
          Our team writes these guides based on the questions real Maryland families ask us. If there
          is a topic you want us to address, send us a note — we read every suggestion.
        </p>
        <a
          href="mailto:hello@markocare.com?subject=Resource Topic Suggestion"
          className="btn-mc-primary inline-flex"
        >
          Suggest a Topic
          <ArrowRight className="h-4 w-4" />
        </a>
      </div>
    </>
  );
}
