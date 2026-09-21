import { Component } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  imports: [
    ReactiveFormsModule
  ],
  templateUrl: './reactive-form.component.html',
  styleUrl: './reactive-form.component.css'
})
export class ReactiveFormComponent {

  username = new FormControl('Nikhil');
  password = new FormControl('123456');

  displayValues() {
    console.log(this.username.value, this.password.value);
  }

  updateValues() {
    this.username.setValue("Ronnie");
    this.password.setValue("180924");
  }
}
