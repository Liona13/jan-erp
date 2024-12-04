'use client'

import { useTranslations } from 'next-intl'
import Image from 'next/image'

export default function About() {
  const t = useTranslations('about')

  return (
    <div className="relative isolate overflow-hidden bg-white dark:bg-gray-900 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Company Overview */}
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-6xl">
            {t('title')}
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-300">
            {t('description')}
          </p>
        </div>

        {/* Mission & Vision */}
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-2">
            <div>
              <dt className="text-2xl font-semibold leading-7 text-gray-900 dark:text-white">
                {t('mission.title')}
              </dt>
              <dd className="mt-4 text-base leading-7 text-gray-600 dark:text-gray-300">
                {t('mission.description')}
              </dd>
            </div>
            <div>
              <dt className="text-2xl font-semibold leading-7 text-gray-900 dark:text-white">
                {t('vision.title')}
              </dt>
              <dd className="mt-4 text-base leading-7 text-gray-600 dark:text-gray-300">
                {t('vision.description')}
              </dd>
            </div>
          </dl>
        </div>

        {/* Team Section */}
        <div className="mx-auto mt-32 max-w-7xl px-6 sm:mt-40 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
              {t('team.title')}
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-300">
              {t('team.description')}
            </p>
          </div>
          <ul
            role="list"
            className="mx-auto mt-20 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-14 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3 xl:grid-cols-4"
          >
            {/* Team members will be added here */}
          </ul>
        </div>
      </div>
    </div>
  )
} 