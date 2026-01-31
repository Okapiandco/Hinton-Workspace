import { getEventBySlug, getEvents } from "@/lib/notion";
import { getEventSchema, getBreadcrumbSchema } from "@/lib/schema";
import ReactMarkdown from "react-markdown";
import { notFound } from "next/navigation";
import Link from "next/link";
import { Metadata } from "next";

export const revalidate = 60;

const baseUrl = "https://hintonworkspace.co.uk";

export async function generateStaticParams() {
  const events = await getEvents();
  return events.map((event) => ({
    slug: event.slug,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const event = await getEventBySlug(slug);

  if (!event) {
    return {
      title: "Event Not Found",
    };
  }

  const formattedDate = new Date(event.date).toLocaleDateString("en-GB", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  const description = `${event.title} at ${event.location || "Hinton Workspace"} on ${formattedDate}. Join us for this event in North Dorset.`;

  return {
    title: event.title,
    description,
    alternates: {
      canonical: `${baseUrl}/events/${slug}`,
    },
    openGraph: {
      title: event.title,
      description,
      url: `${baseUrl}/events/${slug}`,
      type: "website",
      images: [
        {
          url: "/og-image.jpg",
          width: 1200,
          height: 630,
          alt: event.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: event.title,
      description,
      images: ["/og-image.jpg"],
    },
  };
}

export default async function EventPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const event = await getEventBySlug(slug);

  if (!event) {
    notFound();
  }

  const eventSchema = getEventSchema({
    name: event.title,
    description: `${event.title} at ${event.location || "Hinton Workspace"}`,
    startDate: event.date,
    location: event.location,
    url: `${baseUrl}/events/${event.slug}`,
  });

  const breadcrumbSchema = getBreadcrumbSchema([
    { name: "Home", url: baseUrl },
    { name: "Events", url: `${baseUrl}/events` },
    { name: event.title, url: `${baseUrl}/events/${slug}` },
  ]);

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
        <div className="max-w-7xl mx-auto px-4">
          <Link href="/events" className="text-white/80 hover:text-white mb-4 inline-block">
            ← Back to Events
          </Link>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">{event.title}</h1>
          <div className="flex flex-wrap gap-6 text-lg">
            <p>
              <span aria-hidden="true">📅</span>{" "}
              {new Date(event.date).toLocaleDateString("en-GB", {
                weekday: "long",
                day: "numeric",
                month: "long",
                year: "numeric",
              })}
            </p>
            {event.location && <p><span aria-hidden="true">📍</span> {event.location}</p>}
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4">
          <div className="prose max-w-none">
            <ReactMarkdown>{event.content}</ReactMarkdown>
          </div>

          <div className="mt-12 pt-8 border-t border-gray-200">
            <a
              href="https://hintonworkspace.spacebring.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-[var(--hinton-dark)] text-white px-8 py-3 font-semibold hover:bg-[var(--hinton)] transition-colors"
            >
              Book Your Place
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
