'use client'

import { useTranslations } from 'next-intl'
import Image from 'next/image'
import Link from 'next/link'

export default function News() {
  const t = useTranslations('news')

  return (
    <div className="bg-white dark:bg-gray-900 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
            {t('title')}
          </h2>
          <p className="mt-2 text-lg leading-8 text-gray-600 dark:text-gray-300">
            {t('description')}
          </p>
        </div>
        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {/* News items will be dynamically loaded here */}
          {[1, 2, 3].map((item) => (
            <article key={item} className="flex flex-col items-start">
              <div className="relative w-full">
                <Image
                  src={`/news/placeholder-${item}.jpg`}
                  alt="News thumbnail"
                  className="aspect-[16/9] w-full rounded-2xl bg-gray-100 object-cover sm:aspect-[2/1] lg:aspect-[3/2]"
                  width={800}
                  height={400}
                />
                <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-gray-900/10" />
              </div>
              <div className="max-w-xl">
                <div className="mt-8 flex items-center gap-x-4 text-xs">
                  <time dateTime="2023-12-01" className="text-gray-500">
                    Dec 1, 2023
                  </time>
                  <span className="relative z-10 rounded-full bg-gray-50 dark:bg-gray-800 px-3 py-1.5 font-medium text-gray-600 dark:text-gray-300">
                    {t('categories.technology')}
                  </span>
                </div>
                <div className="group relative">
                  <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 dark:text-white group-hover:text-gray-600 dark:group-hover:text-gray-300">
                    <Link href="#">
                      <span className="absolute inset-0" />
                      {t(`articles.${item}.title`)}
                    </Link>
                  </h3>
                  <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600 dark:text-gray-300">
                    {t(`articles.${item}.excerpt`)}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  )
} 