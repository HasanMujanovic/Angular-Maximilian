import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { Subscription } from 'rxjs/internal/Subscription';
import { Ingridient } from 'src/app/shared/ingridient.model';
import { ShopingListService } from '../shopingList.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css'],
})
export class ShoppingEditComponent implements OnInit, OnDestroy {
  // @Output() ingridEmit = new EventEmitter<{ name: string; amount: number }>();

  // onAdd() {
  //   this.ingridEmit.emit({
  //     name: this.nameInput.nativeElement.value,
  //     amount: this.amountInput.nativeElement.value,
  //   });
  // }
  @ViewChild('f', { static: false }) slForm: NgForm;
  subscription: Subscription;
  editMode = false;
  editedItemIndex: number;
  editedItem: Ingridient;
  constructor(private shopingListService: ShopingListService) {}
  ngOnInit() {
    this.subscription = this.shopingListService.startedEditing.subscribe(
      (index: number) => {
        this.editedItemIndex = index;
        this.editMode = true;
        this.editedItem = this.shopingListService.getIngredient(index);
        this.slForm.setValue({
          name: this.editedItem.name,
          amount: this.editedItem.amount,
        });
      }
    );
  }
  onSubmit(form: NgForm) {
    const value = form.value;
    const newIngridient = new Ingridient(value.name, value.amount);
    if (this.editMode) {
      this.shopingListService.updateIngredient(
        this.editedItemIndex,
        newIngridient
      );
    } else {
      this.shopingListService.addIngridientMethod(newIngridient);
    }
    this.editMode = false;
    form.reset();
  }
  onClear() {
    this.slForm.reset();
    this.editMode = false;
  }
  onDelete() {
    this.shopingListService.deleteIngredient(this.editedItemIndex);
    this.onClear();
  }
  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
