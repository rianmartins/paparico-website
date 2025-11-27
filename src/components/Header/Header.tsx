import { FC } from "react";
import Image from "next/image";

import styles from "./Header.module.css";
import Button from "../Button";

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
        <div className={styles.item}>Produtos</div>
        <div className={styles.item}>Bolo de rolo naked</div>
        {/* <div className={styles.item}>Para o seu evento</div> */}
        <Button>Faça sua encomenda</Button>
      </div>
    </div>
  );
};

export default Header;
