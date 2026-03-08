import type { Metadata } from 'next';
import { brand } from '@/config/brand';
import CountyPageLayout from '@/components/sections/CountyPageLayout';

export const metadata: Metadata = {
  title: 'Home Care Anne Arundel County MD | MarkoCare',
  description:
    'MarkoCare delivers RSA-licensed in-home senior care across Anne Arundel County, MD — Annapolis, Glen Burnie, Severna Park & more. Call for a free consultation today.',
  keywords: [
    'home care Anne Arundel County Maryland',
    'in-home care Annapolis MD',
    'senior care Anne Arundel MD',
    'home care agency Glen Burnie Maryland',
  ],
  alternates: { canonical: `${brand.siteUrl}/service-areas/anne-arundel-county` },
  openGraph: {
    title: 'Home Care Anne Arundel County MD | MarkoCare',
    description: 'RSA-licensed in-home care for seniors across Anne Arundel County, MD. Serving Annapolis, Glen Burnie, Severna Park & more. Free consultation available.',
    images: [{ url: '/og-image.jpg', width: 1200, height: 630, alt: 'MarkoCare caregiver assisting an Anne Arundel County senior at home near Annapolis, Maryland' }],
  },
  robots: { index: true, follow: true },
};

export default function AnneArundelCountyPage() {
  return (
    <CountyPageLayout
      county="Anne Arundel County"
      slug="anne-arundel-county"
      intro="MarkoCare proudly serves Anne Arundel County, Maryland — home to Annapolis, the state capital, and a vibrant mix of waterfront communities, historic neighborhoods, and suburban families. Our professional, RN-supervised home care team is ready to serve families in Annapolis, Glen Burnie, Severna Park, Pasadena, and beyond."
      paragraph2="Our Anne Arundel County caregivers are local. They understand the roads, the proximity to Anne Arundel Medical Center, and the community resources available to seniors and families in this area. Anne Arundel County's senior population spans a wide range of needs — from active older adults seeking companionship to complex patients requiring post-hospital care coordination. MarkoCare's flexible, personalized model meets each client exactly where they are, with registered nurse oversight ensuring quality and safety at every step."
      localFacts={[
        'Serving Annapolis, Glen Burnie, Severna Park, Pasadena, and surrounding areas',
        'Coordination with Anne Arundel Medical Center and area hospitals',
        'Familiar with the Annapolis and regional senior services network',
        'Experienced with post-hospital placements in the Anne Arundel region',
        'Accessible to waterfront and suburban communities throughout the county',
        'W2 employees with agency-provided liability insurance',
      ]}
      commonNeeds={[
        'Senior in-home personal care',
        'Alzheimer\'s and dementia support',
        'Post-hospital recovery care',
        'Transportation to Annapolis-area specialists',
        'Companion care for social engagement',
        'Respite for family caregivers',
        'Cancer treatment support',
        'Chronic disease management assistance',
      ]}
    />
  );
}
