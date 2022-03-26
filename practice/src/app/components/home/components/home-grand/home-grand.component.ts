import { Component, Injectable, InjectionToken, Injector, OnInit } from '@angular/core';

@Injectable()
class Product {
  constructor(private name: string, private color:  string) {}
}

class PurchaseOrder {
  private amount: number;
  constructor(private product: Product) {
    this.product = new Product('miproduct', 'black');
  }
}

@Component({
  selector: 'app-home-grand',
  templateUrl: './home-grand.component.html',
  styleUrls: ['./home-grand.component.css']
})
export class HomeGrandComponent implements OnInit {
  obj = { productId: 2, productName: 'xx', model: 's', type: 'all'}
  date: Date;
  price: number;
  data = [1, 2, 3, 4, 5]

  constructor() { }

  ngOnInit() {
    this.date = this.minusDays(new Date(), 60);
    this.price = 123.32;
    const token = new InjectionToken<string>('baseUrl');
    const injector = Injector.create({
      providers: [
        {
          provide: Product,
          useFactory: () => {
            return new Product('big', 'red')
          },
          deps: []
        },
        {
          provide: PurchaseOrder,
          useClass: PurchaseOrder,
          deps: [ Product ]
        },
        {
          provide: token,
          useValue: 'http://localhost'
        }
      ]
    });
    console.log(injector.get(Product));
    console.log(injector.get(PurchaseOrder));
    console.log(injector.get(token));
  }

  minusDays(date: Date, days: number) {
    const result = new Date(date);
    result.setDate(result.getDate() - days)
    return result;
  }
}
