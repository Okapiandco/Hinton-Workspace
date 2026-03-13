import { client } from '@/lib/sanity/client'
import { groq } from 'next-sanity'
import { Metadata } from 'next'
import Link from 'next/link'
import Section from '@/components/ui/Section'
import Button from '@/components/ui/Button'
import { formatDate, formatTime } from '@/lib/calendar'
import { notFound } from 'next/navigation'

interface EventPageProps {
  params: Promise<{ slug: string }>
}

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
      status,
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

  return {
    title: `${event.title} | Hinton Workspace Events`,
    description: event.description?.[0]?.children?.[0]?.text || '',
  }
}

export default async function EventPage({ params }: EventPageProps) {
  const { slug } = await params
  const event = await getEvent(slug)

  if (!event) {
    notFound()
  }

  const spacebringUrl = `${process.env.NEXT_PUBLIC_SPACEBRING_BASE_URL}?organizationId=${process.env.NEXT_PUBLIC_SPACEBRING_ORG_ID}`

  return (
    <>
      {/* Hero */}
      <Section className="pt-32 pb-16">
        <div className="max-w-3xl mx-auto">
          <Link
            href="/events"
            className="text-sm font-sans text-pink hover:text-dark-green transition-colors mb-4 inline-block"
          >
            &larr; Back to Events
          </Link>
          <h1 className="text-5xl font-serif font-bold text-dark-green mb-6">
            {event.title}
          </h1>
          <div className="space-y-3 font-sans text-gray-700">
            <div className="flex items-center gap-3">
              <span className="font-semibold">Date:</span>
              <span>
                {formatDate(event.startDate)} at {formatTime(event.startDate)}
              </span>
            </div>
            {event.location && (
              <div className="flex items-center gap-3">
                <span className="font-semibold">Location:</span>
                <span>{event.location}</span>
              </div>
            )}
          </div>
        </div>
      </Section>

      {/* Content */}
      <Section bgColor="white">
        <div className="max-w-3xl mx-auto">
          <div className="prose font-sans text-gray-700 mb-8">
            {event.description &&
              event.description.map((block: any, idx: number) => (
                <p key={idx} className="mb-4 text-lg leading-relaxed">
                  {block.children?.[0]?.text}
                </p>
              ))}
          </div>

          <div className="border-t border-light-pink pt-8">
            <h2 className="text-2xl font-serif font-bold text-dark-green mb-6">
              Ready to attend?
            </h2>
            <a
              href={spacebringUrl}
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
