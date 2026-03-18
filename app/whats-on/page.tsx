import { client } from '@/lib/sanity/client'
import { groq } from 'next-sanity'
import { Metadata } from 'next'
import Section from '@/components/ui/Section'
import Image from 'next/image'
import Link from 'next/link'
import { filterFutureEvents } from '@/lib/calendar'
import { formatDate } from '@/lib/calendar'

export const metadata: Metadata = {
  title: "What's On | Hinton Workspace",
  description:
    'Upcoming events, workshops, and gatherings at Hinton Workspace in North Dorset.',
  alternates: {
    canonical: 'https://hintonworkspace.co.uk/whats-on',
  },
  openGraph: {
    title: "What's On | Hinton Workspace",
    description:
      'Upcoming events, workshops, and gatherings at Hinton Workspace in North Dorset.',
    url: 'https://hintonworkspace.co.uk/whats-on',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "What's On | Hinton Workspace",
    description:
      'Upcoming events, workshops, and gatherings at Hinton Workspace in North Dorset.',
  },
}

const eventImages: Record<string, string> = {
  'claude-ai-course-for-smes': '/images/events/Claude-for-SMEs.png',
  'sturminster-newton-business-awards': '/images/events/Sturminster awards.png',
  'hustle-hangout-at-hinton': '/images/events/Hustle Hangout.png',
}

async function getEvents() {
  return await client.fetch(
    groq`*[_type == "event" && status == "published"] | order(startDate asc) {
      _id,
      title,
      slug,
      description,
      startDate,
      endDate,
      location,
      price,
      bookingUrl,
      status,
    }`
  )
}

export default async function WhatsOnPage() {
  const allEvents = await getEvents()
  const futureEvents = filterFutureEvents(allEvents)

  return (
    <>
      {/* Hero */}
      <Section className="pt-32 pb-16">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-5xl font-serif font-bold text-dark-green mb-6">
            What&apos;s On
          </h1>
          <p className="text-xl font-sans text-gray-700">
            Talks, workshops, and gatherings throughout the year. Browse our
            upcoming events or host your own.
          </p>
        </div>
      </Section>

      {/* Events Grid */}
      <Section>
        {futureEvents.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-lg font-sans text-gray-600">
              No upcoming events at this time. Check back soon!
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {futureEvents.map((event: any) => {
              const slug = event.slug?.current || ''
              const imageSrc = eventImages[slug]
              const description = event.description?.[0]?.children?.[0]?.text || ''

              return (
                <Link key={event._id} href={`/events/${slug}`} className="group">
                  <div className="bg-white border border-light-pink rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
                    {imageSrc && (
                      <div className="relative h-56 overflow-hidden">
                        <Image
                          src={imageSrc}
                          alt={event.title}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                    )}
                    <div className="p-6">
                      <div className="flex items-center gap-3 mb-3">
                        <span className="text-sm font-sans font-semibold text-pink">
                          {formatDate(event.startDate)}
                        </span>
                        {event.price && (
                          <span className="text-sm font-sans text-gray-500">
                            &bull; {event.price}
                          </span>
                        )}
                      </div>
                      <h2 className="text-xl font-serif font-bold text-dark-green mb-2 group-hover:text-pink transition-colors">
                        {event.title}
                      </h2>
                      {event.location && (
                        <p className="font-sans text-sm text-gray-500 mb-3 flex items-center gap-1">
                          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                          </svg>
                          {event.location}
                        </p>
                      )}
                      <p className="font-sans text-gray-600 text-sm line-clamp-3 leading-relaxed">
                        {description}
                      </p>
                      <span className="inline-block mt-4 font-sans font-semibold text-dark-green text-sm group-hover:text-pink transition-colors">
                        Find out more &rarr;
                      </span>
                    </div>
                  </div>
                </Link>
              )
            })}
          </div>
        )}
      </Section>
    </>
  )
}
