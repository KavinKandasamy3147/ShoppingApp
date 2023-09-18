import { EventEmitter } from "@angular/core";
import { Recipe } from "./recipe.model";

export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();
  private recipes: Recipe[] = [
    new Recipe(
      'chorizo-mozarella-gnocchi-bake-cropped',
      'this is my first recipe',
      'https://images.immediate.co.uk/production/volatile/sites/30/2020/08/chorizo-mozarella-gnocchi-bake-cropped-9ab73a3.jpg?quality=90&resize=556,505'
    ),

    new Recipe(
      'mutton-briyani',
      'this is my first recipe',
      '../../assets/recipe/mutton-briyani.png'
    ),
    new Recipe(
      'fish fry',
      'this is my first recipe',
      '../../assets/recipe/fish fry.jpg'
    ),
    new Recipe(
      'Chiken Gravey',
      'this is my first recipe',
      '../../assets/recipe/Chiken Gravey.jpg'
    ),
  ];

  getRecipe() {
    return this.recipes.slice();
  }
}
