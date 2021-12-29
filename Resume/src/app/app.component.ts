import { Component, ViewChild, Output, EventEmitter } from '@angular/core';
import { UserService } from './user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  title = 'Resume';
  isSelected : Boolean = false;
  @Output()
  Onselected: EventEmitter<AppComponent> = new EventEmitter();
  constructor(private user : UserService){}
  doSomething(){
   this.isSelected = this.user.readMore(this.isSelected)
}
}
