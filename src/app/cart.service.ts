import { Product } from './products';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  item: Product[] = [];
  constructor(private http: HttpClient) {}
  getShippingPrices() {
    return this.http.get<{ type: string; price: number }[]>(
      '/assets/shipping.json'
    );
  }
  addToCart(product: Product) {
    this.item.push(product);
  }
  getCartItem() {
    return this.item;
  }
  clearCart() {
    this.item = [];
    return this.item;
  }
}
