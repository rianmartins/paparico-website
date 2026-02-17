"use client";

import Image from "next/image";

import GridItem from "@/components/GridItem";
import ReviewItem from "@/components/ReviewItem";
import Footer from "@/components/Footer";

import { useTranslations } from "@/i18n/LanguageProvider";

import styles from "./page.module.css";
import HeroHeader from "@/components/HeroHeader";
import Form from "@/components/Form";
import InputLabel from "@/components/Form/InputLabel";
import Input from "@/components/Form/Input";
import TextArea from "@/components/Form/TextArea";
import Button from "@/components/Button";
import GridText from "@/components/GridText";
import FormField from "@/components/Form/FormField";

export default function Home() {
  const t = useTranslations();

  return (
    <div className={styles.page}>
      <HeroHeader
        className={styles.header}
        heroClassName={styles.heroImage}
        image="/hero-image.jpg"
        imageAlt={t.home.heroSection.alt}
        title={t.home.heroSection.title}
        subtitle={t.home.heroSection.subtitle}
      />
      <section className={`${styles.content}`}>
        <div className={styles.info}>
          <div className={styles.title}>{t.home.title}</div>
          <div className={styles.text}>{t.home.text}</div>
        </div>
        <div className={styles.productShowcase}>
          <div className={styles.fullWidth}>
            <Image src="/products/Image_1.png" alt="Paparico" width={690} height={700} />
          </div>
          <div className={styles.columnFullWidth}>
            <div>
              <Image src="/products/Image_2.png" alt="Paparico" width={360} height={350} />
            </div>
            <div className={styles.textRight}>
              <Image src="/products/Image_3.png" alt="Paparico" width={360} height={350} />
            </div>
          </div>
        </div>
      </section>
      <Image
        className={styles.coverImage}
        src="/Image_cover.png"
        alt="Paparico cover"
        width={1440}
        height={800}
        priority
      />
      <section className={styles.content}>
        <div id="products" className={styles.products}>
          <h1 className={styles.title}>{t.home.productsTitle}</h1>
          <div className={styles.productsGrid}>
            <GridItem
              sizes={[
                { title: "Bolo de rolo tradicional 450g", price: 14.5 },
                { title: "Bolo de rolo tradicional 900g", price: 24 },
              ]}
              flavors={[
                "Massa tradicional com goiabada",
                "Massa tradicional com doce de leite",
                "Massa tradicional com brigadeiro branco",
              ]}
              image="/products/bolo-de-rolo-tradicional.jpg"
            />
            <GridItem
              sizes={[
                { title: "Bolo de rolo c/ toppings 550g", price: 22.5 },
                { title: "Bolo de rolo c/ toppings 1100g", price: 38 },
              ]}
              flavors={[
                "Goiabada com brigadeiro de parmesão",
                "Doce de leite com brigadeiro de cappuccino",
              ]}
              image="/products/bolo-de-rolo-toppings-doce-de-leite.png"
            />
            <GridText
              title="Camadas de tradição. Sabor de casa."
              text={[
                "Cada produto do Paparico é feito artesanalmente, com atenção a cada detalhe e respeito absoluto à tradição do bolo de rolo pernambucano.",
                "Aqui, cada escolha carrega sabor, memória e aquele afeto simples que transforma um bolo em um abraço.",
              ]}
            />
            <GridItem
              sizes={[{ title: "Fatia de bolo de rolo 50g", price: 2.5 }]}
              flavors={[
                "Massa tradicional com goiabada",
                "Massa tradicional com doce de leite",
                "Massa tradicional com brigadeiro branco",
              ]}
              image="/products/bolo-de-rolo-fatia.jpg"
            />
            <GridItem
              sizes={[{ title: "Bolo de rolo no pote 150g", price: 7 }]}
              flavors={[
                "Goiabada com brigadeiro de parmesão",
                "Churros com Doce de leite",
                "Chocolate com Brigadeiro branco",
              ]}
              image="/products/bolo-de-pote.jpg"
            />
            <GridItem
              sizes={[{ title: "Biscoito casadinho 120g", price: 4 }]}
              flavors={["Sabor goiabada"]}
              image="/products/casadinho.png"
            />
            <GridItem
              sizes={[{ title: "Naked bolo de rolo 4/4.5Kg", price: 88 }]}
              flavors={[
                "Goiabada com brigadeiro de parmesão c/ frutas",
                "Doce de leite com brigadeiro de cappuccino c/ brigadeiros",
              ]}
              image="/products/bolo-de-rolo-naked-recheado.jpg"
            />
            <GridText
              title="Seu evento ainda mais especial."
              text={[
                "Cada celebração tem a sua própria história — e nós gostamos de fazer parte dela.No Paparico, desenvolvemos pedidos sob encomenda, pensados de acordo com a sua ideia, o seu momento e o cuidado que a ocasião merece.",
                "Entre em contacto connosco e vamos criar juntos algo especial, feito à mão e com afeto.",
              ]}
            />
            <GridItem
              sizes={[{ title: "Mini bolo de rolo 50g", price: 2.5 }]}
              flavors={[
                "Massa tradicional com goiabada",
                "Massa tradicional com doce de leite",
                "Massa de chocolate com brigadeiro branco",
              ]}
              image="/products/events/mini.jpg"
            />
          </div>
        </div>
        <div id="images" className={styles.gallery}>
          <h1 className={`${styles.title} ${styles.galleryTitle}`}>{t.home.galleryTitle}</h1>
          <div className={styles.galleryGrid}>
            <div className={styles.row}>
              <Image
                src="/gallery/Image_1.png"
                alt="Paparico"
                width={445}
                height={408}
                className={styles.alignStart}
              />
              <Image src="/gallery/Image_2.png" alt="Paparico" width={621} height={519} />
              <Image
                src="/gallery/Image_3.png"
                alt="Paparico"
                width={268}
                height={268}
                className={styles.alignEnd}
              />
            </div>
            <div className={styles.row}>
              <Image src="/gallery/Image_4.png" alt="Paparico" width={667} height={667} />
              <Image
                src="/gallery/Image_5.png"
                alt="Paparico"
                width={333}
                height={333}
                className={styles.alignStart}
              />
              <Image
                src="/gallery/Image_6.png"
                alt="Paparico"
                width={333}
                height={333}
                className={styles.alignEnd}
              />
            </div>
          </div>
        </div>
        <div id="information" className={styles.infoOrders}>
          <h1 className={styles.title}>{t.home.info.title}</h1>
          <h2 className={styles.subtitle}>{t.home.info.subtitle}</h2>
          <div className={styles.ordersLayout}>
            <div className={`${styles.text} ${styles.ordersText}`}>
              {t.home.info.paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
              <h3>{t.home.info.shippingTitle}</h3>
              <p>{t.home.info.shippingDescription}</p>
              <h3>{t.home.info.pickupTitle}</h3>
              <p>{t.home.info.pickupDescription}</p>
            </div>
            <Image src="/info-1.png" alt="Paparico" width={594} height={862} />
            <Image
              src="/info-2.png"
              alt="Paparico"
              width={302}
              height={429}
              className={styles.alignEnd}
            />
          </div>
        </div>
        <div id="reseller" className={styles.reseller}>
          <h1 className={styles.title}>{t.home.reseller.title}</h1>
          <div className={styles.fullWidth}>
            <h3 className={styles.resellerHeading}>{t.home.reseller.heading}</h3>
            <div className={styles.resellerContent}>
              <Image src="/fatias.png" alt="Paparico" width={480} height={625} />
              <div className={styles.resellerForm}>
                <div className={styles.resellerDescription}>
                  {t.home.reseller.description.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                </div>
                <Form>
                  <FormField>
                    <InputLabel>{t.home.reseller.formLabels.name}</InputLabel>
                    <Input placeholder={t.home.reseller.formLabels.name} />
                  </FormField>
                  <FormField>
                    <InputLabel>{t.home.reseller.formLabels.company}</InputLabel>
                    <Input placeholder={t.home.reseller.formLabels.company} />
                  </FormField>
                  <FormField>
                    <InputLabel>{t.home.reseller.formLabels.email}</InputLabel>
                    <Input placeholder={t.home.reseller.formLabels.email} />
                  </FormField>
                  <FormField>
                    <InputLabel>{t.home.reseller.formLabels.contact}</InputLabel>
                    <Input placeholder={t.home.reseller.formLabels.contact} />
                  </FormField>
                  <FormField>
                    <InputLabel>{t.home.reseller.formLabels.message}</InputLabel>
                    <TextArea placeholder={t.home.reseller.formLabels.message} />
                  </FormField>
                </Form>
              </div>
            </div>
          </div>
          <div id="reviews" className={styles.fullWidth}>
            <h1 className={styles.title}>{t.home.reviews.title}</h1>
            <h3>{t.home.reviews.subheadingOne}</h3>
            <h3>{t.home.reviews.subheadingTwo}</h3>
            <Button className={styles.reviewsCta}>{t.home.reviews.cta}</Button>
            <div className={styles.reviews}>
              {t.reviews.items.map((review) => (
                <ReviewItem
                  key={`${review.name}-${review.headline}`}
                  name={review.name}
                  review={review.text}
                  origin={review.origin}
                  headline={review.headline}
                  rating={review.rating}
                  ratingAlt={t.reviews.starAlt}
                />
              ))}
            </div>
          </div>
        </div>
      </section>
      <Image
        className={styles.coverImage}
        src="/map.png"
        alt="Paparico map"
        width={1440}
        height={623}
      />
      <Footer />
    </div>
  );
}
