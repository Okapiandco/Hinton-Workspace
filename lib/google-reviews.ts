let cache = {
  reviews: null as any[] | null,
  lastFetch: null as number | null,
}

export async function getGoogleReviews() {
  const response = await fetch(
    'https://api.outscraper.com/v3/google-maps-reviews?' +
    'query=Hinton%20Workspace&platform=google&limit=10&sort_by=newest',
    {
      headers: {
        'API-Key': process.env.OUTSCRAPER_API_KEY || '',
      },
    }
  )
  const data = await response.json()
  return data.data?.[0]?.reviews || []
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
