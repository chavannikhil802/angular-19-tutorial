import { NgIf } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-chp-29',
  imports: [
    NgIf
  ],
  templateUrl: './chp-29.component.html',
  styleUrl: './chp-29.component.css'
})
export class Chp29Component {

  show: boolean = true;
  loginStatus: boolean = false;
  block: number = 0;

  changeBlock() {
    if(this.block == 5) {
      this.block = 0;
    }
    else {
      this.block++;
    }
  }
}
