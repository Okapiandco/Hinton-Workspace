import { createClient } from '@sanity/client'

const client = createClient({
  projectId: '5e5gqzge',
  dataset: 'production',
  apiVersion: '2024-03-13',
  token: process.env.SANITY_API_TOKEN,
  useCdn: false,
})

const events = [
  {
    _type: 'event',
    title: "Claude AI Course for SME's",
    slug: { _type: 'slug', current: 'claude-ai-course-for-smes' },
    startDate: '2026-03-19T09:00:00.000Z',
    endDate: '2026-03-19T10:30:00.000Z',
    location: 'Hinton Workspace',
    price: '£29 per person',
    bookingUrl: '',
    status: 'published',
    description: [
      {
        _type: 'block',
        _key: 'desc1',
        style: 'normal',
        markDefs: [],
        children: [
          {
            _type: 'span',
            _key: 'span1',
            text: "Join Chris Duffy from Ignite AI to discover how your business can unlock the full potential of Claude, streamline operations, and use AI more strategically across your organisation.",
            marks: [],
          },
        ],
      },
      {
        _type: 'block',
        _key: 'desc2',
        style: 'normal',
        markDefs: [],
        children: [
          {
            _type: 'span',
            _key: 'span2',
            text: 'Bring your laptop with you to get the most out of the morning.',
            marks: [],
          },
        ],
      },
    ],
  },
  {
    _type: 'event',
    title: 'Sturminster Newton Business Awards',
    slug: { _type: 'slug', current: 'sturminster-newton-business-awards' },
    startDate: '2026-06-11T12:30:00.000Z',
    endDate: '2026-06-11T15:00:00.000Z',
    location: 'The Tithe Barn, Hinton St Mary Estate, Hinton St Mary, Dorset',
    bookingUrl: 'https://www.marketingwest.co.uk/sturminster-business-awards',
    status: 'published',
    description: [
      {
        _type: 'block',
        _key: 'desc3',
        style: 'normal',
        markDefs: [],
        children: [
          {
            _type: 'span',
            _key: 'span3',
            text: "We're proud to be hosting the Sturminster Newton Business Awards at Hinton Workspace, in partnership with Marketing West.",
            marks: [],
          },
        ],
      },
      {
        _type: 'block',
        _key: 'desc4',
        style: 'normal',
        markDefs: [],
        children: [
          {
            _type: 'span',
            _key: 'span4',
            text: 'The awards celebrate the businesses, people and ideas shaping Sturminster Newton and the wider North Dorset area, and we\'re delighted to provide a world class venue for an afternoon that champions local enterprise and community.',
            marks: [],
          },
        ],
      },
      {
        _type: 'block',
        _key: 'desc5',
        style: 'normal',
        markDefs: [],
        children: [
          {
            _type: 'span',
            _key: 'span5',
            text: "It's a privilege to support an event that recognises the strength, resilience and creativity of our local business community, and to play a small part in celebrating the people driving North Dorset forward.",
            marks: [],
          },
        ],
      },
      {
        _type: 'block',
        _key: 'desc6',
        style: 'normal',
        markDefs: [],
        children: [
          {
            _type: 'span',
            _key: 'span6',
            text: 'Contact Marketing West for more details: https://www.marketingwest.co.uk/sturminster-business-awards',
            marks: [],
          },
        ],
      },
    ],
  },
]

async function seedEvents() {
  for (const event of events) {
    console.log(`Creating event: ${event.title}...`)
    const result = await client.create(event)
    console.log(`  Created with ID: ${result._id}`)
  }
  console.log('Done!')
}

seedEvents().catch(console.error)
