import { type GridSource, type Localized } from "@/types/Products";

export const sizes: Record<string, Localized> = {
  "size-trad-450": {
    pt: "Bolo de rolo tradicional 450g",
    en: "Traditional roll cake 450g",
  },
  "size-trad-900": {
    pt: "Bolo de rolo tradicional 900g",
    en: "Traditional roll cake 900g",
  },
  "size-toppings-550": {
    pt: "Bolo de rolo c/ toppings 550g",
    en: "Roll cake with toppings 550g",
  },
  "size-toppings-1100": {
    pt: "Bolo de rolo c/ toppings 1100g",
    en: "Roll cake with toppings 1100g",
  },
  "size-slice-50": {
    pt: "Fatia de bolo de rolo 50g",
    en: "Roll cake slice 50g",
  },
  "size-jar-150": {
    pt: "Bolo de rolo no pote 150g",
    en: "Roll cake in a jar 150g",
  },
  "size-casadinho-120": {
    pt: "Biscoito casadinho 120g",
    en: "Casadinho cookie 120g",
  },
  "size-naked-4500": {
    pt: "Naked bolo de rolo 4/4.5Kg",
    en: "Naked roll cake 4/4.5kg",
  },
  "size-mini-50": {
    pt: "Mini bolo de rolo 50g",
    en: "Mini roll cake 50g",
  },
};

export const flavors: Record<string, Localized> = {
  "flavor-trad-goiabada": {
    pt: "Massa tradicional com goiabada",
    en: "Traditional dough with guava",
  },
  "flavor-trad-doce-leite": {
    pt: "Massa tradicional com doce de leite",
    en: "Traditional dough with dulce de leche",
  },
  "flavor-trad-brigadeiro-branco": {
    pt: "Massa de chocolate com brigadeiro branco",
    en: "Chocolate dough with white brigadeiro",
  },
  "flavor-topping-goiabada-parmesao": {
    pt: "Goiabada com brigadeiro de parmesão",
    en: "Guava with parmesan brigadeiro",
  },
  "flavor-topping-doce-leite-cappuccino": {
    pt: "Doce de leite com brigadeiro de cappuccino",
    en: "Dulce de leche with cappuccino brigadeiro",
  },
  "flavor-jar-goiabada-parmesao": {
    pt: "Goiabada com brigadeiro de parmesão",
    en: "Guava with parmesan brigadeiro",
  },
  "flavor-jar-churros-doce-leite": {
    pt: "Churros com Doce de leite",
    en: "Churros with dulce de leche",
  },
  "flavor-jar-chocolate-brigadeiro-branco": {
    pt: "Chocolate com Brigadeiro branco",
    en: "Chocolate with white brigadeiro",
  },
  "flavor-casadinho-goiabada": {
    pt: "Sabor goiabada",
    en: "Guava flavor",
  },
  "flavor-naked-goiabada-parmesao-frutas": {
    pt: "Goiabada com brigadeiro de parmesão c/ frutas",
    en: "Guava with parmesan brigadeiro and fruits",
  },
  "flavor-naked-doce-leite-cappuccino-brigadeiros": {
    pt: "Doce de leite com brigadeiro de cappuccino c/ brigadeiros",
    en: "Dulce de leche with cappuccino brigadeiro and truffles",
  },
  "flavor-mini-trad-goiabada": {
    pt: "Massa tradicional com goiabada",
    en: "Traditional dough with guava",
  },
  "flavor-mini-trad-doce-leite": {
    pt: "Massa tradicional com doce de leite",
    en: "Traditional dough with dulce de leche",
  },
  "flavor-mini-chocolate-brigadeiro-branco": {
    pt: "Massa de chocolate com brigadeiro branco",
    en: "Chocolate dough with white brigadeiro",
  },
};

