const withNextIntl = require('next-intl/plugin')('./src/i18n.ts');

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  typescript: {
    ignoreBuildErrors: false,
  },
  eslint: {
    ignoreDuringBuilds: false,
  },
  images: {
    domains: ['localhost'],
    unoptimized: process.env.NODE_ENV === 'development',
  },
  poweredByHeader: false,
  compress: true,
  productionBrowserSourceMaps: false,
}

module.exports = withNextIntl(nextConfig); 