import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  private cartItems = new BehaviorSubject<any[]>([]);
  cart$ = this.cartItems.asObservable();

  private paymentMethod: string = '';
  private lastOrder: any = null;

  constructor() {}

  addToCart(item: any) {
    const current = this.cartItems.getValue();

    const existing = current.find(i => i.name === item.name);

    if (existing) {
      existing.quantity += 1;
    } else {
      current.push({ ...item, quantity: 1 });
    }

    this.cartItems.next([...current]);
  }

  removeFromCart(index: number) {
    const current = this.cartItems.getValue();
    current.splice(index, 1);
    this.cartItems.next([...current]);
  }


  updateQuantity(index: number, quantity: number) {
    const current = this.cartItems.getValue();
    current[index].quantity = quantity;
    this.cartItems.next([...current]);
  }

  clearCart() {
    this.cartItems.next([]);
    this.paymentMethod = '';
  }

  getCurrentItems() {
    return this.cartItems.getValue();
  }

  setPaymentMethod(method: string) {
    this.paymentMethod = method;
  }

  getPaymentMethod() {
    return this.paymentMethod;
  }

  saveOrder(order: any) {
    this.lastOrder = order;
  }

  getOrder() {
    return this.lastOrder;
  }
}
