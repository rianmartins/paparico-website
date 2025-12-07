import { FC } from "react";
import Image from "next/image";
import Link from "next/link";

import styles from "./Footer.module.css";
import SocialMediaIcon from "../SocialMediaIcon";
import { MENU_NAKED, FACEBOOK_URL, INSTAGRAM_URL, WHATSAPP_URL } from "@/constants";
import { useLanguage, useTranslations } from "@/i18n/LanguageProvider";

const Footer: FC = () => {
  const { language } = useLanguage();
  const t = useTranslations();
  const productsHref = `/${language}#products`;

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
          <Link className={styles.link} href={productsHref}>
            {t.footer.products}
          </Link>
          <a className={styles.link} href={MENU_NAKED} target="_blank" rel="noopener noreferrer">
            {t.footer.naked}
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
