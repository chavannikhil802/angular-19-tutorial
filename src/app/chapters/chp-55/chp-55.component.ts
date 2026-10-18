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
  selectedUser: User | undefined;

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
    if(!this.selectedUser) {
      this.usersService.saveUsers(user).subscribe((data: User) => {
        if(data) {
          this.getUsers()
        }
      });
    }
    else {
      console.log("Update User here");
      console.log(user);
    }
  }

  deleteUser(id: string) {
    this.usersService.deleteUser(id).subscribe((data:User)=>{
      console.log(data);
      if(data) {
        this.getUsers()
      }      
    });
  }

  selectUser(id: string) {
    this.usersService.getSelectedUser(id).subscribe((data:User)=>{
      console.log(data);
      this.selectedUser = data;
    });
  }
}

