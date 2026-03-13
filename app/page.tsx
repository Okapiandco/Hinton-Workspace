import HeroSection from '@/components/sections/HeroSection'
import FeatureCardsSection from '@/components/sections/FeatureCardsSection'
import TextImageSection from '@/components/sections/TextImageSection'
import GoogleReviews from '@/components/sections/GoogleReviews'
import Section from '@/components/ui/Section'
import Button from '@/components/ui/Button'
import YouTubeEmbed from '@/components/ui/YouTubeEmbed'

const spacebringUrl = `${process.env.NEXT_PUBLIC_SPACEBRING_BASE_URL}?organizationId=${process.env.NEXT_PUBLIC_SPACEBRING_ORG_ID}`

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <HeroSection
        title="Flexible workspace in North Dorset where ideas come to life."
        subtitle="Hinton Workspace"
        body="Looking for a workspace that sparks focus, creativity and connection? Hinton Workspace is more than desks and meeting rooms — it's a vibrant community in the heart of the Dorset countryside."
        backgroundImage="/Website Images 2026/About/The-Hinton-Workspace-Building copy.jpg"
        ctas={[
          {
            text: 'Book a Tour',
            href: spacebringUrl,
            variant: 'primary',
          },
          {
            text: 'Book a Desk',
            href: spacebringUrl,
            variant: 'secondary',
          },
        ]}
      />

      {/* What Makes Us Different */}
      <FeatureCardsSection
        title="What Makes Us Different"
        features={[
          {
            title: 'Flexible coworking desks',
            description:
              'Work how and when you want, with all essentials at your fingertips.',
          },
          {
            title: 'Meeting rooms where decisions happen',
            description:
              'From brainstorming to client pitches, our rooms are designed for focus.',
          },
          {
            title: 'Rural calm, professional energy',
            description:
              'Productive work in a beautiful setting, surrounded by nature.',
          },
        ]}
      />

      {/* How It Works */}
      <Section bgColor="white">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-4xl font-serif font-bold text-dark-green mb-4">
            How It Works
          </h2>
          <p className="text-lg font-sans text-gray-700 mb-8">
            No long leases. No complicated contracts. Just flexible space in
            North Dorset that fits with your work life.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={spacebringUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button variant="primary" size="lg">
                Book a Tour
              </Button>
            </a>
            <a
              href={spacebringUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button variant="secondary" size="lg">
                Book a Desk
              </Button>
            </a>
          </div>
        </div>
      </Section>

      {/* Coworking Feature */}
      <TextImageSection
        title="Coworking Desks in North Dorset"
        body="Is working from home not working? Our coworking desks are a simple, professional alternative — quiet, comfortable, and easy to book. Perfect for remote workers, freelancers, founders, and anyone who needs to focus."
        image="/Website Images 2026/Coworking/Coworking and Pods.jpg"
        imageAlt="Coworking desks at Hinton Workspace"
      />

      {/* Meeting Rooms */}
      <TextImageSection
        title="Meeting Rooms Designed for Focus"
        body="From brainstorming sessions to client pitches, our meeting rooms provide the professional setting you need. Equipped with presentation technology, high-speed Wi-Fi, and natural light."
        image="/Website Images 2026/Meeting Rooms/Meeting room.jpg"
        imageAlt="Meeting room at Hinton Workspace"
        imagePosition="left"
        bgColor="white"
      />

      {/* Video */}
      <Section>
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-serif font-bold text-dark-green text-center mb-8">
            See Hinton Workspace in Action
          </h2>
          <YouTubeEmbed
            videoId="lK7NiAd0tzI"
            title="Hinton Workspace Tour"
          />
        </div>
      </Section>

      {/* Reviews */}
      <Section bgColor="white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <div className="flex justify-center gap-1 mb-4">
              {[...Array(5)].map((_, i) => (
                <span key={i} className="text-yellow-400 text-3xl">
                  &#9733;
                </span>
              ))}
            </div>
            <h2 className="text-4xl font-serif font-bold text-dark-green mb-2">
              What People Say
            </h2>
            <p className="text-lg font-sans text-gray-600">
              Rated 5 stars on Google
            </p>
          </div>
          <GoogleReviews />
        </div>
      </Section>

      {/* Pricing Preview */}
      <Section bgColor="dark-green">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-serif font-bold text-white mb-4">
            Flexible Pricing Options
          </h2>
          <p className="text-lg font-sans text-gray-200 mb-8">
            No long-term commitments. Choose what works for you.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {[
            { title: 'Day Pass', price: '£30', subtitle: 'per day' },
            {
              title: '10-Day Pass',
              price: '£250',
              subtitle: 'for 10 days',
              featured: true,
            },
            { title: 'Monthly', price: '£270', subtitle: 'per month' },
          ].map((plan, idx) => (
            <div
              key={idx}
              className={`rounded-lg p-8 text-center ${
                plan.featured
                  ? 'bg-pink text-dark-green scale-105'
                  : 'bg-white/10 text-white border border-white/20'
              }`}
            >
              {plan.featured && (
                <div className="bg-white text-dark-green px-4 py-1 rounded-full text-sm font-bold inline-block mb-4">
                  BEST VALUE
                </div>
              )}
              <h3 className="text-2xl font-serif font-bold mb-2">
                {plan.title}
              </h3>
              <div className="text-4xl font-bold mb-2">{plan.price}</div>
              <p className="font-sans text-sm mb-6">{plan.subtitle}</p>
              <a
                href={spacebringUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  variant={plan.featured ? 'primary' : 'outline'}
                  className={`w-full ${!plan.featured ? 'border-white text-white hover:bg-white hover:text-dark-green' : ''}`}
                >
                  Get Started
                </Button>
              </a>
            </div>
          ))}
        </div>

        <div className="text-center">
          <a href="/pricing">
            <Button variant="secondary" size="lg">
              View All Options
            </Button>
          </a>
        </div>
      </Section>

      {/* CTA */}
      <Section>
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-4xl font-serif font-bold text-dark-green mb-4">
            Come and see for yourself
          </h2>
          <p className="text-lg font-sans text-gray-700 mb-8">
            Book a tour or try a day pass — no commitment, no pressure.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={spacebringUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button variant="primary" size="lg">
                Book a Tour
              </Button>
            </a>
            <a href="/contact">
              <Button variant="outline" size="lg">
                Get in Touch
              </Button>
            </a>
          </div>
        </div>
      </Section>
    </>
  )
}
