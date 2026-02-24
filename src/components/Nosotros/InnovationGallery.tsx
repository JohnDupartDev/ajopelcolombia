'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';
import { Factory, Box, Microscope, Leaf, ShieldCheck, Truck, Users, Zap } from 'lucide-react';

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
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h3 
          {...fadeIn}
          className="text-3xl font-extrabold text-black mb-12 text-center tracking-tight"
        >
          {t('title')}
        </motion.h3>

        {/* Grid Principal: 4 columnas en desktop */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 auto-rows-[220px]">
          
          {/* 1. PLANTA - Grande Izquierda (Ocupa 2 columnas y 2 filas de alto) */}
          <motion.div 
            {...fadeIn}
            className="lg:col-span-2 lg:row-span-2 rounded-3xl overflow-hidden relative group shadow-sm"
          >
            <div 
              className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
              style={{ backgroundImage: "url('/images/planta.jpg')" }} 
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent z-10" />
            
            <div className="absolute bottom-6 left-6 text-white z-20">
          
              <div className="flex items-center gap-3 mb-2">
                <Factory size={24} className="opacity-90" />
                <h5 className="text-2xl font-bold">{t('items.plant.title')}</h5>
              </div>
              <p className="text-sm opacity-80 max-w-xs">{t('items.plant.desc')}</p>
            </div>
          </motion.div>

          {/* 2. PRODUCTO TERMINADO */}
          <motion.div 
            {...fadeIn}
            className="rounded-3xl overflow-hidden relative group shadow-sm"
          >
            <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('/images/producto-terminado.jpg')" }} />
            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors z-10" />
            <div className="absolute bottom-4 left-4 z-20 text-white">
              <div className="bg-white/20 backdrop-blur-md px-2 py-0.5 rounded-full text-[9px] font-bold uppercase mb-2 w-fit">PRODUCTO</div>
              <div className="flex items-center gap-2">
                <Box size={18} />
                <h5 className="font-bold text-sm">{t('items.product.title')}</h5>
              </div>
            </div>
          </motion.div>

          {/* 3. CALIDAD / LABORATORIO */}
          <motion.div 
            {...fadeIn}
            className="rounded-3xl overflow-hidden relative group shadow-sm"
          >
            <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('/images/calidad.jpg')" }} />
            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors z-10" />
            <div className="absolute bottom-4 left-4 z-20 text-white">
               <div className="bg-white/20 backdrop-blur-md px-2 py-0.5 rounded-full text-[9px] font-bold uppercase mb-2 w-fit">CALIDAD</div>
               <div className="flex items-center gap-2">
                <Microscope size={18} />
                <h5 className="font-bold text-sm">{t('items.lab.title')}</h5>
              </div>
            </div>
          </motion.div>

          {/* 4. SOSTENIBILIDAD (Eco) */}
          <motion.div 
            {...fadeIn}
            className="rounded-3xl overflow-hidden relative group shadow-sm"
          >
            <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('/images/proceso.jpg')" }} />
            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors z-10" />
            <div className="absolute bottom-4 left-4 z-20 text-white">
              <div className="bg-white/20 backdrop-blur-md px-2 py-0.5 rounded-full text-[9px] font-bold uppercase mb-2 w-fit">SOSTENIBILIDAD</div>
              <div className="flex items-center gap-2">
                <Leaf size={18} />
                <h5 className="font-bold text-sm">{t('items.eco.title')}</h5>
              </div>
            </div>
          </motion.div>

          {/* 5. ALMACENAMIENTO */}
          <motion.div 
            {...fadeIn}
            className="rounded-3xl overflow-hidden relative group shadow-sm"
          >
            <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('/images/ajo-agranel.jpg')" }} />
            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors z-10" />
            <div className="absolute bottom-4 left-4 z-20 text-white">
              <div className="bg-white/20 backdrop-blur-md px-2 py-0.5 rounded-full text-[9px] font-bold uppercase mb-2 w-fit">ALMACENAMIENTO</div>
              <div className="flex items-center gap-2">
                <ShieldCheck size={18} />
                <h5 className="font-bold text-sm">{t('items.storage.title')}</h5>
              </div>
            </div>
          </motion.div>

          {/* FILA INFERIOR: TRES IMÁGENES QUE OCUPAN TODO EL ANCHO */}
          
          {/* 6. FLOTA */}
          <motion.div 
            {...fadeIn}
            className="lg:col-span-1 rounded-3xl overflow-hidden relative group shadow-sm"
          >
            <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('/images/planta01.jpg')" }} />
            <div className="absolute inset-0 bg-morado/10 group-hover:bg-morado/20 transition-colors z-10" />
            <div className="absolute bottom-4 left-4 z-20 text-white">
              <Truck size={20} className="mb-1" />
              <h5 className="font-bold text-sm">{t('items.fleet.title')}</h5>
            </div>
          </motion.div>

          {/* 7. EQUIPO HUMANO (Ocupa 2 columnas para equilibrar la fila de 3) */}
          <motion.div 
            {...fadeIn}
            className="lg:col-span-2 rounded-3xl overflow-hidden relative group shadow-sm"
          >
            <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('/images/producto-ajo.jpg')" }} />
            <div className="absolute inset-0 bg-cafe/10 group-hover:bg-cafe/20 transition-colors z-10" />
            <div className="absolute bottom-4 left-4 z-20 text-white">
              <Users size={20} className="mb-1" />
              <h5 className="font-bold text-base">{t('items.team.title')}</h5>
              <p className="text-xs opacity-80">{t('items.team.desc')}</p>
            </div>
          </motion.div>

          {/* 8. TECNOLOGÍA */}
          <motion.div 
            {...fadeIn}
            className="lg:col-span-1 rounded-3xl overflow-hidden relative group shadow-sm"
          >
            <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('/images/planta02.jpg')" }} />
            <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-colors z-10" />
            <div className="absolute bottom-4 left-4 z-20 text-white">
              <Zap size={20} className="mb-1" />
              <h5 className="font-bold text-sm">{t('items.tech.title')}</h5>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default InnovationGallery;