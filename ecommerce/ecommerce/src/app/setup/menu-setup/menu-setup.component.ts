import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { AddMenuCategoryComponent } from '../add-menu-category/add-menu-category.component';
import { ManageMenuComponent } from '../manage-menu/manage-menu.component';
import { UploadMenuComponent } from '../upload-menu/upload-menu.component';

@Component({
  selector: 'app-menu-setup',
  templateUrl: './menu-setup.component.html',
  styleUrls: ['./menu-setup.component.scss']
})
export class MenuSetupComponent implements OnInit {

  constructor(private router: Router,public dialog: MatDialog) { }

  ngOnInit(): void {
  }
  uploadMenu(): void {
    const dialogRef = this.dialog.open(UploadMenuComponent, {
      width: '500px',
    });

    dialogRef.afterClosed().subscribe(result => {
    });
  }
  addCategory(): void {
    const dialogRef = this.dialog.open(AddMenuCategoryComponent, {
      width: '500px',
    });

    dialogRef.afterClosed().subscribe(result => {
    });
  }
  manage(): void {
    const dialogRef = this.dialog.open(ManageMenuComponent, {
      width: '500px',
    });

    dialogRef.afterClosed().subscribe(result => {
    });
  }
  addMenuItem() {
    this.router.navigate(['setup/menuSetup/addNewMenuItem']) 
  }
  edit() {
    this.router.navigate(['setup/menuSetup/editmenuItem'])  
  }
}
