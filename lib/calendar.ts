export interface CalendarEvent {
  _id: string
  title: string
  slug: { current: string }
  description: any[]
  startDate: string
  endDate: string
  location: string
  status: 'draft' | 'published' | 'cancelled'
  featuredImage?: { asset: { url: string } }
}

export function filterFutureEvents(events: CalendarEvent[]): CalendarEvent[] {
  const now = new Date()
  return events.filter((event) => new Date(event.endDate || event.startDate) > now)
}

export function groupEventsByMonth(
  events: CalendarEvent[]
): Record<string, CalendarEvent[]> {
  const grouped: Record<string, CalendarEvent[]> = {}

  events.forEach((event) => {
    const date = new Date(event.startDate)
    const monthKey = `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, '0')}`

    if (!grouped[monthKey]) {
      grouped[monthKey] = []
    }
    grouped[monthKey].push(event)
  })

  return grouped
}

export function formatDate(dateString: string): string {
  const date = new Date(dateString)
  return date.toLocaleDateString('en-GB', {
    weekday: 'short',
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  })
}

export function formatTime(dateString: string): string {
  const date = new Date(dateString)
  return date.toLocaleTimeString('en-GB', {
    hour: '2-digit',
    minute: '2-digit',
  })
}
