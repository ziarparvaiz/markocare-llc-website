import type { Metadata } from 'next';
import { brand } from '@/config/brand';

export const metadata: Metadata = {
  title: 'Privacy Policy | MarkoCare',
  description: 'MarkoCare\'s privacy policy — how we collect, use, and protect your personal information.',
  alternates: { canonical: `${brand.siteUrl}/legal/privacy` },
};

export default function PrivacyPage() {
  return (
    <>
      <section className="bg-brand-navy-800 text-white py-12">
        <div className="container-pad max-w-3xl">
          <h1 className="text-4xl font-bold mb-3">Privacy Policy</h1>
          <p className="text-white/70 text-sm">Effective Date: January 1, 2025</p>
        </div>
      </section>

      <section className="section-pad bg-white">
        <div className="container-pad max-w-4xl">
          <div className="prose-care max-w-none space-y-8">

            <div>
              <h2>1. Introduction</h2>
              <p>
                MarkoCare (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;) is committed to protecting your privacy.
                This Privacy Policy explains how we collect, use, disclose, and safeguard your
                information when you visit our website or contact us for home care services.
              </p>
            </div>

            <div>
              <h2>2. Information We Collect</h2>
              <p>We may collect the following types of information:</p>
              <ul>
                <li><strong>Personal Identification Information:</strong> Name, phone number, email address, physical address.</li>
                <li><strong>Health-Related Information:</strong> Care needs descriptions provided voluntarily through assessment forms.</li>
                <li><strong>Professional Information:</strong> Title, organization, and professional contact details for referral partners.</li>
                <li><strong>Employment Information:</strong> Certifications, experience, and availability for caregiver applicants.</li>
                <li><strong>Usage Data:</strong> IP address, browser type, pages visited, and time spent on our website.</li>
              </ul>
            </div>

            <div>
              <h2>3. How We Use Your Information</h2>
              <p>We use collected information to:</p>
              <ul>
                <li>Respond to inquiries and coordinate home care services</li>
                <li>Process referrals and care applications</li>
                <li>Communicate with clients, families, and referral partners</li>
                <li>Improve our website and service offerings</li>
                <li>Comply with applicable legal and regulatory requirements</li>
              </ul>
            </div>

            <div>
              <h2>4. Health Information & HIPAA</h2>
              <p>
                Any protected health information (PHI) shared with us in connection with care
                coordination is handled in accordance with the Health Insurance Portability and
                Accountability Act (HIPAA). We do not sell, rent, or trade PHI. PHI is used solely
                for treatment, payment, and operations (TPO) purposes as permitted by HIPAA.
              </p>
            </div>

            <div>
              <h2>5. Information Sharing</h2>
              <p>
                We do not sell your personal information to third parties. We may share information
                with:
              </p>
              <ul>
                <li>Care team members as necessary for service delivery</li>
                <li>Service providers who assist in our operations (under confidentiality agreements)</li>
                <li>Legal authorities when required by law</li>
              </ul>
            </div>

            <div>
              <h2>6. Data Security</h2>
              <p>
                We implement reasonable administrative, technical, and physical safeguards to
                protect your information. However, no method of transmission over the internet or
                electronic storage is 100% secure.
              </p>
            </div>

            <div>
              <h2>7. Your Rights</h2>
              <p>You have the right to:</p>
              <ul>
                <li>Access the personal information we hold about you</li>
                <li>Request correction of inaccurate information</li>
                <li>Request deletion of your information (subject to legal retention requirements)</li>
                <li>Opt out of marketing communications at any time</li>
              </ul>
            </div>

            <div>
              <h2>8. Contact Us</h2>
              <p>
                For privacy-related questions or requests, contact us at{' '}
                <a href={`mailto:${brand.email}`} className="text-brand-green-700 underline">
                  {brand.email}
                </a>{' '}
                or call{' '}
                <a href={`tel:${brand.phone}`} className="text-brand-green-700 underline">
                  {brand.phoneDisplay}
                </a>.
              </p>
            </div>

            <p className="text-xs text-gray-400 border-t border-gray-100 pt-5">
              Last updated: January 2025. We reserve the right to update this policy at any time.
              Changes will be posted on this page with an updated effective date.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
