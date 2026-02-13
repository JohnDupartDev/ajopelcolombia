'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';
import { ShieldCheck, Factory, HeartPulse, Award, Gem, Handshake } from 'lucide-react';

const QualityCommitment = () => {
  const t = useTranslations('QualityCommitment');

  // Definición con "as const" para que TypeScript no marque error en 'ease'
  const fadeInVariant = {
    initial: { opacity: 0, y: 15 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.5, ease: "easeOut" as const }
  };

  return (
    <section className="py-24 bg-gray-50 relative overflow-hidden">
      <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-morado/5 rounded-full blur-[100px] -z-10" />

      <div className="max-w-[1100px] mx-auto px-4 sm:px-6 lg:px-8">
        
        <motion.div 
          {...fadeInVariant}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-morado/10 mb-4">
            <ShieldCheck size={14} className="text-morado" />
            <span className="text-xs font-bold text-morado uppercase tracking-wider">{t('badge')}</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-black mb-6 tracking-tight">
            {t('title')}
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            {t('description')}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-6 lg:gap-8">
          
          {/* Fabricación */}
          <motion.div {...fadeInVariant} className="lg:col-span-2 bg-white p-8 rounded-2xl border border-gray-100 hover:shadow-md transition-all group">
            <div className="size-12 bg-morado/10 rounded-xl flex items-center justify-center text-morado mb-6 group-hover:bg-morado group-hover:text-white transition-colors">
              <Factory size={24} />
            </div>
            <h3 className="text-xl font-bold text-black mb-3">{t('cards.manufacturing.title')}</h3>
            <p className="text-gray-500 text-sm leading-relaxed">{t('cards.manufacturing.desc')}</p>
          </motion.div>

          {/* Salud */}
          <motion.div {...fadeInVariant} transition={{ ...fadeInVariant.transition, delay: 0.1 }} className="lg:col-span-2 bg-white p-8 rounded-2xl border border-gray-100 hover:shadow-md transition-all group">
            <div className="size-12 bg-cafe/10 rounded-xl flex items-center justify-center text-cafe mb-6 group-hover:bg-cafe group-hover:text-white transition-colors">
              <HeartPulse size={24} />
            </div>
            <h3 className="text-xl font-bold text-black mb-3">{t('cards.health.title')}</h3>
            <p className="text-gray-500 text-sm leading-relaxed">{t('cards.health.desc')}</p>
          </motion.div>

          {/* Certificación */}
          <motion.div {...fadeInVariant} transition={{ ...fadeInVariant.transition, delay: 0.2 }} className="lg:col-span-2 bg-white p-8 rounded-2xl border-2 border-morado/20 shadow-xl relative overflow-hidden group">
            <div className="relative z-10">
              <div className="size-12 bg-morado text-white rounded-xl flex items-center justify-center mb-6">
                <Award size={24} />
              </div>
              <h3 className="text-xl font-bold text-morado mb-3">{t('cards.certification.title')}</h3>
              <p className="text-gray-600 text-sm leading-relaxed mb-4">{t('cards.certification.desc')}</p>
              <div className="flex items-center gap-2 text-xs font-bold text-verde uppercase tracking-wide">
                <span className="w-2 h-2 rounded-full bg-verde"></span>
                {t('cards.certification.status')}
              </div>
            </div>
          </motion.div>

          {/* Premium */}
          <motion.div {...fadeInVariant} transition={{ ...fadeInVariant.transition, delay: 0.3 }} className="lg:col-span-3 bg-white p-8 rounded-2xl border border-gray-100 hover:shadow-md transition-all group">
            <div className="size-12 bg-verde/10 rounded-xl flex items-center justify-center text-verde mb-6 group-hover:bg-verde group-hover:text-white transition-colors">
              <Gem size={24} />
            </div>
            <h3 className="text-xl font-bold text-black mb-3">{t('cards.premium.title')}</h3>
            <p className="text-gray-500 text-sm leading-relaxed">{t('cards.premium.desc')}</p>
          </motion.div>

          {/* Proveedores */}
          <motion.div {...fadeInVariant} transition={{ ...fadeInVariant.transition, delay: 0.4 }} className="lg:col-span-3 bg-white p-8 rounded-2xl border border-gray-100 hover:shadow-md transition-all group">
            <div className="size-12 bg-cafe/10 rounded-xl flex items-center justify-center text-cafe mb-6 group-hover:bg-cafe group-hover:text-white transition-colors">
              <Handshake size={24} />
            </div>
            <h3 className="text-xl font-bold text-black mb-3">{t('cards.suppliers.title')}</h3>
            <p className="text-gray-500 text-sm leading-relaxed">{t('cards.suppliers.desc')}</p>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default QualityCommitment;