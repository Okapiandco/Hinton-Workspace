import { client } from '@/lib/sanity/client'
import { groq } from 'next-sanity'
import { Metadata } from 'next'
import { notFound } from 'next/navigation'

interface PageProps {
  params: Promise<{ slug: string }>
}

async function getPage(slug: string) {
  return await client.fetch(
    groq`*[_type == "page" && slug.current == $slug][0] {
      _id,
      title,
      slug,
      content,
      seo,
    }`,
    { slug }
  )
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params
  const page = await getPage(slug)

  if (!page) {
    return {
      title: 'Not Found',
      description: 'The page you are looking for does not exist.',
    }
  }

  const title = page.seo?.metaTitle || page.title
  const description = page.seo?.metaDescription || `${page.title} at Hinton Workspace, flexible coworking in North Dorset.`
  const pageUrl = `https://hintonworkspace.co.uk/${slug}`

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
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
    },
  }
}

export default async function DynamicPage({ params }: PageProps) {
  const { slug } = await params
  const page = await getPage(slug)

  if (!page) {
    notFound()
  }

  return (
    <main className="min-h-screen bg-cream">
      <div className="max-w-7xl mx-auto px-4 py-16">
        <h1 className="text-5xl font-serif font-bold text-dark-green mb-8">
          {page.title}
        </h1>
        <div className="prose font-sans text-gray-700 max-w-3xl">
          {page.content &&
            page.content.map((block: any, idx: number) => (
              <div key={idx} className="mb-6">
                {block._type === 'block' && (
                  <p className="leading-relaxed">{block.children?.[0]?.text}</p>
                )}
              </div>
            ))}
        </div>
      </div>
    </main>
  )
}
