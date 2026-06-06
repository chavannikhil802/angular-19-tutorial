import { Component } from '@angular/core';

@Component({
  selector: 'app-chp-18',
  imports: [],
  templateUrl: './chp-18.component.html',
  styleUrl: './chp-18.component.css'
})
export class Chp18Component {

  users=["Nikhil", "Sahil", "Umesh", "Shreyas", "Abhishek", "Ketan", "Vaibhav"];

  students = [
    {name: 'Nikhil', age: '33', email: 'nchavan@lsdb.com'},
    {name: 'Sahil', age: '23', email: 'sgadekar@lsdb.com'},
    {name: 'Umesh', age: '43', email: 'uwanjale@lsdb.com'},
    {name: 'Shreyas', age: '23', email: 'smore@lsdb.com'},
    {name: 'Ketan', age: '40', email: 'kdeore@lsdb.com'},
    {name: 'Vaibhav', age: '30', email: 'vaibhavl@lsdb.com'}
  ]
}
