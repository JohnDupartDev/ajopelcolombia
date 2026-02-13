/* eslint-disable @typescript-eslint/no-explicit-any */
import { getTranslations, getLocale } from 'next-intl/server';
import { Metadata } from 'next';
import { NextIntlClientProvider } from 'next-intl';
import ProductosIndex from '@/components/pages/ProductosIndex';

export const runtime = 'edge';

export default async function ProductosPage() {
  const locale = await getLocale();
  
  // Usamos un import dinámico basado en la raíz del proyecto
  // Asegúrate que la ruta sea exactamente donde guardas tus archivos JSON
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
    return {
      title: 'Productos - Ajopel Colombia',
      description: 'Especialistas en venta y distribución de ajo pelado en Colombia y el mundo',
    };
  }

  const title = t('title') || 'AjopelColombia';
  const description = t('description');
  const keywords = t('keywords')?.split(",") || [];

  const metadataBase = new URL('https://ajopelcolombia.com');

  // Canonical normalizado para evitar doble barra
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
      siteName: 'Zipaquira Digital',
      images: [
        {
          url: `${metadataBase}/images/og-image.jpg`,
          width: 1200,
          height: 630,
          alt: 'OG Image',
        },
      ],
      locale: locale === 'es' ? 'es_ES' : 'en_US',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [`${metadataBase}/images/og-image.jpg`],
    },
    alternates: {
      canonical: canonicalUrl, // Canonical correctamente normalizado
      languages: {
        en: new URL("/en", metadataBase).toString(),
        es: metadataBase.toString()
      }
    }
  };
}
