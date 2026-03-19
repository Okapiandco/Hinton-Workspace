import Image from 'next/image'
import Button from '@/components/ui/Button'

interface HeroSectionProps {
  title: React.ReactNode
  subtitle: string
  body?: string
  backgroundImage?: string
  backgroundVideo?: string
  ctas?: Array<{
    text: string
    href: string
    variant?: 'primary' | 'secondary' | 'outline' | 'outline-light' | 'book-tour'
  }>
}

export default function HeroSection({
  title,
  subtitle,
  body,
  backgroundImage,
  backgroundVideo,
  ctas,
}: HeroSectionProps) {
  return (
    <section className="relative min-h-[75svh] md:h-[650px] flex items-end overflow-hidden">
      {backgroundVideo && (
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src={backgroundVideo} type="video/mp4" />
        </video>
      )}
      {!backgroundVideo && backgroundImage && (
        <Image
          src={backgroundImage}
          alt=""
          fill
          priority
          className="absolute inset-0 object-cover"
        />
      )}
      <div className="absolute inset-0 bg-dark-green/50" />
      <div className="relative z-10 text-left max-w-7xl w-full mx-auto px-4 pb-16">
        <p className="hero-animate text-sm font-sans text-pink mb-4 tracking-[0.2em] uppercase">
          {subtitle}
        </p>
        <h1 className="hero-animate-delay-1 text-4xl md:text-6xl font-serif font-bold text-white mb-6 leading-tight max-w-2xl">
          {title}
        </h1>
        {body && (
          <p className="hero-animate-delay-2 text-base font-sans text-white/90 mb-8 max-w-lg leading-relaxed">
            {body}
          </p>
        )}
        {ctas && (
          <div className="flex flex-col sm:flex-row gap-4">
            {ctas.map((cta, idx) => (
              <a
                key={idx}
                href={cta.href}
                target={cta.href.startsWith('http') ? '_blank' : undefined}
                rel={
                  cta.href.startsWith('http')
                    ? 'noopener noreferrer'
                    : undefined
                }
                className={idx === 0 ? 'float-in' : 'float-in-delay'}
              >
                <Button variant={cta.variant || 'primary'} size="lg">
                  {cta.text}
                </Button>
              </a>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}
