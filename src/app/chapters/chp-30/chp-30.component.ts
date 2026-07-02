import { NgSwitch, NgSwitchCase, NgSwitchDefault } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-chp-30',
  imports: [
    NgSwitch,
    NgSwitchCase,
    NgSwitchDefault
  ],
  templateUrl: './chp-30.component.html',
  styleUrl: './chp-30.component.css'
})
export class Chp30Component {

  color: string = "";
  
  changeColor(colorParam: string) {
    this.color = colorParam;
  }
}
