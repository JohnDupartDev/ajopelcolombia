'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';
import { Factory, Timer, ShieldCheck } from 'lucide-react';

const ContactBenefits = () => {
  const t = useTranslations('ContactBenefits');

  const fadeIn = {
    initial: { opacity: 0, y: 15 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.5, ease: "easeOut" as const }
  };

  const benefits = [
    {
      title: t('features.tech.title'),
      desc: t('features.tech.desc'),
      icon: <Factory size={32} />,
      color: 'text-morado',
      bgColor: 'bg-morado/10'
    },
    {
      title: t('features.speed.title'),
      desc: t('features.speed.desc'),
      icon: <Timer size={32} />,
      color: 'text-cafe',
      bgColor: 'bg-cafe/10'
    },
    {
      title: t('features.quality.title'),
      desc: t('features.quality.desc'),
      icon: <ShieldCheck size={32} />,
      color: 'text-verde',
      bgColor: 'bg-verde/10'
    }
  ];

  return (
    <section className="w-full bg-white py-16">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-10">
        
        {/* Header */}
        <motion.div {...fadeIn} className="text-center mb-16">
          <span className="inline-block py-1.5 px-4 rounded-full bg-verde/10 text-verde text-xs font-black uppercase tracking-widest mb-4">
            {t('badge')}
          </span>
          <h3 className="text-3xl md:text-5xl font-black text-black tracking-tight">
            {t('title')}
          </h3>
        </motion.div>

        {/* Grid de Beneficios */}
        <div className="grid md:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              {...fadeIn}
              transition={{ ...fadeIn.transition, delay: index * 0.1 }}
              className="p-10 rounded-[2.5rem] bg-gray-50 border border-gray-100 hover:shadow-2xl hover:shadow-morado/5 transition-all duration-300 group"
            >
              <div className={`w-16 h-16 rounded-2xl ${benefit.bgColor} ${benefit.color} flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-300`}>
                {benefit.icon}
              </div>
              <h4 className="text-xl font-black mb-4 text-black tracking-tight">
                {benefit.title}
              </h4>
              <p className="text-gray-500 text-sm leading-relaxed font-medium">
                {benefit.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ContactBenefits;