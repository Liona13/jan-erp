import createMiddleware from 'next-intl/middleware';
import { locales, defaultLocale } from './config/i18n';

// Create and export the middleware
export default createMiddleware({
  // A list of all locales that are supported
  locales,
  defaultLocale,
  // Use always to ensure consistent URL structure
  localePrefix: 'always'
});

// Configure the middleware matcher
export const config = {
  // Match all paths except static files and api routes
  matcher: [
    // Match all paths
    '/((?!api|_next|_vercel|.*\\..*).*)',
    // Match root
    '/'
  ]
}; 