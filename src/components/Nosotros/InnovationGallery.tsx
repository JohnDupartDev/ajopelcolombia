'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';
import { Factory, Box, Microscope, Truck } from 'lucide-react';

const InnovationGallery = () => {
  const t = useTranslations('Gallery');

  const fadeIn = {
    initial: { opacity: 0, y: 10 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.5, ease: "easeOut" as const }
  };

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-[1100px] mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h3 
          {...fadeIn}
          className="text-3xl font-extrabold text-black mb-12 text-center tracking-tight"
        >
          {t('title')}
        </motion.h3>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-[250px]">
          
          {/* Planta de Procesamiento - Grande */}
          <motion.div 
            {...fadeIn}
            className="lg:col-span-2 rounded-3xl overflow-hidden relative group bg-gray-200 shadow-sm"
          >
            {/* IMAGEN DE FONDO */}
            <div 
              className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
              style={{ backgroundImage: "url('/images/planta.jpg')" }} 
            />
            {/* Overlay Gradiente */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent z-10" />
            
            <div className="absolute bottom-8 left-8 text-white z-20">
              <Factory size={32} className="mb-3 opacity-80" />
              <h5 className="text-xl font-bold">{t('items.plant.title')}</h5>
              <p className="text-sm opacity-90 font-medium">{t('items.plant.desc')}</p>
            </div>
          </motion.div>

          {/* Producto Terminado - Pequeño */}
          <motion.div 
            {...fadeIn}
            transition={{ ...fadeIn.transition, delay: 0.1 }}
            className="rounded-3xl overflow-hidden relative group bg-verde/5 border border-verde/10 shadow-sm"
          >
             <div 
              className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
              style={{ backgroundImage: "url('/images/producto-terminado.jpg')" }} 
            />
            <div className="absolute inset-0 bg-verde/20 group-hover:bg-verde/10 transition-colors z-10" />
            
            <div className="absolute bottom-6 left-6 z-20">
              <Box size={28} className="text-white mb-2" />
              <h5 className="text-lg font-black text-white drop-shadow-md">{t('items.product.title')}</h5>
            </div>
          </motion.div>

          {/* Laboratorio - Pequeño */}
          <motion.div 
            {...fadeIn}
            transition={{ ...fadeIn.transition, delay: 0.2 }}
            className="rounded-3xl overflow-hidden relative group bg-cafe/5 border border-cafe/10 shadow-sm"
          >
            <div 
              className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
              style={{ backgroundImage: "url('/images/calidad.jpg')" }} 
            />
            <div className="absolute inset-0 bg-cafe/20 group-hover:bg-cafe/10 transition-colors z-10" />

            <div className="absolute bottom-6 left-6 z-20">
              <Microscope size={28} className="text-white mb-2" />
              <h5 className="text-lg font-black text-white drop-shadow-md">{t('items.lab.title')}</h5>
            </div>
          </motion.div>

          {/* Flota de Distribución - Grande */}
          <motion.div 
            {...fadeIn}
            transition={{ ...fadeIn.transition, delay: 0.3 }}
            className="lg:col-span-2 rounded-3xl overflow-hidden relative group bg-gray-200 shadow-sm"
          >
            <div 
              className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
              style={{ backgroundImage: "url('/images/flota-distribucion.jpg')" }} 
            />
            {/* Overlay usando tu Morado */}
            <div className="absolute inset-0 bg-gradient-to-t from-morado/90 via-morado/20 to-transparent z-10" />

            <div className="absolute bottom-8 left-8 text-white z-20">
              <Truck size={32} className="mb-3 opacity-80" />
              <h5 className="text-xl font-bold">{t('items.fleet.title')}</h5>
              <p className="text-sm opacity-90 font-medium">{t('items.fleet.desc')}</p>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default InnovationGallery;