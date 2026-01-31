import type { Metadata } from "next";
import { Josefin_Sans, Libre_Baskerville } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const josefinSans = Josefin_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-josefin",
});

const libreBaskerville = Libre_Baskerville({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-baskerville",
});

const baseUrl = "https://hintonworkspace.co.uk";

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: "Hinton Workspace | Rural Co-Working in Dorset",
    template: "%s | Hinton Workspace",
  },
  description:
    "A unique co-working environment for entrepreneurs and professionals seeking focus, flexibility, and community in North Dorset. Co-working, meeting rooms, and event space.",
  keywords: [
    "co-working",
    "coworking",
    "Dorset",
    "Sturminster Newton",
    "Hinton St Mary",
    "meeting rooms",
    "event space",
    "rural workspace",
    "hot desking",
    "office space",
  ],
  authors: [{ name: "Hinton Workspace" }],
  creator: "Hinton Workspace",
  publisher: "Hinton Workspace",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "en_GB",
    url: baseUrl,
    siteName: "Hinton Workspace",
    title: "Hinton Workspace | Rural Co-Working in Dorset",
    description:
      "A unique co-working environment for entrepreneurs and professionals seeking focus, flexibility, and community in North Dorset.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Hinton Workspace - Rural Co-Working Space in Dorset",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Hinton Workspace | Rural Co-Working in Dorset",
    description:
      "A unique co-working environment for entrepreneurs and professionals in North Dorset.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    // Add your verification codes here when available
    // google: "your-google-verification-code",
    // yandex: "your-yandex-verification-code",
  },
};

// Organization schema for all pages
const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Hinton Workspace",
  url: baseUrl,
  logo: `${baseUrl}/logo.png`,
  description:
    "A unique co-working environment for entrepreneurs and professionals in North Dorset.",
  address: {
    "@type": "PostalAddress",
    streetAddress: "The Building Yard, Hinton St Mary",
    addressLocality: "Sturminster Newton",
    addressRegion: "Dorset",
    postalCode: "DT10 1NA",
    addressCountry: "GB",
  },
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+44-1258-472623",
    contactType: "customer service",
    email: "reception@hintonworkspace.co.uk",
    availableLanguage: "English",
  },
  sameAs: [
    // Add social media URLs when available
    // "https://www.facebook.com/hintonworkspace",
    // "https://www.instagram.com/hintonworkspace",
    // "https://www.linkedin.com/company/hintonworkspace",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema),
          }}
        />
      </head>
      <body className={`${josefinSans.variable} ${libreBaskerville.variable} antialiased`}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
