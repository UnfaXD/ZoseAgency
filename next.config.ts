import type { NextConfig } from 'next';

const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});

const nextConfig: NextConfig = {
  // Static export configuration (disabled for development)
  ...(process.env.NODE_ENV === 'production' && {
    output: 'export',
    trailingSlash: true,
    distDir: 'out',
  }),

  // Performance optimizations
  compress: true,

  // Image optimization
  images: {
    unoptimized: process.env.NODE_ENV === 'production',
  },

  // Turbopack configuration for Next.js 16
  turbopack: {
    root: __dirname,
  },

  // Experimental features for performance
  experimental: {
    optimizePackageImports: ['framer-motion', '@/lib', '@/components'],
  },

  // Compiler options
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  },

  // Headers for better caching (only in production)
  ...(process.env.NODE_ENV === 'production' && {
    async headers() {
      return [
        {
          source: '/:all*(svg|jpg|png|gif|ico|webp)',
          locale: false,
          headers: [
            {
              key: 'Cache-Control',
              value: 'public, max-age=31536000, immutable',
            },
          ],
        },
        {
          source: '/_next/static/:path*',
          locale: false,
          headers: [
            {
              key: 'Cache-Control',
              value: 'public, max-age=31536000, immutable',
            },
          ],
        },
      ];
    },
  }),

  // TypeScript configuration
  typescript: {
    tsconfigPath: './tsconfig.json',
  },
};

export default withBundleAnalyzer(nextConfig);
