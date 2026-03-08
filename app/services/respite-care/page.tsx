import type { Metadata } from 'next';
import { RefreshCw } from 'lucide-react';
import { brand } from '@/config/brand';
import ServicePageLayout from '@/components/sections/ServicePageLayout';

export const metadata: Metadata = {
  title: 'Respite Care for Family Caregivers Maryland | MarkoCare',
  description:
    'MarkoCare offers trusted respite care for Maryland family caregivers. Take a break — hourly, overnight, or extended relief across 4 counties. Call today.',
  keywords: [
    'respite care Maryland family caregivers',
    'caregiver respite care MD',
    'temporary home care Maryland',
    'short-term senior care Maryland',
  ],
  alternates: { canonical: `${brand.siteUrl}/services/respite-care` },
  openGraph: {
    title: 'Respite Care for Family Caregivers Maryland | MarkoCare',
    description: 'MarkoCare provides hourly, overnight & extended respite care for Maryland family caregivers across 4 counties. Take a real break — your loved one is in good hands.',
    images: [{ url: '/og-image.jpg', width: 1200, height: 630, alt: 'Family caregiver resting while a MarkoCare professional cares for their senior loved one in Maryland' }],
  },
  robots: { index: true, follow: true },
};

export default function RespiteCarePage() {
  return (
    <ServicePageLayout
      name="Respite Care"
      tagline="Rest and Recharge — Because Caring for the Caregiver Matters Too"
      heroDesc="If you are caring for a family member at home, you know how demanding — and how deeply loving — that role is. You also know it can be exhausting. Caregiver burnout is real, and it affects not only you but the quality of care your loved one receives. MarkoCare's respite care gives family caregivers the break they need and deserve, stepping in fully prepared so you can rest with complete peace of mind."
      whoIsItFor="Respite care is for family members who serve as primary caregivers and need planned or emergency relief — whether for a few hours, a full day, overnight, or an extended period. You should never feel guilty about needing rest."
      included={[
        'Flexible scheduling: hourly, daily, or extended stays',
        'Personal care during caregiver absence',
        'Medication reminders and administration support',
        'Meal preparation and feeding assistance',
        'Mobility and transfer assistance',
        'Companionship and engagement activities',
        'Safety monitoring and supervision',
        'Communication with family caregiver',
        'Emergency escalation if needed',
        'Handoff briefing to returning family caregiver',
      ]}
      safety={[
        'Respite caregivers receive full client briefing from family and RN',
        'Written care plan provided for every respite assignment',
        'All caregivers are W2 employees with verified backgrounds',
        'On-call support available to caregivers during shifts',
        'Emergency contact protocols established before placement',
        'RN oversight continues during respite periods',
      ]}
      faqs={[
        {
          q: 'How much notice do I need to schedule respite care?',
          a: 'For planned respite, we recommend 48–72 hours advance notice. For urgent or emergency respite needs, contact us directly and we will do our best to arrange prompt coverage.',
        },
        {
          q: 'Can the same respite caregiver come regularly?',
          a: 'Yes — we strongly encourage caregiver consistency for respite clients as well. Building a relationship with a regular respite caregiver greatly improves care quality and client comfort.',
        },
        {
          q: 'Does insurance cover respite care?',
          a: 'Some long-term care insurance policies cover respite care. Medicaid may also cover respite services in certain circumstances. Contact us to discuss your specific insurance situation.',
        },
      ]}
      relatedServices={[
        { name: 'Personal Care', slug: 'personal-care' },
        { name: 'Companion Care', slug: 'companion-care' },
        { name: 'Dementia Care', slug: 'dementia-care' },
      ]}
      icon={RefreshCw}
      accentColor="text-sky-600 bg-sky-50"
    />
  );
}
