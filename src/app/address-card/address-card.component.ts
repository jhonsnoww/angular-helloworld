import { Component, OnInit, Input } from '@angular/core';
import { User } from './user.model';

@Component({
  selector: 'app-address-card',
  templateUrl: './address-card.component.html',
  styleUrls: ['./address-card.component.css']
})
export class AddressCardComponent implements OnInit {




  @Input('user') user: User;
  isCollapsed: boolean = true;
 

  constructor() {
    this.user = new User();
    this.user.name = "Foo Bar",
      this.user.title = "Front End Developer",
      this.user.address = "Ma Har Aung Myae",
      this.user.phone = [
        "123,443,553"
      ]

  }
  toggleCollap() {
    this.isCollapsed = !this.isCollapsed;
  }

  ngOnInit(): void {


  }

}
