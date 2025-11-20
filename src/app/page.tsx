"use client";

import Image from "next/image";

import Button from "@/components/Button";

import styles from "./page.module.css";
import SocialMediaIcon from "@/components/SocialMediaIcon";
import { FACEBOOK_URL, INSTAGRAM_URL, MENU_LINK, WHATSAPP_URL } from "@/constants";

export default function Home() {
  const onOpenMenu = () => {
    window.open(MENU_LINK, "_blank");
  };

  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <Image
          className={styles.logo}
          src="/logo.png"
          alt="Paparico"
          width={200}
          height={150}
          priority
        />
        <div className={styles.info}>
          <h1>Em breve</h1>
          <p>
            Estamos trabalhando no nosso site! Enquanto isso, pode acessar o nosso menu clicando no
            botão abaixo
          </p>
          <Button onClick={onOpenMenu}>Menu</Button>
        </div>
        <div className={styles.footer}>
          <SocialMediaIcon icon="/icons/facebook.png" link={FACEBOOK_URL} />
          <SocialMediaIcon icon="/icons/instagram.png" link={INSTAGRAM_URL} />
          <SocialMediaIcon icon="/icons/whatsapp.png" link={WHATSAPP_URL} />
        </div>
      </main>
    </div>
  );
}
