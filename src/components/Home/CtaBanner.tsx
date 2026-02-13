/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';
import { ArrowRight } from 'lucide-react';
import { Link } from '@/app/i18n/navigation';

const CtaBanner = () => {
  const t = useTranslations('CTA');

  return (
    <section className="w-full bg-white py-10 lg:py-20 relative overflow-hidden">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-10">
        
        {/* Banner con Gradiente usando tu Morado */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="bg-gradient-to-br from-morado to-[#4a0815] rounded-3xl p-8 md:p-12 lg:p-16 relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left shadow-2xl shadow-morado/20"
        >
          {/* Elementos decorativos de fondo */}
          <div 
            className="absolute inset-0 opacity-10" 
            style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '32px 32px' }}
          />
          <div className="absolute -right-20 -bottom-20 w-64 h-64 bg-white/10 rounded-full blur-3xl" />
          <div className="absolute -left-10 -top-10 w-40 h-40 bg-cafe/20 rounded-full blur-2xl" />

          {/* Contenido de Texto */}
          <div className="relative z-10 max-w-2xl">
            <h2 className="text-white text-3xl md:text-4xl lg:text-5xl font-bold mb-4 tracking-tight leading-tight">
              {t('title')}
            </h2>
            <p className="text-white/80 text-lg md:text-xl font-medium">
              {t('description')}
            </p>
          </div>

          {/* Botón de Acción */}
          <div className="relative z-10 shrink-0">
            <Link 
              href={"/productos" as any}
              className="bg-white text-morado hover:bg-gray-50 transition-all font-bold text-lg h-14 px-10 rounded-full shadow-xl flex items-center justify-center gap-2 group active:scale-95"
            >
              {t('button')}
              <ArrowRight 
                className="transition-transform group-hover:translate-x-2" 
                size={24} 
              />
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CtaBanner;