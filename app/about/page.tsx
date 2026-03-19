import type { Metadata } from 'next';
import { MDXRemote } from 'next-mdx-remote/rsc';
import { getPageData, getPageMdxContent } from '@/lib/page-data';
import { brand } from '@/config/brand';
import AboutHero from '@/components/sections/about/AboutHero';
import TrustMetricsSection from '@/components/sections/about/TrustMetricsSection';
import MissionSection from '@/components/sections/about/MissionSection';
import ApproachSection from '@/components/sections/about/ApproachSection';
import RnSupervisionSection from '@/components/sections/about/RnSupervisionSection';
import W2ModelSection from '@/components/sections/about/W2ModelSection';
import HiringProcessSection from '@/components/sections/about/HiringProcessSection';
import LocalPresenceSection from '@/components/sections/about/LocalPresenceSection';
import AboutCTASection from '@/components/sections/about/AboutCTASection';
import Testimonials from '@/components/sections/Testimonials';

type Stat = { value: string; label: string };
type TrustMetric = { icon: string; title: string; desc: string };
type ApproachPillar = { icon: string; title: string; desc: string };
type RnStep = { icon: string; title: string; desc: string };
type HiringStep = { step: string; title: string; desc: string };
type HeroBadge = { icon: string; label: string; sublabel?: string };

type AboutPageData = {
  hero: {
    eyebrow: string;
    titleLight: string;
    titleBold: string;
    titleAccent: string;
    lead: string;
    badges: HeroBadge[];
    images: { hero: string; team: string };
    cta: { primary: { label: string; href: string }; secondary: { label: string; href: string } };
  };
  stats: Stat[];
  missionStats: Stat[];
  trustMetrics: TrustMetric[];
  mission: { blockquote: string; lead: string };
  approachPillars: ApproachPillar[];
  approach: { subtitle: string };
  rnSupervision: { subtitle: string; steps: RnStep[] };
  w2Model: { lead: string; benefits: string[]; complianceCard: { title: string; body1: string; body2: string } };
  hiringProcess: { subtitle: string; steps: HiringStep[] };
  localPresence: { lead: string };
  cta: { badge: string; title: string; lead: string; trustItems: string[] };
};

export async function generateMetadata(): Promise<Metadata> {
  const page = getPageData('about');
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

export default function AboutPage() {
  const data = getPageData('about') as unknown as AboutPageData;
  const mdx = getPageMdxContent('pages', 'about');
  if (!data || !mdx) return null;

  return (
    <MDXRemote
      source={mdx.content}
      components={{
        AboutHero: () => <AboutHero hero={data.hero} stats={data.stats} />,
        TrustMetrics: () => <TrustMetricsSection metrics={data.trustMetrics} />,
        Mission: () => <MissionSection mission={data.mission} missionStats={data.missionStats} teamImage={data.hero.images.team} />,
        Approach: () => <ApproachSection subtitle={data.approach.subtitle} pillars={data.approachPillars} />,
        RnSupervision: () => <RnSupervisionSection subtitle={data.rnSupervision.subtitle} steps={data.rnSupervision.steps} />,
        W2Model: () => <W2ModelSection lead={data.w2Model.lead} benefits={data.w2Model.benefits} complianceCard={data.w2Model.complianceCard} />,
        HiringProcess: () => <HiringProcessSection subtitle={data.hiringProcess.subtitle} steps={data.hiringProcess.steps} />,
        LocalPresence: () => <LocalPresenceSection lead={data.localPresence.lead} />,
        Testimonials,
        AboutCTA: () => <AboutCTASection cta={data.cta} />,
      }}
    />
  );
}
