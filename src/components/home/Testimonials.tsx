'use client'

import React from 'react'
import { useTranslations } from 'next-intl'
import Image from 'next/image'

const testimonialImages = [
  '/testimonials/person-1.jpg',
  '/testimonials/person-2.jpg',
  '/testimonials/person-3.jpg',
]

export default function Testimonials() {
  const t = useTranslations('home.testimonials')
  const testimonials = t.raw('items')
  
  return (
    <section className="py-24 bg-gray-50 dark:bg-gray-800">
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
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {testimonials.map((testimonial: any, index: number) => (
              <div
                key={testimonial.author.name}
                className="flex flex-col justify-between rounded-2xl bg-white p-8 shadow-lg dark:bg-gray-700"
              >
                <blockquote className="flex-grow">
                  <p className="text-lg text-gray-600 dark:text-gray-300">
                    "{testimonial.body}"
                  </p>
                </blockquote>
                <div className="mt-8 flex items-center gap-4">
                  <Image
                    className="h-12 w-12 rounded-full object-cover"
                    src={testimonialImages[index]}
                    alt={testimonial.author.name}
                    width={48}
                    height={48}
                  />
                  <div>
                    <div className="font-medium text-gray-900 dark:text-white">
                      {testimonial.author.name}
                    </div>
                    <div className="text-sm text-gray-500 dark:text-gray-400">
                      {testimonial.author.role}, {testimonial.author.company}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
} 