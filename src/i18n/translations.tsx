import { type ReactNode } from "react";

import { type Review } from "@/data/reviews";

export type Language = "pt" | "en";
export const SUPPORTED_LANGUAGES: Language[] = ["pt", "en"];

export type TranslationContent = {
  common: {
    languageSwitcher: string;
  };
  header: {
    homeAria: string;
    products: string;
    events: string;
    information: string;
    reseller: string;
    reviews: string;
    order: string;
    openMenu: string;
    closeMenu: string;
  };
  footer: {
    backToTop: string;
    terms: string;
    contact: string;
  };
  home: {
    productsTitle: string;
    title: string;
    text: ReactNode;
    galleryTitle: string;
    info: {
      title: string;
      subtitle: string;
      paragraphs: string[];
      shippingTitle: string;
      shippingDescription: string;
      pickupTitle: string;
      pickupDescription: string;
    };
    reseller: {
      title: string;
      heading: string;
      description: string[];
      formLabels: {
        name: string;
        company: string;
        email: string;
        contact: string;
        message: string;
      };
      formActions: {
        submit: string;
        sending: string;
        cancel: string;
        success: string;
        error: string;
        required: string;
      };
      cta: string;
    };
    reviews: {
      title: string;
      subheadingOne: string;
      subheadingTwo: string;
      cta: string;
    };
    heroSection: {
      title: string | ReactNode;
      subtitle: string;
      alt: string;
    };
  };
  reviews: {
    starAlt: string;
    items: Review[];
  };
};

