import { Metadata } from "next";
import Image from "next/image";
import { getWebPageSchema, getBreadcrumbSchema } from "@/lib/schema";

const baseUrl = "https://hintonworkspace.co.uk";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Hinton Workspace privacy policy. Learn how we collect, use, and safeguard your personal data when you interact with our co-working space in North Dorset.",
  alternates: {
    canonical: `${baseUrl}/privacy-policy`,
  },
  openGraph: {
    title: "Privacy Policy | Hinton Workspace",
    description:
      "Learn how Hinton Workspace collects, uses, and protects your personal data.",
    url: `${baseUrl}/privacy-policy`,
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Hinton Workspace Privacy Policy",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Privacy Policy | Hinton Workspace",
    description:
      "Learn how Hinton Workspace collects, uses, and protects your personal data.",
    images: ["/og-image.jpg"],
  },
};

const webPageSchema = getWebPageSchema(
  "Privacy Policy | Hinton Workspace",
  "Learn how Hinton Workspace collects, uses, and protects your personal data.",
  `${baseUrl}/privacy-policy`
);
const breadcrumbSchema = getBreadcrumbSchema([
  { name: "Home", url: baseUrl },
  { name: "Privacy Policy", url: `${baseUrl}/privacy-policy` },
]);

export default function PrivacyPolicyPage() {
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
          src="/Th-drawing-Room-Fire.jpg"
          alt="Hinton Workspace drawing room"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-[var(--hinton-dark)]/70" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 text-center text-white">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Privacy Policy</h1>
          <p className="text-xl">
            How we collect, use, and safeguard your information
          </p>
        </div>
      </section>

      {/* Privacy Policy Content */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4">
          <div className="prose prose-lg max-w-none">
            <p className="text-lg text-gray-600 mb-8">
              At Hinton Workspace, we respect your privacy and are committed to protecting your personal data. This policy explains how we collect, use, and safeguard the information you provide to us.
            </p>

            <h2 className="text-2xl font-bold text-[var(--hinton-dark)] mt-10 mb-4">
              Information We Collect
            </h2>
            <p className="text-gray-600 mb-4">
              We may collect and process the following information when you interact with us:
            </p>
            <ul className="list-disc list-inside text-gray-600 space-y-2 mb-8">
              <li>Your name, email address, phone number, and company details</li>
              <li>Information you provide through enquiry forms, bookings, or subscriptions</li>
              <li>Technical information such as IP address and browser type (via cookies)</li>
            </ul>

            <h2 className="text-2xl font-bold text-[var(--hinton-dark)] mt-10 mb-4">
              How We Use Your Information
            </h2>
            <p className="text-gray-600 mb-4">
              We use your information to:
            </p>
            <ul className="list-disc list-inside text-gray-600 space-y-2 mb-8">
              <li>Respond to your enquiries and provide services you request</li>
              <li>Process bookings, memberships, or event registrations</li>
              <li>Keep you informed about Hinton Workspace news, offers, and events (if you have opted in)</li>
              <li>Improve our services and website experience</li>
            </ul>

            <h2 className="text-2xl font-bold text-[var(--hinton-dark)] mt-10 mb-4">
              Sharing Your Information
            </h2>
            <p className="text-gray-600 mb-8">
              We do not sell or rent your personal data. We may share it only with trusted service providers who help us deliver our services, and only where necessary.
            </p>

            <h2 className="text-2xl font-bold text-[var(--hinton-dark)] mt-10 mb-4">
              Data Storage & Security
            </h2>
            <p className="text-gray-600 mb-8">
              We take appropriate technical and organisational measures to protect your personal data from loss, misuse, or unauthorised access.
            </p>

            <h2 className="text-2xl font-bold text-[var(--hinton-dark)] mt-10 mb-4">
              Your Rights
            </h2>
            <p className="text-gray-600 mb-8">
              You have the right to request access, correction, or deletion of your personal data at any time. To do so, please contact us using the details below.
            </p>

            <h2 className="text-2xl font-bold text-[var(--hinton-dark)] mt-10 mb-4">
              Contact Us
            </h2>
            <p className="text-gray-600 mb-4">
              If you have any questions about this policy or how your data is handled, please contact:
            </p>
            <address className="not-italic text-gray-600 mb-8">
              <strong className="text-[var(--hinton-dark)]">Hinton Workspace</strong><br />
              Hinton St Mary Estate<br />
              Sturminster Newton<br />
              Dorset<br />
              DT10 1NA<br /><br />
              Email:{" "}
              <a
                href="mailto:reception@hintonworkspace.co.uk"
                className="text-[var(--hinton-accent)] hover:underline"
              >
                reception@hintonworkspace.co.uk
              </a>
              <br />
              Phone:{" "}
              <a
                href="tel:01258472623"
                className="text-[var(--hinton-accent)] hover:underline"
              >
                01258 472623
              </a>
            </address>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-16 bg-[var(--hinton-dark)] text-white text-center">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-4">Questions?</h2>
          <p className="text-xl mb-8">
            If you have any questions about our privacy practices, get in touch.
          </p>
          <a
            href="/contact"
            className="inline-block bg-white text-[var(--hinton-dark)] px-8 py-3 font-semibold hover:bg-gray-100 transition-colors"
          >
            Contact Us
          </a>
        </div>
      </section>
    </>
  );
}
