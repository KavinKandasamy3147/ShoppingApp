import { EventEmitter, Injectable } from "@angular/core";
import { Recipe } from "./recipe.model";
import { Ingredient } from "../shared/ingredient.model";
import { ShoppingListService } from "../shopping-list/shopping-list.service";
import { Subject } from "rxjs";

@Injectable()
export class RecipeService {
  recipesChanged = new Subject<Recipe[]>();
  recipeSelected = new Subject<Recipe>();
  private recipes: Recipe[] = [
    new Recipe(
      'chorizo-mozarella-gnocchi-bake-cropped',
      'this is my first recipe',
      'https://images.immediate.co.uk/production/volatile/sites/30/2020/08/chorizo-mozarella-gnocchi-bake-cropped-9ab73a3.jpg?quality=90&resize=556,505',
      [(new Ingredient('-bake-cropped', 20))]
    ),

    new Recipe(
      'mutton-briyani',
      'this is my first recipe',
      '../../assets/recipe/mutton-briyani.png',
      [new Ingredient('chiken pice', 1), new Ingredient('egg', 1)]
    ),
    new Recipe(
      'fish fry',
      'this is my first recipe',
      '../../assets/recipe/fish fry.jpg',
      [new Ingredient('Fish', 3)]
    ),
    new Recipe(
      'Chiken Gravey',
      'this is my first recipe',
      '../../assets/recipe/Chiken Gravey.jpg',
      [new Ingredient('meat',10)]
    ),
  ];

  getRecipes() {
    return this.recipes.slice();
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]){
    this.slService.addIngredients(ingredients)
  }

  getRecipe(index: number){
    return this.recipes[index]
  }

  addRecipe(recipe: Recipe){
    this.recipes.push(recipe);
    this.recipesChanged.next(this.recipes.slice());
  }

  updateRecipe(index: number,newRecipe: Recipe){
    this.recipes[index] = newRecipe;
    this.recipesChanged.next(this.recipes.slice());
  }

  deleteRecipe(index: number){
    this.recipes.splice(index,1)
    this.recipesChanged.next(this.recipes.slice());
  }
  constructor(private slService: ShoppingListService){}
}
