import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-chp-38',
  imports: [
    ReactiveFormsModule
  ],
  templateUrl: './chp-38.component.html',
  styleUrl: './chp-38.component.css'
})
export class Chp38Component {

  profileForm = new FormGroup({
    username: new FormControl(), 
    password: new FormControl(), 
    email: new FormControl()
  });

  onSubmit() {
    console.log(this.profileForm.value);
  }

  setValues() {
    this.profileForm.setValue({
      username: "Nikhil Narendra Chavan",
      password: "123456",
      email: "chavannikhil802@gmail.com"
    })
  }
}
