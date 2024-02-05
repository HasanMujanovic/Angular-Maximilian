import { Component, OnDestroy, OnInit } from '@angular/core';
import { Ingridient } from '../shared/ingridient.model';
import { ShopingListService } from './shopingList.service';
import { Subscription } from 'rxjs';
import { LoggingService } from '../logging.service';
@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css'],
})
export class ShoppingListComponent implements OnInit, OnDestroy {
  ingridients: Ingridient[];
  private subscription: Subscription;
  constructor(
    private shopingListService: ShopingListService,
    private loggingService: LoggingService
  ) {}
  ngOnInit(): void {
    this.ingridients = this.shopingListService.getIngridients();
    this.subscription = this.shopingListService.ingredientChanged.subscribe(
      (ingridients: Ingridient[]) => {
        this.ingridients = ingridients;
      }
    );
    this.loggingService.printLog('Hello from shoping list component ngonit');
  }
  // reciveItem(item: { name: string; amount: number }) {
  //   this.ingridients.push(item);
  // }
  reciveItem(ingredient: Ingridient) {
    this.shopingListService.getIngridients().push(ingredient);
  }
  onEditItem(index: number) {
    this.shopingListService.startedEditing.next(index);
  }
  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
