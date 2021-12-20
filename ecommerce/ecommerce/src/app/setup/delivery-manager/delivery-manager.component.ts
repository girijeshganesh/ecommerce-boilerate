import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-delivery-manager',
  templateUrl: './delivery-manager.component.html',
  styleUrls: ['./delivery-manager.component.scss']
})
export class DeliveryManagerComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  back() {
    this.router.navigate(['setup/location/delivery'])
  }
}
