import { reviews as fallbackReviews } from './reviews-data'

let cache = {
  reviews: null as any[] | null,
  lastFetch: null as number | null,
}

export async function getGoogleReviews() {
  const apiKey = process.env.OUTSCRAPER_API_KEY
  if (!apiKey || apiKey === 'your_outscraper_key_here') {
    return fallbackReviews
  }

  try {
    const response = await fetch(
      'https://api.app.outscraper.com/maps/reviews-v3?' +
        'query=Hinton+Workspace+Hinton+St+Mary&reviewsLimit=15&sort=newest&language=en&async=false',
      {
        headers: {
          'X-API-KEY': apiKey,
        },
      }
    )
    const data = await response.json()
    const results = data?.data?.[0]?.reviews_data || data?.data?.[0]?.reviews || []
    return results.length > 0 ? results : fallbackReviews
  } catch (error) {
    console.error('Outscraper API error, using fallback reviews:', error)
    return fallbackReviews
  }
}

export async function getCachedReviews() {
  const now = Date.now()
  const oneDayMs = 24 * 60 * 60 * 1000

  if (cache.reviews && cache.lastFetch && now - cache.lastFetch < oneDayMs) {
    return cache.reviews
  }

  const reviews = await getGoogleReviews()
  cache.reviews = reviews
  cache.lastFetch = now
  return reviews
}
