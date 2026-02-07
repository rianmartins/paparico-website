import { FC } from "react";
import Image from "next/image";
import Link from "next/link";

import styles from "./Footer.module.css";
import SocialMediaIcon from "../SocialMediaIcon";
import { FACEBOOK_URL, INSTAGRAM_URL, WHATSAPP_URL } from "@/constants";
import { useLanguage, useTranslations } from "@/i18n/LanguageProvider";

const Footer: FC = () => {
  const { language } = useLanguage();
  const t = useTranslations();

  return (
    <div className={styles.Footer}>
      <main className={styles.main}>
        <div className={styles.socialMediaContainer}>
          <div className={styles.logo}>
            <Image src="/logo.png" alt="Paparico" width={226} height={62} priority />
          </div>
          <div className={styles.socialMedia}>
            <SocialMediaIcon icon="/icons/facebook.svg" link={FACEBOOK_URL} />
            <SocialMediaIcon icon="/icons/instagram.svg" link={INSTAGRAM_URL} />
          </div>
        </div>
        <nav className={styles.siteMap}>
          <Link className={styles.link} href={`/${language}#products`}>
            {t.footer.products}
          </Link>
          <a className={styles.link} href={`/${language}/eventos`}>
            {t.footer.events}
          </a>
          <a className={styles.link} href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
            {t.footer.order}
          </a>
        </nav>
      </main>
    </div>
  );
};

export default Footer;
