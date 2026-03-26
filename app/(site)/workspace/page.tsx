import { Metadata } from 'next'
import Section from '@/components/ui/Section'
import Link from 'next/link'
import Image from 'next/image'

export const metadata: Metadata = {
  title: 'Hinton Workspace – Charming Rural Co-Working in Dorset',
  description:
    'Historic Victorian workshop turned inspiring rural co-working in Dorset. Desks, pods, meeting rooms, EV charging & dog-friendly. Book today.',
  alternates: {
    canonical: 'https://hintonworkspace.co.uk/workspace',
  },
  openGraph: {
    title: 'Hinton Workspace – Charming Rural Co-Working in Dorset',
    description:
      'Historic Victorian workshop turned inspiring rural co-working in Dorset. Desks, pods, meeting rooms, EV charging & dog-friendly. Book today.',
    url: 'https://hintonworkspace.co.uk/workspace',
    type: 'website',
    images: [{ url: '/Website Images 2026/About/The-Hinton-Workspace-Building copy.jpg', width: 1200, height: 630, alt: 'Hinton Workspace' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Hinton Workspace – Charming Rural Co-Working in Dorset',
    description:
      'Historic Victorian workshop turned inspiring rural co-working in Dorset. Desks, pods, meeting rooms, EV charging & dog-friendly.',
    images: ['/Website Images 2026/About/The-Hinton-Workspace-Building copy.jpg'],
  },
}

const workspaces = [
  {
    title: 'Coworking Desks',
    slug: 'coworking',
    description:
      'Flexible hot desks perfect for remote workers and freelancers.',
    image: '/Website Images 2026/Coworking/Coworking and Pods.jpg',
  },
  {
    title: 'Meeting Rooms',
    slug: 'meeting-rooms',
    description:
      'Professional spaces for team meetings and client presentations.',
    image: '/Website Images 2026/Meeting Rooms/Meeting room.jpg',
  },
  {
    title: 'The Workshop',
    slug: 'workshop',
    description: 'Ground floor workspace with 24 desks and 2 private pods.',
    image: '/Website Images 2026/The Workshop.jpg',
  },
  {
    title: 'The Sitting Room',
    slug: 'sitting-room',
    description:
      'First-floor coworking with kitchen, cosy seating, and meeting rooms.',
    image: '/Website Images 2026/Coworking/The-sitting-room-1.jpg',
  },
  {
    title: "The Clerk's Office",
    slug: 'clerks-office',
    description:
      'Private meeting room for up to 12 with projector and high-speed fibre.',
    image: "/Website Images 2026/Meeting Rooms/Clerk's Office.JPG",
  },
]

export default function WorkspacesPage() {
  return (
    <>
      {/* Hero */}
      <Section className="pt-32 pb-16">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-5xl font-serif font-bold text-dark-green mb-6">
            The Workspace
          </h1>
          <p className="text-xl font-sans text-gray-700">
            Flexible space in North Dorset that fits with your work life.
          </p>
        </div>
      </Section>

      {/* Workspace Grid */}
      <Section bgColor="white">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {workspaces.map((workspace) => (
            <Link key={workspace.slug} href={`/workspace/${workspace.slug}`}>
              <div className="bg-cream border border-light-pink rounded-lg overflow-hidden h-full hover:shadow-lg transition-shadow cursor-pointer group">
                <div className="relative h-56 overflow-hidden">
                  <Image
                    src={workspace.image}
                    alt={workspace.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <h2 className="text-2xl font-serif font-bold text-dark-green mb-3 group-hover:text-pink transition-colors">
                    {workspace.title}
                  </h2>
                  <p className="font-sans text-gray-600 mb-4">
                    {workspace.description}
                  </p>
                  <span className="font-sans text-dark-green font-semibold">
                    Learn More &rarr;
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </Section>
    </>
  )
}
