import type { Metadata } from 'next';
import { CheckCircle, Clock, Phone, FileText, UserCheck, Stethoscope, Shield, Download } from 'lucide-react';
import { brand } from '@/config/brand';
import ReferralForm from '@/components/forms/ReferralForm';
import CTABanner from '@/components/sections/CTABanner';
import SectionHeader from '@/components/ui/SectionHeader';

export const metadata: Metadata = {
  title: 'Referral Partners – Hospital & Discharge Planner Network | MarkoCare',
  description:
    'Partner with MarkoCare for fast, reliable home care placement. We serve Maryland discharge planners, hospitals, Johns Hopkins IPOP teams, and case managers with 24-hour placement readiness.',
  alternates: { canonical: `${brand.siteUrl}/referral-partners` },
};

const advantages = [
  {
    icon: Clock,
    title: '24-Hour Placement Readiness',
    desc: 'We can mobilize a caregiver within 24 hours for urgent discharges — reducing length-of-stay risk and preventing unsafe discharge gaps.',
  },
  {
    icon: UserCheck,
    title: 'W2 Employee Model',
    desc: 'All our caregivers are W2 employees — fully vetted, insured, and accountable. No staffing agency uncertainty or independent contractor gaps.',
  },
  {
    icon: Stethoscope,
    title: 'RN Supervision',
    desc: 'A Registered Nurse develops and supervises every care plan. Clinical communication with your care team is standard.',
  },
  {
    icon: Shield,
    title: 'Insurance Verified',
    desc: 'We verify insurance and payer status upfront to prevent coverage surprises. Medicaid readiness positioning in progress.',
  },
  {
    icon: CheckCircle,
    title: 'Background-Checked Caregivers',
    desc: 'State and federal background checks on every caregiver — giving you confidence in who enters your patient\'s home.',
  },
  {
    icon: Phone,
    title: 'Dedicated Intake Line',
    desc: 'Referral partners reach a live care coordinator — not a voicemail — for time-sensitive placements.',
  },
];

const supportedPrograms = [
  'Johns Hopkins IPOP (Intensive Patient Outreach Program)',
  'Hospital discharge planning teams',
  'Social workers and case managers',
  'Primary care physician offices',
  'Rehabilitation centers and SNFs',
  'Oncology care teams',
  'Palliative care programs',
  'ACO and value-based care networks',
];

