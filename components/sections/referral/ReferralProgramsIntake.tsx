import { CheckCircle } from 'lucide-react';

type IntakeStep = { step: string; title: string; desc: string };

type Props = {
  supportedPrograms: string[];
  intakeSteps: IntakeStep[];
};

export default function ReferralProgramsIntake({ supportedPrograms, intakeSteps }: Props) {
  return (
    <section className="section-pad bg-mc-sage">
      <div className="container-pad">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <div>
            <span className="eyebrow mb-3 block">Programs We Support</span>
            <h2 className="section-heading mb-4">Supporting Maryland&apos;s Clinical Community</h2>
            <p className="text-gray-600 leading-relaxed mb-8">
              We work with a broad range of clinical and care coordination teams across
              Maryland to ensure every patient receives a seamless, safe, well-supported
              transition to home — with no gaps, no surprises, and no dropped handoffs.
            </p>
            <ul className="space-y-3">
              {supportedPrograms.map((program) => (
                <li key={program} className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-mc-leaf-100 border border-mc-leaf-200 flex items-center justify-center shrink-0 mt-0.5">
                    <CheckCircle className="h-3 w-3 text-mc-leaf-600" />
                  </div>
                  <span className="text-sm text-gray-700 leading-relaxed">{program}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <div className="mc-card p-8">
              <h3 className="font-semibold text-mc-forest text-lg mb-7 pb-5 border-b border-mc-stone">
                Referral Intake Process
              </h3>
              <div className="space-y-0">
                {intakeSteps.map((item, idx) => (
                  <div key={item.step} className="relative flex items-start gap-5">
                    {idx < intakeSteps.length - 1 && (
                      <div className="absolute left-[19px] top-10 bottom-0 w-px bg-mc-stone" />
                    )}
                    <div className="w-10 h-10 rounded-full bg-mc-leaf-400 text-white text-xs font-bold flex items-center justify-center shrink-0 shadow-float z-10">
                      {item.step}
                    </div>
                    <div className="pb-7">
                      <p className="font-semibold text-mc-forest text-sm">{item.title}</p>
                      <p className="text-xs text-gray-500 mt-0.5 leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
