import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [RouterLink],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  users = [
    {
      id: 1,
      name: "Nikhil",
      age: 34,
      email: 'nikhil@test.com'
    },
    {
      id: 2,
      name: "Akshay",
      age: 35,
      email: 'akshay@test.com'
    },
    {
      id: 3,
      name: "Neha",
      age: 31,
      email: 'neha@test.com'
    },
    {
      id: 4,
      name: "Narendra",
      age: 67,
      email: 'narendra@test.com'
    },
    {
      id: 5,
      name: "Savita",
      age: 57,
      email: 'savita@test.com'
    }
  ]
}
