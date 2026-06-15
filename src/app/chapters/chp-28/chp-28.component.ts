import { NgFor } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-chp-28',
  imports: [
    NgFor
  ],
  templateUrl: './chp-28.component.html',
  styleUrl: './chp-28.component.css'
})
export class Chp28Component {

  students = ["Nikhil", "Umesh", "Ketan", "Sahil", "Vaibhav", "Abhishek", "Shreyas", "Hemanshu"]

  studentsData = [
    {
      name: "Nikhil",
      age: 33,
      email: "nikhil@abc.com"
    },
    {
      name: "Umesh",
      age: 43,
      email: "umesh@abc.com"
    },
    {
      name: "Ketan",
      age: 39,
      email: "ketan@abc.com"
    },
    {
      name: "Sahil",
      age: 23,
      email: "sahil@abc.com"
    },
  ]
}
