/* eslint-disable react/no-unescaped-entities */
'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';
import { Award, ShieldCheck, Mail } from 'lucide-react';

const TeamSection = () => {
  const t = useTranslations('Team');

  const fadeIn = {
    initial: { opacity: 0, y: 15 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6, ease: "easeOut" as const }
  };

  const imagePath = "/images/Marley-cardenas.jpg";

  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="max-w-[1100px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center">
          
          <motion.div {...fadeIn} className="text-center mb-16">
            <span className="text-morado font-bold tracking-[0.2em] text-xs uppercase mb-3 block">
              {t('badge')}
            </span>
            <h3 className="text-3xl md:text-5xl font-black text-black tracking-tight">
              {t('title')}
            </h3>
          </motion.div>

          <div className="relative w-full max-w-4xl">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-morado/5 rounded-full blur-3xl -z-10" />
            
            <motion.div 
              {...fadeIn}
              className="bg-gray-50 rounded-[3rem] p-8 md:p-16 border border-gray-100 shadow-2xl shadow-morado/5 flex flex-col md:flex-row items-center gap-12 md:gap-20"
            >
              <div className="relative shrink-0">
                <div className="absolute inset-0 bg-morado rounded-[2.5rem] rotate-6 scale-95 opacity-20" />
                <div className="w-64 h-80 md:w-80 md:h-[450px] rounded-[2.5rem] bg-gray-200 overflow-hidden border-8 border-white shadow-2xl relative z-10">
                  <div 
                    className="w-full h-full bg-cover bg-center flex items-center justify-center text-gray-400"
                    style={{ backgroundImage: `url(${imagePath})` }}
                  />
                </div>
                
                <div className="absolute -bottom-6 -right-6 md:right-[-20px] z-20 bg-white p-6 rounded-3xl shadow-xl border border-gray-50 flex items-center gap-4">
                  <div className="bg-morado/10 p-3 rounded-2xl text-morado">
                    <Award size={32} />
                  </div>
                  <div>
                    <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest leading-none mb-1">
                      {t('members.director.label')}
                    </p>
                    <p className="text-xl font-black text-black leading-none">
                      {t('members.director.subLabel')}
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex flex-col gap-8 text-center md:text-left">
                <div className="space-y-4">
                  <h4 className="text-4xl md:text-5xl font-black text-black tracking-tighter">
                    {t('members.director.name')}
                  </h4>
                  <div className="h-1.5 w-20 bg-morado rounded-full mx-auto md:mx-0" />
                </div>

                <p className="text-lg text-gray-600 leading-relaxed font-medium italic">
                  "{t('members.director.description')}"
                </p>

                <div className="grid grid-cols-2 gap-4 pt-4">
                  <div className="flex items-center gap-3 text-gray-500">
                    <ShieldCheck className="text-verde" size={24} />
                    <span className="text-sm font-bold uppercase tracking-tight">
                      {t('members.director.values.safety')}
                    </span>
                  </div>
                  <a 
  href="mailto:ajopel@hotmail.com" 
  className="flex items-center gap-3 text-gray-500 hover:text-morado transition-colors group"
>
  <Mail className="text-cafe group-hover:text-morado transition-colors" size={24} />
  <span className="text-sm font-bold uppercase tracking-tight">
    {t('members.director.values.contact')}
  </span>
</a>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;