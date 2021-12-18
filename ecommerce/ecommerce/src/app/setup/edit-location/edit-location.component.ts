import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edit-location',
  templateUrl: './edit-location.component.html',
  styleUrls: ['./edit-location.component.scss']
})
export class EditLocationComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  location() {
    this.router.navigate(['setup/location'])
  }
  generalDetails() {
    this.router.navigate(['setup/location/generalDetails'])
  }
  menu() {
    this.router.navigate(['setup/location/menuManagement'])
  }
  staff() {
    this.router.navigate(['setup/location/staff'])
  }
}
