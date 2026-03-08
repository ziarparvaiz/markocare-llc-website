import type { Metadata } from 'next';
import { brand } from '@/config/brand';

export const metadata: Metadata = {
  title: 'Terms of Service | MarkoCare',
  description: 'MarkoCare\'s terms of service governing use of our website and home care services in Maryland.',
  alternates: { canonical: `${brand.siteUrl}/legal/terms` },
  openGraph: {
    title: 'Terms of Service | MarkoCare',
    description: 'MarkoCare\'s terms of service for website use and home care service agreements in Maryland.',
  },
  robots: { index: false, follow: false },
};

export default function TermsPage() {
  return (
    <>
      <section className="bg-mc-forest text-white py-12">
        <div className="container-pad max-w-3xl">
          <h1 className="text-4xl font-bold mb-3">Terms of Service</h1>
          <p className="text-white/70 text-sm">Effective Date: January 1, 2025</p>
        </div>
      </section>

      <section className="section-pad bg-white">
        <div className="container-pad max-w-4xl">
          <div className="prose-care max-w-none space-y-8">
            <div>
              <h2>1. Agreement to Terms</h2>
              <p>
                By accessing or using the MarkoCare website (markocare.com), you agree to be bound
                by these Terms of Use. The MarkoCare website is provided for informational purposes
                only. Content on this site does not constitute medical advice and should not be used
                as a substitute for professional medical, nursing, or healthcare guidance. If you do
                not agree to these terms, please discontinue use of the site.
              </p>
            </div>

            <div>
              <h2>2. Services Description</h2>
              <p>
                MarkoCare is a Maryland Residential Service Agency (RSA) — currently in the
                licensure process — providing non-medical home care services in Maryland. Services
                include personal care, companion care, respite care, and related supportive services.
                We do not provide skilled medical or nursing services.
              </p>
            </div>

            <div>
              <h2>3. No Medical Advice</h2>
              <p>
                Content on this website is provided for informational purposes only and does not
                constitute medical advice, diagnosis, or treatment. Always seek guidance from a
                qualified healthcare provider for medical decisions.
              </p>
            </div>

            <div>
              <h2>4. Service Agreements</h2>
              <p>
                Formal service agreements will be provided separately prior to the commencement
                of any home care services. Website content does not constitute a service contract.
              </p>
            </div>

            <div>
              <h2>5. Intellectual Property &amp; Website Use</h2>
              <p>
                All content on the MarkoCare website — including text, images, graphics, logos, and
                downloadable materials — is the property of MarkoCare LLC or its content licensors
                and is protected by applicable copyright and intellectual property laws. You may print
                or download content for personal, non-commercial use. Reproduction or distribution
                for any other purpose without written permission from MarkoCare LLC is prohibited.
                You agree to use this website only for lawful purposes and in a manner that does not
                infringe the rights of others or restrict their use of the site.
              </p>
            </div>

            <div>
              <h2>6. Limitation of Liability</h2>
              <p>
                MarkoCare shall not be liable for any indirect, incidental, or consequential damages
                arising from your use of this website. Our total liability for any claim shall not
                exceed the amount paid by you for services in the preceding 30 days.
              </p>
            </div>

            <div>
              <h2>7. Changes to Terms</h2>
              <p>
                We reserve the right to modify these terms at any time. Updated terms will be posted
                on this page. Continued use of our website constitutes acceptance of revised terms.
              </p>
            </div>

            <div>
              <h2>8. Governing Law</h2>
              <p>
                These terms are governed by the laws of the State of Maryland, without regard to
                conflict of law provisions.
              </p>
            </div>

            <div>
              <h2>9. Contact</h2>
              <p>
                Questions about these terms? Contact us at{' '}
                <a href={`mailto:${brand.email}`} className="text-brand-green-700 underline">
                  {brand.email}
                </a>.
              </p>
            </div>

            <p className="text-xs text-gray-400 border-t border-gray-100 pt-5">
              Last updated: January 2025.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
