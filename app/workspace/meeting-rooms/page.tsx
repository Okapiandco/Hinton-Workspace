import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { getServiceSchema, getBreadcrumbSchema } from "@/lib/schema";

const baseUrl = "https://hintonworkspace.co.uk";

export const metadata: Metadata = {
  title: "Meeting Rooms",
  description:
    "Professional meeting rooms for hire in Sturminster Newton, North Dorset. Rooms for 2-30 people with video conferencing, whiteboards, and free parking. Book by the hour or day.",
  alternates: {
    canonical: `${baseUrl}/workspace/meeting-rooms`,
  },
  openGraph: {
    title: "Meeting Rooms | Hinton Workspace",
    description:
      "Professional meeting rooms for 2-30 people in North Dorset. Book by the hour or day.",
    url: `${baseUrl}/workspace/meeting-rooms`,
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Hinton Workspace Meeting Rooms",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Meeting Rooms | Hinton Workspace",
    description:
      "Professional meeting rooms for 2-30 people in North Dorset.",
    images: ["/og-image.jpg"],
  },
};

const serviceSchema = getServiceSchema({
  name: "Meeting Room Hire",
  description:
    "Professional meeting rooms for 2-30 people with video conferencing, whiteboards, and free parking in North Dorset.",
  url: `${baseUrl}/workspace/meeting-rooms`,
});
const breadcrumbSchema = getBreadcrumbSchema([
  { name: "Home", url: baseUrl },
  { name: "Workspace", url: `${baseUrl}/workspace` },
  { name: "Meeting Rooms", url: `${baseUrl}/workspace/meeting-rooms` },
]);

export default function MeetingRoomsPage() {
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
      <section className="relative h-[400px] flex items-center justify-center">
        <Image
          src="/board room meetings.jpg"
          alt="Hinton Workspace board room"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-[var(--hinton-dark)]/70" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 text-center text-white">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Meeting Rooms</h1>
          <p className="text-xl max-w-2xl mx-auto">
            Professional spaces for meetings of all sizes
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative h-96 rounded-lg overflow-hidden">
              <Image
                src="/meeting-rooms.jpg"
                alt="Professional meeting room with video conferencing and presentation equipment at Hinton Workspace"
                fill
                className="object-cover"
              />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-[var(--hinton-dark)] mb-6">
                The perfect setting for your meeting
              </h2>
              <p className="text-gray-600 mb-4 text-lg">
                Whether it&apos;s a one-to-one, team session, or board meeting, we offer a range of professional spaces to suit your needs.
              </p>
              <p className="text-gray-600 mb-6 text-lg">
                All our meeting rooms feature natural light, comfortable seating, and the technology you need to run productive meetings.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center gap-3">
                  <span className="text-[var(--hinton-accent)]">✓</span>
                  <span>Rooms for 2-30 people</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-[var(--hinton-accent)]">✓</span>
                  <span>High-speed WiFi</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-[var(--hinton-accent)]">✓</span>
                  <span>Video conferencing facilities</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-[var(--hinton-accent)]">✓</span>
                  <span>Whiteboards and presentation equipment</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-[var(--hinton-accent)]">✓</span>
                  <span>Tea, coffee, and refreshments available</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-[var(--hinton-accent)]">✓</span>
                  <span>Free parking for all attendees</span>
                </li>
              </ul>
              <a
                href="https://hintonworkspace.spacebring.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-[var(--hinton-dark)] text-white px-8 py-3 font-semibold hover:bg-[var(--hinton)] transition-colors"
              >
                Book a Meeting Room
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Room Options */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-[var(--hinton-dark)] text-center mb-12">Our Spaces</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 shadow rounded-lg">
              <h3 className="text-xl font-bold text-[var(--hinton-dark)] mb-2">Quiet Pods</h3>
              <p className="text-gray-600 mb-4">Perfect for one-to-ones or private calls. Soundproofed for complete privacy.</p>
              <p className="text-[var(--hinton-accent)] font-semibold">2 people</p>
            </div>
            <div className="bg-white p-6 shadow rounded-lg">
              <h3 className="text-xl font-bold text-[var(--hinton-dark)] mb-2">Meeting Room</h3>
              <p className="text-gray-600 mb-4">Ideal for team meetings, interviews, and small group sessions.</p>
              <p className="text-[var(--hinton-accent)] font-semibold">Up to 8 people</p>
            </div>
            <div className="bg-white p-6 shadow rounded-lg">
              <h3 className="text-xl font-bold text-[var(--hinton-dark)] mb-2">Board Room</h3>
              <p className="text-gray-600 mb-4">Our largest meeting space, perfect for board meetings and larger gatherings.</p>
              <p className="text-[var(--hinton-accent)] font-semibold">Up to 30 people</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-[var(--hinton-dark)] text-white text-center">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-4">Need to book a meeting room?</h2>
          <p className="text-xl mb-8">Book online or contact us for availability.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://hintonworkspace.spacebring.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-white text-[var(--hinton-dark)] px-8 py-3 font-semibold hover:bg-gray-100 transition-colors"
            >
              Book Now
            </a>
            <Link
              href="/contact"
              className="inline-block border-2 border-white text-white px-8 py-3 font-semibold hover:bg-white/10 transition-colors"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
