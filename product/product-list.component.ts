import { Component, OnInit } from '@angular/core';
import {Product} from './product'
@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.html']
})
export class ProductdComponent implements OnInit {
    products: Product[]
  constructor() { 
    this.products = []
    this.products.push({
        name: 'ส้มโอ',
        price: 300
    });
    this.products.push({
      name: 'ส้มโอ',
      price: 3020
  });
}
    ngOnInit() {
       
    }
}
