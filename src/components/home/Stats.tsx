'use client'

import React from 'react'
import { useTranslations } from 'next-intl'

const stats = [
  { id: 'users', value: '10,000+' },
  { id: 'countries', value: '25+' },
  { id: 'data', value: '1B+' },
  { id: 'uptime', value: '99.9%' },
]

export default function Stats() {
  const t = useTranslations('home.stats')
  
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
        <dl className="mt-20 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat) => (
            <div
              key={stat.id}
              className="flex flex-col items-center justify-center rounded-lg bg-gray-50 p-8 dark:bg-gray-800"
            >
              <dt className="order-2 mt-2 text-lg font-medium leading-6 text-gray-600 dark:text-gray-300">
                {t(`metrics.${stat.id}`)}
              </dt>
              <dd className="order-1 text-5xl font-extrabold text-blue-600">
                {stat.value}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  )
} 