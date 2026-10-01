import { Component } from '@angular/core';
import { Chp44UserComponent } from './chp-44-user/chp-44-user.component';

@Component({
  selector: 'app-chp-44',
  imports: [
    Chp44UserComponent
  ],
  templateUrl: './chp-44.component.html',
  styleUrl: './chp-44.component.css'
})
export class Chp44Component {

  users: undefined | string[];

  handleUsers(users: string[]) {
    console.log(users);
    this.users = users;
  }
}
