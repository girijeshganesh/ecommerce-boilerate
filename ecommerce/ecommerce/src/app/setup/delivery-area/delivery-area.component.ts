import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { AddDeliveryAreaComponent } from '../add-delivery-area/add-delivery-area.component';
import { UploadDeliveryAreaComponent } from '../upload-delivery-area/upload-delivery-area.component';

@Component({
  selector: 'app-delivery-area',
  templateUrl: './delivery-area.component.html',
  styleUrls: ['./delivery-area.component.scss']
})
export class DeliveryAreaComponent implements OnInit {

  constructor(private router: Router, public dialog: MatDialog) { }

  ngOnInit(): void {
  }
  back() {
    this.router.navigate(['setup/location/delivery'])
  }
  addArea(): void {
    const dialogRef = this.dialog.open(AddDeliveryAreaComponent, {
      width: '500px',
    });

    dialogRef.afterClosed().subscribe(result => {
    });
  }
  uploadArea(): void {
    const dialogRef = this.dialog.open(UploadDeliveryAreaComponent, {
      width: '500px',
    });

    dialogRef.afterClosed().subscribe(result => {
    });
  }
}
