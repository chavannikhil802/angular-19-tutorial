import { Component } from '@angular/core';
import { Chp42UserComponent } from './chp-42-user/chp-42-user.component';

@Component({
  selector: 'app-chp-42',
  imports: [
    Chp42UserComponent
  ],
  templateUrl: './chp-42.component.html',
  styleUrl: './chp-42.component.css'
})
export class Chp42Component {

  userName = "Nikhil Narendra Chavan";
  currentCity = "Pune";

  selectUser(user: string) {
    this.userName = user;
  }
}
