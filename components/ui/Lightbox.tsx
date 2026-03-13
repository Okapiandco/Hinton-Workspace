'use client'

import { useState, useCallback, useEffect } from 'react'
import Image from 'next/image'

interface LightboxGalleryProps {
  images: { src: string; alt: string }[]
  columns?: 2 | 3
}

export default function LightboxGallery({ images, columns = 3 }: LightboxGalleryProps) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null)

  const close = useCallback(() => setActiveIndex(null), [])
  const prev = useCallback(() => {
    setActiveIndex((i) => (i !== null && i > 0 ? i - 1 : images.length - 1))
  }, [images.length])
  const next = useCallback(() => {
    setActiveIndex((i) => (i !== null && i < images.length - 1 ? i + 1 : 0))
  }, [images.length])

  useEffect(() => {
    if (activeIndex === null) return
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') close()
      if (e.key === 'ArrowLeft') prev()
      if (e.key === 'ArrowRight') next()
    }
    document.addEventListener('keydown', handleKey)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', handleKey)
      document.body.style.overflow = ''
    }
  }, [activeIndex, close, prev, next])

  const gridCols = columns === 2 ? 'grid-cols-2' : 'grid-cols-2 md:grid-cols-3'

  return (
    <>
      {/* Thumbnail Grid */}
      <div className={`grid ${gridCols} gap-4`}>
        {images.map((img, idx) => (
          <button
            key={idx}
            onClick={() => setActiveIndex(idx)}
            className="relative aspect-[4/3] rounded-lg overflow-hidden cursor-pointer group"
          >
            <Image
              src={img.src}
              alt={img.alt}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-300"
            />
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors" />
          </button>
        ))}
      </div>

      {/* Lightbox Overlay */}
      {activeIndex !== null && (
        <div
          className="fixed inset-0 z-[100] bg-black/90 flex items-center justify-center"
          onClick={close}
        >
          {/* Close button */}
          <button
            onClick={close}
            className="absolute top-4 right-4 text-white hover:text-pink transition-colors z-10"
            aria-label="Close"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-8 h-8">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          {/* Prev button */}
          {images.length > 1 && (
            <button
              onClick={(e) => { e.stopPropagation(); prev() }}
              className="absolute left-4 text-white hover:text-pink transition-colors z-10"
              aria-label="Previous"
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-10 h-10">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
              </svg>
            </button>
          )}

          {/* Image */}
          <div
            className="relative w-[90vw] h-[80vh] max-w-5xl"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={images[activeIndex].src}
              alt={images[activeIndex].alt}
              fill
              className="object-contain"
              sizes="90vw"
            />
          </div>

          {/* Next button */}
          {images.length > 1 && (
            <button
              onClick={(e) => { e.stopPropagation(); next() }}
              className="absolute right-4 text-white hover:text-pink transition-colors z-10"
              aria-label="Next"
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-10 h-10">
                <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
              </svg>
            </button>
          )}

          {/* Counter */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white/70 font-sans text-sm">
            {activeIndex + 1} / {images.length}
          </div>
        </div>
      )}
    </>
  )
}
