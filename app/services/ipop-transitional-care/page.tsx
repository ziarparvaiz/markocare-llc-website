import type { Metadata } from 'next';
import { Activity } from 'lucide-react';
import { brand } from '@/config/brand';
import ServicePageLayout from '@/components/sections/ServicePageLayout';

export const metadata: Metadata = {
  title: 'IPOP Transitional Care Maryland | MarkoCare',
  description:
    'MarkoCare\'s IPOP transitional care in Maryland bridges the gap from hospital to home after surgery. RN-supervised recovery support across 4 counties. Call today.',
  keywords: [
    'IPOP transitional care Maryland',
    'post-operative home care Maryland',
    'hospital to home transition MD',
    'surgical recovery home care Maryland',
  ],
  alternates: { canonical: `${brand.siteUrl}/services/ipop-transitional-care` },
  openGraph: {
    title: 'IPOP Transitional Care Maryland | MarkoCare',
    description: 'MarkoCare\'s IPOP transitional care bridges hospital discharge to home recovery in Maryland. RN-supervised, rapid-start care across 4 counties.',
    images: [{ url: '/og-image.jpg', width: 1200, height: 630, alt: 'MarkoCare caregiver assisting a post-surgery patient with mobility at home in Maryland' }],
  },
  robots: { index: true, follow: true },
};

export default function IPOPTransitionalCarePage() {
  return (
    <ServicePageLayout
      name="IPOP Transitional Care Support"
      tagline="A Safer, Smoother Path From Hospital to Home"
      heroDesc="Leaving the hospital should feel like the beginning of recovery, not the start of a new set of worries. Without adequate support, the transition from inpatient care to home is when health setbacks and readmissions are most likely to occur. MarkoCare partners with Maryland hospitals and discharge planning teams — including Johns Hopkins IPOP — to bridge this critical gap with structured, RN-supervised home-based care that makes recovery safe and successful."
      whoIsItFor="IPOP transitional care is designed for complex patients being discharged through the Johns Hopkins IPOP program or similar high-acuity discharge pathways, requiring intensive, coordinated home-based support to prevent readmission and ensure a full recovery."
      included={[
        'Immediate post-discharge home care coordination',
        'RN assessment within 24 hours of discharge',
        'Complex care plan implementation',
        'Medication management and reconciliation',
        'Vital signs monitoring and reporting',
        'IPOP care team communication and coordination',
        'Appointment scheduling and transportation',
        'Wound care support (per physician orders)',
        'Daily progress documentation',
        'Family caregiver education and training',
      ]}
      safety={[
        'Direct coordination with IPOP discharge team',
        'Same-day or next-day caregiver placement available',
        'RN conducts home safety assessment at care start',
        '24/7 on-call clinical support during transitional period',
        'Readmission prevention protocols implemented',
        'Escalation pathway to IPOP care team established',
        'W2 employee model ensures reliable, consistent caregivers',
      ]}
      faqs={[
        {
          q: 'Is MarkoCare an official Johns Hopkins IPOP partner?',
          a: 'MarkoCare coordinates with IPOP discharge planners and care teams to facilitate seamless hospital-to-home transitions. We follow IPOP care protocols and maintain open communication with the care team. Contact us for the most current partnership status.',
        },
        {
          q: 'How quickly can you place a caregiver for an IPOP discharge?',
          a: 'We offer same-day or next-day placement for urgent IPOP discharges. Our intake coordinator is available to receive referrals and begin the placement process immediately.',
        },
        {
          q: 'What makes IPOP transitional care different from standard post-hospital care?',
          a: 'IPOP transitional care involves more complex patients with higher acuity needs, tighter coordination with specialized care teams, and structured protocols aligned with the IPOP program framework. Our RN plays a more intensive role in these cases.',
        },
        {
          q: 'Does MarkoCare accept IPOP patients on Medicaid?',
          a: 'We are actively working toward Medicaid provider enrollment. Currently we serve private-pay clients. Contact us to discuss payment options for IPOP patients.',
        },
      ]}
      relatedServices={[
        { name: 'Post-Hospital Support', slug: 'post-hospital-support' },
        { name: 'Personal Care', slug: 'personal-care' },
        { name: 'Cancer Care Support', slug: 'cancer-care-support' },
      ]}
      icon={Activity}
      accentColor="text-teal-600 bg-teal-50"
    />
  );
}
