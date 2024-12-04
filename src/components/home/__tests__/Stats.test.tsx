import React from 'react'
import { screen } from '@testing-library/react'
import Stats from '../Stats'
import { renderWithI18n } from '@/test-utils/i18n-mock'

describe('Stats', () => {
  it('renders stats content in English', () => {
    renderWithI18n(<Stats />, { locale: 'en' })
    
    // Check section titles
    expect(screen.getByText('Our Impact')).toBeInTheDocument()
    expect(screen.getByText('Key metrics that showcase our success')).toBeInTheDocument()
    
    // Check metric values
    expect(screen.getByText('10,000+')).toBeInTheDocument()
    expect(screen.getByText('25+')).toBeInTheDocument()
    expect(screen.getByText('1B+')).toBeInTheDocument()
    expect(screen.getByText('99.9%')).toBeInTheDocument()
    
    // Check metric labels
    expect(screen.getByText('10,000+ Users')).toBeInTheDocument()
    expect(screen.getByText('25+ Countries')).toBeInTheDocument()
    expect(screen.getByText('1B+ Data Points')).toBeInTheDocument()
    expect(screen.getByText('99.9% Uptime')).toBeInTheDocument()
  })

  it('renders stats content in German', () => {
    renderWithI18n(<Stats />, { locale: 'de' })
    
    // Check section titles
    expect(screen.getByText('Unsere Wirkung')).toBeInTheDocument()
    expect(screen.getByText('Kennzahlen, die unseren Erfolg zeigen')).toBeInTheDocument()
    
    // Check metric values
    expect(screen.getByText('10,000+')).toBeInTheDocument()
    expect(screen.getByText('25+')).toBeInTheDocument()
    expect(screen.getByText('1B+')).toBeInTheDocument()
    expect(screen.getByText('99.9%')).toBeInTheDocument()
    
    // Check metric labels
    expect(screen.getByText('10.000+ Nutzer')).toBeInTheDocument()
    expect(screen.getByText('25+ Länder')).toBeInTheDocument()
    expect(screen.getByText('1B+ Datenpunkte')).toBeInTheDocument()
    expect(screen.getByText('99,9% Verfügbarkeit')).toBeInTheDocument()
  })
}) 