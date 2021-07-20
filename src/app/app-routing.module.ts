import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {ProductDetailComponent} from './products/product-detail/product-detail.component';
import {ProductsComponent} from './products/product-list/products.component';
import {ProductCreateComponent} from './products/product-create/product-create.component';
import {ProductEditComponent} from './products/product-edit/product-edit.component';


const routes: Routes = [
  {
    path: '',
    component: ProductsComponent
  },
  {
    path: 'products/:id',
    component: ProductDetailComponent
  },
  {
    path: 'create',
    component: ProductCreateComponent
  },
  {
    path: 'products/edit/:id',
    component: ProductEditComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
