'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';
import {MousePointerClick , Wind, ShieldCheck, Box } from 'lucide-react';

const TechProcess = () => {
  const t = useTranslations('TechProcess');

  const steps = [
    {
      title: t('steps.selection.title'),
      desc: t('steps.selection.desc'),
icon: <MousePointerClick size={36} />,
      accent: 'bg-morado',
      highlight: false
    },
    {
      title: t('steps.peeling.title'),
      desc: t('steps.peeling.desc'),
      icon: <Wind size={36} className="animate-pulse" />,
      accent: 'bg-morado',
      highlight: true
    },
    {
      title: t('steps.quality.title'),
      desc: t('steps.quality.desc'),
      icon: <ShieldCheck size={36} />,
      accent: 'bg-cafe',
      highlight: false
    },
    {
      title: t('steps.packing.title'),
      desc: t('steps.packing.desc'),
      icon: <Box size={36} />,
      accent: 'bg-morado',
      highlight: false
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-[1100px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-20">
          <motion.h3 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-extrabold text-black mb-4 tracking-tight"
          >
            {t('title')}
          </motion.h3>
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-gray-500 text-lg"
          >
            {t('subtitle')}
          </motion.p>
        </div>

        {/* Línea de Tiempo y Pasos */}
        <div className="relative">
          {/* Línea de conexión (Solo Desktop) */}
          <div className="hidden md:block absolute top-12 left-0 w-full h-1 bg-gray-100 -z-0">
            <motion.div 
              initial={{ width: 0 }}
              whileInView={{ width: '100%' }}
              transition={{ duration: 1.5, ease: "easeInOut" }}
              className="h-full bg-gradient-to-r from-morado/20 via-morado/50 to-cafe/20"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-4 relative z-10">
            {steps.map((step, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="group flex flex-col items-center text-center gap-6"
              >
                <div className="relative">
                  <div className={`size-24 rounded-full border-4 border-gray-50 shadow-xl flex items-center justify-center transition-all duration-300 group-hover:scale-110 
                    ${step.highlight 
                      ? 'bg-morado text-white shadow-morado/30 border-white' 
                      : 'bg-white text-gray-400 group-hover:text-morado group-hover:border-morado/10'}`}
                  >
                    {step.icon}
                  </div>
                  {/* Número del paso */}
                  <div className={`absolute -top-2 -right-2 size-9 rounded-full flex items-center justify-center text-sm font-black border-2 shadow-sm
                    ${step.highlight 
                      ? 'bg-white text-morado border-morado' 
                      : `bg-white text-white ${step.accent} border-white`}`}
                  >
                    {index + 1}
                  </div>
                </div>

                <div className="max-w-[180px]">
                  <h4 className={`text-lg font-extrabold mb-1 transition-colors ${step.highlight ? 'text-morado' : 'text-black'}`}>
                    {step.title}
                  </h4>
                  <p className="text-sm text-gray-500 font-medium leading-snug">
                    {step.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechProcess;