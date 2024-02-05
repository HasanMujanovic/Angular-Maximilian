import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css'],
})
export class GameControlComponent implements OnInit {
  @Output() incrementedNum = new EventEmitter<number>();
  nInterval;
  value = 0;
  constructor() {}

  ngOnInit(): void {}
  onStartEmmiting() {
    this.nInterval = setInterval(() => {
      this.incrementedNum.emit(this.value + 1);
      this.value++;
    }, 1000);
  }

  onStopEmmiting() {
    clearInterval(this.nInterval);
  }
}
