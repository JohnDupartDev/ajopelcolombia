/* eslint-disable @typescript-eslint/no-explicit-any */
import { getTranslations, getLocale } from 'next-intl/server';
import { Metadata } from 'next';
import { NextIntlClientProvider } from 'next-intl';
import NosotrosIndex from '@/components/pages/NosotrosIndex';

export const runtime = 'edge';

export default async function NosotrosPage() {
  const locale = await getLocale();
  
  // Importación dinámica de los mensajes para la sección Nosotros de Ajopel
  const nosotrosMessages = (await import(`@/../messages/${locale}/nosotros.json`)).default;  

  return (
    <NextIntlClientProvider locale={locale} messages={nosotrosMessages}>
        <NosotrosIndex />
    </NextIntlClientProvider>
  );
}

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getLocale();

  let t;
  try {
    t = await getTranslations({ locale, namespace: 'Metadata' });
  } catch (error) {
    console.error('Error loading SEO translations:', error);
    // Metadatos de respaldo específicos para la historia de Ajopel Colombia
    return {
      title: 'Sobre Nosotros | Ajopel Colombia - Nuestra Historia',
      description: 'Conoce a Ajopel Colombia, expertos en procesamiento de ajo con tecnología de punta. Comprometidos con la calidad y la eficiencia en su cocina.',
    };
  }

  // Se obtienen los valores desde los archivos JSON (namespace Metadata)
  const title = t('title') || 'Sobre Nosotros | Ajopel Colombia';
  const description = t('description');
  const keywords = t('keywords')?.split(",") || [
    "historia ajopel",
    "empresa de ajo colombia",
    "procesamiento de ajo",
    "tecnología alimentaria",
    "proveedor confiable de ajo"
  ];

  const metadataBase = new URL('https://ajopelcolombia.com');

  // Canonical normalizado siguiendo tu esquema de routing (es: /nosotros, en: /about)
  const canonicalUrl = locale === 'es'
    ? `${metadataBase.origin}/nosotros`
    : `${metadataBase.origin}/en/about`;

  return {
    title,
    description,
    keywords,
    metadataBase,
    openGraph: {
      title,
      description,
      url: canonicalUrl, 
      siteName: 'Ajopel Colombia', // Corregido de Zipaquira Digital
      images: [
        {
          url: `${metadataBase}/images/og-image.jpg`,
          width: 1200,
          height: 630,
          alt: 'Equipo y Misión de Ajopel Colombia',
        },
      ],
      locale: locale === 'es' ? 'es_CO' : 'en_US',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [`${metadataBase}/images/og-image.jpg`],
    },
    alternates: {
      canonical: canonicalUrl,
      languages: {
        en: new URL("/en/about", metadataBase).toString(),
        es: new URL("/nosotros", metadataBase).toString()
      }
    }
  };
}