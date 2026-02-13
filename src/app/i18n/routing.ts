// src/i18n/routing.ts

import { defineRouting } from "next-intl/routing";

export const routing = defineRouting({
  locales: ["en", "es"], 
  defaultLocale: "es",
  localeDetection: false,
  localePrefix: "as-needed",

  pathnames: {
    // Ruta Raíz
    "/": "/",

    // Ruta Nosotros
    "/nosotros": {
      es: "/nosotros",
      en: "/about"
    },

    // Ruta Productos
    "/productos": {
      es: "/productos",
      en: "/products"
    },

    // Ruta Contacto
    "/contacto": {
      es: "/contacto",
      en: "/contact"
    }
  },
});