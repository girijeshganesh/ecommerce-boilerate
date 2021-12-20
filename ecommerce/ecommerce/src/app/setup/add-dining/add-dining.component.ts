import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-add-dining',
  templateUrl: './add-dining.component.html',
  styleUrls: ['./add-dining.component.scss']
})
export class AddDiningComponent implements OnInit {
  constructor(public dialog: MatDialog, public dialogRef: MatDialogRef<AddDiningComponent>) { }

  ngOnInit(): void {
  }
 close() {
  this.dialogRef.close();
 }
}
