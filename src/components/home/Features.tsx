'use client'

import React from 'react'
import { useTranslations } from 'next-intl'
import Link from 'next/link'
import { useLocale } from 'next-intl'

export default function Features() {
  const t = useTranslations('home.features')
  const locale = useLocale()

  // Function to get the localized href
  const getLocalizedHref = (href: string) => {
    return `/${locale}${href === '/' ? '' : href}`
  }
  
  return (
    <section className="py-24 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white sm:text-4xl">
            {t('title')}
          </h2>
          <p className="mt-4 text-xl text-gray-600 dark:text-gray-300">
            {t('description')}
          </p>
        </div>
        <div className="mt-20">
          <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-3">
            {t.raw('items').map((feature: any, index: number) => (
              <div key={index} className="group relative">
                <div className="relative h-80 w-full overflow-hidden rounded-lg bg-white dark:bg-gray-800 sm:aspect-h-1 sm:aspect-w-2 lg:aspect-h-1 lg:aspect-w-1 group-hover:opacity-75 sm:h-64">
                  <div className="h-full w-full object-cover object-center">
                    <div className="flex h-full items-center justify-center text-6xl text-blue-600">
                      {index === 0 ? '💰' : index === 1 ? '📦' : '👥'}
                    </div>
                  </div>
                </div>
                <h3 className="mt-6 text-xl font-bold text-gray-900 dark:text-white">
                  <Link href={getLocalizedHref(`/products/sobersoft-erp/${index === 0 ? 'finance' : index === 1 ? 'inventory' : 'hr'}`)}>
                    <span className="absolute inset-0" />
                    {feature.title}
                  </Link>
                </h3>
                <p className="mt-2 text-base text-gray-500 dark:text-gray-400">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
} 