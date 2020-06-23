import { Component } from '@angular/core';
import { User } from './address-card/user.model';
import { title } from 'process';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  name = 'my-dream';
  inputText: string = "Enter Text"
  user: User;

  constructor() {
    this.user = new User();
    this.user.name = "Foo Bar",
      this.user.title = "Front End Developer",
      this.user.address = "Ma Har Aung Myae",
      this.user.phone = [
        "123,443,553"
      ]

  }
}


