'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Dialog } from '@headlessui/react'
import { usePathname } from 'next/navigation'
import { useLocale, useTranslations } from 'next-intl'
import { locales, Locale, getDisplayName, getLocaleFlag } from '@/config/i18n'

export default function Navbar() {
  const t = useTranslations('navigation')
  const currentLocale = useLocale()
  const pathname = usePathname()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  // Helper function to get localized href
  const getLocalizedHref = (path: string) => {
    return `/${currentLocale}${path === '/' ? '' : path}`
  }

  const navigation = [
    { name: t('products'), href: '/products/sobersoft-erp' },
    { name: t('about'), href: '/about' },
    { name: t('news'), href: '/news' },
    { name: t('contact'), href: '/contact' },
  ]

  // Helper function to get localized href for language switcher
  const getLocalizedPathForLocale = (locale: string) => {
    // Remove the current locale from the pathname if it exists
    const pathWithoutLocale = pathname.replace(`/${currentLocale}`, '') || '/'
    return `/${locale}${pathWithoutLocale === '/' ? '' : pathWithoutLocale}`
  }

  return (
    <header className="fixed inset-x-0 top-0 z-50 bg-white/80 backdrop-blur-sm dark:bg-gray-900/80 border-b border-gray-200 dark:border-gray-800">
      <nav className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8" aria-label="Global">
        <div className="flex lg:flex-1">
          <Link href={getLocalizedHref('/')} className="-m-1.5 p-1.5">
            <span className="sr-only">Jan ERP</span>
            <span className="text-xl font-bold text-blue-600 dark:text-blue-400">Jan ERP</span>
          </Link>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400"
            onClick={() => setMobileMenuOpen(true)}
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-menu"
          >
            <span className="sr-only">Open main menu</span>
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>
          </button>
        </div>
        <div className="hidden lg:flex lg:gap-x-12">
          {navigation.map((item) => {
            const isActive = pathname === getLocalizedHref(item.href)
            return (
              <Link
                key={item.name}
                href={getLocalizedHref(item.href)}
                className={`${
                  isActive
                    ? 'text-blue-600 dark:text-blue-400'
                    : 'text-gray-700 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400'
                } transition-colors duration-200`}
                aria-current={isActive ? 'page' : undefined}
              >
                {item.name}
              </Link>
            )
          })}
        </div>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <div className="relative inline-block text-left">
            <div className="flex items-center space-x-4">
              {locales.map((locale: Locale) => {
                const isActive = locale === currentLocale
                return (
                  <Link
                    key={locale}
                    href={getLocalizedPathForLocale(locale)}
                    className={`inline-flex items-center space-x-1 text-sm font-semibold leading-6 ${
                      isActive
                        ? 'text-blue-600 dark:text-blue-400'
                        : 'text-gray-900 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400'
                    } transition-colors duration-200`}
                    aria-current={isActive ? 'true' : undefined}
                  >
                    <span>{getLocaleFlag(locale)}</span>
                    <span>{getDisplayName(locale)}</span>
                  </Link>
                )
              })}
            </div>
          </div>
        </div>
      </nav>
      <Dialog as="div" className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
        <div className="fixed inset-0 z-50" aria-hidden="true">
          <div className="fixed inset-0 bg-black/20 backdrop-blur-sm dark:bg-black/40" aria-hidden="true" />
        </div>
        <Dialog.Panel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10 dark:bg-gray-800 dark:ring-gray-800">
          <div className="flex items-center justify-between">
            <Link href={getLocalizedHref('/')} className="-m-1.5 p-1.5" onClick={() => setMobileMenuOpen(false)}>
              <span className="sr-only">Jan ERP</span>
              <span className="text-xl font-bold text-blue-600 dark:text-blue-400">Jan ERP</span>
            </Link>
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-gray-700 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10 dark:divide-gray-700">
              <div className="space-y-2 py-6">
                {navigation.map((item) => {
                  const isActive = pathname === getLocalizedHref(item.href)
                  return (
                    <Link
                      key={item.name}
                      href={getLocalizedHref(item.href)}
                      className={`-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 ${
                        isActive
                          ? 'text-blue-600 bg-blue-50 dark:text-blue-400 dark:bg-blue-900/20'
                          : 'text-gray-900 hover:bg-gray-50 dark:text-gray-300 dark:hover:bg-gray-700'
                      } transition-colors duration-200`}
                      onClick={() => setMobileMenuOpen(false)}
                      aria-current={isActive ? 'page' : undefined}
                    >
                      {item.name}
                    </Link>
                  )
                })}
              </div>
              <div className="py-6">
                <div className="flex flex-col space-y-4">
                  {locales.map((locale: Locale) => {
                    const isActive = locale === currentLocale
                    return (
                      <Link
                        key={locale}
                        href={getLocalizedPathForLocale(locale)}
                        className={`inline-flex items-center space-x-2 text-sm font-semibold leading-6 ${
                          isActive
                            ? 'text-blue-600 dark:text-blue-400'
                            : 'text-gray-900 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400'
                        } transition-colors duration-200`}
                        onClick={() => setMobileMenuOpen(false)}
                        aria-current={isActive ? 'true' : undefined}
                      >
                        <span>{getLocaleFlag(locale)}</span>
                        <span>{getDisplayName(locale)}</span>
                      </Link>
                    )
                  })}
                </div>
              </div>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </header>
  )
} 