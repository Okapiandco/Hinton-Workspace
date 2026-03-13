import { MetadataRoute } from 'next'
import { client } from '@/lib/sanity/client'
import { groq } from 'next-sanity'

const baseUrl = 'https://hintonworkspace.co.uk'

function safeDate(dateString: string | null | undefined): Date {
  if (!dateString) return new Date()
  const d = new Date(dateString)
  return isNaN(d.getTime()) ? new Date() : d
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  // Static pages
  const staticPages: MetadataRoute.Sitemap = [
    { url: baseUrl, lastModified: new Date(), changeFrequency: 'weekly', priority: 1.0 },
    { url: `${baseUrl}/about-us`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/pricing`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/contact`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 },
    { url: `${baseUrl}/workspace`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/workspace/coworking`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 },
    { url: `${baseUrl}/workspace/meeting-rooms`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 },
    { url: `${baseUrl}/workspace/pods`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 },
    { url: `${baseUrl}/workspace/event-space`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 },
    { url: `${baseUrl}/workspace/the-garden-room`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 },
    { url: `${baseUrl}/wellbeing`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 },
    { url: `${baseUrl}/whats-on`, lastModified: new Date(), changeFrequency: 'weekly', priority: 0.7 },
    { url: `${baseUrl}/events`, lastModified: new Date(), changeFrequency: 'weekly', priority: 0.7 },
    { url: `${baseUrl}/news`, lastModified: new Date(), changeFrequency: 'weekly', priority: 0.7 },
    { url: `${baseUrl}/faqs`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.5 },
    { url: `${baseUrl}/legal/privacy`, lastModified: new Date(), changeFrequency: 'yearly', priority: 0.3 },
    { url: `${baseUrl}/legal/terms`, lastModified: new Date(), changeFrequency: 'yearly', priority: 0.3 },
  ]

  // Blog posts from Sanity
  const posts = await client.fetch(
    groq`*[_type == "post"] | order(publishedAt desc) { slug, publishedAt }`
  )
  const postPages: MetadataRoute.Sitemap = posts.map((post: any) => ({
    url: `${baseUrl}/news/${post.slug.current}`,
    lastModified: safeDate(post.publishedAt),
    changeFrequency: 'monthly' as const,
    priority: 0.6,
  }))

  // Events from Sanity
  const events = await client.fetch(
    groq`*[_type == "event"] | order(startDate desc) { slug, startDate }`
  )
  const eventPages: MetadataRoute.Sitemap = events.map((event: any) => ({
    url: `${baseUrl}/events/${event.slug.current}`,
    lastModified: safeDate(event.startDate),
    changeFrequency: 'monthly' as const,
    priority: 0.6,
  }))

  return [...staticPages, ...postPages, ...eventPages]
}
