import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-chp-34-profile',
  imports: [],
  templateUrl: './chp-34-profile.component.html',
  styleUrl: './chp-34-profile.component.css'
})
export class Chp34ProfileComponent {

  userName: string | null = '';

  constructor(private route: ActivatedRoute) {}

  ngOnInit():void {

    // CODE WHEN THE VALUE IS PASSED THROUGH MENU URL
    this.userName = this.route.snapshot.paramMap.get('name');
    console.log('Name: ', this.userName)

    // CODE WHEN THE VALUE IS PASSED THROUGH BUTTON CLICK
    this.route.queryParams.subscribe(params=>{
      this.userName = params['name']
      console.log(params)
    })    
  }
}
