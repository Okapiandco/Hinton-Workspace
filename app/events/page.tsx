import { client } from '@/lib/sanity/client'
import { groq } from 'next-sanity'
import Section from '@/components/ui/Section'
import EventsCalendar from '@/components/sections/EventsCalendar'
import { filterFutureEvents } from '@/lib/calendar'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Events & Workshops | Hinton Workspace',
  description:
    'Upcoming events, workshops, and gatherings at Hinton Workspace in North Dorset.',
  alternates: {
    canonical: 'https://hintonworkspace.co.uk/events',
  },
  openGraph: {
    title: 'Events & Workshops | Hinton Workspace',
    description:
      'Upcoming events, workshops, and gatherings at Hinton Workspace in North Dorset.',
    url: 'https://hintonworkspace.co.uk/events',
    images: [
      {
        url: '/Website Images 2026/Logos/HINTON_WORKSPACE_LOGO_GREEN_RGB.png',
        width: 1200,
        height: 630,
        alt: 'Hinton Workspace Events',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Events & Workshops | Hinton Workspace',
    description:
      'Upcoming events, workshops, and gatherings at Hinton Workspace in North Dorset.',
  },
}

async function getEvents() {
  return await client.fetch(
    groq`*[_type == "event"] | order(startDate asc) {
      _id,
      title,
      slug,
      description,
      startDate,
      endDate,
      location,
      status,
      featuredImage { asset-> { url } },
    }`
  )
}

export default async function EventsPage() {
  const allEvents = await getEvents()
  const futureEvents = filterFutureEvents(allEvents)

  return (
    <>
      {/* Hero */}
      <Section className="pt-32 pb-16">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-5xl font-serif font-bold text-dark-green mb-6">
            Events & Workshops
          </h1>
          <p className="text-xl font-sans text-gray-700">
            Talks, workshops, and gatherings throughout the year. Browse our
            upcoming events or host your own.
          </p>
        </div>
      </Section>

      {/* Calendar */}
      <Section>
        <EventsCalendar events={futureEvents} />
      </Section>
    </>
  )
}
