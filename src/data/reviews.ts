export type Review = {
  name: string;
  origin: string;
  headline: string;
  rating: number; // 1–5
  text: string;
};

export const reviews: Review[] = [
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
];
