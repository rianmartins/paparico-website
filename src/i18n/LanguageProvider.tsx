"use client";

import { createContext, useContext, useEffect, useMemo, useState } from "react";

import {
  SUPPORTED_LANGUAGES,
  translations,
  type Language,
  type TranslationContent,
} from "./translations";

type LanguageContextValue = {
  language: Language;
  setLanguage: (language: Language) => void;
  t: TranslationContent;
};

type LanguageProviderProps = {
  children: React.ReactNode;
  initialLanguage?: Language;
};

const LanguageContext = createContext<LanguageContextValue | null>(null);

export function LanguageProvider({ children, initialLanguage = "pt" }: LanguageProviderProps) {
  const safeLanguage: Language = SUPPORTED_LANGUAGES.includes(initialLanguage)
    ? initialLanguage
    : "pt";

  const [language, setLanguage] = useState<Language>(safeLanguage);

  useEffect(() => {
    setLanguage(safeLanguage);
  }, [safeLanguage]);

  const value = useMemo(
    () => ({
      language,
      setLanguage,
      t: translations[language],
    }),
    [language],
  );

  useEffect(() => {
    document.documentElement.lang = language;
  }, [language]);

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLanguage() {
  const context = useContext(LanguageContext);

  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }

  return context;
}

export function useTranslations() {
  return useLanguage().t;
}

export type { Language } from "./translations";
