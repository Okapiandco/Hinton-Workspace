import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { getEventSchema, getBreadcrumbSchema } from "@/lib/schema";

const baseUrl = "https://hintonworkspace.co.uk";

export const metadata: Metadata = {
  title: "The Hustle - Monthly Networking Event",
  description:
    "The Hustle is North Dorset's favourite monthly networking event for entrepreneurs, business owners, sole traders, and creatives. Join us on the first Thursday of each month at Hinton Workspace.",
  alternates: {
    canonical: `${baseUrl}/events/the-hustle`,
  },
  openGraph: {
    title: "The Hustle | Hinton Workspace",
    description:
      "North Dorset's favourite monthly networking event for entrepreneurs and business owners.",
    url: `${baseUrl}/events/the-hustle`,
    images: [
      {
        url: "/NEW-HUSTLE-LOGO.jpg",
        width: 1200,
        height: 630,
        alt: "The Hustle Networking Event",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "The Hustle | Hinton Workspace",
    description:
      "North Dorset's favourite monthly networking event.",
    images: ["/NEW-HUSTLE-LOGO.jpg"],
  },
};

const eventSchema = getEventSchema({
  name: "The Hustle",
  description:
    "North Dorset's favourite monthly networking event for entrepreneurs, business owners, sole traders, and creatives. Held on the first Thursday of each month.",
  startDate: "2026-02-05T09:00:00",
  endDate: "2026-02-05T11:00:00",
  location: "Hinton Workspace, The Building Yard, Hinton St Mary, Dorset, DT10 1NA",
  url: `${baseUrl}/events/the-hustle`,
  image: `${baseUrl}/NEW-HUSTLE-LOGO.jpg`,
});

const breadcrumbSchema = getBreadcrumbSchema([
  { name: "Home", url: baseUrl },
  { name: "Events", url: `${baseUrl}/events` },
  { name: "The Hustle", url: `${baseUrl}/events/the-hustle` },
]);

export default function TheHustlePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(eventSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema),
        }}
      />

      {/* Hero */}
      <section className="bg-[var(--hinton-dark)] text-white py-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p className="text-[var(--hinton-accent)] mb-4">Monthly Networking Event</p>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">The Hustle</h1>
          <p className="text-xl max-w-2xl mx-auto">
            North Dorset&apos;s favourite networking event
          </p>
        </div>
      </section>

      {/* Event Details */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <div className="relative h-80 rounded-lg overflow-hidden mb-8">
                <Image
                  src="/NEW-HUSTLE-LOGO.jpg"
                  alt="The Hustle Networking Event"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
            <div>
              <div className="bg-gray-50 p-6 rounded-lg mb-8">
                <h2 className="text-xl font-bold text-[var(--hinton-dark)] mb-4">Event Details</h2>
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <span className="text-[var(--hinton-accent)]" aria-hidden="true">📅</span>
                    <div>
                      <p className="font-semibold text-[var(--hinton-dark)]">Next Event</p>
                      <p className="text-gray-600">Thursday, 5 February 2026</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-[var(--hinton-accent)]" aria-hidden="true">⏰</span>
                    <div>
                      <p className="font-semibold text-[var(--hinton-dark)]">Time</p>
                      <p className="text-gray-600">9:00 AM - 11:00 AM</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-[var(--hinton-accent)]" aria-hidden="true">📍</span>
                    <div>
                      <p className="font-semibold text-[var(--hinton-dark)]">Location</p>
                      <p className="text-gray-600">Hinton Workspace<br />The Building Yard<br />Hinton St Mary, Dorset<br />DT10 1NA</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-[var(--hinton-accent)]" aria-hidden="true">🔄</span>
                    <div>
                      <p className="font-semibold text-[var(--hinton-dark)]">Frequency</p>
                      <p className="text-gray-600">First Thursday of every month</p>
                    </div>
                  </div>
                </div>
              </div>
              <Link
                href="/contact"
                className="inline-block bg-[var(--hinton-dark)] text-white px-8 py-3 font-semibold hover:bg-[var(--hinton)] transition-colors w-full text-center"
              >
                Register Your Interest
              </Link>
            </div>
          </div>

          <div className="mt-12 max-w-3xl">
            <h2 className="text-2xl font-bold text-[var(--hinton-dark)] mb-6">About The Hustle</h2>
            <p className="text-gray-600 mb-4 text-lg">
              The Hustle is North Dorset&apos;s favourite monthly networking event for entrepreneurs, business owners, sole traders, and creatives.
            </p>
            <p className="text-gray-600 mb-4 text-lg">
              Held on the first Thursday of each month at Hinton Workspace, The Hustle brings together professionals from across the region to connect, exchange ideas, and explore collaborative opportunities.
            </p>
            <p className="text-gray-600 mb-4 text-lg">
              Whether you&apos;re looking to grow your network, find new clients, or simply connect with like-minded individuals, The Hustle provides a relaxed and welcoming environment to do just that.
            </p>
            <h3 className="text-xl font-bold text-[var(--hinton-dark)] mb-4 mt-8">What to Expect</h3>
            <ul className="space-y-2 text-gray-600">
              <li className="flex items-start gap-2">
                <span className="text-[var(--hinton-accent)]">✓</span>
                <span>Informal networking in a relaxed atmosphere</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[var(--hinton-accent)]">✓</span>
                <span>Tea, coffee, and refreshments provided</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[var(--hinton-accent)]">✓</span>
                <span>Opportunity to share what you do</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[var(--hinton-accent)]">✓</span>
                <span>Meet local entrepreneurs and business owners</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[var(--hinton-accent)]">✓</span>
                <span>Free parking</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-[var(--hinton-dark)] mb-4">
            Join us at the next Hustle
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Get in touch to register your interest or find out more.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-block bg-[var(--hinton-dark)] text-white px-8 py-3 font-semibold hover:bg-[var(--hinton)] transition-colors"
            >
              Contact Us
            </Link>
            <Link
              href="/events"
              className="inline-block border-2 border-[var(--hinton-dark)] text-[var(--hinton-dark)] px-8 py-3 font-semibold hover:bg-[var(--hinton-dark)] hover:text-white transition-colors"
            >
              View All Events
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
