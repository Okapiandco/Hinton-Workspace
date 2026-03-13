'use client'

import { useEffect, useState } from 'react'

interface Review {
  reviewer_name: string
  review_text: string
  review_rating: number
  review_datetime_utc: string
}

export default function GoogleReviews() {
  const [reviews, setReviews] = useState<Review[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function fetchReviews() {
      try {
        const response = await fetch('/api/reviews')
        const data = await response.json()
        setReviews(data.slice(0, 3))
      } catch (error) {
        console.error('Error fetching reviews:', error)
      } finally {
        setLoading(false)
      }
    }

    fetchReviews()
  }, [])

  if (loading) {
    return (
      <div className="text-center py-8">
        <p className="font-sans text-gray-600">Loading reviews...</p>
      </div>
    )
  }

  if (!reviews.length) {
    return null
  }

  return (
    <div className="space-y-6">
      {reviews.map((review, idx) => (
        <div
          key={idx}
          className="bg-white border-l-4 border-pink rounded-lg p-6 shadow-sm"
        >
          {/* Star Rating */}
          <div className="flex gap-1 mb-3">
            {[...Array(review.review_rating || 5)].map((_, i) => (
              <span key={i} className="text-yellow-400 text-lg">
                &#9733;
              </span>
            ))}
          </div>

          {/* Review Text */}
          <p className="font-sans text-gray-700 italic mb-4">
            &ldquo;{review.review_text}&rdquo;
          </p>

          {/* Author & Date */}
          <div className="flex justify-between items-center text-sm font-sans text-gray-500">
            <span className="font-bold text-dark-green">
              &mdash; {review.reviewer_name || 'Anonymous'}
            </span>
            <span>
              {new Date(review.review_datetime_utc).toLocaleDateString('en-GB')}
            </span>
          </div>
        </div>
      ))}

      <div className="text-center mt-6">
        <a
          href="https://www.google.com/search?q=Hinton+Workspace+reviews"
          target="_blank"
          rel="noopener noreferrer"
          className="font-sans text-dark-green font-semibold hover:text-pink transition-colors"
        >
          Read More Reviews on Google &rarr;
        </a>
      </div>
    </div>
  )
}
