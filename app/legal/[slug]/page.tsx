import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { MDXRemote } from 'next-mdx-remote/rsc';
import { Calendar } from 'lucide-react';
import { brand } from '@/config/brand';
import {
  getAllPolicySlugs,
  getPolicyBySlug,
  formatPolicyDate,
} from '@/lib/policies';

type Params = { slug: string };

export async function generateStaticParams(): Promise<Params[]> {
  return getAllPolicySlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Params }): Promise<Metadata> {
  const policy = getPolicyBySlug(params.slug);
  if (!policy) return {};

  return {
    title: policy.seoTitle,
    description: policy.seoDescription,
    alternates: { canonical: `${brand.siteUrl}/legal/${policy.slug}` },
    openGraph: {
      title: policy.seoTitle,
      description: policy.seoDescription,
      type: 'website',
    },
    robots: { index: false, follow: false },
  };
}

export default function PolicyPage({ params }: { params: Params }) {
  const policy = getPolicyBySlug(params.slug);
  if (!policy) notFound();

  return (
    <>
      {/* ── Hero ── */}
      <section className="bg-mc-forest text-white py-12">
        <div className="container-pad max-w-3xl">
          <h1 className="text-4xl font-bold leading-tight mb-3">{policy.title}</h1>

          {policy.description && (
            <p className="text-white/70 text-base leading-relaxed mt-2 max-w-2xl">
              {policy.description}
            </p>
          )}

          {policy.lastUpdated && (
            <p className="flex items-center gap-1.5 text-white/50 text-sm mt-4">
              <Calendar className="h-3.5 w-3.5" />
              Last Updated: {formatPolicyDate(policy.lastUpdated)}
            </p>
          )}
        </div>
      </section>

      {/* ── Body ── */}
      <section className="section-pad bg-white">
        <div className="container-pad max-w-4xl">
          <div className="prose-care max-w-none">
            <MDXRemote source={policy.content} />
          </div>
        </div>
      </section>
    </>
  );
}
