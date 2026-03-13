import { Metadata } from 'next'

const baseUrl = 'https://hintonworkspace.co.uk'
const siteName = 'Hinton Workspace'
const defaultDescription =
  'Flexible coworking space in North Dorset. Hot desks, meeting rooms, and event spaces in a calm, professional environment.'

interface PageMetaOptions {
  title: string
  description?: string
  path?: string
  image?: string
  type?: 'website' | 'article'
  publishedTime?: string
  modifiedTime?: string
}

export function generatePageMeta({
  title,
  description = defaultDescription,
  path = '',
  image = '/Website Images 2026/About/The-Hinton-Workspace-Building copy.jpg',
  type = 'website',
  publishedTime,
  modifiedTime,
}: PageMetaOptions): Metadata {
  const url = `${baseUrl}${path}`
  const imageUrl = image.startsWith('http') ? image : `${baseUrl}${image}`

  return {
    title,
    description,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title,
      description,
      url,
      siteName,
      type,
      images: [{ url: imageUrl, width: 1200, height: 630, alt: title }],
      locale: 'en_GB',
      ...(publishedTime && { publishedTime }),
      ...(modifiedTime && { modifiedTime }),
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [imageUrl],
    },
  }
}
