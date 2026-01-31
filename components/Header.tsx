"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [aboutOpen, setAboutOpen] = useState(false);
  const [workspaceOpen, setWorkspaceOpen] = useState(false);

  return (
    <>
      {/* Announcement bar */}
      <div className="bg-[var(--hinton-sage)] text-white">
        <div className="max-w-7xl mx-auto px-4 py-2 flex justify-between items-center text-sm font-medium">
          <a href="mailto:reception@hintonworkspace.co.uk" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            <span className="hidden sm:inline">reception@hintonworkspace.co.uk</span>
            <span className="sm:hidden">Email us</span>
          </a>
          <a href="tel:01258472623" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            01258 472 623
          </a>
        </div>
      </div>

      <header className="bg-[var(--hinton-dark)] text-white relative z-40">

      {/* Main navigation */}
      <nav className="max-w-7xl mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <div className="w-16 h-12 relative">
              <Image
                src="/logo-icon-white.png"
                alt="Hinton Workspace"
                fill
                className="object-contain"
                priority
              />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {/* About dropdown */}
            <div className="relative group">
              <button
                className="hover:text-[var(--hinton-accent)] flex items-center gap-1"
                onMouseEnter={() => setAboutOpen(true)}
                onMouseLeave={() => setAboutOpen(false)}
              >
                About us
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div
                className={`absolute top-full left-0 bg-[var(--hinton-dark)] py-2 min-w-40 shadow-lg z-50 ${aboutOpen ? "block" : "hidden"}`}
                onMouseEnter={() => setAboutOpen(true)}
                onMouseLeave={() => setAboutOpen(false)}
              >
                <Link href="/about" className="block px-4 py-2 hover:bg-[var(--hinton)]">
                  About Us
                </Link>
                <Link href="/location" className="block px-4 py-2 hover:bg-[var(--hinton)]">
                  Location
                </Link>
                <Link href="/gallery" className="block px-4 py-2 hover:bg-[var(--hinton)]">
                  Gallery
                </Link>
              </div>
            </div>

            {/* Workspace dropdown */}
            <div className="relative group">
              <button
                className="hover:text-[var(--hinton-accent)] flex items-center gap-1"
                onMouseEnter={() => setWorkspaceOpen(true)}
                onMouseLeave={() => setWorkspaceOpen(false)}
              >
                The Workspace
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div
                className={`absolute top-full left-0 bg-[var(--hinton-dark)] py-2 min-w-40 shadow-lg z-50 ${workspaceOpen ? "block" : "hidden"}`}
                onMouseEnter={() => setWorkspaceOpen(true)}
                onMouseLeave={() => setWorkspaceOpen(false)}
              >
                <Link href="/workspace" className="block px-4 py-2 hover:bg-[var(--hinton)]">
                  The Workspace
                </Link>
                <Link href="/workspace/co-working" className="block px-4 py-2 hover:bg-[var(--hinton)]">
                  Co-working
                </Link>
                <Link href="/workspace/meeting-rooms" className="block px-4 py-2 hover:bg-[var(--hinton)]">
                  Meeting Rooms
                </Link>
                <Link href="/workspace/event-space" className="block px-4 py-2 hover:bg-[var(--hinton)]">
                  Event Space
                </Link>
              </div>
            </div>

            <Link href="/events" className="hover:text-[var(--hinton-accent)]">
              What&apos;s on
            </Link>
            <Link href="/blog" className="hover:text-[var(--hinton-accent)]">
              Blog
            </Link>
            <Link href="/pricing" className="hover:text-[var(--hinton-accent)]">
              Pricing
            </Link>
            <Link href="/contact" className="hover:text-[var(--hinton-accent)]">
              Contact
            </Link>

            <a
              href="https://hintonworkspace.spacebring.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[var(--hinton-accent)] text-[var(--hinton-dark)] px-6 py-2 font-semibold hover:bg-[#c99d87] transition-colors tracking-wider"
            >
              BOOK NOW
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {mobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-white/10 pt-4">
            <div className="flex flex-col gap-4 text-[14px]">
              <a href="tel:01258472623">
                Tel: 01258 472 623
              </a>
              <Link href="/about" className="hover:text-[var(--hinton-accent)]" onClick={() => setMobileMenuOpen(false)}>
                About us
              </Link>
              <Link href="/location" className="hover:text-[var(--hinton-accent)] pl-4" onClick={() => setMobileMenuOpen(false)}>
                - Location
              </Link>
              <Link href="/gallery" className="hover:text-[var(--hinton-accent)] pl-4" onClick={() => setMobileMenuOpen(false)}>
                - Gallery
              </Link>
              <Link href="/workspace" className="hover:text-[var(--hinton-accent)]" onClick={() => setMobileMenuOpen(false)}>
                The Workspace
              </Link>
              <Link href="/workspace/co-working" className="hover:text-[var(--hinton-accent)] pl-4" onClick={() => setMobileMenuOpen(false)}>
                - Co-working
              </Link>
              <Link href="/workspace/meeting-rooms" className="hover:text-[var(--hinton-accent)] pl-4" onClick={() => setMobileMenuOpen(false)}>
                - Meeting Rooms
              </Link>
              <Link href="/workspace/event-space" className="hover:text-[var(--hinton-accent)] pl-4" onClick={() => setMobileMenuOpen(false)}>
                - Event Space
              </Link>
              <Link href="/events" className="hover:text-[var(--hinton-accent)]" onClick={() => setMobileMenuOpen(false)}>
                What&apos;s on
              </Link>
              <Link href="/blog" className="hover:text-[var(--hinton-accent)]" onClick={() => setMobileMenuOpen(false)}>
                Blog
              </Link>
              <Link href="/pricing" className="hover:text-[var(--hinton-accent)]" onClick={() => setMobileMenuOpen(false)}>
                Pricing
              </Link>
              <Link href="/contact" className="hover:text-[var(--hinton-accent)]" onClick={() => setMobileMenuOpen(false)}>
                Contact
              </Link>
              <a
                href="https://hintonworkspace.spacebring.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[var(--hinton-accent)] text-[var(--hinton-dark)] px-6 py-2 font-semibold text-center tracking-wider"
              >
                BOOK NOW
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
    </>
  );
}
