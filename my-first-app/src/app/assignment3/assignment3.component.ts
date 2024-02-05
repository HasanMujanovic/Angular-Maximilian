import { Component } from '@angular/core';

@Component({
  selector: 'app-assignment3',
  templateUrl: './assignment3.component.html',
  styleUrls: ['./assignment3.component.css'],
})
export class Assignment3Component {
  toggleDisplay = true;
  clickArray = [];
  numberClicked: number = 0;
  onClickAddArray() {
    this.numberClicked++;
    // this.clickArray.push(this.clickArray.length + 1);
    // this.clickArray.push(this.numberClicked);
    this.clickArray.push(new Date());
  }
  getColor() {
    return this.numberClicked >= 4 ? 'blue' : 'transparent';
  }
}
