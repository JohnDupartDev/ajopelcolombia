'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useTranslations, useLocale } from 'next-intl';
import { Tractor, Wind, CheckCircle2, Box } from 'lucide-react';

const ProcessSection = () => {
  const t = useTranslations('Process');
  const locale = useLocale();

  const steps = [
    {
      title: t('steps.selection.title'),
      desc: t('steps.selection.desc'),
      icon: <Tractor size={36} />,
    },
    {
      title: t('steps.injection.title'),
      desc: t('steps.injection.desc'),
      icon: <Wind size={36} />,
    },
    {
      title: t('steps.quality.title'),
      desc: t('steps.quality.desc'),
      icon: <CheckCircle2 size={36} />,
    },
    {
      title: t('steps.packaging.title'),
      desc: t('steps.packaging.desc'),
      icon: <Box size={36} />,
    },
  ];

  // Lógica de mensaje dinámico para WhatsApp basada en el locale
  const message = locale === 'es' 
    ? 'Hola, me gustaría conocer más sobre el proceso de producción de AjopelColombia.' 
    : 'Hello, I would like to learn more about the AjopelColombia production process.';

  const whatsappUrl = `https://wa.me/573152024385?text=${encodeURIComponent(message)}`;

  return (
    <section className="w-full bg-white py-16 lg:py-24 border-b border-gray-100">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-10">
        
        {/* Encabezado */}
        <div className="text-center mb-16">
          <motion.span 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-morado font-bold tracking-wider text-sm uppercase mb-2 block"
          >
            {t('badge')}
          </motion.span>
          <h2 className="text-black text-3xl md:text-4xl font-bold mb-4 tracking-tight">
            {t('title')}
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            {t('description')}
          </p>
        </div>

        {/* Pasos del Proceso */}
        <div className="relative grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8">
          
          {/* Línea de conexión animada (Solo Desktop) */}
          <div className="hidden md:block absolute top-12 left-[10%] right-[10%] h-0.5 bg-gray-100 -z-10 overflow-hidden">
            <motion.div 
              initial={{ x: '-100%' }}
              whileInView={{ x: '0%' }}
              transition={{ duration: 1.5, ease: "easeInOut" }}
              className="w-full h-full bg-gradient-to-r from-verde via-morado to-verde opacity-30"
            />
          </div>

          {steps.map((step, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              viewport={{ once: true }}
              className="flex flex-col items-center text-center group"
            >
              <div className="w-24 h-24 bg-white border-4 border-gray-50 rounded-full flex items-center justify-center mb-6 shadow-sm group-hover:border-verde group-hover:shadow-md transition-all duration-300 z-10 text-gray-400 group-hover:text-verde">
                {step.icon}
              </div>
              <h4 className="font-bold text-lg text-black mb-2 group-hover:text-morado transition-colors">
                {step.title}
              </h4>
              <p className="text-sm text-gray-500 leading-relaxed max-w-[200px]">
                {step.desc}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Botón de Acción - WhatsApp Link */}
        <div className="mt-16 text-center">
          <a 
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-black text-white px-10 py-4 rounded-full font-bold hover:bg-morado transition-all duration-300 shadow-xl shadow-gray-200 active:scale-95"
          >
            {t('cta')}
          </a>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;