import { Injectable } from '@angular/core';
import { Recipe } from './recipes.model';
import { Ingridient } from '../shared/ingridient.model';
import { ShopingListService } from '../shopping-list/shopingList.service';
import { Subject } from 'rxjs/internal/Subject';

@Injectable()
export class RecipeService {
  recipesChanged = new Subject<Recipe[]>();
  //  private recipes: Recipe[] = [
  //     new Recipe(
  //       'A Test Recipe 1',
  //       'This is simply a test',
  //       'https://assets.bonappetit.com/photos/61b775620fb3fcc4cbf036c1/3:2/w_3000,h_2000,c_limit/20211208%20Spaghetti%20Squash%20with%20Tomato%20Sauce%20and%20Mozarella%20LEDE.jpg',
  //       [new Ingridient('Meat', 1), new Ingridient('French Fries', 20)]
  //     ),
  //     new Recipe(
  //       'A Test Recipe 2',
  //       'This is simply a test',
  //       'https://assets.bonappetit.com/photos/61b775620fb3fcc4cbf036c1/3:2/w_3000,h_2000,c_limit/20211208%20Spaghetti%20Squash%20with%20Tomato%20Sauce%20and%20Mozarella%20LEDE.jpg',
  //       [new Ingridient('Buns', 2), new Ingridient('Meat', 1)]
  //     ),
  //     new Recipe(
  //       'A Test Recipe 3',
  //       'This is simply a test',
  //       'https://assets.bonappetit.com/photos/61b775620fb3fcc4cbf036c1/3:2/w_3000,h_2000,c_limit/20211208%20Spaghetti%20Squash%20with%20Tomato%20Sauce%20and%20Mozarella%20LEDE.jpg',
  //       [new Ingridient('Meat', 3)]
  //     ),
  //   ];
  private recipes: Recipe[] = [];
  constructor(private slService: ShopingListService) {}
  getRecipes() {
    return this.recipes.slice();
  }
  setRecipes(recipes: Recipe[]) {
    this.recipes = recipes;
    this.recipesChanged.next(this.recipes.slice());
  }
  getRecipe(index: number) {
    return this.recipes[index];
  }
  addIngredientsToShoppingList(ingredients: Ingridient[]) {
    this.slService.addIngredients(ingredients);
  }
  addRecipe(recipe: Recipe) {
    this.recipes.push(recipe);
    this.recipesChanged.next(this.recipes.slice());
  }
  updateRecipe(index: number, newRecipe: Recipe) {
    this.recipes[index] = newRecipe;
    this.recipesChanged.next(this.recipes.slice());
  }
  deleteRecipe(index: number) {
    this.recipes.splice(index, 1);
    this.recipesChanged.next(this.recipes.slice());
  }
}
