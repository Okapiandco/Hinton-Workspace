import { Metadata } from 'next'
import Section from '@/components/ui/Section'
import Image from 'next/image'
import Link from 'next/link'
import ScrollReveal from '@/components/ui/ScrollReveal'
import SchemaScript from '@/components/SchemaScript'
import { organizationSchema, breadcrumbSchema } from '@/lib/schema'

export const metadata: Metadata = {
  title: 'About Hinton Workspace | Dorset Coworking & Community',
  description:
    "Meet Alice & the team behind Hinton Workspace - rural, community-focused co-working blending heritage, support & collaboration.",
  alternates: {
    canonical: 'https://hintonworkspace.co.uk/about-us',
  },
  openGraph: {
    title: 'About Hinton Workspace | Dorset Coworking & Community',
    description:
      "Meet Alice & the team behind Hinton Workspace - rural, community-focused co-working blending heritage, support & collaboration.",
    url: 'https://hintonworkspace.co.uk/about-us',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'About Hinton Workspace | Dorset Coworking & Community',
    description:
      "Meet Alice & the team behind Hinton Workspace - rural, community-focused co-working blending heritage, support & collaboration.",
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
              Hinton Workspace was created to offer a calmer, flexible way of working and connecting - one that reflects how people actually work today. People do their best work when they feel comfortable, supported, and free from unnecessary pressure.
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
            &ldquo;Hinton Workspace grew from a simple idea - that work
            doesn&apos;t have to feel rushed, noisy, or disconnected from real
            life. I wanted a space where people could focus properly, feel
            welcome, and leave the day with energy intact.&rdquo;
          </p>
          <p className="text-lg font-sans text-gray-700">- Alice, Founder</p>
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

      {/* Plan Your Visit */}
      <Section bgColor="dark-green">
        <ScrollReveal>
        <div className="text-center mb-12">
          <h2 className="text-4xl font-serif font-bold text-white mb-4">Plan Your Visit</h2>
          <p className="text-lg font-sans text-gray-200 max-w-2xl mx-auto">
            Hinton Workspace is set within a peaceful rural estate in North Dorset, with free parking and easy access. Drop us a message to plan your visit.
          </p>
        </div>
        </ScrollReveal>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <div>
            <div className="relative h-64 rounded-lg overflow-hidden mb-8">
              <Image src="/Website Images 2026/About/Signage.jpg" alt="Hinton Workspace entrance" fill className="object-cover" />
            </div>
            <div className="space-y-6 text-white">
              <div className="flex items-start gap-4">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-pink flex-shrink-0 mt-1">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                </svg>
                <div>
                  <p className="font-sans font-bold text-sm text-pink">Address</p>
                  <p className="font-sans text-sm text-gray-200">Hinton Workspace, The Building Yard, Hinton St Mary, Sturminster Newton, DT10 1NA</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-pink flex-shrink-0 mt-1">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                </svg>
                <div>
                  <p className="font-sans font-bold text-sm text-pink">Phone</p>
                  <a href="tel:+441258472623" className="font-sans text-sm text-gray-200 hover:text-white transition-colors">01258 472623</a>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-pink flex-shrink-0 mt-1">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                </svg>
                <div>
                  <p className="font-sans font-bold text-sm text-pink">Email</p>
                  <a href="mailto:reception@hintonworkspace.co.uk" className="font-sans text-sm text-gray-200 hover:text-white transition-colors">reception@hintonworkspace.co.uk</a>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-pink flex-shrink-0 mt-1">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <div>
                  <p className="font-sans font-bold text-sm text-pink">Hours</p>
                  <p className="font-sans text-sm text-gray-200">9am to 5pm, Monday to Friday</p>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-white rounded-lg p-8">
            <h3 className="text-xl font-serif font-bold text-dark-green mb-6">Book a Tour</h3>
            <iframe
              src="https://letsmeet.io/hintonworkspace/hinton-workspace-tour"
              style={{ border: 'none', minHeight: '700px', width: '1px', minWidth: '100%' }}
              title="Book a tour at Hinton Workspace"
              scrolling="no"
              frameBorder="0"
              marginHeight={0}
              marginWidth={0}
              width="100%"
              height="100%"
              referrerPolicy="unsafe-url"
              allowFullScreen
            />
          </div>
        </div>
      </Section>
    </>
  )
}
