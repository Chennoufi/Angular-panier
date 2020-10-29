import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'product-list',
  template: `
  <h1>Produits :</h1>
  <product *ngFor="let product of products" [product]="product" (productAdded)="addProductToCart($event)"></product>
  `,
  styles: [`:host{border: 5px solid #000;}`]
})
export class ProductListComponent  {
  @Input() products: any[];
  @Output() productAdded = new EventEmitter();
  addProductToCart(product) {
    this.productAdded.emit(product);
  }
}
