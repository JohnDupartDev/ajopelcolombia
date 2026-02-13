'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useTranslations, useLocale } from 'next-intl';
import { Scale, Package, ArrowRight } from 'lucide-react';

const ProductsGrid = () => {
  const t = useTranslations('ProductsGrid');
  const locale = useLocale();

  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.5, ease: "easeOut" as const }
  };

  // Función para generar la URL de WhatsApp según el producto e idioma
  const getWhatsappUrl = (productType: 'bulk' | 'packed') => {
    const productName = productType === 'bulk' ? t('bulk.title') : t('packed.title');
    const message = locale === 'es' 
      ? `Hola, me gustaría recibir más información y precios sobre el producto: ${productName}.` 
      : `Hello, I would like to receive more information and pricing for the product: ${productName}.`;
    
    return `https://wa.me/573152024385?text=${encodeURIComponent(message)}`;
  };

  return (
    <section className="w-full bg-white py-12">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-4">
          
          {/* PRODUCTO 1: GRANEL */}
          <motion.article 
            {...fadeIn}
            className="rounded-[2.5rem] p-6 lg:p-8 flex flex-col gap-6 transition-all duration-300 relative overflow-hidden border-t-4 border-t-morado bg-gray-50 hover:shadow-xl group"
          >
            <div className="absolute -right-10 -top-10 w-40 h-40 bg-morado/5 rounded-full blur-2xl group-hover:bg-morado/10 transition-colors" />
            
            <div className="flex justify-between items-start z-10">
              <div>
                <h3 className="text-2xl font-black text-morado mb-1 uppercase tracking-tight">{t('bulk.title')}</h3>
                <span className="text-xs text-gray-400 font-bold uppercase tracking-widest">{t('bulk.tag')}</span>
              </div>
              <div className="bg-morado/10 p-3 rounded-full text-morado">
                <Scale size={24} />
              </div>
            </div>

            <div className="relative w-full aspect-[16/9] rounded-3xl overflow-hidden shadow-sm">
              <div 
                className="w-full h-full bg-cover bg-center group-hover:scale-105 transition-transform duration-700" 
                style={{ backgroundImage: "url('/images/ajopelado.jpg')" }}
              />
              <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur px-4 py-1.5 rounded-full text-[10px] font-black text-morado uppercase shadow-sm">
                {t('bulk.badge')}
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-5 gap-x-8 pt-6 border-t border-gray-100">
              <div className="flex flex-col gap-1">
                <span className="text-[10px] uppercase text-gray-400 font-bold tracking-widest">{t('labels.ingredients')}</span>
                <p className="text-sm font-bold text-black">{t('bulk.ingredients')}</p>
              </div>
              <div className="flex flex-col gap-1">
                <span className="text-[10px] uppercase text-gray-400 font-bold tracking-widest">{t('labels.format')}</span>
                <p className="text-sm font-bold text-black">{t('bulk.format')}</p>
              </div>
              <div className="flex flex-col gap-1">
                <span className="text-[10px] uppercase text-gray-400 font-bold tracking-widest">{t('labels.weight')}</span>
                <p className="text-sm font-bold text-black">{t('bulk.weight')}</p>
              </div>
              <div className="flex flex-col gap-1">
                <span className="text-[10px] uppercase text-gray-400 font-bold tracking-widest">{t('labels.variety')}</span>
                <p className="text-sm font-bold text-black">{t('bulk.variety')}</p>
              </div>
            </div>

            <a 
              href={getWhatsappUrl('bulk')}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full mt-auto bg-morado text-white font-bold py-4 rounded-2xl shadow-lg shadow-morado/20 hover:bg-morado/90 transition-all flex items-center justify-center gap-2 active:scale-95"
            >
              <span>{t('bulk.cta')}</span>
              <ArrowRight size={18} />
            </a>
          </motion.article>

          {/* PRODUCTO 2: EMPACADO */}
          <motion.article 
            {...fadeIn}
            transition={{ ...fadeIn.transition, delay: 0.2 }}
            className="rounded-[2.5rem] p-6 lg:p-8 flex flex-col gap-6 transition-all duration-300 relative overflow-hidden border-t-4 border-t-verde bg-gray-50 hover:shadow-xl group"
          >
            <div className="absolute -right-10 -top-10 w-40 h-40 bg-verde/5 rounded-full blur-2xl group-hover:bg-verde/10 transition-colors" />
            
            <div className="flex justify-between items-start z-10">
              <div>
                <h3 className="text-2xl font-black text-black mb-1 uppercase tracking-tight leading-none">{t('packed.title')}</h3>
                <span className="text-xs text-gray-400 font-bold uppercase tracking-widest">{t('packed.tag')}</span>
              </div>
              <div className="bg-verde/10 p-3 rounded-full text-verde">
                <Package size={24} />
              </div>
            </div>

            <div className="relative w-full aspect-[16/9] rounded-3xl overflow-hidden shadow-sm">
              <div 
                className="w-full h-full bg-cover bg-center group-hover:scale-105 transition-transform duration-700" 
                style={{ backgroundImage: "url('/images/ajoproducto.jpg')" }}
              />
              <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur px-4 py-1.5 rounded-full text-[10px] font-black text-verde uppercase shadow-sm">
                {t('packed.badge')}
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-5 gap-x-8 pt-6 border-t border-gray-100">
              <div className="flex flex-col gap-1">
                <span className="text-[10px] uppercase text-gray-400 font-bold tracking-widest">{t('labels.ingredients')}</span>
                <p className="text-sm font-bold text-black">{t('packed.ingredients')}</p>
              </div>
              <div className="flex flex-col gap-1">
                <span className="text-[10px] uppercase text-gray-400 font-bold tracking-widest">{t('labels.format')}</span>
                <p className="text-sm font-bold text-black">{t('packed.format')}</p>
              </div>
              <div className="flex flex-col gap-1">
                <span className="text-[10px] uppercase text-gray-400 font-bold tracking-widest">{t('labels.weight')}</span>
                <p className="text-sm font-bold text-black">{t('packed.weight')}</p>
              </div>
              <div className="flex flex-col gap-1">
                <span className="text-[10px] uppercase text-gray-400 font-bold tracking-widest">{t('labels.variety')}</span>
                <p className="text-sm font-bold text-black">{t('packed.variety')}</p>
              </div>
            </div>

            <a 
              href={getWhatsappUrl('packed')}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full mt-auto bg-black text-white font-bold py-4 rounded-2xl shadow-lg hover:bg-gray-800 transition-all flex items-center justify-center gap-2 active:scale-95"
            >
              <span>{t('packed.cta')}</span>
              <ArrowRight size={18} />
            </a>
          </motion.article>

        </div>
      </div>
    </section>
  );
};

export default ProductsGrid;