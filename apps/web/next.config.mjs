import { withContentlayer } from 'next-contentlayer';

import './src/env/env.mjs'

/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  typescript: {
    ignoreBuildErrors: !!process.env.CI
  },
  eslint: {
    ignoreDuringBuilds: !!process.env.CI
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'res.cloudinary.com'
      },
      {
        protocol: 'https',
        hostname: 'khhamnquzieyqedqyvfw.supabase.co'
      }
    ]
  },
  webpack: (config) => {
    config.infrastructureLogging = {
      level: 'error'
    }
    return config;
  },

};

export default withContentlayer(nextConfig);
