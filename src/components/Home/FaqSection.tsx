'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';
import { ChevronDown } from 'lucide-react';

const FaqSection = () => {
  const t = useTranslations('Faq');

  const faqs = [
    { q: t('items.freshness.q'), a: t('items.freshness.a') },
    { q: t('items.chemicals.q'), a: t('items.chemicals.a') },
    { q: t('items.minimum.q'), a: t('items.minimum.a') },
    { q: t('items.samples.q'), a: t('items.samples.a') },
  ];

  return (
    <section className="w-full bg-white py-20">
      <div className="max-w-[1000px] mx-auto px-4 sm:px-10">
        
        {/* Encabezado */}
        <div className="text-center mb-16">
          <motion.span 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-morado font-bold tracking-widest text-sm uppercase mb-3 block"
          >
            {t('badge')}
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-black text-3xl md:text-4xl font-bold tracking-tight"
          >
            {t('title')}
          </motion.h2>
        </div>

        {/* Acordeón de FAQs */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <details 
              key={index}
             
              className="group bg-gray-50 rounded-2xl p-6 [&_summary::-webkit-details-marker]:hidden border border-transparent hover:border-morado/10 transition-all duration-300 open:bg-white open:shadow-xl open:border-gray-100"
            >
              <summary className="flex cursor-pointer items-center justify-between gap-1.5 font-bold text-black text-lg select-none outline-none">
                <span className="group-open:text-morado transition-colors duration-300">
                  {faq.q}
                </span>
                <ChevronDown 
                  className="transition-transform duration-300 group-open:-rotate-180 text-gray-400 group-open:text-morado shrink-0" 
                  size={24} 
                />
              </summary>
              
              <div className="overflow-hidden">
                <p className="mt-4 leading-relaxed text-gray-600 pl-6 border-l-2 border-verde/40 animate-in fade-in slide-in-from-top-2 duration-300">
                  {faq.a}
                </p>
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FaqSection;