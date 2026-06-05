import { Component } from '@angular/core';

@Component({
  selector: 'app-chp-16',
  imports: [],
  templateUrl: './chp-16.component.html',
  styleUrl: './chp-16.component.css'
})
export class Chp16Component {

  color: string = "red";

  changeColor(blockColor: string) {
    this.color = blockColor;
  }

  handleInputColor(event: Event) {
    this.color = (event.target as HTMLInputElement).value;
  }
}
