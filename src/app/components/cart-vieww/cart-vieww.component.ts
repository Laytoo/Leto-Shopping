import { Component, Input, OnInit } from '@angular/core';
import { ProductModel } from 'src/app/models/product-model';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-cart-vieww',
  templateUrl: './cart-vieww.component.html',
  styleUrls: ['./cart-vieww.component.css']
})
export class CartViewwComponent implements OnInit {

  @Input('prod') productsInCart: ProductModel[] = [];

  constructor(private cartService: CartService) { }

  ngOnInit() {}

  updateQuantity(p: ProductModel, ev: any, index: number) {
    const updatedInCartValue = ev.target.value;
    this.cartService.updateQuantity(index, updatedInCartValue);
  }

  removeItemFromCart(prod: ProductModel) {
    this.productsInCart = this.cartService.removeFromCart(prod);
  }

}
