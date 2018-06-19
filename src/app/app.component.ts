import { Component, OnInit } from '@angular/core';
import { Product } from './product';
import { ProductsService } from './products.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  products: Product[];
  
  constructor(private productsService: ProductsService) { }
  
  ngOnInit() {
    this.getProducts();
  }
  
  getProducts(): void {
    this.productsService.getProducts()
      .subscribe(products => this.products = products)
  }
}
