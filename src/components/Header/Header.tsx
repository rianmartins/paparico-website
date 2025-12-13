import { FC, useState } from "react";
import cx from "classnames";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

import styles from "./Header.module.css";
import Button from "../Button";
import LanguageSwitcher from "../LanguageSwitcher";
import { MENU_NAKED, WHATSAPP_URL } from "@/constants";
import { useLanguage, useTranslations } from "@/i18n/LanguageProvider";

type HeaderProps = {
  className?: string;
};

const Header: FC<HeaderProps> = ({ className = "" }) => {
  const { language } = useLanguage();
  const t = useTranslations();
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const closeMenu = () => setIsMenuOpen(false);
  const isHome = pathname === `/${language}` || pathname === `/${language}/`;
  const productsHref = `/${language}#products`;
  const eventsHref = `/${language}/eventos`;

  return (
    <header className={cx(styles.Header, className)}>
      <Link href={`/${language}`} className={styles.logo} aria-label={t.header.homeAria}>
        <Image src="/logo.png" alt="Paparico" width={226} height={62} priority />
      </Link>
      <nav className={styles.menu}>
        <Link className={styles.item} href={productsHref} scroll={isHome}>
          {t.header.products}
        </Link>
        <a className={styles.item} href={MENU_NAKED} target="_blank" rel="noopener noreferrer">
          {t.header.naked}
        </a>
        <Link className={styles.item} href={eventsHref}>
          {t.header.events}
        </Link>
        <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
          <Button>{t.header.order}</Button>
        </a>
        <LanguageSwitcher />
      </nav>
      <button
        className={styles.hamburger}
        type="button"
        aria-label={isMenuOpen ? t.header.closeMenu : t.header.openMenu}
        aria-expanded={isMenuOpen}
        onClick={() => setIsMenuOpen((open) => !open)}
      >
        <span />
        <span />
        <span />
      </button>
      <nav className={`${styles.mobileMenu} ${isMenuOpen ? styles.mobileMenuOpen : ""}`}>
        <Link className={styles.mobileItem} href={productsHref} onClick={closeMenu} scroll={isHome}>
          {t.header.products}
        </Link>
        <a
          className={styles.mobileItem}
          href={MENU_NAKED}
          target="_blank"
          rel="noopener noreferrer"
          onClick={closeMenu}
        >
          {t.header.naked}
        </a>
        <Link className={styles.mobileItem} href={eventsHref} onClick={closeMenu}>
          {t.header.events}
        </Link>
        <a
          className={styles.mobileItem}
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          onClick={closeMenu}
        >
          {t.header.order}
        </a>
        <LanguageSwitcher className={styles.mobileLanguageSwitcher} />
      </nav>
    </header>
  );
};

export default Header;
