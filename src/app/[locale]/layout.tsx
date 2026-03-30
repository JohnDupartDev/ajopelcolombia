/* eslint-disable @typescript-eslint/no-unused-vars */
import { getLocale, getMessages } from 'next-intl/server';
import { notFound } from 'next/navigation';
import type { Metadata, Viewport } from 'next';

import ClientWrapper from '@/components/ClientWrapper';

import { Audiowide, Pacifico } from 'next/font/google';
import '../globals.css';

// Fuentes (Puedes ajustarlas según el branding de Ajopel)
const audiowide = Audiowide({
  subsets: ['latin'],
  variable: '--font-audiowide',
  weight: '400',
  display: 'swap',
});

const pacifico = Pacifico({
  subsets: ['latin'],
  variable: '--font-pacifico',
  weight: '400',
  display: 'swap',
});

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  const locale = await getLocale();
  const messages = await getMessages();

  if (!['es', 'en'].includes(locale)) notFound();

  // Schema estructurado para Ajopel Colombia
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "WholesaleStore", // Cambiado a WholesaleStore por su naturaleza B2B
    "@id": "https://ajopelcolombia.com/#organization",
    "name": "Ajopel Colombia",
    "url": "https://ajopelcolombia.com",
    "logo": "https://ajopelcolombia.com/logo.png",
    "image": "https://ajopelcolombia.com/og-image.jpg",
    "description": "Empresa líder en producción y comercialización de ajo pelado de alta calidad en Colombia, USA y Europa.",
    "telephone": "+573152024385", 
    "priceRange": "$$", 
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Calle 165A 54c-17", 
      "addressLocality": "Bogotá",
      "addressRegion": "Cundinamarca",
      "postalCode": "110111",
      "addressCountry": "CO"
    },
    "geo": { 
      "@type": "GeoCoordinates",
      "latitude": 4.7454, 
      "longitude": -74.0545
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday", "Tuesday", "Wednesday", "Thursday", "Friday"
      ],
      "opens": "08:00",
      "closes": "18:00"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+57-315-202-4385",
      "contactType": "sales",
      "areaServed": ["CO", "US", "EU"],
      "availableLanguage": ["es", "en"]
    },
    "sameAs": [
      "https://www.facebook.com/Ajopel",
      "https://www.instagram.com/ajopelcolombia"
    ]
  };

  return (
    <html lang={locale} dir="ltr" suppressHydrationWarning>
      <head>
      </head>

      <body className={`${audiowide.variable} ${pacifico.variable} antialiased min-h-screen flex flex-col overflow-x-hidden relative`}>

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />

    

        <ClientWrapper locale={locale} messages={messages}>
          {children}
        </ClientWrapper>

      </body>
    </html>
  );
}

// Viewport
export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
};

// Metadata
export async function generateMetadata(): Promise<Metadata> {
  const locale = await getLocale();
  const metadataBase = new URL('https://ajopelcolombia.com');

  return {
    metadataBase,
    title: {
      default: locale === 'es' 
        ? 'Ajopel Colombia | Ajo Pelado de Alta Calidad' 
        : 'Ajopel Colombia | High Quality Peeled Garlic',
      template: '%s | Ajopel Colombia',
    },
    description:
      locale === 'es'
        ? 'Proveedor de ajo pelado listo para usar. Soluciones para restaurantes y empresas en Colombia, USA y Europa.'
        : 'Supplier of ready-to-use peeled garlic. Solutions for restaurants and businesses in Colombia, USA, and Europe.',
    icons: {
      icon: '/favicon.ico',
    },
    robots: {
      index: true,
      follow: true,
    },
    alternates: {
      languages: {
        en: new URL('/en', metadataBase).toString(),
        es: metadataBase.toString(),
      },
    },
  };
}