import { Component } from '@angular/core';
import { Chp15Component } from './chapters/chp-15/chp-15.component';
// import { RouterOutlet } from '@angular/router';
// import { LoginComponent } from './login/login.component';
// import { SignupComponent } from './signup/signup.component';
// import { ProfileComponent } from './profile/profile.component';
// import { Chp10Component } from './chapters/chp-10/chp-10.component';
// import { Chp11Component } from './chapters/chp-11/chp-11.component';
// import { Chp12Component } from './chapters/chp-12/chp-12.component';
// import { Chp13Component } from './chapters/chp-13/chp-13.component';
// import { Chp14Component } from './chapters/chp-14/chp-14.component';

@Component({
  selector: 'app-root',
  imports: [
    // RouterOutlet, 
    // LoginComponent, 
    // SignupComponent, 
    // ProfileComponent,
    // Chp10Component,
    // Chp11Component,
    // Chp12Component, 
    // Chp13Component, 
    // Chp14Component 
    Chp15Component
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Angular 19 Tutorial Project';
  name: string = "Nikhil"
}
