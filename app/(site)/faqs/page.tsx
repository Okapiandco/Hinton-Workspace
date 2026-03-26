import { Metadata } from 'next'
import Section from '@/components/ui/Section'
import Accordion from '@/components/ui/Accordion'
import SchemaScript from '@/components/SchemaScript'
import { faqSchema } from '@/lib/schema'

export const metadata: Metadata = {
  title: 'FAQs | Hinton Workspace',
  description:
    'Frequently asked questions about coworking, meeting rooms, pricing, and booking at Hinton Workspace.',
  alternates: {
    canonical: 'https://hintonworkspace.co.uk/faqs',
  },
  openGraph: {
    title: 'FAQs | Hinton Workspace',
    description:
      'Frequently asked questions about coworking, meeting rooms, pricing, and booking at Hinton Workspace.',
    url: 'https://hintonworkspace.co.uk/faqs',
    type: 'website',
    images: [{ url: '/Website Images 2026/About/The-Hinton-Workspace-Building copy.jpg', width: 1200, height: 630, alt: 'Hinton Workspace' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'FAQs | Hinton Workspace',
    description:
      'Frequently asked questions about coworking, meeting rooms, pricing, and booking at Hinton Workspace.',
    images: ['/Website Images 2026/About/The-Hinton-Workspace-Building copy.jpg'],
  },
}

const faqs = [
  {
    question: 'What is Hinton Workspace?',
    answer:
      'Hinton Workspace is a flexible coworking space in North Dorset offering hot desks, meeting rooms, and event spaces. We provide a calm, professional environment for remote workers, freelancers, entrepreneurs, and small businesses.',
  },
  {
    question: 'Where is Hinton Workspace located?',
    answer:
      "Hinton Workspace is located at The Building Yard, Hinton St Mary, Sturminster Newton, DT10 1NA in North Dorset. We're situated within the historic Hinton estate with plenty of free parking available.",
  },
  {
    question: 'Who is Hinton Workspace for?',
    answer:
      "We're designed for anyone who works - remote workers, freelancers, founders, small business teams, charities, and individuals looking for an alternative to home working or expensive city offices.",
  },
  {
    question: "What's included with coworking desks?",
    answer:
      'Coworking memberships include high-speed WiFi, comfortable seating, tea and coffee, kitchen access, free parking, and access to community events. Full-time members also get 24/7 access and business address use.',
  },
  {
    question: 'Can I book a meeting room on a day pass?',
    answer:
      'Day pass users can add meeting room bookings as needed. Part-time and full-time members receive credits for regular meeting room use. Contact us for availability and pricing.',
  },
  {
    question: 'Do you offer corporate away days?',
    answer:
      'Yes! We host team away days and corporate events. Our facilities can accommodate workshops, team meetings, and special events. Contact us to discuss your needs.',
  },
  {
    question: 'Is there parking?',
    answer:
      'Yes, free on-site parking is available for all members and visitors. We have front and back car parks, both accessible via what3words.',
  },
  {
    question: 'What are the opening hours?',
    answer:
      'Standard hours are 9am–5pm, Monday to Friday. Full-time members have 24/7 access with after-hours code entry. Guests and day pass users should book ahead.',
  },
  {
    question: 'Can I upgrade or downgrade my membership?',
    answer:
      "Yes, you can change your plan at any time. We'll prorate your costs based on your usage. There are no long-term contracts - switch whenever it suits you.",
  },
  {
    question: 'What about wellbeing and fitness?',
    answer:
      'We have on-site PT gym services via C Results and professional massage services via Gemma Hampton. Members can book individual sessions. We also offer regular wellness workshops and community events.',
  },
  {
    question: 'Do you host events?',
    answer:
      "Yes! We host regular workshops, talks, networking events, and community gatherings. Check our What's On page for upcoming events, or contact us to host your own.",
  },
  {
    question: 'Can I network with other members?',
    answer:
      "Absolutely. We believe in community. Events, shared spaces, and common areas encourage members to connect. You'll be part of a vibrant, supportive coworking community.",
  },
  {
    question: 'How do I book?',
    answer:
      "You can book online via Spacebring, or contact us at 01258 472623 or reception@hintonworkspace.co.uk. We're happy to chat through options or arrange a tour.",
  },
  {
    question: 'Can I take a tour before committing?',
    answer:
      "Yes, we encourage it! Book a tour at no obligation. You'll get a feel for the space and can ask any questions. Just contact us or use our online booking system.",
  },
  {
    question: "What's the cancellation policy?",
    answer:
      "Day passes are pay-as-you-go with no commitment. Part-time and full-time memberships have no long-term contracts - cancel anytime with a month's notice.",
  },
]

export default function FAQsPage() {
  return (
    <>
      <SchemaScript schema={faqSchema(faqs)} />

      {/* Hero */}
      <Section className="pt-32 pb-16">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-5xl font-serif font-bold text-dark-green mb-6">
            Frequently Asked Questions
          </h1>
          <p className="text-xl font-sans text-gray-700">
            Everything you need to know about Hinton Workspace.
          </p>
        </div>
      </Section>

      {/* FAQs */}
      <Section>
        <div className="max-w-3xl mx-auto">
          <Accordion items={faqs} />

          <div className="mt-12 pt-8 border-t border-light-pink text-center">
            <p className="font-sans text-gray-700 mb-6">
              Can&apos;t find what you&apos;re looking for?
            </p>
            <a
              href="/contact"
              className="text-dark-green font-sans font-semibold hover:text-pink transition-colors"
            >
              Get in touch &rarr;
            </a>
          </div>
        </div>
      </Section>
    </>
  )
}
