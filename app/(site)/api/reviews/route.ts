import { getCachedReviews } from '@/lib/google-reviews'

export async function GET() {
  try {
    const reviews = await getCachedReviews()
    return Response.json(reviews)
  } catch (error) {
    console.error('Error fetching reviews:', error)
    return Response.json([], { status: 500 })
  }
}
