import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import {
  Heart, Users, Brain, RefreshCw, Hospital, Ribbon, Activity,
  type LucideIcon,
} from 'lucide-react';
import { brand } from '@/config/brand';
import { MDXRemote } from 'next-mdx-remote/rsc';
import {
  getServicePageData,
  getPageMdxContent,
  getAllServiceSlugs,
} from '@/lib/page-data';
import ServiceHero from '@/components/sections/service/ServiceHero';
import ServiceContentLayout from '@/components/sections/service/ServiceContentLayout';
import ServiceIncluded from '@/components/sections/service/ServiceIncluded';
import ServiceWhoIsItFor from '@/components/sections/service/ServiceWhoIsItFor';
import ServiceHowCareWorks from '@/components/sections/service/ServiceHowCareWorks';
import ServiceSafety from '@/components/sections/service/ServiceSafety';
import ServiceFAQs from '@/components/sections/service/ServiceFAQs';
import ServiceRelatedServices from '@/components/sections/service/ServiceRelatedServices';
import ServiceWhyChooseUs from '@/components/sections/service/ServiceWhyChooseUs';
import ServiceAreaLinks from '@/components/sections/service/ServiceAreaLinks';
import ServiceCTASection from '@/components/sections/service/ServiceCTASection';
import Testimonials from '@/components/sections/Testimonials';
import AssessmentForm from '@/components/forms/AssessmentForm';

const ICON_MAP: Record<string, LucideIcon> = {
  Heart, Users, Brain, RefreshCw, Hospital, Ribbon, Activity,
};

export function generateStaticParams() {
  return getAllServiceSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const data = getServicePageData(params.slug);
  if (!data) return {};
  return {
    title: data.seo.title,
    description: data.seo.description,
    alternates: { canonical: `${brand.siteUrl}${data.seo.canonical}` },
    openGraph: {
      title: data.seo.ogTitle,
      description: data.seo.ogDescription,
      images: [{ url: '/og-image.jpg', width: 1200, height: 630, alt: data.seo.ogImageAlt }],
    },
    robots: { index: true, follow: true },
  };
}

export default function ServicePage({ params }: { params: { slug: string } }) {
  const data = getServicePageData(params.slug);
  if (!data) notFound();

  const mdx = getPageMdxContent('services', params.slug);
  if (!mdx) notFound();

  const Icon = ICON_MAP[data.icon] ?? Heart;

  return (
    <>
      <MDXRemote
        source={mdx.content}
        components={{
          ServiceHero: () => <ServiceHero name={data.name} tagline={data.hero.tagline} heroDesc={data.hero.description} icon={Icon} />,
          ServiceContentLayout: ({ children }: { children: React.ReactNode }) => (
            <ServiceContentLayout serviceName={data.name}>{children}</ServiceContentLayout>
          ),
          ServiceIncluded: () => <ServiceIncluded included={data.included} />,
          ServiceWhoIsItFor: () => <ServiceWhoIsItFor whoIsItFor={data.whoIsItFor} />,
          ServiceHowCareWorks,
          ServiceSafety: () => <ServiceSafety safety={data.safety} serviceName={data.name} />,
          ServiceFAQs: () => <ServiceFAQs faqs={data.faqs} />,
          ServiceRelatedServices: () => <ServiceRelatedServices services={data.relatedServices} />,
          ServiceWhyChooseUs,
          ServiceAreaLinks: () => <ServiceAreaLinks serviceName={data.name} />,
          Testimonials,
          ServiceCTA: () => <ServiceCTASection serviceName={data.name} />,
        }}
      />
      <section id="request-assessment" className="py-16 md:py-24 bg-white">
        <div className="container-pad max-w-2xl mx-auto">
          <AssessmentForm />
        </div>
      </section>
    </>
  );
}
