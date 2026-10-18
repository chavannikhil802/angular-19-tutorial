import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { User } from './interfaces/User';
import { UsersService } from './services/users.service';

@Component({
  selector: 'app-chp-55',
  imports: [
    FormsModule
  ],
  templateUrl: './chp-55.component.html',
  styleUrl: './chp-55.component.css'
})
export class Chp55Component {

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

  deleteUser(id: string) {
    console.log(id);
    this.usersService.deleteUser(id).subscribe((data:User)=>{
      console.log(data);
      if(data) {
        this.getUsers()
      }      
    });
  }
}

