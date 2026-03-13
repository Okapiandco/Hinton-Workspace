import { Metadata } from 'next'
import Section from '@/components/ui/Section'
import Button from '@/components/ui/Button'

export const metadata: Metadata = {
  title: 'Contact Hinton Workspace | Book Your Tour',
  description:
    'Get in touch with Hinton Workspace in North Dorset. Phone, email, or book a tour.',
}

const spacebringUrl = `${process.env.NEXT_PUBLIC_SPACEBRING_BASE_URL}?organizationId=${process.env.NEXT_PUBLIC_SPACEBRING_ORG_ID}`

export default function ContactPage() {
  return (
    <>
      {/* Header */}
      <Section className="pt-32 pb-16">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-5xl font-serif font-bold text-dark-green mb-6">
            Plan Your Visit
          </h1>
          <p className="text-xl font-sans text-gray-700">
            Hinton Workspace is set within a peaceful rural estate in North
            Dorset, with free parking and easy access.
          </p>
        </div>
      </Section>

      {/* Contact Info + Form */}
      <Section bgColor="white">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Left: Contact Details */}
          <div>
            <h2 className="text-2xl font-serif font-bold text-dark-green mb-8">
              Get in Touch
            </h2>

            <div className="space-y-8">
              <div>
                <h3 className="font-serif font-bold text-dark-green mb-2">
                  Address
                </h3>
                <p className="font-sans text-gray-700">
                  Hinton Workspace, The Building Yard
                  <br />
                  Hinton St Mary, Sturminster Newton
                  <br />
                  DT10 1NA
                </p>
              </div>

              <div>
                <h3 className="font-serif font-bold text-dark-green mb-2">
                  Phone
                </h3>
                <p className="font-sans text-gray-700">
                  <a
                    href="tel:01258472623"
                    className="hover:text-dark-green transition-colors"
                  >
                    01258 472623
                  </a>
                </p>
              </div>

              <div>
                <h3 className="font-serif font-bold text-dark-green mb-2">
                  Email
                </h3>
                <p className="font-sans text-gray-700">
                  <a
                    href="mailto:reception@hintonworkspace.co.uk"
                    className="hover:text-dark-green transition-colors"
                  >
                    reception@hintonworkspace.co.uk
                  </a>
                </p>
              </div>

              <div>
                <h3 className="font-serif font-bold text-dark-green mb-2">
                  Hours
                </h3>
                <p className="font-sans text-gray-700">
                  9am–5pm, Monday–Friday
                  <br />
                  (Full members 24/7 access)
                </p>
              </div>

              <div>
                <h3 className="font-serif font-bold text-dark-green mb-2">
                  Parking
                </h3>
                <p className="font-sans text-gray-700 mb-4">
                  Free on-site parking available
                </p>
                <div className="space-y-2 font-sans text-sm text-gray-600">
                  <p>
                    <strong>Front car park:</strong>
                    <br />
                    <a
                      href="https://w3w.co/others.evoke.button"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-dark-green hover:underline"
                    >
                      what3words.com/others.evoke.button
                    </a>
                  </p>
                  <p>
                    <strong>Back car park:</strong>
                    <br />
                    <a
                      href="https://w3w.co/actors.overdone.crust"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-dark-green hover:underline"
                    >
                      what3words.com/actors.overdone.crust
                    </a>
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-8">
              <a
                href={spacebringUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button variant="primary" size="lg">
                  Book a Tour
                </Button>
              </a>
            </div>
          </div>

          {/* Right: Keap Form */}
          <div>
            <h2 className="text-2xl font-serif font-bold text-dark-green mb-8">
              Send us a message
            </h2>
            <div
              data-form-slug="7720576008292403"
              data-env="production"
              data-path="contact-us/7720576008292403"
              className="keap-custom-form"
            />
          </div>
        </div>
      </Section>
    </>
  )
}
