export function organizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Hinton Workspace',
    url: 'https://hintonworkspace.co.uk',
    logo: 'https://hintonworkspace.co.uk/Website%20Images%202026/Logos/HINTON_WORKSPACE_LOGO_GREEN_RGB.png',
    sameAs: [
      'https://www.facebook.com/hintonworkspace',
      'https://www.instagram.com/hintonworkspace',
      'https://www.linkedin.com/company/hintonworkspace',
    ],
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+44-1258-472623',
      contactType: 'customer service',
      email: 'reception@hintonworkspace.co.uk',
      areaServed: 'GB',
      availableLanguage: 'English',
    },
  }
}

export function localBusinessSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'CoworkingSpace',
    name: 'Hinton Workspace',
    description:
      'Flexible coworking space in North Dorset offering hot desks, meeting rooms, and event spaces.',
    url: 'https://hintonworkspace.co.uk',
    telephone: '+44-1258-472623',
    email: 'reception@hintonworkspace.co.uk',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'The Building Yard, Hinton St Mary',
      addressLocality: 'Sturminster Newton',
      addressRegion: 'Dorset',
      postalCode: 'DT10 1NA',
      addressCountry: 'GB',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 50.9167,
      longitude: -2.3167,
    },
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        opens: '09:00',
        closes: '17:00',
      },
    ],
    image:
      'https://hintonworkspace.co.uk/Website%20Images%202026/Building/building-exterior.jpg',
    priceRange: '££',
  }
}

export function breadcrumbSchema(
  items: { name: string; url: string }[]
) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  }
}

export function articleSchema({
  title,
  description,
  url,
  image,
  datePublished,
  dateModified,
  authorName,
}: {
  title: string
  description: string
  url: string
  image?: string
  datePublished: string
  dateModified?: string
  authorName?: string
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: title,
    description,
    url,
    ...(image && { image }),
    datePublished,
    dateModified: dateModified || datePublished,
    author: {
      '@type': 'Person',
      name: authorName || 'Hinton Workspace',
    },
    publisher: {
      '@type': 'Organization',
      name: 'Hinton Workspace',
      logo: {
        '@type': 'ImageObject',
        url: 'https://hintonworkspace.co.uk/Website%20Images%202026/Logos/HINTON_WORKSPACE_LOGO_GREEN_RGB.png',
      },
    },
  }
}

export function eventSchema({
  title,
  description,
  url,
  startDate,
  endDate,
  location,
  image,
}: {
  title: string
  description: string
  url: string
  startDate: string
  endDate?: string
  location?: string
  image?: string
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Event',
    name: title,
    description,
    url,
    startDate,
    ...(endDate && { endDate }),
    ...(image && { image }),
    location: {
      '@type': 'Place',
      name: location || 'Hinton Workspace',
      address: {
        '@type': 'PostalAddress',
        streetAddress: 'The Building Yard, Hinton St Mary',
        addressLocality: 'Sturminster Newton',
        addressRegion: 'Dorset',
        postalCode: 'DT10 1NA',
        addressCountry: 'GB',
      },
    },
    organizer: {
      '@type': 'Organization',
      name: 'Hinton Workspace',
      url: 'https://hintonworkspace.co.uk',
    },
  }
}

export function faqSchema(
  faqs: { question: string; answer: string }[]
) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  }
}

export function aggregateRatingSchema({
  ratingValue,
  reviewCount,
}: {
  ratingValue: number
  reviewCount: number
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'CoworkingSpace',
    name: 'Hinton Workspace',
    url: 'https://hintonworkspace.co.uk',
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue,
      bestRating: 5,
      reviewCount,
    },
  }
}

export function priceSchema({
  name,
  price,
  priceCurrency = 'GBP',
  description,
}: {
  name: string
  price: string
  priceCurrency?: string
  description?: string
}) {
  return {
    '@type': 'Offer',
    name,
    price,
    priceCurrency,
    ...(description && { description }),
    availability: 'https://schema.org/InStock',
  }
}
