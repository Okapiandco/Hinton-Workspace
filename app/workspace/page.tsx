import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { getWebPageSchema, getBreadcrumbSchema, getServiceSchema } from "@/lib/schema";

const baseUrl = "https://hintonworkspace.co.uk";

export const metadata: Metadata = {
  title: "The Workspace",
  description:
    "Explore our co-working space, meeting rooms, and event space at Hinton Workspace in Sturminster Newton, North Dorset. Modern amenities in a historic setting.",
  alternates: {
    canonical: `${baseUrl}/workspace`,
  },
  openGraph: {
    title: "The Workspace | Hinton Workspace",
    description:
      "Explore our co-working space, meeting rooms, and event space at Hinton Workspace in North Dorset.",
    url: `${baseUrl}/workspace`,
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Hinton Workspace facilities",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "The Workspace | Hinton Workspace",
    description:
      "Co-working space, meeting rooms, and event space in North Dorset.",
    images: ["/og-image.jpg"],
  },
};

const webPageSchema = getWebPageSchema(
  "The Workspace | Hinton Workspace",
  "Explore our co-working space, meeting rooms, and event space at Hinton Workspace in North Dorset.",
  `${baseUrl}/workspace`
);
const breadcrumbSchema = getBreadcrumbSchema([
  { name: "Home", url: baseUrl },
  { name: "Workspace", url: `${baseUrl}/workspace` },
]);

export default function WorkspacePage() {
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
          src="/Coworkingsapce.jpg"
          alt="Hinton Workspace co-working area"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-[var(--hinton-dark)]/70" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 text-center text-white">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">The Workspace</h1>
          <p className="text-xl max-w-2xl mx-auto">
            Find your focus, hold a meeting, or gather your team — all within a space designed for the ultimate productivity.
          </p>
        </div>
      </section>

      {/* Intro */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <p className="text-xl text-gray-600 mb-8">
            The transformed former carpenter&apos;s workshop in Hinton St Mary, North Dorset, offers a unique co-working environment for entrepreneurs and professionals seeking focus, flexibility, and community.
          </p>
          <p className="text-2xl italic text-[var(--hinton-dark)]">
            Reimagining the rural workspace.
          </p>
        </div>
      </section>

      {/* Workspace Options */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            {/* Co-working */}
            <div className="bg-white shadow-lg overflow-hidden">
              <div className="relative h-64">
                <Image
                  src="/coworking.jpg"
                  alt="Open plan co-working desks with natural light at Hinton Workspace"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h2 className="text-2xl font-bold text-[var(--hinton-dark)] mb-3">Co-working</h2>
                <p className="text-gray-600 mb-4">
                  Work your way at Hinton Workspace. With natural light, high speed WiFi, soundproof pods, breakout areas, and a fully equipped kitchen.
                </p>
                <Link
                  href="/workspace/co-working"
                  className="inline-block bg-[var(--hinton-dark)] text-white px-6 py-2 font-semibold hover:bg-[var(--hinton)] transition-colors"
                >
                  Learn More
                </Link>
              </div>
            </div>

            {/* Meeting Rooms */}
            <div className="bg-white shadow-lg overflow-hidden">
              <div className="relative h-64">
                <Image
                  src="/meeting-rooms.jpg"
                  alt="Professional meeting room with video conferencing at Hinton Workspace"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h2 className="text-2xl font-bold text-[var(--hinton-dark)] mb-3">Meeting Rooms</h2>
                <p className="text-gray-600 mb-4">
                  Host your next meeting at Hinton Workspace. Whether it&apos;s a one to one, team session or board meeting, we offer a range of professional spaces.
                </p>
                <Link
                  href="/workspace/meeting-rooms"
                  className="inline-block bg-[var(--hinton-dark)] text-white px-6 py-2 font-semibold hover:bg-[var(--hinton)] transition-colors"
                >
                  Learn More
                </Link>
              </div>
            </div>

            {/* Event Space */}
            <div className="bg-white shadow-lg overflow-hidden">
              <div className="relative h-64">
                <Image
                  src="/event-space.jpg"
                  alt="Versatile event space for workshops and networking in North Dorset"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h2 className="text-2xl font-bold text-[var(--hinton-dark)] mb-3">Event Space</h2>
                <p className="text-gray-600 mb-4">
                  Host your off-site, workshop, or networking event at Hinton Workspace. With spaces to accommodate up to 100 guests.
                </p>
                <Link
                  href="/workspace/event-space"
                  className="inline-block bg-[var(--hinton-dark)] text-white px-6 py-2 font-semibold hover:bg-[var(--hinton)] transition-colors"
                >
                  Learn More
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-[var(--hinton-dark)] text-center mb-12">
            Everything you need
          </h2>
          <div className="grid md:grid-cols-4 gap-6">
            <Feature icon="📶" title="High-Speed WiFi" description="Wessex Internet connectivity" />
            <Feature icon="☕" title="Kitchen" description="Fully equipped with tea & coffee" />
            <Feature icon="🔇" title="Quiet Pods" description="Soundproofed for calls" />
            <Feature icon="🅿️" title="Free Parking" description="Ample parking available" />
            <Feature icon="🐕" title="Dog Friendly" description="Bring your best friend" />
            <Feature icon="⚡" title="EV Charging" description="Electric car charging" />
            <Feature icon="♿" title="Accessible" description="Wheelchair access" />
            <Feature icon="🌱" title="Sustainable" description="Solar powered" />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-[var(--hinton-dark)] text-white text-center">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-4">Ready to find your focus?</h2>
          <p className="text-xl mb-8">Book a day pass or sign up for membership today.</p>
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
              href="/pricing"
              className="inline-block border-2 border-white text-white px-8 py-3 font-semibold hover:bg-white/10 transition-colors"
            >
              View Pricing
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

function Feature({ icon, title, description }: { icon: string; title: string; description: string }) {
  return (
    <div className="text-center p-4">
      <div className="text-4xl mb-2" aria-hidden="true">{icon}</div>
      <h3 className="font-semibold text-[var(--hinton-dark)]">{title}</h3>
      <p className="text-gray-600 text-sm">{description}</p>
    </div>
  );
}
