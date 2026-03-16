import { client } from '@/lib/sanity/client'
import { groq } from 'next-sanity'
import { urlForImage } from '@/lib/sanity/image'
import { blogImages } from '@/lib/blog-images'
import Link from 'next/link'
import Image from 'next/image'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'News & Insights | Hinton Workspace',
  description:
    'Explore the Hinton Workspace blog: inspiration, productivity tips, community news, and workplace stories from rural Dorset.',
  alternates: {
    canonical: 'https://hintonworkspace.co.uk/news',
  },
  openGraph: {
    title: 'News & Insights | Hinton Workspace',
    description:
      'Explore the Hinton Workspace blog: inspiration, productivity tips, community news, and workplace stories from rural Dorset.',
    url: 'https://hintonworkspace.co.uk/news',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'News & Insights | Hinton Workspace',
    description:
      'Explore the Hinton Workspace blog: inspiration, productivity tips, community news, and workplace stories from rural Dorset.',
  },
}

async function getPosts() {
  return await client.fetch(
    groq`*[_type == "post"] | order(publishedAt desc) {
      _id,
      title,
      slug,
      excerpt,
      publishedAt,
      author->{name},
      featuredImage,
    }`
  )
}

export default async function NewsPage() {
  const posts = await getPosts()

  return (
    <main className="min-h-screen bg-cream">
      <div className="max-w-7xl mx-auto px-4 py-16">
        <h1 className="text-5xl font-serif font-bold text-dark-green mb-4">
          News & Insights
        </h1>
        <p className="text-lg font-sans text-gray-600 mb-12">
          Stories and insights from the Hinton Workspace community.
        </p>

        {posts.length === 0 ? (
          <p className="text-gray-500 font-sans">No posts yet. Check back soon.</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {posts.map((post: any) => {
              const sanityImage = post.featuredImage
                ? urlForImage(post.featuredImage)?.width(600).height(340).url()
                : null
              const localImage = blogImages[post.slug?.current]
              const imageSrc = sanityImage || localImage || null

              return (
                <Link
                  key={post._id}
                  href={`/news/${post.slug.current}`}
                  className="group"
                >
                  <div className="bg-white border border-light-pink rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
                    {imageSrc && (
                      <div className="relative aspect-[16/9] overflow-hidden">
                        <Image
                          src={imageSrc}
                          alt={post.title}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                    )}
                    <div className="p-6">
                      <h2 className="text-2xl font-serif font-bold text-dark-green mb-3 group-hover:text-pink transition-colors">
                        {post.title}
                      </h2>
                      <p className="text-gray-600 font-sans mb-4 line-clamp-3">
                        {post.excerpt}
                      </p>
                      <div className="flex justify-between items-center text-sm font-sans text-gray-500">
                        <span>{post.author?.name || 'Hinton Workspace'}</span>
                        <span>
                          {new Date(post.publishedAt).toLocaleDateString('en-GB', {
                            day: 'numeric',
                            month: 'long',
                            year: 'numeric',
                          })}
                        </span>
                      </div>
                    </div>
                  </div>
                </Link>
              )
            })}
          </div>
        )}
      </div>
    </main>
  )
}
