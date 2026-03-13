import { Metadata } from 'next'
import TextImageSection from '@/components/sections/TextImageSection'
import Section from '@/components/ui/Section'

export const metadata: Metadata = {
  title: 'About Hinton Workspace | Rural Coworking Dorset',
  description:
    "Learn about Hinton Workspace's mission to offer calm, flexible working in rural Dorset.",
}

export default function AboutPage() {
  return (
    <>
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

      {/* Story */}
      <TextImageSection
        title="Our Story"
        body={`Hinton Workspace was created to offer a calmer, flexible way of working and connecting — one that reflects how people actually work today. People do their best work when they feel comfortable, supported, and free from unnecessary pressure.

Located within the historic Hinton St Mary estate, our buildings are carefully adapted to create calm, practical workspaces while respecting the estate's character. Modern work sits comfortably alongside history here.`}
        image="/Website Images 2026/About/Estate.jpg"
        imageAlt="Hinton Workspace exterior"
      />

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
