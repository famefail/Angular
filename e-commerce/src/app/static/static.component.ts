import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-static',
  templateUrl: './static.component.html',
  styleUrls: ['./static.component.css']
})
export class StaticComponent implements OnInit {

  constructor() { }
  @Input()
score: String
@Input()
text: String
  ngOnInit(): void {
  }

}
