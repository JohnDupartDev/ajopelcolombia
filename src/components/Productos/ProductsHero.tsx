'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';

const ProductsHero = () => {
  const t = useTranslations('ProductsHero');

  // Animación suave de entrada única
  const fadeIn = {
    initial: { opacity: 0, y: 15 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.5, ease: "easeOut" as const }
  };

  return (
    <section className="w-full bg-white pt-20 pb-12">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-10">
        <motion.div 
          {...fadeIn}
          className="flex flex-col items-center text-center gap-6 max-w-3xl mx-auto"
        >
          {/* Badge superior con tu Verde */}
          <span className="text-verde font-bold tracking-widest text-xs uppercase bg-verde/10 px-5 py-2 rounded-full">
            {t('badge')}
          </span>

          {/* Título Principal */}
          <h2 className="text-4xl md:text-6xl font-black leading-tight tracking-tighter text-black">
            {t('title')}
          </h2>

          {/* Descripción */}
          <p className="text-gray-500 text-lg md:text-xl leading-relaxed max-w-2xl">
            {t('description')}
          </p>

          {/* Decoración sutil inferior */}
          <div className="w-20 h-1.5 bg-morado rounded-full mt-2" />
        </motion.div>
      </div>
    </section>
  );
};

export default ProductsHero;