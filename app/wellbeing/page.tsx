import { Metadata } from 'next'
import Section from '@/components/ui/Section'
import FeatureCardsSection from '@/components/sections/FeatureCardsSection'
import TextImageSection from '@/components/sections/TextImageSection'
import Button from '@/components/ui/Button'

export const metadata: Metadata = {
  title: 'Wellbeing | Hinton Workspace Dorset',
  description:
    'Movement, nutrition, and mental wellness at Hinton Workspace. PT gym and spa services available.',
  alternates: {
    canonical: 'https://hintonworkspace.co.uk/wellbeing',
  },
  openGraph: {
    title: 'Wellbeing | Hinton Workspace Dorset',
    description:
      'Movement, nutrition, and mental wellness at Hinton Workspace. PT gym and spa services available.',
    url: 'https://hintonworkspace.co.uk/wellbeing',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Wellbeing | Hinton Workspace Dorset',
    description:
      'Movement, nutrition, and mental wellness at Hinton Workspace. PT gym and spa services available.',
  },
}

export default function WellbeingPage() {
  return (
    <>
      {/* Hero */}
      <Section className="pt-32 pb-16">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-5xl font-serif font-bold text-dark-green mb-6">
            Work Better. Feel Better.
          </h1>
          <p className="text-xl font-sans text-gray-700">
            Physical movement and mental wellbeing are central to how we work.
            That&apos;s why we&apos;ve built Hinton Workspace around your
            health.
          </p>
        </div>
      </Section>

      {/* Why Wellbeing Matters */}
      <TextImageSection
        title="Why Wellbeing Matters"
        body="Work can be isolating and sedentary. We believe that movement, connection, and rest are essential to doing your best work. That's why Hinton Workspace has been designed with your whole health in mind - not just your productivity."
        image="/Website Images 2026/Coworking/Outside area.jpg"
        imageAlt="Outdoor space at Hinton Workspace"
      />

      {/* On-Site Services */}
      <Section bgColor="dark-green">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-serif font-bold text-white mb-4">
            On-Site Services
          </h2>
          <p className="text-lg font-sans text-gray-200">
            Professional services available to members
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* PT Gym */}
          <div className="bg-white text-dark-green rounded-lg p-8 shadow-lg">
            <h3 className="text-2xl font-serif font-bold mb-4">
              Personal Training & Gym
            </h3>
            <p className="font-sans text-gray-700 mb-6">
              C Results operates our on-site PT gym facility. Book personal
              training sessions or use the gym facilities to keep active during
              your working day.
            </p>
            <a
              href="https://cresultspt.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block"
            >
              <Button variant="primary">Book PT Session</Button>
            </a>
          </div>

          {/* Spa */}
          <div className="bg-white text-dark-green rounded-lg p-8 shadow-lg">
            <h3 className="text-2xl font-serif font-bold mb-4">
              Spa & Massage
            </h3>
            <p className="font-sans text-gray-700 mb-6">
              Gemma offers professional massage and spa treatments on site. Book
              a session to rejuvenate during your workday - you deserve it.
            </p>
            <a
              href="https://gemmahampton.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block"
            >
              <Button variant="primary">Book Massage</Button>
            </a>
          </div>
        </div>
      </Section>

      {/* Wellness Features */}
      <FeatureCardsSection
        title="Designed for Wellbeing"
        features={[
          {
            title: 'Movement Spaces',
            description:
              'Dedicated areas for stretching, yoga, and movement throughout the day.',
          },
          {
            title: 'Natural Light',
            description:
              'All workspaces designed to maximise natural light and connection to nature.',
          },
          {
            title: 'Quiet Zones',
            description:
              'Peaceful areas for focus, meditation, and mental rest.',
          },
          {
            title: 'Community Events',
            description:
              'Regular workshops, walks, and gatherings that build connection.',
          },
          {
            title: 'Nutrition',
            description:
              'Quality tea, coffee, and snacks. Partner discounts with local healthy eateries.',
          },
          {
            title: 'Fresh Air',
            description:
              'Outdoor seating and access to the beautiful Hinton estate grounds.',
          },
        ]}
      />

      {/* Philosophy */}
      <Section bgColor="white">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-serif font-bold text-dark-green mb-6">
            Our Wellness Philosophy
          </h2>
          <p className="text-lg font-sans text-gray-700 leading-relaxed mb-6">
            We believe that how you work is as important as where you work.
            Hinton Workspace is designed to support your whole self -
            body, mind, and spirit - so you can do your best work and
            leave the day with energy intact.
          </p>
          <p className="text-lg font-sans text-gray-700 leading-relaxed">
            Whether it&apos;s a PT session, a massage, a quiet walk on the
            estate, or time in a peaceful coworking space, everything here is
            designed to help you thrive.
          </p>
        </div>
      </Section>
    </>
  )
}
