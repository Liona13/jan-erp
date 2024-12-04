/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.NEXT_PUBLIC_APP_URL || 'https://jan-erp.vercel.app',
  generateRobotsTxt: true,
  generateIndexSitemap: false,
  alternateRefs: [
    {
      href: 'https://jan-erp.vercel.app/en',
      hreflang: 'en',
    },
    {
      href: 'https://jan-erp.vercel.app/de',
      hreflang: 'de',
    },
  ],
} 