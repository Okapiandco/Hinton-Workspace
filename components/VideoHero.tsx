"use client";

import { useState, useRef, useEffect } from "react";

interface VideoHeroProps {
  videoUrl: string;
  fallbackImageUrl?: string;
  overlayOpacity?: number;
  children: React.ReactNode;
  className?: string;
}

export default function VideoHero({
  videoUrl,
  fallbackImageUrl,
  overlayOpacity = 0.4,
  children,
  className = "",
}: VideoHeroProps) {
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const handleCanPlay = () => setIsVideoLoaded(true);
    const handleError = () => setHasError(true);

    video.addEventListener("canplay", handleCanPlay);
    video.addEventListener("error", handleError);

    return () => {
      video.removeEventListener("canplay", handleCanPlay);
      video.removeEventListener("error", handleError);
    };
  }, []);

  return (
    <section
      className={`relative bg-[var(--hinton-dark)] text-white min-h-[80vh] flex items-center overflow-hidden ${className}`}
    >
      <div
        className="absolute inset-0 z-10 bg-black"
        style={{ opacity: overlayOpacity }}
      />

      {!hasError && (
        <video
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${
            isVideoLoaded ? "opacity-100" : "opacity-0"
          }`}
        >
          <source src={videoUrl} type="video/mp4" />
          <source src={videoUrl} type="video/webm" />
        </video>
      )}

      {fallbackImageUrl && (!isVideoLoaded || hasError) && (
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${fallbackImageUrl})` }}
        />
      )}

      <div className="relative z-20 w-full">{children}</div>
    </section>
  );
}
