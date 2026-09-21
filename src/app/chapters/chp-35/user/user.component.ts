import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user',
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {

  constructor(private route: ActivatedRoute) {}

  userId: number = 0;
  userName: string = "";

  ngOnInit() {
    this.route.params.subscribe((params: any) => {
      this.userId = params.id;
      this.userName = params.name;
      // console.log(params)
    })
  }
}
