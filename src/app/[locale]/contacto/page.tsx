/* eslint-disable @typescript-eslint/no-explicit-any */
import { getTranslations, getLocale } from 'next-intl/server';
import { Metadata } from 'next';
import { NextIntlClientProvider } from 'next-intl';
import ContactoIndex from '@/components/pages/ContactoIndex';

export const runtime = 'edge';

export default async function ContactoPage() {
  const locale = await getLocale();
  
  // Importación dinámica de los mensajes para la sección de Contacto de Ajopel
  const contactoMessages = (await import(`@/../messages/${locale}/contacto.json`)).default;  

  return (
    <NextIntlClientProvider locale={locale} messages={contactoMessages}>
        <ContactoIndex />
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
    // Metadatos de respaldo específicos para el contacto de Ajopel Colombia
    return {
      title: 'Contacto | Ajopel Colombia - Solicita tu Cotización',
      description: 'Ponte en contacto con Ajopel Colombia. Distribuimos ajo pelado de alta calidad en Bogotá, Colombia y el exterior. ¡Escríbenos hoy!',
    };
  }

  // Se obtienen los valores desde los archivos JSON (namespace Metadata)
  const title = t('title') || 'Contacto | Ajopel Colombia';
  const description = t('description');
  const keywords = t('keywords')?.split(",") || [
    "contacto ajopel",
    "comprar ajo pelado",
    "cotización ajo al por mayor",
    "distribuidora de ajo bogotá",
    "ventas ajopel colombia"
  ];

  const metadataBase = new URL('https://ajopelcolombia.com');

  // Canonical normalizado siguiendo tu esquema de routing (es: /contacto, en: /contact)
  const canonicalUrl = locale === 'es'
    ? `${metadataBase.origin}/contacto`
    : `${metadataBase.origin}/en/contact`;

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
          alt: 'Contacto y Soporte Ajopel Colombia',
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
        en: new URL("/en/contact", metadataBase).toString(),
        es: new URL("/contacto", metadataBase).toString()
      }
    }
  };
}