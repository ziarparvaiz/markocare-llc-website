import {
  Stethoscope, BadgeCheck, Lock, UserCheck, ClipboardList, HeartHandshake,
} from 'lucide-react';

const WHY_CHOOSE_US = [
  {
    icon: Stethoscope,
    title: 'RN-Supervised Care',
    desc: "A Registered Nurse oversees every client's care plan and conducts regular supervisory visits — a clinical standard most home care agencies don't meet.",
  },
  {
    icon: BadgeCheck,
    title: 'Verified Caregivers',
    desc: 'All caregivers undergo state and federal background checks, reference verification, and competency testing before their very first visit.',
  },
  {
    icon: Lock,
    title: 'Licensed & Insured',
    desc: "MarkoCare carries full liability insurance and workers' compensation coverage, protecting your family from any financial risk.",
  },
  {
    icon: UserCheck,
    title: 'W2 Employee Caregivers',
    desc: 'Our caregivers are W2 employees — not independent contractors — meaning they are accountable, trained, and fully supported by our agency.',
  },
  {
    icon: ClipboardList,
    title: 'Personalized Care Plans',
    desc: "No two clients are alike. Every care plan is custom-built around your loved one's specific medical needs, schedule, and lifestyle.",
  },
  {
    icon: HeartHandshake,
    title: 'Local Maryland Team',
    desc: 'We are a Maryland-based agency with deep roots in the communities we serve. Our team is nearby and personally invested in your family\'s wellbeing.',
  },
];

export default function ServiceWhyChooseUs() {
  return (
    <section className="py-16 md:py-24 bg-mc-sage border-y border-mc-stone">
      <div className="container-pad">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="eyebrow">Our Difference</span>
          <h2 className="text-2xl md:text-3xl font-bold text-mc-forest mt-2">
            Why Families Choose MarkoCare
          </h2>
          <p className="text-gray-600 mt-3 leading-relaxed">
            We combine clinical expertise with genuine compassion — giving families the confidence that their loved one is in safe, capable hands.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {WHY_CHOOSE_US.map(({ icon: FeatureIcon, title, desc }) => (
            <div key={title} className="rounded-2xl bg-white border border-mc-stone p-6 shadow-premium">
              <div className="w-10 h-10 rounded-xl bg-mc-leaf-50 border border-mc-leaf-100 flex items-center justify-center mb-4">
                <FeatureIcon className="h-5 w-5 text-mc-leaf-600" aria-hidden="true" />
              </div>
              <h3 className="font-bold text-mc-forest mb-2">{title}</h3>
              <p className="text-sm text-gray-600 leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
