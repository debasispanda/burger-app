import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OrdersDetailsComponent } from './orders-details/orders-details.component';
import { OrdersFormComponent } from './orders-form/orders-form.component';

const routes: Routes = [
  {
    path: 'new-order',
    component: OrdersFormComponent
  },
  {
    path: 'order-details',
    component: OrdersDetailsComponent
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'new-order'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
