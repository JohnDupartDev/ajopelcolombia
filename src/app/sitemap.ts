/* eslint-disable @typescript-eslint/no-explicit-any */
import { MetadataRoute } from "next";

// Revalidación cada hora
export const revalidate = 3600;

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = "https://ajopelcolombia.com";

  // 1. Rutas de Ajopel basadas en tu routing.ts
  const routes = [
    { es: "/", en: "/" },
    { es: "/nosotros", en: "/about" },
    { es: "/productos", en: "/products" },
    { es: "/contacto", en: "/contact" },
  ];

  // 2. SEO Local para Distribución de Ajo (Ciudades estratégicas)
  const cities = [
    'bogota', 'medellin', 'cali', 'barranquilla', 'bucaramanga', 
    'cartagena', 'pereira', 'cundinamarca', 'antioquia', 'zipaquira',
    'chia', 'cajica', 'tocancipa'
  ];

  const sitemapEntries: MetadataRoute.Sitemap = [];

  // 3. Generar URLs para páginas estáticas con Hreflang
  for (const route of routes) {
    // Si es la raíz, no añadimos nada, si no, limpiamos el "/" inicial
    const esPath = route.es === "/" ? "" : route.es.replace(/^\//, "");
    const enPath = route.en === "/" ? "" : route.en.replace(/^\//, "");

    const esUrl = `${baseUrl}/${esPath}`.replace(/\/$/, "");
    const enUrl = `${baseUrl}/en/${enPath}`.replace(/\/$/, "");

    // Entrada Español (Versión principal)
    sitemapEntries.push({
      url: esUrl,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: route.es === "/" ? 1 : 0.8,
      alternates: {
        languages: {
          es: esUrl,
          en: enUrl,
        },
      },
    });

    // Entrada Inglés (Solo si no es la raíz exacta ya procesada arriba)
    if (route.en !== "/") {
      sitemapEntries.push({
        url: enUrl,
        lastModified: new Date(),
        changeFrequency: "monthly",
        priority: 0.7,
        alternates: {
          languages: {
            es: esUrl,
            en: enUrl,
          },
        },
      });
    }
  }

  // 4. SEO Local: Proveedor de Ajo por ciudades
  for (const city of cities) {
    const esCityUrl = `${baseUrl}/proveedor-ajo-pelado-${city}`;
    const enCityUrl = `${baseUrl}/en/peeled-garlic-supplier-${city}`;

    sitemapEntries.push({
      url: esCityUrl,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.6,
      alternates: {
        languages: {
          es: esCityUrl,
          en: enCityUrl,
        },
      },
    });
  }

  // Nota: Si en el futuro agregas Blog con Sanity para Ajopel, 
  // puedes re-insertar el bloque de Sanity aquí.

  return sitemapEntries;
}