import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.sanity.io',
        // You can leave port and pathname empty to allow all Sanity images
        port: '',
        pathname: '/**', 
      },
    ],
  },
};

export default nextConfig;