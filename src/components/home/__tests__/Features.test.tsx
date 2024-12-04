import React from 'react'
import { screen } from '@testing-library/react'
import Features from '../Features'
import { renderWithI18n } from '@/test-utils/i18n-mock'

describe('Features', () => {
  it('renders features content in English', () => {
    renderWithI18n(<Features />, { locale: 'en' })
    
    // Check section titles
    expect(screen.getByText('Features')).toBeInTheDocument()
    expect(screen.getByText('Our key features')).toBeInTheDocument()
    
    // Check feature titles
    expect(screen.getByText('Finance')).toBeInTheDocument()
    expect(screen.getByText('Inventory')).toBeInTheDocument()
    expect(screen.getByText('HR')).toBeInTheDocument()
    
    // Check feature descriptions
    expect(screen.getByText('Complete financial management')).toBeInTheDocument()
    expect(screen.getByText('Inventory management system')).toBeInTheDocument()
    expect(screen.getByText('Human resources management')).toBeInTheDocument()
  })

  it('renders features content in German', () => {
    renderWithI18n(<Features />, { locale: 'de' })
    
    // Check section titles
    expect(screen.getByText('Funktionen')).toBeInTheDocument()
    expect(screen.getByText('Unsere Hauptfunktionen')).toBeInTheDocument()
    
    // Check feature titles
    expect(screen.getByText('Finanzen')).toBeInTheDocument()
    expect(screen.getByText('Inventar')).toBeInTheDocument()
    expect(screen.getByText('Personal')).toBeInTheDocument()
    
    // Check feature descriptions
    expect(screen.getByText('Komplettes Finanzmanagement')).toBeInTheDocument()
    expect(screen.getByText('Inventarverwaltungssystem')).toBeInTheDocument()
    expect(screen.getByText('Personalverwaltung')).toBeInTheDocument()
  })

  it('has correct href attributes for links in English', () => {
    renderWithI18n(<Features />, { locale: 'en' })
    
    expect(screen.getByRole('link', { name: 'Finance' })).toHaveAttribute('href', '/en/products/sobersoft-erp/finance')
    expect(screen.getByRole('link', { name: 'Inventory' })).toHaveAttribute('href', '/en/products/sobersoft-erp/inventory')
    expect(screen.getByRole('link', { name: 'HR' })).toHaveAttribute('href', '/en/products/sobersoft-erp/hr')
  })

  it('has correct href attributes for links in German', () => {
    renderWithI18n(<Features />, { locale: 'de' })
    
    expect(screen.getByRole('link', { name: 'Finanzen' })).toHaveAttribute('href', '/de/products/sobersoft-erp/finance')
    expect(screen.getByRole('link', { name: 'Inventar' })).toHaveAttribute('href', '/de/products/sobersoft-erp/inventory')
    expect(screen.getByRole('link', { name: 'Personal' })).toHaveAttribute('href', '/de/products/sobersoft-erp/hr')
  })
}) 