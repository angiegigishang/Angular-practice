import { Component, Injectable, InjectionToken, Injector, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-grand',
  templateUrl: './home-grand.component.html',
  styleUrls: ['./home-grand.component.css']
})
export class HomeGrandComponent implements OnInit {
  obj = { productId: 2, productName: 'mobile', modal: 's', type: 'quanmian'};
  date: Date;
  price: number;
  data: [1 ,2, 3, 4, 5];

  ngOnInit() {
    this.date = new Date()
    this.price = 123.324534
    this.data = [1, 2, 3, 4, 5]
  }

}
