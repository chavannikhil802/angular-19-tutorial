import { Component, computed, Signal, signal, WritableSignal } from '@angular/core';

@Component({
  selector: 'app-chp-20',
  imports: [],
  templateUrl: './chp-20.component.html',
  styleUrl: './chp-20.component.css'
})
export class Chp20Component {
  
  // YOU CANNOT UPDATE THE SIGNAL IF IT IS DECLARED AS NUMBER AND ANY OTHER DATA TYPE
  // IN ORDER TO UPDATE, IT MUST ONLY BE OF TYPE number
  // HERE, THE PRESENT IN THE SIGNAL CAN BE OF TYPE number OR string
  data = signal<number | string>(10);

  // HERE, WritableSignal DEFINES THE DATA TYPE OF SIGNAL
  data2: WritableSignal<number | string> = signal("Nikhil");

  // COMPUTED SIGNAL
  // READ-ONLY SIGNAL
  // CANNOT BE CHANGES AFTER DECLARING AND ASSIGNING A VALUE
  count:Signal<number> = computed(() => 20);

  updateSignal() {
    this.data.set("Nikhil");

    // YOU CANNOT CHANGE THE VALUE OF COMPUTED SIGNAL
    // this.count.set(20);
  }
}
