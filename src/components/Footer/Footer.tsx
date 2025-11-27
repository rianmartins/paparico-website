import { FC } from "react";

import styles from "./Footer.module.css";
import SocialMediaIcon from "../SocialMediaIcon";
import { FACEBOOK_URL, INSTAGRAM_URL, WHATSAPP_URL } from "@/constants";

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
          <div>Produtos</div>
          <div>Bolo de rolo naked</div>
          <div>Faça a sua encomenda</div>
        </div>
      </main>
    </div>
  );
};

export default Footer;
