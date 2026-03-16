import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { MDXRemote } from 'next-mdx-remote/rsc';
import {
  ArrowLeft,
  ArrowRight,
  Briefcase,
  MapPin,
  CheckCircle,
  Shield,
  Award,
} from 'lucide-react';
import { brand } from '@/config/brand';
import { getAllCareerSlugs, getCareerBySlug } from '@/lib/careers';

type Params = { slug: string };

export async function generateStaticParams(): Promise<Params[]> {
  return getAllCareerSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Params;
}): Promise<Metadata> {
  const post = getCareerBySlug(params.slug);
  if (!post) return {};
  return {
    title: `${post.title} | MarkoCare Careers`,
    description: post.summary,
    alternates: { canonical: `${brand.siteUrl}/careers/${post.slug}` },
    robots: { index: true, follow: true },
  };
}

export default function CareerSlugPage({ params }: { params: Params }) {
  const post = getCareerBySlug(params.slug);
  if (!post) notFound();

  return (
    <>
      {/* ── Hero ── */}
      <section className="bg-mc-forest text-white py-16 md:py-20 relative overflow-hidden">
        <div className="absolute -top-20 -right-20 w-72 h-72 rounded-full bg-white/[0.03] pointer-events-none" />

        <div className="container-pad relative">
          <Link
            href="/careers"
            className="inline-flex items-center gap-2 text-white/60 hover:text-white text-sm font-medium transition-colors mb-6"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Careers
          </Link>

          <div className="flex flex-wrap items-center gap-2 mb-3">
            <span className="mc-badge-dark">
              <Briefcase className="h-3 w-3" />
              {post.employmentType}
            </span>
          </div>

          <h1 className="heading-display text-white text-3xl md:text-4xl lg:text-5xl mb-4 max-w-2xl">
            {post.title}
          </h1>

          <div className="flex flex-wrap items-center gap-4 text-white/60 text-sm">
            <span className="flex items-center gap-1.5">
              <MapPin className="h-4 w-4 text-mc-leaf-400" />
              {post.location}
            </span>
            <span className="text-white/30">·</span>
            <span>{post.counties}</span>
          </div>
        </div>
      </section>

      {/* ── Body: MDX content (single column, centred) ── */}
      <section className="section-pad bg-white">
        <div className="container-pad max-w-3xl">

          {/* Requirements preview */}
          <div className="mc-card mb-8 text-center">
            <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-4">
              Key Requirements
            </p>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-left">
              {post.requirements.map((req) => (
                <li key={req} className="flex items-start gap-2 text-sm text-gray-700">
                  <CheckCircle className="h-4 w-4 text-mc-leaf-500 shrink-0 mt-0.5" />
                  {req}
                </li>
              ))}
            </ul>
          </div>

          {/* MDX body */}
          <div className="prose-care">
            <MDXRemote source={post.content} />
          </div>

          {/* Compliance notices */}
          <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="rounded-2xl border border-amber-200 bg-amber-50 p-4">
              <Shield className="h-4 w-4 text-amber-600 mb-2" />
              <h3 className="font-semibold text-amber-800 mb-1 text-xs">
                Background Check Required
              </h3>
              <p className="text-xs text-amber-700 leading-relaxed">
                All candidates are subject to a comprehensive state and federal criminal
                background check, sex offender registry check, and OIG exclusion list
                review as a condition of employment.
              </p>
            </div>
            <div className="rounded-2xl border border-mc-stone bg-mc-sage p-4">
              <Award className="h-4 w-4 text-mc-leaf-500 mb-2" />
              <h3 className="font-semibold text-mc-forest mb-1 text-xs">
                Equal Opportunity Employer
              </h3>
              <p className="text-xs text-gray-600 leading-relaxed">
                MarkoCare is an Equal Opportunity Employer (EOE) and does not discriminate
                on the basis of race, color, religion, sex, national origin, age, disability,
                or any other protected characteristic.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* ── Application CTA ── */}
      <section className="section-pad bg-mc-forest text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-80 h-80 rounded-full bg-white/[0.03] -translate-y-1/2 translate-x-1/2 pointer-events-none" />

        <div className="container-pad max-w-2xl text-center relative">
          <span className="mc-badge-dark mb-5 inline-flex mx-auto">Ready to Join Us?</span>
          <h2 className="heading-display text-white text-3xl md:text-4xl mb-5">
            Start Your Application Today
          </h2>
          <p className="text-white/75 text-lg leading-relaxed mb-8">
            Interested in this role? Our HR team reviews every application and responds
            within 2 business days. We would love to hear from you.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link href="/careers/apply" className="btn-mc-white">
              Submit Application
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link href="/careers" className="btn-outline-white">
              View All Positions
            </Link>
          </div>
          <p className="mt-6 text-white/50 text-sm">
            Questions? Email us at{' '}
            <a
              href={`mailto:${brand.email}`}
              className="text-white/75 underline underline-offset-2 hover:text-white transition-colors"
            >
              {brand.email}
            </a>
          </p>
        </div>
      </section>
    </>
  );
}
