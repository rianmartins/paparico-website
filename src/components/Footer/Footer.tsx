import { FC, useState } from "react";
import Image from "next/image";
import Link from "next/link";

import { FACEBOOK_URL, INSTAGRAM_URL, TIKTOK_URL, WHATSAPP_URL } from "@/constants";
import { useLanguage, useTranslations } from "@/i18n/LanguageProvider";

import SocialMediaIcon from "../SocialMediaIcon";
import Button from "../Button";

import TermsModal from "./TermsModal/TermsModal";
import styles from "./Footer.module.css";

const Footer: FC = () => {
  const [open, setOpen] = useState(false);

  const t = useTranslations();
  const { language } = useLanguage();

  return (
    <footer className={styles.Footer}>
      <div className={styles.main}>
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
        <nav className={styles.siteMap}>
          <Link href={`/${language}`} className={styles.link}>
            {t.footer.backToTop}
          </Link>
          <div className={styles.link} onClick={() => setOpen(true)}>
            {t.footer.terms}
          </div>
          <Button onClick={() => window.open(WHATSAPP_URL, "_blank")}>{t.footer.contact}</Button>
        </nav>
      </div>
      <TermsModal open={open} onClose={() => setOpen(false)} />
    </footer>
  );
};

export default Footer;
