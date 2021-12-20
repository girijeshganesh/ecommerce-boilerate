import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-add-item-discount',
  templateUrl: './add-item-discount.component.html',
  styleUrls: ['./add-item-discount.component.scss']
})
export class AddItemDiscountComponent implements OnInit {
  constructor(public dialog: MatDialog, public dialogRef: MatDialogRef<AddItemDiscountComponent>) { }

  ngOnInit(): void {
  }
 close() {
  this.dialogRef.close();
 }
}
