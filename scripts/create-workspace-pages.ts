import { writeClient } from '../lib/sanity/write-client'
import { workspaceContent } from '../content/workspace-content'

function textToBlocks(text: string) {
  const paragraphs = text.split(/\n\n+/).filter((p) => p.trim())
  return paragraphs.map((paragraph, idx) => ({
    _type: 'block' as const,
    _key: `block${idx}`,
    style: 'normal' as const,
    markDefs: [],
    children: [
      {
        _type: 'span' as const,
        _key: `span${idx}`,
        text: paragraph.trim(),
        marks: [],
      },
    ],
  }))
}

const workspacePages = Object.values(workspaceContent).map((space) => ({
  title: space.title,
  slug: space.slug,
  content: space.description,
  metaTitle: space.metaTitle,
  metaDescription: space.metaDescription,
}))

async function createWorkspacePages() {
  console.log(`Creating ${workspacePages.length} workspace pages...\n`)

  for (const page of workspacePages) {
    try {
      // Check if page already exists
      const existing = await writeClient.fetch(
        `*[_type == "page" && slug.current == $slug][0]`,
        { slug: page.slug }
      )
      if (existing) {
        console.log(`Already exists, skipping: ${page.title}`)
        continue
      }

      await writeClient.create({
        _type: 'page',
        title: page.title,
        slug: {
          _type: 'slug',
          current: page.slug,
        },
        content: textToBlocks(page.content),
        published: true,
        seo: {
          metaTitle: page.metaTitle,
          metaDescription: page.metaDescription,
        },
      })

      console.log(`Created: ${page.title}`)
    } catch (error) {
      console.error(`Error creating ${page.title}:`, error)
    }
  }

  console.log('\nWorkspace page creation complete!')
}

createWorkspacePages().catch(console.error)
