import type { Metadata } from 'next';
import { brand } from '@/config/brand';
import CountyPageLayout from '@/components/sections/CountyPageLayout';

export const metadata: Metadata = {
  title: 'Home Care Howard County Maryland | MarkoCare',
  description:
    'MarkoCare provides RSA-licensed in-home senior care across Howard County, MD — Columbia, Ellicott City, Clarksville & more. Call for a free consultation today.',
  keywords: [
    'home care Howard County Maryland',
    'in-home care Columbia MD',
    'senior care Ellicott City MD',
    'home care agency Howard County',
  ],
  alternates: { canonical: `${brand.siteUrl}/service-areas/howard-county` },
  openGraph: {
    title: 'Home Care Howard County Maryland | MarkoCare',
    description: 'RSA-licensed in-home senior care across Howard County, MD. Serving Columbia, Ellicott City, Clarksville & more. RN-supervised, private pay. Free consultation.',
    images: [{ url: '/og-image.jpg', width: 1200, height: 630, alt: 'MarkoCare caregiver with a Howard County Maryland senior in their Columbia or Ellicott City home' }],
  },
  robots: { index: true, follow: true },
};

export default function HowardCountyPage() {
  return (
    <CountyPageLayout
      county="Howard County"
      slug="howard-county"
      intro="MarkoCare is headquartered in Howard County, Maryland — and our commitment to this community runs especially deep. Our professional, RN-supervised home care supports families throughout Columbia, Ellicott City, Clarksville, and all surrounding communities. We are your neighbors, and we take that responsibility seriously."
      paragraph2="Howard County is consistently ranked among the best places to live in America. Families here are diverse, invested in their communities, and expect the best when it comes to care for their loved ones. MarkoCare was founded in Howard County because we believe these families deserve a home care agency that reflects local values: excellence, compassion, and community. Our caregivers live here too — and that local presence means faster response, better coordination, and genuine familiarity with the resources and healthcare networks that matter most."
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
