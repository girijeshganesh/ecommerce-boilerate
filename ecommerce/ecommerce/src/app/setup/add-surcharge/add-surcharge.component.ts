import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-add-surcharge',
  templateUrl: './add-surcharge.component.html',
  styleUrls: ['./add-surcharge.component.scss']
})
export class AddSurchargeComponent implements OnInit {

  constructor(public dialog: MatDialog, public dialogRef: MatDialogRef<AddSurchargeComponent>) { }

  ngOnInit(): void {
  }
 close() {
  this.dialogRef.close();
 }
}
