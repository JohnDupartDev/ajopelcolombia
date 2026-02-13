'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';
import { Star } from 'lucide-react';

const ProductReviews = () => {
  const t = useTranslations('ProductReviews');

  const fadeIn = {
    initial: { opacity: 0, y: 15 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.5, ease: "easeOut" as const }
  };

  const reviews = [
    { key: 'one', initials: 'JP' },
    { key: 'two', initials: 'MR' },
    { key: 'three', initials: 'CL' }
  ];

  return (
    <section className="w-full bg-white py-16">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-10 flex flex-col gap-12">
        
        {/* Header */}
        <motion.div {...fadeIn} className="text-center">
          <h3 className="text-3xl font-extrabold text-black tracking-tight">{t('title')}</h3>
          <p className="text-gray-500 text-lg mt-2">{t('subtitle')}</p>
        </motion.div>

        {/* Grid de testimonios */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <motion.div
              key={review.key}
              {...fadeIn}
              transition={{ ...fadeIn.transition, delay: index * 0.1 }}
              className="bg-gray-50 p-8 rounded-[2rem] flex flex-col gap-6 border border-gray-100 hover:shadow-lg transition-all"
            >
              {/* Estrellas */}
              <div className="flex gap-1 text-yellow-500">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={18} fill="currentColor" strokeWidth={0} />
                ))}
              </div>

              <p className="text-gray-600 text-base italic leading-relaxed font-medium">
                {t(`items.${review.key}.text`)}
              </p>

              <div className="flex items-center gap-4 mt-auto pt-6 border-t border-gray-200/50">
                <div className="size-10 rounded-full bg-morado/10 flex items-center justify-center font-black text-xs text-morado">
                  {review.initials}
                </div>
                <div>
                  <p className="text-sm font-black text-black">{t(`items.${review.key}.author`)}</p>
                  <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">
                    {t(`items.${review.key}.position`)}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductReviews;