/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';
import { Star, ArrowRight } from 'lucide-react';
import { Link } from '@/app/i18n/navigation';

const ContactSuccess = () => {
  const t = useTranslations('ContactSuccess');

  const fadeIn = {
    initial: { opacity: 0, y: 15 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.5, ease: "easeOut" as const }
  };

  return (
    <section className="w-full bg-white pb-20">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-10">
        <motion.div 
          {...fadeIn}
          className="bg-morado rounded-[2.5rem] p-8 md:p-16 relative overflow-hidden shadow-2xl shadow-morado/20"
        >
          {/* Decoración de fondo (Blob) */}
          <div className="absolute top-0 right-0 w-full h-full opacity-10 pointer-events-none">
            <svg className="absolute right-0 bottom-0 w-96 h-96 text-white transform translate-x-1/4 translate-y-1/4" fill="currentColor" viewBox="0 0 200 200">
              <path d="M45,-75C58.3,-69.3,69.6,-59.6,78.2,-48.2C86.8,-36.8,92.7,-23.7,91.6,-10.9C90.5,1.9,82.4,14.4,73.4,25.4C64.4,36.4,54.5,45.9,43.6,53.8C32.7,61.7,20.8,68,8.3,69.5C-4.2,71,-17.5,67.7,-29.6,61.4C-41.7,55.1,-52.6,45.8,-61.7,34.8C-70.8,23.8,-78.1,11.1,-77.3,-1.3C-76.5,-13.7,-67.6,-25.8,-57.1,-36.1C-46.6,-46.4,-34.5,-54.9,-22.3,-61.4C-10.1,-67.9,2.2,-72.4,15.1,-75.9L45,-75Z" transform="translate(100 100)"></path>
            </svg>
          </div>

          <div className="relative z-10 flex flex-col md:flex-row gap-12 items-center">
            {/* Texto de introducción */}
            <div className="md:w-1/3 text-white">
              <span className="inline-block py-1 px-4 rounded-full bg-white/20 text-white text-[10px] font-black uppercase tracking-widest mb-6 border border-white/20">
                {t('badge')}
              </span>
              <h3 className="text-3xl md:text-4xl font-black mb-4 tracking-tight leading-tight">
                {t('title')}
              </h3>
              <p className="text-white/70 mb-8 font-medium">
                {t('description')}
              </p>
              <Link 
                href={"/nosotros" as any} 
                className="inline-flex items-center text-white font-bold hover:gap-3 transition-all gap-2 group"
              >
                {t('moreStories')}
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>

            {/* Testimonio destacado */}
            <div className="md:w-2/3 w-full">
              <div className="bg-white/10 backdrop-blur-md border border-white/20 p-8 md:p-10 rounded-[2rem] text-white">
                <div className="flex gap-1 mb-6 text-verde">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={18} fill="currentColor" strokeWidth={0} />
                  ))}
                </div>
                <p className="text-xl md:text-2xl italic mb-8 font-medium leading-relaxed">
                  {t('testimonial.text')}
                </p>
                <div className="flex items-center gap-4">
                  <div className="size-12 rounded-full bg-white/20 flex items-center justify-center text-sm font-black border border-white/30">
                    CR
                  </div>
                  <div>
                    <p className="font-black text-base">{t('testimonial.author')}</p>
                    <p className="text-xs text-white/60 font-bold uppercase tracking-wider">{t('testimonial.position')}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSuccess;