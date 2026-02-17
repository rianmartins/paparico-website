import { FC } from "react";
import Image from "next/image";

import styles from "./Footer.module.css";
import SocialMediaIcon from "../SocialMediaIcon";
import { FACEBOOK_URL, INSTAGRAM_URL, TIKTOK_URL, WHATSAPP_URL } from "@/constants";
import { useTranslations } from "@/i18n/LanguageProvider";
import Button from "../Button";

const Footer: FC = () => {
  const t = useTranslations();

  return (
    <div className={styles.Footer}>
      <main className={styles.main}>
        <div className={styles.socialMediaContainer}>
          <div className={styles.logo}>
            <Image src="/logo.png" alt="Paparico" width={226} height={62} priority />
          </div>
          <div className={styles.socialMedia}>
            <SocialMediaIcon icon="/icons/tiktok.svg" link={TIKTOK_URL} />
            <SocialMediaIcon icon="/icons/instagram.svg" link={INSTAGRAM_URL} />
            <SocialMediaIcon icon="/icons/facebook.svg" link={FACEBOOK_URL} />
          </div>
        </div>
        <div className={styles.siteName}>https://paparico.pt</div>
        <nav className={styles.siteMap}>
          <div className={styles.link} onClick={() => window.scrollTo(0, 0)}>
            {t.footer.backToTop}
          </div>
          <div className={styles.link} onClick={() => window.scrollTo(0, 0)}>
            {t.footer.terms}
          </div>
          <Button onClick={() => window.open(WHATSAPP_URL, "_blank")}>{t.footer.contact}</Button>
        </nav>
      </main>
    </div>
  );
};

export default Footer;
