import { Component } from "@angular/core";

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  productList = [
    { name: "Catalyst 2960", price: 965 },
    { name: "Windows Server 2019", price: 149.99 },
    { name: "Cisco SFP-H10GB-CU5M", price: 15 }
  ];
  cartProductList = [];

  addProductToCart(product) {
    const productExistInCart = this.cartProductList.find(
      ({ name }) => name === product.name
    ); // find product by name
    if (!productExistInCart) {
      this.cartProductList.push({ ...product, num: 1 }); // enhance "porduct" opject with "num" property
      return;
    }
    productExistInCart.num += 1;
  }
  removeProduct(product) {
    this.cartProductList = this.cartProductList.filter(
      ({ name }) => name !== product.name
    );
  }
}
