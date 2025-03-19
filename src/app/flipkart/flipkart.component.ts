import { Component } from '@angular/core';

@Component({
  selector: 'app-flipkart',
  templateUrl: './flipkart.component.html',
  styleUrls: ['./flipkart.component.css']
})
export class FlipkartComponent {
    productList = [
      { name: 'Mobile Case', price: 100, rating: 4.5, freeDelivery: false },
      { name: 'Cap', price: 200, rating: 4.0, freeDelivery: true },
      { name: 'Shirt', price: 500, rating: 3.5, freeDelivery: true },
      { name: 'Phone', price: 20000, rating: 5, freeDelivery: true }
    ];
  
    deleteItem(index: number) {
      this.productList.splice(index, 1);
    }
  }



