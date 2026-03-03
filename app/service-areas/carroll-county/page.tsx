import type { Metadata } from 'next';
import { brand } from '@/config/brand';
import CountyPageLayout from '@/components/sections/CountyPageLayout';

export const metadata: Metadata = {
  title: 'Home Care in Carroll County, MD | MarkoCare',
  description:
    'Professional home care services in Carroll County, Maryland. MarkoCare serves Westminster, Eldersburg, Sykesville, and surrounding communities with RN-supervised in-home care.',
  alternates: { canonical: `${brand.siteUrl}/service-areas/carroll-county` },
};

export default function CarrollCountyPage() {
  return (
    <CountyPageLayout
      county="Carroll County"
      slug="carroll-county"
      intro="MarkoCare serves Carroll County, Maryland — a community with deep roots and a strong tradition of family values. We provide professional, compassionate home care to Westminster, Eldersburg, Sykesville, Taneytown, and all Carroll County communities."
      paragraph2="Carroll County has a significant and growing senior population, with many residents preferring to age in place in the homes and communities they've known for decades. MarkoCare honors that preference by providing the professional support they need — trained W2 caregivers, RN oversight, and flexible scheduling to meet the diverse needs of Carroll County families."
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
