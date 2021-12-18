import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tax-rates',
  templateUrl: './tax-rates.component.html',
  styleUrls: ['./tax-rates.component.scss']
})
export class TaxRatesComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  back() {
    this.router.navigate(['setup/location/menuManagement'])
  }
}
