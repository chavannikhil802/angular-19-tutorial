import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { ProfileComponent } from './profile/profile.component';
import { Chp10Component } from './chapters/chp-10/chp-10.component';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet, 
    LoginComponent, 
    SignupComponent, 
    ProfileComponent,
    Chp10Component
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Angular 19 Tutorial Project';
  name: string = "Nikhil"
}
