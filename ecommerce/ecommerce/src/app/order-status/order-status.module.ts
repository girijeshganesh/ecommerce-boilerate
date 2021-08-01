import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrderStatusComponent } from './order-status.component';
import { SharedModule } from '../shared/shared.module';
import { OrderStatusRoutingModule } from './order-status-routing.module';



@NgModule({
  declarations: [
    OrderStatusComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    OrderStatusRoutingModule
  ]
})
export class OrderStatusModule { }
