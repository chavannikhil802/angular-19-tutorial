import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-chp-47',
  imports: [],
  templateUrl: './chp-47.component.html',
  styleUrl: './chp-47.component.css'
})
export class Chp47Component {

  @Input() counter = 0;
  name: string = "Nikhil";

  constructor() {
    console.log("Constructor");
    this.name = "Nikhil Chavan"
  }

  ngOnInit() {
    console.log("NgOnInit");
    this.name = "Nikhil Narendra Chavan";
  }

  ngOnChanges() {
    console.log("Value changed");
    
  }

  ngOnDestroy() {
    console.log("Destroy");
    
  }
}
