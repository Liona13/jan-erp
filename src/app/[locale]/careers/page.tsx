'use client'

import React from 'react'
import Link from 'next/link'
import { useTranslations, useLocale } from 'next-intl'

const positions = [
  {
    id: 'frontend',
    department: 'Engineering',
    type: 'Full-time',
    location: 'Remote',
  },
  {
    id: 'backend',
    department: 'Engineering',
    type: 'Full-time',
    location: 'Remote',
  },
  {
    id: 'product',
    department: 'Product',
    type: 'Full-time',
    location: 'Remote',
  },
  {
    id: 'sales',
    department: 'Sales',
    type: 'Full-time',
    location: 'Remote',
  },
]

export default function Careers() {
  const t = useTranslations('careers')
  const locale = useLocale()

  // Helper function to get localized href
  const getLocalizedHref = (path: string) => {
    return `/${locale}${path === '/' ? '' : path}`
  }

  return (
    <div className="bg-white dark:bg-gray-900">
      <div className="relative isolate">
        <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
          {/* Header */}
          <div className="mx-auto max-w-2xl text-center">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-6xl">
              {t('title')}
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-300">
              {t('description')}
            </p>
          </div>

          {/* Values section */}
          <div className="mx-auto mt-20 max-w-7xl">
            <div className="mx-auto max-w-2xl lg:mx-0">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
                {t('values.title')}
              </h2>
              <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-300">
                {t('values.description')}
              </p>
            </div>
            <dl className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 text-base leading-7 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-4">
              {['innovation', 'collaboration', 'excellence', 'integrity'].map((value) => (
                <div key={value}>
                  <dt className="font-semibold text-gray-900 dark:text-white">
                    {t(`values.items.${value}.title`)}
                  </dt>
                  <dd className="mt-1 text-gray-600 dark:text-gray-300">
                    {t(`values.items.${value}.description`)}
                  </dd>
                </div>
              ))}
            </dl>
          </div>

          {/* Open positions */}
          <div className="mx-auto mt-32 max-w-7xl">
            <div className="mx-auto max-w-2xl lg:mx-0">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
                {t('positions.title')}
              </h2>
              <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-300">
                {t('positions.description')}
              </p>
            </div>
            <ul role="list" className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-6 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3">
              {positions.map((position) => (
                <li
                  key={position.id}
                  className="rounded-xl border border-gray-200 dark:border-gray-800 p-8 transition-colors duration-200 hover:border-blue-600 dark:hover:border-blue-400"
                >
                  <div className="flex items-center gap-x-4">
                    <h3 className="text-lg font-semibold leading-8 tracking-tight text-gray-900 dark:text-white">
                      {t(`positions.items.${position.id}.title`)}
                    </h3>
                  </div>
                  <p className="mt-4 text-base leading-7 text-gray-600 dark:text-gray-300">
                    {t(`positions.items.${position.id}.description`)}
                  </p>
                  <div className="mt-6 flex flex-wrap items-center gap-4">
                    <span className="inline-flex items-center rounded-md bg-blue-50 dark:bg-blue-900/20 px-2 py-1 text-xs font-medium text-blue-700 dark:text-blue-400">
                      {position.department}
                    </span>
                    <span className="inline-flex items-center rounded-md bg-green-50 dark:bg-green-900/20 px-2 py-1 text-xs font-medium text-green-700 dark:text-green-400">
                      {position.type}
                    </span>
                    <span className="inline-flex items-center rounded-md bg-purple-50 dark:bg-purple-900/20 px-2 py-1 text-xs font-medium text-purple-700 dark:text-purple-400">
                      {position.location}
                    </span>
                  </div>
                  <div className="mt-6">
                    <Link
                      href={getLocalizedHref(`/contact?type=careers&position=${position.id}`)}
                      className="text-sm font-semibold leading-6 text-blue-600 hover:text-blue-500 dark:text-blue-400 dark:hover:text-blue-300"
                    >
                      {t('positions.apply')} <span aria-hidden="true">→</span>
                    </Link>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
} 