import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, Calendar, Tag } from 'lucide-react';
import { brand } from '@/config/brand';
import CTABanner from '@/components/sections/CTABanner';
import SectionHeader from '@/components/ui/SectionHeader';

export const metadata: Metadata = {
  title: 'Home Care Resources & Blog | MarkoCare Maryland',
  description:
    'Home care guides, tips, and resources for Maryland families. Learn about senior care, post-hospital recovery, dementia care, and more from MarkoCare.',
  alternates: { canonical: `${brand.siteUrl}/resources` },
};

const articles = [
  {
    slug: 'signs-its-time-for-home-care',
    title: '7 Signs It May Be Time to Consider Home Care for Your Parent',
    excerpt:
      'Recognizing when an aging parent needs professional help is one of the hardest calls a family makes. Here are seven meaningful indicators — physical, cognitive, and behavioral — that home care may be the right next step.',
    category: 'Family Guidance',
    date: 'January 2025',
    readTime: '5 min read',
  },
  {
    slug: 'post-hospital-discharge-planning',
    title: 'How to Plan a Safe Hospital Discharge to Home Care in Maryland',
    excerpt:
      'The transition from hospital to home is one of the most vulnerable moments in recovery. This guide walks families through the key steps of discharge planning, what to ask before leaving, and how a home care agency helps close dangerous care gaps.',
    category: 'Post-Hospital Care',
    date: 'January 2025',
    readTime: '7 min read',
  },
  {
    slug: 'dementia-home-care-tips',
    title: 'Dementia Home Care: Practical Tips for Maryland Families',
    excerpt:
      'Caring for a loved one with Alzheimer\'s or dementia at home is challenging and deeply emotional. These evidence-informed strategies help families provide safer, more compassionate daily care — and know when professional support is needed.',
    category: 'Dementia Care',
    date: 'February 2025',
    readTime: '6 min read',
  },
  {
    slug: 'understanding-rsa-maryland',
    title: 'Understanding Maryland\'s Residential Service Agency (RSA) Model',
    excerpt:
      'What is a Residential Service Agency, and why does RSA licensure matter when choosing a home care provider in Maryland? A clear, plain-language guide to what families should look for and why it matters.',
    category: 'Maryland Regulations',
    date: 'February 2025',
    readTime: '4 min read',
  },
  {
    slug: 'caregiver-burnout-prevention',
    title: 'Caregiver Burnout: How to Recognize It and Find Relief',
    excerpt:
      'Family caregivers are among the most vulnerable to burnout — and it affects not just the caregiver but the quality of care their loved one receives. This guide covers warning signs, prevention strategies, and how respite care provides critical relief.',
    category: 'Caregiver Support',
    date: 'February 2025',
    readTime: '5 min read',
  },
  {
    slug: 'howard-county-senior-resources',
    title: 'Top Senior Care Resources in Howard County, Maryland',
    excerpt:
      'A comprehensive guide to senior care resources available in Howard County — from the Office on Aging and Independence to local senior centers, transportation programs, Medicaid waiver options, and home care.',
    category: 'Howard County',
    date: 'March 2025',
    readTime: '6 min read',
  },
  {
    slug: 'paying-for-home-care',
    title: 'Paying for Home Care: A Guide to Your Options in Maryland',
    excerpt:
      'From long-term care insurance to Medicaid waiver programs and veterans benefits, this guide explains the financial resources available to Maryland families — so cost is never the only reason a loved one goes without support.',
    category: 'Financial Guidance',
    date: 'March 2025',
    readTime: '6 min read',
  },
  {
    slug: 'talking-to-doctor-about-home-care',
    title: 'How to Talk to Your Loved One\'s Doctor About Home Care Needs',
    excerpt:
      'Many families hesitate to raise home care concerns with a physician. This guide offers practical tips for having an honest, productive conversation that results in better care coordination and a clearer path forward.',
    category: 'Family Guidance',
    date: 'March 2025',
    readTime: '4 min read',
  },
];

export default function ResourcesPage() {
  return (
    <>
      <section className="bg-mc-forest text-white py-16 md:py-20">
        <div className="container-pad max-w-3xl">
          <span className="badge-green mb-4 inline-flex">Resources</span>
          <h1 className="text-4xl md:text-5xl font-bold mb-5">
            Home Care Guides & Resources
          </h1>
          <p className="text-lg text-white/80 leading-relaxed">
            Caring for a loved one or navigating a health transition is complex. MarkoCare is
            committed to supporting families not just through our care services, but with the
            knowledge and tools you need to make confident, informed decisions.
          </p>
        </div>
      </section>

      <section className="section-pad bg-white">
        <div className="container-pad">
          <SectionHeader
            badge="Educational Articles"
            title="Resources for Families and Caregivers"
            subtitle="Practical knowledge, trusted tools, and local connections to help you navigate the journey ahead — from understanding care options to managing the financial side of home care."
          />

          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {articles.map((article) => (
              <div key={article.slug} className="card-hover group flex flex-col">
                <div className="flex items-center gap-3 mb-3">
                  <span className="badge-green text-xs">{article.category}</span>
                </div>
                <h2 className="font-bold text-brand-navy-800 mb-3 group-hover:text-brand-green-700 transition-colors leading-snug">
                  {article.title}
                </h2>
                <p className="text-sm text-gray-600 leading-relaxed flex-1 mb-4">
                  {article.excerpt}
                </p>
                <div className="flex items-center justify-between text-xs text-gray-400 border-t border-gray-100 pt-4">
                  <div className="flex items-center gap-1.5">
                    <Calendar className="h-3.5 w-3.5" />
                    {article.date}
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Tag className="h-3.5 w-3.5" />
                    {article.readTime}
                  </div>
                </div>
                {/* TODO: Link to individual blog post pages when content is ready */}
                <div className="mt-3 flex items-center gap-1 text-sm font-semibold text-brand-green-600 group-hover:gap-2 transition-all">
                  Read Article <ArrowRight className="h-4 w-4" />
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 rounded-3xl bg-brand-navy-50 border border-brand-navy-100 p-8 text-center max-w-2xl mx-auto">
            <h3 className="text-xl font-bold text-brand-navy-800 mb-3">
              Have a Topic You&apos;d Like Us to Cover?
            </h3>
            <p className="text-gray-600 text-sm mb-5">
              Email us your question or topic suggestion and we&apos;ll add it to our resource library.
            </p>
            <a href="mailto:hello@markocare.com" className="btn-outline">
              Suggest a Topic
            </a>
          </div>
        </div>
      </section>

      <CTABanner title="Ready to Talk to a Care Expert?" subtitle="Our care coordinators are available to answer your questions and help you explore your options." />
    </>
  );
}
