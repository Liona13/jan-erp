'use client'

import { usePathname } from 'next/navigation'
import Link from 'next/link'
import { useTranslations, useLocale } from 'next-intl'
import MobileNav from '@/components/products/MobileNav'

export default function ProductsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const t = useTranslations('products')
  const pathname = usePathname()
  const locale = useLocale()

  // Helper function to get localized href
  const getLocalizedHref = (path: string) => {
    return `/${locale}${path}`
  }

  const navigation = [
    { name: t('navigation.overview'), href: '/products/sobersoft-erp' },
    { name: t('navigation.finance'), href: '/products/sobersoft-erp/finance' },
    { name: t('navigation.inventory'), href: '/products/sobersoft-erp/inventory' },
    { name: t('navigation.hr'), href: '/products/sobersoft-erp/hr' },
    { name: t('navigation.analytics'), href: '/products/sobersoft-erp/analytics' },
  ]

  return (
    <div className="relative mx-auto max-w-8xl px-4 py-8 sm:px-6 lg:px-8">
      {/* Mobile navigation */}
      <div className="mb-8">
        <MobileNav />
      </div>

      <div className="flex gap-x-8">
        {/* Sidebar */}
        <aside className="hidden lg:block lg:w-64 lg:flex-none">
          <nav className="sticky top-8">
            <ul role="list" className="space-y-2">
              {navigation.map((item) => (
                <li key={item.name}>
                  <Link
                    href={getLocalizedHref(item.href)}
                    className={`block rounded-md px-3 py-2 text-sm font-medium ${
                      pathname === getLocalizedHref(item.href)
                        ? 'bg-blue-600 text-white'
                        : 'text-gray-700 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-300 dark:hover:bg-gray-800 dark:hover:text-white'
                    }`}
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </aside>

        {/* Main content */}
        <main className="flex-1">{children}</main>
      </div>
    </div>
  )
} 