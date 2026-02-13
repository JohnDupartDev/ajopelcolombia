'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';
import { Leaf, Timer, ShieldCheck, Headphones } from 'lucide-react';

const WhyChoose = () => {
  const t = useTranslations('WhyChoose');

  const items = [
    {
      title: t('features.sustainability.title'),
      desc: t('features.sustainability.desc'),
      icon: <Leaf size={28} />,
      bgColor: 'bg-verde/10',
      textColor: 'text-verde'
    },
    {
      title: t('features.efficiency.title'),
      desc: t('features.efficiency.desc'),
      icon: <Timer size={28} />,
      bgColor: 'bg-cafe/10',
      textColor: 'text-cafe'
    },
    {
      title: t('features.quality.title'),
      desc: t('features.quality.desc'),
      icon: <ShieldCheck size={28} />,
      bgColor: 'bg-morado/10',
      textColor: 'text-morado'
    },
    {
      title: t('features.support.title'),
      desc: t('features.support.desc'),
      icon: <Headphones size={28} />,
      bgColor: 'bg-cafe/10',
      textColor: 'text-cafe'
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-[1100px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
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
            transition={{ delay: 0.1 }}
            className="text-gray-500 text-lg"
          >
            {t('subtitle')}
          </motion.p>
        </div>

        {/* Grid de Beneficios */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="flex flex-col items-center text-center p-8 bg-white rounded-3xl border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 group"
            >
              <div className={`size-16 rounded-full ${item.bgColor} ${item.textColor} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                {item.icon}
              </div>
              <h4 className="text-xl font-bold text-black mb-3">
                {item.title}
              </h4>
              <p className="text-gray-500 text-sm leading-relaxed">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChoose;