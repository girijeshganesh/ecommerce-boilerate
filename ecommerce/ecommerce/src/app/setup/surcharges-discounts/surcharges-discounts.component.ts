import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-surcharges-discounts',
  templateUrl: './surcharges-discounts.component.html',
  styleUrls: ['./surcharges-discounts.component.scss']
})
export class SurchargesDiscountsComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  back() {
    this.router.navigate(['setup/location/menuManagement'])
  }
}
