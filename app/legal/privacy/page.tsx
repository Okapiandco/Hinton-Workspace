import { Metadata } from 'next'
import Section from '@/components/ui/Section'

export const metadata: Metadata = {
  title: 'Privacy Policy | Hinton Workspace',
  description: 'Privacy policy for Hinton Workspace.',
}

export default function PrivacyPage() {
  return (
    <Section className="pt-32 pb-16">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-5xl font-serif font-bold text-dark-green mb-8">
          Privacy Policy
        </h1>

        <div className="prose font-sans text-gray-700 space-y-8">
          <div>
            <h2 className="text-2xl font-serif font-bold text-dark-green mb-4">
              1. Introduction
            </h2>
            <p>
              Hinton Workspace (&ldquo;we&rdquo;, &ldquo;us&rdquo;,
              &ldquo;our&rdquo;) operates the hintonworkspace.co.uk website.
              This page informs you of our policies regarding the collection,
              use, and disclosure of personal data when you use our service and
              the choices you have associated with that data.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-serif font-bold text-dark-green mb-4">
              2. Information Collection and Use
            </h2>
            <p className="mb-4">
              We collect several different types of information for various
              purposes to provide and improve our service to you.
            </p>
            <h3 className="text-xl font-serif font-bold text-dark-green mt-4 mb-2">
              Types of Data Collected:
            </h3>
            <ul className="list-disc list-inside space-y-2">
              <li>
                Personal Data: Name, email address, phone number, contact
                information
              </li>
              <li>
                Usage Data: Browser type, IP address, pages visited, time spent,
                referrer pages
              </li>
              <li>Cookies and similar tracking technologies</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-serif font-bold text-dark-green mb-4">
              3. Use of Data
            </h2>
            <p className="mb-4">
              Hinton Workspace uses the collected data for various purposes:
            </p>
            <ul className="list-disc list-inside space-y-2">
              <li>To provide and maintain our service</li>
              <li>To notify you about changes to our service</li>
              <li>
                To allow you to participate in interactive features of our
                website
              </li>
              <li>To provide customer support</li>
              <li>
                To gather analysis or valuable information to improve our
                service
              </li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-serif font-bold text-dark-green mb-4">
              4. Data Retention
            </h2>
            <p>
              We will retain your personal data only for as long as is necessary
              for the purposes set out in this privacy policy. We will retain
              and use your personal data to the extent necessary to comply with
              our legal obligations, resolve disputes, and enforce our legal
              agreements and policies.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-serif font-bold text-dark-green mb-4">
              5. Security of Data
            </h2>
            <p>
              The security of your data is important to us but remember that no
              method of transmission over the Internet or method of electronic
              storage is 100% secure. While we strive to use commercially
              acceptable means to protect your personal data, we cannot
              guarantee its absolute security.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-serif font-bold text-dark-green mb-4">
              6. Your Rights
            </h2>
            <p className="mb-4">
              Under GDPR, you have the following rights regarding your personal
              data:
            </p>
            <ul className="list-disc list-inside space-y-2">
              <li>The right to access your personal data</li>
              <li>The right to rectification of inaccurate data</li>
              <li>The right to erasure of your data</li>
              <li>The right to restrict processing</li>
              <li>The right to data portability</li>
              <li>The right to object to processing</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-serif font-bold text-dark-green mb-4">
              7. Contact Us
            </h2>
            <p className="mb-4">
              If you have any questions about this Privacy Policy, please
              contact us at:
            </p>
            <p>
              <strong>Hinton Workspace</strong>
              <br />
              The Building Yard, Hinton St Mary
              <br />
              Sturminster Newton, DT10 1NA
              <br />
              Email: reception@hintonworkspace.co.uk
              <br />
              Phone: 01258 472623
            </p>
          </div>
        </div>
      </div>
    </Section>
  )
}
