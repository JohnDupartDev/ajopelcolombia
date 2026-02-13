/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useTranslations, useLocale } from 'next-intl';
import { FileText, Headphones } from 'lucide-react';

const ProductsCTA = () => {
  const t = useTranslations('ProductsCTA');
  const locale = useLocale();

  const fadeIn = {
    initial: { opacity: 0, scale: 0.95 },
    whileInView: { opacity: 1, scale: 1 },
    viewport: { once: true },
    transition: { duration: 0.5, ease: "easeOut" as const }
  };

  // Mensajes personalizados para WhatsApp
  const messagePrimary = locale === 'es' 
    ? 'Hola, me gustaría solicitar una ficha técnica y cotización de sus productos de ajo.' 
    : 'Hello, I would like to request a technical sheet and quote for your garlic products.';

  const messageSecondary = locale === 'es' 
    ? 'Hola, necesito asesoría personalizada sobre sus formatos de venta.' 
    : 'Hello, I need personalized advice regarding your sales formats.';

  const whatsappUrlPrimary = `https://wa.me/573152024385?text=${encodeURIComponent(messagePrimary)}`;
  const whatsappUrlSecondary = `https://wa.me/573152024385?text=${encodeURIComponent(messageSecondary)}`;

  return (
    <section className="w-full bg-white py-16">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-10">
        <motion.div 
          {...fadeIn}
          className="rounded-[2.5rem] p-10 md:p-16 flex flex-col md:flex-row items-center justify-between gap-8 relative overflow-hidden bg-gradient-to-r from-morado to-[#7a0d22] text-white shadow-2xl shadow-morado/20"
        >
          {/* Textura de fondo sutil */}
          <div className="absolute inset-0 opacity-5 pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]" />
          
          <div className="flex flex-col gap-4 relative z-10 max-w-lg text-center md:text-left">
            <h3 className="text-3xl md:text-4xl font-black tracking-tight leading-tight">
              {t('title')}
            </h3>
            <p className="text-white/80 font-medium text-lg">
              {t('description')}
            </p>
          </div>

          <div className="flex gap-4 relative z-10 flex-col sm:flex-row w-full md:w-auto">
            {/* Botón Primario - WhatsApp */}
            <a 
              href={whatsappUrlPrimary}
              target="_blank"
              rel="noopener noreferrer"
              className="h-14 px-10 rounded-2xl bg-white text-morado font-black shadow-xl hover:shadow-2xl hover:scale-105 transition-all w-full md:w-auto flex items-center justify-center gap-2 active:scale-95"
            >
              <FileText size={20} />
              {t('ctaPrimary')}
            </a>
            
            {/* Botón Secundario - WhatsApp */}
            <a 
              href={whatsappUrlSecondary}
              target="_blank"
              rel="noopener noreferrer"
              className="h-14 px-10 rounded-2xl bg-transparent border-2 border-white/30 text-white font-bold hover:bg-white/10 transition-all w-full md:w-auto flex items-center justify-center gap-2 active:scale-95"
            >
              <Headphones size={20} />
              {t('ctaSecondary')}
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProductsCTA;