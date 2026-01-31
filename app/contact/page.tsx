import { Metadata } from "next";
import Image from "next/image";
import { getLocalBusinessSchema, getWebPageSchema, getBreadcrumbSchema } from "@/lib/schema";

const baseUrl = "https://hintonworkspace.co.uk";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch with Hinton Workspace. Located at The Building Yard, Hinton St Mary, Sturminster Newton, Dorset DT10 1NA. Call 01258 472623 or email reception@hintonworkspace.co.uk",
  alternates: {
    canonical: `${baseUrl}/contact`,
  },
  openGraph: {
    title: "Contact Hinton Workspace",
    description:
      "Get in touch with Hinton Workspace. Located in Hinton St Mary, Sturminster Newton, Dorset.",
    url: `${baseUrl}/contact`,
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Contact Hinton Workspace",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Hinton Workspace",
    description:
      "Get in touch with Hinton Workspace in Dorset. Co-working, meeting rooms, and event space.",
    images: ["/og-image.jpg"],
  },
};

const localBusinessSchema = getLocalBusinessSchema();
const webPageSchema = getWebPageSchema(
  "Contact Hinton Workspace",
  "Get in touch with Hinton Workspace. Located in Hinton St Mary, Sturminster Newton, Dorset.",
  `${baseUrl}/contact`
);
const breadcrumbSchema = getBreadcrumbSchema([
  { name: "Home", url: baseUrl },
  { name: "Contact", url: `${baseUrl}/contact` },
]);

export default function ContactPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(localBusinessSchema),
        }}
      />
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
          src="/Reception.jpg"
          alt="Hinton Workspace reception"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-[var(--hinton-dark)]/70" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 text-center text-white">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Get in Touch</h1>
          <p className="text-xl">
            If you are interested in finding out more about our workspace please get in touch.
          </p>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Details */}
            <div>
              <h2 className="text-2xl font-bold text-[var(--hinton-dark)] mb-6">Contact Details</h2>

              <div className="space-y-6">
                <div>
                  <h3 className="font-semibold text-[var(--hinton-dark)] mb-2">Address</h3>
                  <address className="not-italic text-gray-600">
                    Hinton Workspace<br />
                    The Building Yard<br />
                    Hinton St Mary<br />
                    Sturminster Newton<br />
                    Dorset<br />
                    DT10 1NA
                  </address>
                </div>

                <div>
                  <h3 className="font-semibold text-[var(--hinton-dark)] mb-2">Phone</h3>
                  <a href="tel:01258472623" className="text-[var(--hinton-accent)] hover:underline">
                    01258 472623
                  </a>
                </div>

                <div>
                  <h3 className="font-semibold text-[var(--hinton-dark)] mb-2">Email</h3>
                  <a href="mailto:reception@hintonworkspace.co.uk" className="text-[var(--hinton-accent)] hover:underline">
                    reception@hintonworkspace.co.uk
                  </a>
                </div>

                <div>
                  <h3 className="font-semibold text-[var(--hinton-dark)] mb-2">What3Words</h3>
                  <p className="text-gray-600">
                    Front car park:{" "}
                    <a
                      href="https://what3words.com/others.evoke.button"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[var(--hinton-accent)] hover:underline"
                    >
                      ///others.evoke.button
                    </a>
                  </p>
                  <p className="text-gray-600">
                    Back car park:{" "}
                    <a
                      href="https://w3w.co/actors.overdone.crust"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[var(--hinton-accent)] hover:underline"
                    >
                      ///actors.overdone.crust
                    </a>
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-[var(--hinton-dark)] mb-2">Opening Hours</h3>
                  <p className="text-gray-600">Monday - Friday: 08:30 - 17:00</p>
                </div>
              </div>

              <div className="mt-8">
                <a
                  href="https://maps.app.goo.gl/8mX6zB3dtqqdLGrq8"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-[var(--hinton-dark)] text-white px-6 py-3 font-semibold hover:bg-[var(--hinton)] transition-colors"
                >
                  Find us on Google Maps
                </a>
              </div>
            </div>

            {/* Map / Image */}
            <div>
              <div className="bg-gray-200 rounded-lg overflow-hidden h-96 mb-6">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2519.5!2d-2.3!3d50.9!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNTDCsDU0JzAwLjAiTiAywrAxOCcwMC4wIlc!5e0!3m2!1sen!2suk!4v1234567890"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Hinton Workspace location map in Sturminster Newton, Dorset"
                />
              </div>

              {/* Contact Form Embed Area */}
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-[var(--hinton-dark)] mb-4">Send us a message</h3>
                <p className="text-gray-600 mb-4">
                  Have a question? Fill out the form below and we&apos;ll get back to you as soon as possible.
                </p>
                {/*
                  Embed your form here. Replace this with your actual form embed code.
                  Example for Typeform:
                  <div data-tf-live="YOUR_FORM_ID"></div>
                  <script src="//embed.typeform.com/next/embed.js"></script>

                  Or for a simple form service:
                  <iframe src="YOUR_FORM_URL" width="100%" height="500" />
                */}
                <div className="bg-white border border-gray-200 p-8 rounded text-center">
                  <p className="text-gray-500">
                    [Contact form embed goes here]
                  </p>
                  <p className="text-gray-400 text-sm mt-2">
                    Replace this with your Typeform, Tally, or other form embed
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Book Now CTA */}
      <section className="py-16 bg-[var(--hinton-dark)] text-white text-center">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-4">Ready to book?</h2>
          <p className="text-xl mb-8">Book a day pass, meeting room, or sign up for membership.</p>
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
