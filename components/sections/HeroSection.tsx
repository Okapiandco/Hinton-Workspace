import Image from 'next/image'
import Button from '@/components/ui/Button'

interface HeroSectionProps {
  title: string
  subtitle: string
  body?: string
  backgroundImage?: string
  ctas?: Array<{
    text: string
    href: string
    variant?: 'primary' | 'secondary'
  }>
}

export default function HeroSection({
  title,
  subtitle,
  body,
  backgroundImage,
  ctas,
}: HeroSectionProps) {
  return (
    <section className="relative h-[500px] md:h-[600px] flex items-center justify-center overflow-hidden">
      {backgroundImage && (
        <Image
          src={backgroundImage}
          alt={title}
          fill
          priority
          className="absolute inset-0 object-cover"
        />
      )}
      <div className="absolute inset-0 bg-dark-green/60" />
      <div className="relative z-10 text-center max-w-3xl mx-auto px-4">
        <p className="text-lg md:text-xl font-sans text-pink mb-4 tracking-wide uppercase">
          {subtitle}
        </p>
        <h1 className="text-4xl md:text-6xl font-serif font-bold text-white mb-6 leading-tight">
          {title}
        </h1>
        {body && (
          <p className="text-lg font-sans text-gray-100 mb-8 max-w-2xl mx-auto">
            {body}
          </p>
        )}
        {ctas && (
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
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
