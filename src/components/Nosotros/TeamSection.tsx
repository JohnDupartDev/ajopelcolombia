'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';
import { User, Users, HardHat, Microscope } from 'lucide-react';

const TeamSection = () => {
  const t = useTranslations('Team');

  const fadeIn = {
    initial: { opacity: 0, y: 10 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.5, ease: "easeOut" as const }
  };

  const team = [
    { 
      name: t('members.director.name'), 
      role: t('members.director.role'), 
      icon: <User size={48} />, 
      hoverColor: 'group-hover:border-morado/20',
      textHover: 'group-hover:text-morado'
    },
    { 
      name: t('members.operations.name'), 
      role: t('members.operations.role'), 
      icon: <Users size={48} />, 
      hoverColor: 'group-hover:border-cafe/20',
      textHover: 'group-hover:text-cafe'
    },
    { 
      name: t('members.plant.name'), 
      role: t('members.plant.role'), 
      icon: <HardHat size={48} />, 
      hoverColor: 'group-hover:border-morado/20',
      textHover: 'group-hover:text-morado'
    },
    { 
      name: t('members.quality.name'), 
      role: t('members.quality.role'), 
      icon: <Microscope size={48} />, 
      hoverColor: 'group-hover:border-cafe/20',
      textHover: 'group-hover:text-cafe'
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-[1100px] mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h3 
          {...fadeIn}
          className="text-3xl font-extrabold text-black mb-16 text-center tracking-tight"
        >
          {t('title')}
        </motion.h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
          {team.map((member, index) => (
            <motion.div
              key={index}
              {...fadeIn}
              transition={{ ...fadeIn.transition, delay: index * 0.1 }}
              className="group text-center"
            >
              <div className={`w-32 h-32 mx-auto rounded-full bg-gray-50 mb-6 overflow-hidden relative border-4 border-white shadow-xl transition-all duration-300 ${member.hoverColor} flex items-center justify-center text-gray-300 ${member.textHover}`}>
                {member.icon}
              </div>
              <h5 className={`text-lg font-bold text-black transition-colors duration-300 ${member.textHover}`}>
                {member.name}
              </h5>
              <p className="text-sm text-gray-500 font-bold uppercase tracking-wider mt-1">
                {member.role}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;