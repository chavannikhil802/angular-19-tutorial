import { Component } from '@angular/core';
import { Chp43UserComponent } from './chp-43-user/chp-43-user.component';

@Component({
  selector: 'app-chp-43',
  imports: [
    Chp43UserComponent
  ],
  templateUrl: './chp-43.component.html',
  styleUrl: './chp-43.component.css'
})
export class Chp43Component {

  users = ['Nikhil', 'Umesh', 'Sahil', 'Abhshek', 'Vaibhav'];
}
