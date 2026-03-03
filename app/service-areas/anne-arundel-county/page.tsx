import type { Metadata } from 'next';
import { brand } from '@/config/brand';
import CountyPageLayout from '@/components/sections/CountyPageLayout';

export const metadata: Metadata = {
  title: 'Home Care in Anne Arundel County, MD | MarkoCare',
  description:
    'Professional home care in Anne Arundel County, Maryland. MarkoCare serves Annapolis, Glen Burnie, Severna Park, and surrounding areas with W2 caregivers under RN supervision.',
  alternates: { canonical: `${brand.siteUrl}/service-areas/anne-arundel-county` },
};

export default function AnneArundelCountyPage() {
  return (
    <CountyPageLayout
      county="Anne Arundel County"
      slug="anne-arundel-county"
      intro="MarkoCare proudly serves Anne Arundel County, Maryland — home to Annapolis, the state capital, and a diverse mix of waterfront communities and suburban neighborhoods. Our professional home care team is ready to serve you in Annapolis, Glen Burnie, Severna Park, Pasadena, and beyond."
      paragraph2="Anne Arundel County's senior population spans a wide range of needs — from active older adults seeking companionship and light assistance to complex patients requiring post-hospital care coordination. MarkoCare's flexible, scalable model meets each client wherever they are in their care journey, with the clinical oversight of a Registered Nurse ensuring quality and safety."
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
