import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-add-order-discount',
  templateUrl: './add-order-discount.component.html',
  styleUrls: ['./add-order-discount.component.scss']
})
export class AddOrderDiscountComponent implements OnInit {

  constructor(public dialog: MatDialog, public dialogRef: MatDialogRef<AddOrderDiscountComponent>) { }

  ngOnInit(): void {
  }
 close() {
  this.dialogRef.close();
 }
}
