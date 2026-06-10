import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-chp-24',
  imports: [
    FormsModule
  ],
  templateUrl: './chp-24.component.html',
  styleUrl: './chp-24.component.css'
})
export class Chp24Component {
 name: string = "Nikhil"
 functionName: string = "Nikhil Chavan"

 updateName(event: Event) {
  let nameValue = (event.target as HTMLInputElement).value;
  this.functionName = nameValue
 }
}
