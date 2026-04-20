"use client";

import cx from "classnames";
import { FC } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

import styles from "./LanguageSwitcher.module.css";
import { useTranslations, useLanguage } from "@/i18n/LanguageProvider";
import { type Language } from "@/i18n/translations";

type LanguageSwitcherProps = {
  className?: string;
};

const LanguageSwitcher: FC<LanguageSwitcherProps> = ({ className = "" }) => {
  const { language } = useLanguage();
  const t = useTranslations();
  const pathname = usePathname();

  const getLanguagePath = (option: Language) => {
    const segments = pathname.split("/").filter(Boolean);
    const rest = segments.slice(1);

    return `/${option}${rest.length ? `/${rest.join("/")}` : ""}`;
  };

  return (
    <div
      className={cx(styles.LanguageSwitcher, className)}
      role="group"
      aria-label={t.common.languageSwitcher}
    >
      <Link
        href={getLanguagePath("pt")}
        hrefLang="pt-PT"
        className={cx({ [styles.active]: language === "pt" })}
        aria-current={language === "pt" ? "page" : undefined}
      >
        PT
      </Link>
      <div>-</div>
      <Link
        href={getLanguagePath("en")}
        hrefLang="en"
        className={cx({ [styles.active]: language === "en" })}
        aria-current={language === "en" ? "page" : undefined}
      >
        EN
      </Link>
    </div>
  );
};

export default LanguageSwitcher;
