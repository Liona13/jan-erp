import React from 'react'
import { screen } from '@testing-library/react'
import CTA from '../CTA'
import { renderWithI18n } from '@/test-utils/i18n-mock'

describe('CTA', () => {
  it('renders CTA content in English', () => {
    renderWithI18n(<CTA />, { locale: 'en' })
    
    expect(screen.getByText('Ready to get started?')).toBeInTheDocument()
    expect(screen.getByText('Join thousands of satisfied customers')).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Contact Us' })).toBeInTheDocument()
  })

  it('renders CTA content in German', () => {
    renderWithI18n(<CTA />, { locale: 'de' })
    
    expect(screen.getByText('Bereit loszulegen?')).toBeInTheDocument()
    expect(screen.getByText('Schließen Sie sich tausenden zufriedener Kunden an')).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Kontaktieren Sie uns' })).toBeInTheDocument()
  })

  it('has correct href attributes for links in English', () => {
    renderWithI18n(<CTA />, { locale: 'en' })
    
    expect(screen.getByRole('link', { name: 'Contact Us' })).toHaveAttribute('href', '/en/contact')
  })

  it('has correct href attributes for links in German', () => {
    renderWithI18n(<CTA />, { locale: 'de' })
    
    expect(screen.getByRole('link', { name: 'Kontaktieren Sie uns' })).toHaveAttribute('href', '/de/contact')
  })
}) 