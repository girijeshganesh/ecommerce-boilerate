import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-location-staff',
  templateUrl: './location-staff.component.html',
  styleUrls: ['./location-staff.component.scss']
})
export class LocationStaffComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  back() {
    this.router.navigate(['setup/location'])
  }
}
