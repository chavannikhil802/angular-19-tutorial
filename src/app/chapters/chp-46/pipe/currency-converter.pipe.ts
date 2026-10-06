import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'currencyConverter'
})
export class CurrencyConverterPipe implements PipeTransform {

  transform(value: number, ...args: number[]): unknown {

    if(args.length > 0) {
      let [input] = args
      return value * input;
    }
    else {
      return value*1;
    }
  }

}
