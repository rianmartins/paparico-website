"use client";

import Header from "@/components/Header";
import ProductItem from "@/components/ProductItem";
import Footer from "@/components/Footer";

import styles from "./page.module.css";
import Button from "@/components/Button";
import { WHATSAPP_URL } from "@/constants";
import { christmasMenu } from "@/data/menuDeNatal";

export default function ChristmasMenuPage() {
  return (
    <div className={styles.page}>
      <div className={styles.heroSection}>
        <img className={styles.heroImage} alt="Celebre o Natal" src="/products/natal/hero.jpg" />
        <div className={styles.heroOverlay} aria-hidden="true" />
      </div>
      <main className={styles.main}>
        <Header className={styles.header} />
        <div className={styles.container}>
          <h1 className={styles.title}>Natal paparico</h1>
          <p className={styles.subtitle}>por uma mesa cheia de lembranças</p>
        </div>
      </main>
      <section className={styles.content}>
        <div className={styles.contentInner}>
          <h1 className={styles.contentTitle}>Do paparico á mesa: para um Natal especial </h1>
          <p>
            Neste Natal, o Paparico veste a mesa com delicadeza, aconchego e o afeto das festas que
            aquecem o coração. Cada criação nasce para celebrar encontros, envolver famílias e
            transformar pequenos instantes em lembranças doces.
          </p>
          <p>
            Doçuras que perfumam a casa, texturas que abraçam e sabores que contam histórias — assim
            nasce o nosso menu natalino. Um convite para saborear a magia das festas com o encanto
            único do Paparico.
          </p>
          <div className={styles.products}>
            {christmasMenu.map((item) => (
              <ProductItem
                key={item.title}
                image={item.image}
                title={item.title}
                description={item.description}
                price={item.price}
                moreInfo={item.moreInfo}
              />
            ))}
          </div>
          <Button
            size="large"
            onClick={() => window.open(WHATSAPP_URL, "_blank")}
            className={styles.button}
          >
            Encomendar
          </Button>
          <div className={styles.info}>
            <p>
              Nesta época de grande movimento na nossa cozinha, o Paparico irá operar exclusivamente
              com retiradas na nossa sede, na Amadora. Assim garantimos que cada pedido recebe o
              cuidado e a qualidade que o Natal merece.
            </p>
            <h3>Horários de retirada:</h3>
            <ul>
              <li>23/12 — das 08h às 16h30</li>
              <li>24/12 — das 08h às 15h</li>
            </ul>
            <p>
              Agradecemos a compreensão e desejamos um Natal cheio de sabor e simplicidade — do
              Paparico para a vossa mesa.
            </p>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
