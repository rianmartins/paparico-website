import { ReviewsAPI } from "@/api/ReviewsAPI";
import { type Language } from "@/i18n/translations";
import { type Review } from "@/types/Reviews";

export class ReviewsService {
  static async getItems(lang: Language): Promise<Review[]> {
    return ReviewsAPI.getItems().then((reviews) => reviews[lang] ?? reviews.pt ?? []);
  }
}
