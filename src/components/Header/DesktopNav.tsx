/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';

import { Link, usePathname } from '@/app/i18n/navigation';
import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import LanguageSwitcher from '@/components/Language/LanguageSwitcher';

export default function DesktopNav({ sticky }: { sticky: boolean }) {
  const t = useTranslations("Index");
  const pathname = usePathname();

  const navLinks = [
    { name: t("home"), href: "/" },
    { name: t("about"), href: "/nosotros" },
    { name: t("products"), href: "/productos" },
    { name: t("contact"), href: "/contacto" },
  ];

  return (
    <div className="hidden lg:flex flex-1 justify-end gap-8 items-center">
      <div className="flex items-center gap-8">
        {navLinks.map((link) => {
          const isActive = pathname === link.href;

          return (
            <Link
              key={link.href}
              href={link.href as any}
              className={`relative py-1 text-base font-bold transition-colors duration-200 ${
                isActive ? "text-morado" : "text-black hover:text-morado "
              }`}
            >
              <span className="relative z-10">{link.name}</span>

              {/* Barra Animada: Solo se muestra si está activo */}
              {isActive && (
                <motion.div
                  layoutId="nav-underline"
                  className="absolute bottom-0 left-0 right-0 h-0.5 bg-morado"
                  initial={false}
                  transition={{ type: "spring", stiffness: 380, damping: 30 }}
                />
              )}
            </Link>
          );
        })}
      </div>

      <div className="h-6 w-px bg-gray-200 mx-2"></div>

      <div className="flex items-center gap-4">
        <LanguageSwitcher />

        <button className="flex cursor-pointer items-center justify-center overflow-hidden rounded-full h-10 px-6 bg-morado hover:bg-verde transition-colors text-white text-sm font-bold leading-normal tracking-[0.015em] shadow-lg shadow-primary/20">
          <span className="truncate"> {t('cotizar')}</span>
        </button>
      </div>
    </div>
  );
}