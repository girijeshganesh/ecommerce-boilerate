import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu-management',
  templateUrl: './menu-management.component.html',
  styleUrls: ['./menu-management.component.scss']
})
export class MenuManagementComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  location() {
    this.router.navigate(['setup/editLocation'])
  }
  subDiscount() {
    this.router.navigate(['setup/location/menuManagement/subchargesDiscount'])
  }
  tax() {
    this.router.navigate(['setup/location/menuManagement/taxRates'])
  }
  menu() {
    this.router.navigate(['setup/location/menuManagement/menuInner'])
  }
}
