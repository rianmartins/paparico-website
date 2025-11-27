export type Review = {
  name: string;
  rating: number; // 1–5
  text: string;
  date: string;
};

export const reviews: Review[] = [
  {
    name: "Joana",
    rating: 5,
    text: "O melhor bolo de rolo que já provei em Portugal. Sabor de casa, puro carinho!",
    date: "2025-07-08",
  },
  {
    name: "Carlos",
    rating: 5,
    text: "Experiência incrível! Embalagem linda e sabor espetacular.",
    date: "2025-07-08",
  },
  {
    name: "Ana",
    rating: 5,
    text: "Atendimento impecável e entrega super rápida. Recomendo de olhos fechados.",
    date: "2025-07-08",
  },
];
