import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-printers',
  templateUrl: './printers.component.html',
  styleUrls: ['./printers.component.scss']
})
export class PrintersComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  location() {
    this.router.navigate(['setup/editLocation'])
  }
}
