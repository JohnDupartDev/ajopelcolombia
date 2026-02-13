'use client';

import React from 'react';
import { useTranslations, useLocale } from 'next-intl'; // Importamos useLocale
import { Leaf, Settings, ShieldCheck } from 'lucide-react';

const Differentiators = () => {
  const t = useTranslations('Differentiators');
  const locale = useLocale(); // Detecta si es 'es', 'en', etc.

  const cards = [
    {
      title: t('cards.clean.title'),
      desc: t('cards.clean.desc'),
      icon: <Leaf size={32} />,
      color: 'bg-verde',
      lightColor: 'bg-green-50',
      textColor: 'text-verde'
    },
    {
      title: t('cards.tech.title'),
      desc: t('cards.tech.desc'),
      icon: <Settings size={32} />,
      color: 'bg-morado',
      lightColor: 'bg-purple-50',
      textColor: 'text-morado'
    },
    {
      title: t('cards.fresh.title'),
      desc: t('cards.fresh.desc'),
      icon: <ShieldCheck size={32} />,
      color: 'bg-cafe',
      lightColor: 'bg-orange-50',
      textColor: 'text-cafe'
    }
  ];

  // Usamos el locale directamente para decidir el mensaje
  const message = locale === 'es' 
    ? 'Hola, vengo desde la web de AjopelColombia y me gustaría recibir más información sobre sus productos.' 
    : 'Hello, I am visiting the AjopelColombia website and I would like to receive more information about your products.';

  const whatsappUrl = `https://wa.me/573152024385?text=${encodeURIComponent(message)}`;

  return (
    <section className="w-full bg-gray-50 py-16 lg:py-24">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-10">
        <div className="flex flex-col gap-12">
          
          {/* Header de la sección */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
            <div className="max-w-2xl">
              <h2 className="text-black text-3xl md:text-4xl font-bold leading-tight mb-4 tracking-tight">
                {t('title')}
              </h2>
              <p className="text-gray-600 text-lg">
                {t('subtitle')}
              </p>
            </div>
            {/* CTA Escritorio */}
            <a 
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden md:flex cursor-pointer bg-morado text-white px-8 py-3 rounded-full font-bold hover:bg-[#7a0d22] transition-all shadow-lg shadow-morado/20 active:scale-95 items-center justify-center"
            >
              {t('cta')}
            </a>
          </div>

          {/* Grid de Diferenciadores */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {cards.map((card, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 hover:shadow-xl transition-all hover:-translate-y-2 duration-300 group relative overflow-hidden"
              >
                {/* Línea de acento lateral dinámica */}
                <div className={`absolute top-0 left-0 w-1.5 h-full ${card.color} opacity-0 group-hover:opacity-100 transition-opacity`} />
                
                {/* Icon Container */}
                <div className={`w-14 h-14 rounded-full ${card.lightColor} flex items-center justify-center ${card.textColor} mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  {card.icon}
                </div>

                <h3 className="text-xl font-bold text-black mb-3">
                  {card.title}
                </h3>
                <p className="text-gray-500 leading-relaxed text-sm md:text-base">
                  {card.desc}
                </p>
              </div>
            ))}
          </div>

          {/* CTA para Móvil */}
          <div className="md:hidden mt-4 text-center">
            <a 
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full cursor-pointer bg-morado text-white px-8 py-4 rounded-full font-bold shadow-lg shadow-morado/20 text-center active:scale-95"
            >
              {t('cta')}
            </a>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Differentiators;