import React from 'react'
import { screen, fireEvent, act } from '@testing-library/react'
import Navbar from '../Navbar'
import { localeNames, localeFlags } from '@/config/i18n'
import { renderWithI18n } from '@/test-utils/i18n-mock'

// Helper function to wait for animations
const waitForAnimation = () => new Promise(resolve => setTimeout(resolve, 0))

describe('Navbar', () => {
  it('renders navigation links in English', () => {
    renderWithI18n(<Navbar />, { locale: 'en' })
    
    expect(screen.getByText('Products')).toBeInTheDocument()
    expect(screen.getByText('About')).toBeInTheDocument()
    expect(screen.getByText('News')).toBeInTheDocument()
    expect(screen.getByText('Contact')).toBeInTheDocument()
  })

  it('renders navigation links in German', () => {
    renderWithI18n(<Navbar />, { locale: 'de' })
    
    expect(screen.getByText('Produkte')).toBeInTheDocument()
    expect(screen.getByText('Über uns')).toBeInTheDocument()
    expect(screen.getByText('Neuigkeiten')).toBeInTheDocument()
    expect(screen.getByText('Kontakt')).toBeInTheDocument()
  })

  it('toggles mobile menu', async () => {
    renderWithI18n(<Navbar />)
    
    // Menu should be hidden initially
    expect(screen.queryByRole('dialog')).not.toBeInTheDocument()
    
    // Open menu
    const menuButton = screen.getByRole('button', { name: /open main menu/i })
    await act(async () => {
      fireEvent.click(menuButton)
      await waitForAnimation()
    })
    expect(screen.getByRole('dialog')).toBeInTheDocument()
    
    // Close menu
    const closeButton = screen.getByRole('button', { name: /close menu/i })
    await act(async () => {
      fireEvent.click(closeButton)
      await waitForAnimation()
    })
    expect(screen.queryByRole('dialog')).not.toBeInTheDocument()
  })

  it('renders language switcher with flags and names', () => {
    renderWithI18n(<Navbar />)
    
    expect(screen.getByText(localeFlags.en)).toBeInTheDocument()
    expect(screen.getByText(localeNames.en)).toBeInTheDocument()
    expect(screen.getByText(localeFlags.de)).toBeInTheDocument()
    expect(screen.getByText(localeNames.de)).toBeInTheDocument()
  })

  it('has correct href attributes for navigation links in English', () => {
    renderWithI18n(<Navbar />, { locale: 'en' })
    
    const links = screen.getAllByRole('link')
    expect(links.find(link => link.textContent === 'Products')).toHaveAttribute('href', '/en/products/sobersoft-erp')
    expect(links.find(link => link.textContent === 'About')).toHaveAttribute('href', '/en/about')
    expect(links.find(link => link.textContent === 'News')).toHaveAttribute('href', '/en/news')
    expect(links.find(link => link.textContent === 'Contact')).toHaveAttribute('href', '/en/contact')
  })

  it('has correct href attributes for navigation links in German', () => {
    renderWithI18n(<Navbar />, { locale: 'de' })
    
    const links = screen.getAllByRole('link')
    expect(links.find(link => link.textContent === 'Produkte')).toHaveAttribute('href', '/de/products/sobersoft-erp')
    expect(links.find(link => link.textContent === 'Über uns')).toHaveAttribute('href', '/de/about')
    expect(links.find(link => link.textContent === 'Neuigkeiten')).toHaveAttribute('href', '/de/news')
    expect(links.find(link => link.textContent === 'Kontakt')).toHaveAttribute('href', '/de/contact')
  })
}) 