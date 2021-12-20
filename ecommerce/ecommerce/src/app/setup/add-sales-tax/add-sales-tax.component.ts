import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-add-sales-tax',
  templateUrl: './add-sales-tax.component.html',
  styleUrls: ['./add-sales-tax.component.scss']
})
export class AddSalesTaxComponent implements OnInit {

  constructor(public dialog: MatDialog, public dialogRef: MatDialogRef<AddSalesTaxComponent>) { }

  ngOnInit(): void {
  }
 close() {
  this.dialogRef.close();
 }
}
