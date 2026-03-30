import { getTranslations, getLocale } from 'next-intl/server';
import { Metadata } from 'next';
import { NextIntlClientProvider } from 'next-intl';
import HomeIndex from '@/components/pages/HomeIndex';


export default async function HomePage() {
  const locale = await getLocale();
  
  // Importación dinámica de los mensajes para Ajopel
  const homeMessages = (await import(`../../../messages/${locale}/home.json`)).default;  

  const pagsMessages = {
    ...homeMessages,
  };

  return (
    <NextIntlClientProvider locale={locale} messages={pagsMessages}>
        <HomeIndex />
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
    // Metadatos de respaldo específicos para Ajopel Colombia
    return {
      title: 'Ajopel Colombia | Ajo Pelado de Alta Calidad',
      description: 'Líderes en la producción y distribución de ajo pelado fresco para restaurantes e industrias. Calidad garantizada, sin químicos y listo para su cocina.',
    };
  }

  // Se obtienen los valores desde los archivos JSON (messages/es.json o en.json)
  const title = t('title') || 'Ajopel Colombia';
  const description = t('description');
  const keywords = t('keywords')?.split(",") || [
    "ajo pelado", 
    "proveedor de ajo", 
    "ajo al por mayor", 
    "ajo para restaurantes", 
    "distribución de ajo Colombia"
  ];

  const metadataBase = new URL('https://ajopelcolombia.com');

  // Canonical normalizado para Ajopel Colombia
  const canonicalUrl = locale === 'es'
    ? metadataBase.toString()
    : new URL(`/${locale}`, metadataBase).toString();

  return {
    title,
    description,
    keywords,
    metadataBase,
    openGraph: {
      title,
      description,
      url: canonicalUrl, 
      siteName: 'Ajopel Colombia',
      images: [
        {
          url: `${metadataBase}/images/og-image.jpg`, // Asegúrate de que esta imagen exista en /public/images/
          width: 1200,
          height: 630,
          alt: 'Ajopel Colombia - Ajo Pelado Premium',
        },
      ],
      locale: locale === 'es' ? 'es_CO' : 'en_US', // Ajustado a es_CO por ser empresa colombiana
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
        en: new URL("/en", metadataBase).toString(),
        es: metadataBase.toString()
      }
    }
  };
}