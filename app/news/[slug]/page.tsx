import { client } from '@/lib/sanity/client'
import { groq } from 'next-sanity'
import { Metadata } from 'next'
import Link from 'next/link'
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
      seo,
    }`,
    { slug }
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

  return {
    title: post.seo?.metaTitle || post.title,
    description: post.seo?.metaDescription || post.excerpt,
    openGraph: {
      title: post.seo?.metaTitle || post.title,
      description: post.seo?.metaDescription || post.excerpt,
    },
  }
}

export default async function PostPage({ params }: PostPageProps) {
  const { slug } = await params
  const post = await getPost(slug)

  if (!post) {
    notFound()
  }

  return (
    <main className="min-h-screen bg-cream">
      <article className="max-w-3xl mx-auto px-4 py-16">
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
          <div className="flex justify-between text-sm font-sans text-gray-600">
            <span>{post.author?.name || 'Hinton Workspace'}</span>
            <span>
              {new Date(post.publishedAt).toLocaleDateString('en-GB', {
                day: 'numeric',
                month: 'long',
                year: 'numeric',
              })}
            </span>
          </div>
        </header>

        <div className="prose font-sans text-gray-700">
          {post.body &&
            post.body.map((block: any, idx: number) => (
              <div key={idx} className="mb-6">
                {block._type === 'block' && (
                  <p className="leading-relaxed">
                    {block.children?.[0]?.text}
                  </p>
                )}
              </div>
            ))}
        </div>
      </article>
    </main>
  )
}
