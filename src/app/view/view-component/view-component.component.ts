import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-view-component',
  templateUrl: './view-component.component.html',
  styleUrls: ['./view-component.component.css']
})
export class ViewComponentComponent implements OnInit {

  userName: string;
  response:any;
  constructor(private http: HttpClient) { }

  ngOnInit(): void {
  }

  search() {
    let me = this.http.get("https://api.github.com/users/" + this.userName);
    me.subscribe((response) =>{this.response = response})
  }

}
