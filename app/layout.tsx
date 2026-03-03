import type { Metadata } from 'next';
import './globals.css';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { brand } from '@/config/brand';

export const metadata: Metadata = {
  metadataBase: new URL(brand.siteUrl),
  title: {
    template: `%s | ${brand.brandName}`,
    default: `${brand.brandName} – ${brand.tagline}`,
  },
  description:
    'MarkoCare is a Maryland Residential Service Agency (RSA) providing professional, compassionate home care in Howard, Carroll, Anne Arundel, and Frederick Counties.',
  keywords: [
    'home care Maryland',
    'residential service agency Maryland',
    'senior care Howard County',
    'in-home care Maryland',
    'post hospital care Maryland',
    'dementia care Maryland',
    'caregiver agency Maryland',
    'RSA Maryland',
  ],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    siteName: brand.brandName,
    title: `${brand.brandName} – ${brand.tagline}`,
    description:
      'Professional W2 caregiver-staffed home care agency serving Maryland families. RN-supervised, background-checked, and insured.',
    url: brand.siteUrl,
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: `${brand.brandName} – Maryland Home Care Agency`,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: `${brand.brandName} – ${brand.tagline}`,
    description: 'Maryland home care agency. W2 employees, RN supervision, background-checked caregivers.',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
  alternates: {
    canonical: brand.siteUrl,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;0,800;1,400;1,600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:z-50 focus:p-4 focus:bg-white focus:text-brand-navy-800 focus:font-semibold"
        >
          Skip to main content
        </a>
        <Header />
        <main id="main-content">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
