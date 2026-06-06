import { Component } from '@angular/core';

@Component({
  selector: 'app-chp-17',
  imports: [],
  templateUrl: './chp-17.component.html',
  styleUrl: './chp-17.component.css'
})
export class Chp17Component {

  color: string = "";

  changeColor(colorName: string) {
    this.color = colorName;
  }

  setColor(event: Event) {
    const inputColor = (event.target as HTMLInputElement).value;
    this.color = inputColor;
  }
}
