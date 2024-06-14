import { withContentlayer } from 'next-contentlayer';
import bundleAnalyzer from '@next/bundle-analyzer'
import './src/env/env.mjs'

const withBundleAnalyzer = bundleAnalyzer({
  enabled: process.env.ANALYZE === 'true'
})

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

export default withBundleAnalyzer(withContentlayer(nextConfig));
