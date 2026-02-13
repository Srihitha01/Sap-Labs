import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-order-success',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './order-success.component.html',
  styleUrls: ['./order-success.component.css']
})
export class OrderSuccessComponent {

  items: any[] = [];
  total: number = 0;
  paymentMethod: string = '';
  orderId: string = '';
  orderTime: string = '';

  constructor(private cartService: CartService) {

    const order = this.cartService.getOrder();

    if (order) {
      this.items = order.items;
      this.total = order.total;
      this.paymentMethod = order.paymentMethod;
      this.orderId = order.orderId;
      this.orderTime = order.orderTime;
    }
  }
}
