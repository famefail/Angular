import { Injectable, ViewChild } from '@angular/core';
import { AppComponent } from './app.component';

@Injectable({
  providedIn: 'root'
})

export class UserService {
@ViewChild('myapp')
myapp : AppComponent
  constructor(){ }
  getProduct(){
   alert("it work")
  }

score = 0
  readMore(more:Boolean){
    this.score++;
   if(this.score%2 == 0){
    return false
   }
   else if(this.score%2 !== 0){
     return true
   }
  
  }

}
