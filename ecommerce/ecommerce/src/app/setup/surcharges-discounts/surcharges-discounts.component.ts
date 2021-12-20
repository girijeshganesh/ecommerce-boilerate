import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { AddItemDiscountComponent } from '../add-item-discount/add-item-discount.component';
import { AddOrderDiscountComponent } from '../add-order-discount/add-order-discount.component';
import { AddSurchargeComponent } from '../add-surcharge/add-surcharge.component';

@Component({
  selector: 'app-surcharges-discounts',
  templateUrl: './surcharges-discounts.component.html',
  styleUrls: ['./surcharges-discounts.component.scss']
})
export class SurchargesDiscountsComponent implements OnInit {

  constructor(private router: Router, public dialog: MatDialog) { }

  ngOnInit(): void {
  }
  addSurcharge(): void {
    const dialogRef = this.dialog.open(AddSurchargeComponent, {
      width: '500px',
    });

    dialogRef.afterClosed().subscribe(result => {
    });
  }
  addOrderDiscount(): void {
    const dialogRef = this.dialog.open(AddOrderDiscountComponent, {
      width: '500px',
    });

    dialogRef.afterClosed().subscribe(result => {
    });
  }
  addItemDiscount(): void {
    const dialogRef = this.dialog.open(AddItemDiscountComponent, {
      width: '500px',
    });

    dialogRef.afterClosed().subscribe(result => {
    });
  }
  back() {
    this.router.navigate(['setup/location/menuManagement'])
  }
}
