import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-chp-40',
  imports: [
    FormsModule
  ],
  templateUrl: './chp-40.component.html',
  styleUrl: './chp-40.component.css'
})
export class Chp40Component {

  userDetails: any

  addDetails(val: any) {
    console.log(val);
    this.userDetails = val;
  }
}
