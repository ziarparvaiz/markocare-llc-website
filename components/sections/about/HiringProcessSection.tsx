type HiringStep = { step: string; title: string; desc: string };

type Props = {
  subtitle: string;
  steps: HiringStep[];
};

export default function HiringProcessSection({ subtitle, steps }: Props) {
  return (
    <section className="py-24 md:py-32 bg-white">
      <div className="container-pad">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="eyebrow mb-3 block">Hiring Standards</span>
          <h2 className="text-3xl md:text-4xl font-bold text-mc-forest">How We Hire Our Caregivers</h2>
          <p className="mt-4 text-gray-600 leading-relaxed">{subtitle}</p>
        </div>
        <div className="max-w-3xl mx-auto">
          <div className="relative">
            <div className="absolute left-7 top-7 bottom-7 w-px bg-mc-stone" />
            <div className="space-y-5">
              {steps.map((step, i) => (
                <div key={step.step} className="relative flex gap-6 items-start">
                  <div className="relative z-10 shrink-0">
                    <div className={`w-14 h-14 rounded-2xl flex items-center justify-center font-bold text-sm transition-all ${
                      i === 0 ? 'bg-mc-leaf-500 text-white shadow-float' : 'bg-white border-2 border-mc-stone text-mc-forest'
                    }`}>
                      {step.step}
                    </div>
                  </div>
                  <div className="rounded-2xl border border-mc-stone bg-white p-5 shadow-premium flex-1 hover:border-mc-leaf-200 hover:shadow-premium-lg transition-all duration-200">
                    <h3 className="font-bold text-mc-forest mb-1.5">{step.title}</h3>
                    <p className="text-sm text-gray-600 leading-relaxed">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
