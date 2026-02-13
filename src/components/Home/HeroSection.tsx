/* eslint-disable @typescript-eslint/no-unused-vars */
'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslations } from 'next-intl';
// Importación de iconos Lucide
import { BadgeCheck, PlayCircle, Zap, X } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

const HeroSection = () => {
  const t = useTranslations('Hero');
  const [isOpen, setIsOpen] = useState(false);

  // ID del video de YouTube (Cámbialo por el tuyo)
  const videoId = "l_cqIzFFcLg"; 

  return (
    <section className="relative w-full overflow-hidden bg-white">
      {/* Círculo decorativo con tu color morado */}
      <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/4 w-[600px] h-[600px] bg-morado/5 rounded-full blur-3xl -z-10" />

      <div className="max-w-[1280px] mx-auto px-4 sm:px-10 py-6 lg:py-20">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          
          {/* Contenido de Texto */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col gap-6 order-2 lg:order-1"
          >
            <div className="flex flex-col gap-4 text-left">
              <div className="inline-flex w-fit items-center gap-2 rounded-full border border-cafe/20 bg-cafe/5 px-3 py-1 text-cafe text-xs font-bold uppercase tracking-wider">
                <BadgeCheck size={16} strokeWidth={2.5} />
                {t('badge')}
              </div>

              <h1 className="text-black text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-[1.1] tracking-tight">
                {t('titleMain')} <span className="text-transparent bg-clip-text bg-gradient-to-r from-morado to-cafe">{t('titleEnd')}</span>{t('titleAccent')} 
              </h1>

              <p className="text-gray-600 text-lg sm:text-xl font-normal leading-relaxed max-w-[540px]">
                {t('description')}
              </p>
            </div>

            <div className="flex flex-wrap gap-4 pt-4">
          <Link 
  href={`https://wa.me/573152024385?text=${encodeURIComponent(
    t('ctaPrimary') === 'Solicitar Cotización' || t('ctaPrimary') === 'Cotizar'
      ? 'Hola, me gustaría solicitar una cotización.' 
      : 'Hello, I would like to request a quote.'
  )}`}
  target="_blank"
  rel="noopener noreferrer"
  className="flex min-w-[140px] cursor-pointer items-center justify-center rounded-full h-12 px-6 bg-morado hover:bg-[#7a0d22] text-white text-base font-bold transition-all hover:scale-105 shadow-xl shadow-morado/20"
>
  {t('ctaPrimary')}
</Link>
              
              {/* CTA Secundario - Abre el Modal */}
              <button 
                onClick={() => setIsOpen(true)}
                className="flex min-w-[140px] cursor-pointer items-center justify-center rounded-full h-12 px-6 border border-gray-200 bg-white hover:bg-gray-50 text-black text-base font-bold transition-colors group"
              >
                <PlayCircle className="mr-2 text-morado group-hover:scale-110 transition-transform" size={24} />
                {t('ctaSecondary')}
              </button>
            </div>

            <div className="pt-8 flex items-center gap-4 text-sm text-gray-500 font-medium">
              <div className="flex -space-x-3">
                {[1, 2, 3].map((i) => (
                  <div 
                    key={i}
                    className="w-10 h-10 rounded-full border-2 border-white bg-gray-200 bg-cover bg-center"
                    style={{ backgroundImage: `url('https://i.pravatar.cc/150?u=${i}')` }}
                  />
                ))}
              </div>
              <p>{t('socialProof', { count: 500 })}</p>
            </div>
          </motion.div>

          {/* Visual Section */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="relative order-1 lg:order-2"
          >
            <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl bg-gray-100 group relative">
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent z-10" />
              
              <div 
                className="w-full h-full bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                style={{ backgroundImage: "url('/images/portada.jpg')" }} 
              />

              <div className="absolute bottom-6 left-6 z-20 bg-white/90 backdrop-blur-md px-4 py-3 rounded-xl shadow-lg border border-white/50 flex gap-3 items-center">
                <div className="bg-cafe/10 p-2 rounded-full text-cafe">
                  <Zap size={20} fill="currentColor" />
                </div>
                <div className="flex flex-col">
                  <span className="text-[10px] text-gray-500 font-semibold uppercase tracking-wider">{t('techLabel')}</span>
                  <span className="text-sm font-bold text-black leading-tight">{t('techValue')}</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Modal del Video */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 backdrop-blur-sm p-4"
            onClick={() => setIsOpen(false)}
          >
            <motion.div 
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative w-full max-w-4xl aspect-video bg-black rounded-2xl overflow-hidden shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <button 
                onClick={() => setIsOpen(false)}
                className="absolute top-4 right-4 z-10 bg-white/10 hover:bg-white/20 text-white p-2 rounded-full transition-colors"
              >
                <X size={24} />
              </button>
              
              <iframe
                className="w-full h-full"
                src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default HeroSection;