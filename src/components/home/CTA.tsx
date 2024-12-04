'use client'

import React from 'react'
import { useTranslations } from 'next-intl'
import Link from 'next/link'
import { useLocale } from 'next-intl'

export default function CTA() {
  const t = useTranslations('home.cta')
  const locale = useLocale()
  
  return (
    <section className="py-24 bg-blue-600">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
            {t('title')}
          </h2>
          <p className="mt-4 text-xl text-blue-100">
            {t('description')}
          </p>
          <div className="mt-8">
            <Link
              href={`/${locale}/contact`}
              className="inline-block rounded-md border border-transparent bg-white px-8 py-3 text-base font-medium text-blue-600 hover:bg-blue-50"
            >
              {t('button')}
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
} 