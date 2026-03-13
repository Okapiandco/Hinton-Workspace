import { client } from '@/lib/sanity/client'
import { groq } from 'next-sanity'
import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { urlForImage } from '@/lib/sanity/image'
import { notFound } from 'next/navigation'

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

async function getRelatedPosts(slug: string, category: string) {
  return await client.fetch(
    groq`*[_type == "post" && slug.current != $slug && category == $category] | order(publishedAt desc)[0...3] {
      _id,
      title,
      slug,
      excerpt,
      publishedAt,
    }`,
    { slug, category }
  )
}

export async function generateMetadata({
  params,
}: PostPageProps): Promise<Metadata> {
  const { slug } = await params
  const post = await getPost(slug)

  if (!post) {
    return { title: 'Post Not Found' }
  }

  const imageUrl = post.featuredImage
    ? urlForImage(post.featuredImage)?.url() || ''
    : ''

  return {
    title: post.seo?.metaTitle || post.title,
    description: post.seo?.metaDescription || post.excerpt,
    openGraph: {
      title: post.seo?.metaTitle || post.title,
      description: post.seo?.metaDescription || post.excerpt,
      ...(imageUrl && { images: [{ url: imageUrl }] }),
    },
  }
}

export default async function PostPage({ params }: PostPageProps) {
  const { slug } = await params
  const post = await getPost(slug)

  if (!post) {
    notFound()
  }

  const relatedPosts = await getRelatedPosts(slug, post.category || 'news')

  const imageUrl = post.featuredImage
    ? urlForImage(post.featuredImage)?.url()
    : null

  return (
    <article className="max-w-3xl mx-auto px-4 py-16">
      {/* Featured Image */}
      {imageUrl && (
        <div className="mb-8 rounded-lg overflow-hidden shadow-lg">
          <Image
            src={imageUrl}
            alt={post.title}
            width={800}
            height={400}
            className="w-full h-auto"
          />
        </div>
      )}

      {/* Header */}
      <header className="mb-12">
        <Link
          href="/news"
          className="text-sm font-sans text-pink hover:text-dark-green transition-colors mb-4 inline-block"
        >
          &larr; Back to News
        </Link>
        <h1 className="text-5xl font-serif font-bold text-dark-green mb-4">
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
          <div className="space-y-4">
            {relatedPosts.map((related: any) => (
              <Link
                key={related._id}
                href={`/news/${related.slug.current}`}
              >
                <div className="bg-white border border-light-pink rounded-lg p-6 hover:shadow-md transition-shadow cursor-pointer mb-4">
                  <h3 className="text-xl font-serif font-bold text-dark-green hover:text-pink transition-colors mb-2">
                    {related.title}
                  </h3>
                  <p className="font-sans text-gray-600 text-sm">
                    {new Date(related.publishedAt).toLocaleDateString('en-GB', {
                      day: 'numeric',
                      month: 'long',
                      year: 'numeric',
                    })}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      )}
    </article>
  )
}
