import { Metadata } from 'next'
import Image from 'next/image'
import Section from '@/components/ui/Section'
import ScrollReveal from '@/components/ui/ScrollReveal'
import Button from '@/components/ui/Button'
import TextImageSection from '@/components/sections/TextImageSection'
import FeatureCardsSection from '@/components/sections/FeatureCardsSection'
import HeroSection from '@/components/sections/HeroSection'

export const metadata: Metadata = {
  title: 'Corporate Away Days & Retreats | Rivers Estate, Dorset',
  description:
    'Corporate away days and retreats across 9,000 acres of rural Dorset. Modern workspaces, world-class dining, equestrian experiences, and countryside activities at Rivers Estate.',
  alternates: {
    canonical: 'https://hintonworkspace.co.uk/corporate-events',
  },
  openGraph: {
    title: 'Corporate Away Days & Retreats | Rivers Estate, Dorset',
    description:
      'Corporate away days and retreats across 9,000 acres of rural Dorset. Modern workspaces, world-class dining, equestrian experiences, and countryside activities.',
    url: 'https://hintonworkspace.co.uk/corporate-events',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Corporate Away Days & Retreats | Rivers Estate, Dorset',
    description:
      'Corporate away days and retreats across 9,000 acres of rural Dorset.',
  },
}

const venues = [
  {
    title: 'The Workspace',
    description:
      'Bright, calm and beautifully simple, Hinton Workspace is designed for clear thinking and purposeful sessions. The countryside surrounds you, helping teams switch into a better gear from the moment they arrive.',
    tagline: 'A modern workspace, rooted in rural quiet.',
    image: '/corporate/workspace.jpg',
  },
  {
    title: 'Wood Lane Yard',
    description:
      'Five-time Olympian and former World Number One William Fox-Pitt has built a career on world-class teamwork. William now leads workshops that translate the principles of elite sport directly into business, offering a rare, behind-the-scenes look at what high performance really takes.',
    tagline: 'Teamwork, trust and instinct. The Fox-Pitt way.',
    image: '/corporate/wood-lane-yard.jpg',
  },
  {
    title: 'Larmer Tree Gardens',
    description:
      "Created in the 1880s for creativity and pleasure, Larmer Tree feels other-worldly. Ornate buildings, sunlit lawns, woodland, peacocks and open-air beauty. It's a setting that elevates any gathering, from large lunches and team building events to team dinners in the light-filled Pavilion.",
    tagline: 'Historic gardens with modern magic.',
    image: '/corporate/larmer-tree.jpg',
  },
  {
    title: 'Rushmore Golf',
    description:
      'Set within one of the most stunning landscapes of Southern England, high on the chalk of the Cranborne Chase in Wiltshire, Rushmore Golf Club provides year-round golf on free-draining turf. A thoroughly modern 18-hole course set in beautiful, ancient parkland.',
    tagline: 'One of the best golf courses in the region.',
    image: '/corporate/rushmore-golf.jpg',
  },
]

const experiences = [
  { title: 'Wilderness Walks', description: 'Guided walks through 9,000 acres of private estate land.' },
  { title: 'Clay Pigeon Shooting', description: 'Expert-led clay pigeon shooting on the estate grounds.' },
  { title: 'Cider Tasting', description: 'Sample estate-produced cider with a guided tasting session.' },
  { title: 'Fishing', description: 'River fishing in peaceful, private stretches of the estate.' },
  { title: 'Night-Sky Poetry', description: 'An unforgettable evening of poetry under dark Dorset skies.' },
  { title: '"Catch the Horse"', description: 'Our signature team challenge at Wood Lane Yard.' },
]

const packages = [
  {
    title: 'The Day Escape',
    price: 'From £5,000',
    description: 'A focused day away for your team with workspace, dining and an activity.',
  },
  {
    title: 'Work, Eat, Explore',
    price: 'From £250-300pp',
    description: 'Our signature experience combining purposeful work sessions, great food and countryside activities.',
    featured: true,
  },
  {
    title: '1-3 Night Retreat',
    price: 'POA',
    description: 'Extended retreat with accommodation and curated activities from morning to night.',
  },
]

