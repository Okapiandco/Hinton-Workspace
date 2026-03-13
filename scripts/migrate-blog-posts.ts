import { writeClient } from '../lib/sanity/write-client'
import fs from 'fs'
import path from 'path'
import csv from 'csv-parser'

interface BlogPostCSV {
  _type: string
  title: string
  'slug.current': string
  publishedAt: string
  author: string
  sourceUrl: string
  featuredImageAlt: string
  excerpt: string
  body: string
  retrievalStatus: string
  notes: string
}

async function createAuthor(name: string) {
  try {
    const existingAuthor = await writeClient.fetch(
      `*[_type == "author" && name == $name][0]`,
      { name }
    )
    if (existingAuthor) return existingAuthor._id

    const author = await writeClient.create({
      _type: 'author',
      name: name || 'Hinton Workspace',
      email: 'reception@hintonworkspace.co.uk',
    })
    console.log(`Created author: ${author.name}`)
    return author._id
  } catch (error) {
    console.error(`Error creating author ${name}:`, error)
    return null
  }
}

function parseBodyToBlocks(bodyText: string) {
  if (!bodyText) return []

  const paragraphs = bodyText.split(/\n\n+/).filter((p) => p.trim())

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

async function migrateBlogPosts() {
  const csvPath = path.join(process.cwd(), 'posts.csv')

  if (!fs.existsSync(csvPath)) {
    console.error('Error: posts.csv not found in project root.')
    console.error('Please place the CSV file at:', csvPath)
    process.exit(1)
  }

  const posts: BlogPostCSV[] = []

  return new Promise<void>((resolve, reject) => {
    fs.createReadStream(csvPath)
      .pipe(csv())
      .on('data', (row: BlogPostCSV) => {
        posts.push(row)
      })
      .on('end', async () => {
        console.log(`Found ${posts.length} blog posts to migrate\n`)

        let migrated = 0
        let skipped = 0

        for (const post of posts) {
          try {
            // Skip trashed posts
            if (post['slug.current']?.includes('trashed')) {
              console.log(`Skipping trashed post: ${post.title}`)
              skipped++
              continue
            }

            // Check if post already exists
            const existing = await writeClient.fetch(
              `*[_type == "post" && slug.current == $slug][0]`,
              { slug: post['slug.current'] }
            )
            if (existing) {
              console.log(`Already exists, skipping: ${post.title}`)
              skipped++
              continue
            }

            // Create or get author
            const authorId = await createAuthor(post.author || 'Hinton Workspace')

            // Parse body into Portable Text blocks
            const bodyBlocks = parseBodyToBlocks(post.body)

            // Create post in Sanity
            const sanityPost = await writeClient.create({
              _type: 'post',
              title: post.title,
              slug: {
                _type: 'slug',
                current: post['slug.current'],
              },
              publishedAt: post.publishedAt,
              ...(authorId && {
                author: {
                  _type: 'reference',
                  _ref: authorId,
                },
              }),
              excerpt: post.excerpt || '',
              body:
                bodyBlocks.length > 0
                  ? bodyBlocks
                  : [
                      {
                        _type: 'block',
                        _key: 'block0',
                        style: 'normal',
                        markDefs: [],
                        children: [
                          {
                            _type: 'span',
                            _key: 'span0',
                            text: post.excerpt || '',
                            marks: [],
                          },
                        ],
                      },
                    ],
              category: 'news',
              seo: {
                metaTitle: post.title,
                metaDescription: (post.excerpt || '').substring(0, 160),
              },
            })

            console.log(`Migrated: ${post.title} (${sanityPost._id})`)
            migrated++
          } catch (error) {
            console.error(`Error migrating ${post.title}:`, error)
          }
        }

        console.log(`\nMigration complete!`)
        console.log(`Migrated: ${migrated}, Skipped: ${skipped}`)
        resolve()
      })
      .on('error', reject)
  })
}

migrateBlogPosts().catch(console.error)
