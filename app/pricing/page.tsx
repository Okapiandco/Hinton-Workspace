import { Metadata } from "next";
import Image from "next/image";
import { getWebPageSchema, getBreadcrumbSchema } from "@/lib/schema";

const baseUrl = "https://hintonworkspace.co.uk";

export const metadata: Metadata = {
  title: "Membership & Pricing",
  description:
    "Membership options and pricing at Hinton Workspace. Day passes from £30, 10-day bundles £250, monthly membership £270. Co-working in North Dorset.",
  alternates: {
    canonical: `${baseUrl}/pricing`,
  },
  openGraph: {
    title: "Membership & Pricing | Hinton Workspace",
    description:
      "Flexible membership options at Hinton Workspace. Day passes, bundles, and monthly memberships available.",
    url: `${baseUrl}/pricing`,
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Hinton Workspace Pricing",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Membership & Pricing | Hinton Workspace",
    description:
      "Flexible co-working membership options in North Dorset. Day passes, bundles, and monthly plans.",
    images: ["/og-image.jpg"],
  },
};

const webPageSchema = getWebPageSchema(
  "Membership & Pricing | Hinton Workspace",
  "Membership options and pricing at Hinton Workspace. Day passes, bundles, and monthly memberships available.",
  `${baseUrl}/pricing`
);
const breadcrumbSchema = getBreadcrumbSchema([
  { name: "Home", url: baseUrl },
  { name: "Pricing", url: `${baseUrl}/pricing` },
]);

// Pricing schema for rich snippets
const pricingSchema = {
  "@context": "https://schema.org",
  "@type": "Product",
  name: "Hinton Workspace Membership",
  description: "Co-working space membership in North Dorset",
  brand: {
    "@type": "Brand",
    name: "Hinton Workspace",
  },
  offers: [
    {
      "@type": "Offer",
      name: "Day Pass",
      price: "30",
      priceCurrency: "GBP",
      availability: "https://schema.org/InStock",
      url: `${baseUrl}/pricing`,
    },
    {
      "@type": "Offer",
      name: "10 Day Pass Bundle",
      price: "250",
      priceCurrency: "GBP",
      availability: "https://schema.org/InStock",
      url: `${baseUrl}/pricing`,
    },
    {
      "@type": "Offer",
      name: "Monthly Membership",
      price: "270",
      priceCurrency: "GBP",
      availability: "https://schema.org/InStock",
      url: `${baseUrl}/pricing`,
    },
  ],
};

