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
      // Old WordPress workspace paths → new paths
      { source: '/the-workspace', destination: '/workspace', permanent: true },
      { source: '/the-workspace/', destination: '/workspace', permanent: true },
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
      { source: '/the-workspace/the-long-room', destination: '/workspace/meeting-rooms', permanent: true },
      { source: '/the-workspace/the-long-room/', destination: '/workspace/meeting-rooms', permanent: true },
      { source: '/the-workspace/event-space', destination: '/workspace/event-space', permanent: true },
      { source: '/the-workspace/event-space/', destination: '/workspace/event-space', permanent: true },
      { source: '/the-workspace/personal-training', destination: '/wellbeing', permanent: true },
      { source: '/the-workspace/personal-training/', destination: '/wellbeing', permanent: true },

      // Old WordPress page paths → new paths
      { source: '/blog', destination: '/news', permanent: true },
      { source: '/blog/', destination: '/news', permanent: true },
      { source: '/blog/:slug', destination: '/news/:slug', permanent: true },
      { source: '/privacy', destination: '/legal/privacy', permanent: true },
      { source: '/privacy/', destination: '/legal/privacy', permanent: true },
      { source: '/location-and-history', destination: '/about-us', permanent: true },
      { source: '/location-and-history/', destination: '/about-us', permanent: true },
      { source: '/new-members', destination: '/pricing', permanent: true },
      { source: '/new-members/', destination: '/pricing', permanent: true },
      { source: '/gallery', destination: '/workspace', permanent: true },
      { source: '/gallery/', destination: '/workspace', permanent: true },
      { source: '/hinton-workspace-business-expo', destination: '/events', permanent: true },
      { source: '/hinton-workspace-business-expo/', destination: '/events', permanent: true },

      // Old WordPress event singular → new plural path
      { source: '/event/:slug', destination: '/events/:slug', permanent: true },

      // Whats-on alias
      { source: '/whats-on', destination: '/events', permanent: true },
      { source: '/whats-on/', destination: '/events', permanent: true },

      // Trashed/broken posts
      { source: '/news/__trashed-3', destination: '/news', permanent: true },
      { source: '/news/__trashed-3/', destination: '/news', permanent: true },
      { source: '/uncategorized/:slug', destination: '/news', permanent: true },

      // WordPress category/tag/author archive pages
      { source: '/category/:slug', destination: '/news', permanent: true },
      { source: '/post_tag/:slug', destination: '/news', permanent: true },
      { source: '/author/:slug', destination: '/about-us', permanent: true },
    ]
  },
};

export default nextConfig;
