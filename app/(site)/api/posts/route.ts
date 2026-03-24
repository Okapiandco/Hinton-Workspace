import { client } from '@/lib/sanity/client'
import { groq } from 'next-sanity'

export async function GET() {
  try {
    const posts = await client.fetch(
      groq`*[_type == "post"] | order(publishedAt desc) {
        _id,
        title,
        slug,
        excerpt,
        publishedAt,
        author->{name},
        category,
        "image": featuredImage.asset->url,
      }`
    )

    return Response.json(posts)
  } catch (error) {
    console.error('Error fetching posts:', error)
    return Response.json({ error: 'Failed to fetch posts' }, { status: 500 })
  }
}
