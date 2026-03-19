'use client'

import { useState, useRef, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'

const workspaces = [
  {
    title: 'Coworking Desks',
    slug: 'coworking',
    description: 'Flexible hot desks for remote workers and freelancers.',
    image: '/Website Images 2026/Coworking/Coworking and Pods.jpg',
  },
  {
    title: 'Meeting Rooms',
    slug: 'meeting-rooms',
    description: 'Professional spaces for team meetings and presentations.',
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
    description: 'First-floor coworking with kitchen and cosy seating.',
    image: '/Website Images 2026/Coworking/The-sitting-room-1.jpg',
  },
  {
    title: "The Clerk's Office",
    slug: 'clerks-office',
    description: 'Private meeting room for up to 12 people.',
    image: "/Website Images 2026/Meeting Rooms/Clerk's Office.JPG",
  },
]

const navLinks = [
  { href: '/wellbeing', label: 'Wellbeing' },
  { href: '/whats-on', label: "What's On" },
  { href: '/pricing', label: 'Pricing' },
  { href: '/about-us', label: 'About' },
  { href: '/contact', label: 'Visit' },
]

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [megaMenuOpen, setMegaMenuOpen] = useState(false)
  const [mobileWorkspacesOpen, setMobileWorkspacesOpen] = useState(false)
  const megaMenuTimeout = useRef<ReturnType<typeof setTimeout> | null>(null)

  const spacebringUrl = `${process.env.NEXT_PUBLIC_SPACEBRING_BASE_URL}?organizationId=${process.env.NEXT_PUBLIC_SPACEBRING_ORG_ID}`

  const openMegaMenu = () => {
    if (megaMenuTimeout.current) clearTimeout(megaMenuTimeout.current)
    setMegaMenuOpen(true)
  }

  const closeMegaMenu = () => {
    megaMenuTimeout.current = setTimeout(() => setMegaMenuOpen(false), 150)
  }

  useEffect(() => {
    return () => {
      if (megaMenuTimeout.current) clearTimeout(megaMenuTimeout.current)
    }
  }, [])

  return (
    <header className="sticky top-0 z-50 header-animate">
      {/* Announcement Bar */}
      <div className="bg-dark-green text-white">
        <div className="max-w-7xl mx-auto px-4 py-2 flex items-center justify-between text-sm font-sans">
          <a
            href="mailto:reception@hintonworkspace.co.uk"
            className="flex items-center gap-2 hover:text-pink transition-colors"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
              <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
            </svg>
            <span>reception@hintonworkspace.co.uk</span>
          </a>
          <a
            href="tel:+441258472623"
            className="flex items-center gap-2 hover:text-pink transition-colors"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
              <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
            </svg>
            <span>01258 472623</span>
          </a>
        </div>
      </div>

      {/* Main Header */}
      <div className="bg-cream border-b border-light-pink">
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <Image
              src="/Website Images 2026/Logos/HINTON_WORKSPACE_LOGO_GREEN_RGB.png"
              alt="Hinton Workspace"
              width={160}
              height={50}
              priority
            />
            <span className="sr-only">Hinton Workspace</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {/* Workspaces with mega menu */}
            <div
              className="relative"
              onMouseEnter={openMegaMenu}
              onMouseLeave={closeMegaMenu}
            >
              <Link
                href="/workspace"
                className="font-sans text-sm text-gray-700 hover:text-dark-green transition-colors flex items-center gap-1"
              >
                Workspaces
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className={`w-3 h-3 transition-transform ${megaMenuOpen ? 'rotate-180' : ''}`}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                </svg>
              </Link>
            </div>

            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="font-sans text-sm text-gray-700 hover:text-dark-green transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* CTA + Mobile Toggle */}
          <div className="flex items-center gap-4">
            <a
              href={spacebringUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-block bg-pink text-dark-green px-6 py-2 rounded font-sans font-semibold hover:bg-light-pink transition-colors text-sm float-in hover-float shadow-md"
            >
              Book a Tour
            </a>

            {/* Mobile menu button */}
            <button
              className="md:hidden text-dark-green"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="w-6 h-6"
              >
                {mobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <nav className="md:hidden border-t border-light-pink bg-cream px-4 py-4 space-y-4">
            {/* Workspaces accordion */}
            <div>
              <button
                onClick={() => setMobileWorkspacesOpen(!mobileWorkspacesOpen)}
                className="flex items-center justify-between w-full font-sans text-gray-700 hover:text-dark-green transition-colors"
              >
                Workspaces
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className={`w-4 h-4 transition-transform ${mobileWorkspacesOpen ? 'rotate-180' : ''}`}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                </svg>
              </button>
              {mobileWorkspacesOpen && (
                <div className="mt-2 ml-4 space-y-3">
                  <Link
                    href="/workspace"
                    className="block font-sans text-sm text-dark-green font-semibold hover:text-pink transition-colors"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    View All Workspaces
                  </Link>
                  {workspaces.map((ws) => (
                    <Link
                      key={ws.slug}
                      href={`/workspace/${ws.slug}`}
                      className="block font-sans text-sm text-gray-600 hover:text-dark-green transition-colors"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {ws.title}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="block font-sans text-gray-700 hover:text-dark-green transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
          </nav>
        )}
      </div>

      {/* Mega Menu Dropdown */}
      {megaMenuOpen && (
        <div
          className="hidden md:block absolute left-0 right-0 z-40 bg-white border-b border-light-pink shadow-lg"
          onMouseEnter={openMegaMenu}
          onMouseLeave={closeMegaMenu}
        >
          <div className="max-w-7xl mx-auto px-4 py-8">
            <div className="grid grid-cols-5 gap-4">
              {workspaces.map((ws) => (
                <Link
                  key={ws.slug}
                  href={`/workspace/${ws.slug}`}
                  className="group"
                  onClick={() => setMegaMenuOpen(false)}
                >
                  <div className="relative h-36 rounded-lg overflow-hidden mb-3">
                    <Image
                      src={ws.image}
                      alt={ws.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <h3 className="font-serif font-bold text-dark-green text-sm mb-1 group-hover:text-pink transition-colors">
                    {ws.title}
                  </h3>
                  <p className="font-sans text-xs text-gray-500 leading-relaxed">
                    {ws.description}
                  </p>
                </Link>
              ))}
            </div>
            <div className="mt-6 pt-4 border-t border-light-pink">
              <Link
                href="/workspace"
                className="font-sans text-sm font-semibold text-dark-green hover:text-pink transition-colors"
                onClick={() => setMegaMenuOpen(false)}
              >
                View All Workspaces &rarr;
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
