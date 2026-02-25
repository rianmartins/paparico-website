import { reviewsByLanguage } from "@/data/reviews";
import { type ReviewsByLanguage } from "@/types/Reviews";

export class ReviewsAPI {
  static async getItems(): Promise<ReviewsByLanguage> {
    // Mocked backend call returning localized reviews.
    return Promise.resolve(reviewsByLanguage);
  }
}
