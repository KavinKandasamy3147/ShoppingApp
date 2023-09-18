import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from './shopping-list.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css'],
})
export class ShoppingListComponent implements OnInit {
  ingredients!: Ingredient[];
  ngOnInit(): void {
    this.ingredients = this.slService.getIngredients();
    this.slService.ingredentsChanged.subscribe((ingredients: Ingredient[])=>{
      this.ingredients = ingredients;
    });
  }
  constructor(private slService: ShoppingListService) {}

}
