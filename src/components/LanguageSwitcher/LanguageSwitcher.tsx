"use client";

import cx from "classnames";
import { FC } from "react";
import { usePathname, useRouter } from "next/navigation";

import styles from "./LanguageSwitcher.module.css";
import { useLanguage, useTranslations } from "@/i18n/LanguageProvider";
import { SUPPORTED_LANGUAGES, type Language } from "@/i18n/translations";

type LanguageSwitcherProps = {
  className?: string;
};

const LanguageSwitcher: FC<LanguageSwitcherProps> = ({ className = "" }) => {
  const { language, setLanguage } = useLanguage();
  const t = useTranslations();
  const router = useRouter();
  const pathname = usePathname();

  const handleLanguageChange = (option: Language) => {
    if (option === language) return;

    const segments = pathname.split("/").filter(Boolean);
    const rest = segments.slice(1);
    const hash = typeof window !== "undefined" ? window.location.hash : "";
    const newPath = `/${option}${rest.length ? `/${rest.join("/")}` : ""}${hash}`;

    setLanguage(option);
    router.push(newPath);
  };

  return (
    <div
      className={cx(styles.LanguageSwitcher, className)}
      role="group"
      aria-label={t.common.languageSwitcher}
    >
      {SUPPORTED_LANGUAGES.map((option) => (
        <button
          key={option}
          type="button"
          className={cx(styles.button, { [styles.active]: language === option })}
          onClick={() => handleLanguageChange(option)}
          aria-pressed={language === option}
        >
          {option.toUpperCase()}
        </button>
      ))}
    </div>
  );
};

export default LanguageSwitcher;
