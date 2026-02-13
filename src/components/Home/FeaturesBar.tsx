'use client';

import React from 'react';
import { useTranslations } from 'next-intl';
import { PiggyBank, Timer, ShieldCheck } from 'lucide-react';

const FeaturesBar = () => {
  const t = useTranslations('FeaturesBar');

  return (
    <div className="bg-morado py-10 text-white relative overflow-hidden">
      {/* Patrón de fondo sutil */}
      <div 
        className="absolute inset-0 opacity-10" 
        style={{ 
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='20' height='20' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='1' fill-rule='evenodd'%3E%3Ccircle cx='3' cy='3' r='1.5'/%3E%3Ccircle cx='13' cy='13' r='1.5'/%3E%3C/g%3E%3C/svg%3E")` 
        }}
      />

      <div className="max-w-[1280px] mx-auto px-6 sm:px-10 relative z-10">
        <div className="flex flex-col md:flex-row justify-center items-center md:items-center gap-10 md:gap-16">
          
          {/* Métrica 1: Ahorro */}
          <div className="flex items-center gap-5 group w-full max-w-[280px] md:w-auto justify-start md:justify-center">
            <div className="shrink-0 p-3 bg-white/10 rounded-xl group-hover:bg-verde/20 transition-all duration-300 shadow-inner">
              <PiggyBank size={32} className="text-verde" strokeWidth={2.5} />
            </div>
            <span 
              className="font-bold text-lg leading-tight text-left"
              dangerouslySetInnerHTML={{ __html: t('savings') }}
            />
          </div>

          <div className="hidden md:block w-px h-12 bg-white/20" />
          {/* Separador visual opcional para móvil (línea horizontal sutil) */}
          <div className="block md:hidden w-full h-px bg-white/5" />

          {/* Métrica 2: Entrega */}
          <div className="flex items-center gap-5 group w-full max-w-[280px] md:w-auto justify-start md:justify-center">
            <div className="shrink-0 p-3 bg-white/10 rounded-xl group-hover:bg-verde/20 transition-all duration-300 shadow-inner">
              <Timer size={32} className="text-verde" strokeWidth={2.5} />
            </div>
            <span 
              className="font-bold text-lg leading-tight text-left"
              dangerouslySetInnerHTML={{ __html: t('delivery') }}
            />
          </div>

          <div className="hidden md:block w-px h-12 bg-white/20" />
          <div className="block md:hidden w-full h-px bg-white/5" />

          {/* Métrica 3: Calidad */}
          <div className="flex items-center gap-5 group w-full max-w-[280px] md:w-auto justify-start md:justify-center">
            <div className="shrink-0 p-3 bg-white/10 rounded-xl group-hover:bg-verde/20 transition-all duration-300 shadow-inner">
              <ShieldCheck size={32} className="text-verde" strokeWidth={2.5} />
            </div>
            <span 
              className="font-bold text-lg leading-tight text-left"
              dangerouslySetInnerHTML={{ __html: t('quality') }}
            />
          </div>

        </div>
      </div>
    </div>
  );
};

export default FeaturesBar;