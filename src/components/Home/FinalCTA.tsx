'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useTranslations, useLocale } from 'next-intl';
import { Send, PhoneCall } from 'lucide-react';

const FinalCTA = () => {
  const t = useTranslations('FinalCTA');
  const locale = useLocale();

  // Mensajes personalizados según el idioma
  const messagePrimary = locale === 'es' 
    ? 'Hola, me gustaría solicitar una cotización personalizada de sus productos.' 
    : 'Hello, I would like to request a personalized quote for your products.';

  const messageSecondary = locale === 'es' 
    ? 'Hola, me gustaría hablar con un asesor comercial de Ajopel.' 
    : 'Hello, I would like to speak with an Ajopel sales representative.';

  // Generación de URLs de WhatsApp
  const whatsappUrlPrimary = `https://wa.me/573152024385?text=${encodeURIComponent(messagePrimary)}`;
  const whatsappUrlSecondary = `https://wa.me/573152024385?text=${encodeURIComponent(messageSecondary)}`;

  return (
    <section className="w-full bg-white pb-20 pt-10">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-10">
        
        {/* Card Principal con Gradiente y Blur */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="bg-morado rounded-[2rem] p-10 md:p-20 text-center relative overflow-hidden shadow-2xl shadow-morado/30"
        >
          {/* Patrón de puntos decorativo */}
          <div 
            className="absolute top-0 left-0 w-full h-full opacity-10" 
            style={{ 
              backgroundImage: 'radial-gradient(circle at 10px 10px, white 2px, transparent 0)', 
              backgroundSize: '40px 40px' 
            }}
          />
          
          {/* Luces de fondo (Blur effects) usando tus colores verde y café */}
          <div className="absolute -top-24 -left-24 w-64 h-64 bg-verde rounded-full blur-[100px] opacity-20" />
          <div className="absolute -bottom-24 -right-24 w-64 h-64 bg-cafe rounded-full blur-[100px] opacity-30" />

          <div className="relative z-10 max-w-2xl mx-auto flex flex-col items-center">
            <h2 className="text-white text-3xl md:text-5xl font-extrabold mb-6 tracking-tight leading-tight">
              {t('title')}
            </h2>
            <p className="text-white/80 text-lg md:text-xl mb-10 font-medium leading-relaxed">
              {t('description')}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 w-full justify-center">
              {/* Botón Primario - Verde - Enlace a WhatsApp */}
              <a 
                href={whatsappUrlPrimary}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-verde hover:bg-green-600 text-white font-bold text-lg h-14 px-10 rounded-full shadow-lg shadow-verde/20 transition-all hover:scale-105 flex items-center justify-center gap-2 active:scale-95"
              >
                {t('ctaPrimary')}
                <Send size={20} />
              </a>

              {/* Botón Secundario - Glassmorphism - Enlace a WhatsApp */}
              <a 
                href={whatsappUrlSecondary}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/30 text-white font-bold text-lg h-14 px-10 rounded-full transition-all flex items-center justify-center hover:scale-105 active:scale-95"
              >
                <PhoneCall size={20} className="mr-2" />
                {t('ctaSecondary')}
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FinalCTA;