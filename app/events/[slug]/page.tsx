import { client } from '@/lib/sanity/client'
import { groq } from 'next-sanity'
import { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import Section from '@/components/ui/Section'
import Button from '@/components/ui/Button'
import { formatDate, formatTime } from '@/lib/calendar'
import { notFound } from 'next/navigation'
import SchemaScript from '@/components/SchemaScript'
import { eventSchema, breadcrumbSchema } from '@/lib/schema'
import { urlForImage } from '@/lib/sanity/image'

interface EventPageProps {
  params: Promise<{ slug: string }>
}

const LOGO_OG_IMAGE = '/Website Images 2026/Logos/HINTON_WORKSPACE_LOGO_GREEN_RGB.png'

async function getEvent(slug: string) {
  return await client.fetch(
    groq`*[_type == "event" && slug.current == $slug][0] {
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
      featuredImage,
    }`,
    { slug }
  )
}

export async function generateMetadata({
  params,
}: EventPageProps): Promise<Metadata> {
  const { slug } = await params
  const event = await getEvent(slug)

  if (!event) {
    return { title: 'Event Not Found' }
  }

  const description = event.description?.[0]?.children?.[0]?.text || ''
  const ogImage = event.featuredImage
    ? urlForImage(event.featuredImage)?.width(1200).height(630).url() || LOGO_OG_IMAGE
    : LOGO_OG_IMAGE
  const eventUrl = `https://hintonworkspace.co.uk/events/${event.slug.current}`

  return {
    title: `${event.title} | Hinton Workspace Events`,
    description,
    alternates: {
      canonical: eventUrl,
    },
    openGraph: {
      title: event.title,
      description,
      url: eventUrl,
      type: 'article',
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: event.title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: event.title,
      description,
      images: [ogImage],
    },
  }
}

export default async function EventPage({ params }: EventPageProps) {
  const { slug } = await params
  const event = await getEvent(slug)

  if (!event) {
    notFound()
  }

  const spacebringUrl = `${process.env.NEXT_PUBLIC_SPACEBRING_BASE_URL}?organizationId=${process.env.NEXT_PUBLIC_SPACEBRING_ORG_ID}`
  const baseUrl = 'https://hintonworkspace.co.uk'
  const descriptionText = event.description?.[0]?.children?.[0]?.text || ''
  const imageSrc = event.featuredImage
    ? urlForImage(event.featuredImage)?.width(800).height(450).url()
    : null
  const bookingHref = event.bookingUrl || spacebringUrl

  return (
    <>
      <SchemaScript
        schema={eventSchema({
          title: event.title,
          description: descriptionText,
          url: `${baseUrl}/events/${event.slug.current}`,
          startDate: event.startDate,
          endDate: event.endDate,
          location: event.location,
          image: imageSrc || undefined,
        })}
      />
      <SchemaScript
        schema={breadcrumbSchema([
          { name: 'Home', url: baseUrl },
          { name: "What's On", url: `${baseUrl}/whats-on` },
          { name: event.title, url: `${baseUrl}/events/${event.slug.current}` },
        ])}
      />

      {/* Event Details */}
      <Section className="pt-32 pb-16">
        <div className="max-w-3xl mx-auto">
          <Link
            href="/whats-on"
            className="text-sm font-sans text-pink hover:text-dark-green transition-colors mb-6 inline-block"
          >
            &larr; Back to What&apos;s On
          </Link>
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-dark-green mb-6">
            {event.title}
          </h1>

          {/* Event Image */}
          {imageSrc && (
            <div className="relative aspect-video rounded-lg overflow-hidden mb-8">
              <Image
                src={imageSrc}
                alt={event.title}
                fill
                className="object-cover"
                priority
              />
            </div>
          )}

          {/* Event Meta */}
          <div className="bg-cream border border-light-pink rounded-lg p-6 mb-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 font-sans text-sm">
              <div className="flex items-start gap-3">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-pink flex-shrink-0 mt-0.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" />
                </svg>
                <div>
                  <p className="font-semibold text-dark-green">Date & Time</p>
                  <p className="text-gray-700">{formatDate(event.startDate)}</p>
                  <p className="text-gray-700">{formatTime(event.startDate)}{event.endDate ? ` – ${formatTime(event.endDate)}` : ''}</p>
                </div>
              </div>
              {event.location && (
                <div className="flex items-start gap-3">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-pink flex-shrink-0 mt-0.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                  </svg>
                  <div>
                    <p className="font-semibold text-dark-green">Location</p>
                    <p className="text-gray-700">{event.location}</p>
                  </div>
                </div>
              )}
              {event.price && (
                <div className="flex items-start gap-3">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-pink flex-shrink-0 mt-0.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18V10.5zm-12 0h.008v.008H6V10.5z" />
                  </svg>
                  <div>
                    <p className="font-semibold text-dark-green">Price</p>
                    <p className="text-gray-700">{event.price}</p>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Description */}
          <div className="prose font-sans text-gray-700 mb-8">
            {event.description &&
              event.description.map((block: any, idx: number) => (
                <p key={idx} className="mb-4 text-lg leading-relaxed">
                  {block.children?.[0]?.text}
                </p>
              ))}
          </div>

          {/* Booking CTA */}
          <div className="border-t border-light-pink pt-8">
            <h2 className="text-2xl font-serif font-bold text-dark-green mb-6">
              Ready to attend?
            </h2>
            <a
              href={bookingHref}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button variant="primary" size="lg">
                Book Your Spot
              </Button>
            </a>
          </div>
        </div>
      </Section>
    </>
  )
}