export default function PricingPage() {
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
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(pricingSchema),
        }}
      />

      {/* Hero */}
      <section className="relative h-[400px] flex items-center justify-center">
        <Image
          src="/coffemug.jpg"
          alt="Hinton Workspace coffee and workspace"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-[var(--hinton-dark)]/70" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 text-center text-white">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Membership & Pricing</h1>
          <p className="text-xl max-w-2xl mx-auto">
            It&apos;s simple! Through our booking system you can sign up for membership, book a meeting room or a hot desk.
          </p>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            {/* Day Pass */}
            <div className="bg-white shadow-lg rounded-lg overflow-hidden border border-gray-200">
              <div className="bg-gray-50 p-6 text-center">
                <h2 className="text-2xl font-bold text-[var(--hinton-dark)]">Day Pass</h2>
                <p className="text-4xl font-bold text-[var(--hinton-dark)] mt-4">£30</p>
              </div>
              <div className="p-6">
                <ul className="space-y-3">
                  <PricingItem>Access all areas</PricingItem>
                  <PricingItem>Tea & Coffee</PricingItem>
                  <PricingItem>High Speed WiFi</PricingItem>
                  <PricingItem>Meeting Rooms</PricingItem>
                  <PricingItem>Free Parking</PricingItem>
                  <PricingItem>Quiet Pods</PricingItem>
                  <PricingItem note>Car Charging (additional payment)</PricingItem>
                </ul>
                <a
                  href="https://hintonworkspace.spacebring.com/suite/organizations/8245e082-00fe-4287-b0f3-28767d6bbb50/desks"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full bg-[var(--hinton-dark)] text-white text-center py-3 mt-6 font-semibold hover:bg-[var(--hinton)] transition-colors"
                >
                  Buy Now
                </a>
              </div>
            </div>

            {/* 10 Day Pass Bundle */}
            <div className="bg-white shadow-lg rounded-lg overflow-hidden border border-gray-200">
              <div className="bg-gray-50 p-6 text-center">
                <h2 className="text-2xl font-bold text-[var(--hinton-dark)]">10 Day Pass Bundle</h2>
                <p className="text-4xl font-bold text-[var(--hinton-dark)] mt-4">£250</p>
              </div>
              <div className="p-6">
                <ul className="space-y-3">
                  <PricingItem>Access all areas</PricingItem>
                  <PricingItem>Tea & Coffee</PricingItem>
                  <PricingItem>High Speed WiFi</PricingItem>
                  <PricingItem>Meeting Rooms</PricingItem>
                  <PricingItem>Free Parking</PricingItem>
                  <PricingItem>Quiet Pods</PricingItem>
                  <PricingItem note>Car Charging (additional payment)</PricingItem>
                </ul>
                <a
                  href="https://hintonworkspace.spacebring.com/suite/organizations?organizationId=8245e082-00fe-4287-b0f3-28767d6bbb50"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full bg-[var(--hinton-dark)] text-white text-center py-3 mt-6 font-semibold hover:bg-[var(--hinton)] transition-colors"
                >
                  Buy Now
                </a>
              </div>
            </div>

            {/* Monthly */}
            <div className="bg-white shadow-xl rounded-lg overflow-hidden border-2 border-[var(--hinton-accent)] relative">
              <div className="absolute top-0 right-0 bg-[var(--hinton-accent)] text-white px-4 py-1 text-sm font-semibold">
                Best Value
              </div>
              <div className="bg-[var(--hinton-dark)] p-6 text-center text-white">
                <h2 className="text-2xl font-bold">Monthly</h2>
                <p className="text-4xl font-bold mt-4">£270</p>
              </div>
              <div className="p-6">
                <ul className="space-y-3">
                  <PricingItem>Access all areas</PricingItem>
                  <PricingItem>Tea & Coffee</PricingItem>
                  <PricingItem>High Speed WiFi</PricingItem>
                  <PricingItem>Meeting Rooms</PricingItem>
                  <PricingItem>Free Parking</PricingItem>
                  <PricingItem>Quiet Pods</PricingItem>
                  <PricingItem note>Car Charging (additional payment)</PricingItem>
                </ul>
                <div className="border-t border-gray-200 mt-6 pt-6">
                  <p className="font-semibold text-[var(--hinton-dark)] mb-3">Plus:</p>
                  <ul className="space-y-2">
                    <PricingItem>Free access to Speaker Events</PricingItem>
                    <PricingItem>Virtual Address</PricingItem>
                    <PricingItem>Networking Events</PricingItem>
                    <PricingItem>Parcel Delivery Service</PricingItem>
                    <PricingItem>Laundry Service</PricingItem>
                  </ul>
                </div>
                <a
                  href="https://hintonworkspace.spacebring.com/suite/organizations?organizationId=8245e082-00fe-4287-b0f3-28767d6bbb50"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full bg-[var(--hinton-accent)] text-white text-center py-3 mt-6 font-semibold hover:bg-[var(--hinton-light)] transition-colors"
                >
                  Sign Up Now
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Amenities Grid */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-[var(--hinton-dark)] text-center mb-12">Amenities Included</h2>
          <div className="grid md:grid-cols-4 gap-8">
            <AmenityCard title="Hi-Speed Wifi" description="Wessex Internet" />
            <AmenityCard title="Quiet Pods" description="Soundproofed for private calls and video meetings" />
            <AmenityCard title="Cycle in" description="Bike storage available" />
            <AmenityCard title="Virtual Address" description="Virtual address and parcel delivery service available" />
            <AmenityCard title="Monthly Networking" description="Drinks hosted by the Hinton St Mary Estate" />
            <AmenityCard title="Outside terrace" description="08:30 - 16:30 Monday to Friday" />
            <AmenityCard title="Renewable Energy" description="Powered by solar panels and air source heat pumps" />
            <AmenityCard title="Wheelchair Access" description="Full accessibility available" />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-[var(--hinton-dark)] text-white text-center">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-4">Not sure what you need?</h2>
          <p className="text-xl mb-8">Reach out to our team, we can always help.</p>
          <a
            href="mailto:reception@hintonworkspace.co.uk"
            className="inline-block bg-white text-[var(--hinton-dark)] px-8 py-3 font-semibold hover:bg-gray-100 transition-colors"
          >
            Contact Us
          </a>
        </div>
      </section>
    </>
  );
}

function PricingItem({ children, note = false }: { children: React.ReactNode; note?: boolean }) {
  return (
    <li className={`flex items-start gap-2 ${note ? "text-gray-500 text-sm" : ""}`}>
      <span className="text-[var(--hinton-accent)] mt-1">✓</span>
      <span>{children}</span>
    </li>
  );
}

function AmenityCard({ title, description }: { title: string; description: string }) {
  return (
    <div className="text-center p-6 bg-white rounded-lg shadow">
      <h3 className="text-lg font-semibold text-[var(--hinton-dark)] mb-2">{title}</h3>
      <p className="text-gray-600 text-sm">{description}</p>
    </div>
  );
}
