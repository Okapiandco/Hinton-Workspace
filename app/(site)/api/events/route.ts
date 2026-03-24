import { client } from '@/lib/sanity/client'
import { groq } from 'next-sanity'

export async function GET() {
  try {
    const events = await client.fetch(
      groq`*[_type == "event" && endDate > now()] | order(startDate asc) {
        _id,
        title,
        slug,
        description,
        startDate,
        endDate,
        location,
        "image": featuredImage.asset->url,
        status,
      }`
    )

    return Response.json(events)
  } catch (error) {
    console.error('Error fetching events:', error)
    return Response.json({ error: 'Failed to fetch events' }, { status: 500 })
  }
}
