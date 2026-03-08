import type { Metadata } from 'next';
import { Users } from 'lucide-react';
import { brand } from '@/config/brand';
import ServicePageLayout from '@/components/sections/ServicePageLayout';

export const metadata: Metadata = {
  title: 'Companion Care Services | MarkoCare Maryland',
  description:
    'Compassionate companion care in Maryland. MarkoCare provides social engagement, light housekeeping, errands, and transportation to combat senior isolation.',
  alternates: { canonical: `${brand.siteUrl}/services/companion-care` },
};

export default function CompanionCarePage() {
  return (
    <ServicePageLayout
      name="Companion Care"
      tagline="Because Everyone Deserves a Friendly Face and a Reason to Smile"
      heroDesc="Loneliness is one of the greatest threats to the health and happiness of older adults. Research consistently shows that social isolation can have serious physical and cognitive consequences — yet many seniors spend most of their day without meaningful human connection. MarkoCare's companion care services are built on a simple truth: connection heals. We match clients with attentive, warm caregivers who bring engagement and purpose into the home alongside practical help."
      whoIsItFor="Companion care is ideal for seniors who live alone, those experiencing social isolation, family caregivers who work during the day, and anyone who would benefit from consistent, friendly presence and non-medical daily support."
      included={[
        'Friendly conversation and social engagement',
        'Light housekeeping and home organization',
        'Meal preparation and grocery shopping',
        'Errand running (pharmacy, post office)',
        'Transportation to appointments',
        'Reading, games, and activities',
        'Monitoring health changes and reporting',
        'Pet care assistance',
        'Medication reminders',
        'Mail assistance and correspondence',
      ]}
      safety={[
        'All companion caregivers are W2 employees, background-checked',
        'Caregivers are trained to recognize and report changes in client status',
        'RN oversight ensures companion care stays within appropriate scope',
        'Agency liability insurance covers all caregiver activities',
        'Safety check-in protocols for clients living alone',
        'Emergency escalation procedures in place',
      ]}
      faqs={[
        {
          q: 'Does companion care include medical tasks?',
          a: 'No. Companion care is non-medical and focuses on social support, light housekeeping, errands, and oversight. For clients who need hands-on physical assistance, we offer personal care services — often combined with companion care.',
        },
        {
          q: 'Can companion care help with transportation to medical appointments?',
          a: 'Yes. Our companion caregivers can provide transportation and accompany clients to medical appointments, helping ensure they attend visits and can relay information back to family members.',
        },
        {
          q: 'How do I know my loved one is safe?',
          a: 'Our caregivers are trained to observe and report any changes in client health, mood, or home safety. They communicate with our care coordinators who keep families informed.',
        },
      ]}
      relatedServices={[
        { name: 'Personal Care', slug: 'personal-care' },
        { name: 'Respite Care', slug: 'respite-care' },
        { name: 'Dementia Care', slug: 'dementia-care' },
      ]}
      icon={Users}
      accentColor="text-brand-green-700 bg-brand-green-50"
    />
  );
}
