'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';
import { Quote } from 'lucide-react';

const Testimonials = () => {
  const t = useTranslations('Testimonials');

  const testimonials = [
    {
      text: t('items.one.text'),
      author: t('items.one.author'),
      position: t('items.one.position'),
            image: 'https://i.pravatar.cc/150?u=maria'

    },
    {
      text: t('items.two.text'),
      author: t('items.two.author'),
      position: t('items.two.position'),
      image: 'https://i.pravatar.cc/150?u=carlos'
    },
    {
      text: t('items.three.text'),
      author: t('items.three.author'),
      position: t('items.three.position'),
      image: 'https://i.pravatar.cc/150?u=felipe'
    }
  ];

  return (
    <section className="w-full bg-gray-50 py-20 border-t border-gray-100">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-10">
        
        {/* Encabezado */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.span 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-morado font-bold tracking-wider text-sm uppercase mb-2 block"
          >
            {t('badge')}
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-black text-3xl md:text-4xl font-bold mb-4 tracking-tight"
          >
            {t('title')}
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-gray-600 text-lg"
          >
            {t('subtitle')}
          </motion.p>
        </div>

        {/* Grid de Testimonios */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 relative hover:shadow-xl transition-all duration-300 group"
            >
              {/* Icono de Cita Lucide */}
              <Quote 
                size={56} 
                className="text-morado/10 absolute top-6 right-6 transition-transform group-hover:scale-110 group-hover:text-morado/20" 
              />
              
              <p className="text-gray-600 mb-8 relative z-10 leading-relaxed italic text-lg">
                {item.text}
              </p>

              <div className="flex items-center gap-4 border-t border-gray-50 pt-6">
                <div 
                  className="w-14 h-14 rounded-full bg-gray-200 bg-cover bg-center border-2 border-white shadow-sm"
                  style={{ backgroundImage: `url(${item.image})` }}
                />
                <div>
                  <h4 className="font-bold text-black group-hover:text-morado transition-colors">
                    {item.author}
                  </h4>
                  <p className="text-xs text-gray-400 uppercase tracking-widest font-bold mt-0.5">
                    {item.position}
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

export default Testimonials;