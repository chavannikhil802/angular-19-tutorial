import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-chp-43-user',
  imports: [],
  templateUrl: './chp-43-user.component.html',
  styleUrl: './chp-43-user.component.css'
})
export class Chp43UserComponent {

  @Input() user: string = "";
}
