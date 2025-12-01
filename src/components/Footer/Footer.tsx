import { FC } from "react";

import styles from "./Footer.module.css";
import SocialMediaIcon from "../SocialMediaIcon";
import { MENU_NAKED, FACEBOOK_URL, INSTAGRAM_URL, WHATSAPP_URL } from "@/constants";

const Footer: FC = () => {
  return (
    <div className={styles.Footer}>
      <main className={styles.main}>
        <div className={styles.socialMediaContainer}>
          <div className={styles.logo}>
            <img src="/logo.png" alt="Paparico" width={226} height={62} />
          </div>
          <div className={styles.socialMedia}>
            <SocialMediaIcon icon="/icons/facebook.svg" link={FACEBOOK_URL} />
            <SocialMediaIcon icon="/icons/instagram.svg" link={INSTAGRAM_URL} />
          </div>
        </div>
        <div className={styles.siteMap}>
          <a className={styles.link} href="#products">
            Produtos
          </a>
          <a className={styles.link} href={MENU_NAKED} target="_blank" rel="noopener noreferrer">
            Bolo de rolo naked
          </a>
          <a className={styles.link} href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
            Faça a sua encomenda
          </a>
        </div>
      </main>
    </div>
  );
};

export default Footer;
