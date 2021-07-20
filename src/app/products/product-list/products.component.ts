import {Component, OnInit} from '@angular/core';
import {Product} from '../../product';
import {ProductService} from '../../product.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  product: Product[] = [];

  constructor(private productService: ProductService,
              private activateRoute: ActivatedRoute) {
    this.activateRoute.paramMap.subscribe(paramMap => {
      const id = paramMap.get('id');
    });
  }

  ngOnInit() {
    this.getAllProduct();
  }

  private getAllProduct() {
    this.productService.getAll().subscribe(products => {
      this.product = products;
    }, e => console.log(e));
  }

  deleteById(id) {
    this.productService.delete(id).subscribe(() => {
      this.getAllProduct();
      alert('success');
    });
  }
}
