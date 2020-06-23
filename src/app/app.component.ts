import { Component } from '@angular/core';
import { User } from './address-card/user.model';
import { ApiService } from './api.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  name = 'my-dream';
  inputText: string = "Enter Text"

  apiService: ApiService;
  routes = [
    { linkName:"Home", url:"home" },
    { linkName:"Settings",url:"settings" },
  ];

  constructor(private http: HttpClient) {



    this.apiService = new ApiService();

  }

  ngOnInit(): void {
    let me = this.http.get("https://api.github.com/users/jhonsnoww");
    me.subscribe((response) => console.log(response))
  }
}


