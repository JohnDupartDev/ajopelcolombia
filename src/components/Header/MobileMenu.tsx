'use client';

import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';
// Si usas el sistema de navegación de next-intl, es mejor importar su Link
import Link from 'next/link';
import LanguageSwitcher from '../Language/LanguageSwitcher';
import { Instagram, Facebook, X } from "lucide-react";


export default function MobileMenu({ closeMenu }: { closeMenu: () => void }) {
  // Usamos el namespace "Menu" para mantener el JSON organizado
  const t = useTranslations("Index");
const socialLinks = {
    Facebook: "https://www.facebook.com/Ajopel",
    instagram: "https://www.instagram.com/ajopelcolombia"
  };
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 h-screen bg-white/95 backdrop-blur-xl z-[60] flex flex-col p-8"
    >
      <div className="flex justify-between items-center mb-12">
        <h2 className="text-text-main text-xl font-bold">{t('title')}</h2>
       <button 
  onClick={closeMenu} 
  className="bg-slate-100 hover:bg-slate-200 text-text-main p-2 rounded-full transition-colors duration-200 flex items-center justify-center" 
  aria-label="Close menu"
>
  <X className="w-6 h-6" />
</button>
      </div>

      <nav className="flex flex-col gap-6 text-center">
        {/* Usamos t('key') para cada enlace */}
        <Link href="/" className="text-2xl font-bold text-primary border-b border-primary/10 pb-2" onClick={closeMenu}>
          {t('home')}
        </Link>
        <Link href="/nosotros" className="text-2xl font-medium text-text-main" onClick={closeMenu}>
          {t('about')}
        </Link>
        <Link href="/productos" className="text-2xl font-medium text-text-main" onClick={closeMenu}>
          {t('products')}
        </Link>
        <Link href="/contacto" className="text-2xl font-medium text-text-main" onClick={closeMenu}>
          {t('contact')}
        </Link>
        <div className="flex justify-center w-full">
          <LanguageSwitcher/>
        </div>

        <div className="flex flex-col gap-4 items-center">
              <div className="flex gap-8 w-full justify-center">
                <Link href={socialLinks.Facebook} target="_blank" rel="noopener noreferrer">
                  <Facebook className="w-5 h-5 text-slate-400 hover:text-altum-violeta transition-all duration-300 transform hover:scale-110" />
                </Link>
               
                <Link href={socialLinks.instagram} target="_blank" rel="noopener noreferrer">
                  <Instagram className="w-5 h-5 text-slate-400 hover:text-altum-violeta transition-all duration-300 transform hover:scale-110" />
                </Link>
              </div>
            </div>
        <div className="mt-8">
           <button className="w-full rounded-full py-4 bg-morado text-white font-bold shadow-lg">
             {t('quoteButton')}
           </button>
        </div>
      </nav>
    </motion.div>
  );
}