'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';
import { History, Weight, Leaf, Ban, Smile } from 'lucide-react';

const ImpactMetrics = () => {
  const t = useTranslations('Impact');

  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6, ease: "easeOut" as const }
  };

  return (
    <section className="py-20 relative bg-white">
      <div className="max-w-[1100px] mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h3 
          {...fadeIn}
          className="text-3xl font-extrabold text-black mb-10 text-center tracking-tight"
        >
          {t('title')}
        </motion.h3>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[220px]">
          
          {/* Card Trayectoria - Ocupa 2 columnas */}
          <motion.div 
            {...fadeIn}
            className="md:col-span-2 row-span-1 bg-gray-50 rounded-2xl p-8 flex flex-col justify-center relative overflow-hidden group hover:shadow-md transition-all border border-gray-100"
          >
            <History 
              size={180} 
              className="absolute right-[-20px] bottom-[-20px] text-morado/5 group-hover:text-morado/10 transition-colors" 
            />
            <p className="text-cafe font-bold uppercase tracking-widest text-xs mb-2">
              {t('history.tag')}
            </p>
            <div className="flex items-baseline gap-2">
              <h4 className="text-6xl font-black text-black">{t('history.value')}</h4>
              <span className="text-2xl font-bold text-gray-400">{t('history.unit')}</span>
            </div>
            <p className="mt-2 text-gray-600 max-w-sm font-medium">
              {t('history.desc')}
            </p>
          </motion.div>

          {/* Card Capacidad - 1 Columna */}
          <motion.div 
            {...fadeIn}
            transition={{ ...fadeIn.transition, delay: 0.1 }}
            className="md:col-span-1 row-span-1 bg-white rounded-2xl p-8 flex flex-col justify-center border border-gray-100 hover:border-morado/20 transition-all shadow-sm"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2.5 bg-morado/10 rounded-full text-morado">
                <Weight size={20} />
              </div>
              <span className="text-xs font-bold text-gray-500 uppercase tracking-wider">{t('capacity.tag')}</span>
            </div>
            <h4 className="text-4xl font-black text-black">{t('capacity.value')}</h4>
            <p className="text-gray-500 text-sm mt-1 font-medium">{t('capacity.desc')}</p>
          </motion.div>

          {/* Card Pureza - 1 Columna (Color Cafe/Naranja) */}
          <motion.div 
            {...fadeIn}
            transition={{ ...fadeIn.transition, delay: 0.2 }}
            className="md:col-span-1 row-span-1 bg-verde text-white rounded-2xl p-8 flex flex-col justify-between relative overflow-hidden shadow-lg shadow-cafe/20"
          >
            <Leaf 
              size={140} 
              className="absolute -right-6 -top-6 text-white/10 rotate-12" 
            />
            <div className="relative z-10">
              <Ban size={32} className="mb-4 text-white/80" />
              <h4 className="text-4xl font-black mb-1">{t('purity.value')}</h4>
              <p className="font-bold text-white/90 text-sm">{t('purity.desc')}</p>
            </div>
          </motion.div>

          {/* Card Confianza - 2 Columnas */}
          <motion.div 
            {...fadeIn}
            transition={{ ...fadeIn.transition, delay: 0.3 }}
            className="md:col-span-2 row-span-1 bg-gray-50 rounded-2xl p-8 flex items-center justify-between border border-gray-100 relative overflow-hidden group hover:shadow-md transition-all"
          >
            <div className="relative z-10 flex flex-col justify-center h-full max-w-[65%]">
              <h4 className="text-3xl font-bold text-black mb-2 tracking-tight">{t('trust.title')}</h4>
              <p className="text-gray-600 text-sm md:text-base font-medium leading-relaxed">
                {t('trust.desc')}
              </p>
              
              {/* Avatar stack simulado */}
              <div className="flex -space-x-3 mt-5">
                {[...Array(3)].map((_, i) => (
                  <div key={i} className="w-10 h-10 rounded-full bg-gray-300 border-2 border-white flex items-center justify-center text-[10px] font-black text-gray-600">
                    LOGO
                  </div>
                ))}
                <div className="w-10 h-10 rounded-full bg-morado text-white border-2 border-white flex items-center justify-center text-xs font-bold">
                  +50
                </div>
              </div>
            </div>
            <div className="relative z-10 shrink-0 hidden sm:flex">
              <Smile size={80} className="text-morado/10 group-hover:text-morado/20 transition-colors" />
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default ImpactMetrics;