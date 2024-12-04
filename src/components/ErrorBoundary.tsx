'use client'

import React from 'react'
import Link from 'next/link'
import { useLocale } from 'next-intl'

interface Props {
  children: React.ReactNode
}

interface State {
  hasError: boolean
  error: Error | null
}

export class ErrorBoundary extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props)
    this.state = { hasError: false, error: null }
  }

  static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error }
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    // Log error to an error reporting service
    console.error('Error caught by boundary:', error, errorInfo)
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen bg-gray-50 px-4 py-16 sm:px-6 sm:py-24 md:grid md:place-items-center lg:px-8">
          <div className="mx-auto max-w-max">
            <main className="sm:flex">
              <p className="text-4xl font-bold tracking-tight text-blue-600 sm:text-5xl">500</p>
              <div className="sm:ml-6">
                <div className="sm:border-l sm:border-gray-200 sm:pl-6">
                  <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">Something went wrong</h1>
                  <p className="mt-1 text-base text-gray-500">Please try refreshing the page or contact support if the problem persists.</p>
                  {process.env.NODE_ENV === 'development' && (
                    <pre className="mt-4 rounded bg-gray-100 p-4 text-sm text-red-600">
                      {this.state.error?.message}
                      {'\n'}
                      {this.state.error?.stack}
                    </pre>
                  )}
                </div>
                <div className="mt-10 flex space-x-3 sm:border-l sm:border-transparent sm:pl-6">
                  <button
                    onClick={() => window.location.reload()}
                    className="inline-flex items-center rounded-md border border-transparent bg-blue-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                  >
                    Refresh page
                  </button>
                  <Link
                    href={`/${window.location.pathname.split('/')[1] || 'en'}`}
                    className="inline-flex items-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-700 hover:bg-blue-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                  >
                    Go back home
                  </Link>
                </div>
              </div>
            </main>
          </div>
        </div>
      )
    }

    return this.props.children
  }
} 