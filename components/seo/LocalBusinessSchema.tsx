import Script from 'next/script';
import { brand } from '@/config/brand';

export default function LocalBusinessSchema() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': ['HomeAndConstructionBusiness', 'LocalBusiness'],
    name: brand.brandName,
    description: `${brand.brandName} is a Maryland Residential Service Agency (RSA) providing professional, RN-supervised home care in Howard, Carroll, Anne Arundel, and Frederick Counties. W2 employees, background-checked, insured.`,
    url: brand.siteUrl,
    telephone: brand.phone,
    email: brand.email,
    logo: `${brand.siteUrl}/logo.png`,
    image: `${brand.siteUrl}/og-image.jpg`,
    address: {
      '@type': 'PostalAddress',
      streetAddress: '10490 Little Patuxent Pkwy #600',
      addressLocality: 'Columbia',
      addressRegion: 'MD',
      postalCode: '21044',
      addressCountry: 'US',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 39.2037,
      longitude: -76.8610,
    },
    areaServed: brand.counties.map((county) => ({
      '@type': 'AdministrativeArea',
      name: `${county}, Maryland`,
    })),
    serviceType: brand.services.map((s) => s.name),
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        opens: '08:00',
        closes: '18:00',
      },
    ],
    priceRange: '$$',
    hasMap: brand.googleMapsUrl,
    sameAs: [brand.socialLinks.facebook, brand.socialLinks.linkedin],
  };

  return (
    <Script
      id="local-business-schema"
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
