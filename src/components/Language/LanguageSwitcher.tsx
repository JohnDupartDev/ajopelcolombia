/* eslint-disable @typescript-eslint/ban-ts-comment */
'use client';

import { useLocale } from "next-intl";
import { usePathname, useRouter } from "@/app/i18n/navigation";
import { useParams } from "next/navigation";

const LanguageSwitcher = () => {
  const locale = useLocale() as "en" | "es";
  const pathname = usePathname();
  const router = useRouter();
  const params = useParams();

  const changeLanguage = (newLocale: "en" | "es") => {
    if (newLocale === locale) return;

    const currentParams = params ? { ...params } : {};

    // @ts-ignore
    delete currentParams['__next_pages_route_params__'];

    router.replace(
      // @ts-ignore
      { pathname, params: currentParams },
      { locale: newLocale }
    );
  };

  return (
    <div className="flex items-center gap-2 text-sm font-medium">
      <button
        onClick={() => changeLanguage("es")}
        className={`transition-all duration-300 px-1 ${
          locale === "es" 
            ? "font-bold text-morado border-b-2 border-primary" 
            : "text-gray-400 hover:text-morado"
        }`}
      >
        ES
      </button>
      
      <span className="text-gray-300 font-light">|</span>
      
      <button
        onClick={() => changeLanguage("en")}
        className={`transition-all duration-300 px-1 ${
          locale === "en" 
            ? "font-bold text-morado border-b-2 border-primary" 
            : "text-gray-400 hover:text-morado"
        }`}
      >
        EN
      </button>
    </div>
  );
};

export default LanguageSwitcher;