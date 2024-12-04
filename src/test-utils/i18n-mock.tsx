import React from 'react'
import { render } from '@testing-library/react'
import { NextIntlClientProvider } from 'next-intl'
import { AbstractIntlMessages } from 'next-intl'

// Define types for our messages structure
interface Author {
  name: string
  role: string
  company: string
}

interface TestimonialItem {
  body: string
  author: Author
}

interface FeatureItem {
  title: string
  description: string
  href: string
  icon: string
}

interface Messages extends AbstractIntlMessages {
  navigation: {
    home: string
    about: string
    products: string
    news: string
    careers: string
    contact: string
  }
  home: {
    features: {
      title: string
      description: string
      items: FeatureItem[]
    }
    testimonials: {
      title: string
      description: string
      items: TestimonialItem[]
    }
    stats: {
      title: string
      description: string
      metrics: {
        users: string
        countries: string
        data: string
        uptime: string
      }
    }
    cta: {
      title: string
      description: string
      button: string
    }
  }
  footer: {
    social: {
      twitter: string
      facebook: string
      linkedin: string
      github: string
    }
    solutions: {
      finance: string
      inventory: string
      hr: string
      analytics: string
    }
    company: {
      about: string
      news: string
      careers: string
    }
    legal: {
      privacy: string
      terms: string
    }
  }
  [key: string]: any
}

export const mockMessages: Record<string, Messages> = {
  en: {
    navigation: {
      home: 'Home',
      about: 'About',
      products: 'Products',
      news: 'News',
      careers: 'Careers',
      contact: 'Contact',
    },
    home: {
      features: {
        title: 'Features',
        description: 'Our key features',
        items: [
          {
            title: 'Finance',
            description: 'Complete financial management',
            href: '/products/sobersoft-erp/finance',
            icon: 'finance',
          },
          {
            title: 'Inventory',
            description: 'Inventory management system',
            href: '/products/sobersoft-erp/inventory',
            icon: 'inventory',
          },
          {
            title: 'HR',
            description: 'Human resources management',
            href: '/products/sobersoft-erp/hr',
            icon: 'hr',
          },
        ],
      },
      testimonials: {
        title: 'Testimonials',
        description: 'What our customers say',
        items: [
          {
            body: 'Great product!',
            author: {
              name: 'John Doe',
              role: 'CEO',
              company: 'Company A',
            },
          },
          {
            body: 'Excellent service!',
            author: {
              name: 'Jane Smith',
              role: 'CTO',
              company: 'Company B',
            },
          },
          {
            body: 'Amazing support!',
            author: {
              name: 'Mike Johnson',
              role: 'COO',
              company: 'Company C',
            },
          },
        ],
      },
      stats: {
        title: 'Our Impact',
        description: 'Key metrics that showcase our success',
        metrics: {
          users: '10,000+ Users',
          countries: '25+ Countries',
          data: '1B+ Data Points',
          uptime: '99.9% Uptime',
        },
      },
      cta: {
        title: 'Ready to get started?',
        description: 'Join thousands of satisfied customers',
        button: 'Contact Us',
      },
    },
    footer: {
      social: {
        twitter: 'Twitter',
        facebook: 'Facebook',
        linkedin: 'LinkedIn',
        github: 'GitHub',
      },
      solutions: {
        finance: 'Finance',
        inventory: 'Inventory',
        hr: 'HR',
        analytics: 'Analytics',
      },
      company: {
        about: 'About',
        news: 'News',
        careers: 'Careers',
      },
      legal: {
        privacy: 'Privacy Policy',
        terms: 'Terms of Service',
      },
    },
  },
  de: {
    navigation: {
      home: 'Startseite',
      about: 'Über uns',
      products: 'Produkte',
      news: 'Neuigkeiten',
      careers: 'Karriere',
      contact: 'Kontakt',
    },
    home: {
      features: {
        title: 'Funktionen',
        description: 'Unsere Hauptfunktionen',
        items: [
          {
            title: 'Finanzen',
            description: 'Komplettes Finanzmanagement',
            href: '/products/sobersoft-erp/finance',
            icon: 'finance',
          },
          {
            title: 'Inventar',
            description: 'Inventarverwaltungssystem',
            href: '/products/sobersoft-erp/inventory',
            icon: 'inventory',
          },
          {
            title: 'Personal',
            description: 'Personalverwaltung',
            href: '/products/sobersoft-erp/hr',
            icon: 'hr',
          },
        ],
      },
      testimonials: {
        title: 'Referenzen',
        description: 'Was unsere Kunden sagen',
        items: [
          {
            body: 'Großartiges Produkt!',
            author: {
              name: 'John Doe',
              role: 'CEO',
              company: 'Firma A',
            },
          },
          {
            body: 'Exzellenter Service!',
            author: {
              name: 'Jane Smith',
              role: 'CTO',
              company: 'Firma B',
            },
          },
          {
            body: 'Fantastischer Support!',
            author: {
              name: 'Mike Johnson',
              role: 'COO',
              company: 'Firma C',
            },
          },
        ],
      },
      stats: {
        title: 'Unsere Wirkung',
        description: 'Kennzahlen, die unseren Erfolg zeigen',
        metrics: {
          users: '10.000+ Nutzer',
          countries: '25+ Länder',
          data: '1B+ Datenpunkte',
          uptime: '99,9% Verfügbarkeit',
        },
      },
      cta: {
        title: 'Bereit loszulegen?',
        description: 'Schließen Sie sich tausenden zufriedener Kunden an',
        button: 'Kontaktieren Sie uns',
      },
    },
    footer: {
      social: {
        twitter: 'Twitter',
        facebook: 'Facebook',
        linkedin: 'LinkedIn',
        github: 'GitHub',
      },
      solutions: {
        finance: 'Finanzen',
        inventory: 'Inventar',
        hr: 'Personal',
        analytics: 'Analytik',
      },
      company: {
        about: 'Über uns',
        news: 'Neuigkeiten',
        careers: 'Karriere',
      },
      legal: {
        privacy: 'Datenschutzerklärung',
        terms: 'Nutzungsbedingungen',
      },
    },
  },
}

interface RenderOptions {
  locale?: string
  messages?: Messages
}

export function renderWithI18n(
  ui: React.ReactElement,
  { locale = 'en', messages = mockMessages[locale as keyof typeof mockMessages] }: RenderOptions = {}
) {
  const Wrapper = ({ children }: { children: React.ReactNode }) => (
    <NextIntlClientProvider locale={locale} messages={messages}>
      {children}
    </NextIntlClientProvider>
  )

  return render(ui, { wrapper: Wrapper })
} 