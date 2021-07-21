import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Product} from '../../product';
import {ProductService} from '../../product.service';

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css']
})
export class ProductCreateComponent implements OnInit {
  product: Product = {};
  isSubmitted = false;

  constructor(private productService: ProductService) {
  }

  ngOnInit() {
  }

  createProduct(productForm) {
    this.isSubmitted = true;
    if (productForm.valid) {
      this.productService.save(productForm.value).subscribe(() => {
        alert('success');
      });
    } else {
      alert('Dau vao du lieu khong dung');
    }
  }
}
