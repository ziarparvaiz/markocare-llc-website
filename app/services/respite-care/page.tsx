import type { Metadata } from 'next';
import { RefreshCw } from 'lucide-react';
import { brand } from '@/config/brand';
import ServicePageLayout from '@/components/sections/ServicePageLayout';

export const metadata: Metadata = {
  title: 'Respite Care Services | MarkoCare Maryland',
  description:
    'Respite care for Maryland family caregivers. MarkoCare provides temporary relief so family members can rest, recharge, and avoid caregiver burnout.',
  alternates: { canonical: `${brand.siteUrl}/services/respite-care` },
};

export default function RespiteCarePage() {
  return (
    <ServicePageLayout
      name="Respite Care"
      tagline="Relief for Family Caregivers — You Deserve a Break Too"
      heroDesc="Family caregivers are the backbone of home care — but burnout is real. MarkoCare's respite care services provide temporary professional coverage so you can rest, recharge, attend appointments, travel, or simply breathe, knowing your loved one is in safe hands."
      whoIsItFor="Respite care is for family members who serve as primary caregivers and need planned or emergency relief. Whether you need a few hours weekly or extended coverage during a vacation, we provide professional continuity of care."
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
