import Image from "next/image";
import Link from "next/link";
import { getEvents, getBlogPosts } from "@/lib/notion";
import { getLocalBusinessSchema, getWebPageSchema } from "@/lib/schema";

export const revalidate = 60;

const localBusinessSchema = getLocalBusinessSchema();
const webPageSchema = getWebPageSchema(
  "Hinton Workspace | Rural Co-Working in Dorset",
  "A unique co-working environment for entrepreneurs and professionals seeking focus, flexibility, and community in North Dorset. Co-working, meeting rooms, and event space.",
  "https://hintonworkspace.co.uk"
);

export default async function Home() {
  const events = await getEvents();
  const posts = await getBlogPosts();

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

      {/* Hero Video Section */}
      <section className="relative bg-black">
        <div className="relative w-full h-[400px] md:h-[660px]">
          <video
            autoPlay
            muted
            loop
            playsInline
            className="absolute inset-0 w-full h-full object-cover"
            poster="/hero-image.jpg"
          >
            <source
              src="https://zsezunacywjz4x2e.public.blob.vercel-storage.com/videos/1769808363444-HInton-Workspace-Video.mp4"
              type="video/mp4"
            />
          </video>
        </div>
      </section>

      {/* Hero Text Section */}
      <section className="bg-[var(--hinton-dark)] text-white py-16">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <h1 className="heading-caps text-2xl md:text-3xl tracking-widest mb-8">
            Co-working | Meeting Rooms | Event Space
          </h1>
          <p className="text-lg md:text-xl mb-6 max-w-4xl mx-auto leading-relaxed">
            The transformed former carpenter&apos;s workshop in Hinton St Mary, North Dorset, offers a unique co-working environment for entrepreneurs and professionals seeking focus, flexibility, and community. Find your focus, hold a meeting, or gather your team — all within a space designed for the ultimate productivity.
          </p>
          <p className="text-lg md:text-xl italic mb-8 text-[var(--hinton-accent)]">
            Reimagining the rural workspace.
          </p>
          <Link
            href="/workspace"
            className="inline-block bg-[var(--hinton-accent)] text-[var(--hinton-dark)] px-8 py-3 font-semibold hover:bg-[#c99d87] transition-colors tracking-wider"
          >
            READ MORE →
          </Link>
        </div>
      </section>

      {/* Service Cards */}
      <section className="py-16 bg-[var(--hinton-cream)]">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            {/* Co-working Card */}
            <div className="bg-white shadow-lg overflow-hidden">
              <div className="relative h-64">
                <Image
                  src="/coworking.jpg"
                  alt="Open plan co-working desks with natural light at Hinton Workspace Dorset"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6 text-center">
                <h2 className="heading-caps text-xl text-[var(--hinton-dark)] mb-3">Co-working</h2>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Work your way at Hinton Workspace. With natural light, high speed WiFi, soundproof pods, breakout areas, and a fully equipped kitchen.
                </p>
                <Link
                  href="/workspace/co-working"
                  className="inline-block mt-4 text-[var(--hinton-accent)] hover:underline text-sm"
                >
                  Learn more →
                </Link>
              </div>
            </div>

            {/* Meeting Rooms Card */}
            <div className="bg-white shadow-lg overflow-hidden">
              <div className="relative h-64">
                <Image
                  src="/meeting-rooms.jpg"
                  alt="Professional meeting room with video conferencing facilities at Hinton Workspace"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6 text-center">
                <h2 className="heading-caps text-xl text-[var(--hinton-dark)] mb-3">Meeting Rooms</h2>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Host your next meeting at Hinton Workspace. Whether it&apos;s a one to one, team session or board meeting, we offer a range of professional spaces.
                </p>
                <Link
                  href="/workspace/meeting-rooms"
                  className="inline-block mt-4 text-[var(--hinton-accent)] hover:underline text-sm"
                >
                  Learn more →
                </Link>
              </div>
            </div>

            {/* Event Space Card */}
            <div className="bg-white shadow-lg overflow-hidden">
              <div className="relative h-64">
                <Image
                  src="/event-space.jpg"
                  alt="Versatile event space for workshops and networking in North Dorset"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6 text-center">
                <h2 className="heading-caps text-xl text-[var(--hinton-dark)] mb-3">Event Space</h2>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Host your off-site, workshop, or networking event at Hinton Workspace. With spaces to accommodate up to 100 guests.
                </p>
                <Link
                  href="/workspace/event-space"
                  className="inline-block mt-4 text-[var(--hinton-accent)] hover:underline text-sm"
                >
                  Learn more →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Google Reviews Section */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-center gap-8">
            <div className="text-center md:text-left">
              <p className="text-2xl font-bold text-[var(--hinton-dark)]">EXCELLENT</p>
              <div className="flex items-center justify-center md:justify-start gap-1 my-2">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-[#fbbc04] text-2xl">★</span>
                ))}
              </div>
              <p className="text-sm text-gray-600">Based on <span className="font-semibold underline">24 reviews</span></p>
              <p className="mt-2 text-2xl font-medium">
                <span className="text-[#4285f4]">G</span>
                <span className="text-[#ea4335]">o</span>
                <span className="text-[#fbbc04]">o</span>
                <span className="text-[#4285f4]">g</span>
                <span className="text-[#34a853]">l</span>
                <span className="text-[#ea4335]">e</span>
              </p>
            </div>
            <div className="flex gap-4 overflow-x-auto pb-4 max-w-full">
              {/* Review Cards - simplified placeholders */}
              <div className="bg-white border rounded-lg p-4 min-w-[280px] shadow-sm">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-10 h-10 bg-[#4285f4] rounded-full flex items-center justify-center text-white font-bold">M</div>
                  <div>
                    <p className="font-semibold text-sm">Mia Bradbury</p>
                    <p className="text-xs text-gray-500">1 week ago</p>
                  </div>
                </div>
                <div className="flex gap-0.5 mb-2">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-[#fbbc04]">★</span>
                  ))}
                </div>
                <p className="text-sm text-gray-600">A really lovely workspace — perfect for lone working as well as meetings and group sessions. The facilities are...</p>
              </div>
              <div className="bg-white border rounded-lg p-4 min-w-[280px] shadow-sm">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-10 h-10 bg-[#9c27b0] rounded-full flex items-center justify-center text-white font-bold">A</div>
                  <div>
                    <p className="font-semibold text-sm">Amelia Price</p>
                    <p className="text-xs text-gray-500">2 months ago</p>
                  </div>
                </div>
                <div className="flex gap-0.5 mb-2">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-[#fbbc04]">★</span>
                  ))}
                </div>
                <p className="text-sm text-gray-600">I&apos;ve been attending events at Hinton Workspace — including the Hinton Hustle networking group and the recent Hinton...</p>
              </div>
              <div className="bg-white border rounded-lg p-4 min-w-[280px] shadow-sm">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-10 h-10 bg-[#607d8b] rounded-full flex items-center justify-center text-white font-bold">L</div>
                  <div>
                    <p className="font-semibold text-sm">Lisa Truscott</p>
                    <p className="text-xs text-gray-500">2 months ago</p>
                  </div>
                </div>
                <div className="flex gap-0.5 mb-2">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-[#fbbc04]">★</span>
                  ))}
                </div>
                <p className="text-sm text-gray-600">This place is really special - surrounded by beautiful Dorset countryside, and tucked in Hinton St Mary, Hinton...</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Join Us Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="heading-caps text-2xl md:text-3xl text-[var(--hinton-dark)] mb-4">Why join us?</h2>
              <p className="text-lg font-semibold text-[var(--hinton-dark)] mb-4">Find Your Focus. Join the Community.</p>
              <p className="text-gray-600 mb-4 leading-relaxed">
                Hinton Workspace is a &quot;yes&quot; place. Our co-working, meeting rooms and event space are all designed to help you feel productive and inspired. Nestled within the historic Hinton St Mary Estate, our fully staffed workspace offers more than a desk — it&apos;s a place to connect, create, and thrive.
              </p>
              <p className="text-gray-600 mb-4">Say goodbye to all the distractions at home. At Hinton Workspace, you&apos;ll find:</p>
              <ul className="space-y-2 mb-6 text-gray-600">
                <li>Professional, energising environment built for focus</li>
                <li>Supportive community of like-minded professionals</li>
                <li>Clarity and balance to separate work and home</li>
              </ul>
              <p className="text-lg font-semibold text-[var(--hinton-dark)]">Work well and feel inspired — every day.</p>
            </div>
            <div>
              {/* YouTube Video Embed */}
              <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
                <iframe
                  className="absolute inset-0 w-full h-full rounded-lg"
                  src="https://www.youtube.com/embed/lK7NiAd0tzI"
                  title="Why Join Hinton Workspace"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Membership CTA with Background */}
      <section className="relative py-24">
        <div className="absolute inset-0">
          <Image
            src="/coworking.jpg"
            alt="Hinton Workspace interior"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-[var(--hinton-dark)]/80" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 text-center text-white">
          <div className="w-20 h-20 mx-auto mb-6 relative">
            <Image
              src="/logo-icon-white.png"
              alt="Hinton Workspace"
              fill
              className="object-contain"
            />
          </div>
          <h2 className="heading-caps text-3xl md:text-4xl mb-4">Membership & Pricing</h2>
          <p className="text-lg mb-8 opacity-90">Find out more about becoming a member and our pricing.</p>
          <Link
            href="/pricing"
            className="inline-block bg-[var(--hinton-accent)] text-[var(--hinton-dark)] px-8 py-3 font-semibold hover:bg-[#c99d87] transition-colors tracking-wider"
          >
            MEMBERSHIP →
          </Link>
        </div>
      </section>

      {/* What We Offer - Features Grid */}
      <section className="py-16 bg-[var(--hinton-dark)]">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="heading-caps text-3xl text-white text-center mb-12">What we offer</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <FeatureCard
              image="/Kitchen.jpg"
              title="Fully equipped kitchen"
              description="With Tea & Coffee"
              alt="Fully equipped shared kitchen with tea and coffee facilities at Hinton Workspace"
            />
            <FeatureCard
              image="/meeting-rooms.jpg"
              title="Meeting rooms"
              description="For 2 to 30 people"
              alt="Meeting rooms available for hire seating 2 to 30 people"
            />
            <FeatureCard
              image="/Reception.jpg"
              title="Manned reception"
              description="08:30 - 17:00 Monday to Friday"
              alt="Staffed reception desk at Hinton Workspace co-working space"
            />
            <FeatureCard
              image="/ev-charging.jpg"
              title="Electric car charging"
              description="EV charging available"
              alt="Electric vehicle charging point available for co-working members"
            />
            <FeatureCard
              image="/dog-friendly.jpg"
              title="Dog friendly"
              description="Bring your best friend"
              alt="Dog-friendly co-working space welcoming well-behaved dogs"
            />
            <FeatureCard
              image="/quiet-pods.jpg"
              title="Quiet pods"
              description="Soundproofed for private meetings"
              alt="Soundproofed quiet pods for private calls and focused work"
            />
          </div>
        </div>
      </section>

      {/* Newsletter Subscription */}
      <section className="py-16 bg-white">
        <div className="max-w-xl mx-auto px-4">
          <div className="bg-white border border-gray-200 rounded-lg p-8 shadow-sm">
            <h2 className="text-xl font-semibold text-[var(--hinton-dark)] text-center mb-6">
              Subscribe for Hinton News & What&apos;s On
            </h2>
            <form className="space-y-4">
              <input
                type="text"
                placeholder="First name*"
                className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:border-[var(--hinton-accent)]"
              />
              <input
                type="text"
                placeholder="Last name*"
                className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:border-[var(--hinton-accent)]"
              />
              <input
                type="email"
                placeholder="Email address*"
                className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:border-[var(--hinton-accent)]"
              />
              <div className="flex gap-4">
                <input
                  type="tel"
                  placeholder="Phone*"
                  className="flex-1 px-4 py-3 border border-gray-300 rounded focus:outline-none focus:border-[var(--hinton-accent)]"
                />
                <select className="px-4 py-3 border border-gray-300 rounded focus:outline-none focus:border-[var(--hinton-accent)]">
                  <option>Type</option>
                  <option>Individual</option>
                  <option>Business</option>
                </select>
              </div>
              <div className="text-center pt-2">
                <button
                  type="submit"
                  className="bg-[var(--hinton-accent)] text-[var(--hinton-dark)] px-8 py-3 font-semibold hover:bg-[#c99d87] transition-colors rounded"
                >
                  Subscribe
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* Events Section - Only shows if Notion is configured */}
      {events.length > 0 && (
        <section className="py-16 bg-[var(--hinton-cream)]">
          <div className="max-w-7xl mx-auto px-4">
            <h2 className="heading-caps text-3xl text-[var(--hinton-dark)] text-center mb-12">Upcoming Events</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {events.slice(0, 3).map((event) => (
                <div key={event.id} className="bg-white shadow-lg overflow-hidden">
                  {event.featuredImage && (
                    <div className="relative h-48">
                      <Image
                        src={event.featuredImage}
                        alt={event.title}
                        fill
                        className="object-cover"
                      />
                    </div>
                  )}
                  <div className="p-6">
                    <p className="text-[var(--hinton-accent)] text-sm mb-2">
                      {new Date(event.date).toLocaleDateString("en-GB", {
                        weekday: "long",
                        day: "numeric",
                        month: "long",
                        year: "numeric",
                      })}
                    </p>
                    <h3 className="text-xl font-semibold text-[var(--hinton-dark)] mb-2">{event.title}</h3>
                    <p className="text-gray-600 text-sm mb-4">{event.location}</p>
                    <Link
                      href={`/events/${event.slug}`}
                      className="text-[var(--hinton-accent)] hover:underline"
                    >
                      Learn more →
                    </Link>
                  </div>
                </div>
              ))}
            </div>
            <div className="text-center mt-8">
              <Link
                href="/events"
                className="inline-block bg-[var(--hinton-dark)] text-white px-8 py-3 font-semibold hover:bg-[var(--hinton)] transition-colors"
              >
                View all events
              </Link>
            </div>
          </div>
        </section>
      )}

      {/* Blog Section - Only shows if Notion is configured */}
      {posts.length > 0 && (
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4">
            <h2 className="heading-caps text-3xl text-[var(--hinton-dark)] text-center mb-12">Latest from the Blog</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {posts.slice(0, 3).map((post) => (
                <div key={post.id} className="bg-white shadow-lg p-6 border border-gray-100">
                  <p className="text-[var(--hinton-accent)] text-sm mb-2">
                    {new Date(post.date).toLocaleDateString("en-GB", {
                      day: "numeric",
                      month: "long",
                      year: "numeric",
                    })}
                  </p>
                  <h3 className="text-xl font-semibold text-[var(--hinton-dark)] mb-2">{post.title}</h3>
                  <p className="text-gray-600 text-sm mb-4">{post.excerpt}</p>
                  <Link
                    href={`/blog/${post.slug}`}
                    className="text-[var(--hinton-accent)] hover:underline"
                  >
                    Read more →
                  </Link>
                </div>
              ))}
            </div>
            <div className="text-center mt-8">
              <Link
                href="/blog"
                className="inline-block bg-[var(--hinton-dark)] text-white px-8 py-3 font-semibold hover:bg-[var(--hinton)] transition-colors"
              >
                View all posts
              </Link>
            </div>
          </div>
        </section>
      )}
    </>
  );
}

function FeatureCard({ image, title, description, alt }: { image: string; title: string; description: string; alt: string }) {
  return (
    <div className="text-center">
      <div className="relative aspect-[3/4] mb-4 overflow-hidden rounded-lg">
        <Image src={image} alt={alt} fill className="object-cover" />
      </div>
      <h3 className="heading-caps text-lg text-[var(--hinton-accent)] mb-2">{title}</h3>
      <p className="text-white/80 text-sm">{description}</p>
    </div>
  );
}
