import type { Metadata } from 'next'
import { Libre_Baskerville, DM_Sans } from 'next/font/google'
import SiteLayout from '@/components/layout/RootLayout'
import CookieConsent from '@/components/ui/CookieConsent'
import './globals.css'

const baskerville = Libre_Baskerville({
  subsets: ['latin'],
  variable: '--font-serif',
  weight: ['400', '700'],
})

const dmSans = DM_Sans({
  subsets: ['latin'],
  variable: '--font-sans',
  weight: ['400', '500', '700'],
})

export const metadata: Metadata = {
  metadataBase: new URL('https://hintonworkspace.co.uk'),
  title: {
    default: 'Hinton Workspace | Flexible Coworking in North Dorset',
    template: '%s | Hinton Workspace',
  },
  description:
    'Flexible coworking space in North Dorset. Hot desks, meeting rooms, and event spaces in a calm, professional environment.',
  keywords: [
    'coworking',
    'coworking space',
    'North Dorset',
    'hot desk',
    'meeting rooms',
    'Sturminster Newton',
    'Hinton St Mary',
    'flexible workspace',
    'remote working',
    'Dorset office space',
  ],
  authors: [{ name: 'Hinton Workspace' }],
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: '32x32' },
      { url: '/icon.svg', type: 'image/svg+xml' },
    ],
    apple: '/apple-touch-icon.png',
  },
  manifest: '/site.webmanifest',
  openGraph: {
    title: 'Hinton Workspace | Flexible Coworking in North Dorset',
    description:
      'Flexible coworking space in North Dorset. Hot desks, meeting rooms, and event spaces.',
    url: 'https://hintonworkspace.co.uk',
    siteName: 'Hinton Workspace',
    type: 'website',
    locale: 'en_GB',
    images: [
      {
        url: '/Website Images 2026/About/The-Hinton-Workspace-Building copy.jpg',
        width: 1200,
        height: 630,
        alt: 'Hinton Workspace - Flexible Coworking in North Dorset',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Hinton Workspace | Flexible Coworking in North Dorset',
    description:
      'Flexible coworking space in North Dorset. Hot desks, meeting rooms, and event spaces.',
    images: ['/Website Images 2026/About/The-Hinton-Workspace-Building copy.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: 'https://hintonworkspace.co.uk',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en-GB" className={`${baskerville.variable} ${dmSans.variable}`}>
      <head />
      <body className="font-sans bg-cream text-gray-900">
        <SiteLayout>{children}</SiteLayout>
        <CookieConsent />

        {/* Keap Form Script */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function (window, document) {
                  var keapForms = window.keapForms || {
                      SNIPPET_VERSION: '1.1.0',
                      appId: 'btw525',
                  };
                  var script = document.createElement('script');
                  script.type = 'text/javascript';
                  script.crossOrigin = 'anonymous';
                  script.defer = true;
                  script.src = 'https://forms.keap.app/lib/public-form-embed.js?appId=btw525&version=1.1.0';
                  script.onload = function () {
                      var keapFormsAfterLoad = window.keapForms;
                      if (!keapFormsAfterLoad.renderAllForms) {
                          console.error('[Keap Forms] Error: could not load');
                      } else if (!keapFormsAfterLoad.invoked) {
                          keapFormsAfterLoad.invoked = true;
                          keapFormsAfterLoad.renderAllForms();
                      }
                  };
                  var firstScriptTag = document.getElementsByTagName('script')[0];
                  firstScriptTag.parentNode.insertBefore(script, firstScriptTag);
                  window.keapForms = keapForms;
              }(window, document));
            `,
          }}
        />
      </body>
    </html>
  )
}
