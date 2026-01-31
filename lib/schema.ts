// Schema.org JSON-LD structured data utilities

const baseUrl = "https://hintonworkspace.co.uk";

export const businessInfo = {
  name: "Hinton Workspace",
  address: {
    streetAddress: "The Building Yard, Hinton St Mary",
    addressLocality: "Sturminster Newton",
    addressRegion: "Dorset",
    postalCode: "DT10 1NA",
    addressCountry: "GB",
  },
  telephone: "+44-1258-472623",
  email: "reception@hintonworkspace.co.uk",
  url: baseUrl,
  logo: `${baseUrl}/logo.png`,
};

export function getLocalBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": `${baseUrl}/#localbusiness`,
    name: businessInfo.name,
    description:
      "A unique co-working environment for entrepreneurs and professionals seeking focus, flexibility, and community in North Dorset. Offering co-working spaces, meeting rooms, and event space.",
    url: businessInfo.url,
    logo: businessInfo.logo,
    image: `${baseUrl}/workspace.jpg`,
    telephone: businessInfo.telephone,
    email: businessInfo.email,
    address: {
      "@type": "PostalAddress",
      ...businessInfo.address,
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 50.9397,
      longitude: -2.3089,
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "08:00",
        closes: "18:00",
      },
    ],
    priceRange: "££",
    currenciesAccepted: "GBP",
    paymentAccepted: "Cash, Credit Card, Bank Transfer",
    areaServed: {
      "@type": "GeoCircle",
      geoMidpoint: {
        "@type": "GeoCoordinates",
        latitude: 50.9397,
        longitude: -2.3089,
      },
      geoRadius: "30000",
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Workspace Services",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Co-Working Space",
            description: "Flexible hot-desking and dedicated desk options",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Meeting Rooms",
            description: "Professional meeting rooms for hire",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Event Space",
            description: "Versatile space for events and workshops",
          },
        },
      ],
    },
  };
}

export function getWebPageSchema(
  title: string,
  description: string,
  url: string
) {
  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: title,
    description: description,
    url: url,
    isPartOf: {
      "@type": "WebSite",
      name: "Hinton Workspace",
      url: baseUrl,
    },
    publisher: {
      "@type": "Organization",
      name: businessInfo.name,
      logo: {
        "@type": "ImageObject",
        url: businessInfo.logo,
      },
    },
  };
}

export function getBreadcrumbSchema(
  items: Array<{ name: string; url: string }>
) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

export function getBlogPostSchema(post: {
  title: string;
  description: string;
  slug: string;
  datePublished: string;
  dateModified?: string;
  image?: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.description,
    url: `${baseUrl}/blog/${post.slug}`,
    datePublished: post.datePublished,
    dateModified: post.dateModified || post.datePublished,
    image: post.image || `${baseUrl}/og-image.jpg`,
    author: {
      "@type": "Organization",
      name: businessInfo.name,
      url: businessInfo.url,
    },
    publisher: {
      "@type": "Organization",
      name: businessInfo.name,
      logo: {
        "@type": "ImageObject",
        url: businessInfo.logo,
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${baseUrl}/blog/${post.slug}`,
    },
  };
}

export function getEventSchema(event: {
  name: string;
  description: string;
  startDate: string;
  endDate?: string;
  location?: string;
  url?: string;
  image?: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Event",
    name: event.name,
    description: event.description,
    url: event.url || baseUrl,
    startDate: event.startDate,
    endDate: event.endDate || event.startDate,
    image: event.image || `${baseUrl}/og-image.jpg`,
    eventStatus: "https://schema.org/EventScheduled",
    eventAttendanceMode: "https://schema.org/OfflineEventAttendanceMode",
    location: {
      "@type": "Place",
      name: event.location || "Hinton Workspace",
      address: {
        "@type": "PostalAddress",
        ...businessInfo.address,
      },
    },
    organizer: {
      "@type": "Organization",
      name: businessInfo.name,
      url: businessInfo.url,
    },
  };
}

export function getServiceSchema(service: {
  name: string;
  description: string;
  url: string;
  image?: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.name,
    description: service.description,
    url: service.url,
    image: service.image,
    provider: {
      "@type": "LocalBusiness",
      name: businessInfo.name,
      address: {
        "@type": "PostalAddress",
        ...businessInfo.address,
      },
    },
    areaServed: {
      "@type": "Place",
      name: "North Dorset, UK",
    },
  };
}
