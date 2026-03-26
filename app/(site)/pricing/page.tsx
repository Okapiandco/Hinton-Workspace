import { Metadata } from 'next'
import Section from '@/components/ui/Section'
import Button from '@/components/ui/Button'
import SchemaScript from '@/components/SchemaScript'
import { priceSchema } from '@/lib/schema'

export const metadata: Metadata = {
  title: 'Pricing – Membership Options at Hinton Workspace',
  description:
    'Explore Hinton Workspace pricing: Day Pass £20, The Occasional £49/month, The Regular £99/month, The Resident £249/month. No long-term commitments.',
  alternates: {
    canonical: 'https://hintonworkspace.co.uk/pricing',
  },
  openGraph: {
    title: 'Pricing – Membership Options at Hinton Workspace',
    description:
      'Explore Hinton Workspace pricing: Day Pass £20, The Occasional £49/month, The Regular £99/month, The Resident £249/month.',
    url: 'https://hintonworkspace.co.uk/pricing',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Pricing – Membership Options at Hinton Workspace',
    description:
      'Explore Hinton Workspace pricing: Day Pass £20, The Occasional £49/month, The Regular £99/month, The Resident £249/month.',
  },
}

const spacebringUrl = `${process.env.NEXT_PUBLIC_SPACEBRING_BASE_URL}?organizationId=${process.env.NEXT_PUBLIC_SPACEBRING_ORG_ID}`

const plans = [
  {
    title: 'Day Pass',
    price: '£20',
    period: '',
    description: 'Perfect for occasional visits.',
    href: 'https://app.spacebring.com/hintonworkspace/locations/8245e082-00fe-4287-b0f3-28767d6bbb50/desks/c6c1f2e6-6645-43e3-acd6-e62cd179acf5',
    features: [
      'Tea & coffee',
      'Free parking',
      'Fast wifi',
      'Quiet pods',
    ],
  },
  {
    title: 'The Occasional',
    price: '£49',
    period: '/ month',
    description: 'Use any 4 days in a month (available Monday to Friday)',
    features: [
      'Tea & coffee',
      'Free parking',
      'Fast wifi',
      'Quiet pods',
    ],
  },
  {
    title: 'The Regular',
    price: '£99',
    period: '/ month',
    description: 'Use any 8 days in a month (available Monday to Friday)',
    featured: true,
    badge: 'BEST VALUE',
    features: [
      'Tea & coffee',
      'Free parking',
      'Fast wifi',
      'Quiet pods',
    ],
  },
  {
    title: 'The Resident',
    price: '£249',
    period: '/ month',
    description: 'For dedicated professionals',
    features: [
      'Unlimited workspace',
      '24/7 access',
      'Meeting rooms',
      'Community events',
      'Tea & coffee',
      'Free parking',
      'Fast wifi',
    ],
  },
]

const faqs = [
  {
    q: 'Can I upgrade or downgrade my membership?',
    a: "Yes, you can change your plan at any time. We'll prorate the cost based on your usage.",
  },
  {
    q: 'Is there a long-term contract required?',
    a: 'No. All our memberships are flexible with no long-term contracts. Cancel anytime.',
  },
  {
    q: 'What about extra meeting room bookings?',
    a: 'Extra meeting room bookings are available as add-ons. Contact us for pricing.',
  },
]

const priceSchemas = plans.map((plan) => priceSchema({
  name: plan.title,
  price: plan.price.replace('£', ''),
  description: plan.description,
}))

export default function PricingPage() {
  return (
    <>
      <SchemaScript schema={{
        '@context': 'https://schema.org',
        '@type': 'CoworkingSpace',
        name: 'Hinton Workspace',
        url: 'https://hintonworkspace.co.uk',
        makesOffer: priceSchemas,
      }} />

      {/* Header */}
      <Section className="pt-32 pb-16">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-5xl font-serif font-bold text-dark-green mb-6">
            Membership & Pricing
          </h1>
          <p className="text-xl font-sans text-gray-700">
            Flexible options designed to suit your work style. No long-term
            commitments required.
          </p>
        </div>
      </Section>

      {/* Pricing Cards */}
      <Section bgColor="white">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {plans.map((plan, idx) => (
            <div
              key={idx}
              className={`rounded-lg p-8 ${
                plan.featured
                  ? 'bg-dark-green text-white scale-105 shadow-xl'
                  : 'bg-gray-50 text-gray-900 border border-light-pink'
              }`}
            >
              {plan.badge && (
                <div
                  className={`${plan.featured ? 'bg-pink text-dark-green' : 'bg-dark-green text-white'} px-4 py-1 rounded-full text-sm font-bold inline-block mb-4`}
                >
                  {plan.badge}
                </div>
              )}
              <h3
                className={`text-2xl font-serif font-bold mb-2 ${plan.featured ? 'text-white' : 'text-dark-green'}`}
              >
                {plan.title}
              </h3>
              <p
                className={`font-sans text-sm mb-4 ${plan.featured ? 'text-gray-200' : 'text-gray-600'}`}
              >
                {plan.description}
              </p>
              <div
                className={`text-4xl font-bold mb-1 ${plan.featured ? 'text-pink' : 'text-dark-green'}`}
              >
                {plan.price}
              </div>
              <p
                className={`font-sans text-sm mb-6 ${plan.featured ? 'text-gray-300' : 'text-gray-500'}`}
              >
                {plan.period}
              </p>
              <ul
                className={`space-y-3 mb-8 font-sans text-sm ${plan.featured ? 'text-gray-100' : 'text-gray-700'}`}
              >
                {plan.features.map((feature, fidx) => (
                  <li key={fidx} className="flex items-start gap-3">
                    <span
                      className={`text-lg leading-none ${plan.featured ? 'text-pink' : 'text-dark-green'}`}
                    >
                      &#10003;
                    </span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <a
                href={plan.href || spacebringUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  variant={plan.featured ? 'secondary' : 'primary'}
                  className="w-full"
                >
                  Get Started
                </Button>
              </a>
            </div>
          ))}
        </div>
      </Section>

      {/* FAQ Preview */}
      <Section>
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl font-serif font-bold text-dark-green mb-8 text-center">
            Questions?
          </h2>
          <div className="space-y-6">
            {faqs.map((faq, idx) => (
              <div key={idx}>
                <h3 className="font-serif font-bold text-dark-green mb-2">
                  {faq.q}
                </h3>
                <p className="font-sans text-gray-700">{faq.a}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <a href="/faqs">
              <Button variant="outline" size="lg">
                View All FAQs
              </Button>
            </a>
          </div>
        </div>
      </Section>
    </>
  )
}
