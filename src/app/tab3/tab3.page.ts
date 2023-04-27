import { Component, OnInit } from '@angular/core';
import { CartModel } from '../models/CartModel';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page implements OnInit {

  cart: CartModel;
  total: number;

  constructor(private cartService:CartService) {}

  ngOnInit() {
    this.cartService.cartData.subscribe(data => {
      this.cart = data;
    });

    this.cartService.cartTotal.subscribe(total => this.total = total);
  }
}
