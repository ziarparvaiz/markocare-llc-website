import type { Metadata } from 'next';
import { Ribbon } from 'lucide-react';
import { brand } from '@/config/brand';
import ServicePageLayout from '@/components/sections/ServicePageLayout';

export const metadata: Metadata = {
  title: 'Cancer Care Support at Home | MarkoCare Maryland',
  description:
    'Compassionate cancer care support services in Maryland. MarkoCare helps cancer patients manage fatigue, treatment schedules, and daily needs at home.',
  alternates: { canonical: `${brand.siteUrl}/services/cancer-care-support` },
};

export default function CancerCareSupportPage() {
  return (
    <ServicePageLayout
      name="Cancer Care Support"
      tagline="Compassionate Support Through Every Step of Your Journey"
      heroDesc="A cancer diagnosis changes everything. Our cancer care support services help patients and families navigate the practical and daily challenges of treatment — providing professional, empathetic in-home support so patients can focus on healing."
      whoIsItFor="Our cancer care support is for patients undergoing chemotherapy, radiation, immunotherapy, or surgical recovery, as well as those in remission managing ongoing side effects. We support both the patient and their family caregivers."
      included={[
        'Personal care during treatment-related fatigue',
        'Transportation to chemotherapy and radiation appointments',
        'Medication reminders and schedule management',
        'Nutrition support and meal preparation',
        'Light housekeeping during recovery',
        'Nausea and symptom comfort support (non-clinical)',
        'Companionship and emotional presence',
        'Coordination with oncology care team',
        'Family caregiver relief and respite',
        'Post-surgical recovery support',
      ]}
      safety={[
        'Caregivers receive orientation specific to cancer care needs',
        'RN monitors client status and communicates with oncology team',
        'Infection prevention protocols for immunocompromised clients',
        'Fatigue and fall risk management prioritized',
        '24/7 on-call support for urgent concerns',
        'Clear escalation path to medical team if symptoms worsen',
      ]}
      faqs={[
        {
          q: 'Do your caregivers have oncology experience?',
          a: 'Our caregivers receive training on cancer care considerations including fatigue management, infection prevention for immunocompromised clients, and empathetic communication. We match caregivers based on experience when available.',
        },
        {
          q: 'Can you help with transportation to cancer treatment?',
          a: 'Yes. We can provide reliable transportation to and from chemotherapy, radiation, and other oncology appointments, as well as wait with clients during infusions.',
        },
        {
          q: 'How is cancer care different from standard personal care?',
          a: 'Cancer care requires heightened awareness of treatment side effects, immune suppression protocols, and emotional sensitivity. Our caregivers are trained to provide care that is adapted to the unique challenges of cancer treatment.',
        },
      ]}
      relatedServices={[
        { name: 'Personal Care', slug: 'personal-care' },
        { name: 'Post-Hospital Support', slug: 'post-hospital-support' },
        { name: 'Respite Care', slug: 'respite-care' },
      ]}
      icon={Ribbon}
      accentColor="text-amber-600 bg-amber-50"
    />
  );
}
