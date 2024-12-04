'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useTranslations, useLocale } from 'next-intl';
import Features from '@/components/home/Features';
import Testimonials from '@/components/home/Testimonials';
import Stats from '@/components/home/Stats';
import CTA from '@/components/home/CTA';

export default function LocalizedPage() {
  const t = useTranslations('home');
  const locale = useLocale();

  // Helper function to get localized href
  const getLocalizedHref = (path: string) => {
    return `/${locale}${path}`;
  };

  return (
    <div className="relative">
      {/* Hero Section */}
      <div className="relative isolate overflow-hidden">
        <div className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80">
          <div className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]" />
        </div>
        
        <div className="mx-auto max-w-7xl px-6 pb-24 pt-10 sm:pb-32 lg:flex lg:px-8 lg:py-40">
          <div className="mx-auto max-w-2xl flex-shrink-0 lg:mx-0 lg:max-w-xl lg:pt-8">
            <h1 className="mt-10 text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl dark:text-white">
              {t('hero.title')}
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-300">
              {t('hero.description')}
            </p>
            <div className="mt-10 flex items-center gap-x-6">
              <Link
                href={getLocalizedHref('/products/sobersoft-erp')}
                className="rounded-md bg-blue-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
              >
                {t('hero.cta.primary')}
              </Link>
              <Link 
                href={getLocalizedHref('/contact')}
                className="text-sm font-semibold leading-6 text-gray-900 dark:text-gray-300"
              >
                {t('hero.cta.secondary')} <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>
          <div className="mx-auto mt-16 flex max-w-2xl sm:mt-24 lg:ml-10 lg:mt-0 lg:mr-0 lg:max-w-none lg:flex-none xl:ml-32">
            <div className="max-w-3xl flex-none sm:max-w-5xl lg:max-w-none">
              <Image
                src="/hero-dashboard.png"
                alt="App screenshot"
                width={2432}
                height={1442}
                className="w-[76rem] rounded-md bg-white/5 shadow-2xl ring-1 ring-white/10"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <Features />

      {/* Stats Section */}
      <Stats />

      {/* Testimonials Section */}
      <Testimonials />

      {/* CTA Section */}
      <CTA />
    </div>
  );
} 