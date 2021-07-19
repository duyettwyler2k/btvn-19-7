import {Component, OnInit} from '@angular/core';
import {Product} from '../product';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  product: Product[] = [{
    id: 1,
    name: 'Mada cx5',
    price: 32432432,
    description: 'do biet day'
  }, {
    id: 2,
    name: 'Lexus',
    price: 3432432,
    description: 'asas'
  }];

  constructor() {
  }

  ngOnInit() {
  }

}
