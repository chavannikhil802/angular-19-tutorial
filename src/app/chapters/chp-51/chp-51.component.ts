  import { Component } from '@angular/core';
import { UsersService } from './services/users.service';

@Component({
  selector: 'app-chp-51',
  imports: [],
  templateUrl: './chp-51.component.html',
  styleUrl: './chp-51.component.css'
})
export class Chp51Component {

  users: any;

  constructor(private usersService: UsersService) {}

  ngOnInit() {
    this.usersService.getUsers().subscribe((data: any) => {
      this.users = data;
      console.log(this.users);
    });
  }
}
