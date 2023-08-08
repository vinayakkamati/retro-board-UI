import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import { Category } from "src/app/models/category.interface";

const categories = [
    {
      "categoryName": "Went Well",
      "categoryId": 1,
      "categoryValue": "WENT_WELL"
    },
    {
      "categoryName": "To Improve",
      "categoryId": 2,
      "categoryValue": "TO_IMPROVE"
    },
    {
      "categoryName": "Action Items",
      "categoryId": 3,
      "categoryValue": "ACTION_ITEMS"
    }
  ]

@Injectable({
  providedIn: "root"
})
export class CardService {
  
  private categories: Category[] = categories;

  getCategories(): Observable<Category[]> {
    return of(categories);
  }
}