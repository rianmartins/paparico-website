import { type ReactNode } from "react";

import { LanguageProvider, type Language } from "@/i18n/LanguageProvider";
import { SUPPORTED_LANGUAGES } from "@/i18n/translations";

export const dynamicParams = false;

export function generateStaticParams() {
  return SUPPORTED_LANGUAGES.map((lang) => ({ lang }));
}

export default function LangLayout({
  children,
  params,
}: {
  children: ReactNode;
  params: { lang: string };
}) {
  const paramLang = params.lang as Language;
  const lang = SUPPORTED_LANGUAGES.includes(paramLang) ? paramLang : ("pt" as Language);

  return <LanguageProvider initialLanguage={lang}>{children}</LanguageProvider>;
}
