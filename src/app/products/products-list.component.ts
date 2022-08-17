import { Component, OnInit } from "@angular/core";
import { IProduct } from "./product";

@Component({
    selector: 'pm-products',
    templateUrl: './products-list.component.html',
    styleUrls: ['./products-list.component.css']
})
export class ProductsListComponent implements OnInit{
    pageTitle: string = 'Product List';
    imageWidth = 50;
    imageMargin = 2;
    showImage: boolean = false;

    private _listFilter: string = '';

    get listFilter(): string {
      return this._listFilter;
    }

    set listFilter(value: string) {
      this._listFilter = value;
      console.log('In listFilter setter', value);
      this.filteredProducts = this.performFilter();
    }
    
    filteredProducts: IProduct[] = [];
    products: IProduct[] = [
        {
          "productId": 1,
          "productName": "Leaf Rake",
          "productCode": "GDN-0011",
          "releaseDate": "March 19, 2021",
          "description": "Leaf rake with 48-inch wooden handle.",
          "price": 19.95,
          "starRating": 3.2,
          "imageUrl": "assets/images/leaf_rake.png"
        },
        {
          "productId": 2,
          "productName": "Garden Cart",
          "productCode": "GDN-0023",
          "releaseDate": "March 18, 2021",
          "description": "15 gallon capacity rolling garden cart",
          "price": 32.99,
          "starRating": 4.2,
          "imageUrl": "assets/images/garden_cart.png"
        }
    ];

    ngOnInit(): void {
      this.listFilter = '';
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