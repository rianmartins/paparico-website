import React, { type ReactNode } from "react";

export type ChristmasMenuItem = {
  image: string;
  title: string;
  description: string | ReactNode;
  price: number;
  moreInfo?: string;
};

export const christmasMenu: ChristmasMenuItem[] = [
  {
    image: "/products/natal/tronco.jpg",
    title: "Tronco de Chocolate",
    description:
      "Clássico natalino em versão Paparico: bolo de rolo de chocolate moldado em formato de tronco, com recheio de brigadeiro branco e cobertura de chocolate belga 53%. Finalizado com acabamento artístico e decorações festivas que encantam à mesa.",
    price: 32,
    moreInfo: "(Serve até 10 pessoas)",
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
    title: "Cheesecake de goiabada",
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
    title: "Palitos crocante Bolo de Rolo",
    description: (
      <>
        <p>
          Palitos crocantes de bolo de rolo sabor goiabada, decorados em chocolate branco belga e
          embalados com todo o encanto do Natal.
        </p>
        <p>
          Acompanha um pote em cerâmica natalina exclusiva, perfeito para presentear ou decorar a
          mesa das festas. Uma combinação delicada entre o sabor artesanal do Paparico e a magia do
          Natal.
        </p>
      </>
    ),
    price: 8.5,
  },
];
