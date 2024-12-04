export const locales = ['en', 'de'] as const
export type Locale = (typeof locales)[number]

export const defaultLocale = 'en' as const

export const localeNames = {
  en: 'English',
  de: 'Deutsch',
} as const

export const localeFlags = {
  en: '🇬🇧',
  de: '🇩🇪',
} as const

// Type for the locale parameter
export interface LocaleParams {
  locale: Locale
}

// Helper function to get localized href
export const getLocalizedHref = (path: string, locale: Locale) => {
  if (locale === defaultLocale && path === '/') {
    return '/';
  }
  return `/${locale}${path === '/' ? '' : path}`
}

// Helper function to get the display name of a locale
export const getDisplayName = (locale: Locale) => {
  return localeNames[locale]
}

// Helper function to get the flag of a locale
export const getLocaleFlag = (locale: Locale) => {
  return localeFlags[locale]
} 