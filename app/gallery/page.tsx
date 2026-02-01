import { Metadata } from "next";
import Image from "next/image";
import Gallery from "@/components/Gallery";
import { getWebPageSchema, getBreadcrumbSchema } from "@/lib/schema";

const baseUrl = "https://hintonworkspace.co.uk";

export const metadata: Metadata = {
  title: "Gallery",
  description:
    "Explore Hinton Workspace through our photo gallery. See our co-working spaces, meeting rooms, event areas, and the beautiful North Dorset countryside.",
  alternates: {
    canonical: `${baseUrl}/gallery`,
  },
  openGraph: {
    title: "Gallery | Hinton Workspace",
    description:
      "Explore Hinton Workspace through our photo gallery.",
    url: `${baseUrl}/gallery`,
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Hinton Workspace Gallery",
      },
    ],
  },
};

const webPageSchema = getWebPageSchema(
  "Gallery | Hinton Workspace",
  "Explore Hinton Workspace through our photo gallery.",
  `${baseUrl}/gallery`
);

const breadcrumbSchema = getBreadcrumbSchema([
  { name: "Home", url: baseUrl },
  { name: "About", url: `${baseUrl}/about` },
  { name: "Gallery", url: `${baseUrl}/gallery` },
]);

// Gallery images from public/gallery folder
const galleryImages = [
  { src: "/gallery/DSC_2776.jpg", alt: "Hinton Workspace interior" },
  { src: "/gallery/DSC_2797.jpg", alt: "Hinton Workspace workspace area" },
  { src: "/gallery/DSC_2834-Edit.jpg", alt: "Hinton Workspace detail" },
  { src: "/gallery/DSC_2856-2.jpg", alt: "Hinton Workspace space" },
  { src: "/gallery/DSC_2867.jpg", alt: "Hinton Workspace area" },
  { src: "/gallery/DSC_2908.jpg", alt: "Hinton Workspace feature" },
  { src: "/gallery/DSC_2935.jpg", alt: "Hinton Workspace interior view" },
  { src: "/gallery/DSC_2970.jpg", alt: "Hinton Workspace workspace" },
  { src: "/gallery/DSC_2989.jpg", alt: "Hinton Workspace detail view" },
  { src: "/gallery/DSC_2999.jpg", alt: "Hinton Workspace area" },
  { src: "/gallery/DSC_3022.jpg", alt: "Hinton Workspace feature" },
  { src: "/gallery/DSC_3036.jpg", alt: "Hinton Workspace interior" },
  { src: "/gallery/DSC_3043.jpg", alt: "Hinton Workspace space" },
  { src: "/gallery/DSC_3055.jpg", alt: "Hinton Workspace view" },
  { src: "/gallery/DSC_3058.jpg", alt: "Hinton Workspace detail" },
  { src: "/gallery/DSC_3073.jpg", alt: "Hinton Workspace area" },
  { src: "/gallery/DSC_3083.jpg", alt: "Hinton Workspace interior view" },
  { src: "/gallery/DSC_3108.jpg", alt: "Hinton Workspace workspace" },
  { src: "/gallery/DSC_3111-2.jpg", alt: "Hinton Workspace feature" },
  { src: "/gallery/DSC_3129-2.jpg", alt: "Hinton Workspace space" },
  { src: "/gallery/DSC_3134.jpg", alt: "Hinton Workspace detail" },
  { src: "/gallery/DSC_3157.jpg", alt: "Hinton Workspace view" },
  { src: "/gallery/DSC_3177.jpg", alt: "Hinton Workspace interior" },
  { src: "/gallery/DSC_3187.jpg", alt: "Hinton Workspace area" },
  { src: "/gallery/DSC_3193.jpg", alt: "Hinton Workspace feature" },
  { src: "/gallery/DSC_3229-2.jpg", alt: "Hinton Workspace space" },
  { src: "/gallery/DSC_3237.jpg", alt: "Hinton Workspace workspace" },
  { src: "/gallery/DSC_3243.jpg", alt: "Hinton Workspace detail view" },
  { src: "/gallery/DSC_3267.jpg", alt: "Hinton Workspace interior" },
  { src: "/gallery/DSC_3276.jpg", alt: "Hinton Workspace view" },
  { src: "/gallery/DSC_3285.jpg", alt: "Hinton Workspace feature" },
  { src: "/gallery/The-long-room-Meeting-room.jpg", alt: "The Long Room - Meeting Room" },
  { src: "/gallery/The-long-room-upstairs.jpg", alt: "The Long Room - Upstairs" },
  { src: "/gallery/The-sitting-room.jpg", alt: "The Sitting Room" },
  { src: "/gallery/The-Sitting-Room-at-Hinto-St-Mary-Workspace.jpg", alt: "The Sitting Room at Hinton St Mary Workspace" },
  { src: "/gallery/The-workshop.jpg", alt: "The Workshop" },
  { src: "/gallery/The-workshop-Ground-floor.jpg", alt: "The Workshop - Ground Floor" },
];

export default function GalleryPage() {
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
          src="/gallery/DSC_3157.jpg"
          alt="Hinton Workspace gallery"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-[var(--hinton-dark)]/70" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 text-center text-white">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Gallery</h1>
          <p className="text-xl max-w-2xl mx-auto">
            Take a look around Hinton Workspace
          </p>
        </div>
      </section>

      {/* Gallery */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
            Click on any image to view it in full size. Use arrow keys or buttons to navigate.
          </p>
          <Gallery images={galleryImages} />
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-[var(--hinton-dark)] mb-4">
            See It For Yourself
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Photos can only show so much. Book a tour or day pass to experience
            Hinton Workspace in person.
          </p>
          <a
            href="https://hintonworkspace.spacebring.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-[var(--hinton-dark)] text-white px-8 py-3 font-semibold hover:bg-[var(--hinton)] transition-colors"
          >
            Book a Day Pass
          </a>
        </div>
      </section>
    </>
  );
}
