import { FC, useState } from "react";
import cx from "classnames";
import Image from "next/image";
import Link from "next/link";

import styles from "./Header.module.css";
import Button from "../Button";
import { MENU_NAKED, WHATSAPP_URL } from "@/constants";

type HeaderProps = {
  className?: string;
};

const Header: FC<HeaderProps> = ({ className = "" }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <header className={cx(styles.Header, className)}>
      <Link href="/" className={styles.logo} aria-label="Voltar para a página inicial">
        <Image src="/logo.png" alt="Paparico" width={226} height={62} priority />
      </Link>
      <nav className={styles.menu}>
        <Link className={styles.item} href="/#products">
          Produtos
        </Link>
        <a className={styles.item} href={MENU_NAKED} target="_blank" rel="noopener noreferrer">
          Bolo de rolo naked
        </a>
        <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
          <Button>Faça sua encomenda</Button>
        </a>
      </nav>
      <button
        className={styles.hamburger}
        type="button"
        aria-label="Abrir menu de navegação"
        aria-expanded={isMenuOpen}
        onClick={() => setIsMenuOpen((open) => !open)}
      >
        <span />
        <span />
        <span />
      </button>
      <nav className={`${styles.mobileMenu} ${isMenuOpen ? styles.mobileMenuOpen : ""}`}>
        <Link className={styles.mobileItem} href="/#products" onClick={closeMenu}>
          Produtos
        </Link>
        <a
          className={styles.mobileItem}
          href={MENU_NAKED}
          target="_blank"
          rel="noopener noreferrer"
          onClick={closeMenu}
        >
          Bolo de rolo naked
        </a>
        <a
          className={styles.mobileItem}
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          onClick={closeMenu}
        >
          Faça sua encomenda
        </a>
      </nav>
    </header>
  );
};

export default Header;
