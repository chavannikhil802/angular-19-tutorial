import { Component } from '@angular/core';

@Component({
  selector: 'app-chp-15',
  imports: [],
  templateUrl: './chp-15.component.html',
  styleUrl: './chp-15.component.css'
})
export class Chp15Component {

  display: boolean = true;
  toggleTwoBlocks: boolean = true;

  hideBlock() {
    this.display = false;
  }

  showBlock() {
    this.display = true;
  }

  toggleBlock() {
    this.display = !this.display;
  }

  toggleBlocks() {
    this.toggleTwoBlocks = !this.toggleTwoBlocks;
  }
}
