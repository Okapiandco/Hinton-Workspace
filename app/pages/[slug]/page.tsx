import { getPageBySlug, getPages } from "@/lib/notion";
import { getWebPageSchema, getBreadcrumbSchema } from "@/lib/schema";
import ReactMarkdown from "react-markdown";
import { notFound } from "next/navigation";
import { Metadata } from "next";

export const revalidate = 60;

const baseUrl = "https://hintonworkspace.co.uk";

export async function generateStaticParams() {
  const pages = await getPages();
  return pages.map((page) => ({
    slug: page.properties.Slug?.rich_text?.[0]?.plain_text || "",
  })).filter(p => p.slug);
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const page = await getPageBySlug(slug);

  if (!page) {
    return {
      title: "Page Not Found",
    };
  }

  return {
    title: page.title,
    description: `${page.title} - Hinton Workspace`,
    alternates: {
      canonical: `${baseUrl}/pages/${slug}`,
    },
    openGraph: {
      title: page.title,
      description: `${page.title} - Hinton Workspace`,
      url: `${baseUrl}/pages/${slug}`,
      images: [
        {
          url: "/og-image.jpg",
          width: 1200,
          height: 630,
          alt: page.title,
        },
      ],
    },
  };
}

export default async function DynamicPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const page = await getPageBySlug(slug);

  if (!page) {
    notFound();
  }

  const webPageSchema = getWebPageSchema(
    page.title,
    `${page.title} - Hinton Workspace`,
    `${baseUrl}/pages/${slug}`
  );

  const breadcrumbSchema = getBreadcrumbSchema([
    { name: "Home", url: baseUrl },
    { name: page.title, url: `${baseUrl}/pages/${slug}` },
  ]);

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
      <section className="bg-[var(--hinton-dark)] text-white py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold">{page.title}</h1>
        </div>
      </section>

      {/* Content */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4">
          <article className="prose max-w-none">
            <ReactMarkdown>{page.content}</ReactMarkdown>
          </article>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-[var(--hinton-dark)] mb-4">
            Interested in joining us?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Find your focus at Hinton Workspace
          </p>
          <a
            href="https://hintonworkspace.spacebring.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-[var(--hinton-dark)] text-white px-8 py-3 font-semibold hover:bg-[var(--hinton)] transition-colors"
          >
            Book Now
          </a>
        </div>
      </section>
    </>
  );
}
