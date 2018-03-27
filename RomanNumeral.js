import _ from 'lodash';

/*
* Define constants that we can use to lookup the values
* Must be in reverse order for when we loop, start with largest first
*/
const DECIMALS = [ 1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1 ];
const NUMERALS = [ "M", "CM","D","CD","C", "XC", "L", "XL", "X","IX","V","IV","I" ];

export default class RomanNumeralGenerator {

  constructor(number) {
    this.number = number;
    this.numerals = NUMERALS;
    this.decimals = DECIMALS;
  }

  /*
  * RomanNumeralGenerator
  *
  * generates a roman numeral when passed an integer
  * for example:
  * 1 = I
  * 5 = V
  * 10 = X
  * 20 = XX
  * 3999 = MMMCMXCIX
  *
  * ToDo: Convert from loops to a more elegant array map solution, its 2018 so lets avoid loops
  * wherever possible!
  *
  */
  generate() {
    let num = this.number;
    let result = '';
    // Loop over the array
    for (let i = 0; i <= DECIMALS.length; i++) {
      // while number is divisible (mod) by decimals
      while (num % DECIMALS[i] < num) {
        // add the current numeral to our result string
        result += NUMERALS[i];
        // remove the current number from our number
        num -= DECIMALS[i];
      }
    }
    console.log(result);
    return result;
  }
}
