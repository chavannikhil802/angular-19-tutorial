import { Component, computed, signal } from '@angular/core';

@Component({
  selector: 'app-chp-21',
  imports: [],
  templateUrl: './chp-21.component.html',
  styleUrl: './chp-21.component.css'
})
export class Chp21Component {

  // NORMAL VARIABLES
  x: number = 10;
  y: number = 20;
  z: number = this.x + this.y;

  // SIGNALS
  a = signal(20);
  b = signal(40);
  // COMPUTED SIGNALS ARE READ-ONLY
  // THEY CANNOT BE UPDATED DIRECTLY
  // THEY CAN BE UPDATED WHEN ONE OF THE DEPENDENT VALUE IS UPDATED
  // IN THIS CASE, C WILL BE UPDATED ONLY WHEN THE VALUE OF A AND B IS UDPATED
  c = computed(() => this.a() + this.b());

  // NORMAL FUNCTION
  showValue() {
    console.log("z before update: ",this.z);
    this.x = 100;
    console.log("z after update: ", this.z);
  }

  // FUNCTION FOR SIGNAL
  showSignalValue() {
    console.log("Signal c before updating a: ", this.c());
    // this.a.set(200);
    console.log("Signal c after updating a: ", this.c());
    // SET AND UPDATE CANNOT BE APPLIED TO COMPUTED SIGNAL
    // this.c. set(500);
    // this.c.update(400);
  }

  updateAValue() {
    this.a.set(250);
    console.log("Value of signal a: ", this.a());
  }

  updateBValue() {
    this.b.set(850);
    console.log("Value of signal b: ", this.b());
  }
}
