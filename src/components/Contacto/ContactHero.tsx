/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useTranslations, useLocale } from 'next-intl';
import { MessageCircle, Phone, Mail, Send } from 'lucide-react';

const ContactHero = () => {
  const t = useTranslations('Contact');
  const locale = useLocale();

  const fadeIn = {
    initial: { opacity: 0, y: 15 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.5, ease: "easeOut" as const }
  };

  // Lógica de mensaje dinámico para WhatsApp
  const message = locale === 'es' 
    ? 'Hola, estoy en la página de contacto de AjopelColombia y me gustaría hablar con un asesor.' 
    : 'Hello, I am on the AjopelColombia contact page and I would like to speak with an advisor.';

  const whatsappUrl = `https://wa.me/573152024385?text=${encodeURIComponent(message)}`;

  return (
    <section className="w-full bg-white py-12 lg:py-20">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-10 grid lg:grid-cols-2 gap-8 lg:gap-16 items-start">
        
        {/* Lado Izquierdo: Información */}
        <motion.div {...fadeIn} className="flex flex-col gap-8">
          <div className="space-y-6">
            <span className="inline-block py-1.5 px-4 rounded-full bg-morado/10 text-morado text-xs font-black uppercase tracking-widest">
              {t('hero.badge')}
            </span>
            <h2 className="text-4xl md:text-6xl font-black text-black tracking-tighter leading-[1.1]">
              {t('hero.titleMain')} <br/> 
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-morado to-cafe">
                {t('hero.titleAccent')}
              </span>
            </h2>
            <p className="text-lg text-gray-500 max-w-md leading-relaxed font-medium">
              {t('hero.description')}
            </p>
            {/* Botón WhatsApp con internacionalización */}
            <a 
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-verde hover:bg-verde/90 text-white h-14 px-8 rounded-full text-base font-bold shadow-lg shadow-verde/20 transition-all transform hover:-translate-y-1 w-full sm:w-auto justify-center"
            >
              <MessageCircle size={22} />
              {t('hero.whatsapp')}
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Mapa Integrado */}
            <div className="md:col-span-2 relative h-64 rounded-3xl overflow-hidden shadow-sm border border-gray-100 group">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3903.6465478054633!2d-74.0552773!3d4.7477884999999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e3f85a01bb9d847%3A0xfacf987d2161897!2sAjopel%20Colombia!5e1!3m2!1ses-419!2sco!4v1770949637776!5m2!1ses-419!2sco" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen={true} 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                className="grayscale hover:grayscale-0 transition-all duration-700 opacity-90 hover:opacity-100"
              ></iframe>
              <div className="absolute bottom-4 left-4 z-10 pointer-events-none">
                <div className="bg-white/90 backdrop-blur-sm px-4 py-2 rounded-xl text-xs font-black text-black shadow-sm uppercase">
                  {t('info.location')}
                </div>
              </div>
            </div>

            {/* Teléfono */}
            <a 
              href="tel:+573152024385"
              className="bg-gray-50 p-6 rounded-3xl border border-gray-100 flex flex-col justify-between h-40 hover:shadow-md transition-all group"
            >
              <div className="w-10 h-10 rounded-full bg-morado/10 flex items-center justify-center text-morado group-hover:bg-morado group-hover:text-white transition-colors">
                <Phone size={20} />
              </div>
              <div>
                <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-1">{t('info.phoneLabel')}</p>
                <p className="text-lg font-black text-black">+57 315 202 4385</p>
              </div>
            </a>

            {/* Email */}
            <a 
              href="mailto:ajopel@hotmail.com"
              className="bg-gray-50 p-6 rounded-3xl border border-gray-100 flex flex-col justify-between h-40 hover:shadow-md transition-all group"
            >
              <div className="w-10 h-10 rounded-full bg-morado/10 flex items-center justify-center text-morado group-hover:bg-morado group-hover:text-white transition-colors">
                <Mail size={20} />
              </div>
              <div>
                <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-1">{t('info.emailLabel')}</p>
                <p className="text-lg font-black text-black truncate">ajopel@hotmail.com</p>
              </div>
            </a>
          </div>
        </motion.div>

        {/* Lado Derecho: Formulario Sticky */}
        <motion.div 
          {...fadeIn} 
          transition={{ ...fadeIn.transition, delay: 0.2 }}
          className="lg:sticky lg:top-24"
        >
          <div className="bg-white rounded-[2.5rem] p-8 md:p-10 shadow-2xl shadow-morado/5 border border-gray-100 relative overflow-hidden">
            <div className="absolute -top-10 -right-10 w-64 h-64 bg-morado/5 rounded-full blur-3xl pointer-events-none" />
            
            <div className="relative z-10">
              <h3 className="text-2xl font-black text-black mb-2 tracking-tight">{t('form.title')}</h3>
              <p className="text-gray-500 text-sm mb-8 font-medium">{t('form.subtitle')}</p>
              
              <form className="flex flex-col gap-5">
                <div className="space-y-1">
                  <span className="text-xs font-black text-gray-400 uppercase tracking-widest ml-4">{t('form.name')}</span>
                  <input className="w-full h-14 px-6 rounded-2xl bg-gray-50 border border-gray-100 focus:border-morado/30 focus:bg-white text-black font-bold placeholder:text-gray-300 text-sm transition-all outline-none" placeholder={t('form.namePlaceholder')} type="text"/>
                </div>
                
                <div className="space-y-1">
                  <span className="text-xs font-black text-gray-400 uppercase tracking-widest ml-4">{t('form.company')}</span>
                  <input className="w-full h-14 px-6 rounded-2xl bg-gray-50 border border-gray-100 focus:border-morado/30 focus:bg-white text-black font-bold placeholder:text-gray-300 text-sm transition-all outline-none" placeholder={t('form.companyPlaceholder')} type="text"/>
                </div>

                <div className="space-y-1">
                  <span className="text-xs font-black text-gray-400 uppercase tracking-widest ml-4">{t('form.email')}</span>
                  <input className="w-full h-14 px-6 rounded-2xl bg-gray-50 border border-gray-100 focus:border-morado/30 focus:bg-white text-black font-bold placeholder:text-gray-300 text-sm transition-all outline-none" placeholder={t('form.emailPlaceholder')} type="email"/>
                </div>

                <div className="space-y-1">
                  <span className="text-xs font-black text-gray-400 uppercase tracking-widest ml-4">{t('form.message')}</span>
                  <textarea className="w-full p-6 rounded-[2rem] bg-gray-50 border border-gray-100 focus:border-morado/30 focus:bg-white text-black font-bold placeholder:text-gray-300 text-sm resize-none transition-all outline-none" placeholder={t('form.messagePlaceholder')} rows={4}></textarea>
                </div>

                <button className="mt-4 w-full h-14 bg-morado hover:bg-morado/90 text-white font-black rounded-2xl shadow-xl shadow-morado/20 transition-all transform active:scale-95 flex items-center justify-center gap-2">
                  {t('form.submit')}
                  <Send size={18} />
                </button>
              </form>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactHero;