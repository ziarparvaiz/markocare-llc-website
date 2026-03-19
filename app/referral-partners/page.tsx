import type { Metadata } from 'next';
import { MDXRemote } from 'next-mdx-remote/rsc';
import { getPageData, getPageMdxContent } from '@/lib/page-data';
import { brand } from '@/config/brand';
import ReferralHero from '@/components/sections/referral/ReferralHero';
import ReferralAdvantages from '@/components/sections/referral/ReferralAdvantages';
import ReferralProgramsIntake from '@/components/sections/referral/ReferralProgramsIntake';
import ReferralFormSection from '@/components/sections/referral/ReferralFormSection';
import ClinicalReliabilitySection from '@/components/sections/referral/ClinicalReliabilitySection';
import ReferralFAQSection from '@/components/sections/referral/ReferralFAQSection';
import ReferralCTASection from '@/components/sections/referral/ReferralCTASection';

type HeroBadge = { icon: string; label: string };
type HeroStat = { label: string; value: string };
type AdvantageCard = { icon: string; title: string; desc: string };
type IntakeStep = { step: string; title: string; desc: string };
type TrustIndicator = { icon: string; label: string };
type ReliabilityCard = { icon: string; title: string; desc: string };
type ComplianceBadge = { icon: string; label: string };
type Faq = { q: string; a: string };

type ReferralPartnersPageData = {
  hero: {
    eyebrow: string; title: string; description: string;
    stats: HeroStat[]; badges: HeroBadge[]; primaryCta: string; secondaryCta: string;
  };
  advantages: AdvantageCard[];
  supportedPrograms: string[];
  intakeSteps: IntakeStep[];
  trustIndicators: TrustIndicator[];
  urgentBox: { title: string; desc: string; note: string };
  reliabilityCards: ReliabilityCard[];
  clinicalReliability: { subtitle: string };
  complianceStrip: ComplianceBadge[];
  faqs: Faq[];
  cta: { eyebrow: string; title: string; lead: string; primaryCta: string; secondaryCta: string; trustStrip: string[] };
};

export async function generateMetadata(): Promise<Metadata> {
  const page = getPageData('referral-partners');
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

export default function ReferralPartnersPage() {
  const data = getPageData('referral-partners') as unknown as ReferralPartnersPageData;
  const mdx = getPageMdxContent('pages', 'referral-partners');
  if (!data || !mdx) return null;

  return (
    <MDXRemote
      source={mdx.content}
      components={{
        ReferralHero: () => <ReferralHero hero={data.hero} />,
        ReferralAdvantages: () => <ReferralAdvantages advantages={data.advantages} />,
        ReferralProgramsIntake: () => <ReferralProgramsIntake supportedPrograms={data.supportedPrograms} intakeSteps={data.intakeSteps} />,
        ReferralForm: () => <ReferralFormSection trustIndicators={data.trustIndicators} urgentBox={data.urgentBox} />,
        ClinicalReliability: () => <ClinicalReliabilitySection subtitle={data.clinicalReliability.subtitle} cards={data.reliabilityCards} complianceStrip={data.complianceStrip} />,
        ReferralFAQ: () => <ReferralFAQSection faqs={data.faqs} />,
        ReferralCTA: () => <ReferralCTASection cta={data.cta} />,
      }}
    />
  );
}
