import React from 'react'
import { screen } from '@testing-library/react'
import Testimonials from '../Testimonials'
import { renderWithI18n } from '@/test-utils/i18n-mock'

describe('Testimonials', () => {
  it('renders testimonials content in English', () => {
    renderWithI18n(<Testimonials />, { locale: 'en' })
    
    // Check section titles
    expect(screen.getByText('Testimonials')).toBeInTheDocument()
    expect(screen.getByText('What our customers say')).toBeInTheDocument()
    
    // Check testimonial quotes
    expect(screen.getByText('"Great product!"')).toBeInTheDocument()
    expect(screen.getByText('"Excellent service!"')).toBeInTheDocument()
    expect(screen.getByText('"Amazing support!"')).toBeInTheDocument()
    
    // Check author names
    expect(screen.getByText('John Doe')).toBeInTheDocument()
    expect(screen.getByText('Jane Smith')).toBeInTheDocument()
    expect(screen.getByText('Mike Johnson')).toBeInTheDocument()
    
    // Check roles and companies
    expect(screen.getByText('CEO, Company A')).toBeInTheDocument()
    expect(screen.getByText('CTO, Company B')).toBeInTheDocument()
    expect(screen.getByText('COO, Company C')).toBeInTheDocument()
  })

  it('renders testimonials content in German', () => {
    renderWithI18n(<Testimonials />, { locale: 'de' })
    
    // Check section titles
    expect(screen.getByText('Referenzen')).toBeInTheDocument()
    expect(screen.getByText('Was unsere Kunden sagen')).toBeInTheDocument()
    
    // Check testimonial quotes
    expect(screen.getByText('"Großartiges Produkt!"')).toBeInTheDocument()
    expect(screen.getByText('"Exzellenter Service!"')).toBeInTheDocument()
    expect(screen.getByText('"Fantastischer Support!"')).toBeInTheDocument()
    
    // Check author names (these stay in English as they are proper nouns)
    expect(screen.getByText('John Doe')).toBeInTheDocument()
    expect(screen.getByText('Jane Smith')).toBeInTheDocument()
    expect(screen.getByText('Mike Johnson')).toBeInTheDocument()
    
    // Check roles and companies
    expect(screen.getByText('CEO, Firma A')).toBeInTheDocument()
    expect(screen.getByText('CTO, Firma B')).toBeInTheDocument()
    expect(screen.getByText('COO, Firma C')).toBeInTheDocument()
  })

  it('renders testimonial images', () => {
    renderWithI18n(<Testimonials />)
    
    // Check for all author images
    const images = screen.getAllByRole('img')
    expect(images).toHaveLength(3)
    
    // Check image alt texts
    expect(images[0]).toHaveAttribute('alt', 'John Doe')
    expect(images[1]).toHaveAttribute('alt', 'Jane Smith')
    expect(images[2]).toHaveAttribute('alt', 'Mike Johnson')
    
    // Check image sources
    expect(images[0]).toHaveAttribute('src', expect.stringContaining('/testimonials/person-1.jpg'))
    expect(images[1]).toHaveAttribute('src', expect.stringContaining('/testimonials/person-2.jpg'))
    expect(images[2]).toHaveAttribute('src', expect.stringContaining('/testimonials/person-3.jpg'))
  })
}) 