import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-setup',
  templateUrl: './setup.component.html',
  styleUrls: ['./setup.component.scss']
})
export class SetupComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  location() {
    this.router.navigate(['setup/location'])
  }
  staff() {
    this.router.navigate(['setup/staff'])
  }
}
