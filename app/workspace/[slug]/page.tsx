import { client } from '@/lib/sanity/client'
import { groq } from 'next-sanity'
import { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import Section from '@/components/ui/Section'
import Button from '@/components/ui/Button'
import LightboxGallery from '@/components/ui/Lightbox'
import { notFound } from 'next/navigation'

interface WorkspacePageProps {
  params: Promise<{ slug: string }>
}

const workspaceImages: Record<string, { hero: string; gallery?: string[] }> = {
  'meeting-rooms': {
    hero: '/Website Images 2026/Meeting Rooms/Meeting room.jpg',
    gallery: [
      '/Website Images 2026/Meeting Rooms/The Long Room.jpg',
      "/Website Images 2026/Meeting Rooms/Clerk's Office.JPG",
      "/Website Images 2026/Meeting Rooms/Clerk's Office Window.jpg",
      '/Website Images 2026/Meeting Rooms/The Sitting Room.jpg',
      '/Website Images 2026/Meeting Rooms/The Workshop.jpg',
    ],
  },
  coworking: {
    hero: '/Website Images 2026/Coworking/Coworking and Pods.jpg',
    gallery: [
      '/Website Images 2026/Coworking/Fireplace.jpg',
      '/Website Images 2026/Coworking/Front Desk.jpg',
      '/Website Images 2026/Coworking/Outside area.jpg',
    ],
  },
  workshop: {
    hero: '/Website Images 2026/The Workshop.jpg',
  },
  'sitting-room': {
    hero: '/Website Images 2026/The Snug.jpg',
    gallery: [
      '/Website Images 2026/Meeting Rooms/The Sitting Room.jpg',
    ],
  },
  'clerks-office': {
    hero: "/Website Images 2026/Meeting Rooms/Clerk's Office.JPG",
    gallery: [
      "/Website Images 2026/Meeting Rooms/Clerk's Office Window.jpg",
    ],
  },
}

async function getWorkspacePage(slug: string) {
  return await client.fetch(
    groq`*[_type == "page" && slug.current == $slug][0] {
      _id,
      title,
      slug,
      content,
      seo,
    }`,
    { slug: `workspace-${slug}` }
  )
}

export async function generateMetadata({
  params,
}: WorkspacePageProps): Promise<Metadata> {
  const { slug } = await params
  const page = await getWorkspacePage(slug)

  if (!page) {
    return { title: 'Workspace Not Found' }
  }

  const title = page.seo?.metaTitle || `${page.title} | Hinton Workspace`
  const description = page.seo?.metaDescription || ''
  const heroImage = workspaceImages[slug]?.hero
  const pageUrl = `https://hintonworkspace.co.uk/workspace/${slug}`

  return {
    title,
    description,
    alternates: {
      canonical: pageUrl,
    },
    openGraph: {
      title,
      description,
      url: pageUrl,
      ...(heroImage && { images: [{ url: heroImage, width: 1200, height: 630, alt: title }] }),
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      ...(heroImage && { images: [heroImage] }),
    },
  }
}

export default async function WorkspacePage({ params }: WorkspacePageProps) {
  const { slug } = await params
  const page = await getWorkspacePage(slug)

  if (!page) {
    notFound()
  }

  const spacebringUrl = `${process.env.NEXT_PUBLIC_SPACEBRING_BASE_URL}?organizationId=${process.env.NEXT_PUBLIC_SPACEBRING_ORG_ID}`
  const images = workspaceImages[slug]

  return (
    <>
      {/* Hero */}
      <Section className="pt-32 pb-16">
        <div className="max-w-3xl mx-auto">
          <Link
            href="/workspace"
            className="text-sm font-sans text-pink hover:text-dark-green transition-colors mb-4 inline-block"
          >
            &larr; Back to Workspaces
          </Link>
          <h1 className="text-5xl font-serif font-bold text-dark-green mb-6">
            {page.title}
          </h1>
          <a
            href={spacebringUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button variant="primary" size="lg">
              Book This Space
            </Button>
          </a>
        </div>
      </Section>

      {/* Hero Image */}
      {images?.hero && (
        <Section bgColor="white" className="pt-0">
          <div className="max-w-5xl mx-auto">
            <div className="relative aspect-video rounded-lg overflow-hidden">
              <Image
                src={images.hero}
                alt={page.title}
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </Section>
      )}

      {/* Content */}
      <Section>
        <div className="max-w-3xl mx-auto">
          <div className="prose font-sans text-gray-700">
            {page.content &&
              page.content.map((block: any, idx: number) => (
                <p key={idx} className="mb-6 text-lg leading-relaxed">
                  {block.children?.[0]?.text}
                </p>
              ))}
          </div>
        </div>
      </Section>

      {/* Image Gallery */}
      {images?.gallery && images.gallery.length > 0 && (
        <Section bgColor="white">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-serif font-bold text-dark-green mb-8 text-center">Gallery</h2>
            <LightboxGallery
              images={images.gallery.map((img, idx) => ({
                src: img,
                alt: `${page.title} - image ${idx + 1}`,
              }))}
            />
          </div>
        </Section>
      )}

      {/* CTA */}
      <Section>
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-serif font-bold text-dark-green mb-4">Ready to book?</h2>
          <p className="font-sans text-gray-600 mb-6">Book this space online or get in touch to arrange a tour.</p>
          <div className="flex items-center justify-center gap-4">
            <a href={spacebringUrl} target="_blank" rel="noopener noreferrer">
              <Button variant="primary" size="lg">Book Now</Button>
            </a>
            <Link href="/contact">
              <Button variant="outline" size="lg">Contact Us</Button>
            </Link>
          </div>
        </div>
      </Section>
    </>
  )
}
