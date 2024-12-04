'use client'

import Link from 'next/link'
import { useTranslations, useLocale } from 'next-intl'

export default function NotFound() {
  const t = useTranslations('error')
  const locale = useLocale()

  // Helper function to get localized href
  const getLocalizedHref = (path: string) => {
    return `/${locale}${path}`
  }

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 px-4 py-16 sm:px-6 sm:py-24 md:grid md:place-items-center lg:px-8">
      <div className="mx-auto max-w-max">
        <main className="sm:flex">
          <p className="text-4xl font-bold tracking-tight text-blue-600 sm:text-5xl">404</p>
          <div className="sm:ml-6">
            <div className="sm:border-l sm:border-gray-200 sm:pl-6">
              <h1 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-5xl">
                {t('notFound.title')}
              </h1>
              <p className="mt-1 text-base text-gray-500 dark:text-gray-400">
                {t('notFound.description')}
              </p>
            </div>
            <div className="mt-10 flex space-x-3 sm:border-l sm:border-transparent sm:pl-6">
              <Link
                href={getLocalizedHref('/')}
                className="inline-flex items-center rounded-md border border-transparent bg-blue-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
              >
                {t('notFound.home')}
              </Link>
              <Link
                href={getLocalizedHref('/contact')}
                className="inline-flex items-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-700 hover:bg-blue-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
              >
                {t('notFound.contact')}
              </Link>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
} 