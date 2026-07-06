import { Routes } from '@angular/router';
import { AboutComponent } from './chapters/chp-31/about/about.component';
import { ContactComponent } from './chapters/chp-31/contact/contact.component';
import { LoginComponent } from './chapters/chp-31/login/login.component';

export const routes: Routes = [
    { path: 'about', component: AboutComponent },
    { path: 'contact', component: ContactComponent },
    { path: 'login', component: LoginComponent },
];
