'use client';

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Link } from "@/app/i18n/navigation";
import DesktopNav from "./DesktopNav"; 
import MobileMenu from "./MobileMenu"; 
import { useHeaderState, useBodyScrollLock } from "./headerHooks"; 

import Image from "next/image";
import { Menu } from "lucide-react";

export default function Header() {
  const [navbarOpen, setNavbarOpen] = useState(false);
  const { sticky } = useHeaderState(); // Usamos sticky del hook
  
  // Esta es la línea que congela el scroll
  useBodyScrollLock(navbarOpen);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      sticky 
        ? 'bg-white/90 backdrop-blur-lg shadow-lg border-b border-morado/5 py-2' 
        : 'bg-white border-b border-gray-100 py-4'
    }`}>
      <div className="max-w-[1280px] mx-auto px-6 sm:px-10 h-16  flex items-center justify-between">
        
        {/* Logo Section */}
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
        
        {/* Navegación de Escritorio */}
        <DesktopNav sticky={sticky} />
        
        {/* Sección de Acción Móvil */}
        <div className="lg:hidden flex items-center gap-2">
          <motion.button 
            whileTap={{ scale: 0.9 }}
            onClick={() => setNavbarOpen(true)}
            className={`flex items-center justify-center size-12 rounded-2xl transition-colors ${
              sticky ? 'bg-morado text-white' : 'bg-gray-100 text-black'
            }`}
          >
            <Menu size={28} strokeWidth={2.5} />
          </motion.button>
        </div>
      </div>

      <AnimatePresence mode="wait">
        {navbarOpen && (
          <motion.div
            key="mobile-menu-wrapper"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10, transition: { duration: 0.4, ease: "easeInOut" } }}
            transition={{ 
              type: "spring", 
              stiffness: 260, 
              damping: 26 
            }}
            className="fixed inset-0 z-[60]"
          >
            <MobileMenu 
              key="mobile-menu-ajopel" 
              closeMenu={() => setNavbarOpen(false)} 
            />
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}