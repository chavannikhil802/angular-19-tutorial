import { Component } from '@angular/core';
import { CurrencyConverterPipe } from './pipe/currency-converter.pipe';

@Component({
  selector: 'app-chp-46',
  imports: [
    CurrencyConverterPipe
  ],
  templateUrl: './chp-46.component.html',
  styleUrl: './chp-46.component.css'
})
export class Chp46Component {

  amount: number = 100;
}
