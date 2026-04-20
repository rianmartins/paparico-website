import { type Language } from "@/i18n/translations";

export const FACEBOOK_URL = "https://www.facebook.com/share/1FKLXF47iM/?mibextid=wwXIfr";
export const INSTAGRAM_URL = "https://www.instagram.com/paparico.prc/";
export const WHATSAPP_URL = "https://wa.me/351932774555";
export const TIKTOK_URL = "https://www.tiktok.com/@paparico.prc";
export const CONTACT_EMAIL = "comercial@paparico.pt";
export const CONTACT_PHONE = "+351 932 774 555";
export const CONTACT_PHONE_E164 = "+351932774555";

export const MENU_LINK = "https://drive.google.com/file/d/16e2WscNJmkd6gY_MckUQlF_7mRVDXCYe";
export const REVIEW_LINK = "https://g.page/r/CdjjyJx8R5QDEBM/review";

type HomeImageAltText = Record<
  Language,
  {
    coverMobile: string;
    productSlices: string;
    platedSlice: string;
    slicedRoll: string;
    breakfastTray: string;
    cover: string;
    nakedCake: string;
    giftBox: string;
    classicSlices: string;
    dessertSquares: string;
    chocolateRoll: string;
    orderInfo: string;
    berriesCake: string;
    packagedSlices: string;
    map: string;
  }
>;

export const HOME_IMAGE_ALT_TEXT: HomeImageAltText = {
  pt: {
    coverMobile: "Bolo de rolo artesanal Paparico em detalhe",
    productSlices: "Fatias de bolo de rolo artesanal com goiabada",
    platedSlice: "Fatia de bolo de rolo servida em prato com colher de goiabada",
    slicedRoll: "Bolo de rolo Paparico fatiado com camadas finas",
    breakfastTray: "Bandeja com bolo de rolo, chá e doces artesanais Paparico",
    cover: "Mesa com bolo de rolo e doces artesanais Paparico",
    nakedCake: "Naked bolo de rolo com frutas vermelhas",
    giftBox: "Caixa de presente Paparico com casadinhos",
    classicSlices: "Fatias tradicionais de bolo de rolo Paparico",
    dessertSquares: "Quadrados de doce com fatias de bolo de rolo",
    chocolateRoll: "Bolo de rolo de chocolate decorado",
    orderInfo: "Fatias de bolo de rolo Paparico para encomenda",
    berriesCake: "Bolo de rolo com creme e frutos vermelhos",
    packagedSlices: "Embalagens individuais de bolo de rolo Paparico",
    map: "Mapa decorativo do Paparico em Portugal",
  },
  en: {
    coverMobile: "Close-up of handmade Paparico bolo de rolo",
    productSlices: "Handmade bolo de rolo slices with guava filling",
    platedSlice: "Bolo de rolo slice served on a plate with guava spoon",
    slicedRoll: "Sliced Paparico bolo de rolo with thin layers",
    breakfastTray: "Tray with bolo de rolo, tea, and handmade Paparico sweets",
    cover: "Table with Paparico bolo de rolo and handmade sweets",
    nakedCake: "Naked bolo de rolo with berries",
    giftBox: "Paparico gift box with casadinho cookies",
    classicSlices: "Traditional Paparico bolo de rolo slices",
    dessertSquares: "Dessert squares with bolo de rolo slices",
    chocolateRoll: "Decorated chocolate bolo de rolo",
    orderInfo: "Paparico bolo de rolo slices for orders",
    berriesCake: "Bolo de rolo cake with cream and berries",
    packagedSlices: "Individual Paparico bolo de rolo packages",
    map: "Decorative Paparico map in Portugal",
  },
};
