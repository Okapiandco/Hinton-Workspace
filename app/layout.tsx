import type { Metadata } from 'next'
import { Libre_Baskerville, Josefin_Sans } from 'next/font/google'
import SiteLayout from '@/components/layout/RootLayout'
import './globals.css'

const baskerville = Libre_Baskerville({
  subsets: ['latin'],
  variable: '--font-serif',
  weight: ['400', '700'],
})

const josefin = Josefin_Sans({
  subsets: ['latin'],
  variable: '--font-sans',
  weight: ['400', '500', '700'],
})

export const metadata: Metadata = {
  title: 'Hinton Workspace | Flexible Coworking in North Dorset',
  description:
    'Flexible workspace in North Dorset where ideas come to life. Coworking desks, meeting rooms, and community.',
  openGraph: {
    title: 'Hinton Workspace | Flexible Coworking in North Dorset',
    description:
      'Flexible workspace in North Dorset where ideas come to life.',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${baskerville.variable} ${josefin.variable}`}>
      <head>
        <script
          async
          src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID}`}
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${process.env.NEXT_PUBLIC_GA_ID}');
            `,
          }}
        />
      </head>
      <body className="font-sans bg-cream text-gray-900">
        <SiteLayout>{children}</SiteLayout>

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
