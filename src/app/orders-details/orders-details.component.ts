import { Component, OnInit } from '@angular/core';
import { OrderService } from '../services/order.service';

@Component({
  selector: 'app-orders-details',
  templateUrl: './orders-details.component.html',
  styleUrls: ['./orders-details.component.scss']
})
export class OrdersDetailsComponent implements OnInit {

  public orders = [];

  orderTotal = 0;

  constructor(public orderService: OrderService) { }

  ngOnInit(): void {
    this.orders = this.orderService.getOrders();
    this.orderTotal = this.orderService.getTotalOrderCost(this.orders);
  }

  handleChange({ target : { value }}) {
    this.orders = this.orderService.filterByUserName(value);
    this.orderTotal = this.orderService.getTotalOrderCost(this.orders);
  }

}
