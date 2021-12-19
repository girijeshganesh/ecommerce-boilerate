import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-self-ordering',
  templateUrl: './self-ordering.component.html',
  styleUrls: ['./self-ordering.component.scss']
})
export class SelfOrderingComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  location() {
    this.router.navigate(['setup/editLocation'])
  }
}
