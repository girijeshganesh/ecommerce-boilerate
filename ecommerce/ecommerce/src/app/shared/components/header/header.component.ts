import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import * as $ from "jquery";
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  backToHome() {
    this.router.navigate(['home'])
  }
  transaction() {
    this.router.navigate(['transactions'])
  }
  booking() {
    this.router.navigate(['booking'])
  }
  orderStatus() {
    this.router.navigate(['order-status'])
  }
  backToDashboard() {
    this.router.navigate(['dashboard'])
  }
  menu() {
    $("#header").toggleClass("active");
  }
  people() {
    this.router.navigate(['people'])
  }
  wallet() {
    this.router.navigate(['wallet'])
  }
  items() {
    this.router.navigate(['items'])
  }
  reviews() {
    this.router.navigate(['reviews'])
  }
  authentication() {
    this.router.navigate(['authentication'])
  }
  setting() {
    this.router.navigate(['setting'])
  }
  support() {
    this.router.navigate(['support'])
  }
  terms() {
    this.router.navigate(['terms'])
  }
  login() {
    this.router.navigate([''])
  }
}