export default function ReferralPartnersPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-brand-navy-900 text-white py-16 md:py-20">
        <div className="container-pad">
          <div className="max-w-3xl">
            <span className="badge-green mb-4 inline-flex">Referral Partners</span>
            <h1 className="text-4xl md:text-5xl font-bold mb-5">
              A Home Care Partner You Can Count On
            </h1>
            <p className="text-lg text-white/80 leading-relaxed mb-6">
              MarkoCare is built for hospital discharge planners, case managers, and IPOP teams
              who need fast, reliable, and clinically sound home care placement in Maryland.
            </p>
            <div className="flex flex-wrap gap-3">
              {[
                '24-Hour Placement',
                'W2 Caregivers',
                'RN Supervised',
                'Background Checked',
                'Insurance Verified',
              ].map((tag) => (
                <span key={tag} className="badge-green text-sm px-4 py-1.5">{tag}</span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Advantages */}
      <section className="section-pad bg-white">
        <div className="container-pad">
          <SectionHeader
            badge="Why Partner With Us"
            title="What Makes MarkoCare the Right Referral Choice"
            subtitle="We are built from the ground up to support the needs of Maryland's clinical referral community."
          />
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {advantages.map(({ icon: Icon, title, desc }) => (
              <div key={title} className="card-hover">
                <div className="w-11 h-11 rounded-xl bg-brand-navy-100 flex items-center justify-center mb-4">
                  <Icon className="h-5 w-5 text-brand-navy-700" />
                </div>
                <h3 className="font-semibold text-brand-navy-800 mb-2">{title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Programs we support */}
      <section className="section-pad bg-brand-navy-50">
        <div className="container-pad">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="badge-navy mb-3 inline-flex">Programs We Support</span>
              <h2 className="section-heading mb-5">
                Supporting Maryland&apos;s Clinical Community
              </h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                We work with a broad range of clinical and care coordination teams across Maryland
                to ensure patients receive seamless, safe transitions to home care.
              </p>
              <ul className="space-y-2.5">
                {supportedPrograms.map((program) => (
                  <li key={program} className="flex items-center gap-2.5 text-sm text-gray-700">
                    <CheckCircle className="h-4 w-4 text-brand-green-600 shrink-0" />
                    {program}
                  </li>
                ))}
              </ul>
            </div>

            {/* Intake process */}
            <div className="space-y-4">
              <h3 className="text-xl font-bold text-brand-navy-800">Our Referral Intake Process</h3>
              {[
                { step: '1', title: 'Submit Referral', desc: 'Use the form below or call our dedicated intake line.' },
                { step: '2', title: 'Insurance Verification', desc: 'We verify coverage within 2 hours during business hours.' },
                { step: '3', title: 'Caregiver Match', desc: 'We identify and confirm the best caregiver match for the patient.' },
                { step: '4', title: 'RN Assessment', desc: 'Our RN conducts an intake assessment and develops the care plan.' },
                { step: '5', title: 'Care Begins', desc: 'Caregiver reports to patient home — often within 24 hours of referral.' },
              ].map((item) => (
                <div key={item.step} className="flex items-start gap-4 rounded-xl bg-white border border-gray-100 p-4 shadow-sm">
                  <div className="w-8 h-8 rounded-lg bg-brand-green-600 text-white text-sm font-bold flex items-center justify-center shrink-0">
                    {item.step}
                  </div>
                  <div>
                    <p className="font-semibold text-brand-navy-800 text-sm">{item.title}</p>
                    <p className="text-xs text-gray-600 mt-0.5">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Referral form */}
      <section className="section-pad bg-white" id="referral-form">
        <div className="container-pad">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <SectionHeader
                badge="Submit a Referral"
                title="Fast, Secure Referral Intake"
                subtitle="Complete the form to submit a patient referral. We respond within 2 business hours."
                align="left"
              />

              {/* PDF download placeholder */}
              <div className="mt-6 rounded-2xl border border-dashed border-brand-navy-300 bg-brand-navy-50 p-5 flex items-center gap-4">
                <FileText className="h-8 w-8 text-brand-navy-500 shrink-0" />
                <div>
                  <p className="font-semibold text-brand-navy-700 text-sm">
                    Referral Partner Information Packet
                  </p>
                  <p className="text-xs text-gray-500 mt-0.5">
                    Download our referral guide, service capabilities, and insurance information.
                  </p>
                  <button className="mt-2 text-xs text-brand-green-700 font-semibold flex items-center gap-1 hover:underline">
                    <Download className="h-3.5 w-3.5" />
                    Coming Soon — Contact us for the packet
                  </button>
                  {/* TODO: Replace with actual PDF download link */}
                </div>
              </div>

              <div className="mt-6 rounded-2xl bg-brand-green-50 border border-brand-green-200 p-5">
                <h3 className="font-semibold text-brand-navy-800 mb-2 text-sm">Urgent Placement?</h3>
                <p className="text-xs text-gray-600 mb-3">
                  For immediate discharge placements, call our intake line directly.
                </p>
                <a
                  href={`tel:${brand.phone}`}
                  className="btn-primary text-sm py-2"
                >
                  <Phone className="h-4 w-4" />
                  Call {brand.phoneDisplay}
                </a>
              </div>
            </div>

            <div className="rounded-3xl border border-gray-100 bg-brand-slate p-7">
              <ReferralForm />
            </div>
          </div>
        </div>
      </section>

      <CTABanner
        title="Build a Partnership That Serves Your Patients"
        subtitle="MarkoCare is committed to being Maryland's most responsive, reliable home care referral partner."
        variant="green"
      />
    </>
  );
}