export const translations: Record<Language, TranslationContent> = {
  pt: {
    common: {
      languageSwitcher: "Selecionar idioma",
    },
    header: {
      homeAria: "Voltar para a página inicial",
      products: "Produtos",
      events: "Para o seu evento",
      information: "Informações",
      reseller: "Seja um revendedor",
      reviews: "Depoimentos",
      order: "Faça sua encomenda",
      openMenu: "Abrir menu de navegação",
      closeMenu: "Fechar menu de navegação",
    },
    footer: {
      backToTop: "Voltar ao topo",
      terms: "Termos e condições",
      contact: "Fale conosco",
    },
    home: {
      productsTitle: "Conheça o nosso menu",
      title: "A História do Bolo de Rolo",
      text: (
        <>
          <p>
            O bolo de rolo é um doce tradicional brasileiro, originário do estado de Pernambuco.
          </p>
          <p>
            Sua história começa no período colonial, quando os portugueses trouxeram para o Brasil a
            receita do &quot;colchão de noiva&quot;, um bolo típico da culinária lusitana.
          </p>
          <p>
            Adaptado às condições e ingredientes locais, o bolo de rolo se transformou em um doce
            único, caracterizado por finas camadas de massa enroladas com recheio de goiabada.
          </p>
          <p>
            O Paparico trouxe o bolo de rolo de volta a Portugal, reintroduzindo o doce às suas
            raízes lusitanas e conquistando paladares com essa iguaria brasileira.
          </p>
        </>
      ),
      heroSection: {
        title: (
          <>
            O tradicional
            <wbr /> bolo&nbsp;de&nbsp;rolo
          </>
        ),
        subtitle:
          "No Paparico, cada camada conta uma história. Um gesto de cuidado, um sabor que acolhe, um abraço em forma de bolo que atravessa o tempo e mantém viva a tradição pernambucana.",
        alt: "Paparico",
      },
      galleryTitle: "Mais que um doce. Um gesto de carinho",
      info: {
        title: "Informações",
        subtitle: "Como funcionam os pedidos",
        paragraphs: [
          "No Paparico, cada pedido nasce das mãos e do cuidado. Produzimos bolos artesanais, preparados sob encomenda, respeitando o tempo, a receita e o afeto que cada criação pede.",
          "Os nossos produtos têm validade de até 30 dias, sempre seguindo as boas práticas de conservação e segurança alimentar.",
          "As encomendas podem ser feitas através do WhatsApp ou Instagram. Após o contacto, confirmamos disponibilidade, valores, prazos e a melhor forma de entrega.",
        ],
        shippingTitle: "ENVIOS",
        shippingDescription:
          "Enviamos para todo o país através de transportadora. Os envios nacionais têm um custo fixo de €4,50 para pedidos até 5kg. Para outros volumes ou localizações, o valor é informado sob consulta",
        pickupTitle: "RETIRADAS",
        pickupDescription:
          "Também é possível retirar o pedido na nossa sede de produção. O Paparico não é uma loja física e trabalha exclusivamente com encomendas previamente confirmadas e pagas, sendo a retirada realizada apenas nesses casos.",
      },
      reseller: {
        title: "Seja um revendedor",
        heading: "Leve o sabor do paparico para mais perto das pessoas.",
        description: [
          "Se você acredita em produtos feitos com cuidado, tradição e afeto, será um prazer caminhar juntos.",
          "Entre em contacto connosco e descubra como revender o Paparico no seu espaço.",
        ],
        formLabels: {
          name: "Nome",
          company: "Empresa",
          email: "Email",
          contact: "Contato",
          message: "Mensagem",
        },
        formActions: {
          submit: "Enviar",
          sending: "Enviando...",
          cancel: "Cancelar",
          success: "Mensagem enviada com sucesso! Vamos responder em breve.",
          error: "Não foi possível enviar sua mensagem. Tente novamente em instantes.",
          required: "Preencha nome, email e mensagem.",
        },
        cta: "Faça a sua avaliação",
      },
      reviews: {
        title: "O que falam do Paparico",
        subheadingOne: "Entre camadas, memórias.",
        subheadingTwo: "Entre sabores, palavras que ficam.",
        cta: "Faça a sua avaliação",
      },
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
  },
  en: {
    common: {
      languageSwitcher: "Switch language",
    },
    header: {
      homeAria: "Back to the home page",
      products: "Products",
      events: "For your event",
      information: "Information",
      reseller: "Be a reseller",
      reviews: "Reviews",
      order: "Place your order",
      openMenu: "Open navigation menu",
      closeMenu: "Close navigation menu",
    },
    footer: {
      backToTop: "Back to top",
      terms: "Terms and conditions",
      contact: "Contact us",
    },
    home: {
      productsTitle: "Our products",
      title: "The history of Bolo de Rolo",
      text: <p>123</p>,
      galleryTitle: "More than a dessert. A gesture of care",
      info: {
        title: "Information",
        subtitle: "How orders work",
        paragraphs: [
          "At Paparico, every order is handmade with care. We prepare artisanal cakes to order, respecting the time, recipe, and affection each creation deserves.",
          "Our products keep for up to 30 days, always following best practices for storage and food safety.",
          "Orders can be placed via WhatsApp or Instagram. After you reach out, we confirm availability, prices, timelines, and the best delivery option.",
        ],
        shippingTitle: "SHIPPING",
        shippingDescription:
          "We ship nationwide via carrier. Domestic shipping has a fixed cost of €4.50 for orders up to 5kg. For other weights or locations, the cost is provided upon request.",
        pickupTitle: "PICKUP",
        pickupDescription:
          "You can also pick up your order at our production space. Paparico is not a physical store and works exclusively with confirmed and paid orders, with pickups available only in these cases.",
      },
      reseller: {
        title: "Become a reseller",
        heading: "Bring Paparico closer to people.",
        description: [
          "If you believe in products made with care, tradition, and affection, we would love to work together.",
          "Get in touch to learn how to resell Paparico in your shop.",
        ],
        formLabels: {
          name: "Name",
          company: "Company",
          email: "Email",
          contact: "Contact",
          message: "Message",
        },
        formActions: {
          submit: "Send",
          sending: "Sending...",
          cancel: "Cancel",
          success: "Message sent! We will get back to you soon.",
          error: "We couldn't send your message. Please try again shortly.",
          required: "Please fill in name, email and message.",
        },
        cta: "Leave your review",
      },
      reviews: {
        title: "What people say about Paparico",
        subheadingOne: "Between layers, memories.",
        subheadingTwo: "Between flavors, words that stay.",
        cta: "Leave your review",
      },
      heroSection: {
        title: (
          <>
            The tradicional
            <wbr /> bolo&nbsp;de&nbsp;rolo
          </>
        ),
        subtitle:
          "At Paparico, each layer tells a story. A gesture of care and love. The flavor that connects us to our roots. A hug in shape of cake that goes beyond time and keep the traditions alive.",
        alt: "Paparico",
      },
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
  },
};
