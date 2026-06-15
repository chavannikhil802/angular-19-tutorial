import { NgIf } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-chp-27',
  imports: [
    NgIf
  ],
  templateUrl: './chp-27.component.html',
  styleUrl: './chp-27.component.css'
})
export class Chp27Component {
  show: boolean = true;
}
