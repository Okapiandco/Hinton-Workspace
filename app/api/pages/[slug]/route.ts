import { client } from '@/lib/sanity/client'
import { groq } from 'next-sanity'

export async function GET(
  request: Request,
  { params }: { params: Promise<{ slug: string }> }
) {
  try {
    const { slug } = await params

    const page = await client.fetch(
      groq`*[_type == "page" && slug.current == $slug][0] {
        _id,
        title,
        slug,
        content,
        published,
        seo,
      }`,
      { slug }
    )

    if (!page) {
      return Response.json({ error: 'Page not found' }, { status: 404 })
    }

    return Response.json(page)
  } catch (error) {
    console.error('Error fetching page:', error)
    return Response.json({ error: 'Failed to fetch page' }, { status: 500 })
  }
}