export const texts: Record<string, Localized> = {
  "text-1-title": {
    pt: "Camadas de tradição. Sabor de casa.",
    en: "Layers of tradition. Taste of home.",
  },
  "text-1-p1": {
    pt: "Cada produto do Paparico é feito artesanalmente, com atenção a cada detalhe e respeito absoluto à tradição do bolo de rolo pernambucano.",
    en: "Each Paparico product is handmade, with attention to every detail and full respect for the Pernambuco roll cake tradition.",
  },
  "text-1-p2": {
    pt: "Aqui, cada escolha carrega sabor, memória e aquele afeto simples que transforma um bolo em um abraço.",
    en: "Here, every choice carries flavor, memory, and that simple warmth that turns a cake into a hug.",
  },
  "text-2-title": {
    pt: "Seu evento ainda mais especial.",
    en: "Make your event even more special.",
  },
  "text-2-p1": {
    pt: "Cada celebração tem a sua própria história — e nós gostamos de fazer parte dela. No Paparico, desenvolvemos pedidos sob encomenda, pensados de acordo com a sua ideia, o seu momento e o cuidado que a ocasião merece.",
    en: "Each celebration has its own story — and we love being part of it. At Paparico, we craft made-to-order requests, tailored to your idea, your moment, and the care the occasion deserves.",
  },
  "text-2-p2": {
    pt: "Entre em contacto connosco e vamos criar juntos algo especial, feito à mão e com afeto.",
    en: "Get in touch and let's create something special together, handmade and with care.",
  },
};

export const productGrid: GridSource = [
  {
    type: "item",
    id: "bolo-tradicional",
    image: "/products/bolo-de-rolo-tradicional.jpg",
    sizes: [
      { id: "size-trad-450", price: 14.5 },
      { id: "size-trad-900", price: 24 },
    ],
    flavors: ["flavor-trad-goiabada", "flavor-trad-doce-leite", "flavor-trad-brigadeiro-branco"],
  },
  {
    type: "item",
    id: "bolo-toppings",
    image: "/products/bolo-de-rolo-toppings-doce-de-leite.png",
    sizes: [
      { id: "size-toppings-550", price: 22.5 },
      { id: "size-toppings-1100", price: 38 },
    ],
    flavors: ["flavor-topping-goiabada-parmesao", "flavor-topping-doce-leite-cappuccino"],
  },
  {
    type: "text",
    id: "text-1",
    titleId: "text-1-title",
    paragraphIds: ["text-1-p1", "text-1-p2"],
  },
  {
    type: "item",
    id: "bolo-fatia",
    image: "/products/bolo-de-rolo-fatia.jpg",
    sizes: [{ id: "size-slice-50", price: 2.5 }],
    flavors: ["flavor-trad-goiabada", "flavor-trad-doce-leite", "flavor-trad-brigadeiro-branco"],
  },
  {
    type: "item",
    id: "bolo-pote",
    image: "/products/bolo-de-pote.jpg",
    sizes: [{ id: "size-jar-150", price: 7 }],
    flavors: [
      "flavor-jar-goiabada-parmesao",
      "flavor-jar-churros-doce-leite",
      "flavor-jar-chocolate-brigadeiro-branco",
    ],
  },
  {
    type: "item",
    id: "casadinho",
    image: "/products/casadinho.png",
    sizes: [{ id: "size-casadinho-120", price: 4 }],
    flavors: ["flavor-casadinho-goiabada"],
  },
  {
    type: "item",
    id: "bolo-naked",
    image: "/products/bolo-de-rolo-naked-recheado.jpg",
    sizes: [{ id: "size-naked-4500", price: 88 }],
    flavors: [
      "flavor-naked-goiabada-parmesao-frutas",
      "flavor-naked-doce-leite-cappuccino-brigadeiros",
    ],
  },
  {
    type: "text",
    id: "text-2",
    titleId: "text-2-title",
    paragraphIds: ["text-2-p1", "text-2-p2"],
  },
  {
    type: "item",
    id: "mini-bolo",
    image: "/products/events/mini.jpg",
    sizes: [{ id: "size-mini-50", price: 2.5 }],
    flavors: [
      "flavor-mini-trad-goiabada",
      "flavor-mini-trad-doce-leite",
      "flavor-mini-chocolate-brigadeiro-branco",
    ],
  },
];
