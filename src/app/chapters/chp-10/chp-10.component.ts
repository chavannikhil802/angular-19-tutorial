import { Component } from '@angular/core';

@Component({
  selector: 'app-chp-10',
  imports: [],
  templateUrl: './chp-10.component.html',
  styleUrl: './chp-10.component.css'
})
export class Chp10Component {

  // NOTE:
  // THE DATATYPE RULES ARE APPLIED TO BOTH, PROPERTY AND VARIABLES

  // Here, name is a PROPERTY, because it is defined inside a class
  name: string | number | boolean = "Nikhil";

  // Here, any helps to assign any datatype value
  other: any = 123;

  updateName() {
    // Here, newName is a VARIABLE, because is defiend inside a function
    let newName: string = "Chavan"

    // Here, name can be assigned a number, because it is string, boolean and number
    this.name = 20;

    // Here, name can be assigned a boolean, because it is string, boolean and number
    this.name = true;    

    // Since the data type of other is any, you can assign any value to it
    this.other = "Nikhil";
    this.other = 456;
    this.other = true;
    this.other = {};
  }

  sum(a: any, b: any) {
    console.log("Sum of "+a+" and "+b+" is "+(a+b));
  }
}
