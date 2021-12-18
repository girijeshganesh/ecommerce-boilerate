import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-general-details',
  templateUrl: './general-details.component.html',
  styleUrls: ['./general-details.component.scss']
})
export class GeneralDetailsComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  editLocation() {
    this.router.navigate(['setup/editLocation'])
  }
}
