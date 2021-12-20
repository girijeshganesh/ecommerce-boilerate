import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { AddLocationComponent } from '../add-location/add-location.component';

@Component({
  selector: 'app-location',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.scss']
})
export class LocationComponent implements OnInit {

  constructor(private router: Router, public dialog: MatDialog) { }

  ngOnInit(): void {
  }
  edit() {
    this.router.navigate(['setup/editLocation']) 
  }
  addLocation(): void {
    const dialogRef = this.dialog.open(AddLocationComponent, {
      width: '500px',
    });

    dialogRef.afterClosed().subscribe(result => {
    });
  }
}