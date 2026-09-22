import { Component } from '@angular/core';
import { FormGroup, FormControl, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-chp-39',
  imports: [
    ReactiveFormsModule
  ],
  templateUrl: './chp-39.component.html',
  styleUrl: './chp-39.component.css'
})
export class Chp39Component {

  profileForm = new FormGroup({
    username: new FormControl("", [Validators.required]), 
    password: new FormControl("", [Validators.required, Validators.minLength(5)]), 
    email: new FormControl("", [Validators.required, Validators.maxLength(20), Validators.pattern("^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$")])
  });

  onSubmit() {
    console.log(this.profileForm.value);
  }

  get username() {
    return this.profileForm.get("username");
  }

  get password() {
    return this.profileForm.get("password");
  }

  get email() {
    return this.profileForm.get("email");
  }

  // setValues() {
  //   this.profileForm.setValue({
  //     username: "Nikhil Narendra Chavan",
  //     password: "123456",
  //     email: "chavannikhil802@gmail.com"
  //   })
  // }
}
