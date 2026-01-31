import { Metadata } from "next";
import Link from "next/link";
import { getBlogPosts } from "@/lib/notion";
import { getWebPageSchema, getBreadcrumbSchema } from "@/lib/schema";

export const revalidate = 60;

const baseUrl = "https://hintonworkspace.co.uk";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "News, updates, and insights from Hinton Workspace, North Dorset's rural co-working space. Tips for remote workers and entrepreneurs.",
  alternates: {
    canonical: `${baseUrl}/blog`,
  },
  openGraph: {
    title: "Blog | Hinton Workspace",
    description:
      "News and updates from Hinton Workspace, North Dorset's rural co-working space.",
    url: `${baseUrl}/blog`,
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Hinton Workspace Blog",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Blog | Hinton Workspace",
    description:
      "News and updates from Hinton Workspace in North Dorset.",
    images: ["/og-image.jpg"],
  },
};

const webPageSchema = getWebPageSchema(
  "Blog | Hinton Workspace",
  "News and updates from Hinton Workspace, North Dorset's rural co-working space.",
  `${baseUrl}/blog`
);
const breadcrumbSchema = getBreadcrumbSchema([
  { name: "Home", url: baseUrl },
  { name: "Blog", url: `${baseUrl}/blog` },
]);

export default async function BlogPage() {
  const posts = await getBlogPosts();

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
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Blog</h1>
          <p className="text-xl max-w-2xl mx-auto">
            News, updates, and insights from Hinton Workspace
          </p>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          {posts.length > 0 ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {posts.map((post) => (
                <article key={post.id} className="bg-white shadow-lg rounded-lg overflow-hidden">
                  <div className="p-6">
                    <p className="text-[var(--hinton-accent)] text-sm mb-2">
                      {new Date(post.date).toLocaleDateString("en-GB", {
                        day: "numeric",
                        month: "long",
                        year: "numeric",
                      })}
                    </p>
                    <h2 className="text-xl font-bold text-[var(--hinton-dark)] mb-3">
                      <Link href={`/blog/${post.slug}`} className="hover:text-[var(--hinton-accent)]">
                        {post.title}
                      </Link>
                    </h2>
                    {post.excerpt && (
                      <p className="text-gray-600 mb-4">{post.excerpt}</p>
                    )}
                    <Link
                      href={`/blog/${post.slug}`}
                      className="text-[var(--hinton-accent)] hover:underline font-semibold"
                    >
                      Read more →
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <h2 className="text-2xl font-bold text-[var(--hinton-dark)] mb-4">
                No blog posts yet
              </h2>
              <p className="text-gray-600 mb-8">
                Check back soon for news and updates from Hinton Workspace.
              </p>
              <p className="text-gray-500 text-sm">
                (Blog posts will appear here once you connect Notion and add posts to your Blog database)
              </p>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
