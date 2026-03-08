import type { Metadata } from 'next';
import { brand } from '@/config/brand';
import CountyPageLayout from '@/components/sections/CountyPageLayout';

export const metadata: Metadata = {
  title: 'Home Care Frederick County MD | MarkoCare',
  description:
    'MarkoCare provides RSA-licensed in-home senior care across Frederick County, MD — Frederick, Middletown, Brunswick & more. Call today for a free consultation.',
  keywords: [
    'home care Frederick County Maryland',
    'in-home care Frederick MD',
    'senior care Frederick County',
    'home care agency Middletown Maryland',
  ],
  alternates: { canonical: `${brand.siteUrl}/service-areas/frederick-county` },
  openGraph: {
    title: 'Home Care Frederick County MD | MarkoCare',
    description: 'RSA-licensed in-home senior care across Frederick County, MD. Serving Frederick, Middletown, Brunswick, Urbana & more. Call for a free consultation.',
    images: [{ url: '/og-image.jpg', width: 1200, height: 630, alt: 'MarkoCare caregiver assisting a Frederick County Maryland senior at home near the city of Frederick' }],
  },
  robots: { index: true, follow: true },
};

export default function FrederickCountyPage() {
  return (
    <CountyPageLayout
      county="Frederick County"
      slug="frederick-county"
      intro="MarkoCare serves Frederick County, Maryland — a community that blends rich history with a growing, dynamic population. Families here span a wide range: longtime residents, young households, and seniors who have called this area home for decades. We serve Frederick City, Middletown, Thurmont, Brunswick, and surrounding communities with professional, compassionate home care."
      paragraph2="Frederick County seniors increasingly prefer to age in place rather than transition to facilities — and MarkoCare is here to make that possible. We coordinate closely with Frederick Health Hospital and other regional medical centers, and our caregivers know the landscape of this county well. Whether your family needs post-hospital support, dementia care, personal care, or respite, MarkoCare delivers RN-supervised, W2-employee care with transparent communication every step of the way."
      localFacts={[
        'Serving Frederick City, Germantown, Middletown, Brunswick, and surrounding areas',
        'Coordination with Frederick Health Hospital discharge teams',
        'Knowledge of Frederick County\'s senior resource ecosystem',
        'Caregiver availability across rural and suburban Frederick County',
        'Fast intake process for urgent care needs',
        'Fully insured W2 caregiver model',
      ]}
      commonNeeds={[
        'Personal care for seniors at home',
        'Dementia and memory care support',
        'Post-surgical recovery assistance',
        'Companion care for social engagement',
        'Respite care for family caregivers',
        'Medication reminders and health monitoring',
        'Transportation to Frederick-area specialists',
        'Hospital-to-home transition care',
      ]}
    />
  );
}
