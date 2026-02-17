import { FC, useState } from "react";
import cx from "classnames";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

import styles from "./Header.module.css";
import Button from "../Button";
import LanguageSwitcher from "../LanguageSwitcher";
import { WHATSAPP_URL } from "@/constants";
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

  return (
    <header className={cx(styles.Header, className)}>
      <Link href={`/${language}`} className={styles.logo} aria-label={t.header.homeAria}>
        <Image src="/logo-branca.png" alt="Paparico" width={226} height={62} priority />
      </Link>
      <nav className={styles.menu}>
        <Link className={styles.item} href={`/${language}#products`} scroll={isHome}>
          {t.header.products}
        </Link>
        <Link className={styles.item} href={`/${language}#information`}>
          {t.header.information}
        </Link>
        <Link className={styles.item} href={`/${language}#reseller`}>
          {t.header.reseller}
        </Link>
        <Link className={styles.item} href={`/${language}#reviews`}>
          {t.header.reviews}
        </Link>
        <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
          <Button variant="secondary">{t.header.order}</Button>
        </a>
        {/* <LanguageSwitcher /> */}
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
        <Link
          className={styles.mobileItem}
          href={`/${language}#products`}
          onClick={closeMenu}
          scroll={isHome}
        >
          {t.header.products}
        </Link>
        <Link className={styles.mobileItem} href={`/${language}#information`} onClick={closeMenu}>
          {t.header.information}
        </Link>
        <Link className={styles.mobileItem} href={`/${language}#reseller`} onClick={closeMenu}>
          {t.header.reseller}
        </Link>
        <Link className={styles.mobileItem} href={`/${language}#reviews`} onClick={closeMenu}>
          {t.header.reviews}
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
