import type { Metadata } from 'next';
import { brand } from '@/config/brand';
import CountyPageLayout from '@/components/sections/CountyPageLayout';

export const metadata: Metadata = {
  title: 'Home Care in Frederick County, MD | MarkoCare',
  description:
    'Professional home care services in Frederick County, Maryland. MarkoCare serves Frederick City, Germantown, and surrounding communities with compassionate, RN-supervised care.',
  alternates: { canonical: `${brand.siteUrl}/service-areas/frederick-county` },
};

export default function FrederickCountyPage() {
  return (
    <CountyPageLayout
      county="Frederick County"
      slug="frederick-county"
      intro="MarkoCare extends its professional home care services to Frederick County, Maryland — a growing community with a rich history and a vibrant senior population. We serve Frederick City, Germantown, Middletown, Brunswick, and surrounding communities."
      paragraph2="Frederick County's seniors increasingly seek quality in-home care alternatives to assisted living and nursing facilities. MarkoCare meets this demand with a professional, structured care model: W2 employees, RN-supervised care plans, and transparent communication with families. Whether you need post-hospital support, dementia care, or daily personal assistance, MarkoCare is here for Frederick County families."
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
