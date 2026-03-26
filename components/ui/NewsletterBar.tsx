'use client'

import { useState } from 'react'

export default function NewsletterBar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <div className="bg-dark-green py-10 px-4">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left">
          <div>
            <h3 className="font-serif font-bold text-white text-2xl sm:text-3xl mb-2">Hinton News</h3>
            <p className="font-sans text-gray-200 text-sm sm:text-base leading-relaxed">
              Subscribe to our newsletter to find out about the latest news and events from the Hinton Workspace. With a mix of networking, seminars, the gym and social events you won&apos;t want to miss.
            </p>
          </div>
          <button
            onClick={() => setIsOpen(true)}
            className="bg-pink text-white font-sans font-semibold px-8 py-3 rounded hover:bg-[#c49680] transition-colors whitespace-nowrap flex-shrink-0"
          >
            Subscribe
          </button>
        </div>
      </div>

      {/* Modal */}
      {isOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4"
          onClick={(e) => {
            if (e.target === e.currentTarget) setIsOpen(false)
          }}
        >
          <div className="bg-white rounded-lg w-full max-w-lg max-h-[90vh] overflow-auto relative">
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-800 z-10"
              aria-label="Close"
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <div className="p-6">
              <h3 className="text-2xl font-serif font-bold text-dark-green mb-4">
                Subscribe to Hinton News
              </h3>
              <iframe
                src="/forms/newsletter.html"
                style={{ border: 'none', minHeight: '500px', width: '100%' }}
                title="Newsletter subscription form"
              />
            </div>
          </div>
        </div>
      )}
    </>
  )
}
