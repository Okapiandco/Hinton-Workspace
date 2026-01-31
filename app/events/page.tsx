import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { getEvents } from "@/lib/notion";
import { getWebPageSchema, getBreadcrumbSchema } from "@/lib/schema";

export const revalidate = 60;

const baseUrl = "https://hintonworkspace.co.uk";

// Static events (shown alongside Notion events)
const staticEvents = [
  {
    id: "the-hustle",
    title: "The Hustle",
    slug: "the-hustle",
    date: "2026-02-05",
    time: "9:00 AM - 11:00 AM",
    location: "Hinton Workspace",
    description: "North Dorset's favourite monthly networking event for entrepreneurs, business owners, sole traders, and creatives.",
    image: "/NEW-HUSTLE-LOGO.jpg",
    hasDetailPage: true,
  },
];

export const metadata: Metadata = {
  title: "What's On",
  description:
    "Upcoming events at Hinton Workspace. Networking, workshops, and community events in Sturminster Newton, North Dorset.",
  alternates: {
    canonical: `${baseUrl}/events`,
  },
  openGraph: {
    title: "What's On | Hinton Workspace",
    description:
      "Upcoming events at Hinton Workspace. Networking, workshops, and community events in North Dorset.",
    url: `${baseUrl}/events`,
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Hinton Workspace Events",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "What's On | Hinton Workspace",
    description:
      "Upcoming events at Hinton Workspace in North Dorset.",
    images: ["/og-image.jpg"],
  },
};

const webPageSchema = getWebPageSchema(
  "What's On | Hinton Workspace",
  "Upcoming events at Hinton Workspace. Networking, workshops, and community events in North Dorset.",
  `${baseUrl}/events`
);
const breadcrumbSchema = getBreadcrumbSchema([
  { name: "Home", url: baseUrl },
  { name: "Events", url: `${baseUrl}/events` },
]);

export default async function EventsPage() {
  const events = await getEvents();

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
          src="/The kitchen from the middle.jpg"
          alt="Hinton Workspace event area"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-[var(--hinton-dark)]/70" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 text-center text-white">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">What&apos;s On</h1>
          <p className="text-xl max-w-2xl mx-auto">
            Join us for networking events, workshops, and community gatherings
          </p>
        </div>
      </section>

      {/* Events List */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          {(events.length > 0 || staticEvents.length > 0) ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Static Events */}
              {staticEvents.map((event) => (
                <article key={event.id} className="bg-white shadow-lg rounded-lg overflow-hidden">
                  {event.image && (
                    <div className="relative h-48">
                      <Image
                        src={event.image}
                        alt={event.title}
                        fill
                        className="object-cover"
                      />
                    </div>
                  )}
                  <div className="bg-[var(--hinton-dark)] text-white p-4">
                    <p className="text-lg font-semibold">
                      {new Date(event.date).toLocaleDateString("en-GB", {
                        weekday: "long",
                        day: "numeric",
                        month: "long",
                        year: "numeric",
                      })}
                    </p>
                    {event.time && (
                      <p className="text-sm opacity-90">{event.time}</p>
                    )}
                  </div>
                  <div className="p-6">
                    <h2 className="text-xl font-bold text-[var(--hinton-dark)] mb-2">
                      {event.title}
                    </h2>
                    {event.location && (
                      <p className="text-gray-600 text-sm mb-2">
                        <span aria-hidden="true">📍</span> {event.location}
                      </p>
                    )}
                    {event.description && (
                      <p className="text-gray-600 text-sm mb-4">
                        {event.description}
                      </p>
                    )}
                    <Link
                      href={`/events/${event.slug}`}
                      className="inline-block bg-[var(--hinton-dark)] text-white px-6 py-2 font-semibold hover:bg-[var(--hinton)] transition-colors"
                    >
                      Learn More
                    </Link>
                  </div>
                </article>
              ))}
              {/* Notion Events */}
              {events.map((event) => (
                <article key={event.id} className="bg-white shadow-lg rounded-lg overflow-hidden">
                  <div className="bg-[var(--hinton-dark)] text-white p-4">
                    <p className="text-lg font-semibold">
                      {new Date(event.date).toLocaleDateString("en-GB", {
                        weekday: "long",
                        day: "numeric",
                        month: "long",
                        year: "numeric",
                      })}
                    </p>
                  </div>
                  <div className="p-6">
                    <h2 className="text-xl font-bold text-[var(--hinton-dark)] mb-2">
                      {event.title}
                    </h2>
                    {event.location && (
                      <p className="text-gray-600 text-sm mb-4">
                        <span aria-hidden="true">📍</span> {event.location}
                      </p>
                    )}
                    <Link
                      href={`/events/${event.slug}`}
                      className="inline-block bg-[var(--hinton-dark)] text-white px-6 py-2 font-semibold hover:bg-[var(--hinton)] transition-colors"
                    >
                      Learn More
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <h2 className="text-2xl font-bold text-[var(--hinton-dark)] mb-4">
                No upcoming events
              </h2>
              <p className="text-gray-600 mb-8">
                Check back soon for upcoming events, or contact us to find out more.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Host Your Event CTA */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-[var(--hinton-dark)] mb-4">
            Want to host your own event?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Our event space can accommodate up to 100 guests
          </p>
          <Link
            href="/workspace/event-space"
            className="inline-block bg-[var(--hinton-dark)] text-white px-8 py-3 font-semibold hover:bg-[var(--hinton)] transition-colors"
          >
            Learn About Our Event Space
          </Link>
        </div>
      </section>
    </>
  );
}
