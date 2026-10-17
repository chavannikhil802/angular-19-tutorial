import { Component } from '@angular/core';
import { UsersService } from './services/users.service';
import { User } from './interfaces/User';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-chp-53',
  imports: [
    FormsModule
  ],
  templateUrl: './chp-53.component.html',
  styleUrl: './chp-53.component.css'
})
export class Chp53Component {

  users: User[] = [];

  constructor(private usersService: UsersService) {}

  ngOnInit() {
    this.getUsers();
  }

  getUsers() {
    this.usersService.getUsers().subscribe((data: User[]) => {
      this.users = data;
      console.log(this.users);
    });    
  }

  addUser(user: User) {
    console.log(user);
    this.usersService.saveUsers(user).subscribe((data: User) => {
      if(data) {
        this.getUsers()
      }
    });
  }
}
