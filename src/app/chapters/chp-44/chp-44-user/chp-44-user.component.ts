import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-chp-44-user',
  imports: [],
  templateUrl: './chp-44-user.component.html',
  styleUrl: './chp-44-user.component.css'
})
export class Chp44UserComponent {

  @Output() getUsers = new EventEmitter();

  users = ['Nikhil', 'Umesh', 'Sahil', 'Abhshek', 'Vaibhav'];

  loadData() {
    this.getUsers.emit(this.users);
  }
}
