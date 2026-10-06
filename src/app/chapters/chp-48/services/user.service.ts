import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

    constructor() { 
      console.log("Product Service");
    }

    getUserData() {
      return [
        {name: "Nikhil", age: 34, email: "nikhil@test.com"},
        {name: "Neha", age: 31, email: "neha@test.com"},
        {name: "Narendra", age: 67, email: "narendra@test.com"},
        {name: "Savita", age: 57, email: "savita@test.com"}
      ]
    }
}
