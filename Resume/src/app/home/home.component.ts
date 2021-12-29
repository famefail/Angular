import { templateJitUrl } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
click : Boolean
more = "hide"

   constructor(private myuser : UserService) { }
  doSomething(){
    this.click = this.myuser.readMore(this.click)
    if(this.myuser.readMore(this.click) == false){
      this.myuser.readMore(this.click)
      this.more = "more"
    }
    else {

      this.myuser.readMore(this.click)
      this.more = "hide"
    
    }
 } 
 
  ngOnInit(): void {
  }
}
