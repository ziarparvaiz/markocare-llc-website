import type { Metadata } from 'next';
import { brand } from '@/config/brand';
import CountyPageLayout from '@/components/sections/CountyPageLayout';

export const metadata: Metadata = {
  title: 'Home Care in Howard County, MD | MarkoCare',
  description:
    'Professional home care services in Howard County, Maryland. MarkoCare provides personal care, companion care, and post-hospital support in Columbia, Ellicott City, and surrounding areas.',
  alternates: { canonical: `${brand.siteUrl}/service-areas/howard-county` },
  openGraph: {
    title: 'Home Care in Howard County, MD | MarkoCare',
    description: 'Compassionate, RN-supervised home care in Howard County, MD. Serving Columbia, Ellicott City, Laurel, and surrounding communities.',
  },
};

export default function HowardCountyPage() {
  return (
    <CountyPageLayout
      county="Howard County"
      slug="howard-county"
      intro="MarkoCare proudly serves Howard County, Maryland — one of the fastest-growing and most diverse counties in the state. Our professional, RN-supervised home care supports families in Columbia, Ellicott City, Laurel, and surrounding communities."
      paragraph2="Howard County is home to a rapidly growing senior population with a strong preference for aging in place. MarkoCare provides the professional support structure that allows Howard County seniors to live safely and comfortably at home, supported by trained W2 caregivers and clinical oversight from a Registered Nurse. We understand the Howard County community and are proud to serve its families."
      localFacts={[
        'Serving Columbia, Ellicott City, Laurel, and all Howard County communities',
        'Close coordination with Howard County General Hospital discharge teams',
        'Familiar with local senior resource network and Area Agency on Aging',
        'Rapid intake response for urgent post-hospital discharge needs',
        'Serving clients near Howard County\'s medical corridor',
        'W2 employee model with full insurance coverage',
      ]}
      commonNeeds={[
        'Post-surgical recovery care',
        'Alzheimer\'s and dementia support',
        'Senior companion and socialization',
        'Chronic disease daily management',
        'Respite for family caregivers',
        'Medication reminders and monitoring',
        'Transportation to medical appointments',
        'Post-hospital transition support',
      ]}
    />
  );
}
