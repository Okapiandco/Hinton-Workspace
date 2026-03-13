import Image from 'next/image'

interface OptimisedImageProps {
  src: string
  alt: string
  width?: number
  height?: number
  priority?: boolean
  className?: string
  fill?: boolean
}

export default function OptimisedImage({
  src,
  alt,
  width = 800,
  height = 600,
  priority = false,
  className = '',
  fill = false,
}: OptimisedImageProps) {
  if (fill) {
    return (
      <Image
        src={src}
        alt={alt}
        fill
        priority={priority}
        className={className}
        loading={priority ? 'eager' : 'lazy'}
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
      />
    )
  }

  return (
    <Image
      src={src}
      alt={alt}
      width={width}
      height={height}
      priority={priority}
      className={`w-full h-auto ${className}`}
      loading={priority ? 'eager' : 'lazy'}
    />
  )
}
