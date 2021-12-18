import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-inner-menu',
  templateUrl: './inner-menu.component.html',
  styleUrls: ['./inner-menu.component.scss']
})
export class InnerMenuComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  back() {
    this.router.navigate(['setup/location/menuManagement'])
  }
}
