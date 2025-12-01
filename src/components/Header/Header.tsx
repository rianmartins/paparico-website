import { FC, useState } from "react";
import Image from "next/image";

import styles from "./Header.module.css";
import Button from "../Button";
import { MENU_NAKED, WHATSAPP_URL } from "@/constants";

type HeaderProps = {};

const Header: FC<HeaderProps> = ({}) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <header className={styles.Header}>
      <Image
        className={styles.logo}
        src="/logo.png"
        alt="Paparico"
        width={226}
        height={62}
        priority
      />
      <nav className={styles.menu}>
        <a className={styles.item} href="#products">
          Produtos
        </a>
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
        <a className={styles.mobileItem} href="#products" onClick={closeMenu}>
          Produtos
        </a>
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
