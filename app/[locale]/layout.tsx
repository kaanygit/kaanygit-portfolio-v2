import type { Metadata } from 'next';
import { Archivo, DM_Sans, JetBrains_Mono } from 'next/font/google';
import { Analytics } from '@vercel/analytics/next';
import { NextIntlClientProvider } from 'next-intl';
import { getMessages, getTranslations, setRequestLocale } from 'next-intl/server';
import { notFound } from 'next/navigation';
import ThemeProvider, { themeInitScript } from '../components/ThemeProvider';
import { routing } from '../../i18n/routing';
import '../globals.css';

const archivo = Archivo({
  variable: '--font-display',
  subsets: ['latin', 'latin-ext'],
  weight: ['500', '600', '700', '800', '900'],
  display: 'swap',
});

const dmSans = DM_Sans({
  variable: '--font-body',
  subsets: ['latin', 'latin-ext'],
  weight: ['400', '500', '600'],
  display: 'swap',
});

const jetbrainsMono = JetBrains_Mono({
  variable: '--font-mono',
  subsets: ['latin', 'latin-ext'],
  weight: ['400', '500'],
  display: 'swap',
});

const SITE_URL = 'https://kaanygit.vercel.app';

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'meta' });

  const languages = Object.fromEntries(
    routing.locales.map((l) => [
      l,
      l === routing.defaultLocale ? '/' : `/${l}`,
    ])
  );

  const ogLocaleMap: Record<string, string> = {
    tr: 'tr_TR',
    en: 'en_US',
    de: 'de_DE',
    fr: 'fr_FR',
    es: 'es_ES',
  };

  return {
    metadataBase: new URL(SITE_URL),
    title: t('title'),
    description: t('description'),
    keywords: [
      'Flutter',
      'Next.js',
      'Node.js',
      'Firebase',
      'Full-Stack Developer',
      'Mobile Developer',
      'AI Integration',
      'Legaltech',
      'React',
      'TypeScript',
      'Portfolio',
    ],
    authors: [{ name: 'Yasin Kaan Yiğit' }],
    creator: 'Yasin Kaan Yiğit',
    alternates: {
      canonical: locale === routing.defaultLocale ? '/' : `/${locale}`,
      languages,
    },
    openGraph: {
      type: 'website',
      locale: ogLocaleMap[locale] ?? 'en_US',
      url: locale === routing.defaultLocale ? SITE_URL : `${SITE_URL}/${locale}`,
      title: t('title'),
      description: t('description'),
      siteName: t('ogSiteName'),
    },
    twitter: {
      card: 'summary_large_image',
      title: t('title'),
      description: t('description'),
    },
    robots: { index: true, follow: true },
  };
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!routing.locales.includes(locale as (typeof routing.locales)[number])) {
    notFound();
  }

  setRequestLocale(locale);
  const messages = await getMessages();

  return (
    <html lang={locale} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
      </head>
      <body
        className={`${archivo.variable} ${dmSans.variable} ${jetbrainsMono.variable} bg-background font-body text-foreground antialiased`}
      >
        <NextIntlClientProvider locale={locale} messages={messages}>
          <ThemeProvider>
            {children}
          </ThemeProvider>
        </NextIntlClientProvider>
        <Analytics />
      </body>
    </html>
  );
}
