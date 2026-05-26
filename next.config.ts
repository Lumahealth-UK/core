import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  // Avoids dev-only RSC manifest errors from the segment explorer (SegmentViewNode).
  experimental: {
    devtoolSegmentExplorer: false,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'miro.medium.com',
      },
    ],
  },
}

export default nextConfig
