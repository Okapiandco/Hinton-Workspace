import { client } from '@/lib/sanity/client'
import { groq } from 'next-sanity'
import { Metadata } from 'next'
import Link from 'next/link'
import Section from '@/components/ui/Section'
import Button from '@/components/ui/Button'
import { notFound } from 'next/navigation'

interface WorkspacePageProps {
  params: Promise<{ slug: string }>
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

  return {
    title: page.seo?.metaTitle || `${page.title} | Hinton Workspace`,
    description: page.seo?.metaDescription || '',
  }
}

export default async function WorkspacePage({ params }: WorkspacePageProps) {
  const { slug } = await params
  const page = await getWorkspacePage(slug)

  if (!page) {
    notFound()
  }

  const spacebringUrl = `${process.env.NEXT_PUBLIC_SPACEBRING_BASE_URL}?organizationId=${process.env.NEXT_PUBLIC_SPACEBRING_ORG_ID}`

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

      {/* Content */}
      <Section bgColor="white">
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
    </>
  )
}
