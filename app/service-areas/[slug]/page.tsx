import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { brand } from '@/config/brand';
import { MDXRemote } from 'next-mdx-remote/rsc';
import {
  getServiceAreaData,
  getPageMdxContent,
  getAllServiceAreaSlugs,
} from '@/lib/page-data';
import ServiceAreaHero from '@/components/sections/service-area/ServiceAreaHero';
import ServiceAreaCitiesServices from '@/components/sections/service-area/ServiceAreaCitiesServices';
import ServiceAreaAssessment from '@/components/sections/service-area/ServiceAreaAssessment';
import ServiceAreaNearby from '@/components/sections/service-area/ServiceAreaNearby';
import Testimonials from '@/components/sections/Testimonials';
import CTABanner from '@/components/sections/CTABanner';

export function generateStaticParams() {
  return getAllServiceAreaSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const data = getServiceAreaData(params.slug);
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

export default function ServiceAreaPage({ params }: { params: { slug: string } }) {
  const data = getServiceAreaData(params.slug);
  if (!data) notFound();

  const mdx = getPageMdxContent('service-areas', params.slug);
  if (!mdx) notFound();

  return (
    <MDXRemote
      source={mdx.content}
      components={{
        ServiceAreaHero: () => <ServiceAreaHero county={data.county} hero={data.hero} />,
        ServiceAreaCitiesServices: () => (
          <ServiceAreaCitiesServices county={data.county} cities={data.cities} localNote={data.localNote} />
        ),
        ServiceAreaAssessment: () => <ServiceAreaAssessment county={data.county} />,
        ServiceAreaNearby: () => <ServiceAreaNearby nearbyAreas={data.nearbyAreas} />,
        Testimonials,
        CTABannerSection: () => (
          <CTABanner
            title={`Quality Home Care in ${data.county}`}
            subtitle={`MarkoCare delivers professional, RN-supervised home care to families across ${data.county}, Maryland.`}
            variant="green"
          />
        ),
      }}
    />
  );
}
