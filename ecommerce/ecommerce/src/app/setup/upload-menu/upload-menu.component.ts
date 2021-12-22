import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-upload-menu',
  templateUrl: './upload-menu.component.html',
  styleUrls: ['./upload-menu.component.scss']
})
export class UploadMenuComponent implements OnInit {

  constructor(public dialog: MatDialog, public dialogRef: MatDialogRef<UploadMenuComponent>) { }

  ngOnInit(): void {
  }
 close() {
  this.dialogRef.close();
 }
}
