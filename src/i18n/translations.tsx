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
  modal: {
    close: string;
  };
  termsAndConditions: {
    title: string;
    content: ReactNode;
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
    modal: {
      close: "Sair",
    },
    termsAndConditions: {
      title: "Termos e condições",
      content: (
        <>
          <p>
            O presente documento estabelece os Termos e Condições aplicáveis à utilização do site do
            Paparico, marca pertencente à <b>Fatia Empolgante Unipessoal, Lda</b>, bem como às
            encomendas realizadas através dos nossos canais oficiais de atendimento.
          </p>
          <p>
            Ao entrar em contacto e realizar uma encomenda connosco,
            <b>o cliente declara que leu, compreendeu e concorda com os termos abaixo descritos.</b>
          </p>
          <div style={{ marginTop: "20px", marginBottom: "20px" }}>
            <div style={{ fontWeight: "bold" }}>1. Natureza do site e canais de encomenda</div>
            <p>
              O site do Paparico tem caráter informativo e institucional, servindo como canal de
              apresentação dos nossos produtos e da nossa marca. As encomendas não são realizadas
              diretamente pelo site, devendo ser feitas exclusivamente através dos seguintes canais
              oficiais:
            </p>
            <ul>
              <li>WhatsApp: +351 932 774 555</li>
              <li>Instagram: @paparico.prc</li>
              <li>E-mail: comercial@paparico.pt</li>
            </ul>
          </div>
          <div style={{ marginBottom: "20px" }}>
            <div style={{ fontWeight: "bold" }}>2. Encomendas e confirmação</div>
            <p>
              Todas as encomendas estão sujeitas a confirmação prévia, independentemente de se
              tratarem de produtos de pronta entrega ou de produção sob encomenda. Para que a
              encomenda seja considerada válida e confirmada, é necessário o pagamento integral no
              momento do pedido, salvo exceções aplicáveis a eventos e encomendas especiais (ver
              ponto 8).
            </p>
          </div>
          <div style={{ marginBottom: "20px" }}>
            <div style={{ fontWeight: "bold" }}>3. Formas de pagamento</div>
            <p>Atualmente, o Paparico aceita as seguintes formas de pagamento:</p>
            <ul>
              <li>MBWay: +351 932 774 555</li>
              <li>Transferência bancária via IBAN: PT50 0000 0000 0000 0000 0000 0</li>
            </ul>
            <p>
              A produção ou reserva do produto apenas é iniciada após a confirmação do pagamento.
            </p>
          </div>
          <div style={{ marginBottom: "20px" }}>
            <div style={{ fontWeight: "bold" }}>4. Produção artesanal e disponibilidade</div>
            <p>
              Os produtos do Paparico são produzidos de forma artesanal, podendo existir produtos de
              pronta entrega. No entanto:
            </p>
            <ul>
              <li>O Paparico não funciona como loja física</li>
              <li>
                O espaço de produção destina-se exclusivamente à produção e retirada de encomendas
                previamente agendadas
              </li>
              <li>
                Mesmo nos casos de pronta entrega, é sempre necessária confirmação da encomenda
                agendamento prévio do horário de retirada
              </li>
            </ul>
            <p>
              Caso não haja produto disponível em pronta entrega, o prazo mínimo de produção é de 1
              dia útil, com exceção de bolos festivos ou encomendas especiais, que poderão exigir
              prazos diferenciados. Em períodos de maior procura (como datas festivas e eventos), os
              prazos de produção poderão sofrer alterações, sendo sempre informados ao cliente no
              momento do pedido.
            </p>
          </div>
          <div style={{ marginBottom: "20px" }}>
            <div style={{ fontWeight: "bold" }}>5. Entregas</div>
            <p>
              O Paparico realiza envios para todo o território nacional através de transportadora.
              As condições são as seguintes:
            </p>
            <ul>
              <li>Envio nacional com custo fixo de €4,50 para encomendas até 5kg</li>
              <li>Para outros volumes ou localizações específicas, o valor será sob consulta</li>
              <li>Os prazos de entrega dependem da transportadora e da localidade de destino</li>
            </ul>
          </div>
          <div style={{ marginBottom: "20px" }}>
            <div style={{ fontWeight: "bold" }}>6. Retirada de encomendas</div>
            <p>As retiradas devem ser:</p>
            <ul>
              <li>sempre agendadas previamente</li>
              <li>
                realizadas dentro do horário de atendimento efetuadas apenas após confirmação da
                encomenda
              </li>
            </ul>
            <p>Horário de atendimento e retiradas:</p>
            <ul>
              <li>Terça a sexta, das 8h às 20h</li>
              <li>Sábado, das 9h às 18h</li>
              <li>Não realizamos retiradas aos domingos.</li>
            </ul>
          </div>
          <div style={{ marginBottom: "20px" }}>
            <div style={{ fontWeight: "bold" }}>7. Cancelamentos, trocas e reembolsos</div>
            <p>Devido à natureza artesanal e alimentar dos produtos:</p>
            <ul>
              <li>Não aceitamos cancelamentos de encomendas após a confirmação do pedido</li>
              <li>Não são aceitas devoluções, conforme legislação aplicável a bens alimentares</li>
            </ul>
            <p>
              Em caso de erro comprovado por parte do Paparico (produto incorreto ou com problema),
              será oferecida a substituição do produto, mediante avaliação do ocorrido.
            </p>
          </div>
          <div style={{ marginBottom: "20px" }}>
            <div style={{ fontWeight: "bold" }}>8. Eventos e encomendas personalizadas</div>
            <p>
              Para eventos corporativos, privados ou encomendas personalizadas, as seguintes
              condições aplicam-se:
            </p>
            <ul>
              <li>Os valores são definidos sob consulta e orçamento</li>
              <li>As encomendas não são canceláveis</li>
            </ul>
            <p>Trabalhamos com:</p>
            <ul>
              <li>sinal de 50% no momento da confirmação</li>
              <li>saldo remanescente pago no dia da entrega</li>
            </ul>
            <p>Os prazos, quantidades e condições específicas são acordados caso a caso.</p>
          </div>
          <div style={{ marginBottom: "20px" }}>
            <div style={{ fontWeight: "bold" }}>9. Validade e conservação dos produtos</div>
            <p>Os produtos do Paparico possuem:</p>
            <ul>
              <li>validade de 30 dias, salvo indicação contrária</li>
              <li>devem ser armazenados em local fresco e seco</li>
              <li>não devem permanecer expostos ao ar, para evitar o ressecamento</li>
            </ul>
            <p>
              Após a entrega ou retirada, a responsabilidade pela correta conservação do produto
              passa a ser do cliente.
            </p>
          </div>
          <div style={{ marginBottom: "20px" }}>
            <div style={{ fontWeight: "bold" }}>10. Comunicação</div>
            <p>
              Toda a comunicação oficial do Paparico é realizada exclusivamente pelos canais
              informados nestes termos.
            </p>
            <p>
              O cliente compromete-se a fornecer informações corretas e completas para garantir um
              atendimento adequado.
            </p>
          </div>
          <div style={{ marginBottom: "20px" }}>
            <div style={{ fontWeight: "bold" }}>11. Alterações dos termos</div>
            <p>
              O Paparico reserva-se o direito de alterar estes Termos e Condições a qualquer
              momento, sendo sempre válida a versão publicada no site no momento do contacto ou da
              encomenda.
            </p>
          </div>
        </>
      ),
    },
  },
  en: {
    common: {
      languageSwitcher: "Select language",
    },
    header: {
      homeAria: "Back to the home page",
      products: "Products",
      events: "For your event",
      information: "Information",
      reseller: "Become a reseller",
      reviews: "Testimonials",
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
      productsTitle: "Discover our menu",
      title: "The history of Bolo de Rolo",
      text: (
        <>
          <p>Bolo de rolo is a traditional Brazilian sweet from the state of Pernambuco.</p>
          <p>
            Its story begins in the colonial period, when the Portuguese brought to Brazil the
            recipe for &quot;colchão de noiva,&quot; a classic of Portuguese cuisine.
          </p>
          <p>
            Adapted to local conditions and ingredients, bolo de rolo became a unique dessert,
            characterized by thin layers of sponge rolled with guava paste filling.
          </p>
          <p>
            Paparico brought bolo de rolo back to Portugal, reintroducing the sweet to its
            Portuguese roots and winning over palates with this Brazilian delicacy.
          </p>
        </>
      ),
      galleryTitle: "More than a sweet. A gesture of affection",
      info: {
        title: "Information",
        subtitle: "How orders work",
        paragraphs: [
          "At Paparico, every order starts with hands-on care. We craft artisanal cakes made to order, respecting the time, recipe, and affection each creation calls for.",
          "Our products keep for up to 30 days, always following best practices for storage and food safety.",
          "Orders can be placed via WhatsApp or Instagram. After you reach out, we confirm availability, prices, timelines, and the best delivery option.",
        ],
        shippingTitle: "SHIPPING",
        shippingDescription:
          "We ship nationwide via carrier. Domestic shipping has a fixed cost of €4.50 for orders up to 5kg. For other weights or locations, the cost is provided upon request.",
        pickupTitle: "PICKUPS",
        pickupDescription:
          "You can also pick up your order at our production space. Paparico is not a physical store and works exclusively with confirmed and paid orders, so pickups only happen in those cases.",
      },
      reseller: {
        title: "Become a reseller",
        heading: "Bring Paparico's flavor closer to people.",
        description: [
          "If you believe in products made with care, tradition, and affection, it will be a pleasure to walk together.",
          "Get in touch with us to find out how to resell Paparico in your space.",
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
          success: "Message sent successfully! We will get back to you soon.",
          error: "We couldn't send your message. Please try again shortly.",
          required: "Please fill in name, email, and message.",
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
            The traditional
            <wbr /> bolo&nbsp;de&nbsp;rolo
          </>
        ),
        subtitle:
          "At Paparico, each layer tells a story. A gesture of care, a flavor that welcomes, a hug in cake form that travels through time and keeps the Pernambucan tradition alive.",
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
    modal: {
      close: "Close",
    },
    termsAndConditions: {
      title: "Terms and conditions",
      content: (
        <>
          <p>
            This document sets out the Terms and Conditions for using Paparico&apos;s website, a
            brand owned by <b>Fatia Empolgante Unipessoal, Lda</b>, as well as for orders placed
            through our official customer channels.
          </p>
          <p>
            By contacting us and placing an order,{" "}
            <b>
              the customer declares they have read, understood, and agree with the terms described
              below.
            </b>
          </p>
          <div style={{ marginBottom: "20px" }}>
            <div style={{ fontWeight: "bold" }}>1. Nature of the website and order channels</div>
            <p>
              Paparico&apos;s website is informational and institutional, serving as a channel to
              showcase our products and brand. Orders are not placed directly on the site and must
              be made exclusively through the following official channels:
            </p>
            <ul>
              <li>WhatsApp: +351 932 774 555</li>
              <li>Instagram: @paparico.prc</li>
              <li>E-mail: comercial@paparico.pt</li>
            </ul>
          </div>
          <div style={{ marginBottom: "20px" }}>
            <div style={{ fontWeight: "bold" }}>2. Orders and confirmation</div>
            <p>
              All orders are subject to prior confirmation, whether they are ready-to-ship items or
              made to order. For an order to be valid and confirmed, full payment is required at the
              time of the request, except for events and special orders (see item 8).
            </p>
          </div>
          <div style={{ marginBottom: "20px" }}>
            <div style={{ fontWeight: "bold" }}>3. Payment methods</div>
            <p>Paparico currently accepts the following payment methods:</p>
            <ul>
              <li>MBWay: +351 932 774 555</li>
              <li>Bank transfer via IBAN: PT50 0000 0000 0000 0000 0000 0</li>
            </ul>
            <p>Production or reservation of the product only begins after payment is confirmed.</p>
          </div>
          <div style={{ marginBottom: "20px" }}>
            <div style={{ fontWeight: "bold" }}>4. Handmade production and availability</div>
            <p>
              Paparico&apos;s products are handmade, and there may be ready-to-ship items. However:
            </p>
            <ul>
              <li>Paparico does not operate as a physical store</li>
              <li>
                The production space is solely for preparing and handing over pre-scheduled orders
              </li>
              <li>
                Even for ready-made items, order confirmation and prior scheduling of the pickup
                time are always required
              </li>
            </ul>
            <p>
              If no ready-made product is available, the minimum production time is 1 business day,
              except for celebration cakes or special orders, which may require different lead
              times. During peak periods (holidays, events), production timelines may change and
              will always be communicated to the customer at the time of ordering.
            </p>
          </div>
          <div style={{ marginBottom: "20px" }}>
            <div style={{ fontWeight: "bold" }}>5. Deliveries</div>
            <p>Paparico ships nationwide via courier. The conditions are:</p>
            <ul>
              <li>Flat-rate national shipping of €4.50 for orders up to 5kg</li>
              <li>For other volumes or specific locations, the price is provided upon request</li>
              <li>Delivery times depend on the courier and destination</li>
            </ul>
          </div>
          <div style={{ marginBottom: "20px" }}>
            <div style={{ fontWeight: "bold" }}>6. Order pickup</div>
            <p>Pickups must be:</p>
            <ul>
              <li>scheduled in advance</li>
              <li>carried out within customer service hours and only after order confirmation</li>
            </ul>
            <p>Customer service and pickup hours:</p>
            <ul>
              <li>Tuesday to Friday, 8 a.m. to 8 p.m.</li>
              <li>Saturday, 9 a.m. to 6 p.m.</li>
              <li>No pickups on Sundays.</li>
            </ul>
          </div>
          <div style={{ marginBottom: "20px" }}>
            <div style={{ fontWeight: "bold" }}>7. Cancellations, exchanges, and refunds</div>
            <p>Due to the handmade and perishable nature of the products:</p>
            <ul>
              <li>We do not accept order cancellations after confirmation</li>
              <li>
                Returns are not accepted, in line with regulations for perishable food products
              </li>
            </ul>
            <p>
              In the event of a verified mistake by Paparico (incorrect or defective product), the
              product will be replaced after evaluating the situation.
            </p>
          </div>
          <div style={{ marginBottom: "20px" }}>
            <div style={{ fontWeight: "bold" }}>8. Events and custom orders</div>
            <p>
              For corporate events, private events, or custom orders, the following conditions
              apply:
            </p>
            <ul>
              <li>Pricing is provided upon request and quotation</li>
              <li>These orders cannot be canceled</li>
            </ul>
            <p>We work with:</p>
            <ul>
              <li>a 50% deposit upon confirmation</li>
              <li>remaining balance paid on the delivery day</li>
            </ul>
            <p>Lead times, quantities, and specific conditions are agreed upon case by case.</p>
          </div>
          <div style={{ marginBottom: "20px" }}>
            <div style={{ fontWeight: "bold" }}>9. Product shelf life and storage</div>
            <p>Paparico products have:</p>
            <ul>
              <li>a shelf life of 30 days, unless stated otherwise</li>
              <li>storage requirements of a cool, dry place</li>
              <li>no prolonged exposure to air, to avoid drying out</li>
            </ul>
            <p>
              After delivery or pickup, the customer is responsible for correctly storing the
              product.
            </p>
          </div>
          <div style={{ marginBottom: "20px" }}>
            <div style={{ fontWeight: "bold" }}>10. Communication</div>
            <p>
              All official communication from Paparico is conducted exclusively through the channels
              listed in these terms.
            </p>
            <p>
              The customer agrees to provide accurate and complete information to ensure proper
              service.
            </p>
          </div>
          <div style={{ marginBottom: "20px" }}>
            <div style={{ fontWeight: "bold" }}>11. Changes to the terms</div>
            <p>
              Paparico reserves the right to amend these Terms and Conditions at any time; the
              version published on the website at the time of contact or ordering always applies.
            </p>
          </div>
        </>
      ),
    },
  },
};
