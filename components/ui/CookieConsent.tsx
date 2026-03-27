'use client'

import { useState, useEffect } from 'react'

type ConsentStatus = 'pending' | 'accepted' | 'rejected'

declare global {
  interface Window {
    dataLayer: unknown[]
  }
}

function gtag(...args: unknown[]) {
  window.dataLayer = window.dataLayer || []
  window.dataLayer.push(args)
}

function getConsent(): ConsentStatus {
  if (typeof window === 'undefined') return 'pending'
  const stored = localStorage.getItem('cookie-consent')
  if (stored === 'accepted' || stored === 'rejected') return stored
  return 'pending'
}

function grantConsent() {
  gtag('consent', 'update', {
    analytics_storage: 'granted',
    ad_storage: 'granted',
    ad_user_data: 'granted',
    ad_personalization: 'granted',
  })
}

export default function CookieConsent() {
  const [status, setStatus] = useState<ConsentStatus>('pending')
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    const consent = getConsent()
    setStatus(consent)
    setMounted(true)

    if (consent === 'accepted') {
      grantConsent()
    }
  }, [])

  function accept() {
    localStorage.setItem('cookie-consent', 'accepted')
    setStatus('accepted')
    grantConsent()
  }

  function reject() {
    localStorage.setItem('cookie-consent', 'rejected')
    setStatus('rejected')
  }

  if (!mounted || status !== 'pending') return null

  return (
    <div className="fixed bottom-0 inset-x-0 z-50 p-4 sm:p-6">
      <div className="max-w-xl mx-auto bg-white border border-light-pink rounded-lg shadow-lg p-6">
        <p className="font-sans text-sm text-gray-700 mb-4 leading-relaxed">
          We use cookies to analyse site traffic and improve your experience. You can accept or decline non-essential cookies.
        </p>
        <div className="flex gap-3">
          <button
            onClick={accept}
            className="flex-1 bg-dark-green text-white py-2.5 px-4 rounded font-sans text-sm font-semibold hover:bg-[#0F2321] transition-colors"
          >
            Accept
          </button>
          <button
            onClick={reject}
            className="flex-1 border border-dark-green text-dark-green py-2.5 px-4 rounded font-sans text-sm font-semibold hover:bg-cream transition-colors"
          >
            Decline
          </button>
        </div>
        <a
          href="/legal/privacy"
          className="block text-center mt-3 font-sans text-xs text-gray-500 hover:text-dark-green transition-colors"
        >
          Privacy Policy
        </a>
      </div>
    </div>
  )
}
