/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useTranslations, useLocale } from 'next-intl';
import { Utensils, ArrowRight, PlusCircle, RefreshCw } from 'lucide-react';
import { Link } from '@/app/i18n/navigation';

const ProductGrid = () => {
  const t = useTranslations('Products');
  const locale = useLocale();

  // Función para generar URLs de WhatsApp dinámicas
  const getWhatsappUrl = (productName: string) => {
    const baseMessage = locale === 'es' 
      ? `Hola, me gustaría recibir más información sobre: ${productName}`
      : `Hello, I would like to receive more information about: ${productName}`;
    return `https://wa.me/573152024385?text=${encodeURIComponent(baseMessage)}`;
  };

  return (
    <section className="w-full bg-white pb-20 pt-10">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-10">
        
        {/* Header de la Sección */}
        <div className="flex justify-between items-end mb-10">
          <div>
            <span className="text-morado font-bold tracking-wider text-sm uppercase mb-2 block">
              {t('badge')}
            </span>
            <h2 className="text-black text-3xl md:text-4xl font-bold tracking-tight">
              {t('title')}
            </h2>
          </div>
          <Link 
            href={"/productos" as any} 
            className="text-morado font-bold hover:underline hidden md:block transition-all"
          >
            {t('catalog')}
          </Link>
        </div>

        {/* Rejilla de Productos (Bento Grid) */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 auto-rows-[200px]">
          
          {/* Producto Principal (Ajo Pelado) */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="md:col-span-2 md:row-span-2 rounded-3xl overflow-hidden relative group"
          >
            <div className="absolute inset-0 bg-black/30 group-hover:bg-black/20 transition-colors z-10" />
            <div className="absolute bottom-0 left-0 p-8 z-20 w-full">
              <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-4">
                <div>
                  <span className="bg-verde text-white text-xs font-bold px-3 py-1 rounded-full mb-3 inline-block">
                    {t('mainProduct.tag')}
                  </span>
                  <h3 className="text-white text-3xl font-bold mb-1">{t('mainProduct.name')}</h3>
                  <p className="text-white/90 text-sm mb-4 md:mb-0">{t('mainProduct.desc')}</p>
                </div>
                <a 
                  href={getWhatsappUrl(t('mainProduct.name'))}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white text-black hover:bg-morado hover:text-white transition-all px-6 py-2.5 rounded-full font-bold text-sm shadow-lg active:scale-95 flex items-center justify-center"
                >
                  {t('mainProduct.button')}
                </a>
              </div>
            </div>
            <div 
              className="w-full h-full bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
              style={{ backgroundImage: "url('/images/proceso.jpg')" }} 
            />
          </motion.div>

          {/* Card Grado Culinario */}
          <motion.a 
            href={getWhatsappUrl(t('culinary.title'))}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="md:col-span-2 rounded-3xl bg-gray-50 border border-gray-100 p-8 flex flex-col justify-center items-start hover:border-morado/20 transition-all cursor-pointer group"
          >
            <div className="w-12 h-12 p-3 rounded-full bg-morado/10 flex items-center justify-center text-morado mb-4 group-hover:bg-morado group-hover:text-white transition-all duration-300">
              <Utensils size={24} />
            </div>
            <h3 className="text-black text-xl font-bold group-hover:text-morado transition-colors">
              {t('culinary.title')}
            </h3>
            <p className="text-gray-500 text-sm mt-2 mb-6 max-w-sm leading-relaxed">
              {t('culinary.desc')}
            </p>
            <span className="text-morado text-sm font-bold flex items-center group-hover:gap-2 transition-all">
              {t('culinary.action')} <ArrowRight size={16} className="ml-1" />
            </span>
          </motion.a>

          {/* Card Pasta de Ajo */}
          <motion.a 
            href={getWhatsappUrl(t('paste.title'))}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="rounded-3xl overflow-hidden relative group cursor-pointer"
          >
            <div className="absolute inset-0 bg-black/40 group-hover:bg-black/30 transition-colors z-10" />
            <div className="absolute bottom-5 left-5 right-5 z-20 flex justify-between items-center">
              <h3 className="text-white font-bold">{t('paste.title')}</h3>
              <PlusCircle className="text-white opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:rotate-90" size={24} />
            </div>
            <div 
              className="w-full h-full bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
              style={{ backgroundImage: "url('/images/ajopelado.jpg')" }} 
            />
          </motion.a>

          {/* Card Sostenibilidad */}
          <motion.a 
            href={getWhatsappUrl(t('sustainability.title'))}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="rounded-3xl bg-verde/5 border border-cafe/10 p-6 flex flex-col justify-center items-center text-center hover:bg-cafe/10 transition-all cursor-pointer group"
          >
            <div className="p-3 bg-white rounded-2xl shadow-sm mb-3 group-hover:scale-110 transition-transform">
              <RefreshCw size={32} className="text-verde" />
            </div>
            <h3 className="text-black font-bold">{t('sustainability.title')}</h3>
            <p className="text-xs text-gray-500 mt-1">{t('sustainability.desc')}</p>
          </motion.a>

        </div>
      </div>
    </section>
  );
};

export default ProductGrid;