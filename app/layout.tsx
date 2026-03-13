import type { Metadata } from 'next'
import { Libre_Baskerville, Josefin_Sans } from 'next/font/google'
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
  description: 'Flexible workspace in North Dorset where ideas come to life. Coworking desks, meeting rooms, and community.',
  openGraph: {
    title: 'Hinton Workspace | Flexible Coworking in North Dorset',
    description: 'Flexible workspace in North Dorset where ideas come to life.',
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
        {children}
      </body>
    </html>
  )
}
