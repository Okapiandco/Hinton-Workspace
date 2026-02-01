import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { getWebPageSchema, getBreadcrumbSchema } from "@/lib/schema";

const baseUrl = "https://hintonworkspace.co.uk";

export const metadata: Metadata = {
  title: "Location",
  description:
    "Find Hinton Workspace in Hinton St Mary, North Dorset. Easy access from Sturminster Newton, Blandford Forum, and Shaftesbury. Free parking available.",
  alternates: {
    canonical: `${baseUrl}/location`,
  },
  openGraph: {
    title: "Location | Hinton Workspace",
    description:
      "Find Hinton Workspace in Hinton St Mary, North Dorset. Easy access and free parking.",
    url: `${baseUrl}/location`,
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Hinton Workspace Location",
      },
    ],
  },
};

const webPageSchema = getWebPageSchema(
  "Location | Hinton Workspace",
  "Find Hinton Workspace in Hinton St Mary, North Dorset.",
  `${baseUrl}/location`
);

const breadcrumbSchema = getBreadcrumbSchema([
  { name: "Home", url: baseUrl },
  { name: "About", url: `${baseUrl}/about` },
  { name: "Location", url: `${baseUrl}/location` },
]);

export default function LocationPage() {
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
          src="/hInton workspace exterior 1.jpg"
          alt="Hinton Workspace exterior"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-[var(--hinton-dark)]/70" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 text-center text-white">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Location</h1>
          <p className="text-xl max-w-2xl mx-auto">
            Find us in the heart of North Dorset
          </p>
        </div>
      </section>

      {/* Address & Map */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Address Info */}
            <div>
              <h2 className="text-3xl font-bold text-[var(--hinton-dark)] mb-6">
                Find Us
              </h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold text-[var(--hinton-dark)] mb-2">
                    Address
                  </h3>
                  <p className="text-gray-600">
                    Hinton Workspace<br />
                    Hinton St Mary<br />
                    Sturminster Newton<br />
                    Dorset<br />
                    DT10 1NA
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-[var(--hinton-dark)] mb-2">
                    Contact
                  </h3>
                  <p className="text-gray-600">
                    <a href="tel:01258472623" className="hover:text-[var(--hinton-accent)]">
                      Tel: 01258 472 623
                    </a>
                    <br />
                    <a href="mailto:reception@hintonworkspace.co.uk" className="hover:text-[var(--hinton-accent)]">
                      reception@hintonworkspace.co.uk
                    </a>
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-[var(--hinton-dark)] mb-2">
                    Getting Here
                  </h3>
                  <ul className="text-gray-600 space-y-2">
                    <li><strong>From Sturminster Newton:</strong> 2 miles east on the B3092</li>
                    <li><strong>From Blandford Forum:</strong> 8 miles north via the A357</li>
                    <li><strong>From Shaftesbury:</strong> 10 miles south via the A350</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-[var(--hinton-dark)] mb-2">
                    Parking
                  </h3>
                  <p className="text-gray-600">
                    Free on-site parking is available for all members and visitors.
                  </p>
                </div>
              </div>
            </div>

            {/* Map */}
            <div>
              <h2 className="text-3xl font-bold text-[var(--hinton-dark)] mb-6">
                Map
              </h2>
              <div className="rounded-lg overflow-hidden shadow-lg">
                <iframe
                  width="100%"
                  height="400"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2519.8876543210987!2d-2.3012345678901234!3d50.91234567890123!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNTDCsDU0JzQ0LjQiTiAywrAxOCcwNC40Ilc!5e0!3m2!1sen!2suk!4v1234567890123"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Hinton Workspace Location Map"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Location & Estate */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-[var(--hinton-dark)] mb-6 text-center">
            Location &amp; Estate
          </h2>
          <p className="text-xl text-gray-600 text-center max-w-4xl mx-auto mb-12">
            Nestled in the heart of the historic Hinton St Mary Estate in North Dorset,
            Hinton Workspace offers more than just a desk — it&apos;s part of a vibrant,
            countryside setting with access to some truly unique amenities. The estate is
            home to the world-renowned Olympic Equestrian Centre, and is surrounded by
            beautiful grounds, history, and a growing network of people who work, create,
            and connect here.
          </p>
          <p className="text-lg text-[var(--hinton-dark)] font-semibold text-center mb-8">
            Members and guests also benefit from exclusive access to a range of first-class facilities:
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-xl font-semibold text-[var(--hinton-dark)] mb-3">
                Holiday Cottages
              </h3>
              <p className="text-gray-600">
                Three beautifully designed cottages are available to book at discounted rates —
                ideal for out-of-town guests, work retreats or simply a quiet change of scene.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-xl font-semibold text-[var(--hinton-dark)] mb-3">
                The Tithe Barn
              </h3>
              <p className="text-gray-600">
                Just 100 metres from the workspace, this historic barn is available for events,
                workshops or larger team gatherings — with preferential rates for members.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-xl font-semibold text-[var(--hinton-dark)] mb-3">
                The White Horse Pub
              </h3>
              <p className="text-gray-600">
                Our newly refurbished village pub serves seasonal gastro food, a curated wine list,
                and local beers — perfect for a post-work unwind or casual meeting.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-xl font-semibold text-[var(--hinton-dark)] mb-3">
                Rushmore Golf Club
              </h3>
              <p className="text-gray-600">
                Part of the wider estate, the club is just a short drive away and makes an excellent
                setting to host clients, enjoy team downtime, or stretch your legs between meetings.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Local Area */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-[var(--hinton-dark)] mb-8 text-center">
            The Local Area
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-[var(--hinton-dark)] mb-3">
                Rural Setting
              </h3>
              <p className="text-gray-600">
                Nestled in the beautiful Blackmore Vale, Hinton Workspace offers a peaceful
                environment away from the distractions of town centres.
              </p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-[var(--hinton-dark)] mb-3">
                Local Amenities
              </h3>
              <p className="text-gray-600">
                Sturminster Newton is just 2 miles away with shops, cafes, and restaurants.
                The historic market town has everything you need.
              </p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-[var(--hinton-dark)] mb-3">
                Great Connections
              </h3>
              <p className="text-gray-600">
                Easy access to the A303 and A30 for connections to London, Bristol, and the
                South West. Gillingham station is 15 minutes away.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-[var(--hinton-dark)] mb-4">
            Come and Visit
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            We&apos;d love to show you around. Book a tour or try a day pass to experience
            Hinton Workspace for yourself.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://hintonworkspace.spacebring.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-[var(--hinton-dark)] text-white px-8 py-3 font-semibold hover:bg-[var(--hinton)] transition-colors"
            >
              Book a Day Pass
            </a>
            <Link
              href="/contact"
              className="inline-block bg-white text-[var(--hinton-dark)] border-2 border-[var(--hinton-dark)] px-8 py-3 font-semibold hover:bg-gray-50 transition-colors"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
