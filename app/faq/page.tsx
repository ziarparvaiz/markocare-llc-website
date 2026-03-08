'use client';

import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { cn } from '@/lib/utils';
import CTABanner from '@/components/sections/CTABanner';

const faqCategories = [
  {
    category: 'About MarkoCare',
    faqs: [
      {
        q: 'Is MarkoCare a licensed home care agency in Maryland?',
        a: 'MarkoCare is actively pursuing licensure as a Residential Service Agency (RSA) with the Maryland Department of Health. We are in the pre-launch phase, preparing all operational systems, clinical protocols, and compliance frameworks. We will begin accepting clients upon receipt of our RSA license.',
      },
      {
        q: 'What is a Residential Service Agency (RSA)?',
        a: 'A Residential Service Agency (RSA) is a type of home care agency licensed by the Maryland Department of Health under COMAR 10.07.14. RSAs provide non-medical home care services including personal care, companion care, and related supportive services. MarkoCare is pursuing RSA licensure.',
      },
      {
        q: 'Where is MarkoCare located?',
        a: 'Our administrative office is located at 10490 Little Patuxent Pkwy #600, Columbia, MD 21044. We provide in-home services throughout Howard, Carroll, Anne Arundel, and Frederick Counties.',
      },
      {
        q: 'What counties does MarkoCare serve?',
        a: 'We currently serve Howard County, Carroll County, Anne Arundel County, and Frederick County in Maryland. If you are in an adjacent area, contact us to discuss whether we can accommodate your needs.',
      },
    ],
  },
  {
    category: 'Services & Care',
    faqs: [
      {
        q: 'What types of home care services does MarkoCare provide?',
        a: 'We offer personal care, companion care, dementia/memory care, respite care, post-hospital support, cancer care support, and IPOP transitional care. All services are delivered by W2 employees under RN supervision.',
      },
      {
        q: 'Do you provide 24-hour or live-in care?',
        a: 'Yes. We offer flexible scheduling including hourly, daily, overnight, and live-in care arrangements depending on client needs and caregiver availability. Contact us to discuss 24-hour or live-in options.',
      },
      {
        q: 'Can I start with just a few hours of care per week?',
        a: 'Absolutely. We offer flexible hourly scheduling. Many clients start with a few hours and expand as their needs change. There is no minimum hour commitment — though some schedules may vary.',
      },
      {
        q: 'Do you provide skilled nursing services?',
        a: 'MarkoCare is a non-medical home care (RSA) agency. We do not provide skilled nursing services directly. However, our Registered Nurse conducts supervisory assessments and develops care plans. For skilled nursing needs, we coordinate with separate skilled home health agencies.',
      },
    ],
  },
  {
    category: 'Caregivers & Hiring',
    faqs: [
      {
        q: 'Are your caregivers employees or independent contractors?',
        a: 'All MarkoCare caregivers are W2 employees. This is a deliberate model choice. W2 employment means caregivers are fully vetted, insured by the agency, trained per our standards, and supervised by our RN — providing far greater accountability than an independent contractor model.',
      },
      {
        q: 'What background checks do caregivers undergo?',
        a: 'Every caregiver undergoes a comprehensive state and federal criminal background check, sex offender registry check, and OIG (Office of Inspector General) exclusion list review. Reference checks are also completed as part of our hiring process.',
      },
      {
        q: 'Will I have the same caregiver each visit?',
        a: 'Caregiver consistency is a priority. We work hard to assign consistent caregivers to each client. In cases of caregiver absence, we provide advance notice and ensure substitute caregivers are fully briefed on the client\'s care plan.',
      },
      {
        q: 'Are caregivers supervised?',
        a: 'Yes. All caregivers work under the supervision of our Registered Nurse, who develops care plans, conducts supervisory home visits, and provides ongoing clinical guidance. Caregivers also have access to on-call supervisor support.',
      },
    ],
  },
  {
    category: 'Insurance & Payment',
    faqs: [
      {
        q: 'Do you accept Medicaid?',
        a: 'MarkoCare is actively positioning for Medicaid provider enrollment with the Maryland Department of Health. Currently, we are serving private-pay clients. We will communicate Medicaid acceptance status as it becomes available.',
      },
      {
        q: 'Does MarkoCare accept private insurance or long-term care insurance?',
        a: 'We work with clients to verify long-term care insurance benefits and other applicable coverage. Contact us to discuss your specific insurance situation and we will do our best to assist with verification.',
      },
      {
        q: 'What are your rates?',
        a: 'Care rates vary based on the level of care, number of hours, and specific client needs. We provide transparent, customized quotes during the free in-home assessment. Contact us for a personalized rate discussion.',
      },
      {
        q: 'Are there any hidden fees?',
        a: 'No. We believe in transparent pricing. All fees are discussed upfront, and there are no hidden charges. Any changes to care scope or rates are communicated in advance.',
      },
    ],
  },
  {
    category: 'Getting Started',
    faqs: [
      {
        q: 'How do I get started with MarkoCare?',
        a: 'The first step is to request a free in-home assessment. Our care coordinator will contact you, discuss your needs, and arrange a home visit from our RN. From there, we develop a care plan and match you with an appropriate caregiver.',
      },
      {
        q: 'How quickly can care start?',
        a: 'For planned care, we typically begin within 48–72 hours of the in-home assessment. For urgent post-hospital discharges, we offer expedited placement — often same-day or next-day. Call us directly for time-sensitive situations.',
      },
      {
        q: 'What happens during the free in-home assessment?',
        a: 'Our Registered Nurse or care coordinator visits your home to evaluate care needs, discuss goals and preferences, assess the home environment for safety, and gather information needed to create a personalized care plan.',
      },
      {
        q: 'Can I change or stop services if my needs change?',
        a: 'Yes. We understand that care needs evolve. You can adjust schedules, change care levels, or discontinue services at any time with reasonable notice. Flexibility is core to how we operate.',
      },
    ],
  },
  {
    category: 'Home Care vs. Other Options',
    faqs: [
      {
        q: 'How is home care different from assisted living or a nursing home?',
        a: 'Home care allows your loved one to remain in their own home — surrounded by familiar belongings, routines, and community — while receiving professional support. It is typically more affordable than residential care facilities and offers far greater scheduling flexibility. Many families find that clients do better emotionally and physically when they can age or recover in their own space.',
      },
      {
        q: 'Is home care a cost-effective alternative to a care facility?',
        a: 'For many families, yes. Home care can be significantly less expensive than assisted living or skilled nursing facilities, especially when only part-time support is needed. It also eliminates the stress and disruption of relocating your loved one. We are happy to discuss a cost comparison during your free assessment.',
      },
      {
        q: 'Can home care be used alongside other medical services?',
        a: 'Absolutely. MarkoCare works alongside skilled home health agencies, physical therapists, occupational therapists, physicians, and specialists to provide coordinated, comprehensive care. We complement — not replace — the medical services your loved one may be receiving.',
      },
    ],
  },
  {
    category: 'Why MarkoCare',
    faqs: [
      {
        q: 'What makes MarkoCare different from other home care agencies?',
        a: 'MarkoCare combines clinical excellence with genuine human warmth. Our care is supervised by registered nurses, our caregivers are W2 employees who are thoroughly vetted, and our care plans are truly individualized — not templated. Beyond credentials, we are a local agency with deep community roots, and we treat every client with the dignity and respect their family expects.',
      },
      {
        q: 'What if I am not happy with my assigned caregiver?',
        a: 'Your comfort and satisfaction are our priority. If a caregiver is not the right fit — for any reason — please let us know immediately. We will arrange a replacement promptly and without judgment. Good matching matters, and we take the time to get it right.',
      },
    ],
  },
];

