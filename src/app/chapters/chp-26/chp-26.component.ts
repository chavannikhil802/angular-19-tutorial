import { Component } from '@angular/core';

@Component({
  selector: 'app-chp-26',
  imports: [],
  templateUrl: './chp-26.component.html',
  styleUrl: './chp-26.component.css'
})
export class Chp26Component {

  color: string = "red";
  fontSize: string =  "30";

  headingSizeBig: string = "80";
  headingSizeSmall: string = "40";

  zoom: boolean = false;

  updateHeadingSize() {
    this.zoom = !this.zoom;
  }
}
