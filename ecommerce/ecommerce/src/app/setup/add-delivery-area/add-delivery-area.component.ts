import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-add-delivery-area',
  templateUrl: './add-delivery-area.component.html',
  styleUrls: ['./add-delivery-area.component.scss']
})
export class AddDeliveryAreaComponent implements OnInit {
  constructor(public dialog: MatDialog, public dialogRef: MatDialogRef<AddDeliveryAreaComponent>) { }

  ngOnInit(): void {
  }
 close() {
  this.dialogRef.close();
 }
}
