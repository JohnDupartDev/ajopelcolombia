'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';
import { Snowflake, ShieldCheck, Truck } from 'lucide-react';

const ProductSpecs = () => {
  const t = useTranslations('ProductSpecs');

  const fadeIn = {
    initial: { opacity: 0, y: 15 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.5, ease: "easeOut" as const }
  };

  return (
    <section className="w-full bg-gray-50/50 py-12">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* Cadena de Frío */}
          <motion.div 
            {...fadeIn}
            className="bg-white rounded-2xl p-6 flex items-start gap-4 border border-gray-100 shadow-sm"
          >
            <div className="bg-blue-50 text-blue-500 p-3 rounded-xl shrink-0">
              <Snowflake size={24} />
            </div>
            <div>
              <h4 className="font-bold text-black">{t('coldChain.title')}</h4>
              <p className="text-sm text-gray-500 mt-1 leading-relaxed">
                {t('coldChain.desc')}
              </p>
            </div>
          </motion.div>

          {/* Certificación */}
          <motion.div 
            {...fadeIn}
            transition={{ ...fadeIn.transition, delay: 0.1 }}
            className="bg-white rounded-2xl p-6 flex items-start gap-4 border border-gray-100 shadow-sm"
          >
            <div className="bg-verde/10 text-verde p-3 rounded-xl shrink-0">
              <ShieldCheck size={24} />
            </div>
            <div>
              <h4 className="font-bold text-black">{t('certification.title')}</h4>
              <p className="text-sm text-gray-500 mt-1 leading-relaxed">
                {t('certification.desc')}
              </p>
            </div>
          </motion.div>

          {/* Distribución */}
          <motion.div 
            {...fadeIn}
            transition={{ ...fadeIn.transition, delay: 0.2 }}
            className="bg-white rounded-2xl p-6 flex items-start gap-4 border border-gray-100 shadow-sm"
          >
            <div className="bg-morado/10 text-morado p-3 rounded-xl shrink-0">
              <Truck size={24} />
            </div>
            <div>
              <h4 className="font-bold text-black">{t('delivery.title')}</h4>
              <p className="text-sm text-gray-500 mt-1 leading-relaxed">
                {t('delivery.desc')}
              </p>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default ProductSpecs;