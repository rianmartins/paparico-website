import { type ReactNode } from "react";

import { type ChristmasMenuItem } from "@/data/menuDeNatal";
import { type Review } from "@/data/reviews";
import { MENU_NAKED } from "@/constants";

export type Language = "pt" | "en";
export const SUPPORTED_LANGUAGES: Language[] = ["pt", "en"];

type HomeProduct = {
  image: string;
  title: string;
  description: string | ReactNode;
  price?: number;
  href?: string;
  openInNewTab?: boolean;
  hasStartingFrom?: boolean;
};

export type TranslationContent = {
  common: {
    startingFrom: string;
    languageSwitcher: string;
  };
  header: {
    homeAria: string;
    products: string;
    naked: string;
    order: string;
    openMenu: string;
    closeMenu: string;
  };
  footer: {
    products: string;
    naked: string;
    order: string;
  };
  home: {
    description: string;
    menuCta: string;
    heroAlt: string;
    productsTitle: string;
    products: {
      main: HomeProduct;
      secondary: HomeProduct[];
      grid: HomeProduct[];
    };
    reviewsTitle: string;
  };
  reviews: {
    starAlt: string;
    items: Review[];
  };
  menu: {
    heroAlt: string;
    title: string;
    subtitle: string;
    contentTitle: string;
    paragraphs: string[];
    button: string;
    notice: {
      descriptionTop: string;
      pickupTitle: string;
      pickupTimes: string[];
      closing: string;
    };
    items: ChristmasMenuItem[];
  };
};

