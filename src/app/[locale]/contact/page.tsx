'use client'

import React, { useState } from 'react'
import { useSearchParams } from 'next/navigation'
import { useTranslations } from 'next-intl'

const products = [
  { id: 'erp', name: 'Sobersoft ERP (Complete Suite)' },
  { id: 'finance', name: 'Financial Management' },
  { id: 'inventory', name: 'Inventory Control' },
  { id: 'hr', name: 'HR Management' },
  { id: 'analytics', name: 'Analytics & Reporting' },
]

const positions = [
  { id: 'frontend', name: 'Frontend Developer' },
  { id: 'backend', name: 'Backend Developer' },
  { id: 'product', name: 'Product Manager' },
  { id: 'sales', name: 'Sales Representative' },
]

export default function Contact() {
  const searchParams = useSearchParams()
  const type = searchParams.get('type')
  const isDemo = type === 'demo'
  const isCareers = type === 'careers'
  const preSelectedProduct = searchParams.get('product')
  const preSelectedPosition = searchParams.get('position')
  const t = useTranslations('contact')

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    company: '',
    phone: '',
    product: preSelectedProduct || '',
    position: preSelectedPosition || '',
    message: '',
    requestType: type || 'contact',
    resume: null as File | null,
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would typically send the form data to your backend
    console.log('Form submitted:', formData)
    // TODO: Implement form submission
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFormData((prev) => ({ ...prev, resume: e.target.files![0] }))
    }
  }

  return (
    <div className="relative isolate bg-white dark:bg-gray-900">
      <div className="mx-auto grid max-w-7xl grid-cols-1 lg:grid-cols-2">
        <div className="relative px-6 pb-20 pt-24 sm:pt-32 lg:static lg:px-8 lg:py-48">
          <div className="mx-auto max-w-xl lg:mx-0 lg:max-w-lg">
            <div className="absolute inset-y-0 left-0 -z-10 w-full overflow-hidden bg-gray-100 ring-1 ring-gray-900/10 dark:bg-gray-800/50 lg:w-1/2">
              <div
                className="absolute inset-0 bg-gradient-to-r from-blue-100 to-blue-50 dark:from-blue-900/20 dark:to-blue-900/10"
                style={{
                  clipPath:
                    'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
                }}
              />
            </div>
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white">
              {isCareers ? t('careers.title') : isDemo ? t('demo.title') : t('general.title')}
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-300">
              {isCareers ? t('careers.description') : isDemo ? t('demo.description') : t('general.description')}
            </p>
            <dl className="mt-10 space-y-4 text-base leading-7 text-gray-600 dark:text-gray-300">
              <div className="flex gap-x-4">
                <dt className="flex-none">
                  <span className="sr-only">Address</span>
                  <svg
                    className="h-7 w-6 text-gray-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008z"
                    />
                  </svg>
                </dt>
                <dd>
                  Jan ERP GmbH
                  <br />
                  Musterstraße 123
                  <br />
                  10115 Berlin, Germany
                </dd>
              </div>
              <div className="flex gap-x-4">
                <dt className="flex-none">
                  <span className="sr-only">Email</span>
                  <svg
                    className="h-7 w-6 text-gray-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                    />
                  </svg>
                </dt>
                <dd>
                  <a className="hover:text-gray-900 dark:hover:text-white" href="mailto:contact@jan-erp.com">
                    {isCareers ? 'careers@jan-erp.com' : 'contact@jan-erp.com'}
                  </a>
                </dd>
              </div>
              <div className="flex gap-x-4">
                <dt className="flex-none">
                  <span className="sr-only">Telephone</span>
                  <svg
                    className="h-7 w-6 text-gray-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
                    />
                  </svg>
                </dt>
                <dd>
                  <a className="hover:text-gray-900 dark:hover:text-white" href="tel:+49 30 123456">
                    +49 30 123456
                  </a>
                </dd>
              </div>
            </dl>
          </div>
        </div>
        <form onSubmit={handleSubmit} className="px-6 pb-24 pt-20 sm:pb-32 lg:px-8 lg:py-48">
          <div className="mx-auto max-w-xl lg:mr-0 lg:max-w-lg">
            <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
              <div>
                <label htmlFor="firstName" className="block text-sm font-semibold leading-6 text-gray-900 dark:text-white">
                  {t('form.firstName')}
                </label>
                <div className="mt-2.5">
                  <input
                    type="text"
                    name="firstName"
                    id="firstName"
                    autoComplete="given-name"
                    value={formData.firstName}
                    onChange={handleChange}
                    className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 dark:bg-gray-800 dark:text-white dark:ring-gray-700 dark:focus:ring-blue-500 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="lastName" className="block text-sm font-semibold leading-6 text-gray-900 dark:text-white">
                  {t('form.lastName')}
                </label>
                <div className="mt-2.5">
                  <input
                    type="text"
                    name="lastName"
                    id="lastName"
                    autoComplete="family-name"
                    value={formData.lastName}
                    onChange={handleChange}
                    className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 dark:bg-gray-800 dark:text-white dark:ring-gray-700 dark:focus:ring-blue-500 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
              <div className="sm:col-span-2">
                <label htmlFor="email" className="block text-sm font-semibold leading-6 text-gray-900 dark:text-white">
                  {t('form.email')}
                </label>
                <div className="mt-2.5">
                  <input
                    type="email"
                    name="email"
                    id="email"
                    autoComplete="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 dark:bg-gray-800 dark:text-white dark:ring-gray-700 dark:focus:ring-blue-500 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
              {!isCareers && (
                <div className="sm:col-span-2">
                  <label htmlFor="company" className="block text-sm font-semibold leading-6 text-gray-900 dark:text-white">
                    {t('form.company')}
                  </label>
                  <div className="mt-2.5">
                    <input
                      type="text"
                      name="company"
                      id="company"
                      autoComplete="organization"
                      value={formData.company}
                      onChange={handleChange}
                      className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 dark:bg-gray-800 dark:text-white dark:ring-gray-700 dark:focus:ring-blue-500 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
              )}
              <div className="sm:col-span-2">
                <label htmlFor="phone" className="block text-sm font-semibold leading-6 text-gray-900 dark:text-white">
                  {t('form.phone')}
                </label>
                <div className="mt-2.5">
                  <input
                    type="tel"
                    name="phone"
                    id="phone"
                    autoComplete="tel"
                    value={formData.phone}
                    onChange={handleChange}
                    className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 dark:bg-gray-800 dark:text-white dark:ring-gray-700 dark:focus:ring-blue-500 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
              {!isCareers ? (
                <div className="sm:col-span-2">
                  <label htmlFor="product" className="block text-sm font-semibold leading-6 text-gray-900 dark:text-white">
                    {t('form.product')}
                  </label>
                  <div className="mt-2.5">
                    <select
                      name="product"
                      id="product"
                      value={formData.product}
                      onChange={handleChange}
                      className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-blue-600 dark:bg-gray-800 dark:text-white dark:ring-gray-700 dark:focus:ring-blue-500 sm:text-sm sm:leading-6"
                    >
                      <option value="">{t('form.selectProduct')}</option>
                      {products.map((product) => (
                        <option key={product.id} value={product.id}>
                          {product.name}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
              ) : (
                <div className="sm:col-span-2">
                  <label htmlFor="position" className="block text-sm font-semibold leading-6 text-gray-900 dark:text-white">
                    {t('form.position')}
                  </label>
                  <div className="mt-2.5">
                    <select
                      name="position"
                      id="position"
                      value={formData.position}
                      onChange={handleChange}
                      className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-blue-600 dark:bg-gray-800 dark:text-white dark:ring-gray-700 dark:focus:ring-blue-500 sm:text-sm sm:leading-6"
                    >
                      <option value="">{t('form.selectPosition')}</option>
                      {positions.map((position) => (
                        <option key={position.id} value={position.id}>
                          {position.name}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
              )}
              {isCareers && (
                <div className="sm:col-span-2">
                  <label htmlFor="resume" className="block text-sm font-semibold leading-6 text-gray-900 dark:text-white">
                    {t('form.resume')}
                  </label>
                  <div className="mt-2.5">
                    <input
                      type="file"
                      name="resume"
                      id="resume"
                      accept=".pdf,.doc,.docx"
                      onChange={handleFileChange}
                      className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100 dark:text-gray-400 dark:file:bg-blue-900/20 dark:file:text-blue-400"
                    />
                  </div>
                </div>
              )}
              <div className="sm:col-span-2">
                <label htmlFor="message" className="block text-sm font-semibold leading-6 text-gray-900 dark:text-white">
                  {t('form.message')}
                </label>
                <div className="mt-2.5">
                  <textarea
                    name="message"
                    id="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 dark:bg-gray-800 dark:text-white dark:ring-gray-700 dark:focus:ring-blue-500 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
            </div>
            <div className="mt-8 flex justify-end">
              <button
                type="submit"
                className="rounded-md bg-blue-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 dark:bg-blue-500 dark:hover:bg-blue-400"
              >
                {isCareers ? t('form.submitApplication') : t('form.send')}
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  )
} 