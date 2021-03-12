import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { startWith } from 'rxjs/operators';
import { OrderService } from '../services/order.service';

const prices = {
  bun: 5,
  salad: 5,
  cheese: 1,
  cutlets: 2
};

@Component({
  selector: 'app-orders-form',
  templateUrl: './orders-form.component.html',
  styleUrls: ['./orders-form.component.scss']
})
export class OrdersFormComponent implements OnInit {
  public orderForm = new FormGroup({
    user: new FormControl('', [Validators.required]),
    buns: new FormControl(2, [Validators.required]),
    salad: new FormControl(''),
    cheese: new FormControl(0),
    cutlets: new FormControl(0)
  });

  public totalPrice: number = 0;

  constructor(private router: Router, private orderService: OrderService) { }

  ngOnInit(): void {
    this.orderForm.valueChanges
    .pipe(startWith(this.orderForm.value))
    .subscribe(data => {
      this.totalPrice = 
        (data.buns * prices.bun)
        + (data.salad === 'yes' ? 5 : 0 )
        + (data.cheese * prices.cheese)
        + (data.cutlets * prices.cutlets);
    });
  }

  public submitOrder() {
    const orderData = this.orderForm.value;
    this.orderService.setOrder({ ...orderData, totalPrice: this.totalPrice });
    this.router.navigate(['order-details']);
  }

}
