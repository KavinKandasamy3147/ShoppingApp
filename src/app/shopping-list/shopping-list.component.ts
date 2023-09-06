import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css'],
})
export class ShoppingListComponent implements OnInit {
  ingredients: Ingredient[] = [
    new Ingredient('apple', 10),
    new Ingredient('orange', 5),
  ];
  ngOnInit(): void {}
  constructor() {}
  onIngredientAdded(ingredient: Ingredient) {
    this.ingredients.push(ingredient);
  }
}
