import '@testing-library/jest-dom'
import React from 'react'
import { mockMessages } from './src/test-utils/i18n-mock'

// Mock next-intl hooks
jest.mock('next-intl', () => ({
  useTranslations: (namespace: string) => {
    return (key: string) => {
      const messages = mockMessages.en as Record<string, any>
      const fullPath = namespace ? `${namespace}.${key}` : key
      return fullPath.split('.').reduce((acc: any, part) => acc && acc[part], messages) || key
    }
  },
  useLocale: () => 'en',
}))

// Mock next/navigation
jest.mock('next/navigation', () => ({
  useRouter: () => ({
    push: jest.fn(),
    replace: jest.fn(),
    prefetch: jest.fn(),
  }),
  usePathname: () => '/',
  useSearchParams: () => new URLSearchParams(),
}))

// Mock next/link
jest.mock('next/link', () => ({
  default: ({ children, href, ...props }: { children: React.ReactNode; href: string; [key: string]: any }) => {
    return React.createElement('a', { href, ...props }, children)
  }
}))

// Mock next/image
jest.mock('next/image', () => ({
  default: ({ src, alt, ...props }: { src: string; alt: string; [key: string]: any }) => {
    // eslint-disable-next-line @next/next/no-img-element
    return React.createElement('img', { src, alt, ...props })
  }
})) 