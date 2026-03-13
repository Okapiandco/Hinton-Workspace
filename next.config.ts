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
      // WordPress to Next.js redirects
      {
        source: '/the-workspace/co-working',
        destination: '/workspace/coworking',
        permanent: true,
      },
      {
        source: '/the-workspace/meeting-rooms',
        destination: '/workspace/meeting-rooms',
        permanent: true,
      },
      // Add more redirects as needed during Phase 2
    ]
  },
};

export default nextConfig;
