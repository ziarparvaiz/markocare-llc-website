const HOW_CARE_WORKS = [
  {
    step: '01',
    title: 'Free In-Home Assessment',
    desc: 'A care coordinator meets with your family at no charge to understand your loved one\'s needs, daily routines, and personal goals.',
  },
  {
    step: '02',
    title: 'RN-Designed Care Plan',
    desc: 'Our Registered Nurse creates a personalized, medically-informed care plan built around your loved one\'s specific health needs and preferences.',
  },
  {
    step: '03',
    title: 'Caregiver Matching',
    desc: 'We carefully match your loved one with a background-checked, trained caregiver based on skills, personality, and schedule compatibility.',
  },
  {
    step: '04',
    title: 'Ongoing Supervision & Support',
    desc: 'Our RN conducts regular supervisory visits and our team remains available 24/7 to address questions or adjust the care plan as needs evolve.',
  },
];

export default function ServiceHowCareWorks() {
  return (
    <div>
      <span className="eyebrow">Simple Process</span>
      <h2 className="text-2xl md:text-3xl font-bold text-mc-forest mt-1 mb-2">
        How Care Works
      </h2>
      <p className="text-gray-500 mb-8">
        Getting started is straightforward. Here&apos;s what to expect from day one:
      </p>

      <div className="space-y-0">
        {HOW_CARE_WORKS.map((step, idx) => (
          <div key={step.step} className="flex gap-5 relative">
            {idx < HOW_CARE_WORKS.length - 1 && (
              <div className="absolute left-6 top-14 w-px h-full bg-mc-stone" aria-hidden="true" />
            )}
            <div className="shrink-0 w-12 h-12 rounded-2xl bg-mc-forest text-white flex items-center justify-center text-sm font-bold z-10 shadow-premium">
              {step.step}
            </div>
            <div className="pb-8 pt-1">
              <h3 className="text-base font-bold text-mc-forest mb-1">{step.title}</h3>
              <p className="text-sm text-gray-600 leading-relaxed">{step.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
