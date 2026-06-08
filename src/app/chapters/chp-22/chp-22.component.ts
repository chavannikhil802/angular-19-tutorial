import { Component, effect, signal } from '@angular/core';

@Component({
  selector: 'app-chp-22',
  imports: [],
  templateUrl: './chp-22.component.html',
  styleUrl: './chp-22.component.css'
})
export class Chp22Component {

  username = signal("Nikhil");
  displayHeading: boolean = false
  count = signal(0);

  constructor() {
    // effect() IS CALLED WHENEVER A SIGNAL IT READS CHANGES ITS VALUE
    // HERE, effect() WILL BE CALLED WHENEVER THESE IS A CHANGE IN username() OR count()
    effect(() => {
      console.log("Username: ", this.username());
      console.log("Count: ", this.count());

      if(this.count()%2 == 0) {
        this.displayHeading = true;
        setTimeout(() => {
          this.displayHeading = false;
        }, 2000)
      }
      else {
        this.displayHeading = false;
      }
    })
  }

  toggleValue() {
    this.count.set(this.count()+1);
    // this.displayHeading = !this.displayHeading;
  }
}
