"use client";

import Image from "next/image";
import { useState, useEffect, useCallback } from "react";

interface GalleryImage {
  src: string;
  alt: string;
}

interface GalleryProps {
  images: GalleryImage[];
}

export default function Gallery({ images }: GalleryProps) {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const openLightbox = (index: number) => {
    setCurrentIndex(index);
    setLightboxOpen(true);
    document.body.style.overflow = "hidden";
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
    document.body.style.overflow = "auto";
  };

  const goToPrevious = useCallback(() => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  }, [images.length]);

  const goToNext = useCallback(() => {
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  }, [images.length]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!lightboxOpen) return;
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowLeft") goToPrevious();
      if (e.key === "ArrowRight") goToNext();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [lightboxOpen, goToPrevious, goToNext]);

  return (
    <>
      {/* Masonry Grid */}
      <div className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-4 space-y-4">
        {images.map((image, index) => (
          <div
            key={image.src}
            className="break-inside-avoid cursor-pointer group overflow-hidden rounded-lg"
            onClick={() => openLightbox(index)}
          >
            <div className="relative">
              <Image
                src={image.src}
                alt={image.alt}
                width={600}
                height={400}
                className="w-full h-auto object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox */}
      {lightboxOpen && (
        <div
          className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center"
          onClick={closeLightbox}
        >
          {/* Close button */}
          <button
            className="absolute top-4 right-4 text-white text-4xl hover:text-gray-300 transition-colors z-50"
            onClick={closeLightbox}
            aria-label="Close lightbox"
          >
            &times;
          </button>

          {/* Previous button */}
          <button
            className="absolute left-4 top-1/2 -translate-y-1/2 text-white text-5xl hover:text-gray-300 transition-colors z-50 p-4"
            onClick={(e) => {
              e.stopPropagation();
              goToPrevious();
            }}
            aria-label="Previous image"
          >
            &#8249;
          </button>

          {/* Image */}
          <div
            className="relative max-w-[90vw] max-h-[90vh]"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={images[currentIndex].src}
              alt={images[currentIndex].alt}
              width={1200}
              height={800}
              className="max-w-full max-h-[90vh] object-contain"
              priority
            />
          </div>

          {/* Next button */}
          <button
            className="absolute right-4 top-1/2 -translate-y-1/2 text-white text-5xl hover:text-gray-300 transition-colors z-50 p-4"
            onClick={(e) => {
              e.stopPropagation();
              goToNext();
            }}
            aria-label="Next image"
          >
            &#8250;
          </button>

          {/* Counter */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white text-sm">
            {currentIndex + 1} / {images.length}
          </div>
        </div>
      )}
    </>
  );
}
