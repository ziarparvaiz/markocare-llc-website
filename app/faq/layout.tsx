import type { Metadata } from 'next';
import { brand } from '@/config/brand';

export const metadata: Metadata = {
  title: 'Home Care FAQ Maryland | MarkoCare',
  description:
    'Answers to common home care questions for Maryland families. RSA licensing, costs, caregiver selection, Medicaid, and more. Read our FAQ or call MarkoCare today.',
  keywords: [
    'home care FAQ Maryland',
    'Maryland home care questions',
    'RSA agency FAQ',
    'senior home care questions Maryland',
  ],
  alternates: { canonical: `${brand.siteUrl}/faq` },
  openGraph: {
    title: 'Home Care FAQ Maryland | MarkoCare',
    description: 'Honest answers to Maryland families\' most common home care questions — licensing, costs, caregiver selection, and more. Read the MarkoCare FAQ.',
    images: [{ url: '/og-image.jpg', width: 1200, height: 630, alt: 'Maryland family discussing home care options with a MarkoCare care coordinator' }],
  },
  robots: { index: true, follow: true },
};

export default function FAQLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
