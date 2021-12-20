import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
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
  openDialog(): void {
    const dialogRef = this.dialog.open(AddSurchargeComponent, {
      width: '250px',
    });

    dialogRef.afterClosed().subscribe(result => {
    });
  }
  back() {
    this.router.navigate(['setup/location/menuManagement'])
  }
}
