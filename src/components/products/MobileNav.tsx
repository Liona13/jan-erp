'use client'

import { useState } from 'react'
import { usePathname } from 'next/navigation'
import Link from 'next/link'
import { useTranslations, useLocale } from 'next-intl'

export default function MobileNav() {
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname()
  const t = useTranslations('products')
  const locale = useLocale()

  // Helper function to get localized href
  const getLocalizedHref = (path: string) => {
    return `/${locale}${path}`
  }

  const navigation = [
    { name: t('navigation.overview'), href: '/products/sobersoft-erp' },
    { name: t('navigation.finance'), href: '/products/sobersoft-erp/finance' },
    { name: t('navigation.inventory'), href: '/products/sobersoft-erp/inventory' },
    { name: t('navigation.hr'), href: '/products/sobersoft-erp/hr' },
    { name: t('navigation.analytics'), href: '/products/sobersoft-erp/analytics' },
  ]

  return (
    <div className="lg:hidden">
      <button
        type="button"
        className="flex w-full items-center justify-between rounded-lg bg-gray-100 px-4 py-2 text-left text-sm font-medium text-gray-900 hover:bg-gray-200 focus:outline-none focus-visible:ring focus-visible:ring-blue-500 focus-visible:ring-opacity-50 dark:bg-gray-800 dark:text-white dark:hover:bg-gray-700"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span>{t('navigation.menu')}</span>
        <svg
          className={`ml-2 h-5 w-5 transform transition-transform ${
            isOpen ? 'rotate-180' : ''
          }`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </button>

      {isOpen && (
        <div className="mt-2 space-y-2">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={getLocalizedHref(item.href)}
              className={`block rounded-lg px-4 py-2 text-sm font-medium ${
                pathname === getLocalizedHref(item.href)
                  ? 'bg-blue-600 text-white'
                  : 'text-gray-700 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-300 dark:hover:bg-gray-800 dark:hover:text-white'
              }`}
              onClick={() => setIsOpen(false)}
            >
              {item.name}
            </Link>
          ))}
        </div>
      )}
    </div>
  )
} 