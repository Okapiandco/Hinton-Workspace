import { Metadata } from 'next'
import Section from '@/components/ui/Section'
import Button from '@/components/ui/Button'

export const metadata: Metadata = {
  title: 'Contact Hinton Workspace | Get in Touch',
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
            Get in Touch
          </h1>
          <p className="text-xl font-sans text-gray-700">
            If you are interested in finding out more about our workspace please get in touch.
          </p>
        </div>
      </Section>

      {/* Contact Info + Form */}
      <Section bgColor="white">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Left: Contact Details */}
          <div>
            <div className="space-y-8">
              <div>
                <h3 className="font-serif font-bold text-dark-green mb-2">
                  Address
                </h3>
                <p className="font-sans text-gray-700 leading-relaxed">
                  The Hinton Workspace,
                  <br />
                  The Building Yard,
                  <br />
                  Hinton St Mary,
                  <br />
                  Sturminster Newton,
                  <br />
                  DT10 1NA
                </p>
              </div>

              <div>
                <h3 className="font-serif font-bold text-dark-green mb-2">
                  Tel
                </h3>
                <p className="font-sans text-gray-700">
                  <a
                    href="tel:+441258472623"
                    className="hover:text-pink transition-colors"
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
                    className="hover:text-pink transition-colors"
                  >
                    reception@hintonworkspace.co.uk
                  </a>
                </p>
              </div>

              <div>
                <h3 className="font-serif font-bold text-dark-green mb-2">
                  What3Words
                </h3>
                <div className="space-y-2 font-sans text-gray-700">
                  <p>
                    <strong>Front car park:</strong>{' '}
                    <a
                      href="https://w3w.co/others.evoke.button"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-dark-green hover:text-pink transition-colors underline"
                    >
                      ///others.evoke.button
                    </a>
                  </p>
                  <p>
                    <strong>Back car park:</strong>{' '}
                    <a
                      href="https://w3w.co/actors.overdone.crust"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-dark-green hover:text-pink transition-colors underline"
                    >
                      ///actors.overdone.crust
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

          {/* Right: Contact Form */}
          <div>
            <h2 className="text-2xl font-serif font-bold text-dark-green mb-8">
              Send us a message
            </h2>
            <form className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block font-sans text-sm font-medium text-gray-700 mb-1">First Name</label>
                  <input type="text" placeholder="John" className="w-full border border-gray-300 rounded px-3 py-2 font-sans text-sm focus:outline-none focus:border-dark-green" />
                </div>
                <div>
                  <label className="block font-sans text-sm font-medium text-gray-700 mb-1">Last Name</label>
                  <input type="text" placeholder="Doe" className="w-full border border-gray-300 rounded px-3 py-2 font-sans text-sm focus:outline-none focus:border-dark-green" />
                </div>
              </div>
              <div>
                <label className="block font-sans text-sm font-medium text-gray-700 mb-1">Email</label>
                <input type="email" placeholder="john@example.com" className="w-full border border-gray-300 rounded px-3 py-2 font-sans text-sm focus:outline-none focus:border-dark-green" />
              </div>
              <div>
                <label className="block font-sans text-sm font-medium text-gray-700 mb-1">Phone (optional)</label>
                <input type="tel" placeholder="07123 456789" className="w-full border border-gray-300 rounded px-3 py-2 font-sans text-sm focus:outline-none focus:border-dark-green" />
              </div>
              <div>
                <label className="block font-sans text-sm font-medium text-gray-700 mb-1">Message</label>
                <textarea rows={4} placeholder="Tell us about your workspace needs..." className="w-full border border-gray-300 rounded px-3 py-2 font-sans text-sm focus:outline-none focus:border-dark-green resize-y" />
              </div>
              <button type="submit" className="w-full bg-dark-green text-white py-3 rounded font-sans font-semibold hover:bg-[#0F2321] transition-colors">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </Section>

      {/* Google Maps */}
      <Section>
        <div className="text-center mb-8">
          <h2 className="text-3xl font-serif font-bold text-dark-green mb-4">Find Us on Google Maps</h2>
        </div>
        <div className="max-w-5xl mx-auto rounded-lg overflow-hidden shadow-lg">
          <iframe
            src="https://maps.google.com/maps?q=Hinton+Workspace,+The+Building+Yard,+Hinton+St+Mary,+Sturminster+Newton,+DT10+1NA&output=embed"
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Hinton Workspace location on Google Maps"
          />
        </div>
      </Section>
    </>
  )
}
