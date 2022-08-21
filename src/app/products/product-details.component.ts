import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { IProduct } from './product';
import { ProductsService } from './products.service';

@Component({
  //selector: 'pm-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit, OnDestroy {
  pageTitle: string = "Product Details";
  product: IProduct | undefined;
  errorMessage: string = '';
  productsServiceSub!: Subscription;
  

  constructor(private route:ActivatedRoute,
    private router: Router,
    private productsService: ProductsService) { }

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    if (id) {
      this.getProduct(id);
    };
  }

  getProduct(id: Number) {
    this.productsServiceSub = this.productsService.getProduct(id).subscribe({
      next: product => this.product = product,
      error: err => this.errorMessage = err 
    })
  }

  onBack(): void {
    this.router.navigate(['/products']);
  }

  ngOnDestroy(): void {
    this.productsServiceSub.unsubscribe();
  }

}
