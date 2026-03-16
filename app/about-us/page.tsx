import { Metadata } from 'next'
import Section from '@/components/ui/Section'
import Image from 'next/image'
import SchemaScript from '@/components/SchemaScript'
import { organizationSchema, breadcrumbSchema } from '@/lib/schema'

export const metadata: Metadata = {
  title: 'About Hinton Workspace | Dorset Coworking & Community',
  description:
    "Meet Alice & the team behind Hinton Workspace — rural, community-focused co-working blending heritage, support & collaboration.",
  alternates: {
    canonical: 'https://hintonworkspace.co.uk/about-us',
  },
  openGraph: {
    title: 'About Hinton Workspace | Dorset Coworking & Community',
    description:
      "Meet Alice & the team behind Hinton Workspace — rural, community-focused co-working blending heritage, support & collaboration.",
    url: 'https://hintonworkspace.co.uk/about-us',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'About Hinton Workspace | Dorset Coworking & Community',
    description:
      "Meet Alice & the team behind Hinton Workspace — rural, community-focused co-working blending heritage, support & collaboration.",
  },
}

export default function AboutPage() {
  return (
    <>
      <SchemaScript schema={organizationSchema()} />
      <SchemaScript schema={breadcrumbSchema([
        { name: 'Home', url: 'https://hintonworkspace.co.uk' },
        { name: 'About Us', url: 'https://hintonworkspace.co.uk/about-us' },
      ])} />

      {/* Hero */}
      <Section className="pt-32 pb-16">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-5xl font-serif font-bold text-dark-green mb-6">
            About Hinton Workspace
          </h1>
          <p className="text-xl font-sans text-gray-700">
            Working better, together.
          </p>
        </div>
      </Section>

      {/* Story + Video */}
      <Section bgColor="white">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          <div>
            <h2 className="text-3xl font-serif font-bold text-dark-green mb-6">Our Story</h2>
            <p className="font-sans text-gray-700 mb-4 leading-relaxed">
              Hinton Workspace was created to offer a calmer, flexible way of working and connecting — one that reflects how people actually work today. People do their best work when they feel comfortable, supported, and free from unnecessary pressure.
            </p>
            <p className="font-sans text-gray-700 leading-relaxed">
              Located within the historic Hinton St Mary estate, our buildings are carefully adapted to create calm, practical workspaces while respecting the estate&apos;s character. Modern work sits comfortably alongside history here.
            </p>
          </div>
          <div className="relative aspect-video rounded-lg overflow-hidden shadow-lg">
            <iframe
              src="https://www.youtube.com/embed/lK7NiAd0tzI"
              title="Hinton Workspace"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="absolute inset-0 w-full h-full"
            />
          </div>
        </div>
      </Section>

      {/* Estate Image */}
      <Section>
        <div className="max-w-5xl mx-auto">
          <div className="relative aspect-video rounded-lg overflow-hidden">
            <Image
              src="/Website Images 2026/About/Estate.jpg"
              alt="Hinton Workspace estate"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </Section>

      {/* Quote */}
      <Section bgColor="white">
        <div className="max-w-2xl mx-auto text-center">
          <p className="text-2xl md:text-3xl font-serif font-bold text-dark-green mb-6 italic leading-relaxed">
            &ldquo;Hinton Workspace grew from a simple idea — that work
            doesn&apos;t have to feel rushed, noisy, or disconnected from real
            life. I wanted a space where people could focus properly, feel
            welcome, and leave the day with energy intact.&rdquo;
          </p>
          <p className="text-lg font-sans text-gray-700">&mdash; Alice, Founder</p>
        </div>
      </Section>

      {/* Values */}
      <Section>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              title: 'Community',
              description:
                'We believe great work happens when people feel connected. Our community is at the heart of everything we do.',
            },
            {
              title: 'Flexibility',
              description:
                'No long-term leases, no complicated contracts. Work how and when you want.',
            },
            {
              title: 'Wellbeing',
              description:
                'A calm, comfortable environment where you can focus properly and leave the day with energy intact.',
            },
          ].map((value, idx) => (
            <div key={idx} className="text-center">
              <h3 className="text-2xl font-serif font-bold text-dark-green mb-3">
                {value.title}
              </h3>
              <p className="font-sans text-gray-700">{value.description}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Since 2024 */}
      <Section bgColor="dark-green">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-4xl font-serif font-bold text-white mb-4">
            Since 2024
          </h2>
          <p className="text-xl font-sans text-gray-200 mb-6">
            Transforming how rural professionals work, without the distractions
            of home or the city.
          </p>
          <p className="font-sans text-gray-300">
            Hinton Workspace has grown from a simple idea into a thriving
            community. We&apos;re proud to support freelancers, entrepreneurs,
            charities, and small businesses across North Dorset.
          </p>
        </div>
      </Section>
    </>
  )
}
