/* eslint-disable @typescript-eslint/no-explicit-any */
import { getTranslations, getLocale } from 'next-intl/server';
import { Metadata } from 'next';
import { NextIntlClientProvider } from 'next-intl';
import ProductosIndex from '@/components/pages/ProductosIndex';

export const runtime = 'edge';

export default async function ProductosPage() {
  const locale = await getLocale();
  
  // Importación dinámica de los mensajes para la sección de productos de Ajopel
  const productosMessages = (await import(`@/../messages/${locale}/productos.json`)).default;  

  return (
    <NextIntlClientProvider locale={locale} messages={productosMessages}>
        <ProductosIndex />
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
    // Metadatos de respaldo específicos para el catálogo de productos de Ajopel
    return {
      title: 'Productos | Ajopel Colombia - Ajo Pelado Premium',
      description: 'Conoce nuestro catálogo de ajo pelado entero y grado culinario. Soluciones frescas y listas para la industria gastronómica.',
    };
  }

  // Se obtienen los valores desde los archivos JSON (namespace Metadata)
  const title = t('title') || 'Productos | Ajopel Colombia';
  const description = t('description');
  const keywords = t('keywords')?.split(",") || [
    "ajo pelado entero",
    "ajo grado culinario",
    "proveedor ajo colombia",
    "ajo pelado al por mayor",
    "ajo para restaurantes"
  ];

  const metadataBase = new URL('https://ajopelcolombia.com');

  // Canonical normalizado para la página de productos
  const canonicalUrl = locale === 'es'
    ? `${metadataBase.origin}/productos`
    : `${metadataBase.origin}/en/products`;

  return {
    title,
    description,
    keywords,
    metadataBase,
    openGraph: {
      title,
      description,
      url: canonicalUrl, 
      siteName: 'Ajopel Colombia', // Corregido de Zipaquira Digital a Ajopel Colombia
      images: [
        {
          url: `${metadataBase}/images/og-image.jpg`,
          width: 1200,
          height: 630,
          alt: 'Catálogo de Productos Ajopel Colombia',
        },
      ],
      locale: locale === 'es' ? 'es_CO' : 'en_US', // Ajustado a es_CO
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
        en: new URL("/en/products", metadataBase).toString(),
        es: new URL("/productos", metadataBase).toString()
      }
    }
  };
}