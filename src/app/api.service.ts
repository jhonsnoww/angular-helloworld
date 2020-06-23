import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root'
})
export class ApiService {

  printToConsole(arg:string){
    console.log(arg);
  }
  constructor() { }
}
