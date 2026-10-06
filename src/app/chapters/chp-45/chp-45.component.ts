import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-chp-45',
  imports: [
    CommonModule
  ],
  templateUrl: './chp-45.component.html',
  styleUrl: './chp-45.component.css'
})
export class Chp45Component {

  name: string | null = "Nikhil Narendra Chavan";
  date = new Date();
  amount: number = 100;
}
