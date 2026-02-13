'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';
import { Flag, Eye } from 'lucide-react';

const MissionVision = () => {
  const t = useTranslations('MissionVision');

  return (
    <section className="py-20 bg-white relative overflow-hidden">
      {/* Decoración de fondo sutil */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-7xl mx-auto pointer-events-none">
        <div className="absolute top-1/4 left-10 w-64 h-64 bg-morado/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-10 w-64 h-64 bg-cafe/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-[1100px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          
          {/* Tarjeta de Misión */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="group p-8 lg:p-10 rounded-3xl bg-[#fbf9fb] border border-gray-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
          >
            <div className="size-16 bg-morado/10 text-morado rounded-2xl flex items-center justify-center mb-6 group-hover:bg-morado group-hover:text-white transition-all duration-300 shadow-sm shadow-morado/10">
              <Flag size={32} />
            </div>
            <h3 className="text-2xl font-extrabold text-black mb-4">
              {t('missionTitle')}
            </h3>
            <p className="text-gray-600 leading-relaxed text-lg">
              {t('missionDesc')}
            </p>
          </motion.div>

          {/* Tarjeta de Visión */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="group p-8 lg:p-10 rounded-3xl bg-[#fbf9fb] border border-gray-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
          >
            <div className="size-16 bg-cafe/10 text-cafe rounded-2xl flex items-center justify-center mb-6 group-hover:bg-cafe group-hover:text-white transition-all duration-300 shadow-sm shadow-cafe/10">
              <Eye size={32} />
            </div>
            <h3 className="text-2xl font-extrabold text-black mb-4">
              {t('visionTitle')}
            </h3>
            <p className="text-gray-600 leading-relaxed text-lg">
              {t('visionDesc')}
            </p>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default MissionVision;