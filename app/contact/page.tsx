import type { Metadata } from 'next';
import { Phone, Mail, MapPin, Clock, AlertCircle } from 'lucide-react';
import { brand } from '@/config/brand';
import AssessmentForm from '@/components/forms/AssessmentForm';
import SectionHeader from '@/components/ui/SectionHeader';

export const metadata: Metadata = {
  title: 'Contact Us | MarkoCare Maryland Home Care',
  description:
    'Contact MarkoCare for home care services in Maryland. Request a free assessment, reach our care team, or get directions to our Columbia, MD office.',
  alternates: { canonical: `${brand.siteUrl}/contact` },
};

export default function ContactPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-brand-navy-800 text-white py-16 md:py-18">
        <div className="container-pad max-w-3xl">
          <span className="badge-green mb-4 inline-flex">Contact Us</span>
          <h1 className="text-4xl md:text-5xl font-bold mb-5">
            We&apos;re Here for Your Family
          </h1>
          <p className="text-lg text-white/80 leading-relaxed">
            Whether you have questions, need immediate care, or want to explore your options,
            our care coordinators are ready to help.
          </p>
        </div>
      </section>

      <section className="section-pad bg-white">
        <div className="container-pad">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact details */}
            <div className="space-y-6">
              <h2 className="text-xl font-bold text-brand-navy-800">Get in Touch</h2>

              <div className="space-y-5">
                {/* Phone */}
                <div className="flex items-start gap-4 rounded-2xl border border-brand-green-100 bg-brand-green-50 p-4">
                  <div className="w-10 h-10 rounded-xl bg-brand-green-200 flex items-center justify-center shrink-0">
                    <Phone className="h-5 w-5 text-brand-green-800" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-brand-green-700 uppercase tracking-wide mb-1">
                      Phone (Priority)
                    </p>
                    <a
                      href={`tel:${brand.phone}`}
                      className="text-lg font-bold text-brand-navy-800 hover:text-brand-green-700 transition-colors block"
                    >
                      {brand.phoneDisplay}
                    </a>
                    <p className="text-xs text-gray-500 mt-1">{brand.officeHours}</p>
                  </div>
                </div>

                {/* 24/7 */}
                <div className="flex items-start gap-4 rounded-2xl border border-amber-200 bg-amber-50 p-4">
                  <div className="w-10 h-10 rounded-xl bg-amber-200 flex items-center justify-center shrink-0">
                    <AlertCircle className="h-5 w-5 text-amber-800" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-amber-700 uppercase tracking-wide mb-1">
                      Emergency / 24/7
                    </p>
                    <p className="text-sm font-semibold text-gray-800">{brand.emergencyLine}</p>
                    <p className="text-xs text-gray-500 mt-1">
                      For urgent care needs outside office hours, call our main line — we maintain
                      on-call support.
                    </p>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-brand-navy-100 flex items-center justify-center shrink-0">
                    <Mail className="h-5 w-5 text-brand-navy-700" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-1">Email</p>
                    <a
                      href={`mailto:${brand.email}`}
                      className="text-sm font-semibold text-brand-navy-700 hover:text-brand-green-700 transition-colors"
                    >
                      {brand.email}
                    </a>
                  </div>
                </div>

                {/* Address */}
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-brand-navy-100 flex items-center justify-center shrink-0">
                    <MapPin className="h-5 w-5 text-brand-navy-700" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-1">Office</p>
                    <a
                      href={brand.googleMapsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-brand-navy-700 hover:text-brand-green-700 transition-colors leading-relaxed"
                    >
                      {brand.address}
                    </a>
                  </div>
                </div>

                {/* Hours */}
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-brand-navy-100 flex items-center justify-center shrink-0">
                    <Clock className="h-5 w-5 text-brand-navy-700" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-1">Office Hours</p>
                    <p className="text-sm text-brand-navy-700">{brand.officeHours}</p>
                  </div>
                </div>
              </div>

              {/* Map placeholder */}
              <div className="rounded-2xl border border-gray-200 bg-gray-100 h-48 flex items-center justify-center">
                <div className="text-center">
                  <MapPin className="h-8 w-8 text-gray-400 mx-auto mb-2" />
                  <p className="text-sm text-gray-500">Columbia, MD 21044</p>
                  <a
                    href={brand.googleMapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs text-brand-green-600 font-medium hover:underline mt-1 block"
                  >
                    Open in Google Maps
                  </a>
                  {/* TODO: Embed Google Maps API */}
                </div>
              </div>
            </div>

            {/* Form */}
            <div className="lg:col-span-2">
              <SectionHeader
                badge="Free Assessment"
                title="Request a Free In-Home Assessment"
                subtitle="Tell us about your care needs and a coordinator will reach out within one business day."
                align="left"
              />
              <div className="mt-8 rounded-3xl border border-gray-100 bg-brand-slate p-7">
                <AssessmentForm />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
