import { Component } from '@angular/core';
import { User } from './interfaces/User';
import { UsersService } from './services/users.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-chp-56',
  imports: [
    FormsModule
  ],
  templateUrl: './chp-56.component.html',
  styleUrl: './chp-56.component.css'
})
export class Chp56Component {

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
