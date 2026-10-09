import { Component } from '@angular/core';
import { Chp50ProductsService } from './services/chp-50-products.service';

@Component({
  selector: 'app-chp-50',
  imports: [],
  templateUrl: './chp-50.component.html',
  styleUrl: './chp-50.component.css'
})
export class Chp50Component {

  productList: any;

  constructor(private productService: Chp50ProductsService) {}

  ngOnInit() {
    this.productService.getProductList().subscribe((data: any) => {
      console.log(data);
      this.productList = data.products;
    })
  }
}
