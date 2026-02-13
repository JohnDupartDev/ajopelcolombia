/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';
import { ArrowRight } from 'lucide-react';
import { Link } from '@/app/i18n/navigation';

const PromiseSection = () => {
  const t = useTranslations('Promise');

  return (
    <section className="w-full bg-white py-20 lg:py-32">
      <div className="max-w-[1000px] mx-auto px-4 sm:px-10 text-center">
        {/* Badge superior animado */}
        <span 
          className="text-morado font-bold tracking-widest text-sm uppercase mb-6 block"
        >
          {t('badge')}
        </span>

        {/* Título corregido con t.rich */}
        <h2 
         
          className="text-3xl md:text-5xl font-extrabold text-black leading-tight mb-8 tracking-tight"
        >
          {t.rich('title', {
            important: (chunks) => <span className="text-morado">{chunks}</span>
          })}
        </h2>

        {/* Descripción */}
        <p 
          
          className="text-gray-600 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          {t('description')}
        </p>

        {/* Enlace con icono Lucide animado */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
        >
          <Link 
            href={"/nosotros" as any} 
            className="inline-flex items-center text-verde font-bold text-lg hover:text-morado transition-colors group underline-offset-8 hover:underline decoration-2 shadow-sm"
          >
            {t('cta')}
            <ArrowRight 
              className="ml-2 transition-transform group-hover:translate-x-2" 
              size={22} 
            />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default PromiseSection;