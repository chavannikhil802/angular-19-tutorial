import { Component } from '@angular/core';

@Component({
  selector: 'app-chp-11',
  imports: [],
  templateUrl: './chp-11.component.html',
  styleUrl: './chp-11.component.css'
})
export class Chp11Component {

  count: number = 0;

  handleCounter(value: string) {
    if(value == "decrement") {
      this.handleDecrement();
    }
    else if(value == "increment") {
      this.handleIncrement();
    }
    else {
      this.handleReset()
    }
  }

  handleIncrement() {
    this.count++;
  }
  handleDecrement() {
    this.count--;
  }
  handleReset() {
    this.count = 0;
  }
}
