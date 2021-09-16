import { Component, OnInit } from '@angular/core';
import * as $ from "jquery";
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  constructor() { }

  ngOnInit(): void {
  }
  showAddToCartModal: any;
  addOrder() {
    $("#item_list").toggleClass("active");
    $("#no-order").removeClass("active");
  }
  cancelOrder() {
    $("#no-order").toggleClass("active");
    $("#item_list").removeClass("active");
  }
  placeOrder() {
    $("#amount_to_Pay").toggleClass("active");
    $("#item_list").removeClass("active");
  }
  editorder() {
    $("#item_list").toggleClass("active");
    $("#amount_to_Pay").removeClass("active");
  }
  addToCart() {
    this.showAddToCartModal = true;
  }
  close() {
  this.showAddToCartModal = false;
  }
}