function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="rounded-2xl border border-gray-100 bg-white overflow-hidden">
      <button
        className="w-full flex items-center justify-between gap-4 px-6 py-4 text-left"
        onClick={() => setOpen(!open)}
        aria-expanded={open}
      >
        <span className="font-semibold text-brand-navy-800 text-sm">{q}</span>
        <ChevronDown
          className={cn(
            'h-4 w-4 text-brand-green-600 shrink-0 transition-transform duration-200',
            open && 'rotate-180'
          )}
        />
      </button>
      {open && (
        <div className="px-6 pb-5">
          <p className="text-sm text-gray-600 leading-relaxed">{a}</p>
        </div>
      )}
    </div>
  );
}

export default function FAQPage() {
  return (
    <>
      <section className="bg-mc-forest text-white py-16 md:py-20">
        <div className="container-pad max-w-3xl">
          <span className="badge-green mb-4 inline-flex">FAQ</span>
          <h1 className="text-4xl md:text-5xl font-bold mb-5">
            Frequently Asked Questions
          </h1>
          <p className="text-lg text-white/80 leading-relaxed">
            We know choosing home care raises a lot of questions. Here are honest, straightforward
            answers to the ones we hear most often — so your family can make confident, informed decisions.
          </p>
        </div>
      </section>

      <section className="section-pad bg-brand-slate">
        <div className="container-pad max-w-4xl">
          <div className="space-y-12">
            {faqCategories.map((cat) => (
              <div key={cat.category}>
                <h2 className="text-xl font-bold text-brand-navy-800 mb-5 pb-2 border-b border-gray-200">
                  {cat.category}
                </h2>
                <div className="space-y-3">
                  {cat.faqs.map((faq) => (
                    <FAQItem key={faq.q} q={faq.q} a={faq.a} />
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 rounded-3xl bg-brand-navy-50 border border-brand-navy-100 p-8 text-center">
            <h3 className="text-xl font-bold text-brand-navy-800 mb-3">
              Have a Question We Didn&apos;t Answer?
            </h3>
            <p className="text-gray-600 mb-5">
              Our care coordinators are happy to answer any questions you have.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <a href="tel:+12404324374" className="btn-primary">
                Call (240) 432-4374
              </a>
              <a href="mailto:hello@markocare.com" className="btn-outline">
                Email Us
              </a>
            </div>
          </div>
        </div>
      </section>

      <CTABanner title="Ready to Start Care?" subtitle="Request a free in-home assessment today and let us answer your questions in person." />
    </>
  );
}
