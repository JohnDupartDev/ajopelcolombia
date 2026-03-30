/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://ajopelcolombia.com',
  generateRobotsTxt: true,
  changefreq: 'monthly', // Ajustado a mensual, común para catálogos industriales
  priority: 0.7,
  exclude: ['/icon.svg', '/apple-icon.png', '/_next/*', '/api/*'],
  alternateRefs: [
    {
      href: 'https://ajopelcolombia.com', // Español como principal en el root
      hreflang: 'es',
    },
    {
      href: 'https://ajopelcolombia.com/en', // Versión en Inglés
      hreflang: 'en',
    },
  ],
  // Configuración para resolver el error de PageSpeed en el robots.txt
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/_next/', '/api/'],
      },
    ],
    additionalSitemaps: [
      'https://ajopelcolombia.com/sitemap.xml',
    ],
  },
};