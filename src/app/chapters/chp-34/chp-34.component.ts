import { Component } from '@angular/core';
import { Router, RouterLink, RouterModule } from '@angular/router';
import { Chp34HeaderComponent } from './chp-34-header/chp-34-header.component';

@Component({
  selector: 'app-chp-34',
  imports: [RouterModule, Chp34HeaderComponent],
  templateUrl: './chp-34.component.html',
  styleUrl: './chp-34.component.css'
})
export class Chp34Component {

  constructor(private router: Router) {}

  goToProfile() {
    this.router.navigate(['chp-34/profile'], {queryParams:{name: 'Nikhil Chavan'}})
  }
}
