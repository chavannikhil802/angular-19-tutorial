import { Component } from '@angular/core';

@Component({
  selector: 'app-chp-12',
  imports: [],
  templateUrl: './chp-12.component.html',
  styleUrl: './chp-12.component.css'
})
export class Chp12Component {

  handleEvent(event: any) {
    console.log("Function type - ", event.type);
    console.log("Function target - ", event.target);
  }
}
