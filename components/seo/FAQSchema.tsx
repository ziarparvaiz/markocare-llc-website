import Script from 'next/script';

interface FAQItem {
  q: string;
  a: string;
}

interface FAQSchemaProps {
  faqs: FAQItem[];
  id?: string;
}

export default function FAQSchema({ faqs, id = 'faq-schema' }: FAQSchemaProps) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.q,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.a,
      },
    })),
  };

  return (
    <Script
      id={id}
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
