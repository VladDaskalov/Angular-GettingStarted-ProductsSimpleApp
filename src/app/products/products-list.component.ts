import { Component, OnDestroy, OnInit } from "@angular/core";
import { Subscription } from "rxjs";
import { IProduct } from "./product";
import { ProductsService } from "./products.service";

@Component({
    //selector: 'pm-products',
    templateUrl: './products-list.component.html',
    styleUrls: ['./products-list.component.css']
})
export class ProductsListComponent implements OnInit, OnDestroy{
    pageTitle: string = 'Product List';
    imageWidth = 50;
    imageMargin = 2;
    showImage: boolean = false;
    errorMessage = '';

    productsServiceSub!: Subscription;
    products: IProduct[] = [];
    filteredProducts: IProduct[] = [];

    private _listFilter: string = '';

    get listFilter(): string {
      return this._listFilter;
    }

    set listFilter(value: string) {
      this._listFilter = value;
      console.log('In listFilter setter', value);
      this.filteredProducts = this.performFilter();
    }

    constructor(private productsService: ProductsService){
    }

    ngOnInit(): void {
      this.listFilter = '';
      this.productsServiceSub = this.productsService.getProducts().subscribe({
        next: products => {
          this.products = products;
          this.filteredProducts = this.products;
        },
        error: err => this.errorMessage = err
      });
    }

    ngOnDestroy(): void {
      this.productsServiceSub.unsubscribe();
    }
 
    toggleImage(){
      this.showImage = !this.showImage;
    }

    performFilter(): IProduct[] {
      return this.products.filter((product: IProduct) =>
          product.productName.toLocaleLowerCase().includes(this.listFilter.toLocaleLowerCase()));
    }

    onRatingClicked(message: string): void {
      window.alert(message);
    }
}