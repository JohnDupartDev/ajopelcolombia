/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';

import React from 'react';
import { Link } from '@/app/i18n/navigation';
import { useTranslations, useLocale } from 'next-intl';
import Image from 'next/image';
// Importación de iconos Lucide
import { Facebook, Instagram, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  const t = useTranslations('Footer');
  const locale = useLocale();

  // Lógica de mensaje dinámico para el enlace de pedidos personalizados
  const customOrderMessage = locale === 'es' 
    ? 'Hola, me gustaría obtener información sobre pedidos personalizados de Ajopel.' 
    : 'Hello, I would like to get information about custom orders from Ajopel.';

  const whatsappUrl = `https://wa.me/573152024385?text=${encodeURIComponent(customOrderMessage)}`;

  return (
    <footer className="bg-white border-t border-gray-100">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-10 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          
          {/* Brand & Social */}
          <div className="flex flex-col gap-6">
            <div className="flex items-center gap-2 text-black">
               <Link className="flex items-center shrink-0 h-full group" href="/">
                        <div className="relative w-[70px] h-[70px] md:w-[70px] md:h-[70px] transition-transform duration-300 group-active:scale-95">
                          <Image 
                            src="/logo.svg"
                            alt="Ajopel Colombia" 
                            fill 
                            className="object-contain object-left"
                            priority
                          />
                        </div>
                      </Link>
            </div>
            <p className="text-gray-500 text-sm leading-relaxed">
              {t('description')}
            </p>
            <div className="flex gap-5 mt-2">
              <a 
                className="text-gray-400 hover:text-morado transition-all hover:scale-110" 
                href="https://www.facebook.com/Ajopel"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Facebook size={20} />
              </a>
              <a 
                className="text-gray-400 hover:text-morado transition-all hover:scale-110" 
                href="https://www.instagram.com/ajopelcolombia"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Instagram size={20} />
              </a>
            </div>
          </div>

          {/* Company Links */}
          <div className="flex flex-col gap-4">
            <h3 className="font-bold text-black uppercase text-xs tracking-widest">{t('companyTitle')}</h3>
            <div className="flex flex-col gap-3">
              <Link className="text-gray-500 hover:text-morado text-sm transition-colors" href={"/nosotros" as any}>{t('links.about')}</Link>
              <Link className="text-gray-500 hover:text-morado text-sm transition-colors" href={"/nosotros" as any}>{t('links.process')}</Link>
            </div>
          </div>

          {/* Product Links */}
          <div className="flex flex-col gap-4">
            <h3 className="font-bold text-black uppercase text-xs tracking-widest">{t('productsTitle')}</h3>
            <div className="flex flex-col gap-3">
              <Link className="text-gray-500 hover:text-cafe text-sm transition-colors" href={"/productos" as any}>{t('links.peeled')}</Link>
              <Link className="text-gray-500 hover:text-cafe text-sm transition-colors" href={"/productos" as any}>{t('links.paste')}</Link>
              {/* Enlace de WhatsApp para Pedidos Personalizados */}
              <a 
                className="text-gray-500 hover:text-cafe text-sm transition-colors" 
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                {t('links.custom')}
              </a>
            </div>
          </div>

          {/* Contact Info */}
          <div className="flex flex-col gap-4">
            <h3 className="font-bold text-black uppercase text-xs tracking-widest">{t('contactTitle')}</h3>
            <div className="flex flex-col gap-4 text-sm text-gray-500">
              <div className="flex items-start gap-3">
                <MapPin size={18} className="text-morado shrink-0" />
                <p>Calle 165a # 54c – 11 <br /> Bogotá, Colombia</p>
              </div>
              <div className="flex items-center gap-3">
                <Mail size={18} className="text-morado shrink-0" />
                <a className="hover:text-morado transition-colors" href="mailto:ajopel@hotmail.com">ajopel@hotmail.com</a>
              </div>
              <div className="flex items-center gap-3">
                <Phone size={18} className="text-morado shrink-0" />
                <a className="hover:text-morado transition-colors" href="tel:+573152024385">3152024385 – 3188383172</a>
              </div>
            </div>
          </div>

        </div>

        {/* Legal Footer */}
        <div className="border-t border-gray-100 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-400 text-sm">{t('legal.rights')}</p>
          <div className="flex gap-6">
            <Link className="text-gray-400 hover:text-morado text-sm transition-colors" href={"/privacy" as any}>{t('legal.privacy')}</Link>
            <Link className="text-gray-400 hover:text-morado text-sm transition-colors" href={"/terms" as any}>{t('legal.terms')}</Link>
            <a 
              href="https://zipaquiradigital.com" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-gray-400 hover:text-morado text-sm transition-colors"
            >
              {t('legal.diseño')}
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;