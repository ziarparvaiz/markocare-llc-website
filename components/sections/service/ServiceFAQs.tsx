type FAQ = { q: string; a: string };

type Props = { faqs: FAQ[] };

export default function ServiceFAQs({ faqs }: Props) {
  if (!faqs.length) return null;
  return (
    <div>
      <span className="eyebrow">Common Questions</span>
      <h2 className="text-2xl md:text-3xl font-bold text-mc-forest mt-1 mb-6">
        Frequently Asked Questions
      </h2>
      <div className="space-y-4">
        {faqs.map((faq) => (
          <div key={faq.q} className="rounded-2xl border border-mc-stone bg-white p-5 shadow-premium">
            <h3 className="font-semibold text-mc-forest mb-2">{faq.q}</h3>
            <p className="text-sm text-gray-600 leading-relaxed">{faq.a}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
