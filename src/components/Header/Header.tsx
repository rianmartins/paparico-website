import { FC } from "react";
import Image from "next/image";

import styles from "./Header.module.css";
import Button from "../Button";
import { MENU_NAKED, WHATSAPP_URL } from "@/constants";

type HeaderProps = {};

const Header: FC<HeaderProps> = ({}) => {
  return (
    <div className={styles.Header}>
      <Image
        className={styles.logo}
        src="/logo.png"
        alt="Paparico"
        width={226}
        height={62}
        priority
      />
      <div className={styles.menu}>
        <a className={styles.item} href="#products">
          Produtos
        </a>
        <a className={styles.item} href={MENU_NAKED} target="_blank" rel="noopener noreferrer">
          Bolo de rolo naked
        </a>
        {/* <div className={styles.item}>Para o seu evento</div> */}
        <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
          <Button>Faça sua encomenda</Button>
        </a>
      </div>
    </div>
  );
};

export default Header;
