import { Component, effect, signal } from '@angular/core';

@Component({
  selector: 'app-chp-19',
  imports: [],
  templateUrl: './chp-19.component.html',
  styleUrl: './chp-19.component.css'
})
export class Chp19Component {

  count = signal(10);

  constructor() {
    // USED TO DISPLAY COUNT VALUE IN CONSOLE
    effect(() => {
      console.log(this.count());
    })
  }

  increment() {
    this.count.set(this.count()+1);
  }

  decrement() {
    this.count.set(this.count()-1);
  }

  reset() {
    this.count.set(10);
  }
}
