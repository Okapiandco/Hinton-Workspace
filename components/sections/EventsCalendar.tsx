'use client'

import Link from 'next/link'
import Image from 'next/image'
import {
  CalendarEvent,
  formatDate,
} from '@/lib/calendar'
import Card from '@/components/ui/Card'

interface EventsCalendarProps {
  events: CalendarEvent[]
}

export default function EventsCalendar({ events }: EventsCalendarProps) {
  if (events.length === 0) {
    return (
      <div className="text-center py-12">
        <p className="text-lg font-sans text-gray-600">
          No upcoming events at this time. Check back soon!
        </p>
      </div>
    )
  }

  return (
    <div className="space-y-4">
      {events.map((event) => (
        <Link key={event._id} href={`/events/${event.slug?.current || event._id}`}>
          <Card className="hover:shadow-lg cursor-pointer transition-shadow mb-4">
            <div className="flex flex-col sm:flex-row gap-6">
              {event.featuredImage?.asset?.url && (
                <div className="relative w-full sm:w-72 aspect-video rounded-lg overflow-hidden shrink-0 bg-cream">
                  <Image
                    src={event.featuredImage.asset.url}
                    alt={event.title}
                    fill
                    className="object-contain"
                  />
                </div>
              )}
              <div className="flex-grow flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
                <div>
                  <div className="text-sm font-sans text-dark-green font-semibold mb-2">
                    {formatDate(event.startDate)}
                  </div>
                  <h3 className="text-2xl font-serif font-bold text-dark-green mb-2 hover:text-pink transition-colors">
                    {event.title}
                  </h3>
                  {event.location && (
                    <p className="font-sans text-gray-600 mb-3">
                      {event.location}
                    </p>
                  )}
                  {event.description && (
                    <p className="font-sans text-gray-600 line-clamp-2">
                      {event.description[0]?.children?.[0]?.text || ''}
                    </p>
                  )}
                </div>
                <div className="sm:text-right shrink-0">
                  <span className="inline-block px-4 py-2 bg-pink text-dark-green rounded font-sans font-semibold text-sm">
                    Learn More
                  </span>
                </div>
              </div>
            </div>
          </Card>
        </Link>
      ))}
    </div>
  )
}
