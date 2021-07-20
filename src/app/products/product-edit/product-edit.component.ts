import {Component, Input, OnInit} from '@angular/core';
import {Product} from '../../product';
import {ProductService} from '../../product.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css']
})
export class ProductEditComponent implements OnInit {

  product: Product = {};

  constructor(private productService: ProductService,
              private activatedRoute: ActivatedRoute) {
    this.activatedRoute.paramMap.subscribe(paramMap => {
      const id = paramMap.get('id');
      this.getProductById(id);
    });
  }

  ngOnInit() {
  }

  getProductById(id) {
    this.productService.getById(id).subscribe(product => this.product = product);
  }

  updateProduct(id) {
    this.productService.edit(this.product, id).subscribe(() => alert('thanh cong'));
  }

}
