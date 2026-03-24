import { Metadata } from 'next'
import Section from '@/components/ui/Section'

export const metadata: Metadata = {
  title: 'Terms & Conditions | Hinton Workspace',
  description: 'Terms and conditions for using Hinton Workspace coworking space, meeting rooms, and event facilities in North Dorset.',
  alternates: {
    canonical: 'https://hintonworkspace.co.uk/legal/terms',
  },
  openGraph: {
    title: 'Terms & Conditions | Hinton Workspace',
    description: 'Terms and conditions for using Hinton Workspace coworking space, meeting rooms, and event facilities in North Dorset.',
    url: 'https://hintonworkspace.co.uk/legal/terms',
    type: 'website',
  },
  twitter: {
    card: 'summary',
    title: 'Terms & Conditions | Hinton Workspace',
    description: 'Terms and conditions for using Hinton Workspace coworking space, meeting rooms, and event facilities in North Dorset.',
  },
}

export default function TermsPage() {
  return (
    <Section className="pt-32 pb-16">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-5xl font-serif font-bold text-dark-green mb-8">
          Terms & Conditions
        </h1>

        <div className="prose font-sans text-gray-700 space-y-8">
          <div>
            <h2 className="text-2xl font-serif font-bold text-dark-green mb-4">
              1. Acceptance of Terms
            </h2>
            <p>
              By accessing and using the Hinton Workspace website and services,
              you accept and agree to be bound by the terms and provision of
              this agreement. If you do not agree to abide by the above, please
              do not use this service.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-serif font-bold text-dark-green mb-4">
              2. Membership Terms
            </h2>
            <p>
              All memberships are provided on a month-to-month basis with no
              long-term contracts. Members may cancel at any time with written
              notice. Day passes are available on a pay-as-you-go basis.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-serif font-bold text-dark-green mb-4">
              3. Use of Facilities
            </h2>
            <p>
              Members and visitors agree to use the facilities responsibly and
              in accordance with our guidelines. This includes maintaining
              cleanliness, respecting shared spaces, and following any posted
              rules or instructions from staff.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-serif font-bold text-dark-green mb-4">
              4. Code of Conduct
            </h2>
            <p>
              Members agree to conduct themselves professionally and
              respectfully at all times. Disruptive behaviour, harassment, or
              violation of others&apos; rights may result in membership
              termination without refund.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-serif font-bold text-dark-green mb-4">
              5. Payment Terms
            </h2>
            <p>
              Monthly memberships are billed in advance. Day passes are payable
              on the day of use. We accept card payments and bank transfers. All
              prices are inclusive of VAT where applicable.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-serif font-bold text-dark-green mb-4">
              6. Liability Disclaimer
            </h2>
            <p>
              Hinton Workspace provides the workspace and facilities &ldquo;as
              is&rdquo; without warranties. We are not liable for loss, theft,
              or damage to personal property. Members are responsible for
              securing their own belongings.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-serif font-bold text-dark-green mb-4">
              7. Intellectual Property
            </h2>
            <p>
              All content on the Hinton Workspace website, including text,
              graphics, logos, and images, is the property of Hinton Workspace
              and is protected by copyright law. You may not reproduce or
              distribute any content without our written permission.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-serif font-bold text-dark-green mb-4">
              8. Changes to Terms
            </h2>
            <p>
              We reserve the right to modify these terms at any time. Changes
              will be effective immediately upon posting to the website. Your
              continued use of our services constitutes acceptance of any
              changes.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-serif font-bold text-dark-green mb-4">
              9. Contact
            </h2>
            <p>
              For questions about these terms, please contact us at
              reception@hintonworkspace.co.uk or 01258 472623.
            </p>
          </div>
        </div>
      </div>
    </Section>
  )
}
