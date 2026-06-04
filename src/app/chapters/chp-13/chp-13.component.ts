import { Component } from '@angular/core';

@Component({
  selector: 'app-chp-13',
  imports: [],
  templateUrl: './chp-13.component.html',
  styleUrl: './chp-13.component.css'
})
export class Chp13Component {

  name: string = ""
  finalName: string = ""
  email: string = ""

  getName(event: Event) {

    const username = (event.target as HTMLInputElement).value;
    this.name = username;
  }

  displayName() {
    this.finalName = this.name;
  }

  setName() {
    this.name = "Nikhil Narendra Chavan"
  }

  getEmail(value: string) {
    this.email = value;
  }

  setEmail() {
    this.email = "nikhil@test.com";
  }
}

