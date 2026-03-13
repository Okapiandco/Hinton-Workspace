import { writeClient } from '../lib/sanity/write-client'

interface PageData {
  title: string
  slug: string
  content: string
  metaTitle: string
  metaDescription: string
}

const pages: PageData[] = [
  {
    title: 'About Hinton Workspace',
    slug: 'about-us',
    content: `Working Better. Together.

Hinton Workspace was created to offer a calmer, flexible way of working and connecting — one that reflects how people actually work today. People do their best work when they feel comfortable, supported, and free from unnecessary pressure.

A Word from Alice:
"Hinton Workspace grew from a simple idea — that work doesn't have to feel rushed, noisy, or disconnected from real life. I wanted a space where people could focus properly, feel welcome, and leave the day with energy intact."

The History:
Located within the historic Hinton St Mary estate, our buildings are carefully adapted to create calm, practical workspaces while respecting the estate's character. Modern work sits comfortably alongside history here.`,
    metaTitle: 'About Hinton Workspace | Rural Coworking Dorset',
    metaDescription:
      "Learn about Hinton Workspace's mission to offer calm, flexible working in rural Dorset.",
  },
  {
    title: 'Pricing & Membership',
    slug: 'pricing',
    content: `Flexible options designed to suit your work style. No long-term commitments required.

Day Pass — Perfect for occasional use
£30 per day
Access 08:30–17:00, High-speed WiFi, Tea & coffee, Kitchen access, Dog friendly

Part-Time Pass — Ideal for flexible workers
£250 per 10 day passes
10 day passes, Access 08:30–17:00, Meeting room credits, All amenities, Community events

Full-Time Membership — For dedicated professionals
£270 per month
Unlimited access, Meeting room bookings, 24/7 access, Business address use`,
    metaTitle: 'Pricing | Hinton Workspace Dorset',
    metaDescription:
      'Flexible membership options from £30 per day to £270 per month. No long-term commitments.',
  },
  {
    title: 'Contact & Visit',
    slug: 'contact',
    content: `Plan Your Visit

Hinton Workspace, The Building Yard
Hinton St Mary, Sturminster Newton
DT10 1NA

Phone: 01258 472623
Email: reception@hintonworkspace.co.uk

Opening Hours: 9am–5pm, Monday–Friday (Full members 24/7)

Free parking available on site.`,
    metaTitle: 'Contact Hinton Workspace | Book Your Tour',
    metaDescription:
      'Get in touch with Hinton Workspace in North Dorset. Phone, email, or book a tour.',
  },
  {
    title: 'Frequently Asked Questions',
    slug: 'faqs',
    content: `Frequently Asked Questions

Do I need to book a desk?
No booking required for day passes — just turn up during opening hours. Full-time members have 24/7 access.

Can I bring my dog?
Yes! Hinton Workspace is dog friendly. Well-behaved dogs are welcome in the coworking areas.

Is there parking?
Yes, free on-site parking is available for all members and day pass users.

What's the Wi-Fi like?
We have high-speed fibre broadband throughout the workspace.

Can I use the space for meetings?
Yes, we have dedicated meeting rooms available to book. Members receive meeting room credits as part of their membership.

Is there a minimum commitment?
No. You can use a day pass with no commitment, or our memberships are rolling monthly with no long-term contracts.`,
    metaTitle: 'FAQs | Hinton Workspace',
    metaDescription:
      'Frequently asked questions about coworking, meeting rooms, pricing, and booking at Hinton Workspace.',
  },
]

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

async function createPages() {
  console.log(`Creating ${pages.length} pages...\n`)

  for (const page of pages) {
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

  console.log('\nPage creation complete!')
}

createPages().catch(console.error)
