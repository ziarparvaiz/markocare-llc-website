import type { Metadata } from 'next';
import { getPageData } from '@/lib/page-data';
import ContactPageLayout, { type ContactPageData } from '@/components/sections/ContactPageLayout';
import { brand } from '@/config/brand';

export async function generateMetadata(): Promise<Metadata> {
  const page = getPageData('contact');
  if (!page) return {};
  const seo = page.seo as { title: string; description: string; canonical: string; ogTitle: string; ogDescription: string; ogImageAlt: string; keywords?: string[] };
  return {
    title: seo.title,
    description: seo.description,
    keywords: seo.keywords,
    alternates: { canonical: `${brand.siteUrl}${seo.canonical}` },
    openGraph: {
      title: seo.ogTitle,
      description: seo.ogDescription,
      images: [{ url: '/og-image.jpg', width: 1200, height: 630, alt: seo.ogImageAlt }],
    },
    robots: { index: true, follow: true },
  };
}

export default function ContactPage() {
  const page = getPageData('contact');
  if (!page) return null;
  return <ContactPageLayout data={page as unknown as ContactPageData} />;
}
