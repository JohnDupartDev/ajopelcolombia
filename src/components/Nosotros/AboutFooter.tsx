/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useTranslations, useLocale } from 'next-intl';
import { ArrowRight, Box } from 'lucide-react';

const AboutFooter = () => {
  const t = useTranslations('AboutFooter');
  const locale = useLocale();

  const fadeIn = {
    initial: { opacity: 0, y: 15 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6, ease: "easeOut" as const }
  };

  // Mensajes de WhatsApp personalizados según el idioma y el botón
  const messagePrimary = locale === 'es' 
    ? 'Hola, vengo desde la sección de nosotros y me gustaría contactar con un asesor comercial.' 
    : 'Hello, I am visiting the about us section and I would like to speak with a sales advisor.';

  const messageSecondary = locale === 'es' 
    ? 'Hola, me gustaría recibir el catálogo completo de productos de AjopelColombia.' 
    : 'Hello, I would like to receive the complete AjopelColombia product catalog.';

  const whatsappUrlPrimary = `https://wa.me/573152024385?text=${encodeURIComponent(messagePrimary)}`;
  const whatsappUrlSecondary = `https://wa.me/573152024385?text=${encodeURIComponent(messageSecondary)}`;

  return (
    <section className="py-24 relative overflow-hidden bg-morado">
      {/* Círculos decorativos de fondo */}
      <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-[600px] h-[600px] bg-white/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-verde/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-[1100px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        {/* Badge superior */}
        <motion.div 
          {...fadeIn}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/10 backdrop-blur-md mb-8"
        >
          <span className="w-2 h-2 rounded-full bg-verde"></span>
          <span className="text-xs font-bold text-white uppercase tracking-wider">
            {t('badge')}
          </span>
        </motion.div>

        {/* Título */}
        <motion.h2 
          {...fadeIn}
          transition={{ ...fadeIn.transition, delay: 0.1 }}
          className="text-3xl md:text-5xl font-extrabold text-white mb-6 tracking-tight leading-tight max-w-4xl mx-auto"
        >
          {t('title')}
        </motion.h2>

        {/* Descripción */}
        <motion.p 
          {...fadeIn}
          transition={{ ...fadeIn.transition, delay: 0.2 }}
          className="text-lg text-white/80 max-w-2xl mx-auto mb-10 leading-relaxed font-medium"
        >
          {t('description')}
        </motion.p>

        {/* Botones de Acción - Convertidos a enlaces de WhatsApp */}
        <motion.div 
          {...fadeIn}
          transition={{ ...fadeIn.transition, delay: 0.3 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <a 
            href={whatsappUrlPrimary}
            target="_blank"
            rel="noopener noreferrer"
            className="h-14 px-10 rounded-full bg-verde hover:bg-verde/90 text-white font-bold text-base transition-all transform hover:scale-105 shadow-xl shadow-black/20 flex items-center gap-2 group justify-center w-full sm:w-auto"
          >
            {t('ctaPrimary')}
            <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
          </a>

          <a 
            href={whatsappUrlSecondary}
            target="_blank"
            rel="noopener noreferrer"
            className="h-14 px-10 rounded-full bg-transparent hover:bg-white/10 border-2 border-white/20 text-white font-bold text-base transition-all flex items-center gap-2 active:scale-95 justify-center w-full sm:w-auto"
          >
            {t('ctaSecondary')}
            <Box size={20} />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutFooter;