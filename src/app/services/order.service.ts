import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  private orders = [];

  constructor() { }
  
  public setOrder(order) {
    this.orders.push(order);
  }

  public getOrders() {
    return this.orders;
  }

  public filterByUserName(value) {
    return this.orders.filter(order => order.user.includes(value));
  }

  getTotalOrderCost(orders) {
    return orders.reduce((total, order) => total + order.totalPrice, 0);
  }
}
