import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-delivery-settings',
  templateUrl: './delivery-settings.component.html',
  styleUrls: ['./delivery-settings.component.scss']
})
export class DeliverySettingsComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  location() {
    this.router.navigate(['setup/editLocation'])
  }
}
