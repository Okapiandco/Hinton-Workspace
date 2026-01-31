import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { getWebPageSchema, getBreadcrumbSchema } from "@/lib/schema";

const baseUrl = "https://hintonworkspace.co.uk";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about Hinton Workspace, a rural co-working space in the historic Hinton St Mary Estate, North Dorset. Modern amenities, sustainable energy, and a supportive community.",
  alternates: {
    canonical: `${baseUrl}/about`,
  },
  openGraph: {
    title: "About Hinton Workspace",
    description:
      "Learn about Hinton Workspace, a rural co-working space in the historic Hinton St Mary Estate, North Dorset.",
    url: `${baseUrl}/about`,
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "About Hinton Workspace",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "About Hinton Workspace",
    description:
      "Learn about Hinton Workspace, a rural co-working space in North Dorset.",
    images: ["/og-image.jpg"],
  },
};

const webPageSchema = getWebPageSchema(
  "About Hinton Workspace",
  "Learn about Hinton Workspace, a rural co-working space in the historic Hinton St Mary Estate, North Dorset.",
  `${baseUrl}/about`
);
const breadcrumbSchema = getBreadcrumbSchema([
  { name: "Home", url: baseUrl },
  { name: "About", url: `${baseUrl}/about` },
]);

export default function AboutPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(webPageSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema),
        }}
      />

      {/* Hero */}
      <section className="relative h-[400px] flex items-center justify-center">
        <Image
          src="/The-sitting-room.jpg"
          alt="Hinton Workspace sitting room"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-[var(--hinton-dark)]/70" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 text-center text-white">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">About Us</h1>
          <p className="text-xl max-w-2xl mx-auto">
            Reimagining the rural workspace in North Dorset
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-start mb-16">
            <div>
              <h2 className="text-3xl font-bold text-[var(--hinton-dark)] mb-6">Our Story</h2>
              <p className="text-gray-600 mb-6 text-lg">
                The transformed former carpenter&apos;s workshop in Hinton St Mary, North Dorset, offers a unique co-working environment for entrepreneurs and professionals seeking focus, flexibility, and community.
              </p>
              <p className="text-gray-600 mb-6 text-lg">
                Nestled within the historic Hinton St Mary Estate, Hinton Workspace is more than just a desk — it&apos;s a place to connect, create, and thrive.
              </p>
            </div>
            <div className="flex flex-col gap-6">
              <div className="flex items-center gap-4">
                <div className="relative w-24 h-24 rounded-full overflow-hidden flex-shrink-0">
                  <Image
                    src="/Alice-Fox-Pitt.jpg"
                    alt="Alice Fox-Pitt"
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <h3 className="font-bold text-[var(--hinton-dark)]">Alice Fox-Pitt</h3>
                  <p className="text-[var(--hinton-accent)] text-sm">Co-founder</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="relative w-24 h-24 rounded-full overflow-hidden flex-shrink-0">
                  <Image
                    src="/Will-Fox-Pitt.jpg"
                    alt="William Fox-Pitt"
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <h3 className="font-bold text-[var(--hinton-dark)]">William Fox-Pitt</h3>
                  <p className="text-[var(--hinton-accent)] text-sm">Co-founder</p>
                </div>
              </div>
            </div>
          </div>

          <div className="max-w-4xl">
            <h2 className="text-3xl font-bold text-[var(--hinton-dark)] mb-6">Our Mission</h2>
            <p className="text-gray-600 mb-6 text-lg">
              Hinton Workspace is a &quot;yes&quot; place. Our co-working, meeting rooms and event space are all designed to help you feel productive and inspired.
            </p>
            <p className="text-gray-600 mb-6 text-lg">
              We believe that rural businesses and professionals deserve access to the same quality workspace facilities as those in major cities. That&apos;s why we&apos;ve created a space that combines the tranquility of the Dorset countryside with modern amenities and a supportive community.
            </p>

            <h2 className="text-3xl font-bold text-[var(--hinton-dark)] mb-6 mt-12">What Makes Us Different</h2>
            <ul className="space-y-4 mb-8">
              <li className="flex items-start gap-3">
                <span className="text-[var(--hinton-accent)] text-2xl">✓</span>
                <div>
                  <strong className="text-[var(--hinton-dark)]">Historic Setting</strong>
                  <p className="text-gray-600">Work from a beautifully renovated carpenter&apos;s workshop on the Hinton St Mary Estate</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[var(--hinton-accent)] text-2xl">✓</span>
                <div>
                  <strong className="text-[var(--hinton-dark)]">Modern Amenities</strong>
                  <p className="text-gray-600">High-speed WiFi, soundproof pods, meeting rooms, and fully equipped kitchen</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[var(--hinton-accent)] text-2xl">✓</span>
                <div>
                  <strong className="text-[var(--hinton-dark)]">Sustainable</strong>
                  <p className="text-gray-600">Powered by solar panels and air source heat pumps</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[var(--hinton-accent)] text-2xl">✓</span>
                <div>
                  <strong className="text-[var(--hinton-dark)]">Community Focused</strong>
                  <p className="text-gray-600">Regular networking events, workshops, and a supportive community of professionals</p>
                </div>
              </li>
            </ul>

          </div>
        </div>
      </section>

      {/* Quick Links */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8">
            <Link href="/workspace" className="bg-white p-8 shadow-lg hover:shadow-xl transition-shadow">
              <h3 className="text-2xl font-bold text-[var(--hinton-dark)] mb-2">Our Workspace</h3>
              <p className="text-gray-600">Explore our co-working spaces, meeting rooms, and event facilities.</p>
              <span className="inline-block mt-4 text-[var(--hinton-accent)]">Learn more →</span>
            </Link>
            <Link href="/contact" className="bg-white p-8 shadow-lg hover:shadow-xl transition-shadow">
              <h3 className="text-2xl font-bold text-[var(--hinton-dark)] mb-2">Get in Touch</h3>
              <p className="text-gray-600">Find our location and contact details.</p>
              <span className="inline-block mt-4 text-[var(--hinton-accent)]">Contact us →</span>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-[var(--hinton-dark)] text-white text-center">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-4">Ready to join us?</h2>
          <p className="text-xl mb-8">Find your focus. Join the community.</p>
          <a
            href="https://hintonworkspace.spacebring.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-white text-[var(--hinton-dark)] px-8 py-3 font-semibold hover:bg-gray-100 transition-colors"
          >
            Book Now
          </a>
        </div>
      </section>
    </>
  );
}
