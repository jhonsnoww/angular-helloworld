import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-date',
  templateUrl: './date.component.html',
  styleUrls: ['./date.component.css']
})
export class DateComponent implements OnInit {

  today: string;

  constructor() {

    setInterval(() => {

      let currentDate = new Date();
      this.today = currentDate.toDateString() + '  ' + currentDate.toLocaleTimeString();
    }, 1000)



  }

  ngOnInit(): void {
  }

  addTwoNumber(a:number,b:number){
    return a + b;
  }

}
