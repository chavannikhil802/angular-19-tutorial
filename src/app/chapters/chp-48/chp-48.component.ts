import { Component } from '@angular/core';
import { UserService } from './services/user.service';

@Component({
  selector: 'app-chp-48',
  imports: [],
  templateUrl: './chp-48.component.html',
  styleUrl: './chp-48.component.css'
})
export class Chp48Component {

  userData: {
    name: string;
    age: number;
    email: string;
  }[] | undefined;

  constructor(private user: UserService) {}

  getUserData() {
    this.userData = this.user.getUserData();
    console.log(this.userData);
    
  }
}
