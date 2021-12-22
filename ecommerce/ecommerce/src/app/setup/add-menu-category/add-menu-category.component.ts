import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-add-menu-category',
  templateUrl: './add-menu-category.component.html',
  styleUrls: ['./add-menu-category.component.scss']
})
export class AddMenuCategoryComponent implements OnInit {
  constructor(public dialog: MatDialog, public dialogRef: MatDialogRef<AddMenuCategoryComponent>) { }

  ngOnInit(): void {
  }
 close() {
  this.dialogRef.close();
 }
}
