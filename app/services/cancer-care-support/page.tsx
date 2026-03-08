import type { Metadata } from 'next';
import { Ribbon } from 'lucide-react';
import { brand } from '@/config/brand';
import ServicePageLayout from '@/components/sections/ServicePageLayout';

export const metadata: Metadata = {
  title: 'Cancer Care Support at Home Maryland | MarkoCare',
  description:
    'MarkoCare provides compassionate in-home cancer care support in Maryland. Help with daily needs, appointments & recovery across Howard, Anne Arundel & more. Call today.',
  keywords: [
    'cancer care support at home Maryland',
    'home care for cancer patients Maryland',
    'oncology home support MD',
    'in-home cancer assistance Maryland',
  ],
  alternates: { canonical: `${brand.siteUrl}/services/cancer-care-support` },
  openGraph: {
    title: 'Cancer Care Support at Home Maryland | MarkoCare',
    description: 'Compassionate in-home cancer care support in Maryland. Daily living help, appointment transportation & companionship for patients across 4 counties.',
    images: [{ url: '/og-image.jpg', width: 1200, height: 630, alt: 'MarkoCare caregiver providing warm in-home support to a cancer patient in Maryland' }],
  },
  robots: { index: true, follow: true },
};

export default function CancerCareSupportPage() {
  return (
    <ServicePageLayout
      name="Cancer Care Support"
      tagline="Walk Beside You Through Every Stage of Treatment and Recovery"
      heroDesc="A cancer diagnosis changes everything — schedules, energy levels, family roles and emotional wellbeing. At MarkoCare, we help clients and their families navigate the practical and personal challenges of treatment and recovery so they can focus on what truly matters: time, connection, and healing. Our caregivers handle the daily logistics so your loved one can conserve energy, maintain dignity, and stay in the place where they feel most at ease — home."
      whoIsItFor="Our cancer care support is for patients undergoing chemotherapy, radiation, immunotherapy, or surgical recovery, as well as those in remission managing ongoing side effects. We support both the patient and their family caregivers throughout the journey."
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
