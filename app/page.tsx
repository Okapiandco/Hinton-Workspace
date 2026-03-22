import { Metadata } from 'next'
import HeroSection from '@/components/sections/HeroSection'
import FeatureCardsSection from '@/components/sections/FeatureCardsSection'
import GoogleReviews from '@/components/sections/GoogleReviews'
import Section from '@/components/ui/Section'
import Button from '@/components/ui/Button'
import Accordion from '@/components/ui/Accordion'
import LightboxGallery from '@/components/ui/Lightbox'
import ScrollReveal from '@/components/ui/ScrollReveal'
import SchemaScript from '@/components/SchemaScript'
import { organizationSchema, localBusinessSchema, faqSchema, webSiteSchema } from '@/lib/schema'
import Image from 'next/image'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Hinton Workspace | Flexible Coworking in North Dorset',
  description:
    'Hinton Workspace is a beautifully designed co-working space in the heart of Hinton St Mary. Flexible desks, meeting rooms, and event spaces for entrepreneurs, freelancers, and businesses.',
  alternates: {
    canonical: 'https://hintonworkspace.co.uk',
  },
  openGraph: {
    title: 'Hinton Workspace | Flexible Coworking in North Dorset',
    description:
      'Hinton Workspace is a beautifully designed co-working space in the heart of Hinton St Mary. Flexible desks, meeting rooms, and event spaces.',
    url: 'https://hintonworkspace.co.uk',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Hinton Workspace | Flexible Coworking in North Dorset',
    description:
      'Flexible coworking space in North Dorset. Hot desks, meeting rooms, and event spaces in a calm, professional environment.',
  },
}

const spacebringUrl = `${process.env.NEXT_PUBLIC_SPACEBRING_BASE_URL}?organizationId=${process.env.NEXT_PUBLIC_SPACEBRING_ORG_ID}`

const faqs = [
  { question: 'What is Hinton Workspace?', answer: 'Hinton Workspace is a flexible coworking space in North Dorset offering hot desks, meeting rooms, and event spaces. We provide a calm, professional environment for remote workers, freelancers, entrepreneurs, and small businesses.' },
  { question: 'Where is Hinton Workspace located?', answer: 'Hinton Workspace is located at The Building Yard, Hinton St Mary, Sturminster Newton, DT10 1NA in North Dorset.' },
  { question: 'Who is Hinton Workspace for?', answer: "We're designed for anyone who works - remote workers, freelancers, founders, small business teams, charities, and individuals looking for an alternative to home working." },
  { question: 'Do you offer coworking desks in Dorset?', answer: 'Yes! Our coworking desks include high-speed WiFi, comfortable seating, tea and coffee, kitchen access, free parking, and access to community events.' },
  { question: 'Can I hire a meeting room in North Dorset?', answer: 'Yes, our meeting rooms are available for hire. They are equipped with presentation technology, high-speed Wi-Fi, and natural light.' },
  { question: 'Do you offer event space hire in Dorset?', answer: 'Yes! We host team away days, corporate events, workshops, and special events. Our facilities can accommodate up to 100 guests.' },
  { question: 'Is there parking at Hinton Workspace?', answer: 'Yes, free on-site parking is available for all members and visitors.' },
  { question: 'Do you offer coworking memberships?', answer: 'Yes, we offer day passes, 4-day passes, 8-day passes, and unlimited monthly memberships. No long-term contracts required.' },
  { question: 'Can I book a desk for just one day?', answer: 'Absolutely! Day passes are available on a pay-as-you-go basis at £20 per day.' },
  { question: 'Is Hinton Workspace suitable for corporate away days?', answer: 'Yes! We host team away days and corporate events with full catering and AV support available.' },
  { question: 'Do you host networking events in Dorset?', answer: "Yes! We host regular workshops, talks, networking events, and community gatherings. Check our What's On page for upcoming events." },
  { question: 'What makes Hinton Workspace different from other coworking spaces?', answer: 'We offer a unique combination of rural calm and professional energy, set within the historic Hinton St Mary estate with on-site wellbeing services.' },
  { question: 'How do I book Hinton Workspace?', answer: 'You can book online via Spacebring, or contact us at 01258 472623 or reception@hintonworkspace.co.uk.' },
]

