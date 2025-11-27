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
        <Button size="large">Menu</Button>
        <img className={styles.hero} src="/hero-image.png" alt="Um abraço doce" />
        <h1>Os nossos produtos</h1>
        <div className={styles.products}>
          <div className={styles.mainProduct}>
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
          </div>
          <div className={styles.otherProducts}>
            <GridItem
              image="/products/bolo-de-rolo-doce-de-leite.jpg"
              title="Bolo de rolo tradicional 900g"
              description="Goiabada, Doce de leite, Chocolate e Pistachio"
              price={23}
            />
            <GridItem
              image="/products/bolo-de-rolo-fatia.jpg"
              title="Fatia de Bolo de rolo 50g"
              description={
                <>
                  <div>Goiabada</div>
                  <div>Doce de Leite</div>
                  <div>Chocolate</div>
                  <div>Pistachio</div>
                </>
              }
              price={2}
            />
          </div>
        </div>
        <div className={styles.productsGrid}>
          <GridItem
            image="/products/bolo-de-rolo-goiabada.jpg"
            title="Bolo de rolo tradicional 450g"
            description="O nosso clássico é quase um abraço em forma de bolo."
            hasStartingFrom
            price={14}
          />
          <GridItem
            image="/products/casadinho.jpg"
            title="Bolo de rolo com Topping"
            description="A cobertura cremosa faz cada fatia parecer um mimo especial"
            hasStartingFrom
            price={21}
          />
          <GridItem
            image="/products/biscoito.jpg"
            title="Bolo de rolo Naked"
            description="Toda comemoração merece um paparico especial"
            hasStartingFrom
            price={28}
          />
          <GridItem
            image="/products/bolo-de-rolo-toppings-doce-de-leite.jpg"
            title="Bolo de rolo tradicional"
            description="O nosso clássico é quase um abraço em forma de bolo."
            hasStartingFrom
            price={14}
          />
          <GridItem
            image="/products/bolo-de-rolo-toppings-2-sabores.jpg"
            title="Bolo de rolo com Topping"
            description="A cobertura cremosa faz cada fatia parecer um mimo especial"
            hasStartingFrom
            price={21}
          />
          <GridItem
            image="/products/bombom.jpg"
            title="Bolo de rolo Naked"
            description="Toda comemoração merece um paparico especial"
            hasStartingFrom
            price={28}
          />
          <GridItem
            image="/products/bolo-de-rolo-naked-recheado.jpg"
            title="Bolo de rolo tradicional"
            description="O nosso clássico é quase um abraço em forma de bolo."
            hasStartingFrom
            price={14}
          />
        </div>
        <h1>O que falam do Paparico</h1>
        <div className={styles.reviews}>
          {reviews.map((review, i) => (
            <ReviewItem
              key={`review-${i}`}
              name={review.name}
              review={review.text}
              date={review.date}
            />
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
}
