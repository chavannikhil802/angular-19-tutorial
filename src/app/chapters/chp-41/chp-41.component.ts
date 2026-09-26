import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-chp-41',
  imports: [
    FormsModule
  ],
  templateUrl: './chp-41.component.html',
  styleUrl: './chp-41.component.css'
})
export class Chp41Component {

  userDetails: any

  addDetails(val: any) {
    console.log(val);
    this.userDetails = val;
  }
}
