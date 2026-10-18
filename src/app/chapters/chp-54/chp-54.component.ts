import { Component } from '@angular/core';
import { User } from './interfaces/User';
import { UsersService } from './services/users.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-chp-54',
  imports: [
    FormsModule
  ],
  templateUrl: './chp-54.component.html',
  styleUrl: './chp-54.component.css'
})
export class Chp54Component {

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