export default function HomePage() {
  return (
    <>
      <SchemaScript schema={organizationSchema()} />
      <SchemaScript schema={localBusinessSchema()} />
      <SchemaScript schema={faqSchema(faqs)} />
      <SchemaScript schema={webSiteSchema()} />

      {/* Hero */}
      <HeroSection
        title={<>Flexible workspace in North Dorset where <em>ideas come to life.</em></>}
        subtitle="CO-WORKING &bull; MEETING ROOMS &bull; EVENTS &bull; WELLBEING"
        backgroundVideo="/video/HInton-Workspace-Video.mp4"
        ctas={[
          { text: 'Book a Desk \u2192', href: spacebringUrl, variant: 'primary' },
          { text: 'Book a Tour', href: spacebringUrl, variant: 'book-tour' as const },
        ]}
      />

      {/* Intro */}
      <Section>
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-dark-green mb-4">The Hinton Workspace</h2>
          <p className="text-lg font-sans text-gray-600 leading-relaxed">
            Looking for a workspace that sparks focus, creativity, and connection? Hinton Workspace is more than desks and meeting rooms. It&apos;s a vibrant community in the heart of the Dorset countryside.
          </p>
        </div>
      </Section>

      {/* Our Workspaces */}
      <Section>
        <ScrollReveal>
          <div className="text-center mb-12">
            <h2 className="text-4xl font-serif font-bold text-dark-green mb-4">Our Workspaces</h2>
            <p className="text-lg font-sans text-gray-600">Flexible space in North Dorset that fits with your work life.</p>
          </div>
        </ScrollReveal>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {[
            {
              title: 'Coworking Desks',
              description: 'Is working from home not working? Our coworking desks are a simple, professional alternative. Quiet, comfortable, and easy to book. Perfect for remote workers, freelancers, founders, and anyone who needs to focus.',
              image: '/Website Images 2026/Coworking/Coworking and Pods.jpg',
              href: '/workspace/coworking',
            },
            {
              title: 'Meeting Rooms',
              description: 'Need a calm, professional space for meetings that matter? Our meeting rooms provide a distraction-free setting for team sessions, strategy days, client meetings, and interviews.',
              image: '/Website Images 2026/Meeting Rooms/Meeting room.jpg',
              href: '/workspace/meeting-rooms',
            },
            {
              title: 'Events & Workshops',
              description: 'Hinton Workspace hosts talks, workshops, and gatherings throughout the year. You can also hire our spaces for your own events, from business workshops to wellbeing sessions, for up to 100 guests.',
              image: '/Website Images 2026/Events/Workshop.jpg',
              href: '/events',
            },
          ].map((workspace, idx) => (
            <ScrollReveal key={workspace.title} delay={idx * 150}>
              <div className="relative h-72 rounded-lg overflow-hidden mb-4">
                <Image src={workspace.image} alt={workspace.title} fill className="object-cover" />
              </div>
              <h3 className="text-2xl font-serif font-bold text-dark-green mb-2">{workspace.title}</h3>
              <p className="font-sans text-gray-600 mb-3 leading-relaxed">{workspace.description}</p>
              <Link href={workspace.href} className="font-sans font-semibold text-dark-green hover:text-pink transition-colors">
                Learn More &rarr;
              </Link>
            </ScrollReveal>
          ))}
        </div>
      </Section>

      {/* What Makes Us Different */}
      <FeatureCardsSection
        title="What Makes Us Different"
        features={[
          { title: 'Flexible coworking desks', description: 'Work how and when you want, with all essentials at your fingertips.' },
          { title: 'Meeting rooms where decisions happen', description: 'From brainstorming to client pitches, our rooms are designed for focus.' },
          { title: 'Rural calm, professional energy', description: 'Productive work in a beautiful setting, surrounded by nature.' },
        ]}
      />

      {/* Working Better. Together. */}
      <Section>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start max-w-6xl mx-auto">
          <ScrollReveal direction="left">
            <h2 className="text-4xl font-serif font-bold text-dark-green mb-6">
              Working Better.<br /><em>Together.</em>
            </h2>
            <p className="font-sans text-gray-700 mb-8 leading-relaxed">
              Hinton Workspace was created to offer a calmer, flexible way of working and connecting, one that reflects how people actually work today. People do their best work when they feel comfortable, supported, and free from unnecessary pressure.
            </p>
            <div className="bg-white border border-light-pink rounded-lg p-6 mb-8">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-pink/30 flex-shrink-0 overflow-hidden">
                  <Image src="/Website Images 2026/About/Alice Photo copy.jpg" alt="Alice" width={48} height={48} className="object-cover w-full h-full" />
                </div>
                <div>
                  <p className="font-sans text-gray-700 italic leading-relaxed mb-2">
                    &ldquo;I know that I am better when I am accountable to people around me. I raise my game both in how I look and how I work and how I deliver. The thinking behind the Hinton Workspace is to deliver that for businesses, entrepreneurs and individuals.&rdquo;
                  </p>
                  <p className="font-sans font-bold text-dark-green">Alice</p>
                </div>
              </div>
            </div>
            <p className="font-sans text-gray-700 leading-relaxed">
              Located within the historic Hinton St Mary estate, our buildings are carefully adapted to create calm, practical workspaces while respecting the estate&apos;s character. Modern work sits comfortably alongside history here.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={200} direction="right">
            <div className="relative h-[500px] rounded-lg overflow-hidden">
              <Image src="/Website Images 2026/About/Signage.jpg" alt="Hinton Workspace building" fill className="object-cover" />
            </div>
            <div className="absolute bottom-4 right-4 bg-pink/90 text-white rounded-lg p-6 max-w-[240px]">
              <p className="font-serif font-bold text-xl mb-1">Since 2024</p>
              <p className="font-sans text-sm">Transforming how rural professionals work, without the distractions of home or the city.</p>
            </div>
          </ScrollReveal>
        </div>
      </Section>

      {/* Life at Hinton */}
      <Section bgColor="white">
        <ScrollReveal>
          <div className="text-center mb-10">
            <h2 className="text-4xl font-serif font-bold text-dark-green mb-4">Life at Hinton</h2>
            <p className="text-lg font-sans text-gray-600">A glimpse into our daily life - from focused work sessions to community gatherings.</p>
          </div>
        </ScrollReveal>
        <ScrollReveal delay={100} direction="scale">
        <LightboxGallery
          columns={2}
          images={[
            { src: '/Website Images 2026/Coworking/Fireplace.jpg', alt: 'Coworking by the fireplace' },
            { src: '/Website Images 2026/About/Signage.jpg', alt: 'Hinton Workspace signage' },
            { src: '/Website Images 2026/Coworking/Front Desk.jpg', alt: 'Front desk area' },
            { src: '/Website Images 2026/Events/Event Panel.jpg', alt: 'Event panel at Hinton Workspace' },
          ]}
        />
        </ScrollReveal>
      </Section>

      {/* What's Included */}
      <Section>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          <ScrollReveal direction="left">
            <h2 className="text-4xl font-serif font-bold text-dark-green mb-6">
              What&apos;s <em>Included</em>
            </h2>
            <p className="font-sans text-gray-700 mb-8 leading-relaxed">
              Everything you need to work productively in a beautiful rural setting. No noisy caf&eacute; tables or crowded city hubs - just thoughtfully designed spaces where ideas can thrive.
            </p>
            <div className="grid grid-cols-2 gap-6">
              {[
                { title: 'High-speed WiFi', subtitle: 'Reliable, fast connectivity' },
                { title: 'Tea & coffee', subtitle: 'Refreshments included' },
                { title: 'Meeting rooms', subtitle: 'For teams of 2 to 30' },
                { title: 'Free parking', subtitle: 'On-site parking for all' },
                { title: 'Dog friendly', subtitle: 'Bring your best friend' },
                { title: 'Calm environment', subtitle: 'Designed for focused work' },
              ].map((feature) => (
                <div key={feature.title} className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-full bg-cream border border-light-pink flex items-center justify-center flex-shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-dark-green">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-sans font-bold text-dark-green text-sm">{feature.title}</p>
                    <p className="font-sans text-gray-500 text-xs">{feature.subtitle}</p>
                  </div>
                </div>
              ))}
            </div>
          </ScrollReveal>
          <ScrollReveal delay={200} direction="right">
            <div className="relative h-[400px] rounded-lg overflow-hidden">
              <Image src="/Website Images 2026/Coworking/Outside area.jpg" alt="Outdoor area" fill className="object-cover" />
            </div>
          </ScrollReveal>
        </div>
      </Section>

      {/* Wellbeing */}
      <Section bgColor="white">
        <ScrollReveal>
          <div className="text-center mb-12">
            <h2 className="text-4xl font-serif font-bold text-dark-green mb-4">Work Well. Move Well. Reset Well.</h2>
            <p className="text-lg font-sans text-gray-600 max-w-2xl mx-auto">
              At Hinton Workspace, wellbeing fits around your workday, making it easier to look after yourself without adding more to your to-do list.
            </p>
          </div>
        </ScrollReveal>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <ScrollReveal>
          <div className="bg-cream border border-light-pink rounded-lg overflow-hidden">
            <div className="relative h-48">
              <Image src="/Spa and Massage/C Results.jpg" alt="Personal Training Gym at Hinton Workspace" fill className="object-cover" />
            </div>
            <div className="p-8">
              <h3 className="text-xl font-serif font-bold text-dark-green mb-1">Personal Training Gym</h3>
              <p className="font-sans text-pink text-sm mb-4">with Cam from C Results</p>
              <p className="font-sans text-gray-600 mb-6 leading-relaxed">
                Onsite PT gym offering one-to-one and small group sessions in a fully equipped private space. Sessions can fit around your desk time.
              </p>
              <a href="https://www.cresults.co.uk" target="_blank" rel="noopener noreferrer">
                <Button variant="primary" size="sm">Book with Cam</Button>
              </a>
            </div>
          </div>
          </ScrollReveal>
          <ScrollReveal delay={150}>
          <div className="bg-cream border border-light-pink rounded-lg overflow-hidden">
            <div className="relative h-48">
              <Image src="/Spa and Massage/Spa.jpg" alt="Spa Treatments at Hinton Workspace" fill className="object-cover" />
            </div>
            <div className="p-8">
              <h3 className="text-xl font-serif font-bold text-dark-green mb-1">Spa Treatments</h3>
              <p className="font-sans text-pink text-sm mb-4">with Gemma</p>
              <p className="font-sans text-gray-600 mb-6 leading-relaxed">
                Relax and reset with facials, massages, waxing, and more. All in a quiet, private space, perfectly integrated into your working day.
              </p>
              <a href="https://www.gemmahampton.co.uk" target="_blank" rel="noopener noreferrer">
                <Button variant="primary" size="sm">Book with Gemma</Button>
              </a>
            </div>
          </div>
          </ScrollReveal>
        </div>
      </Section>

      {/* Pricing */}
      <Section bgColor="dark-green">
        <ScrollReveal>
          <div className="text-center mb-12">
            <h2 className="text-4xl font-serif font-bold text-white mb-4">Membership & Pricing</h2>
            <p className="text-lg font-sans text-gray-200">Flexible options designed to suit your work style. No long-term commitments required.</p>
          </div>
        </ScrollReveal>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {[
            {
              title: 'Day Pass', subtitle: 'Perfect for occasional visits.', price: '£20', per: '',
              features: ['Tea & coffee', 'Free parking', 'Fast wifi', 'Quiet pods'],
            },
            {
              title: '4 Day Pass', subtitle: 'Use any 4 days in a month (available Monday to Friday)', price: '£49', per: '/ month',
              features: ['Tea & coffee', 'Free parking', 'Fast wifi', 'Quiet pods'],
            },
            {
              title: '8 Day Pass', subtitle: 'Use any 8 days in a month (available Monday to Friday)', price: '£99', per: '/ month', featured: true,
              features: ['Tea & coffee', 'Free parking', 'Fast wifi', 'Quiet pods'],
            },
            {
              title: 'Unlimited Access', subtitle: 'For dedicated professionals', price: '£249', per: '/ month',
              features: ['Unlimited workspace', '24/7 access', 'Meeting rooms', 'Community events', 'Tea & coffee', 'Free parking', 'Fast wifi'],
            },
          ].map((plan, idx) => (
            <ScrollReveal key={idx} delay={idx * 150}>
            <div className="bg-white/10 backdrop-blur rounded-lg p-8 relative">
              {plan.featured && (
                <div className="absolute -top-3 right-4 bg-pink text-white px-3 py-1 rounded-full text-xs font-bold">MOST POPULAR</div>
              )}
              <h3 className="text-xl font-serif font-bold text-white mb-1">{plan.title}</h3>
              <p className="font-sans text-gray-300 text-sm mb-4">{plan.subtitle}</p>
              <div className="mb-6">
                <span className="text-4xl font-bold text-pink">{plan.price}</span>
                <span className="font-sans text-gray-300 text-sm ml-1">{plan.per}</span>
              </div>
              <ul className="space-y-3 mb-8">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-2 font-sans text-sm text-gray-200">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4 text-pink flex-shrink-0">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>
              <a href={spacebringUrl} target="_blank" rel="noopener noreferrer" className="block">
                <button className="w-full border border-white/30 text-white py-3 rounded font-sans font-semibold hover:bg-white hover:text-dark-green transition-colors text-sm">
                  Get Started
                </button>
              </a>
            </div>
            </ScrollReveal>
          ))}
        </div>
      </Section>

      {/* Reviews */}
      <Section>
        <div className="max-w-6xl mx-auto">
          <ScrollReveal>
            <h2 className="text-4xl font-serif font-bold text-dark-green mb-10 text-center">Our Google Reviews</h2>
          </ScrollReveal>
          <GoogleReviews />
        </div>
      </Section>

      {/* Plan Your Visit / Contact */}
      <Section bgColor="dark-green">
        <ScrollReveal>
        <div className="text-center mb-12">
          <h2 className="text-4xl font-serif font-bold text-white mb-4">Plan Your Visit</h2>
          <p className="text-lg font-sans text-gray-200 max-w-2xl mx-auto">
            Hinton Workspace is set within a peaceful rural estate in North Dorset, with free parking and easy access. Drop us a message to plan your visit.
          </p>
        </div>
        </ScrollReveal>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <div>
            <div className="relative h-64 rounded-lg overflow-hidden mb-8">
              <Image src="/Website Images 2026/About/Signage.jpg" alt="Hinton Workspace entrance" fill className="object-cover" />
            </div>
            <div className="space-y-6 text-white">
              <div className="flex items-start gap-4">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-pink flex-shrink-0 mt-1">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                </svg>
                <div>
                  <p className="font-sans font-bold text-sm text-pink">Address</p>
                  <p className="font-sans text-sm text-gray-200">Hinton Workspace, The Building Yard, Hinton St Mary, Sturminster Newton, DT10 1NA</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-pink flex-shrink-0 mt-1">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                </svg>
                <div>
                  <p className="font-sans font-bold text-sm text-pink">Phone</p>
                  <a href="tel:+441258472623" className="font-sans text-sm text-gray-200 hover:text-white transition-colors">01258 472623</a>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-pink flex-shrink-0 mt-1">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                </svg>
                <div>
                  <p className="font-sans font-bold text-sm text-pink">Email</p>
                  <a href="mailto:reception@hintonworkspace.co.uk" className="font-sans text-sm text-gray-200 hover:text-white transition-colors">reception@hintonworkspace.co.uk</a>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-pink flex-shrink-0 mt-1">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <div>
                  <p className="font-sans font-bold text-sm text-pink">Hours</p>
                  <p className="font-sans text-sm text-gray-200">9am to 5pm, Monday to Friday</p>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-white rounded-lg p-8">
            <h3 className="text-xl font-serif font-bold text-dark-green mb-6">Send us a message</h3>
            <form className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block font-sans text-sm font-medium text-gray-700 mb-1">First Name</label>
                  <input type="text" placeholder="John" className="w-full border border-gray-300 rounded px-3 py-2 font-sans text-sm focus:outline-none focus:border-dark-green" />
                </div>
                <div>
                  <label className="block font-sans text-sm font-medium text-gray-700 mb-1">Last Name</label>
                  <input type="text" placeholder="Doe" className="w-full border border-gray-300 rounded px-3 py-2 font-sans text-sm focus:outline-none focus:border-dark-green" />
                </div>
              </div>
              <div>
                <label className="block font-sans text-sm font-medium text-gray-700 mb-1">Email</label>
                <input type="email" placeholder="john@example.com" className="w-full border border-gray-300 rounded px-3 py-2 font-sans text-sm focus:outline-none focus:border-dark-green" />
              </div>
              <div>
                <label className="block font-sans text-sm font-medium text-gray-700 mb-1">Phone (optional)</label>
                <input type="tel" placeholder="07123 456789" className="w-full border border-gray-300 rounded px-3 py-2 font-sans text-sm focus:outline-none focus:border-dark-green" />
              </div>
              <div>
                <label className="block font-sans text-sm font-medium text-gray-700 mb-1">Message</label>
                <textarea rows={4} placeholder="Tell us about your workspace needs..." className="w-full border border-gray-300 rounded px-3 py-2 font-sans text-sm focus:outline-none focus:border-dark-green resize-y" />
              </div>
              <button type="submit" className="w-full bg-dark-green text-white py-3 rounded font-sans font-semibold hover:bg-[#0F2321] transition-colors">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </Section>

      {/* FAQs */}
      <Section>
        <ScrollReveal>
          <div className="text-center mb-10">
            <h2 className="text-4xl font-serif font-bold text-dark-green mb-4">Frequently Asked Questions</h2>
            <p className="text-lg font-sans text-gray-600">A calm, professional workspace near Blandford, Shaftesbury, and Salisbury.</p>
          </div>
        </ScrollReveal>
        <div className="max-w-3xl mx-auto">
          <Accordion items={faqs} />
        </div>
      </Section>
    </>
  )
}
