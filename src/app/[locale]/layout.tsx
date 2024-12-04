import { ReactNode } from 'react';
import { Inter } from 'next/font/google';
import { notFound } from 'next/navigation';
import { NextIntlClientProvider } from 'next-intl';
import { locales } from '@/config/i18n';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { ErrorBoundary } from '@/components/ErrorBoundary';
import '/src/app/globals.css';

const inter = Inter({ subsets: ['latin'] });

// Metadata will be generated server-side
export async function generateMetadata({ params: { locale } }: { params: { locale: string } }) {
  const messages = await import(`@/messages/${locale}.json`);
  
  return {
    title: messages.default.metadata?.title || 'Jan ERP',
    description: messages.default.metadata?.description || 'Enterprise Resource Planning System',
    alternates: {
      canonical: '/',
      languages: {
        'en-US': '/en',
        'de-DE': '/de',
      },
    },
  };
}

export default async function LocaleLayout({
  children,
  params: { locale }
}: {
  children: ReactNode;
  params: { locale: string };
}) {
  // Validate that the incoming locale parameter is valid
  if (!locales.includes(locale as any)) {
    notFound();
  }

  let messages;
  try {
    messages = (await import(`@/messages/${locale}.json`)).default;
  } catch (error) {
    notFound();
  }

  return (
    <html lang={locale} className="scroll-smooth">
      <body className={`${inter.className} bg-white text-gray-900 dark:bg-gray-900 dark:text-white`}>
        <NextIntlClientProvider locale={locale} messages={messages}>
          <div className="flex min-h-screen flex-col">
            <Navbar />
            <main className="flex-grow pt-20">
              <ErrorBoundary>
                {children}
              </ErrorBoundary>
            </main>
            <Footer />
          </div>
        </NextIntlClientProvider>
      </body>
    </html>
  );
} 