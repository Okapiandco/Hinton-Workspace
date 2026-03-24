import { client } from '@/lib/sanity/client'
import { groq } from 'next-sanity'
import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { urlForImage } from '@/lib/sanity/image'
import { blogImages } from '@/lib/blog-images'
import { notFound } from 'next/navigation'
import SchemaScript from '@/components/SchemaScript'
import { articleSchema, breadcrumbSchema } from '@/lib/schema'

interface PostPageProps {
  params: Promise<{ slug: string }>
}

async function getPost(slug: string) {
  return await client.fetch(
    groq`*[_type == "post" && slug.current == $slug][0] {
      _id,
      title,
      slug,
      publishedAt,
      author->{name},
      excerpt,
      body,
      category,
      featuredImage,
      seo,
    }`,
    { slug }
  )
}

async function getRelatedPosts(slug: string, category: string | null) {
  // Try category match first, fall back to recent posts
  const categoryPosts = category
    ? await client.fetch(
        groq`*[_type == "post" && slug.current != $slug && category == $category] | order(publishedAt desc)[0...3] {
          _id,
          title,
          slug,
          excerpt,
          publishedAt,
          featuredImage,
        }`,
        { slug, category }
      )
    : []

  if (categoryPosts.length >= 3) return categoryPosts

  // Fill with recent posts if not enough category matches
  const recentPosts = await client.fetch(
    groq`*[_type == "post" && slug.current != $slug] | order(publishedAt desc)[0...3] {
      _id,
      title,
      slug,
      excerpt,
      publishedAt,
      featuredImage,
    }`,
    { slug }
  )

  // Merge: category posts first, then recent (deduplicated)
  const seen = new Set(categoryPosts.map((p: any) => p._id))
  const merged = [...categoryPosts]
  for (const post of recentPosts) {
    if (!seen.has(post._id) && merged.length < 3) {
      merged.push(post)
      seen.add(post._id)
    }
  }
  return merged
}

export async function generateMetadata({
  params,
}: PostPageProps): Promise<Metadata> {
  const { slug } = await params
  const post = await getPost(slug)

  if (!post) {
    return { title: 'Post Not Found' }
  }

  const sanityImage = post.featuredImage
    ? urlForImage(post.featuredImage)?.width(1200).height(630).url() || ''
    : ''
  const localImage = blogImages[post.slug?.current] || ''
  const logoFallback = '/Website Images 2026/Logos/HINTON_WORKSPACE_LOGO_GREEN_RGB.png'
  const ogImage = sanityImage || localImage || logoFallback
  const title = post.seo?.metaTitle || post.title
  const description = post.seo?.metaDescription || post.excerpt || ''
  const postUrl = `https://hintonworkspace.co.uk/news/${post.slug.current}`

  return {
    title,
    description,
    alternates: {
      canonical: postUrl,
    },
    openGraph: {
      title,
      description,
      url: postUrl,
      type: 'article',
      images: [{ url: ogImage, width: 1200, height: 630, alt: title }],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [ogImage],
    },
  }
}

export default async function PostPage({ params }: PostPageProps) {
  const { slug } = await params
  const post = await getPost(slug)

  if (!post) {
    notFound()
  }

  const relatedPosts = await getRelatedPosts(slug, post.category || null)

  const sanityImage = post.featuredImage
    ? urlForImage(post.featuredImage)?.url()
    : null
  const localImage = blogImages[post.slug?.current] || null
  const imageUrl = sanityImage || localImage

  const baseUrl = 'https://hintonworkspace.co.uk'

  return (
    <article className="max-w-3xl mx-auto px-4 py-16">
      <SchemaScript
        schema={articleSchema({
          title: post.title,
          description: post.excerpt || '',
          url: `${baseUrl}/news/${post.slug.current}`,
          image: imageUrl || undefined,
          datePublished: post.publishedAt,
          authorName: post.author?.name,
        })}
      />
      <SchemaScript
        schema={breadcrumbSchema([
          { name: 'Home', url: baseUrl },
          { name: 'News', url: `${baseUrl}/news` },
          { name: post.title, url: `${baseUrl}/news/${post.slug.current}` },
        ])}
      />

      {/* Back link */}
      <Link
        href="/news"
        className="text-sm font-sans text-pink hover:text-dark-green transition-colors mb-6 inline-block"
      >
        &larr; Back to Blog
      </Link>

      {/* Featured Image Header */}
      {imageUrl && (
        <div className="mb-8 rounded-lg overflow-hidden shadow-lg">
          <Image
            src={imageUrl}
            alt={post.title}
            width={800}
            height={450}
            className="w-full h-auto"
            priority
          />
        </div>
      )}

      {/* Header */}
      <header className="mb-12">
        <h1 className="text-4xl md:text-5xl font-serif font-bold text-dark-green mb-4">
          {post.title}
        </h1>
        <div className="flex flex-wrap justify-between items-center text-sm font-sans text-gray-600 border-b border-light-pink pb-4">
          <div className="flex items-center gap-4">
            <span>{post.author?.name || 'Hinton Workspace'}</span>
            <span>
              {new Date(post.publishedAt).toLocaleDateString('en-GB', {
                day: 'numeric',
                month: 'long',
                year: 'numeric',
              })}
            </span>
          </div>
          {post.category && (
            <span className="bg-light-pink text-dark-green px-3 py-1 rounded-full text-xs font-bold uppercase">
              {post.category}
            </span>
          )}
        </div>
      </header>

      {/* Content */}
      <div className="prose font-sans text-gray-700 mb-12">
        {post.body &&
          post.body.map((block: any, idx: number) => (
            <div key={idx} className="mb-6">
              {block._type === 'block' && (
                <p className="text-lg leading-relaxed">
                  {block.children?.[0]?.text}
                </p>
              )}
            </div>
          ))}
      </div>

      {/* Related Posts */}
      {relatedPosts.length > 0 && (
        <div className="mt-16 pt-8 border-t border-light-pink">
          <h2 className="text-2xl font-serif font-bold text-dark-green mb-6">
            Related Articles
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {relatedPosts.map((related: any) => {
              const relSanityImg = related.featuredImage
                ? urlForImage(related.featuredImage)?.width(400).height(225).url()
                : null
              const relLocalImg = blogImages[related.slug?.current] || null
              const relImg = relSanityImg || relLocalImg

              return (
                <Link
                  key={related._id}
                  href={`/news/${related.slug.current}`}
                  className="group"
                >
                  <div className="bg-white border border-light-pink rounded-lg overflow-hidden hover:shadow-md transition-shadow">
                    {relImg && (
                      <div className="relative aspect-[16/9] overflow-hidden">
                        <Image
                          src={relImg}
                          alt={related.title}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                    )}
                    <div className="p-4">
                      <h3 className="text-base font-serif font-bold text-dark-green group-hover:text-pink transition-colors mb-2 line-clamp-2">
                        {related.title}
                      </h3>
                      <p className="font-sans text-gray-500 text-xs">
                        {new Date(related.publishedAt).toLocaleDateString('en-GB', {
                          day: 'numeric',
                          month: 'long',
                          year: 'numeric',
                        })}
                      </p>
                    </div>
                  </div>
                </Link>
              )
            })}
          </div>
        </div>
      )}
    </article>
  )
}
