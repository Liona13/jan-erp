import React from 'react'
import { screen } from '@testing-library/react'
import Footer from '../Footer'
import { renderWithI18n } from '@/test-utils/i18n-mock'

describe('Footer', () => {
  it('renders footer content in English', () => {
    renderWithI18n(<Footer />, { locale: 'en' })
    
    // Check company description
    expect(screen.getByText('Enterprise solutions for modern business')).toBeInTheDocument()
    
    // Check section headings
    expect(screen.getByText('Solutions')).toBeInTheDocument()
    expect(screen.getByText('Company')).toBeInTheDocument()
    
    // Check solution links
    expect(screen.getByText('Finance')).toBeInTheDocument()
    expect(screen.getByText('Inventory')).toBeInTheDocument()
    expect(screen.getByText('HR')).toBeInTheDocument()
    expect(screen.getByText('Analytics')).toBeInTheDocument()
    
    // Check company links
    expect(screen.getByText('About')).toBeInTheDocument()
    expect(screen.getByText('News')).toBeInTheDocument()
    expect(screen.getByText('Careers')).toBeInTheDocument()
    expect(screen.getByText('Contact')).toBeInTheDocument()
    
    // Check social links
    expect(screen.getByRole('link', { name: 'LinkedIn' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Twitter' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'GitHub' })).toBeInTheDocument()
    
    // Check copyright
    expect(screen.getByText(/All rights reserved/)).toBeInTheDocument()
  })

  it('renders footer content in German', () => {
    renderWithI18n(<Footer />, { locale: 'de' })
    
    // Check company description
    expect(screen.getByText('Unternehmenslösungen für moderne Geschäfte')).toBeInTheDocument()
    
    // Check section headings
    expect(screen.getByText('Lösungen')).toBeInTheDocument()
    expect(screen.getByText('Unternehmen')).toBeInTheDocument()
    
    // Check solution links
    expect(screen.getByText('Finanzen')).toBeInTheDocument()
    expect(screen.getByText('Inventar')).toBeInTheDocument()
    expect(screen.getByText('Personal')).toBeInTheDocument()
    expect(screen.getByText('Analytik')).toBeInTheDocument()
    
    // Check company links
    expect(screen.getByText('Über uns')).toBeInTheDocument()
    expect(screen.getByText('Neuigkeiten')).toBeInTheDocument()
    expect(screen.getByText('Karriere')).toBeInTheDocument()
    expect(screen.getByText('Kontakt')).toBeInTheDocument()
    
    // Check social links (these stay in English)
    expect(screen.getByRole('link', { name: 'LinkedIn' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Twitter' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'GitHub' })).toBeInTheDocument()
    
    // Check copyright
    expect(screen.getByText(/Alle Rechte vorbehalten/)).toBeInTheDocument()
  })

  it('has correct href attributes for links in English', () => {
    renderWithI18n(<Footer />, { locale: 'en' })
    
    // Check solution links
    expect(screen.getByRole('link', { name: 'Finance' })).toHaveAttribute('href', '/en/products/sobersoft-erp/finance')
    expect(screen.getByRole('link', { name: 'Inventory' })).toHaveAttribute('href', '/en/products/sobersoft-erp/inventory')
    expect(screen.getByRole('link', { name: 'HR' })).toHaveAttribute('href', '/en/products/sobersoft-erp/hr')
    expect(screen.getByRole('link', { name: 'Analytics' })).toHaveAttribute('href', '/en/products/sobersoft-erp/analytics')
    
    // Check company links
    expect(screen.getByRole('link', { name: 'About' })).toHaveAttribute('href', '/en/about')
    expect(screen.getByRole('link', { name: 'News' })).toHaveAttribute('href', '/en/news')
    expect(screen.getByRole('link', { name: 'Careers' })).toHaveAttribute('href', '/en/careers')
    expect(screen.getByRole('link', { name: 'Contact' })).toHaveAttribute('href', '/en/contact')
    
    // Check social links
    expect(screen.getByRole('link', { name: 'LinkedIn' })).toHaveAttribute('href', process.env.NEXT_PUBLIC_LINKEDIN_URL)
    expect(screen.getByRole('link', { name: 'Twitter' })).toHaveAttribute('href', process.env.NEXT_PUBLIC_TWITTER_URL)
    expect(screen.getByRole('link', { name: 'GitHub' })).toHaveAttribute('href', process.env.NEXT_PUBLIC_GITHUB_URL)
  })

  it('has correct href attributes for links in German', () => {
    renderWithI18n(<Footer />, { locale: 'de' })
    
    // Check solution links
    expect(screen.getByRole('link', { name: 'Finanzen' })).toHaveAttribute('href', '/de/products/sobersoft-erp/finance')
    expect(screen.getByRole('link', { name: 'Inventar' })).toHaveAttribute('href', '/de/products/sobersoft-erp/inventory')
    expect(screen.getByRole('link', { name: 'Personal' })).toHaveAttribute('href', '/de/products/sobersoft-erp/hr')
    expect(screen.getByRole('link', { name: 'Analytik' })).toHaveAttribute('href', '/de/products/sobersoft-erp/analytics')
    
    // Check company links
    expect(screen.getByRole('link', { name: 'Über uns' })).toHaveAttribute('href', '/de/about')
    expect(screen.getByRole('link', { name: 'Neuigkeiten' })).toHaveAttribute('href', '/de/news')
    expect(screen.getByRole('link', { name: 'Karriere' })).toHaveAttribute('href', '/de/careers')
    expect(screen.getByRole('link', { name: 'Kontakt' })).toHaveAttribute('href', '/de/contact')
    
    // Check social links
    expect(screen.getByRole('link', { name: 'LinkedIn' })).toHaveAttribute('href', process.env.NEXT_PUBLIC_LINKEDIN_URL)
    expect(screen.getByRole('link', { name: 'Twitter' })).toHaveAttribute('href', process.env.NEXT_PUBLIC_TWITTER_URL)
    expect(screen.getByRole('link', { name: 'GitHub' })).toHaveAttribute('href', process.env.NEXT_PUBLIC_GITHUB_URL)
  })
}) 