import { Component } from '@angular/core';
import { UsersService } from './services/users.service';
import { User } from './interfaces/User';

@Component({
  selector: 'app-chp-53',
  imports: [],
  templateUrl: './chp-53.component.html',
  styleUrl: './chp-53.component.css'
})
export class Chp53Component {

  users: User[] = [];

  constructor(private usersService: UsersService) {}

  ngOnInit() {
    this.usersService.getUsers().subscribe((data: User[]) => {
      this.users = data;
      console.log(this.users);
    });
  }
}
