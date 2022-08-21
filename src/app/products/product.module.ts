import { NgModule } from '@angular/core';
import { ProductsListComponent } from './products-list.component';
import { ProductDetailsComponent } from './product-details.component';
import { RouterModule } from '@angular/router';
import { ProductDetailsGuard } from './product-details.guard';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    ProductsListComponent,
    ProductDetailsComponent
  ],
  imports: [
    RouterModule.forChild([
      { path: 'products', component: ProductsListComponent },
      { 
        path: 'products/:id',
        canActivate: [ProductDetailsGuard ],
        component: ProductDetailsComponent 
      }
    ]),
    SharedModule
  ]
})
export class ProductModule { }
