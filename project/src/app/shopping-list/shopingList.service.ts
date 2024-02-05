import { Subject } from 'rxjs';
import { Ingridient } from '../shared/ingridient.model';
export class ShopingListService {
  ingredientChanged = new Subject<Ingridient[]>();
  startedEditing = new Subject<number>();
  private ingridients: Ingridient[] = [
    new Ingridient('Apples', 5),
    new Ingridient('Tommato', 10),
  ];
  getIngridients() {
    return this.ingridients.slice();
  }
  addIngridientMethod(ingridient: Ingridient) {
    this.ingridients.push(ingridient);
    this.ingredientChanged.next(this.ingridients.slice());
  }
  addIngredients(ingredients: Ingridient[]) {
    // for (let ingredient of ingredients) {
    //   this.addIngridientMethod(ingredient);
    // }
    this.ingridients.push(...ingredients);
    this.ingredientChanged.next(this.ingridients.slice());
  }
  getIngredient(index: number) {
    return this.ingridients[index];
  }
  updateIngredient(index: number, newIngridient: Ingridient) {
    this.ingridients[index] = newIngridient;
    this.ingredientChanged.next(this.ingridients.slice());
  }
  deleteIngredient(index: number) {
    this.ingridients.splice(index, 1);
    this.ingredientChanged.next(this.ingridients.slice());
  }
}
