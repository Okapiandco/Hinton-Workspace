'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const spacebringUrl = `${process.env.NEXT_PUBLIC_SPACEBRING_BASE_URL}?organizationId=${process.env.NEXT_PUBLIC_SPACEBRING_ORG_ID}`

  return (
    <header className="bg-cream border-b border-light-pink sticky top-0 z-50">
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
          <Link
            href="/workspace/coworking"
            className="font-sans text-sm text-gray-700 hover:text-dark-green transition-colors"
          >
            Workspaces
          </Link>
          <Link
            href="/events"
            className="font-sans text-sm text-gray-700 hover:text-dark-green transition-colors"
          >
            What&apos;s On
          </Link>
          <Link
            href="/pricing"
            className="font-sans text-sm text-gray-700 hover:text-dark-green transition-colors"
          >
            Pricing
          </Link>
          <Link
            href="/about-us"
            className="font-sans text-sm text-gray-700 hover:text-dark-green transition-colors"
          >
            About
          </Link>
          <Link
            href="/contact"
            className="font-sans text-sm text-gray-700 hover:text-dark-green transition-colors"
          >
            Visit
          </Link>
        </nav>

        {/* CTA + Mobile Toggle */}
        <div className="flex items-center gap-4">
          <a
            href={spacebringUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-dark-green text-white px-6 py-2 rounded font-sans font-semibold hover:bg-[#0F2321] transition-colors text-sm"
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
          {[
            { href: '/workspace/coworking', label: 'Workspaces' },
            { href: '/events', label: "What's On" },
            { href: '/pricing', label: 'Pricing' },
            { href: '/about-us', label: 'About' },
            { href: '/contact', label: 'Visit' },
          ].map((link) => (
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
    </header>
  )
}
