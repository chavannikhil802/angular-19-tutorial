import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-chp-42-user',
  imports: [],
  templateUrl: './chp-42-user.component.html',
  styleUrl: './chp-42-user.component.css'
})
export class Chp42UserComponent {

  @Input() user: string = '';
  @Input() city: string = '';
}
