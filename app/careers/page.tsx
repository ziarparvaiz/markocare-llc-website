import type { Metadata } from 'next';
import { MDXRemote } from 'next-mdx-remote/rsc';
import { getPageData, getPageMdxContent } from '@/lib/page-data';
import { getAllCareers } from '@/lib/careers';
import { brand } from '@/config/brand';
import CareersHero from '@/components/sections/careers/CareersHero';
import CareersBenefits from '@/components/sections/careers/CareersBenefits';
import CareersOpenPositions from '@/components/sections/careers/CareersOpenPositions';
import CareersHiringProcess from '@/components/sections/careers/CareersHiringProcess';
import CareersComplianceStrip from '@/components/sections/careers/CareersComplianceStrip';
import CareersCTASection from '@/components/sections/careers/CareersCTASection';

type Benefit = { icon: string; title: string; desc: string };
type HiringStep = { icon: string; step: string; title: string; desc: string };
type ComplianceCard = { variant: 'warning' | 'neutral'; icon: string; title: string; desc: string };

type CareersPageData = {
  hero: { badge: string; title: string; description: string };
  benefits: Benefit[];
  hiringSteps: HiringStep[];
  complianceCards: ComplianceCard[];
  cta: { badge: string; title: string; lead: string };
};

export async function generateMetadata(): Promise<Metadata> {
  const page = getPageData('careers');
  if (!page) return {};
  const seo = page.seo as { title: string; description: string; canonical: string; ogTitle: string; ogDescription: string; ogImageAlt: string; keywords?: string[] };
  return {
    title: seo.title,
    description: seo.description,
    keywords: seo.keywords,
    alternates: { canonical: `${brand.siteUrl}${seo.canonical}` },
    openGraph: {
      title: seo.ogTitle,
      description: seo.ogDescription,
      images: [{ url: '/og-image.jpg', width: 1200, height: 630, alt: seo.ogImageAlt }],
    },
    robots: { index: true, follow: true },
  };
}

export default function CareersPage() {
  const data = getPageData('careers') as unknown as CareersPageData;
  const mdx = getPageMdxContent('pages', 'careers');
  const openPositions = getAllCareers();
  if (!data || !mdx) return null;

  return (
    <MDXRemote
      source={mdx.content}
      components={{
        CareersHero: () => <CareersHero badge={data.hero.badge} title={data.hero.title} description={data.hero.description} />,
        CareersBenefits: () => <CareersBenefits benefits={data.benefits} />,
        CareersOpenPositions: () => <CareersOpenPositions positions={openPositions} />,
        CareersHiringProcess: () => <CareersHiringProcess steps={data.hiringSteps} />,
        CareersCompliance: () => <CareersComplianceStrip cards={data.complianceCards} />,
        CareersCTA: () => <CareersCTASection badge={data.cta.badge} title={data.cta.title} lead={data.cta.lead} />,
      }}
    />
  );
}
