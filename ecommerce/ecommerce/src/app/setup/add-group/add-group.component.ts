import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-add-group',
  templateUrl: './add-group.component.html',
  styleUrls: ['./add-group.component.scss']
})
export class AddGroupComponent implements OnInit {
  constructor(public dialog: MatDialog, public dialogRef: MatDialogRef<AddGroupComponent>) { }

  ngOnInit(): void {
  }
 close() {
  this.dialogRef.close();
 }
}
