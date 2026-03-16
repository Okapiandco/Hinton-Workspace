'use client'

import { useState, useEffect, useCallback } from 'react'
import { reviews, BUSINESS_INFO, type GoogleReview } from '@/lib/reviews-data'

function StarRating({ rating, size = 'md' }: { rating: number; size?: 'sm' | 'md' | 'lg' }) {
  const sizeClass = size === 'lg' ? 'text-2xl' : size === 'md' ? 'text-lg' : 'text-base'
  return (
    <div className="flex gap-0.5">
      {[...Array(5)].map((_, i) => (
        <span key={i} className={`${sizeClass} ${i < rating ? 'text-yellow-400' : 'text-gray-300'}`}>
          &#9733;
        </span>
      ))}
    </div>
  )
}

function GoogleIcon({ className = 'w-5 h-5' }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 01-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z" fill="#4285F4" />
      <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
      <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05" />
      <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
    </svg>
  )
}

function ReviewerAvatar({ name }: { name: string }) {
  const initials = name
    .split(' ')
    .map((n) => n[0])
    .join('')
    .toUpperCase()
    .slice(0, 2)

  const colours = [
    'bg-orange-500',
    'bg-blue-500',
    'bg-green-500',
    'bg-purple-500',
    'bg-pink-500',
    'bg-teal-500',
    'bg-red-500',
    'bg-indigo-500',
  ]
  const colourIdx = name.split('').reduce((acc, c) => acc + c.charCodeAt(0), 0) % colours.length

  return (
    <div
      className={`w-10 h-10 rounded-full ${colours[colourIdx]} flex items-center justify-center text-white font-bold text-sm flex-shrink-0`}
    >
      {initials}
    </div>
  )
}

function ReviewCard({ review }: { review: GoogleReview }) {
  return (
    <div className="bg-gray-50 rounded-lg p-5 min-w-[300px] max-w-[340px] flex-shrink-0 snap-start">
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center gap-3">
          <ReviewerAvatar name={review.reviewer_name} />
          <div>
            <p className="font-sans font-semibold text-sm text-gray-900">{review.reviewer_name}</p>
            <p className="font-sans text-xs text-gray-500">{review.relative_date}</p>
          </div>
        </div>
        <GoogleIcon className="w-5 h-5" />
      </div>
      <StarRating rating={review.review_rating} size="sm" />
      <p className="font-sans text-sm text-gray-700 mt-3 leading-relaxed line-clamp-5">
        {review.review_text}
      </p>
    </div>
  )
}

export default function GoogleReviews() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [visibleCount, setVisibleCount] = useState(3)

  useEffect(() => {
    function handleResize() {
      if (window.innerWidth < 640) setVisibleCount(1)
      else if (window.innerWidth < 1024) setVisibleCount(2)
      else setVisibleCount(3)
    }
    handleResize()
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  const maxIndex = Math.max(0, reviews.length - visibleCount)

  const prev = useCallback(() => {
    setCurrentIndex((i) => Math.max(0, i - 1))
  }, [])

  const next = useCallback(() => {
    setCurrentIndex((i) => Math.min(maxIndex, i + 1))
  }, [maxIndex])

  // Auto-advance every 5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((i) => (i >= maxIndex ? 0 : i + 1))
    }, 5000)
    return () => clearInterval(timer)
  }, [maxIndex])

  const totalDots = maxIndex + 1

  return (
    <div className="flex flex-col lg:flex-row gap-8 items-start">
      {/* Business info card */}
      <div className="flex-shrink-0 lg:w-56">
        <div className="flex items-center gap-3 mb-3">
          <div className="w-12 h-12 rounded-full bg-dark-green flex items-center justify-center overflow-hidden">
            <svg viewBox="240 180 86 66" className="w-8 h-8">
              <path
                fill="#FAF5F2"
                d="M254.1,225.3h58.5v14.9h-58.5v-14.9ZM254.1,223.9v-14.7h58.5v14.7h-58.5ZM263.1,195.4h40.5l8.7,12.5h-57.9l8.7-12.5ZM262.4,194.1l-9.6,13.9v33.5h61.2v-33.5l-9.6-13.9h-41.9Z"
              />
            </svg>
          </div>
          <div>
            <p className="font-sans font-bold text-base text-gray-900">{BUSINESS_INFO.name}</p>
          </div>
        </div>

        <div className="flex items-center gap-2 mb-1">
          <span className="font-sans font-bold text-base text-gray-900">
            {BUSINESS_INFO.rating.toFixed(1)}
          </span>
          <StarRating rating={Math.round(BUSINESS_INFO.rating)} size="sm" />
        </div>

        <p className="font-sans text-xs text-gray-500 mb-3">
          Based on {BUSINESS_INFO.totalReviews} reviews
        </p>

        <p className="font-sans text-xs text-gray-400 mb-3">
          powered by <span className="font-semibold text-gray-600">Google</span>
        </p>

        <a
          href={BUSINESS_INFO.googleMapsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-sans text-xs font-semibold px-4 py-2 rounded-full transition-colors"
        >
          review us on <GoogleIcon className="w-4 h-4" />
        </a>
      </div>

      {/* Reviews carousel */}
      <div className="flex-1 min-w-0 relative">
        <div className="flex items-center">
          {/* Prev arrow */}
          <button
            onClick={prev}
            disabled={currentIndex === 0}
            className="flex-shrink-0 w-9 h-9 rounded-full bg-white shadow-md flex items-center justify-center text-gray-600 hover:text-gray-900 disabled:opacity-30 disabled:cursor-default transition-opacity mr-3 z-10"
            aria-label="Previous reviews"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="w-4 h-4"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
            </svg>
          </button>

          {/* Cards container */}
          <div className="flex-1 overflow-hidden">
            <div
              className="flex gap-4 transition-transform duration-300 ease-in-out"
              style={{
                transform: `translateX(-${currentIndex * (340 + 16)}px)`,
              }}
            >
              {reviews.map((review, idx) => (
                <ReviewCard key={idx} review={review} />
              ))}
            </div>
          </div>

          {/* Next arrow */}
          <button
            onClick={next}
            disabled={currentIndex >= maxIndex}
            className="flex-shrink-0 w-9 h-9 rounded-full bg-white shadow-md flex items-center justify-center text-gray-600 hover:text-gray-900 disabled:opacity-30 disabled:cursor-default transition-opacity ml-3 z-10"
            aria-label="Next reviews"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="w-4 h-4"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
            </svg>
          </button>
        </div>

        {/* Dot indicators */}
        <div className="flex justify-center gap-2 mt-6">
          {[...Array(totalDots)].map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentIndex(i)}
              className={`w-2.5 h-2.5 rounded-full transition-colors ${
                i === currentIndex ? 'bg-orange-400' : 'bg-gray-300'
              }`}
              aria-label={`Go to review group ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  )
}
