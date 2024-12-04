import {notFound} from 'next/navigation';
import {getRequestConfig} from 'next-intl/server';
import {locales, defaultLocale} from '@/config/i18n';

export default getRequestConfig(async ({locale}) => {
  // Validate that the incoming `locale` parameter is valid
  if (!locales.includes(locale as any)) notFound();

  try {
    // Load messages for the requested locale
    const messages = (await import(`@/messages/${locale}.json`)).default;
    return {
      messages,
      timeZone: 'Europe/Berlin',
      now: new Date(),
    };
  } catch (error) {
    notFound();
  }
}); 