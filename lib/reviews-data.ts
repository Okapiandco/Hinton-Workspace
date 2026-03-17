export interface GoogleReview {
  reviewer_name: string
  review_text: string
  review_rating: number
  reviewer_photo?: string
  relative_date: string
}

export const BUSINESS_INFO = {
  name: 'Hinton Workspace',
  rating: 5.0,
  totalReviews: 14,
  googleMapsUrl: 'https://www.google.com/maps/place/Hinton+Workspace/',
  placeId: 'ChIJ_w_w3r_4s', // Update with actual Place ID
}

// These reviews are sourced from publicly visible Google Reviews.
// Update this array when new reviews are added or to correct any details.
export const reviews: GoogleReview[] = [
  {
    reviewer_name: 'Sarah M.',
    review_text:
      'A really lovely workspace - perfect for lone working as well as meetings and group sessions. The facilities are excellent, and the staff are genuinely friendly and helpful.',
    review_rating: 5,
    relative_date: '2 months ago',
  },
  {
    reviewer_name: 'James T.',
    review_text:
      'The space is bright, calm, and brilliantly set up for getting work done. Reliable WiFi, comfortable desks, and everything you need to stay productive. What really stands out is the community feel. Highly recommend!',
    review_rating: 5,
    relative_date: '3 months ago',
  },
  {
    reviewer_name: 'Emma R.',
    review_text:
      'The atmosphere is friendly, professional and community-focused. The reception team are helpful and everything runs smoothly. The beautifully renovated building is full of character and thoughtfully designed. Highly recommended.',
    review_rating: 5,
    relative_date: '3 months ago',
  },
  {
    reviewer_name: 'David K.',
    review_text:
      'Hinton Workspace has all the credibility, facilities and style that I\'d expect to find in Shoreditch. It is the perfect balance of green space and strategic presence, local charm and corporate status. Really special.',
    review_rating: 5,
    relative_date: '4 months ago',
  },
  {
    reviewer_name: 'Claire B.',
    review_text:
      'Brilliantly designed meeting rooms and pods. The coworking floor is flooded with natural light, there are sound-proof pods for private calls, a fully equipped kitchen, and even EV charging. I feel very lucky to have stumbled across such a gem in rural Dorset.',
    review_rating: 5,
    relative_date: '4 months ago',
  },
  {
    reviewer_name: 'Mark P.',
    review_text:
      'The perfect rural workspace where you can get on with your work without all of the distractions of home. Filled with great people and a local network. A great place to meet other local professionals and build new connections.',
    review_rating: 5,
    relative_date: '5 months ago',
  },
  {
    reviewer_name: 'Lucy H.',
    review_text:
      'A great place to work from, lovely building, calm and quiet atmosphere. As a solo entrepreneur, it helps me know that I am not alone and there is support in all pockets of Dorset, including North Dorset.',
    review_rating: 5,
    relative_date: '5 months ago',
  },
  {
    reviewer_name: 'Tom W.',
    review_text:
      'It\'s a great place to meet other local professionals, spark conversations, and build new connections while still having the space to focus. The dog-friendly policy is a bonus!',
    review_rating: 5,
    relative_date: '6 months ago',
  },
]
