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
    { url: `${baseUrl}/corporate-events`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/events`, lastModified: new Date(), changeFrequency: 'weekly', priority: 0.7 },
    { url: `${baseUrl}/news`, lastModified: new Date(), changeFrequency: 'weekly', priority: 0.7 },
    { url: `${baseUrl}/faqs`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.5 },
    { url: `${baseUrl}/legal/privacy`, lastModified: new Date(), changeFrequency: 'yearly', priority: 0.3 },
    { url: `${baseUrl}/legal/terms`, lastModified: new Date(), changeFrequency: 'yearly', priority: 0.3 },
  ]

  // Blog posts from Sanity (use _updatedAt for accurate lastModified)
  const posts = await client.fetch(
    groq`*[_type == "post"] | order(publishedAt desc) { slug, publishedAt, _updatedAt }`
  )
  const postPages: MetadataRoute.Sitemap = posts
    .filter((post: any) => post.slug?.current)
    .map((post: any) => ({
      url: `${baseUrl}/news/${post.slug.current}`,
      lastModified: safeDate(post._updatedAt || post.publishedAt),
      changeFrequency: 'monthly' as const,
      priority: 0.6,
    }))

  // Events from Sanity (use _updatedAt for accurate lastModified)
  const events = await client.fetch(
    groq`*[_type == "event"] | order(startDate desc) { slug, startDate, _updatedAt }`
  )
  const eventPages: MetadataRoute.Sitemap = events
    .filter((event: any) => event.slug?.current)
    .map((event: any) => ({
      url: `${baseUrl}/events/${event.slug.current}`,
      lastModified: safeDate(event._updatedAt || event.startDate),
      changeFrequency: 'monthly' as const,
      priority: 0.6,
    }))

  // Dynamic pages from Sanity
  const pages = await client.fetch(
    groq`*[_type == "page" && published == true] { slug, _updatedAt }`
  )
  const dynamicPages: MetadataRoute.Sitemap = pages
    .filter((page: any) => page.slug?.current)
    .map((page: any) => ({
      url: `${baseUrl}/${page.slug.current}`,
      lastModified: safeDate(page._updatedAt),
      changeFrequency: 'monthly' as const,
      priority: 0.5,
    }))

  return [...staticPages, ...postPages, ...eventPages, ...dynamicPages]
}
