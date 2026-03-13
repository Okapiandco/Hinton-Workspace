import Image from 'next/image'
import Section from '@/components/ui/Section'

interface TextImageSectionProps {
  title: string
  body: string
  image?: string
  imageAlt?: string
  imagePosition?: 'left' | 'right'
  bgColor?: 'cream' | 'white'
}

export default function TextImageSection({
  title,
  body,
  image,
  imageAlt = '',
  imagePosition = 'right',
  bgColor = 'cream',
}: TextImageSectionProps) {
  const isImageLeft = imagePosition === 'left'

  return (
    <Section bgColor={bgColor}>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Text */}
        <div className={isImageLeft ? 'md:order-2' : 'md:order-1'}>
          <h2 className="text-4xl font-serif font-bold text-dark-green mb-6">
            {title}
          </h2>
          <div className="text-lg font-sans text-gray-700 leading-relaxed space-y-4">
            {body.split('\n\n').map((paragraph, idx) => (
              <p key={idx}>{paragraph}</p>
            ))}
          </div>
        </div>

        {/* Image */}
        {image && (
          <div className={isImageLeft ? 'md:order-1' : 'md:order-2'}>
            <Image
              src={image}
              alt={imageAlt}
              width={600}
              height={450}
              className="rounded-lg shadow-lg w-full h-auto"
            />
          </div>
        )}
      </div>
    </Section>
  )
}
