import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { AddGroupComponent } from '../add-group/add-group.component';

@Component({
  selector: 'app-edit-menu-item',
  templateUrl: './edit-menu-item.component.html',
  styleUrls: ['./edit-menu-item.component.scss']
})
export class EditMenuItemComponent implements OnInit {
  
  constructor(private router: Router, public dialog: MatDialog) { }

  ngOnInit(): void {
  }
  back() {
    this.router.navigate(['setup/menuSetup']) 
  }
  addGroup(): void {
    const dialogRef = this.dialog.open(AddGroupComponent, {
      width: '500px',
    });

    dialogRef.afterClosed().subscribe(result => {
    });
  }
}
