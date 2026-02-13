'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';
import { ChevronDown } from 'lucide-react';

const ProductFaq = () => {
  const t = useTranslations('ProductFaq');

  const fadeIn = {
    initial: { opacity: 0, y: 15 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.5, ease: "easeOut" as const }
  };

  const faqs = [
    { key: 'minOrder' },
    { key: 'delivery' },
    { key: 'shelfLife' }
  ];

  return (
    <section className="w-full bg-white py-20">
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        
        <motion.h3 
          {...fadeIn}
          className="text-3xl font-black text-black mb-10 text-center tracking-tight"
        >
          {t('title')}
        </motion.h3>

        <div className="flex flex-col gap-4">
          {faqs.map((faq, index) => (
            <motion.details 
              key={faq.key}
              {...fadeIn}
              transition={{ ...fadeIn.transition, delay: index * 0.1 }}
              className="group bg-white rounded-2xl border border-gray-200 overflow-hidden transition-all duration-300 open:border-morado/30 open:shadow-lg"
            >
              <summary className="flex justify-between items-center font-bold cursor-pointer list-none p-6 text-gray-800 hover:bg-gray-50 transition-colors outline-none">
                <span className="group-open:text-morado transition-colors">
                  {t(`questions.${faq.key}.q`)}
                </span>
                <ChevronDown 
                  size={20} 
                  className="text-gray-400 transition-transform duration-300 group-open:rotate-180 group-open:text-morado" 
                />
              </summary>
              
              <div className="px-6 pb-6 text-gray-600 text-sm leading-relaxed border-t border-gray-50 pt-4 animate-in fade-in slide-in-from-top-2">
                {t(`questions.${faq.key}.a`)}
              </div>
            </motion.details>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductFaq;