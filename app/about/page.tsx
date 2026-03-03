import type { Metadata } from 'next';
import Link from 'next/link';
import {
  CheckCircle,
  Shield,
  Heart,
  Users,
  Award,
  Stethoscope,
  UserCheck,
  ClipboardList,
  MapPin,
  Phone,
  Mail,
  ArrowRight,
  Building2,
} from 'lucide-react';
import { brand } from '@/config/brand';
import LicenseBanner from '@/components/ui/LicenseBanner';

export const metadata: Metadata = {
  title: 'About MarkoCare | Maryland Home Care Agency',
  description:
    "Learn about MarkoCare's mission, values, RN supervision model, and W2 employee hiring standards. A Maryland Residential Service Agency built on trust.",
  alternates: { canonical: `${brand.siteUrl}/about` },
};

const approachPillars = [
  {
    icon: Stethoscope,
    title: 'RN-Supervised Care',
    desc: 'Every care plan is created, implemented, and monitored by a Registered Nurse — not a coordinator without clinical credentials.',
  },
  {
    icon: UserCheck,
    title: 'W2 Employee Model',
    desc: 'Our caregivers are employees, not independent contractors. This means full insurance coverage, accountability, and consistent standards.',
  },
  {
    icon: Heart,
    title: 'Compassion-First Culture',
    desc: 'We recruit caregivers who treat clients as family — and we reinforce that standard through ongoing training and supervision.',
  },
];

const rnSteps = [
  {
    icon: ClipboardList,
    title: 'Initial RN Assessment',
    desc: 'Our RN conducts a thorough in-home assessment to identify care needs, safety risks, and goals before services begin.',
  },
  {
    icon: Shield,
    title: 'Individualized Care Plan',
    desc: 'A written care plan developed by the RN and shared with the client, family, and assigned caregiver.',
  },
  {
    icon: CheckCircle,
    title: 'Supervisory Home Visits',
    desc: 'The RN conducts regular supervisory visits to evaluate quality, update plans, and address emerging needs.',
  },
];

const hiringSteps = [
  {
    step: '01',
    title: 'Initial Screening',
    desc: 'Structured phone interview assessing experience, attitude, and availability.',
  },
  {
    step: '02',
    title: 'Background Check',
    desc: 'State and federal criminal history, sex offender registry, and OIG exclusion list screening.',
  },
  {
    step: '03',
    title: 'Reference Verification',
    desc: 'Prior employer and personal reference contacts to validate work history and character.',
  },
  {
    step: '04',
    title: 'Orientation & Training',
    desc: 'Mandatory orientation covering client safety, infection control, and documentation.',
  },
  {
    step: '05',
    title: 'RN Competency Evaluation',
    desc: 'Supervising RN evaluates caregiver competencies before their first client assignment.',
  },
  {
    step: '06',
    title: 'Ongoing Supervision',
    desc: 'Regular RN supervisory visits and performance reviews ensure consistent quality of care.',
  },
];

const w2Benefits = [
  'Fully covered by our general liability and workers\u2019 compensation insurance',
  'Consistent wages, schedules, and performance standards',
  'No client exposure to independent-contractor liability gaps',
  'Background-checked and trained to MarkoCare standards — not self-reported',
  'Supervision and accountability built into every assignment',
];

