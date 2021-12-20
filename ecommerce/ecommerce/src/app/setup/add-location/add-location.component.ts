import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-add-location',
  templateUrl: './add-location.component.html',
  styleUrls: ['./add-location.component.scss']
})
export class AddLocationComponent implements OnInit {

  constructor(public dialog: MatDialog, public dialogRef: MatDialogRef<AddLocationComponent>) { }

  ngOnInit(): void {
  }
 close() {
  this.dialogRef.close();
 }
}
