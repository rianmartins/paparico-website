"use client";

import { MENU_LINK } from "@/constants";

import Header from "@/components/Header";
import Button from "@/components/Button";
import GridItem from "@/components/GridItem";
import ReviewItem from "@/components/ReviewItem";
import Footer from "@/components/Footer";

import { reviews } from "@/data/reviews";

import styles from "./page.module.css";

export default function Home() {
  const onOpenMenu = () => {
    window.open(MENU_LINK, "_blank");
  };

  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <Header />
        <div className={styles.description}>
          O bolo de rolo é um doce tradicional e patrimônio imaterial de Pernambuco, marcado por
          suas finíssimas camadas de massa enroladas. O Paparico resgata essa iguaria em solo
          português, reconectando Portugal às suas raízes com sabor e tradição.
        </div>
        {/* <Button size="large">Menu</Button> */}
        <img className={styles.hero} src="/hero-image.png" alt="Um abraço doce" />
        <h1>Os nossos produtos</h1>
        <div className={styles.products}>
          <div className={styles.mainProduct}>
            <GridItem
              className={styles.mainItem}
              image="/products/bolo-de-rolo-goiabada.jpg"
              title="Bolo de rolo tradicional 450g"
              description="Goiabada, Doce de leite, Chocolate e Pistachio"
              price={14}
            />
          </div>
          <div className={styles.otherProducts}>
            <GridItem
              image="/products/bolo-de-rolo-doce-de-leite.jpg"
              title="Bolo de rolo tradicional 900g"
              description="Goiabada, Doce de leite, Chocolate e Pistachio"
              price={23}
            />
            <GridItem
              image="/products/bolo-de-rolo-naked-recheado.jpg"
              title="Bolo de rolo Naked"
              description="Personalize a sua medida de acordo com a sua necessidade"
              hasStartingFrom
              price={21}
            />
          </div>
        </div>
        <div className={styles.productsGrid}>
          <GridItem
            image="/products/bolo-de-pote.jpg"
            title="Bolo de rolo no pote 180g"
            description={
              <>
                <div>Goiabada com Brigadeiro de Parmesão</div>
                <div>Churros com doce de leite</div>
                <div>Chocolate com Brigadeiro Branco</div>
                <div>Pistachio com Brigadeiro 53%</div>
              </>
            }
            price={7}
          />
          <GridItem
            image="/products/bolo-de-rolo-fatia.jpg"
            title="Fatia de Bolo de rolo 50g"
            description="Goiabada, Doce de leite, Chocolate e Pistachio"
            price={2}
          />
          <GridItem
            image="/products/biscoito.jpg"
            title="Biscoito Crocante de Bolo de Rolo"
            description={
              <>
                <div>Goiabada</div>
                <div>Churros com doce de leite</div>
              </>
            }
            price={4}
          />
          <GridItem
            image="/products/casadinho.jpg"
            title="Biscoito casadinho 120g"
            description="Massa amanteigada com recheio de goiabada"
            price={4}
          />
          <GridItem
            image="/products/bolo-de-rolo-toppings-doce-de-leite.jpg"
            title="Bolo de rolo com topping 550g"
            description={
              <>
                <div>Goiabada com brigadeiro de parmesão</div>
                <div>Doce de leite com brigadeiro cappuccino</div>
                <div>Pistachio com brigadeiro de chocolate</div>
              </>
            }
            price={21}
          />
          <GridItem
            image="/products/bolo-de-rolo-toppings-2-sabores.jpg"
            title="Bolo de rolo com topping 1100g"
            description={
              <>
                <div>Goiabada com brigadeiro de parmesão</div>
                <div>Doce de leite com brigadeiro cappuccino</div>
                <div>Pistachio com brigadeiro de chocolate</div>
              </>
            }
            price={38}
          />
        </div>
        <h1>O que falam do Paparico</h1>
        <div className={styles.reviews}>
          {reviews.map((review, i) => (
            <ReviewItem
              key={`review-${i}`}
              name={review.name}
              review={review.text}
              origin={review.origin}
              headline={review.headline}
              rating={review.rating}
            />
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
}