export default function CorporateEventsPage() {
  return (
    <>
      {/* Hero */}
      <HeroSection
        title={<>Corporate Away Days &amp; Retreats in <em>Rural Dorset</em></>}
        subtitle="RIVERS ESTATE"
        body="Across two private estates, we bring together modern workspaces, wild landscapes, incredible dining and world-class equestrian facilities."
        backgroundImage="/corporate/hero.jpg"
        ctas={[
          { text: 'Enquire Now', href: '/contact', variant: 'primary' },
        ]}
      />

      {/* What We Offer */}
      <Section>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <ScrollReveal>
            <h2 className="text-4xl font-serif font-bold text-dark-green mb-6">
              What We Offer
            </h2>
            <p className="text-lg font-sans text-gray-700 leading-relaxed mb-6">
              Across two private estates, we bring together modern workspaces, wild landscapes,
              incredible dining and world-class equestrian facilities. It&apos;s everything your
              team needs for a day or weekend of clear thinking, good food and fresh energy.
            </p>
            <p className="text-sm font-sans text-pink font-semibold uppercase tracking-widest">
              A modern rural estate built for teams who like to do things differently.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={200}>
            <div className="relative aspect-[4/3] rounded-lg overflow-hidden shadow-lg bg-gray-200">
              <Image
                src="/corporate/what-we-offer.jpg"
                alt="Hinton Workspace lounge and workspace area"
                fill
                className="object-cover"
              />
            </div>
          </ScrollReveal>
        </div>
      </Section>

      {/* 9,000 Acres */}
      <Section bgColor="dark-green">
        <ScrollReveal>
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mb-6">
              9,000 Acres Set Over Two Counties
            </h2>
            <p className="text-lg font-sans text-gray-200">
              Not a hotel. Not a conference centre. A modern countryside playground.
            </p>
          </div>
        </ScrollReveal>
      </Section>

      {/* Why It Matters */}
      <TextImageSection
        title="Why It Matters"
        body={"Away from emails and everyday noise, teams reset faster, think clearer and connect better.\n\nNature, movement, great food and open space create the headspace people need to plan, reflect and come back sharper."}
        image="/corporate/why-it-matters.jpg"
        imageAlt="Team connecting at Hinton Workspace"
        bgColor="white"
      />

      {/* Tagline */}
      <Section bgColor="dark-green" className="!py-12">
        <ScrollReveal>
          <p className="text-center text-lg md:text-xl font-sans text-gray-200 uppercase tracking-widest">
            The right environment changes everything.
          </p>
        </ScrollReveal>
      </Section>

      {/* Venues */}
      <Section>
        <ScrollReveal>
          <div className="text-center mb-16">
            <h2 className="text-4xl font-serif font-bold text-dark-green mb-4">
              The Rivers Estate
            </h2>
            <p className="text-lg font-sans text-gray-600 max-w-2xl mx-auto">
              Four distinctive venues, each offering something different for your team.
            </p>
          </div>
        </ScrollReveal>

        <div className="space-y-16">
          {venues.map((venue, idx) => (
            <ScrollReveal key={venue.title} delay={100}>
              <div className={`grid grid-cols-1 md:grid-cols-2 gap-12 items-center ${idx % 2 === 1 ? '' : ''}`}>
                <div className={idx % 2 === 1 ? 'md:order-2' : 'md:order-1'}>
                  <div className="relative aspect-[4/3] rounded-lg overflow-hidden shadow-lg bg-gray-200">
                    <Image
                      src={venue.image}
                      alt={venue.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
                <div className={idx % 2 === 1 ? 'md:order-1' : 'md:order-2'}>
                  <h3 className="text-3xl font-serif font-bold text-dark-green mb-4">
                    {venue.title}
                  </h3>
                  <p className="text-lg font-sans text-gray-700 leading-relaxed mb-4">
                    {venue.description}
                  </p>
                  <p className="text-sm font-sans text-pink font-semibold uppercase tracking-widest">
                    {venue.tagline}
                  </p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </Section>

      {/* Dining */}
      <TextImageSection
        title="Dining"
        body={"Choose from the White Horse, King John's House, the Tithe Barn or Larmer Tree Gardens. Wherever you choose, the food stays local, seasonal and generous.\n\nFrom intimate pub dinners for 20, to beautifully catered evenings at King John House, to large-scale feasts at The Tithe Barn or Larmer Tree for 100 and well beyond."}
        image="/corporate/dining.jpg"
        imageAlt="Dining at the White Horse"
        bgColor="white"
      />

      {/* Tagline */}
      <Section bgColor="dark-green" className="!py-12">
        <ScrollReveal>
          <p className="text-center text-lg md:text-xl font-sans text-gray-200 uppercase tracking-widest">
            Eat well, feel good, connect naturally.
          </p>
        </ScrollReveal>
      </Section>

      {/* Experiences */}
      <FeatureCardsSection
        title="Experiences"
        subtitle="Country experiences with a modern twist. Everything here is rooted in the land and made to bring people together."
        features={experiences}
      />

      {/* Stay With Us */}
      <TextImageSection
        title="Stay With Us"
        body={"Stay in Hinton St Mary village cottages, just a stone's throw from Hinton Workspace, The Tithe Barn and Wood Lane Yard. For bigger groups, we partner with Plumber Manor near Hinton.\n\nWe also have estate bedrooms at King John House to sleep 13, or high-end glamping at Larmer Tree for a really different experience. Mornings feel softer here \u2014 birdsong, fresh air, and a pace that helps people return refreshed."}
        image="/corporate/stay-with-us.jpg"
        imageAlt="Countryside cottage accommodation"
        imagePosition="left"
        bgColor="white"
      />

      {/* Packages */}
      <Section bgColor="dark-green">
        <ScrollReveal>
          <div className="text-center mb-12">
            <h2 className="text-4xl font-serif font-bold text-white mb-4">
              Our Packages
            </h2>
            <p className="text-lg font-sans text-gray-200">
              Three ways to build your perfect experience
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {packages.map((pkg, idx) => (
            <ScrollReveal key={pkg.title} delay={idx * 150}>
              <div className={`bg-white/10 backdrop-blur rounded-lg p-8 relative ${pkg.featured ? 'ring-2 ring-pink' : ''}`}>
                {pkg.featured && (
                  <div className="absolute -top-3 right-4 bg-pink text-white px-3 py-1 rounded-full text-xs font-bold">
                    OUR SIGNATURE
                  </div>
                )}
                <h3 className="text-xl font-serif font-bold text-white mb-2">
                  {pkg.title}
                </h3>
                <p className="text-2xl font-bold text-pink mb-4">{pkg.price}</p>
                <p className="font-sans text-gray-200 text-sm leading-relaxed">
                  {pkg.description}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal delay={300}>
          <p className="text-center text-sm font-sans text-gray-300 mt-10 max-w-2xl mx-auto italic">
            Focused, playful, high-energy, creative, or slow and restorative &mdash; our landscape,
            venues and experiences give you the freedom to shape the day your way.
          </p>
        </ScrollReveal>
      </Section>

      {/* Rivers Estate Experience */}
      <Section bgColor="white">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <ScrollReveal>
            <h2 className="text-4xl font-serif font-bold text-dark-green mb-6">
              The Rivers Estate Experience
            </h2>
            <p className="text-lg font-sans text-gray-700 leading-relaxed mb-8">
              When you choose the Rivers Estate for your away days, you&apos;re getting a
              fully managed service bespoke to your organisation.
            </p>

            <div className="space-y-6">
              {[
                { heading: 'Event Coordination', detail: 'Dedicated event lead and full planning support from enquiry to departure.' },
                { heading: 'Logistics & Flow', detail: 'Transport arranged between venues. Welcome packs so everyone knows where to be.' },
                { heading: 'Spaces & Setup', detail: 'AV and essentials set up before you arrive. Setup, reset and transitions managed by our team.' },
                { heading: 'Food & Hospitality', detail: 'Seasonal menus and refreshments organised on your behalf.' },
                { heading: 'Support Throughout', detail: 'A calm, capable team on hand throughout your event.' },
              ].map((item) => (
                <div key={item.heading}>
                  <h4 className="font-sans font-bold text-dark-green mb-1">{item.heading}</h4>
                  <p className="font-sans text-gray-600 text-sm">{item.detail}</p>
                </div>
              ))}
            </div>

            <p className="text-sm font-sans text-pink font-semibold uppercase tracking-widest mt-8">
              Beautifully designed. Seamlessly delivered.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={200}>
            <div className="relative aspect-[4/3] rounded-lg overflow-hidden shadow-lg bg-gray-200">
              <Image
                src="/corporate/experience.jpg"
                alt="Rivers Estate hospitality"
                fill
                className="object-cover"
              />
            </div>
          </ScrollReveal>
        </div>
      </Section>

      {/* CTA */}
      <Section bgColor="dark-green">
        <ScrollReveal>
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-4xl font-serif font-bold text-white mb-6">
              Tell Us Your Goals
            </h2>
            <p className="text-lg font-sans text-gray-200 mb-4">
              We&apos;ll build the rest.
            </p>
            <p className="font-sans text-gray-300 mb-8">
              Our team will design a day or weekend that fits your pace, your people and your
              purpose. With the quiet confidence of the countryside behind it.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <a href="/contact">
                <Button variant="secondary" size="lg">Enquire Now</Button>
              </a>
              <a href="tel:01258472623">
                <Button variant="outline-light" size="lg">Call 01258 472623</Button>
              </a>
            </div>
            <p className="font-sans text-gray-400 text-sm">
              reception@hintonworkspace.co.uk
            </p>
          </div>
        </ScrollReveal>
      </Section>
    </>
  )
}