export default function AboutPage() {
  return (
    <>
      {/* ── Hero: Full-width, centered, forest green ───────────────────── */}
      <section className="bg-mc-forest text-white py-24 md:py-32">
        <div className="container-pad text-center max-w-4xl mx-auto">
          <span className="mc-badge-dark mb-6 inline-flex">About MarkoCare</span>
          <h1 className="text-5xl md:text-6xl font-serif font-bold leading-tight mb-6">
            Built on Compassion.<br />
            <span className="text-mc-leaf-300">Grounded in Professionalism.</span>
          </h1>
          <p className="text-xl text-white/80 leading-relaxed max-w-2xl mx-auto">
            MarkoCare is a Maryland Residential Service Agency (RSA) built around one
            principle: that every family deserves home care they can genuinely trust.
          </p>
        </div>
      </section>

      {/* ── License Notice ─────────────────────────────────────────────── */}
      <section className="bg-white py-8 border-b border-mc-stone">
        <div className="container-pad">
          <LicenseBanner />
        </div>
      </section>

      {/* ── Mission Statement — large typography ──────────────────────── */}
      <section className="py-20 md:py-28 bg-mc-cream">
        <div className="container-pad max-w-4xl mx-auto text-center">
          <span className="eyebrow mb-4 block">Our Mission</span>
          <blockquote className="text-2xl md:text-3xl font-serif font-semibold text-mc-forest leading-relaxed">
            &ldquo;We founded MarkoCare because Maryland families deserve better — consistent
            caregivers, clinical oversight, and complete transparency. Not because it was
            easy, but because it was right.&rdquo;
          </blockquote>
          <p className="mt-8 text-gray-600 text-lg leading-relaxed max-w-2xl mx-auto">
            We witnessed firsthand the gap between what families needed and what too many
            home care agencies delivered. Our answer was clear: build an agency anchored in
            the W2 employment model, staffed by professionally vetted caregivers, and
            supervised by a Registered Nurse.
          </p>
        </div>
      </section>

      {/* ── Our Approach — 3 pillars ───────────────────────────────────── */}
      <section className="py-20 md:py-28 bg-white">
        <div className="container-pad">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="eyebrow mb-3 block">How We Work</span>
            <h2 className="text-3xl md:text-4xl font-bold text-mc-forest">Our Approach</h2>
            <p className="mt-4 text-gray-600 leading-relaxed">
              Three pillars drive everything we do — and everything that sets MarkoCare apart.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {approachPillars.map(({ icon: Icon, title, desc }) => (
              <div key={title} className="mc-card text-center">
                <div className="w-14 h-14 rounded-2xl bg-mc-leaf-50 border border-mc-leaf-100 flex items-center justify-center mx-auto mb-5">
                  <Icon className="h-7 w-7 text-mc-leaf-600" />
                </div>
                <h3 className="font-bold text-mc-forest mb-3 text-lg">{title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── RN Supervision ─────────────────────────────────────────────── */}
      <section className="py-20 md:py-28 bg-mc-sage">
        <div className="container-pad">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="eyebrow mb-3 block">Clinical Oversight</span>
            <h2 className="text-3xl md:text-4xl font-bold text-mc-forest">
              Our RN Supervision Model
            </h2>
            <p className="mt-4 text-gray-600 leading-relaxed">
              Every client care plan is developed, implemented, and monitored by a Registered
              Nurse. This clinical backbone is non-negotiable.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {rnSteps.map(({ icon: Icon, title, desc }) => (
              <div key={title} className="mc-card-hover text-center">
                <div className="w-14 h-14 rounded-2xl bg-mc-leaf-100 flex items-center justify-center mx-auto mb-5">
                  <Icon className="h-7 w-7 text-mc-leaf-700" />
                </div>
                <h3 className="font-bold text-mc-forest mb-3">{title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── W2 Employment Model ─────────────────────────────────────────── */}
      <section className="py-20 md:py-28 bg-white">
        <div className="container-pad">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
            <div>
              <span className="eyebrow mb-3 block">The W2 Difference</span>
              <h2 className="text-3xl md:text-4xl font-bold text-mc-forest mb-5">
                Why We Hire W2 Employees — Not Contractors
              </h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                Many home care agencies classify caregivers as independent contractors to
                reduce their own costs. We chose a different path. Every MarkoCare caregiver
                is a W2 employee — because it protects you, your family, and the caregivers
                who serve you.
              </p>
              <ul className="space-y-3">
                {w2Benefits.map((b) => (
                  <li key={b} className="flex items-start gap-3 text-sm text-gray-700">
                    <CheckCircle className="h-4 w-4 text-mc-leaf-500 shrink-0 mt-0.5" />
                    {b}
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-3xl bg-mc-forest text-white p-8 md:p-10">
              <Award className="h-10 w-10 text-mc-leaf-400 mb-5" />
              <h3 className="text-2xl font-bold mb-3">Insurance &amp; Coverage Statement</h3>
              <p className="text-white/80 leading-relaxed mb-4 text-sm">
                MarkoCare carries comprehensive general liability insurance and workers&rsquo;
                compensation coverage for all W2 employees. Because our caregivers are
                employees — not independent contractors — our agency assumes full employer
                responsibility during all client assignments.
              </p>
              <p className="text-white/80 leading-relaxed text-sm">
                We are actively working toward Medicaid provider enrollment with the Maryland
                Department of Health. In the meantime, we serve private-pay clients and assist
                families in exploring all available funding options including long-term care insurance.
              </p>
              <div className="mt-6 flex flex-col gap-2">
                <a
                  href={`mailto:${brand.email}`}
                  className="text-mc-leaf-300 hover:text-mc-leaf-200 text-sm font-medium transition-colors"
                >
                  {brand.email}
                </a>
                <a
                  href={`tel:${brand.phone}`}
                  className="text-mc-leaf-300 hover:text-mc-leaf-200 text-sm font-medium transition-colors"
                >
                  {brand.phoneDisplay}
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Hiring & Vetting Timeline ───────────────────────────────────── */}
      <section className="py-20 md:py-28 bg-mc-sage">
        <div className="container-pad">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="eyebrow mb-3 block">Hiring Standards</span>
            <h2 className="text-3xl md:text-4xl font-bold text-mc-forest">
              How We Hire Our Caregivers
            </h2>
            <p className="mt-4 text-gray-600 leading-relaxed">
              Our multi-step vetting process ensures every caregiver who enters a client&rsquo;s
              home meets our high standards of professionalism, skill, and character.
            </p>
          </div>
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {hiringSteps.map((step, i) => (
                <div
                  key={step.step}
                  className="flex gap-5 rounded-2xl border border-mc-stone bg-white p-5 shadow-premium"
                >
                  <div className="shrink-0">
                    <div className="w-10 h-10 rounded-xl bg-mc-leaf-50 border border-mc-leaf-100 flex items-center justify-center">
                      <span className="text-xs font-bold text-mc-leaf-600">{step.step}</span>
                    </div>
                    {i < hiringSteps.length - 1 && i % 2 === 0 && (
                      <div className="hidden" />
                    )}
                  </div>
                  <div>
                    <h3 className="font-bold text-mc-forest mb-1">{step.title}</h3>
                    <p className="text-sm text-gray-600 leading-relaxed">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Office Location ─────────────────────────────────────────────── */}
      <section className="py-20 bg-white">
        <div className="container-pad">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-10">
              <span className="eyebrow mb-3 block">Our Office</span>
              <h2 className="text-3xl font-bold text-mc-forest">Find Us in Columbia, MD</h2>
            </div>
            <div className="rounded-3xl border border-mc-stone bg-mc-cream overflow-hidden shadow-premium">
              {/* Map-style color block */}
              <div className="h-28 bg-mc-leaf-50 border-b border-mc-stone flex items-center justify-center">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-mc-leaf-500 flex items-center justify-center shadow-float">
                    <MapPin className="h-5 w-5 text-white" />
                  </div>
                  <span className="text-sm font-semibold text-mc-forest">Columbia, Maryland</span>
                </div>
              </div>
              <div className="p-8 grid grid-cols-1 sm:grid-cols-3 gap-6">
                <div className="flex items-start gap-3">
                  <Building2 className="h-5 w-5 text-mc-leaf-500 shrink-0 mt-0.5" />
                  <div>
                    <p className="text-xs font-semibold text-mc-leaf-600 uppercase tracking-wide mb-1">Address</p>
                    <p className="text-sm text-gray-700 leading-relaxed">{brand.address}</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Phone className="h-5 w-5 text-mc-leaf-500 shrink-0 mt-0.5" />
                  <div>
                    <p className="text-xs font-semibold text-mc-leaf-600 uppercase tracking-wide mb-1">Phone</p>
                    <a
                      href={`tel:${brand.phone}`}
                      className="text-sm text-gray-700 hover:text-mc-leaf-600 transition-colors font-medium"
                    >
                      {brand.phoneDisplay}
                    </a>
                    <p className="text-xs text-gray-500 mt-1">{brand.officeHours}</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Mail className="h-5 w-5 text-mc-leaf-500 shrink-0 mt-0.5" />
                  <div>
                    <p className="text-xs font-semibold text-mc-leaf-600 uppercase tracking-wide mb-1">Email</p>
                    <a
                      href={`mailto:${brand.email}`}
                      className="text-sm text-gray-700 hover:text-mc-leaf-600 transition-colors font-medium"
                    >
                      {brand.email}
                    </a>
                    <p className="text-xs text-mc-leaf-600 font-medium mt-1">{brand.emergencyLine}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Minimal CTA ─────────────────────────────────────────────────── */}
      <section className="py-16 bg-mc-sage border-t border-mc-stone">
        <div className="container-pad text-center max-w-xl mx-auto">
          <h2 className="text-2xl font-bold text-mc-forest mb-3">
            Ready to Start Your Care Journey?
          </h2>
          <p className="text-gray-600 mb-7 leading-relaxed">
            Our care coordinators are here to listen, answer your questions, and guide your family through next steps — with no obligation.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/contact" className="btn-mc-primary">
              Request Free Assessment <ArrowRight className="h-4 w-4" />
            </Link>
            <a
              href={`tel:${brand.phone}`}
              className="text-sm font-semibold text-mc-forest hover:text-mc-leaf-600 transition-colors"
            >
              Call {brand.phoneDisplay}
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
