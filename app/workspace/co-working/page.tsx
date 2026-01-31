import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { getServiceSchema, getBreadcrumbSchema } from "@/lib/schema";

const baseUrl = "https://hintonworkspace.co.uk";

export const metadata: Metadata = {
  title: "Co-working Space",
  description:
    "Flexible co-working space in Sturminster Newton, North Dorset. Hot desks from £30/day, high-speed WiFi, soundproof pods, and a supportive professional community.",
  alternates: {
    canonical: `${baseUrl}/workspace/co-working`,
  },
  openGraph: {
    title: "Co-working Space | Hinton Workspace",
    description:
      "Flexible co-working space in North Dorset. Hot desks, high-speed WiFi, soundproof pods, and a supportive community.",
    url: `${baseUrl}/workspace/co-working`,
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Hinton Workspace Co-working Space",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Co-working Space | Hinton Workspace",
    description:
      "Flexible co-working space in North Dorset with hot desks and modern amenities.",
    images: ["/og-image.jpg"],
  },
};

const serviceSchema = getServiceSchema({
  name: "Co-working Space",
  description:
    "Flexible co-working space with hot desks, high-speed WiFi, soundproof pods, and a supportive professional community in North Dorset.",
  url: `${baseUrl}/workspace/co-working`,
});
const breadcrumbSchema = getBreadcrumbSchema([
  { name: "Home", url: baseUrl },
  { name: "Workspace", url: `${baseUrl}/workspace` },
  { name: "Co-working", url: `${baseUrl}/workspace/co-working` },
]);

export default function CoworkingPage() {
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
          src="/pods.jpg"
          alt="Hinton Workspace co-working pods"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-[var(--hinton-dark)]/70" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 text-center text-white">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Co-working</h1>
          <p className="text-xl max-w-2xl mx-auto">
            Work your way at Hinton Workspace
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-[var(--hinton-dark)] mb-6">
                A space designed for focus
              </h2>
              <p className="text-gray-600 mb-4 text-lg">
                Say goodbye to all the distractions at home. Our co-working space is designed to help you find your focus and do your best work.
              </p>
              <p className="text-gray-600 mb-6 text-lg">
                With natural light flooding through large windows, comfortable ergonomic seating, and a calm atmosphere, you&apos;ll find it easy to concentrate and be productive.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center gap-3">
                  <span className="text-[var(--hinton-accent)]">✓</span>
                  <span>High-speed WiFi (Wessex Internet)</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-[var(--hinton-accent)]">✓</span>
                  <span>Soundproof pods for calls and video meetings</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-[var(--hinton-accent)]">✓</span>
                  <span>Breakout areas for informal meetings</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-[var(--hinton-accent)]">✓</span>
                  <span>Fully equipped kitchen with tea & coffee</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-[var(--hinton-accent)]">✓</span>
                  <span>Manned reception (08:30 - 17:00)</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-[var(--hinton-accent)]">✓</span>
                  <span>Free parking</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-[var(--hinton-accent)]">✓</span>
                  <span>Dog friendly</span>
                </li>
              </ul>
              <a
                href="https://hintonworkspace.spacebring.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-[var(--hinton-dark)] text-white px-8 py-3 font-semibold hover:bg-[var(--hinton)] transition-colors"
              >
                Book a Desk
              </a>
            </div>
            <div className="relative h-96 rounded-lg overflow-hidden">
              <Image
                src="/coworking.jpg"
                alt="Open plan co-working desks with natural light and ergonomic seating at Hinton Workspace"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Quick Look */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-[var(--hinton-dark)] mb-8">Flexible Options</h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="bg-white p-6 shadow rounded-lg">
              <h3 className="text-xl font-bold text-[var(--hinton-dark)]">Day Pass</h3>
              <p className="text-3xl font-bold text-[var(--hinton-accent)] my-4">£30</p>
              <p className="text-gray-600">Perfect for occasional use</p>
            </div>
            <div className="bg-white p-6 shadow rounded-lg">
              <h3 className="text-xl font-bold text-[var(--hinton-dark)]">10 Day Bundle</h3>
              <p className="text-3xl font-bold text-[var(--hinton-accent)] my-4">£250</p>
              <p className="text-gray-600">Save £50 on day passes</p>
            </div>
            <div className="bg-white p-6 shadow rounded-lg border-2 border-[var(--hinton-accent)]">
              <h3 className="text-xl font-bold text-[var(--hinton-dark)]">Monthly</h3>
              <p className="text-3xl font-bold text-[var(--hinton-accent)] my-4">£270</p>
              <p className="text-gray-600">Unlimited access + perks</p>
            </div>
          </div>
          <Link
            href="/pricing"
            className="inline-block mt-8 text-[var(--hinton-accent)] hover:underline font-semibold"
          >
            View full pricing details →
          </Link>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-[var(--hinton-dark)] text-white text-center">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-4">Ready to join the community?</h2>
          <p className="text-xl mb-8">Book your first day and see what you&apos;ve been missing.</p>
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
