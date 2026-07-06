import { Routes } from '@angular/router';
import { AboutComponent } from './chapters/chp-31/about/about.component';
import { ContactComponent } from './chapters/chp-31/contact/contact.component';
import { LoginComponent } from './chapters/chp-31/login/login.component';
import { AboutUsPageComponent } from './chapters/chp-32/about-us-page/about-us-page.component';
import { ContactUsPageComponent } from './chapters/chp-32/contact-us-page/contact-us-page.component';
import { LoginPageComponent } from './chapters/chp-32/login-page/login-page.component';
import { HomePageComponent } from './chapters/chp-32/home-page/home-page.component';

export const routes: Routes = [
    { path: 'about', component: AboutComponent },
    { path: 'contact', component: ContactComponent },
    { path: 'login', component: LoginComponent },
    { path: 'home-page', component: HomePageComponent },
    { path: 'about-us', component: AboutUsPageComponent },
    { path: 'contact-us', component: ContactUsPageComponent },
    { path: 'user-login', component: LoginPageComponent },
];
