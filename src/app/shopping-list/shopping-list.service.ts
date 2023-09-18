import { EventEmitter } from "@angular/core";
import { Ingredient } from "../shared/ingredient.model";

export class ShoppingListService {
  ingredentsChanged = new EventEmitter<Ingredient[]>();
  ingredients: Ingredient[] = [
    new Ingredient('apple', 10),
    new Ingredient('orange', 5),
  ];

  getIngredients(){
    return this.ingredients.slice();
  }

  adIngredients(ingredient: Ingredient){
    this.ingredients.push(ingredient);
    this.ingredentsChanged.emit(this.ingredients.slice());
  }
}
