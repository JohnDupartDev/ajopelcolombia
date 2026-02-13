'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';
import { BadgeCheck, Droplets, FlaskConical, Leaf, Zap } from 'lucide-react';

const AboutHero = () => {
  const t = useTranslations('AboutHero');

  return (
    <section className="relative pt-12 pb-20 overflow-hidden bg-white">
      {/* Elementos decorativos de fondo con tus colores */}
      <div className="absolute top-0 right-0 -translate-y-1/4 translate-x-1/4 w-[600px] h-[600px] bg-morado/5 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-0 left-0 translate-y-1/4 -translate-x-1/4 w-[400px] h-[400px] bg-cafe/5 rounded-full blur-3xl -z-10" />

      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          
          {/* Contenido de Texto */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="flex flex-col gap-6 order-2 lg:order-1"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-morado/10 w-fit">
              <BadgeCheck className="text-morado" size={16} />
              <span className="text-xs font-bold text-morado uppercase tracking-wider">
                {t('badge')}
              </span>
            </div>

            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-black leading-[1.1] tracking-tight">
              {t('titleMain')} <span className="text-morado">{t('titleAccent')}</span> {t('titleEnd')}
            </h2>

            <p className="text-lg text-gray-600 leading-relaxed">
              {t('description')}
            </p>

            {/* Características rápidas con Lucide */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <div className="flex items-center gap-2 text-cafe font-bold">
                <Droplets size={18} />
                <span className="text-sm">{t('featureWater')}</span>
              </div>
              <div className="w-1.5 h-1.5 rounded-full bg-gray-200" />
              <div className="flex items-center gap-2 text-cafe font-bold">
                <FlaskConical size={18} />
                <span className="text-sm">{t('featureChemicals')}</span>
              </div>
              <div className="w-1.5 h-1.5 rounded-full bg-gray-200" />
              <div className="flex items-center gap-2 text-verde font-bold">
                <Leaf size={18} />
                <span className="text-sm">{t('featureNatural')}</span>
              </div>
            </div>
          </motion.div>

          {/* Sección de Imagen */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="order-1 lg:order-2 relative"
          >
            <div className="relative w-full aspect-[4/5] md:aspect-square lg:aspect-[4/5] max-h-[600px] mx-auto">
              <div className="absolute inset-0 rounded-[100px] overflow-hidden shadow-2xl shadow-morado/20 rotate-3 transition-transform hover:rotate-0 duration-700 ease-out border-8 border-white">
                <div 
                  className="w-full h-full bg-gray-200 bg-cover bg-center scale-110" 
                  style={{ backgroundImage: "url('/images/ajopelado.jpg')" }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-morado/30 to-transparent mix-blend-multiply" />
              </div>

              {/* Card de Eficiencia Flotante */}
              <motion.div 
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -bottom-6 -left-6 bg-white p-5 rounded-2xl shadow-2xl flex items-center gap-4 border border-gray-100"
              >
                <div className="size-12 bg-verde/10 rounded-full flex items-center justify-center text-verde">
                  <Zap size={24} fill="currentColor" />
                </div>
                <div>
                  <p className="text-xs text-gray-400 font-bold uppercase tracking-wider">{t('efficiencyLabel')}</p>
                  <p className="text-sm font-black text-black">{t('efficiencyValue')}</p>
                </div>
              </motion.div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default AboutHero;