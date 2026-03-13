'use client'

import { useState } from 'react'
import Link from 'next/link'
import {
  CalendarEvent,
  groupEventsByMonth,
  formatDate,
} from '@/lib/calendar'
import Card from '@/components/ui/Card'

interface EventsCalendarProps {
  events: CalendarEvent[]
}

export default function EventsCalendar({ events }: EventsCalendarProps) {
  const grouped = groupEventsByMonth(events)
  const months = Object.keys(grouped).sort()
  const [selectedMonth, setSelectedMonth] = useState(months[0] || '')

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
    <div className="space-y-8">
      {/* Month Selector */}
      <div className="flex flex-wrap gap-2 mb-8">
        {months.map((month) => (
          <button
            key={month}
            onClick={() => setSelectedMonth(month)}
            className={`px-4 py-2 rounded font-sans font-semibold transition-colors ${
              selectedMonth === month
                ? 'bg-dark-green text-white'
                : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
            }`}
          >
            {new Date(`${month}-01`).toLocaleDateString('en-GB', {
              month: 'long',
              year: 'numeric',
            })}
          </button>
        ))}
      </div>

      {/* Events List */}
      <div className="space-y-4">
        {selectedMonth &&
          grouped[selectedMonth] &&
          grouped[selectedMonth].map((event) => (
            <Link key={event._id} href={`/events/${event.slug.current}`}>
              <Card className="hover:shadow-lg cursor-pointer transition-shadow mb-4">
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
                  <div className="flex-grow">
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
              </Card>
            </Link>
          ))}
      </div>
    </div>
  )
}
