import { createContext, useContext, useState, useEffect, ReactNode } from "react";
import { translations, Language, TranslationKey } from "./translations";

interface LanguageContextType {
  lang: Language;
  setLang: (lang: Language) => void;
  t: (key: TranslationKey) => string;
  isRTL: boolean;
}

const LanguageContext = createContext<LanguageContextType | null>(null);

function detectLanguage(): Language {
  const saved = localStorage.getItem("evently-lang") as Language | null;
  if (saved && (saved === "ar" || saved === "en")) return saved;
  
  const browserLang = navigator.language || (navigator as any).userLanguage || "en";
  return browserLang.startsWith("ar") ? "ar" : "en";
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Language>(detectLanguage);

  const setLang = (newLang: Language) => {
    setLangState(newLang);
    localStorage.setItem("evently-lang", newLang);
  };

  const t = (key: TranslationKey): string => {
    return translations[lang][key] || translations.en[key] || key;
  };

  const isRTL = lang === "ar";

  useEffect(() => {
    document.documentElement.dir = isRTL ? "rtl" : "ltr";
    document.documentElement.lang = lang;
  }, [lang, isRTL]);

  return (
    <LanguageContext.Provider value={{ lang, setLang, t, isRTL }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLanguage must be used within LanguageProvider");
  return ctx;
}