export const translations: Record<Language, TranslationContent> = {
  pt: {
    common: {
      startingFrom: "a partir de",
      languageSwitcher: "Selecionar idioma",
    },
    header: {
      homeAria: "Voltar para a página inicial",
      products: "Produtos",
      naked: "Bolo de rolo naked",
      order: "Faça sua encomenda",
      openMenu: "Abrir menu de navegação",
      closeMenu: "Fechar menu de navegação",
    },
    footer: {
      products: "Produtos",
      naked: "Bolo de rolo naked",
      order: "Faça a sua encomenda",
    },
    home: {
      description:
        "O bolo de rolo é um doce tradicional e patrimônio imaterial de Pernambuco, marcado por suas finíssimas camadas de massa enroladas. O Paparico resgata essa iguaria em solo português, reconectando Portugal às suas raízes com sabor e tradição.",
      menuCta: "Confira nosso menu de Natal",
      heroAlt: "Um abraço doce",
      productsTitle: "Os nossos produtos",
      products: {
        main: {
          image: "/products/bolo-de-rolo-goiabada.jpg",
          title: "Bolo de rolo tradicional 450g",
          description: "Goiabada, Doce de leite, Chocolate e Pistachio",
          price: 14,
        },
        secondary: [
          {
            image: "/products/bolo-de-rolo-doce-de-leite.jpg",
            title: "Bolo de rolo tradicional 900g",
            description: "Goiabada, Doce de leite, Chocolate e Pistachio",
            price: 23,
          },
          {
            image: "/products/bolo-de-rolo-naked-recheado.jpg",
            title: "Bolo de rolo Naked",
            description: "Personalize a sua medida de acordo com a sua necessidade",
            href: MENU_NAKED,
            openInNewTab: true,
            hasStartingFrom: true,
            price: 21,
          },
        ],
        grid: [
          {
            image: "/products/bolo-de-pote.jpg",
            title: "Bolo de rolo no pote 180g",
            description: (
              <>
                <div>Goiabada com Brigadeiro de Parmesão</div>
                <div>Churros com doce de leite</div>
                <div>Chocolate com Brigadeiro Branco</div>
                <div>Pistachio com Brigadeiro 53%</div>
              </>
            ),
            price: 7,
          },
          {
            image: "/products/bolo-de-rolo-fatia.jpg",
            title: "Fatia de Bolo de rolo 50g",
            description: "Goiabada, Doce de leite, Chocolate e Pistachio",
            price: 2,
          },
          {
            image: "/products/biscoito.jpg",
            title: "Biscoito Crocante de Bolo de Rolo",
            description: (
              <>
                <div>Goiabada</div>
                <div>Churros com doce de leite</div>
              </>
            ),
            price: 4,
          },
          {
            image: "/products/casadinho.jpg",
            title: "Biscoito casadinho 120g",
            description: "Massa amanteigada com recheio de goiabada",
            price: 4,
          },
          {
            image: "/products/bolo-de-rolo-toppings-doce-de-leite.jpg",
            title: "Bolo de rolo com topping 550g",
            description: (
              <>
                <div>Goiabada com brigadeiro de parmesão</div>
                <div>Doce de leite com brigadeiro cappuccino</div>
                <div>Pistachio com brigadeiro de chocolate</div>
              </>
            ),
            price: 21,
          },
          {
            image: "/products/bolo-de-rolo-toppings-2-sabores.jpg",
            title: "Bolo de rolo com topping 1100g",
            description: (
              <>
                <div>Goiabada com brigadeiro de parmesão</div>
                <div>Doce de leite com brigadeiro cappuccino</div>
                <div>Pistachio com brigadeiro de chocolate</div>
              </>
            ),
            price: 38,
          },
        ],
      },
      reviewsTitle: "O que falam do Paparico",
    },
    reviews: {
      starAlt: "Estrela de avaliação",
      items: [
        {
          name: "Aline B.",
          rating: 5,
          text: "Maravilhoso! Encomendei 2 bolos de rolo e a experiência foi ótima do início ao fim. Atendimento e entrega ágeis, a embalagem bonita, com ótima apresentação. Os bolos deliciosos. Recomendo e voltarei a encomendar.",
          headline: "Os bolos deliciosos",
          origin: "Avaliação Google",
        },
        {
          name: "Viola M.",
          rating: 5,
          text: "Encomendei para o aniversário do meu companheiro, um pernambucano doc. Ele não gosta muito de doce, mas enloquece por Bolo de Rolo. Simplesmente adorou o presente, que fez ele lembrar da terra dele. Parabéns Paparico, muito sucesso pela frente!",
          headline: "Simplesmente adorou",
          origin: "Avaliação Google",
        },
        {
          name: "Aline S.",
          rating: 5,
          text: "Sabe aquele sabor de casa, que a gente mata a saudade pois bem sentimos ao seu deliciar com o bolo de rolo e os casadinhos, meu deus como eu tinha saudades disso e hoje eu pude me deliciar, obrigado pelo atendimento e qualidade dos produtos",
          headline: "Sabor de casa",
          origin: "Avaliação Google",
        },
      ],
    },
    menu: {
      heroAlt: "Celebre o Natal",
      title: "Natal paparico",
      subtitle: "por uma mesa cheia de lembranças",
      contentTitle: "Do paparico á sua mesa: para um Natal especial",
      paragraphs: [
        "Neste Natal, o Paparico veste a mesa com delicadeza, aconchego e o afeto das festas que aquecem o coração. Cada criação nasce para celebrar encontros, envolver famílias e transformar pequenos instantes em lembranças doces.",
        "Doçuras que perfumam a casa, texturas que abraçam e sabores que contam histórias — assim nasce o nosso menu natalino. Um convite para saborear a magia das festas com o encanto único do Paparico.",
      ],
      button: "Encomendar",
      notice: {
        descriptionTop:
          "Nesta época de grande movimento na nossa cozinha, o Paparico irá operar exclusivamente com retiradas na nossa sede, na Amadora. Assim garantimos que cada pedido recebe o cuidado e a qualidade que o Natal merece.",
        pickupTitle: "Horários de retirada:",
        pickupTimes: ["23/12 — das 08h às 16h30", "24/12 — das 08h às 15h"],
        closing:
          "Agradecemos a compreensão e desejamos um Natal cheio de sabor e simplicidade — do Paparico para a vossa mesa.",
      },
      items: [
        {
          image: "/products/natal/tronco.jpg",
          title: "Tronco de Chocolate",
          description:
            "Clássico natalino em versão Paparico: bolo de rolo de chocolate moldado em formato de tronco, com recheio de brigadeiro branco e cobertura de chocolate belga 53%. Finalizado com acabamento artístico e decorações festivas que encantam à mesa.",
          price: 32,
          moreInfo: "(Serve até 10 pessoas)",
        },
        {
          image: "/products/natal/bolo-de-rolo-natal.jpeg",
          title: "Bolo de Rolo Natalino",
          description:
            "Bolo tradicional de goiabada na versão natalina: bolo de rolo de goiabada com topping e decoração com brigadeiro de parmesão com gotas de goiaba. Finalizado com acabamento artístico de biscoitos e frutas. A opção perfeita para encantar a mesa.",
          price: 42,
          moreInfo: "(Serve até 12 pessoas)",
        },
        {
          image: "/products/natal/pavlova.jpg",
          title: "Guirlanda de Pavlova",
          description:
            "Pavlova crocante por fora e macia por dentro, em formato de guirlanda natalina. Recheada com brigadeiro de parmesão e creme de goiaba, combinação surpreendente e sofisticada. Decorada com framboesas frescas, alecrim e toques de açúcar — uma sobremesa leve e irresistível.",
          price: 32,
          moreInfo: "(Serve até 10 pessoas)",
        },
        {
          image: "/products/natal/cheesecake.jpg",
          title: "Cheesecake de Goiabada",
          description:
            "Base feita com biscoito de bolo de rolo de goiabada, coberta por um aveludado creme de queijo e finalizada com a goiabada Paparico. Apresentado em travessa de porcelana, com trabalho de bico em chantilly e delicadas gotas de goiabada — um equilíbrio perfeito entre tradição e elegância.",
          price: 32,
          moreInfo: "(Serve até 10 pessoas)",
        },
        {
          image: "/products/natal/bannoffe.jpg",
          title: "Banoffee de Doce de Leite",
          description:
            "Base crocante de biscoito de bolo de rolo de doce de leite, recheada com doce de leite Paparico, bananas frescas e chantilly levemente aromatizado com canela. Finalizada com geleia de banana, bico decorativo e um toque natalino de banana desidratada e pau de canela. Servida em travessa de porcelana, perfeita para compartilhar.",
          price: 30,
          moreInfo: "(Serve até 10 pessoas)",
        },
        {
          image: "/products/natal/palitos.jpg",
          title: "Palitos Crocante Bolo de Rolo",
          description: (
            <>
              <p>
                Palitos crocantes de bolo de rolo sabor goiabada, decorados em chocolate branco
                belga e embalados com todo o encanto do Natal.
              </p>
              <p>
                Acompanha um pote em cerâmica natalina exclusiva, perfeito para presentear ou
                decorar a mesa das festas. Uma combinação delicada entre o sabor artesanal do
                Paparico e a magia do Natal.
              </p>
            </>
          ),
          price: 8.5,
        },
      ],
    },
  },
  en: {
    common: {
      startingFrom: "starting from",
      languageSwitcher: "Switch language",
    },
    header: {
      homeAria: "Back to the home page",
      products: "Products",
      naked: "Naked bolo de rolo",
      order: "Place your order",
      openMenu: "Open navigation menu",
      closeMenu: "Close navigation menu",
    },
    footer: {
      products: "Products",
      naked: "Naked bolo de rolo",
      order: "Place your order",
    },
    home: {
      description:
        "Bolo de rolo is a traditional dessert and intangible heritage of Pernambuco, known for its ultra-thin rolled layers. Paparico brings this delicacy to Portugal, reconnecting the country to its roots with flavor and tradition.",
      menuCta: "Check our Christmas menu",
      heroAlt: "A sweet hug",
      productsTitle: "Our products",
      products: {
        main: {
          image: "/products/bolo-de-rolo-goiabada.jpg",
          title: "Traditional bolo de rolo 450g",
          description: "Guava, dulce de leche, chocolate and pistachio",
          price: 14,
        },
        secondary: [
          {
            image: "/products/bolo-de-rolo-doce-de-leite.jpg",
            title: "Traditional bolo de rolo 900g",
            description: "Guava, dulce de leche, chocolate and pistachio",
            price: 23,
          },
          {
            image: "/products/bolo-de-rolo-naked-recheado.jpg",
            title: "Naked bolo de rolo",
            description: "Customize the size to suit your needs",
            href: MENU_NAKED,
            openInNewTab: true,
            hasStartingFrom: true,
            price: 21,
          },
        ],
        grid: [
          {
            image: "/products/bolo-de-pote.jpg",
            title: "Bolo de rolo in a jar 180g",
            description: (
              <>
                <div>Guava with parmesan brigadeiro</div>
                <div>Churros with dulce de leche</div>
                <div>Chocolate with white brigadeiro</div>
                <div>Pistachio with 53% chocolate brigadeiro</div>
              </>
            ),
            price: 7,
          },
          {
            image: "/products/bolo-de-rolo-fatia.jpg",
            title: "Slice of bolo de rolo 50g",
            description: "Guava, dulce de leche, chocolate and pistachio",
            price: 2,
          },
          {
            image: "/products/biscoito.jpg",
            title: "Crunchy bolo de rolo cookie",
            description: (
              <>
                <div>Guava</div>
                <div>Churros with dulce de leche</div>
              </>
            ),
            price: 4,
          },
          {
            image: "/products/casadinho.jpg",
            title: "Casadinho cookie 120g",
            description: "Buttery dough filled with guava paste",
            price: 4,
          },
          {
            image: "/products/bolo-de-rolo-toppings-doce-de-leite.jpg",
            title: "Bolo de rolo with topping 550g",
            description: (
              <>
                <div>Guava with parmesan brigadeiro</div>
                <div>Dulce de leche with cappuccino brigadeiro</div>
                <div>Pistachio with chocolate brigadeiro</div>
              </>
            ),
            price: 21,
          },
          {
            image: "/products/bolo-de-rolo-toppings-2-sabores.jpg",
            title: "Bolo de rolo with topping 1100g",
            description: (
              <>
                <div>Guava with parmesan brigadeiro</div>
                <div>Dulce de leche with cappuccino brigadeiro</div>
                <div>Pistachio with chocolate brigadeiro</div>
              </>
            ),
            price: 38,
          },
        ],
      },
      reviewsTitle: "What people say about Paparico",
    },
    reviews: {
      starAlt: "Review star",
      items: [
        {
          name: "Aline B.",
          rating: 5,
          text: "Wonderful! I ordered 2 bolos de rolo and the experience was great from start to finish. Fast service and delivery, beautiful packaging with excellent presentation. The cakes were delicious. I recommend and will order again.",
          headline: "The cakes were delicious",
          origin: "Google review",
        },
        {
          name: "Viola M.",
          rating: 5,
          text: "I ordered for my partner's birthday — he is from Pernambuco and not a big sweets fan, but he goes crazy for bolo de rolo. He simply loved the gift, it reminded him of home. Congratulations Paparico, wishing you lots of success!",
          headline: "He simply loved it",
          origin: "Google review",
        },
        {
          name: "Aline S.",
          rating: 5,
          text: "It tastes like home, the flavor we miss so much. That is exactly how the bolo de rolo and casadinhos felt — I had missed them so much and today I got to enjoy them. Thank you for the great service and quality products.",
          headline: "Tastes like home",
          origin: "Google review",
        },
      ],
    },
    menu: {
      heroAlt: "Celebrate Christmas",
      title: "Paparico Christmas",
      subtitle: "for a table full of memories",
      contentTitle: "From Paparico to your table: for a special Christmas",
      paragraphs: [
        "This Christmas, Paparico dresses the table with delicacy, warmth and the affection of gatherings that warm the heart. Each creation is made to celebrate togetherness, bring families closer and turn small moments into sweet memories.",
        "Sweet treats that scent the home, textures that embrace and flavors that tell stories — that's how our Christmas menu comes to life. An invitation to savor the magic of the season with Paparico's unique charm.",
      ],
      button: "Order now",
      notice: {
        descriptionTop:
          "During this busy season in our kitchen, Paparico will operate exclusively with pickups at our Amadora location. This way we ensure every order receives the care and quality that Christmas deserves.",
        pickupTitle: "Pickup hours:",
        pickupTimes: ["23/12 — from 08:00 to 16:30", "24/12 — from 08:00 to 15:00"],
        closing:
          "Thank you for your understanding. We wish you a Christmas full of flavor and simplicity — from Paparico to your table.",
      },
      items: [
        {
          image: "/products/natal/tronco.jpg",
          title: "Chocolate Log",
          description:
            "A Christmas classic, Paparico style: chocolate bolo de rolo shaped as a log, filled with white brigadeiro and covered in 53% Belgian chocolate. Finished with artistic details and festive decorations that shine on the table.",
          price: 32,
          moreInfo: "(Serves up to 10 people)",
        },
        {
          image: "/products/natal/bolo-de-rolo-natal.jpeg",
          title: "Christmas Bolo de Rolo",
          description:
            "Traditional guava bolo de rolo in a festive edition: guava roll cake topped and decorated with parmesan brigadeiro and guava drops. Finished with an artistic garnish of cookies and fruit — the perfect centerpiece to enchant the table.",
          price: 42,
          moreInfo: "(Serves up to 12 people)",
        },
        {
          image: "/products/natal/pavlova.jpg",
          title: "Pavlova Wreath",
          description:
            "Crisp on the outside and soft inside, in the shape of a Christmas wreath. Filled with parmesan brigadeiro and guava cream — a surprising, elegant pairing. Decorated with fresh raspberries, rosemary and sugar details for a light, irresistible dessert.",
          price: 32,
          moreInfo: "(Serves up to 10 people)",
        },
        {
          image: "/products/natal/cheesecake.jpg",
          title: "Guava Cheesecake",
          description:
            "Base made with guava bolo de rolo cookies, topped with a velvety cheese cream and finished with Paparico's guava paste. Served in a porcelain dish with piped chantilly and delicate guava drops — the perfect balance of tradition and elegance.",
          price: 32,
          moreInfo: "(Serves up to 10 people)",
        },
        {
          image: "/products/natal/bannoffe.jpg",
          title: "Dulce de Leche Banoffee",
          description:
            "Crunchy base of dulce de leche bolo de rolo cookie, filled with Paparico's dulce de leche, fresh bananas and chantilly lightly scented with cinnamon. Finished with banana jam, decorative piping and a Christmas touch of dried banana and cinnamon stick. Served in a porcelain dish, perfect for sharing.",
          price: 30,
          moreInfo: "(Serves up to 10 people)",
        },
        {
          image: "/products/natal/palitos.jpg",
          title: "Crunchy Bolo de Rolo Sticks",
          description: (
            <>
              <p>
                Crunchy guava bolo de rolo sticks, coated in Belgian white chocolate and wrapped
                with all the charm of Christmas.
              </p>
              <p>
                Comes with an exclusive ceramic Christmas jar, perfect for gifting or decorating the
                holiday table. A delicate blend of Paparico&apos;s artisanal flavor and the magic of
                the season.
              </p>
            </>
          ),
          price: 8.5,
        },
      ],
    },
  },
};
