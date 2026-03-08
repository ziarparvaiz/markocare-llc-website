import type { Metadata } from 'next';
import { brand } from '@/config/brand';
import CountyPageLayout from '@/components/sections/CountyPageLayout';

export const metadata: Metadata = {
  title: 'Home Care Carroll County Maryland | MarkoCare',
  description:
    'MarkoCare provides RSA-licensed in-home senior care across Carroll County, MD — Westminster, Eldersburg, Sykesville & more. Call today for a free consultation.',
  keywords: [
    'home care Carroll County Maryland',
    'in-home care Westminster MD',
    'senior care Carroll County',
    'home care agency Eldersburg MD',
  ],
  alternates: { canonical: `${brand.siteUrl}/service-areas/carroll-county` },
  openGraph: {
    title: 'Home Care Carroll County Maryland | MarkoCare',
    description: 'RSA-licensed in-home senior care across Carroll County, MD. Serving Westminster, Eldersburg, Sykesville & surrounding areas. Call for a free consultation.',
    images: [{ url: '/og-image.jpg', width: 1200, height: 630, alt: 'MarkoCare caregiver visiting a Carroll County Maryland senior at their home in Westminster' }],
  },
  robots: { index: true, follow: true },
};

export default function CarrollCountyPage() {
  return (
    <CountyPageLayout
      county="Carroll County"
      slug="carroll-county"
      intro="MarkoCare proudly serves Carroll County, Maryland — a community known for its rolling farmland, small-town warmth, and strong sense of family values. We provide professional, compassionate home care throughout Westminster, Eldersburg, Sykesville, Taneytown, and all Carroll County communities — bringing expert care directly to families who deserve it."
      paragraph2="Carroll County has a significant and growing senior population, with many residents preferring to age in place in the homes and communities they have known for decades. MarkoCare honors that preference. We are proud to close the gap in access to high-quality home care in Carroll County by traveling throughout the county to ensure distance is never a barrier to professional support. Our trained W2 caregivers, RN oversight, and flexible scheduling meet the diverse needs of Carroll County families wherever they live."
      localFacts={[
        'Serving Westminster, Eldersburg, Sykesville, Taneytown, and all Carroll County areas',
        'Coordination available with Carroll Hospital Center discharge teams',
        'Knowledge of Carroll County\'s senior services and support network',
        'Rural-friendly scheduling and caregiver placement',
        'Serving clients near Carroll County Medical Center',
        'Full insurance coverage through W2 employment model',
      ]}
      commonNeeds={[
        'Senior independence support',
        'Dementia and memory care',
        'Respite for family caregivers',
        'Post-hospital recovery',
        'Chronic illness daily assistance',
        'Companionship for isolated seniors',
        'Medication management support',
        'Light housekeeping and meal prep',
      ]}
    />
  );
}
