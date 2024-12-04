'use client'

import React from 'react'
import Link from 'next/link'
import { useTranslations, useLocale } from 'next-intl'

const features = [
  {
    id: 'employee',
    name: 'Employee Management',
    description: 'Comprehensive employee database with profiles, documents, and performance tracking.',
    icon: (props: any) => (
      <svg fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" />
      </svg>
    ),
  },
  {
    id: 'payroll',
    name: 'Payroll Processing',
    description: 'Automated payroll calculations, tax deductions, and direct deposit management.',
    icon: (props: any) => (
      <svg fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18V10.5zm-12 0h.008v.008H6V10.5z" />
      </svg>
    ),
  },
  {
    id: 'attendance',
    name: 'Time & Attendance',
    description: 'Digital time tracking, leave management, and attendance reporting.',
    icon: (props: any) => (
      <svg fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    id: 'performance',
    name: 'Performance Management',
    description: 'Goal setting, performance reviews, and employee development tracking.',
    icon: (props: any) => (
      <svg fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
      </svg>
    ),
  },
]

export default function HRManagement() {
  const t = useTranslations('products.hr')
  const locale = useLocale()

  // Helper function to get localized href
  const getLocalizedHref = (path: string) => {
    return `/${locale}${path}`
  }

  return (
    <div className="relative isolate">
      {/* Hero section */}
      <div className="relative isolate overflow-hidden bg-gradient-to-b from-green-100/20 dark:from-green-900/20">
        <div className="mx-auto max-w-7xl pb-24 pt-10 sm:pb-32 lg:grid lg:grid-cols-2 lg:gap-x-8 lg:px-8 lg:py-40">
          <div className="px-6 lg:px-0 lg:pt-4">
            <div className="mx-auto max-w-2xl">
              <div className="max-w-lg">
                <h1 className="mt-10 text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl dark:text-white">
                  {t('title')}
                </h1>
                <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-300">
                  {t('description')}
                </p>
                <div className="mt-10 flex items-center gap-x-6">
                  <Link
                    href={getLocalizedHref('/contact?type=demo&product=hr')}
                    className="rounded-md bg-green-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-green-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600"
                  >
                    {t('demo')}
                  </Link>
                  <Link
                    href={getLocalizedHref('/contact')}
                    className="text-sm font-semibold leading-6 text-gray-900 dark:text-gray-300"
                  >
                    {t('contact')} <span aria-hidden="true">→</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Features section */}
      <div className="mx-auto max-w-7xl py-24 sm:py-32">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-green-600">{t('features.subtitle')}</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl dark:text-white">
            {t('features.title')}
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-300">
            {t('features.description')}
          </p>
        </div>

        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-2">
            {features.map((feature) => (
              <div key={feature.id} className="flex flex-col">
                <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-gray-900 dark:text-white">
                  <feature.icon className="h-5 w-5 flex-none text-green-600" aria-hidden="true" />
                  {t(`features.${feature.id}.title`)}
                </dt>
                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600 dark:text-gray-300">
                  <p className="flex-auto">{t(`features.${feature.id}.description`)}</p>
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  )
} 