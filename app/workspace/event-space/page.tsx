import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { getServiceSchema, getBreadcrumbSchema } from "@/lib/schema";

const baseUrl = "https://hintonworkspace.co.uk";

export const metadata: Metadata = {
  title: "Event Space",
  description:
    "Host your event at Hinton Workspace in Sturminster Newton, North Dorset. Versatile venue for up to 100 guests. Perfect for corporate away days, workshops, networking events, and celebrations.",
  alternates: {
    canonical: `${baseUrl}/workspace/event-space`,
  },
  openGraph: {
    title: "Event Space | Hinton Workspace",
    description:
      "Host your event at Hinton Workspace. Spaces for up to 100 guests in a unique rural setting in North Dorset.",
    url: `${baseUrl}/workspace/event-space`,
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Hinton Workspace Event Space",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Event Space | Hinton Workspace",
    description:
      "Versatile event venue for up to 100 guests in North Dorset.",
    images: ["/og-image.jpg"],
  },
};

const serviceSchema = getServiceSchema({
  name: "Event Space Hire",
  description:
    "Versatile event space for up to 100 guests. Perfect for corporate away days, workshops, networking events, and celebrations in North Dorset.",
  url: `${baseUrl}/workspace/event-space`,
});
const breadcrumbSchema = getBreadcrumbSchema([
  { name: "Home", url: baseUrl },
  { name: "Workspace", url: `${baseUrl}/workspace` },
  { name: "Event Space", url: `${baseUrl}/workspace/event-space` },
]);

export default function EventSpacePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(serviceSchema),
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
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Event Space</h1>
          <p className="text-xl max-w-2xl mx-auto">
            A unique venue for your next event
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-[var(--hinton-dark)] mb-6">
                Host your event in a unique setting
              </h2>
              <p className="text-gray-600 mb-4 text-lg">
                Looking for somewhere special to host your off-site, workshop, or networking event? Hinton Workspace offers a unique venue with character and all the facilities you need.
              </p>
              <p className="text-gray-600 mb-6 text-lg">
                Set within the historic Hinton St Mary Estate, our event space provides an inspiring backdrop for corporate events, team away days, product launches, and community gatherings.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center gap-3">
                  <span className="text-[var(--hinton-accent)]">✓</span>
                  <span>Capacity for up to 100 guests</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-[var(--hinton-accent)]">✓</span>
                  <span>Flexible layouts to suit your event</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-[var(--hinton-accent)]">✓</span>
                  <span>AV equipment and presentation facilities</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-[var(--hinton-accent)]">✓</span>
                  <span>Catering options available</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-[var(--hinton-accent)]">✓</span>
                  <span>Ample free parking</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-[var(--hinton-accent)]">✓</span>
                  <span>Accessible facilities</span>
                </li>
              </ul>
              <Link
                href="/contact"
                className="inline-block bg-[var(--hinton-dark)] text-white px-8 py-3 font-semibold hover:bg-[var(--hinton)] transition-colors"
              >
                Enquire About Your Event
              </Link>
            </div>
            <div className="relative h-96 rounded-lg overflow-hidden">
              <Image
                src="/event-space.jpg"
                alt="Versatile event space with flexible seating arrangements for corporate events and workshops at Hinton Workspace"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Event Types */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-[var(--hinton-dark)] text-center mb-12">Perfect for</h2>
          <div className="grid md:grid-cols-4 gap-6">
            <div className="bg-white p-6 shadow rounded-lg text-center">
              <div className="text-4xl mb-4" aria-hidden="true">🏢</div>
              <h3 className="font-bold text-[var(--hinton-dark)]">Corporate Away Days</h3>
            </div>
            <div className="bg-white p-6 shadow rounded-lg text-center">
              <div className="text-4xl mb-4" aria-hidden="true">🎓</div>
              <h3 className="font-bold text-[var(--hinton-dark)]">Workshops & Training</h3>
            </div>
            <div className="bg-white p-6 shadow rounded-lg text-center">
              <div className="text-4xl mb-4" aria-hidden="true">🤝</div>
              <h3 className="font-bold text-[var(--hinton-dark)]">Networking Events</h3>
            </div>
            <div className="bg-white p-6 shadow rounded-lg text-center">
              <div className="text-4xl mb-4" aria-hidden="true">🎤</div>
              <h3 className="font-bold text-[var(--hinton-dark)]">Speaker Events</h3>
            </div>
            <div className="bg-white p-6 shadow rounded-lg text-center">
              <div className="text-4xl mb-4" aria-hidden="true">🚀</div>
              <h3 className="font-bold text-[var(--hinton-dark)]">Product Launches</h3>
            </div>
            <div className="bg-white p-6 shadow rounded-lg text-center">
              <div className="text-4xl mb-4" aria-hidden="true">👥</div>
              <h3 className="font-bold text-[var(--hinton-dark)]">Team Building</h3>
            </div>
            <div className="bg-white p-6 shadow rounded-lg text-center">
              <div className="text-4xl mb-4" aria-hidden="true">🎉</div>
              <h3 className="font-bold text-[var(--hinton-dark)]">Celebrations</h3>
            </div>
            <div className="bg-white p-6 shadow rounded-lg text-center">
              <div className="text-4xl mb-4" aria-hidden="true">📊</div>
              <h3 className="font-bold text-[var(--hinton-dark)]">Exhibitions</h3>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-[var(--hinton-dark)] text-white text-center">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-4">Planning an event?</h2>
          <p className="text-xl mb-8">Get in touch to discuss your requirements and arrange a viewing.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-block bg-white text-[var(--hinton-dark)] px-8 py-3 font-semibold hover:bg-gray-100 transition-colors"
            >
              Contact Us
            </Link>
            <a
              href="tel:01258472623"
              className="inline-block border-2 border-white text-white px-8 py-3 font-semibold hover:bg-white/10 transition-colors"
            >
              Call 01258 472623
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
