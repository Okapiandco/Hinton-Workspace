import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.sanity.io',
      },
    ],
  },
  redirects: async () => {
    return [
      // Workspace redirects (with and without trailing slash)
      { source: '/the-workspace/co-working', destination: '/workspace/coworking', permanent: true },
      { source: '/the-workspace/co-working/', destination: '/workspace/coworking', permanent: true },
      { source: '/the-workspace/meeting-rooms', destination: '/workspace/meeting-rooms', permanent: true },
      { source: '/the-workspace/meeting-rooms/', destination: '/workspace/meeting-rooms', permanent: true },
      { source: '/the-workspace/the-workshop', destination: '/workspace/workshop', permanent: true },
      { source: '/the-workspace/the-workshop/', destination: '/workspace/workshop', permanent: true },
      { source: '/the-workspace/the-sitting-room', destination: '/workspace/sitting-room', permanent: true },
      { source: '/the-workspace/the-sitting-room/', destination: '/workspace/sitting-room', permanent: true },
      { source: '/the-workspace/the-clerks-office', destination: '/workspace/clerks-office', permanent: true },
      { source: '/the-workspace/the-clerks-office/', destination: '/workspace/clerks-office', permanent: true },

      // Main page redirects
      { source: '/about-us/', destination: '/about-us', permanent: true },
      { source: '/contact/', destination: '/contact', permanent: true },
      { source: '/pricing/', destination: '/pricing', permanent: true },
      { source: '/whats-on/', destination: '/events', permanent: true },
      { source: '/blog/', destination: '/news', permanent: true },

      // News/Blog redirects
      { source: '/news/__trashed-3/', destination: '/news', permanent: true },
      { source: '/news/hinton-workspace-a-yes-space/', destination: '/news/hinton-workspace-a-yes-space', permanent: true },
      { source: '/news/where-you-work-matters-in-2026/', destination: '/news/where-you-work-matters-in-2026', permanent: true },
      { source: '/news/village/', destination: '/news/village', permanent: true },
      { source: '/news/from-startups-to-corporates/', destination: '/news/from-startups-to-corporates', permanent: true },
      { source: '/news/10-productivity-hacks/', destination: '/news/10-productivity-hacks', permanent: true },
      { source: '/news/national-freelancers-day-2025/', destination: '/news/national-freelancers-day-2025', permanent: true },
      { source: '/news/dorset-business-expo-2025/', destination: '/news/dorset-business-expo-2025', permanent: true },

      // Events redirects
      { source: '/events/hinton-hustle-may/', destination: '/events/hinton-hustle-may', permanent: true },
      { source: '/events/hinton-hustle-june/', destination: '/events/hinton-hustle-june', permanent: true },
    ]
  },
};

export default nextConfig;
